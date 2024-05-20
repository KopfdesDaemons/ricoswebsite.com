import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  supportedLanguages: string[] = ['de', 'en'];
  userLanguage: string = 'en';
  oldLanguage: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  updateLanguage(lang: string | null) {
    if (!lang) lang = this.getLanguageFromUserAgent();
    this.userLanguage = this.replaceUnsupportedLangauge(lang);
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
  }

  getLanguageFromUserAgent(): string {
    if (isPlatformServer(this.platformId)) return 'en';
    const userLang = navigator.language || (navigator.languages && navigator.languages[0]);
    console.log(`Detected user language: ${userLang}`);
    return userLang ? userLang.split('-')[0] : 'en';
  }
}
