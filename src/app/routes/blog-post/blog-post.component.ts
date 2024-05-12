import { AfterViewChecked, Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/post';
import { HighlightService } from 'src/app/services/highlight.service';
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
    private highlightS: HighlightService
  ) { }

  async ngOnInit() {
    // when route changes 
    this.route.params.subscribe(async () => {
      const title = this.route.snapshot.paramMap.get('title');
      if (title) this.post = await this.postS.getPost(title, this.renderer);
    })
  }

  ngAfterViewChecked() {
    if (this.post) {
      this.highlightS.highlightAll();
    }
  }
}