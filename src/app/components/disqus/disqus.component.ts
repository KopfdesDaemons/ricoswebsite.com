import { Component, Input, ElementRef, Renderer2, ViewChild, OnChanges, Inject, PLATFORM_ID } from '@angular/core';
import { DisqusService } from 'src/app/services/disqus.service';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { LanguageService } from 'src/app/services/language.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-disqus',
  templateUrl: './disqus.component.html',
  styleUrls: ['./disqus.component.scss']
})
export class DisqusComponent implements OnChanges {
  @Input() identifier: string | undefined;
  @ViewChild('disqusDiv') disqusDiv: ElementRef | undefined;
  private observer: IntersectionObserver | undefined;
  faComment = faComment;

  constructor(
    public disqusS: DisqusService,
    public renderer: Renderer2,
    private elementRef: ElementRef,
    public languageS: LanguageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnChanges(): void {
    if (!this.disqusS.consent) return;
    if (!isPlatformBrowser(this.platformId)) return;
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) this.isVisible();
      });
    });
    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  isVisible() {
    if (!this.identifier) return;
    if (this.disqusS.consent && this.identifier) {
      this.disqusS.loadDisqus(this.renderer, this.identifier);
      this.observer?.disconnect();
    }
  }

  giveConsent() {
    if (!this.identifier) return;
    this.disqusS.giveConsent();
    this.observer?.disconnect();
    this.disqusS.loadDisqus(this.renderer, this.identifier);
  }
}
