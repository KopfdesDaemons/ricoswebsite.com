import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { DISQUS_SHORTNAME } from '../environment/enviroment';
import { ScriptService } from './script.service';
import { DisqusService } from './disqus.service';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ConsentService {
  private scriptS = inject(ScriptService);
  private disqusS = inject(DisqusService);
  private platformId = inject<object>(PLATFORM_ID);
  consentManagerIsOpen = signal<boolean>(false);

  possibleConsents: { name: string; domains: string[] | undefined; descriptionTransString: string }[] = [
    {
      name: 'Disqus',
      domains: ['disqus.com'],
      descriptionTransString: 'disqus_descr',
    },
    {
      name: 'CodePen',
      domains: ['codepen.io', 'cdpn.io'],
      descriptionTransString: 'codepen_descr',
    },
    {
      name: 'Custom Language',
      domains: [],
      descriptionTransString: 'custom_language',
    },
  ];

  giveConsent(serviceName: string) {
    localStorage.setItem(serviceName, '');
  }

  checkConsent(serviceName: string): boolean {
    if (!isPlatformBrowser(this.platformId)) return false;
    return localStorage.getItem(serviceName) != null;
  }

  revokeConsent(serviceName: string) {
    localStorage.removeItem(serviceName);

    // delete cookies
    const consent = this.possibleConsents.find((c) => c.name === serviceName);
    if (consent && consent.domains) {
      consent.domains.forEach((domain) => {
        this.deleteCookiesForDomain(domain);
      });
    }

    if (serviceName === 'Disqus') {
      this.scriptS.removeJsScript('https://' + DISQUS_SHORTNAME + '.disqus.com/embed.js');
      (window as any)['DISQUS'] = undefined;
      this.disqusS.removeDisqus();
    }
  }

  private deleteCookiesForDomain(domain: string) {
    const cookies = document.cookie.split(';');

    cookies.forEach((cookie) => {
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
      document.cookie = name + `=; domain=${domain}; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    });
  }

  openConsentManager() {
    this.consentManagerIsOpen.set(true);
  }

  closeConsentManager() {
    this.consentManagerIsOpen.set(false);
  }
}
