import { Injectable, Renderer2, computed, effect, inject } from '@angular/core';
import { ScriptService } from './script.service';
import { LanguageService } from './language.service';
import { ConsentService } from './consent.service';
import { DISQUS_SHORTNAME } from '../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class DisqusService {
  scriptS = inject(ScriptService);
  languageS = inject(LanguageService);
  consentS = inject(ConsentService);
  disqusConsent = computed(() => this.consentS.possibleConsents.find((c) => c.name === 'Disqus')?.consent() ?? false);

  disqus: any;

  constructor() {
    effect(() => {
      if (!this.disqusConsent()) this.removeDisqus();
    });
  }

  async loadDisqus(renderer: Renderer2, title: string): Promise<void> {
    this.disqus = (window as any)['DISQUS'];
    const lang = this.languageS.userLanguage();
    if (!this.disqus) {
      (window as any).disqus_config = function () {
        this.page.identifier = title;
        this.language = lang;
      };
      await this.scriptS.addJsScript(renderer, 'https://' + DISQUS_SHORTNAME + '.disqus.com/embed.js');
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

  removeDisqus() {
    this.scriptS.removeJsScript('https://' + DISQUS_SHORTNAME + '.disqus.com/embed.js');
    (window as any)['DISQUS'] = undefined;
  }
}
