import { Component, Inject, OnInit, PLATFORM_ID, ViewEncapsulation, makeStateKey, TransferState, Renderer2, ElementRef } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { PostService } from 'src/app/services/post.service';
import { isPlatformServer } from '@angular/common';
import { environment } from 'src/environment/enviroment';
import { ScriptService } from 'src/app/services/script.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogPostComponent implements OnInit {
  postMeta: any;
  postContent: any;
  postImageURL: string | undefined;
  disqusIsLoaded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private postS: PostService,
    private metaS: Meta,
    private router: Router,
    private transferState: TransferState,
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private scriptS: ScriptService,
    private titleS: Title,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  async ngOnInit(): Promise<void> {
    // Wenn Route sich ändert    
    this.route.params.subscribe(async params => {
      const title = this.route.snapshot.paramMap.get('title');
      if (!title) return;

      if (isPlatformServer(this.platformId)) this.loadPostData(title);
      else if (isPlatformBrowser(this.platformId)) {

        // Versuche die Daten aus dem TransferState zu laden
        const key = makeStateKey<any>('post-' + title);
        const storedData = this.transferState.get(key, null);
        if (storedData) {
          this.postMeta = storedData.postMeta;
          this.postContent = storedData.postContent;
          this.postImageURL = storedData.postImageURL;
          this.updateMetaTags();
        } else await this.loadPostData(title);

        this.loadDisqus();
      }
    })
  }

  async loadPostData(title: string): Promise<void> {
    try {
      const data = await this.postS.getPost(title);

      this.postMeta = data.postMeta;
      this.postContent = data.postContent;
      this.postImageURL = data.postImageURL;
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
      this.metaS.addTags([
        { property: 'og:title', content: this.postMeta.title },
        { property: 'og:author', content: this.postMeta.author },
        { property: 'og:description', content: this.postMeta.description },
        { property: 'og:keywords', content: this.postMeta.keywords },
        { property: 'og:type', content: 'article' },
        { property: 'og:url', content: environment.baseUrl + this.router.url },
        { property: 'og:robots', content: 'index, follow' },
        { name: 'description', content: this.postMeta.description }
      ]);
      if (this.postImageURL) {
        this.metaS.addTag({
          property: 'og:image',
          content: environment.baseUrl + this.postImageURL
        },
        )
      };
      this.titleS.setTitle(this.postMeta.title);
    }
  }

  loadDisqus(): void {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    if(!this.disqusIsLoaded) {      
      script.text = `
      var disqus_config = function () {
        this.page.url = '${window.location.href}';
        this.page.identifier = '${this.postMeta.title}';
      };
    `;
    this.disqusIsLoaded = true;
    } else {      
      script.text = `
      DISQUS.reset({
        reload: true,
        config: function () { 
          this.page.url = '${window.location.href}';
          this.page.identifier = '${this.postMeta.title}';
        }})
      `;
    }
    this.renderer.appendChild(this.elementRef.nativeElement, script);
    this.scriptS.addJsScript(this.renderer, 'https://ricoswebsite-com.disqus.com/embed.js');
  }
}
