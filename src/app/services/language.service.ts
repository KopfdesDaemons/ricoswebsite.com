import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter, map } from 'rxjs/operators';

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
  ) {
    this.setLanguage();
  }

  private setLanguage() {
    if (isPlatformServer(this.platformId)) {
      this.route.params.subscribe(params => {
        const lang = params['lang'];
        console.log(`Server-side lang param: ${lang}`);
        this.updateLanguage(lang);
      });
    } else {
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.route),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        map(route => route.snapshot.paramMap.get('lang'))
      ).subscribe(lang => {
        this.updateLanguage(lang);
      });
    }
  }

  private updateLanguage(lang: string | null) {
    if (!lang) {
      lang = this.getUserLanguage();
    }

    if (!this.supportedLanguages.includes(lang)) {
      const userLang = this.getUserLanguage();
      const newUrl = this.router.url.replace(lang, userLang);
      console.log('newURL: ' + newUrl);
      this.router.navigateByUrl(newUrl);
    }
    this.userLanguage = lang;
    this.translate.use(lang);
  }

  private getUserLanguage(): string {
    if (isPlatformServer(this.platformId)) return 'en';
    const userLang = navigator.language || (navigator.languages && navigator.languages[0]);
    console.log(`Detected user language: ${userLang}`);
    return userLang ? userLang.split('-')[0] : 'en';
  }
}
