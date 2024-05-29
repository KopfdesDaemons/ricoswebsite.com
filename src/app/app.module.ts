import { APP_INITIALIZER, NgModule, PLATFORM_ID } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LegalNoticeComponent } from './routes/legal-notice/legal-notice.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { BlogPostComponent } from './routes/blog-post/blog-post.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import { HighlightService } from './services/highlight.service';
import { DisqusComponent } from './components/disqus/disqus.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { lastValueFrom } from 'rxjs';
import { isPlatformServer } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageSwitchOfferComponent } from './components/language-switch-offer/language-switch-offer.component';
import { ConsentManagerComponent } from './components/consent-manager/consent-manager.component';
import { BlogComponent } from './routes/blog/blog.component';
import { BlogpostCardComponent } from './components/blogpost-card/blogpost-card.component';


export function appInitializerFactory(translate: TranslateService, http: HttpClient, platformId: object) {
  return async () => {

    const languages = ['en', 'de'];
    translate.setDefaultLang('en');
    translate.addLangs(languages);

    const path = isPlatformServer(platformId) ? 'http://localhost:4200/assets/i18n/' : 'assets/i18n/';
    try {
      // Load translations for each language in the array
      for (const lang of languages) {
        const translations = await fetchYaml(`${path}${lang}.yaml`);
        translate.setTranslation(lang, translations);
      }
    } catch (error) {
      console.error('Fehler beim Laden der Übersetzungen', error);
    }

    async function fetchYaml(path: string): Promise<{ [key: string]: string }> {
      const response = await lastValueFrom(http.get(path, { responseType: 'text' }));
      let lines: string[] = response.split('\n');
      let object: { [key: string]: string } = {};

      lines.forEach((line: string) => {
        let delimiter = line.indexOf(':');
        if (delimiter !== -1) {
          let key = line.slice(0, delimiter).trim();
          let value = line.slice(delimiter + 1).trim();
          object[key] = value;
        }
      });

      return object;
    }
  }
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProjectCardComponent,
    FooterComponent,
    LegalNoticeComponent,
    SidemenuComponent,
    BlogPostComponent,
    SafeHtmlPipe,
    DisqusComponent,
    LanguageSwitchOfferComponent,
    ConsentManagerComponent,
    BlogComponent,
    BlogpostCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    TranslateModule.forRoot()
  ],
  providers: [
    provideClientHydration(),
    HighlightService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateService, HttpClient, PLATFORM_ID],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
