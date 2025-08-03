import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal, DOCUMENT } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private router = inject(Router);
  private translate = inject(TranslateService);
  private location = inject(Location);
  private platformId = inject<object>(PLATFORM_ID);
  private document = inject<Document>(DOCUMENT);

  userLanguage = signal<string>('');
  userAgendLanguage: string;
  askUserToSwitch: boolean = true;
  supportedLanguages: string[] = ['de', 'en'];
  private oldLanguage: string = '';

  constructor() {
    this.translate.addLangs(this.supportedLanguages);
    this.translate.setDefaultLang('en');
    this.userAgendLanguage = this.getUserAgentLanguage();
    this.userLanguage.set(this.userAgendLanguage);
    this.loadLanguageFromLocalStorage();
  }

  private loadLanguageFromLocalStorage() {
    if (!isPlatformBrowser(this.platformId)) return;

    const storedLanguage = localStorage.getItem('Custom Language');
    if (storedLanguage) {
      this.userLanguage.set(storedLanguage);
      this.askUserToSwitch = false;
    }
  }

  async updateLanguage(lang: string | null) {
    lang = lang || this.userLanguage();
    this.userLanguage.set(await this.replaceUnsupportedLangauge(lang));
    this.document.documentElement.lang = this.userLanguage();
    this.askUserToSwitch = this.askUserToSwitch && this.userLanguage() != this.userAgendLanguage;
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
    this.askUserToSwitch = false;
  }

  private getUserAgentLanguage(): string {
    if (isPlatformServer(this.platformId)) return 'en';

    const userLang = navigator.language || (navigator.languages && navigator.languages[0]);
    console.log(`Detected user language: ${userLang}`);
    return userLang ? userLang.split('-')[0] : 'en';
  }
}
