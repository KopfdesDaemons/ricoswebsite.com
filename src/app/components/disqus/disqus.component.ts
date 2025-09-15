import { Component, ElementRef, Renderer2, ViewChild, OnChanges, PLATFORM_ID, inject, input, ChangeDetectionStrategy, computed, effect, OnDestroy } from '@angular/core';
import { DisqusService } from 'src/app/services/disqus.service';
import { isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ConsentService } from 'src/app/services/consent.service';
import { RouterLink } from '@angular/router';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-disqus',
  templateUrl: './disqus.component.html',
  styleUrls: ['./disqus.component.scss'],
  imports: [RouterLink, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisqusComponent implements OnChanges, OnDestroy {
  private disqusS = inject(DisqusService);
  private renderer = inject(Renderer2);
  private elementRef = inject(ElementRef);
  private platformId = inject<object>(PLATFORM_ID);
  private consentS = inject(ConsentService);
  languageS = inject(LanguageService);

  readonly identifier = input<string>();
  disqusDiv = ViewChild('disqusDiv');
  private observer: IntersectionObserver | null = null;

  hasDisqusConsent = computed(() => this.consentS.possibleConsents.find((c) => c.name === 'Disqus')?.consent() ?? false);

  constructor() {
    effect(async () => {
      if (this.hasDisqusConsent() && this.identifier()) {
        await this.loadDisqusAndDisconnectObserver();
      }
    });
  }

  ngOnChanges(): void {
    if (!isPlatformBrowser(this.platformId) || !this.identifier()) {
      return;
    }
    this.observer = new IntersectionObserver(async (entries) => {
      if (entries[0].isIntersecting && this.hasDisqusConsent() && this.identifier()) {
        await this.loadDisqusAndDisconnectObserver();
      }
    });
    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  giveConsent() {
    if (!this.identifier()) return;
    this.consentS.giveConsent('Disqus');
  }

  private async loadDisqusAndDisconnectObserver() {
    this.observer?.disconnect();
    await this.disqusS.loadDisqus(this.renderer, this.identifier()!);
  }
}
