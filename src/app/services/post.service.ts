import { HttpClient } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID, makeStateKey, TransferState } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { isPlatformServer } from '@angular/common';
import { Post } from '../models/post';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environment/enviroment';
import { MarkdownService } from './markdown.service';
import { LanguageService } from './language.service';

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
    private transferState: TransferState,
    private markdownS: MarkdownService,
    private languageS: LanguageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  async getPost(fileName: string): Promise<Post | null> {
    this.post = this.loadPostFromTransfareState(fileName);
    const lang = this.languageS.userLanguage;
    if (!this.post) this.post = await this.loadFromMarkdownFile(fileName, lang);
    if (!this.post) return null;

    this.updateMetaTags();
    this.savePostTransfereState(fileName);
    return this.post;
  }

  private savePostTransfereState(title: string) {
    const key = makeStateKey<Post>('post-' + this.languageS.userLanguage + '-' + title);
    this.transferState.set(key, this.post);
  }

  private loadPostFromTransfareState(title: string): Post | null {
    if (isPlatformServer(this.platformId)) return null;
    const key = makeStateKey<Post>('post-' + this.languageS.userLanguage + '-' + title);
    return this.transferState.get(key, null);
  }

  private async loadFromMarkdownFile(fileName: string, language: string): Promise<Post | null> {
    const baseUrl = isPlatformServer(this.platformId) ? 'http://localhost:4200/' : '/';
    const contentUrl = `${baseUrl}assets/posts/${language}/${fileName}.md`;

    try {
      const markdownFile = await lastValueFrom(this.http.get(contentUrl, { responseType: 'text' }));
      const markdownHeader = this.markdownS.extractYamlHeader(markdownFile);
      const markdownBody = this.markdownS.extractBody(markdownFile);
      const postContent = await this.markdownS.parseMarkdown(markdownBody);

      return new Post(markdownHeader, fileName, postContent);
    } catch (error: any) {
      console.error(error);
      if (error.status === 404 && language !== 'en') {
        return this.loadFromMarkdownFile(fileName, 'en'); // Versuche, den Inhalt auf Englisch zu laden
      }
      return null;
    }
  }

  private updateMetaTags(): void {
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
      this.titleS.setTitle(this.post.postMeta.title ?? 'Ricos Website');
    }
  }

  async loadPostList(language: string): Promise<any> {
    const baseUrl = isPlatformServer(this.platformId) ? 'http://localhost:4200/' : '/';
    const postListURL = `${baseUrl}assets/posts/posts.${language}.json`;

    try {
      const json = await lastValueFrom(this.http.get(postListURL, { responseType: 'text' }));
      const posts = JSON.parse(json);

      // Filtere die Posts, die nicht `hideInFeed` enthalten oder `hideInFeed` auf `false` gesetzt haben
      const visiblePosts = posts.filter((post: any) => !post.hideInFeed);

      const postArray: Post[] = [];

      for (const post of visiblePosts) {
        postArray.push(new Post(post, post.fileName))
      }
      return postArray;
    } catch (error: any) {
      console.error(error);
      if (error.status === 404 && language !== 'en') {
        return this.loadPostList('en'); // Versuche, deie Beiträge auf Englisch zu laden
      }
      return null;
    }
  }
}
