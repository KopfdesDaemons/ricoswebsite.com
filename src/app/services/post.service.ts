import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, PLATFORM_ID, makeStateKey, TransferState, inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Post } from '../models/post.model';
import { MarkdownHelper } from '../helpers/markdown.helper';
import { LanguageService } from './language.service';
import { PostMeta } from '../models/post-meta.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private http = inject(HttpClient);
  private transferState = inject(TransferState);
  private markdownHelper = MarkdownHelper;
  private languageS = inject(LanguageService);
  private platformId = inject<object>(PLATFORM_ID);

  private post: Post | null | undefined;
  private baseUrl = '/';

  async getPost(fileName: string): Promise<Post | null> {
    this.post = this.loadPostFromTransfareState(fileName);
    const lang = this.languageS.userLanguage;
    if (!this.post) this.post = await this.loadFromMarkdownFile(fileName, lang);
    if (!this.post) return null;

    this.savePostTransfereState(fileName);
    return this.post;
  }

  private savePostTransfereState(title: string) {
    const key = makeStateKey<Post>('post-' + this.languageS.userLanguage + '-' + title);
    this.transferState.set(key, this.post);
  }

  private loadPostFromTransfareState(title: string): Post | null {
    if (!isPlatformBrowser(this.platformId)) return null;
    const key = makeStateKey<Post>('post-' + this.languageS.userLanguage + '-' + title);
    const postFromState = this.transferState.get(key, null);
    if (!postFromState) return null;
    const post = new Post(postFromState?.postMeta ?? {}, title, this.languageS.userLanguage);
    post.postContent = postFromState?.postContent;
    return post;
  }

  private async loadFromMarkdownFile(fileName: string, language: string): Promise<Post | null> {
    const contentUrl = `${this.baseUrl}posts/${language}/${fileName}.md`;

    try {
      const response = await lastValueFrom(
        this.http.get(contentUrl, {
          responseType: 'text',
          observe: 'response',
          headers: { Accept: 'text/plain' },
          transferCache: { includeHeaders: ['Content-Type'] },
        })
      );

      // 404
      if (response.headers.get('Content-Type')?.includes('text/html')) return null;

      const markdownFile = response.body as string;
      const markdownHeader = this.markdownHelper.extractYamlHeader(markdownFile);
      const markdownBody = this.markdownHelper.extractBody(markdownFile);
      const postContent = await this.markdownHelper.parseMarkdown(markdownBody);

      return new Post(markdownHeader, fileName, this.languageS.userLanguage, postContent);
    } catch (error) {
      console.error(error);
      if (error instanceof HttpErrorResponse)
        if (error.status === 404 && language !== 'en') {
          // try to load post in english
          return this.loadFromMarkdownFile(fileName, 'en');
        }
      return null;
    }
  }

  async loadPostList(
    language: string,
    page: number = 1,
    pageSize: number = 10,
    sortOrder: 'asc' | 'desc' = 'desc',
    sortBy: 'date' | 'title' = 'date',
    filterTags: string[] = [],
    filterTitle: string = ''
  ): Promise<{ posts: Post[]; totalPages: number }> {
    const postListURL = `${this.baseUrl}posts/posts.${language}.json`;

    const json = await lastValueFrom(this.http.get(postListURL, { responseType: 'text' }));
    const posts = JSON.parse(json) as PostMeta[];

    // Filter nach Sichtbarkeit, Tags und Titel
    const visiblePosts = posts.filter(
      (post: PostMeta) =>
        !post.hideInFeed &&
        (filterTags.length === 0 || filterTags.some((keyword: string) => post.keywords.some((postTag: string) => postTag.includes(keyword)))) &&
        (filterTitle === '' || (post.title && post.title.includes(filterTitle)))
    );

    const postArray: Post[] = [];
    for (const post of visiblePosts) {
      postArray.push(new Post(post, post.fileName, this.languageS.userLanguage));
    }
    // Sortierung
    postArray.sort((a: Post, b: Post) => {
      let compareA: number | string, compareB: number | string;

      if (sortBy === 'date') {
        compareA = new Date(a.postMeta?.date ?? 0).getTime();
        compareB = new Date(b.postMeta?.date ?? 0).getTime();
      } else if (sortBy === 'title') {
        compareA = a.postMeta?.title?.toLowerCase() ?? '';
        compareB = b.postMeta?.title?.toLowerCase() ?? '';
      } else {
        // Default-Fall, wenn sortBy weder 'date' noch 'name' ist
        compareA = '';
        compareB = '';
      }

      if (compareA < compareB) return sortOrder === 'asc' ? -1 : 1;
      if (compareA > compareB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    // Paginierung
    const startIndex = (page - 1) * pageSize;
    const paginatedPosts = postArray.slice(startIndex, startIndex + pageSize);

    const totalPages = Math.ceil(postArray.length / pageSize);

    return { posts: paginatedPosts, totalPages: totalPages };
  }
}
