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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  updateLanguage(lang: string | null) {
    if (!lang) lang = this.getUserLanguage();

    this.replaceUnsupportedLangauge(lang);
    this.userLanguage = lang;
    this.translate.use(lang);
  }

  private replaceUnsupportedLangauge(lang: string) {
    if (!this.supportedLanguages.includes(lang)) {
      const userLang = this.getUserLanguage();
      const newUrl = this.router.url.replace(lang, userLang);
      console.log('newURL: ' + newUrl);
      this.router.navigateByUrl(newUrl);
    }
  }

  getUserLanguage(): string {
    if (isPlatformServer(this.platformId)) return 'en';
    const userLang = navigator.language || (navigator.languages && navigator.languages[0]);
    console.log(`Detected user language: ${userLang}`);
    return userLang ? userLang.split('-')[0] : 'en';
  }
}
