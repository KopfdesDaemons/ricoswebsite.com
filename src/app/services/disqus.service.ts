import { Inject, Injectable, PLATFORM_ID, Renderer2 } from '@angular/core';
import { ScriptService } from './script.service';
import { DOCUMENT, isPlatformServer } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DisqusService {

  isLoaded: boolean = false;
  consent: boolean = false;

  constructor(
    public scriptS: ScriptService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { 
    this.loadLocalstorgae();
  }

  consentGanted() {
    this.consent = true;
    localStorage.setItem('DisqusConsent', 'true');
  }

  loadLocalstorgae() {
    if(isPlatformServer(this.platformId)) return;
    this.consent = localStorage.getItem('DisqusConsent') === 'true';
  }

  public loadDisqus(renderer: Renderer2, title: string): void {
    const script = renderer.createElement('script');
    script.type = 'text/javascript';

    if (!this.isLoaded) {
      script.text = `
      var disqus_config = function () {
        this.page.identifier = '${title}';
      };
    `;
      this.isLoaded = true;
    } else {
      script.text = `
      DISQUS.reset({
        reload: true,
        config: function () { 
          this.page.identifier = '${title}';
        }})
      `;
    }
    renderer.appendChild(this.document.body, script);
    this.scriptS.addJsScript(renderer, 'https://ricoswebsite-com.disqus.com/embed.js');
  }
}
