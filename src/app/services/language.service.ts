import { DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  userLanguage: string = 'en';
  userAgendLanguage: string;
  askUserToSwitch: boolean = false;
  private supportedLanguages: string[] = ['de', 'en'];
  private oldLanguage: string = '';

  constructor(
    private router: Router,
    private translate: TranslateService,
    private location: Location,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {
    if (isPlatformBrowser(platformId)) {
      this.askUserToSwitch = true;
      const storedLanguage = localStorage.getItem('Custom Language');
      if (storedLanguage) {
        this.userLanguage = storedLanguage;
        this.askUserToSwitch = false;
      }
    }
    this.userAgendLanguage = this.getLanguageFromUserAgent();
  }

  updateLanguage(lang: string | null) {
    const UserAgentLang = this.userAgendLanguage;
    if (!lang) lang = UserAgentLang;
    this.userLanguage = this.replaceUnsupportedLangauge(lang);
    this.document.documentElement.lang = this.userLanguage;
    const ask = this.askUserToSwitch && this.userLanguage != UserAgentLang;
    this.askUserToSwitch = ask;
    this.translate.use(this.userLanguage);
  }

  private replaceUnsupportedLangauge(lang: string): string {
    if (!this.supportedLanguages.includes(lang)) {
      const userLang = this.userAgendLanguage;
      const newUrl = this.router.url.replace(lang, userLang);
      this.router.navigateByUrl(newUrl);
      return userLang;
    }
    return lang;
  }

  switchUserLanguage(lang: string) {
    this.oldLanguage = this.userLanguage;
    this.userLanguage = lang;
    const newUrl = this.location.path().replace(this.oldLanguage, lang);
    console.log('Switching language from ' + this.oldLanguage + ' to ' + lang + ' newURL: ' + newUrl);
    this.router.navigateByUrl(newUrl);
    localStorage.setItem('Custom Language', this.userLanguage.toString());
    this.askUserToSwitch = false;
  }

  private getLanguageFromUserAgent(): string {
    if (isPlatformServer(this.platformId)) return 'en';
    const userLang = navigator.language || (navigator.languages && navigator.languages[0]);
    console.log(`Detected user language: ${userLang}`);
    return userLang ? userLang.split('-')[0] : 'en';
  }
}
