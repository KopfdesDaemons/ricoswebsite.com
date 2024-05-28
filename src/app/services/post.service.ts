import { HttpClient } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID, makeStateKey, TransferState } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { isPlatformServer } from '@angular/common';
import { Post } from '../models/post';
import { MarkdownService } from './markdown.service';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private post: Post | null | undefined;
  private baseUrl = isPlatformServer(this.platformId) ? 'http://localhost:4200/' : '/';

  constructor(
    private http: HttpClient,
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
    const contentUrl = `${this.baseUrl}assets/posts/${language}/${fileName}.md`;

    try {
      const markdownFile = await lastValueFrom(this.http.get(contentUrl, { responseType: 'text' }));
      const markdownHeader = this.markdownS.extractYamlHeader(markdownFile);
      const markdownBody = this.markdownS.extractBody(markdownFile);
      const postContent = await this.markdownS.parseMarkdown(markdownBody);

      return new Post(markdownHeader, fileName, this.languageS.userLanguage, postContent);
    } catch (error: any) {
      console.error(error);
      if (error.status === 404 && language !== 'en') {
        return this.loadFromMarkdownFile(fileName, 'en'); // Versuche, den Inhalt auf Englisch zu laden
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
  ): Promise<any> {
    const postListURL = `${this.baseUrl}assets/posts/posts.${language}.json`;

    try {
      const json = await lastValueFrom(this.http.get(postListURL, { responseType: 'text' }));
      const posts = JSON.parse(json);

      // Filter nach Sichtbarkeit, Tags und Titel
      const visiblePosts = posts.filter((post: any) =>
        !post.hideInFeed &&
        (filterTags.length === 0 || filterTags.some((keyword: string) => post.keywords.some((postTag: string) => postTag.includes(keyword)))) &&
        (filterTitle === '' || (post.postMeta.title && post.postMeta.title.includes(filterTitle)))
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
    } catch (error: any) {
      console.error(error);
      if (error.status === 404 && language !== 'en') {
        return this.loadPostList('en', page, pageSize, sortOrder, sortBy, filterTags, filterTitle); // Versuche, die Beiträge auf Englisch zu laden
      }
      return null;
    }
  }

}
