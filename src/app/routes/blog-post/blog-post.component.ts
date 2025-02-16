import { AfterViewChecked, Component, OnInit, PLATFORM_ID, Renderer2, ViewEncapsulation, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom, Subscription } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { CodepenService } from 'src/app/services/codepen.service';
import { HighlightHelper } from 'src/app/helpers/highlight.helper';
import { PostService } from 'src/app/services/post.service';
import { DisqusComponent } from '../../components/disqus/disqus.component';
import { TranslateModule } from '@ngx-translate/core';
import { SafeHtmlPipe } from 'src/app/pipes/safe-html.pipe';
import { MetaService } from 'src/app/services/meta.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [DisqusComponent, TranslateModule, SafeHtmlPipe],
})
export class BlogPostComponent implements OnInit, AfterViewChecked {
  private route = inject(ActivatedRoute);
  private postS = inject(PostService);
  private renderer = inject(Renderer2);
  private highlightHelper = HighlightHelper;
  private codePenS = inject(CodepenService);
  private metaS = inject(MetaService);
  private platformId = inject<object>(PLATFORM_ID);

  post: Post | undefined | null;
  private routeParamsSubscription: Subscription | undefined;
  postNotFound: boolean = false;

  ngOnInit() {
    // when route changes
    this.routeParamsSubscription = this.route.params.subscribe(async (param) => {
      this.postNotFound = false;

      const fileName = param['fileName'];

      if (fileName) {
        // load post when fileName is param in route
        this.post = await this.postS.getPost(fileName);
      } else {
        // read route data for non blog post routes (privacy policy)
        const data = await firstValueFrom(this.route.data);

        if (data['fileName']) {
          this.post = await this.postS.getPost(data['fileName']);
        }

        // disable comments
        if (this.post?.postMeta) {
          this.post.postMeta.commentsDisabled = true;
        }
      }

      this.postNotFound = !this.post;

      // set meta tags
      if (this.post?.postMeta) {
        this.metaS.updateMetaTags(this.post.postMeta);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routeParamsSubscription) {
      this.routeParamsSubscription.unsubscribe();
    }
  }

  async ngAfterViewChecked() {
    if (!isPlatformBrowser(this.platformId)) return;
    if (this.post) {
      this.highlightHelper.highlightAll();
      if (this.post?.postMeta?.hasCodePen) await this.codePenS.loadCodePen(this.renderer);
    }
  }
}
