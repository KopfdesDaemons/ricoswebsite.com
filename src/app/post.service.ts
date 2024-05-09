import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, mergeMap, map } from 'rxjs/operators';
import { throwError, of } from 'rxjs';
import * as marked from 'marked';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  

  getPost(title: string) {
    const postDataUrl = `http://localhost:4200/assets/posts/${title}/post.json`;
    const contentUrl = `http://localhost:4200/assets/posts/${title}/content.md`;
    const imageURL = `assets/posts/${title}/image.jpg`;

    // Define custom renderer class
    class CustomRenderer extends marked.Renderer {
      override link(href: string, title: string | null | undefined, text: string) {
        return `<a href="${href}" title="${title || ''}" target="_blank">${text}</a>`;
      }
    }

    const renderer = new CustomRenderer();

    return this.http.get(postDataUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error loading post metadata:', error);
        if (error.status === 404) {
          return throwError(() => new Error(`Post "${title}" not found at: ${postDataUrl}`));
        } else {
          return throwError(() => new Error(`An unexpected error occurred while loading post metadata: ${JSON.stringify(error)}`));
        }
      }),
      mergeMap(postData => {
        console.log('Post metadata geladen');
        
        return this.http.get(contentUrl, { responseType: 'text' }).pipe(
          catchError((error: HttpErrorResponse) => {
            console.error('Error loading content:', error);
            if (error.status === 404) {
              // Content not found, return empty string
              return of('');
            } else {
              return throwError(() => new Error(`An unexpected error occurred while loading content: ${JSON.stringify(error)}`));
            }
          }),
          map(contentData => {
            console.log('Post content geladen');

            var md = marked.setOptions({ renderer });
            return { post: postData, content: md.parse(contentData), image: imageURL };
          })
        );
      })
    );
  }
}
