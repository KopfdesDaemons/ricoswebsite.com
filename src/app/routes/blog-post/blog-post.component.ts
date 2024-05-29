import { AfterViewChecked, Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post';
import { CodepenService } from 'src/app/services/codepen.service';
import { HighlightService } from 'src/app/services/highlight.service';
import { LanguageService } from 'src/app/services/language.service';
import { PostService } from 'src/app/services/post.service';
import { environment } from 'src/environment/enviroment';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogPostComponent implements OnInit, AfterViewChecked {
  post: Post | undefined | null;
  private routeParamsSubscription: Subscription | undefined;
  postNotFound: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private postS: PostService,
    private renderer: Renderer2,
    private highlightS: HighlightService,
    private codePenS: CodepenService,
    private languageS: LanguageService,
    private router: Router,
    private metaS: Meta,
    private titleS: Title
  ) { }

  async ngOnInit() {
    // when route changes 
    this.routeParamsSubscription = this.route.params.subscribe(async () => {

      this.postNotFound = false;
      const lang = this.route.snapshot.paramMap.get('lang');
      this.languageS.updateLanguage(lang);

      const fileName = this.route.snapshot.paramMap.get('fileName');
      if (fileName) this.post = await this.postS.getPost(fileName);
      else {
        this.route.data.subscribe(async (data) => {
          if (data['fileName']) this.post = await this.postS.getPost(data['fileName']);
          if (this.post?.postMeta) this.post!.postMeta!.commentsDisabled = true;
        });
      }
      if (!this.post) this.postNotFound = true;
      this.updateMetaTags();
    })
  }

  ngOnDestroy(): void {
    if (this.routeParamsSubscription) {
      this.routeParamsSubscription.unsubscribe();
    }
  }

  ngAfterViewChecked() {
    if (this.post) {
      this.highlightS.highlightAll();
      if (this.post?.postMeta?.hasCodePen) this.codePenS.loadCodePen(this.renderer);
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

      if (this.post.postMeta.date) {
        tagsToAdd.push({ property: 'article:published_time', content: this.post.postMeta.date });
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
}