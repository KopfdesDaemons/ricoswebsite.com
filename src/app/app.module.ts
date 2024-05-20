import { APP_INITIALIZER, NgModule, PLATFORM_ID, Inject } from '@angular/core';
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
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { lastValueFrom } from 'rxjs';
import { isPlatformServer, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageSwitchOfferComponent } from './components/language-switch-offer/language-switch-offer.component';

export function HttpLoaderFactory(http: HttpClient, platformId: object) {
  const path = isPlatformServer(platformId) ? 'http://localhost:4200/assets/i18n/' : 'assets/i18n/';
  return new TranslateHttpLoader(http, path, '.json');
}

export function appInitializerFactory(translate: TranslateService, httpClient: HttpClient, platformId: object) {
  return async () => {
    // Set default languages
    translate.setDefaultLang('en');
    translate.addLangs(['de', 'en']);

    const path = isPlatformServer(platformId) ? 'http://localhost:4200/assets/i18n/' : 'assets/i18n/';
    try {
      // Load german translation
      const deTranslations = await lastValueFrom(httpClient.get(`${path}de.json`));
      translate.setTranslation('de', deTranslations);

      // Load english translation
      const enTranslations = await lastValueFrom(httpClient.get(`${path}en.json`));
      translate.setTranslation('en', enTranslations);
    } catch (error) {
      console.error('Fehler beim Laden der Übersetzungen', error);
    }
  };
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
    LanguageSwitchOfferComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient, PLATFORM_ID]
      }
    }),
  ],
  providers: [
    provideClientHydration(),
    HighlightService,
    [TranslateService],
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
