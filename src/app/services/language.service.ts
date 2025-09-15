import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal, DOCUMENT, computed, effect } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';
import { ConsentService } from './consent.service';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private router = inject(Router);
  private translate = inject(TranslateService);
  private location = inject(Location);
  private platformId = inject<object>(PLATFORM_ID);
  private document = inject<Document>(DOCUMENT);
  private consentS = inject(ConsentService);
  private customLanguageConsent = computed(() => this.consentS.possibleConsents.find((c) => c.name === 'Custom Language Consent')?.consent() ?? false);

  userLanguage = signal<string>('');
  userAgendLanguage: string;
  askUserToSwitch = signal<boolean>(true);
  supportedLanguages: string[] = ['de', 'en'];
  private oldLanguage: string = '';

  constructor() {
    this.translate.addLangs(this.supportedLanguages);
    this.translate.setDefaultLang('en');
    this.userAgendLanguage = this.getUserAgentLanguage();
    this.userLanguage.set(this.userAgendLanguage);
    this.loadLanguageFromLocalStorage();

    effect(() => {
      if (!this.customLanguageConsent()) {
        if (!isPlatformBrowser(this.platformId)) return;
        localStorage.removeItem('Custom Language');
      }
    });
  }

  private loadLanguageFromLocalStorage() {
    if (!isPlatformBrowser(this.platformId)) return;

    const storedLanguage = localStorage.getItem('Custom Language');
    if (storedLanguage) {
      this.userLanguage.set(storedLanguage);
      this.askUserToSwitch.set(false);
    }
  }

  async updateLanguage(lang: string | null) {
    lang = lang || this.userLanguage();
    this.userLanguage.set(await this.replaceUnsupportedLangauge(lang));
    this.document.documentElement.lang = this.userLanguage();
    this.askUserToSwitch.set(this.askUserToSwitch() && this.userLanguage() != this.userAgendLanguage);
    this.translate.use(this.userLanguage());
  }

  private async replaceUnsupportedLangauge(lang: string): Promise<string> {
    if (!this.supportedLanguages.includes(lang)) {
      const fallbackLang = this.userAgendLanguage;
      const newUrl = this.router.url.replace(lang, fallbackLang);
      console.log(`Language ${lang} not supported. Switching to ${fallbackLang}`);
      await this.router.navigateByUrl(newUrl);
      return fallbackLang;
    }
    return lang;
  }

  async switchUserLanguage(lang: string) {
    this.oldLanguage = this.userLanguage();
    this.userLanguage.set(lang);
    const newUrl = this.location.path().replace(this.oldLanguage, lang);
    console.log(`Switching language from ${this.oldLanguage} to ${lang}. New URL: ${newUrl}`);
    const pathHasLangParam = this.location.path().includes(this.oldLanguage);
    if (!pathHasLangParam) await this.updateLanguage(lang);
    await this.router.navigateByUrl(newUrl);
    localStorage.setItem('Custom Language', this.userLanguage().toString());
    this.askUserToSwitch.set(false);
    this.consentS.giveConsent('Custom Language Consent');
  }

  private getUserAgentLanguage(): string {
    if (isPlatformServer(this.platformId)) return 'en';

    const userLang = navigator.language || (navigator.languages && navigator.languages[0]);
    console.log(`Detected user language: ${userLang}`);
    return userLang ? userLang.split('-')[0] : 'en';
  }
}
