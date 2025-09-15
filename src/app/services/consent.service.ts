import { Injectable, PLATFORM_ID, Signal, WritableSignal, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ConsentService {
  consentManagerIsOpen = signal<boolean>(false);
  private platformId = inject<object>(PLATFORM_ID);

  private _possibleConsents: {
    name: string;
    domains: string[] | undefined;
    descriptionTransString: string;
    _consent: WritableSignal<boolean>;
  }[] = [
    {
      name: 'Disqus',
      domains: ['disqus.com'],
      descriptionTransString: 'disqus_descr',
      _consent: this.initializeConsentSignal('Disqus'),
    },
    {
      name: 'CodePen',
      domains: ['codepen.io', 'cdpn.io'],
      descriptionTransString: 'codepen_descr',
      _consent: this.initializeConsentSignal('CodePen'),
    },
    {
      name: 'Custom Language Consent',
      domains: [],
      descriptionTransString: 'custom_language',
      _consent: this.initializeConsentSignal('Custom Language Consent'),
    },
  ];

  readonly possibleConsents: { name: string; domains: string[] | undefined; descriptionTransString: string; consent: Signal<boolean> }[] = this._possibleConsents.map((item) => ({
    name: item.name,
    domains: item.domains,
    descriptionTransString: item.descriptionTransString,
    consent: item._consent.asReadonly(),
  }));

  private initializeConsentSignal(serviceName: string): WritableSignal<boolean> {
    if (!isPlatformBrowser(this.platformId)) return signal<boolean>(false);
    const isConsented = localStorage.getItem(serviceName) === 'true';
    return signal<boolean>(isConsented);
  }

  private findWritableSignal(serviceName: string): WritableSignal<boolean> | undefined {
    return this._possibleConsents.find((c) => c.name === serviceName)?._consent;
  }

  giveConsent(serviceName: string) {
    localStorage.setItem(serviceName, 'true');
    this.findWritableSignal(serviceName)?.set(true);
  }

  revokeConsent(serviceName: string) {
    localStorage.removeItem(serviceName);
    this.findWritableSignal(serviceName)?.set(false);

    // delete cookies
    const consent = this.possibleConsents.find((c) => c.name === serviceName);
    if (consent && consent.domains) {
      consent.domains.forEach((domain) => {
        this.deleteCookiesForDomain(domain);
      });
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
