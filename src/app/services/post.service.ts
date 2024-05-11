import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import * as marked from 'marked';
import { isPlatformServer } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  async getPost(title: string): Promise<any> {
    const baseUrl = isPlatformServer(this.platformId) ? 'http://localhost:4200/' : '/';

    const postMetaUrl = `${baseUrl}assets/posts/${title}/post.json`;
    const contentUrl = `${baseUrl}assets/posts/${title}/content.md`;
    let postImageURL = `${baseUrl}assets/posts/${title}/image.jpg`;

    try {
      const postMeta = await lastValueFrom(this.http.get<any>(postMetaUrl));
      postMeta.hasImage = JSON.parse(postMeta.hasImage);
      
      const contentData = await lastValueFrom(this.http.get(contentUrl, { responseType: 'text' }));

      // Alle Links werden so verändert, dass sie im neuen Tab geöffnet werden
      class CustomRenderer extends marked.Renderer {
        override link(href: string, title: string | null | undefined, text: string) {
          return `<a href="${href}" title="${title || ''}" target="_blank">${text}</a>`;
        }
      }
      const md = marked.setOptions({ renderer: new CustomRenderer() });
      const postContent = md.parse(contentData);

      return { postMeta: postMeta, postContent: postContent, postImageURL: postImageURL };
    } catch (error) {
      if (error instanceof HttpErrorResponse) {
        console.error('HTTP error:', error);
        if (error.status === 404) {
          throw new Error(`Post "${title}" not found at: ${postMetaUrl}`);
        }
      }
      throw new Error(`An unexpected error occurred: ${error}`);
    }
  }
}
