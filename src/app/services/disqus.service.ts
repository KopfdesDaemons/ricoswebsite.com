import { Inject, Injectable, Renderer2 } from '@angular/core';
import { ScriptService } from './script.service';
import { DOCUMENT } from '@angular/common';
import { ConsentService } from './consent.service';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class DisqusService {

  isLoaded: boolean = false;
  consent: boolean = false;

  constructor(
    public scriptS: ScriptService,
    public consentS: ConsentService,
    public languageS: LanguageService,
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.consent = this.consentS.checkConsent('Disqus');
  }

  giveConsent() {
    this.consentS.giveConsent('Disqus');
    this.consent = true;
  }

  loadDisqus(renderer: Renderer2, title: string): void {
    const script = renderer.createElement('script');
    script.type = 'text/javascript';
    const lang = this.languageS.userLanguage;

    if (!this.isLoaded) {
      script.text = `
      var disqus_config = function () {
        this.page.identifier = '${title}';
        this.language = '${lang}';
      };
    `;
      this.isLoaded = true;
    } else {
      script.text = `
      DISQUS.reset({
        reload: true,
        config: function () { 
          this.page.identifier = '${title}';
          this.language = '${lang}';
        }})
      `;
    }
    renderer.appendChild(this.document.body, script);
    this.scriptS.addJsScript(renderer, 'https://ricoswebsite-com.disqus.com/embed.js');
  }
}