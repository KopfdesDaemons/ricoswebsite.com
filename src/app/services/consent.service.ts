import { isPlatformServer } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsentService {
  // translate = inject(TranslateService);
  private platformId = inject<Object>(PLATFORM_ID);


  consentMangerIsVisible: BehaviorSubject<boolean> = new BehaviorSubject(false);

  possibleConsents: { name: string, domains: string[] | undefined, descriptionTransString: string }[] = [
    { name: 'Disqus', domains: ['disqus.com'], descriptionTransString: 'disqus_descr' },
    { name: 'CodePen', domains: ['codepen.io', 'cdpn.io'], descriptionTransString: 'codepen_descr' },
    { name: 'Custom Language', domains: [], descriptionTransString: 'custom_language' },
  ]

  giveConsent(serviceName: string) {
    if (isPlatformServer(this.platformId)) return;
    localStorage.setItem(serviceName, '');
  }

  checkConsent(serviceName: string): boolean {
    if (isPlatformServer(this.platformId)) return false;
    return localStorage.getItem(serviceName) != null;
  }

  revokeConsent(serviceName: string) {
    if (isPlatformServer(this.platformId)) return;

    localStorage.removeItem(serviceName);

    // delete cookies
    const consent = this.possibleConsents.find(c => c.name === serviceName);
    if (consent && consent.domains) {
      consent.domains.forEach(domain => {
        this.deleteCookiesForDomain(domain);
      });
    }
  }

  private deleteCookiesForDomain(domain: string) {
    const cookies = document.cookie.split(";");

    cookies.forEach(cookie => {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
      document.cookie = name + `=; domain=${domain}; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    });
  }

  openConsentmanager() {
    this.consentMangerIsVisible.next(true);
  }

  closeConsentmanager() {
    this.consentMangerIsVisible.next(false);
  }
}
