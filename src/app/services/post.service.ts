import { HttpClient } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID, Renderer2, makeStateKey, TransferState } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { isPlatformServer } from '@angular/common';
import { Post } from '../models/post';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environment/enviroment';
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
    private scriptS: ScriptService,
    private transferState: TransferState,
    private markdownS: MarkdownService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  async getPost(title: string, renderer: Renderer2): Promise<Post | null> {
    this.post = this.loadFromTransfareState(title);
    if (!this.post) this.post = await this.loadFromFiles(title);
    if (!this.post) return null;

    this.updateMetaData();
    this.saveTransfereState(title);
    if (this.post.postMeta.hasCodePen) this.scriptS.reloadJsScript(renderer, 'https://cpwebassets.codepen.io/assets/embed/ei.js');
    return this.post;
  }

  private saveTransfereState(title: string) {
    const key = makeStateKey<Post>('post-' + title);
    this.transferState.set(key, this.post);
  }

  private loadFromTransfareState(title: string): Post | null {
    if (isPlatformServer(this.platformId)) return null;
    const key = makeStateKey<Post>('post-' + title);
    return this.transferState.get(key, null);
  }

  private async loadFromFiles(title: string): Promise<Post | null> {
    console.log('load from Files');
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
      const tagsToAdd: any = [
        { property: 'og:title', content: this.post.postMeta.title },
        { property: 'og:type', content: 'article' },
        { property: 'og:url', content: environment.baseUrl + this.router.url },
      ];

      if (this.post.postMeta.author) {
        tagsToAdd.push({ property: 'og:author', content: this.post.postMeta.author });
      }

      if (this.post.postMeta.description) {
        tagsToAdd.push({ property: 'og:description', content: this.post.postMeta.description });
        tagsToAdd.push({ name: 'description', content: this.post.postMeta.description });
      }

      if (this.post.postMeta.keywords) {
        tagsToAdd.push({ name: 'keywords', content: this.post.postMeta.keywords });
      }

      if (this.post.postMeta.image) {
        tagsToAdd.push({
          property: 'og:image',
          content: environment.baseUrl + '/' + this.post.postMeta.image
        });
      }

      this.metaS.addTags(tagsToAdd);
      this.titleS.setTitle(this.post.postMeta.title);
    }
  }
}
