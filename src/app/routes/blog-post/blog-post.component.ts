import { Component, Inject, OnInit, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Location, isPlatformBrowser } from '@angular/common';
import { PostService } from 'src/app/post.service';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogPostComponent implements OnInit {
  post: any;
  content: any;
  image: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private postS: PostService,
    private metaS: Meta,
    private router: Router,
    private location: Location,
    private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    if (isPlatformServer(this.platformId)) {
      const title = this.route.snapshot.paramMap.get('title');
      if (title) {
        this.loadPostData(title);
      }
    } else if (isPlatformBrowser(this.platformId)) {
      const title = this.route.snapshot.paramMap.get('title');
      const key = makeStateKey<any>('post-' + title);
      const storedData = this.transferState.get(key, null);
      if (storedData) {
        this.post = storedData.post;
        this.content = storedData.content;
        this.image = storedData.image;
        this.updateMetaTags();
      } else {
        // Falls die Daten nicht im TransferState vorhanden sind, die Daten serverseitig laden
        if (title) {
          this.loadPostData(title);
        }
      }
    }
  }

  async loadPostData(title: string): Promise<void> {
    try {
      const data = await lastValueFrom(this.postS.getPost(title));

      this.post = data.post;
      this.content = data.content;
      this.image = data.image;
      this.updateMetaTags();

      // Speichern der Daten im TransferState, um sie beim nächsten Laden der Seite zu verwenden
      const key = makeStateKey<any>('post-' + title);
      this.transferState.set(key, data);
    } catch (error: any) {
      console.error('Fehler beim Laden des Beitrags:', error.message);
      this.router.navigate(['']);
    }
  }

  updateMetaTags(): void {
    if (this.post && this.image) {
      const absoluteImageUrl = this.location.prepareExternalUrl(this.image);
      this.metaS.addTags([
        { property: 'og:title', content: this.post.title },
        { property: 'og:image', content: absoluteImageUrl },
        { property: 'og:author', content: this.post.author },
        { property: 'og:description', content: this.post.description },
        { property: 'og:keywords', content: this.post.keywords },
        { property: 'og:type', content: 'article' },
        { property: 'og:url', content: this.location.prepareExternalUrl(this.location.path()) },
        { property: 'og:robots', content: 'index, follow' }
      ]);
    }
  }
}
