import { Component, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Subscription, lastValueFrom } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { LanguageService } from 'src/app/services/language.service';
import { PostService } from 'src/app/services/post.service';
import { FormsModule } from '@angular/forms';
import { BlogpostCardComponent } from '../../components/blogpost-card/blogpost-card.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  imports: [FormsModule, BlogpostCardComponent, RouterLink, TranslateModule],
})
export class BlogComponent implements OnInit {
  private postS = inject(PostService);
  languageS = inject(LanguageService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private title = inject(Title);
  private meta = inject(Meta);
  private translate = inject(TranslateService);

  postsList: Post[] = [];
  currentPage: number = 1;
  pageSize: number = 5;
  sortOrder: 'desc' | 'asc' = 'desc';
  sortBy: 'date' | 'title' = 'date';
  totalPages: number = 1;
  private routeParamsSubscription: Subscription | undefined;
  private queryParamsSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.routeParamsSubscription = this.route.params.subscribe(async (params) => {
      const { page } = params;
      if (page) this.currentPage = Number(page);
      await this.loadPostsList();
    });

    this.queryParamsSubscription = this.route.queryParams.subscribe(async (params) => {
      const { sortBy, sortOrder } = params;
      if (sortBy === 'date' || sortBy === 'title') this.sortBy = sortBy;
      if (sortOrder === 'asc' || sortOrder === 'desc') this.sortOrder = sortOrder;
      await this.loadPostsList();
    });
  }

  ngOnDestroy(): void {
    this.routeParamsSubscription?.unsubscribe();
    this.queryParamsSubscription?.unsubscribe();
  }

  async setMetaTags() {
    const title = await lastValueFrom(this.translate.get('blog_h1'));
    this.title.setTitle(title);
    this.meta.addTag({ name: 'description', content: title });
  }

  async loadPostsList() {
    try {
      const { posts, totalPages } = await this.postS.loadPostList(this.languageS.userLanguage(), this.currentPage, this.pageSize, this.sortOrder, this.sortBy);
      this.postsList = posts;
      this.totalPages = totalPages;
      await this.setMetaTags();
    } catch (error) {
      console.error(error);
      if (error instanceof HttpErrorResponse) {
        if (error.status === 404 && this.languageS.userLanguage() !== 'en') {
          // try to load posts in english
          await this.postS.loadPostList('en', this.currentPage, this.pageSize, this.sortOrder, this.sortBy);
        }
      }
    }
  }

  public async sort(event: any) {
    const [sortBy, sortOrder] = event.target.value.split(' ');
    await this.router.navigate([`/${this.languageS.userLanguage()}/blog/page/1`], { queryParams: { sortBy, sortOrder } });
  }
}
