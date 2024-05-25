import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
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
  private routeParamsSubscription: Subscription | undefined;

  constructor(
    private postS: PostService,
    private languageS: LanguageService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // when route changes 
    this.routeParamsSubscription = this.route.params.subscribe(async () => {

      const lang = this.route.snapshot.paramMap.get('lang');
      this.languageS.updateLanguage(lang);

      this.loadPostsList()
    })
  }

  async loadPostsList() {
    this.postsList = await this.postS.loadPostList(this.languageS.userLanguage);
  }
}
