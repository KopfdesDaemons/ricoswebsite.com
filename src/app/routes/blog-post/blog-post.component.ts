import { Component, Inject, OnInit, PLATFORM_ID, ViewEncapsulation, makeStateKey, TransferState } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Location, isPlatformBrowser } from '@angular/common';
import { PostService } from 'src/app/post.service';
import { isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogPostComponent implements OnInit {
  postMeta: any;
  postContent: any;
  postImage: string | undefined;

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
    const title = this.route.snapshot.paramMap.get('title');    
    if(!title) return;

    if (isPlatformServer(this.platformId)) this.loadPostData(title);
    else if (isPlatformBrowser(this.platformId)) {

      // Versuche die Daten aus dem TransferState zu laden
      const key = makeStateKey<any>('post-' + title);
      const storedData = this.transferState.get(key, null);
      if (storedData) {
        this.postMeta = storedData.postMeta;
        this.postContent = storedData.postContent;
        this.postImage = storedData.postImageURL;
        this.updateMetaTags();
      } else this.loadPostData(title);
    }
  }

  async loadPostData(title: string): Promise<void> {
    try {
      const data = await this.postS.getPost(title);
      
      this.postMeta = data.postMeta;
      this.postContent = data.postContent;
      this.postImage = data.postImageURL;
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
    if (this.postMeta) {
      const absoluteImageUrl = this.location.prepareExternalUrl(this.postImage ?? '');
      this.metaS.addTags([
        { property: 'og:title', content: this.postMeta.title },
        { property: 'og:image', content: absoluteImageUrl },
        { property: 'og:author', content: this.postMeta.author },
        { property: 'og:description', content: this.postMeta.description },
        { property: 'og:keywords', content: this.postMeta.keywords },
        { property: 'og:type', content: 'article' },
        { property: 'og:url', content: this.location.prepareExternalUrl(this.location.path()) },
        { property: 'og:robots', content: 'index, follow' }
      ]);
    }
  }
}
