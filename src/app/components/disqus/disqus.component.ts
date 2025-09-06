import { Component, ElementRef, Renderer2, ViewChild, OnChanges, PLATFORM_ID, inject, input } from '@angular/core';
import { DisqusService } from 'src/app/services/disqus.service';
import { LanguageService } from 'src/app/services/language.service';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ConsentService } from 'src/app/services/consent.service';

@Component({
  selector: 'app-disqus',
  templateUrl: './disqus.component.html',
  styleUrls: ['./disqus.component.scss'],
  imports: [RouterLink, TranslateModule],
})
export class DisqusComponent implements OnChanges {
  private disqusS = inject(DisqusService);
  private renderer = inject(Renderer2);
  private elementRef = inject(ElementRef);
  private platformId = inject<object>(PLATFORM_ID);
  languageS = inject(LanguageService);
  consentS = inject(ConsentService);

  readonly identifier = input<string>();
  disqusDiv = ViewChild('disqusDiv');
  private observer: IntersectionObserver | undefined;

  ngOnChanges(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (this.observer) this.observer.disconnect();
    if (!this.identifier()) return;
    if (!this.consentS.checkConsent('Disqus')) return;
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting) await this.isVisible();
      });
    });
    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  async isVisible() {
    const identifier = this.identifier();
    if (this.consentS.checkConsent('Disqus') && identifier) {
      await this.disqusS.loadDisqus(this.renderer, identifier);
      this.observer?.disconnect();
    }
  }

  async giveConsent() {
    const identifier = this.identifier();
    if (!identifier) return;
    this.consentS.giveConsent('Disqus');
    this.observer?.disconnect();
    await this.disqusS.loadDisqus(this.renderer, identifier);
  }
}
