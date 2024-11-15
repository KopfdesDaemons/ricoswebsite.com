import { Injectable, Renderer2, inject } from '@angular/core';
import { ScriptService } from './script.service';
import { ConsentService } from './consent.service';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class DisqusService {
  scriptS = inject(ScriptService);
  consentS = inject(ConsentService);
  languageS = inject(LanguageService);


  consent: boolean;
  disqus: any;
  shortname: string = 'ricoswebsite-com';

  constructor() {
    this.consent = this.consentS.checkConsent('Disqus');
  }

  giveConsent() {
    this.consentS.giveConsent('Disqus');
    this.consent = true;
  }

  loadDisqus(renderer: Renderer2, title: string): void {
    this.consent = this.consentS.checkConsent('Disqus');
    this.disqus = (window as any)['DISQUS'];
    const lang = this.languageS.userLanguage;
    if (!this.disqus) {
      (window as any).disqus_config = function () {
        this.page.identifier = title;
        this.language = lang;
      };
      this.scriptS.addJsScript(renderer, 'https://' + this.shortname + '.disqus.com/embed.js');
    } else {
      (window as any)['DISQUS'].reset({
        reload: true,
        config: function () {
          this.page.identifier = title;
          this.language = lang;
        }
      });
    }
  }
}
