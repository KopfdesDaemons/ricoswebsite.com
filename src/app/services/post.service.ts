import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID, Renderer2, makeStateKey, TransferState } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import * as marked from 'marked';
import { isPlatformServer } from '@angular/common';
import { Post } from '../post';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environment/enviroment';
import { DisqusService } from './disqus.service';
import { ScriptService } from './script.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private post: Post | null | undefined;

  constructor(
    private http: HttpClient,
    private metaS: Meta,
    private titleS: Title,
    private router: Router,
    private disqusS: DisqusService,
    private scriptS: ScriptService,
    private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  async getPost(title: string, renderer: Renderer2): Promise<Post | null> {
    this.post = this.loadFromTranfareState(title);
    if(!this.post) this.post = await this.loadFromFiles(title);
    if(!this.post) return null;

    this.updateMetaData();
    this.saveTransfereState();
    if(this.post.postMeta.title) this.disqusS.loadDisqus(renderer, this.post.postMeta.title);
    if(this.post.postMeta.hasCodePen) this.scriptS.reloadJsScript(renderer, 'https://cpwebassets.codepen.io/assets/embed/ei.js');
    return this.post;
  }

  private saveTransfereState() {
    // Speichern der Daten im TransferState, um sie beim nächsten Laden der Seite zu verwenden
    const key = makeStateKey<Post>('post-' + this.post?.postMeta.title);
    this.transferState.set(key, this.post);
  }

  private loadFromTranfareState(title: string): Post | null {
    // Versuche die Daten aus dem TransferState zu laden
    const key = makeStateKey<Post>('post-' + title);
    return this.transferState.get(key, null);
  }

  private async loadFromFiles(title: string): Promise<Post | null> {
    const baseUrl = isPlatformServer(this.platformId) ? 'http://localhost:4200/' : '/';
    const postMetaUrl = `${baseUrl}assets/posts/${title}/post.json`;
    const contentUrl = `${baseUrl}assets/posts/${title}/content.md`;
    const postImageURL = `/assets/posts/${title}/image.jpg`;

    try {
      const postMeta = await lastValueFrom(this.http.get<any>(postMetaUrl));
      postMeta.hasImage = JSON.parse(postMeta.hasImage);
      postMeta.hasCodePen = JSON.parse(postMeta.hasCodePen || 'false');
      const contentData = await lastValueFrom(this.http.get(contentUrl, { responseType: 'text' }));

      // Alle Links werden so verändert, dass sie im neuen Tab geöffnet werden
      class CustomRenderer extends marked.Renderer {
        override link(href: string, title: string | null | undefined, text: string) {
          return `<a href="${href}" title="${title || ''}" target="_blank">${text}</a>`;
        }
      }
      const md = marked.setOptions({ renderer: new CustomRenderer() });
      const postContent = await md.parse(contentData);

      return new Post(postMeta, postContent, postImageURL);
    } catch (error) {
      if (error instanceof HttpErrorResponse) {
        console.error('HTTP error:', error);
        if (error.status === 404) {
          throw new Error(`Post "${title}" not found at: ${postMetaUrl}`);
        }
      }
      console.error(error);
      return null;
    }
  }

  private updateMetaData(): void {
    if (this.post?.postMeta) {
      this.metaS.addTags([
        { property: 'og:title', content: this.post.postMeta.title },
        { property: 'og:author', content: this.post.postMeta.author },
        { property: 'og:description', content: this.post.postMeta.description },
        { property: 'og:keywords', content: this.post.postMeta.keywords },
        { property: 'og:type', content: 'article' },
        { property: 'og:url', content: environment.baseUrl + this.router.url },
        { property: 'og:robots', content: 'index, follow' },
        { name: 'description', content: this.post.postMeta.description }
      ]);
      if (this.post.postMeta.hasImage) {
        this.metaS.addTag({
          property: 'og:image',
          content:  environment.baseUrl + this.post.postImageURL
        },)
      };
      this.titleS.setTitle(this.post.postMeta.title);
    }
  }
}
