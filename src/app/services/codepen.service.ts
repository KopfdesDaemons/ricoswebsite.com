import { Inject, Injectable, PLATFORM_ID, Renderer2 } from '@angular/core';
import { ConsentService } from './consent.service';
import { ScriptService } from './script.service';
import { isPlatformServer } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CodepenService {

  constructor(
    private consentS: ConsentService,
    private scriptS: ScriptService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  loadCodePen(renderer: Renderer2) {
    if (isPlatformServer(this.platformId)) return;
    if (this.consentS.checkConsent('CodePen')) {
      this.scriptS.reloadJsScript(renderer, 'https://cpwebassets.codepen.io/assets/embed/ei.js');
    } else {
      const CodePenDemos = Array.from(document.querySelectorAll('.demo'));
      for (const demo of CodePenDemos) {
        const spans = Array.from(demo.querySelectorAll('span'));
        for (const span of spans) {
          const button = renderer.createElement('button');
          renderer.addClass(button, 'codePenConsentButton');
          button.addEventListener('click', () => this.consentS.giveConsent('CodePen'));

          const buttonText = renderer.createText('Load content from CodePen');
          renderer.appendChild(button, buttonText);

          const parent = span.parentNode;
          renderer.insertBefore(parent, button, span);
          renderer.removeChild(parent, span);

          const paragraph = renderer.createElement('p');
          const paragraphText = renderer.createText('The code is loaded by the third-party provider CodePen. For more details see ');
          renderer.appendChild(paragraph, paragraphText);

          const privacyPolicy = renderer.createElement('a');
          renderer.setAttribute(privacyPolicy, 'href', '/privacy-policy');
          const privacyPolicyText = renderer.createText('Privacy Policy');
          renderer.appendChild(privacyPolicy, privacyPolicyText);
          renderer.appendChild(paragraph, privacyPolicy);
          renderer.appendChild(parent, paragraph);
        }
      }
    }
  }
}
