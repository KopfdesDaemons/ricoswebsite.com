import { Injectable, Renderer2, inject } from '@angular/core';
import { ScriptService } from './script.service';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root',
})
export class DisqusService {
  scriptS = inject(ScriptService);
  languageS = inject(LanguageService);

  disqus: any;
  shortname: string = 'ricoswebsite-com';

  async loadDisqus(renderer: Renderer2, title: string): Promise<void> {
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

  removeDisqus() {
    this.scriptS.removeJsScript('https://' + this.shortname + '.disqus.com/embed.js');
    (window as any)['DISQUS'] = undefined;
  }
}
