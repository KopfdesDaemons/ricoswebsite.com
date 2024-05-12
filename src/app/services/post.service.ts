import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID, Renderer2, makeStateKey, TransferState } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { isPlatformServer } from '@angular/common';
import { Post } from '../post';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environment/enviroment';
import { DisqusService } from './disqus.service';
import { ScriptService } from './script.service';
import { MarkdownService } from './markdown.service';

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
    private markdownS: MarkdownService,
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
    const key = makeStateKey<Post>('post-' + this.post?.postMeta.title);
    this.transferState.set(key, this.post);
  }

  private loadFromTranfareState(title: string): Post | null {
    const key = makeStateKey<Post>('post-' + title);
    return this.transferState.get(key, null);
  }

  private async loadFromFiles(title: string): Promise<Post | null> {
    const baseUrl = isPlatformServer(this.platformId) ? 'http://localhost:4200/' : '/';
    const contentUrl = `${baseUrl}assets/posts/${title}.md`;

    try {
      const markdownFile = await lastValueFrom(this.http.get(contentUrl, { responseType: 'text' }));
      const postMeta = this.markdownS.extractYamlHeader(markdownFile);
      const markdownBody = this.markdownS.extractBody(markdownFile);
      const postContent = await this.markdownS.parseMarkdown(markdownBody);

      return new Post(postMeta, postContent);
    } catch (error) {
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
      if (this.post.postMeta.image) {
        this.metaS.addTag({
          property: 'og:image',
          content:  environment.baseUrl + '/' + this.post.postMeta.image
        },)
      };
      this.titleS.setTitle(this.post.postMeta.title);
    }
  }
}
