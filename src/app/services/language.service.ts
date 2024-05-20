import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  userLanguage: string = 'en';
  askUserToSwitch: boolean = true;
  private supportedLanguages: string[] = ['de', 'en'];
  private oldLanguage: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(platformId)) {
      const storedLanguage = localStorage.getItem('language');
      if (storedLanguage) {
        this.userLanguage = storedLanguage;
        this.askUserToSwitch = false;
      }
    }
  }

  updateLanguage(lang: string | null) {
    const UserAgentLang = this.getLanguageFromUserAgent();
    if (!lang) lang = UserAgentLang;
    this.userLanguage = this.replaceUnsupportedLangauge(lang);
    const ask = this.askUserToSwitch && this.userLanguage != UserAgentLang;
    setTimeout(() => {
      this.askUserToSwitch = ask;
    });
    this.translate.use(this.userLanguage);
  }

  private replaceUnsupportedLangauge(lang: string): string {
    if (!this.supportedLanguages.includes(lang)) {
      const userLang = this.getLanguageFromUserAgent();
      const newUrl = this.router.url.replace(lang, userLang);
      this.router.navigateByUrl(newUrl);
      return userLang;
    }
    return lang;
  }

  switchUserLanguage(lang: string) {
    this.oldLanguage = this.userLanguage;
    this.userLanguage = lang;
    const newUrl = this.router.url.replace(this.oldLanguage, lang);
    console.log('Switching language from ' + this.oldLanguage + ' to ' + lang + ' newURL: ' + newUrl);
    this.router.navigateByUrl(newUrl);
    localStorage.setItem('language', this.userLanguage.toString());
    this.askUserToSwitch = false;
  }

  getLanguageFromUserAgent(): string {
    if (isPlatformServer(this.platformId)) return 'en';
    const userLang = navigator.language || (navigator.languages && navigator.languages[0]);
    console.log(`Detected user language: ${userLang}`);
    return userLang ? userLang.split('-')[0] : 'en';
  }
}
