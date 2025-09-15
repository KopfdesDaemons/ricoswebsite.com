import { Injectable, PLATFORM_ID, Renderer2, computed, inject } from '@angular/core';
import { ConsentService } from './consent.service';
import { ScriptService } from './script.service';
import { TranslateService } from '@ngx-translate/core';
import { lastValueFrom } from 'rxjs';
import { LanguageService } from './language.service';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CodepenService {
  private consentS = inject(ConsentService);
  private scriptS = inject(ScriptService);
  private translate = inject(TranslateService);
  private languageS = inject(LanguageService);
  private platformId = inject<object>(PLATFORM_ID);
  private hasCodePenConsent = computed(() => this.consentS.possibleConsents.find((c) => c.name === 'CodePen')?.consent() ?? false);

  async loadCodePen(renderer: Renderer2) {
    if (!isPlatformBrowser(this.platformId)) return;
    if (this.hasCodePenConsent()) {
      await this.scriptS.reloadJsScript(renderer, 'https://cpwebassets.codepen.io/assets/embed/ei.js');
    } else {
      const CodePenDemos = Array.from(document.querySelectorAll('.codepen'));
      for (const demo of CodePenDemos) {
        const spans = Array.from(demo.querySelectorAll('span'));
        for (const span of spans) {
          const button = renderer.createElement('button');
          renderer.addClass(button, 'codePenConsentButton');
          button.addEventListener('click', async () => {
            this.consentS.giveConsent('CodePen');
            await this.loadCodePen(renderer);
          });
          const buttonTextTranslation = await lastValueFrom(this.translate.get('codepen_button'));
          const buttonText = renderer.createText(buttonTextTranslation);
          renderer.appendChild(button, buttonText);
          const parent = span.parentNode;
          renderer.insertBefore(parent, button, span);
          renderer.removeChild(parent, span);
          const paragraph = renderer.createElement('p');
          const pTextTranslation = await lastValueFrom(this.translate.get('codepen_privacy_notice'));
          const paragraphText = renderer.createText(pTextTranslation + ' ');
          renderer.appendChild(paragraph, paragraphText);
          const privacyPolicy = renderer.createElement('a');
          renderer.setAttribute(privacyPolicy, 'href', this.languageS.userLanguage() + '/privacy-policy/.');
          const privacyPolicyTranslation = await lastValueFrom(this.translate.get('privacy_policy'));
          const privacyPolicyText = renderer.createText(privacyPolicyTranslation);
          renderer.appendChild(privacyPolicy, privacyPolicyText);
          renderer.appendChild(paragraph, privacyPolicy);
          renderer.appendChild(parent, paragraph);
        }
      }
    }
  }
}
