import { AfterViewChecked, Component, OnInit, Renderer2, ViewEncapsulation, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post';
import { CodepenService } from 'src/app/services/codepen.service';
import { HighlightService } from 'src/app/services/highlight.service';
import { PostService } from 'src/app/services/post.service';
import { DisqusComponent } from '../../components/disqus/disqus.component';
import { TranslateModule } from '@ngx-translate/core';
import { SafeHtmlPipe } from '../../safe-html.pipe';
import { MetaService } from 'src/app/services/meta.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    DisqusComponent,
    TranslateModule,
    SafeHtmlPipe,
  ],
})
export class BlogPostComponent implements OnInit, AfterViewChecked {
  private route = inject(ActivatedRoute);
  private postS = inject(PostService);
  private renderer = inject(Renderer2);
  private highlightS = inject(HighlightService);
  private codePenS = inject(CodepenService);
  private metaS = inject(MetaService);


  post: Post | undefined | null;
  private routeParamsSubscription: Subscription | undefined;
  postNotFound: boolean = false;

  ngOnInit() {
    // when route changes 
    this.routeParamsSubscription = this.route.params.subscribe(async () => {

      this.postNotFound = false;

      const fileName = this.route.snapshot.paramMap.get('fileName');
      if (fileName) this.post = await this.postS.getPost(fileName);
      else {
        this.route.data.subscribe(async (data) => {
          if (data['fileName']) this.post = await this.postS.getPost(data['fileName']);
          if (this.post?.postMeta) this.post!.postMeta!.commentsDisabled = true;
          this.postNotFound = !this.post;
        });
      }
      this.postNotFound = !this.post;
      if (this.post?.postMeta) this.metaS.updateMetaTags(this.post.postMeta);
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
}