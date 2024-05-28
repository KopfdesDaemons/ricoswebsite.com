import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription, lastValueFrom } from 'rxjs';
import { Post } from 'src/app/models/post';
import { LanguageService } from 'src/app/services/language.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  postsList: Post[] = [];
  currentPage: number = 1;
  pageSize: number = 5;
  sortOrder: 'desc' | 'asc' = 'desc';
  sortBy: 'date' | 'title' = 'date';
  totalPages: number = 1;
  private routeParamsSubscription: Subscription | undefined;

  constructor(
    private postS: PostService,
    public languageS: LanguageService,
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    // when route changes 
    this.routeParamsSubscription = this.route.params.subscribe(async () => {

      const lang = this.route.snapshot.paramMap.get('lang');
      this.languageS.updateLanguage(lang);

      const page = this.route.snapshot.paramMap.get('page');
      if (page) this.currentPage = Number(page);

      this.loadPostsList();
      this.setMetaTags();
    })
  }

  ngOnDestroy(): void {
    if (this.routeParamsSubscription) {
      this.routeParamsSubscription.unsubscribe();
    }
  }

  async setMetaTags() {
    const title = await lastValueFrom(this.translate.get('blog_h1'));
    this.title.setTitle(title);
    this.meta.addTag({ name: 'description', content: title })
  }

  async loadPostsList() {
    const { posts, totalPages } = await this.postS.loadPostList(
      this.languageS.userLanguage,
      this.currentPage,
      this.pageSize,
      this.sortOrder,
      this.sortBy
    );

    this.postsList = posts;
    this.totalPages = totalPages;
  }

  public sort(event: any) {
    const [sortBy, sortOrder] = event.target.value.split(' ');
    this.sortBy = sortBy;
    this.sortOrder = sortOrder;
    this.loadPostsList();
  }
}
