import { Component, Input, ElementRef, Renderer2, ViewChild, OnChanges, PLATFORM_ID, inject } from '@angular/core';
import { DisqusService } from 'src/app/services/disqus.service';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { LanguageService } from 'src/app/services/language.service';
import { isPlatformBrowser } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-disqus',
    templateUrl: './disqus.component.html',
    styleUrls: ['./disqus.component.scss'],
    imports: [FaIconComponent, RouterLink, TranslateModule]
})
export class DisqusComponent implements OnChanges {
  disqusS = inject(DisqusService);
  renderer = inject(Renderer2);
  private elementRef = inject(ElementRef);
  languageS = inject(LanguageService);
  private platformId = inject<Object>(PLATFORM_ID);

  @Input() identifier: string | undefined;
  @ViewChild('disqusDiv') disqusDiv: ElementRef | undefined;
  private observer: IntersectionObserver | undefined;
  faComment = faComment;

  ngOnChanges(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (this.observer) this.observer.disconnect();
    if (!this.identifier) return;
    if (!this.disqusS.consent) return;
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
