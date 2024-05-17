import { isPlatformBrowser } from '@angular/common';
import { AfterViewChecked, Component, ElementRef, Inject, OnInit, PLATFORM_ID, Renderer2, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { ConsentService } from 'src/app/services/consent.service';
import { HighlightService } from 'src/app/services/highlight.service';
import { PostService } from 'src/app/services/post.service';
import { ScriptService } from 'src/app/services/script.service';

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
    private consentS: ConsentService,
    private scriptS: ScriptService,
    private elementRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  async ngOnInit() {
    // when route changes 
    this.route.params.subscribe(async () => {
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
      if (isPlatformBrowser(this.platformId)) this.loadCodePen();
    }
  }

  private loadCodePen() {
    if (this.post?.postMeta.hasCodePen) {
      if (this.consentS.checkConsent('CodePen')) {
        this.scriptS.reloadJsScript(this.renderer, 'https://cpwebassets.codepen.io/assets/embed/ei.js');
      } else {
        const CodePenDemos = this.elementRef.nativeElement.querySelectorAll('.demo');
        for (const demo of CodePenDemos) {
          const spans = demo.querySelectorAll('span');
          for (const span of spans) {
            const button = this.renderer.createElement('button');
            this.renderer.addClass(button, 'codePenConsentButton');
            button.addEventListener('click', () => this.consentS.giveConsent('CodePen'));

            const buttonText = this.renderer.createText('Load content from CodePen');
            this.renderer.appendChild(button, buttonText);

            const parent = span.parentNode;
            this.renderer.insertBefore(parent, button, span);
            this.renderer.removeChild(parent, span);

            const paragraph = this.renderer.createElement('p');
            const paragraphText = this.renderer.createText('The code is loaded by the third-party provider CodePen. For more details see ');
            this.renderer.appendChild(paragraph, paragraphText);

            const privacyPolicy = this.renderer.createElement('a');
            this.renderer.setAttribute(privacyPolicy, 'href', '/privacy-policy');
            const privacyPolicyText = this.renderer.createText('Privacy Policy');
            this.renderer.appendChild(privacyPolicy, privacyPolicyText);
            this.renderer.appendChild(paragraph, privacyPolicy);
            this.renderer.appendChild(parent, paragraph);
          }
        }
      }
    }
  }
}