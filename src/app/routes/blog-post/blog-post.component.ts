import { AfterViewChecked, Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { CodepenService } from 'src/app/services/codepen.service';
import { HighlightService } from 'src/app/services/highlight.service';
import { LanguageService } from 'src/app/services/language.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogPostComponent implements OnInit, AfterViewChecked {
  post: Post | undefined | null;

  constructor(
    private route: ActivatedRoute,
    private postS: PostService,
    private renderer: Renderer2,
    private highlightS: HighlightService,
    private codePenS: CodepenService,
    private languageS: LanguageService
  ) { }

  async ngOnInit() {
    // when route changes 
    this.route.params.subscribe(async () => {

      const lang = this.route.snapshot.paramMap.get('lang');
      if (lang) this.languageS.updateLanguage(lang);

      const title = this.route.snapshot.paramMap.get('title');
      if (title) this.post = await this.postS.getPost(title);
      else {
        this.route.data.subscribe(async (data) => {
          if (data['title']) this.post = await this.postS.getPost(data['title']);
          if (this.post?.postMeta) this.post!.postMeta!.commentsDisabled = true;
        });
      }
    })
  }

  ngAfterViewChecked() {
    if (this.post) {
      this.highlightS.highlightAll();
      if (this.post?.postMeta.hasCodePen) this.codePenS.loadCodePen(this.renderer);
    }
  }
}