import { Component, OnInit, ViewEncapsulation, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom, Subscription } from 'rxjs';
import { Post } from 'src/app/models/post.model';
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
})
export class BlogPostComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private postS = inject(PostService);
  private metaS = inject(MetaService);

  post = signal<Post | undefined | null>(undefined);
  private routeParamsSubscription: Subscription | undefined;
  postNotFound: boolean = false;

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
