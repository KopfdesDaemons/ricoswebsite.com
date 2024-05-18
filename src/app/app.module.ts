import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
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

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function appInitializerFactory(translate: TranslateService, httpClient: HttpClient) {
  return async () => {
    // Set default languages
    translate.setDefaultLang('en');
    translate.addLangs(['de', 'en']);

    try {
      // Load german translation
      const deTranslations = await lastValueFrom(httpClient.get('assets/i18n/de.json'));
      translate.setTranslation('de', deTranslations);

      // Load english translation
      const enTranslations = await lastValueFrom(httpClient.get('assets/i18n/en.json'));
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
    DisqusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
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
      deps: [TranslateService, HttpClient],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
