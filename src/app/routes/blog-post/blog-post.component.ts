import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewEncapsulation, effect, inject, signal, viewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, firstValueFrom } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { CodepenService } from 'src/app/services/codepen.service';
import { PostService } from 'src/app/services/post.service';
import { DisqusComponent } from '../../components/disqus/disqus.component';
import { TranslateModule } from '@ngx-translate/core';
import { SafeHtmlPipe } from 'src/app/pipes/safe-html.pipe';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [DisqusComponent, TranslateModule, SafeHtmlPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPostComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private postS = inject(PostService);
  private renderer = inject(Renderer2);
  private codePenS = inject(CodepenService);
  private metaS = inject(MetaService);
  postContent = viewChild<ElementRef>('postContent');

  fileName: string = '';
  post = signal<Post | undefined | null>(undefined);
  private routeParamsSubscription: Subscription | undefined;
  postNotFound: boolean = false;

  constructor() {
    effect(async () => {
      const post = this.post();
      this.postContent(); // ensure viewChild is resolved
      if (post?.postMeta?.hasCodePen) {
        await this.codePenS.loadCodePen(this.renderer);
      }
    });
  }

  ngOnInit() {
    this.routeParamsSubscription = this.route.params.subscribe(async (param) => {
      this.postNotFound = false;

      const fileName = param['fileName'] || (await firstValueFrom(this.route.data))?.['fileName'];
      if (fileName) this.post.set(await this.postS.getPost(fileName));

      // set meta tags
      if (this.post()?.postMeta) {
        this.metaS.updateMetaTags(this.post()!.postMeta);
      }

      this.postNotFound = !this.post();
    });
  }

  ngOnDestroy(): void {
    this.routeParamsSubscription?.unsubscribe();
  }
}
