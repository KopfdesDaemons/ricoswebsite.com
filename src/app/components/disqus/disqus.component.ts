import { Component, ElementRef, Renderer2, ViewChild, OnChanges, PLATFORM_ID, inject, input } from '@angular/core';
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
  imports: [FaIconComponent, RouterLink, TranslateModule],
})
export class DisqusComponent implements OnChanges {
  disqusS = inject(DisqusService);
  renderer = inject(Renderer2);
  private elementRef = inject(ElementRef);
  languageS = inject(LanguageService);
  private platformId = inject<Object>(PLATFORM_ID);

  readonly identifier = input<string>();
  disqusDiv = ViewChild('disqusDiv');
  private observer: IntersectionObserver | undefined;
  faComment = faComment;

  ngOnChanges(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (this.observer) this.observer.disconnect();
    if (!this.identifier()) return;
    if (!this.disqusS.consent) return;
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) this.isVisible();
      });
    });
    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  isVisible() {
    const identifier = this.identifier();
    if (this.disqusS.consent && identifier) {
      this.disqusS.loadDisqus(this.renderer, identifier);
      this.observer?.disconnect();
    }
  }

  giveConsent() {
    const identifier = this.identifier();
    if (!identifier) return;
    this.disqusS.giveConsent();
    this.observer?.disconnect();
    this.disqusS.loadDisqus(this.renderer, identifier);
  }
}
