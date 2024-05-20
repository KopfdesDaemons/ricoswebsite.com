import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsentService {

  consentMangerIsVisible: boolean = false;

  possibleConsents: { name: string, domains: string[] | undefined }[] = [
    { name: 'Disqus', domains: ['disqus.com'] },
    { name: 'CodePen', domains: ['codepen.io', 'cdpn.io'] }
  ]

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  giveConsent(serviceName: string) {
    if (isPlatformServer(this.platformId)) return;
    localStorage.setItem(serviceName + ' Consent', 'true');
  }

  checkConsent(serviceName: string): boolean {
    if (isPlatformServer(this.platformId)) return false;
    return localStorage.getItem(serviceName + ' Consent') === 'true';
  }

  revokeConsent(serviceName: string) {
    if (isPlatformServer(this.platformId)) return;

    localStorage.removeItem(serviceName + ' Consent');

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
}
