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
    const postDataUrl = `assets/posts/${title}/post.json`;
    const contentUrl = `assets/posts/${title}/content.md`;

    return this.http.get(postDataUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          return throwError(() => new Error('Post not found: ' + postDataUrl));
        } else {
          return throwError(() => new Error('An unexpected error occurred'));
        }
      }),
      mergeMap(postData => {
        return this.http.get(contentUrl, { responseType: 'text' }).pipe(
          catchError((error: HttpErrorResponse) => {
            if (error.status === 404) {
              // Content not found, return empty string
              return of('');
            } else {
              return throwError(() => new Error('An unexpected error occurred while loading content'));
            }
          }),
          map(contentData => {
            var md = marked.setOptions({});
            return { post: postData, content: md.parse(contentData) };
          })
        );
      })
    );
  }
}
