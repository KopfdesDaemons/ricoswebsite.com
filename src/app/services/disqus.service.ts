import { Injectable, Renderer2, inject, signal } from '@angular/core';
import { ScriptService } from './script.service';
import { ConsentService } from './consent.service';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root',
})
export class DisqusService {
  scriptS = inject(ScriptService);
  consentS = inject(ConsentService);
  languageS = inject(LanguageService);

  consent = signal<boolean>(false);
  disqus: any;
  shortname: string = 'ricoswebsite-com';

  constructor() {
    this.consent.set(this.consentS.checkConsent('Disqus'));
  }

  giveConsent() {
    this.consentS.giveConsent('Disqus');
    this.consent.set(true);
  }

  async loadDisqus(renderer: Renderer2, title: string): Promise<void> {
    this.consent.set(this.consentS.checkConsent('Disqus'));
    this.disqus = (window as any)['DISQUS'];
    const lang = this.languageS.userLanguage;
    if (!this.disqus) {
      (window as any).disqus_config = function () {
        this.page.identifier = title;
        this.language = lang;
      };
      await this.scriptS.addJsScript(renderer, 'https://' + this.shortname + '.disqus.com/embed.js');
    } else {
      (window as any)['DISQUS'].reset({
        reload: true,
        config: function () {
          this.page.identifier = title;
          this.language = lang;
        },
      });
    }
  }
}
