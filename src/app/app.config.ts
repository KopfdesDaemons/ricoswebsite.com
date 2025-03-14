import { provideHttpClient, withFetch } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { YamlLanguageLoader } from './utilities/yam-language-loader';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration, withIncrementalHydration } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { routes } from './routes/app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withIncrementalHydration()),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled',
      })
    ),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: () => new YamlLanguageLoader(),
        },
      }),
      BrowserModule,
      FormsModule,
      FontAwesomeModule
    ),
    provideHttpClient(withFetch()),
  ],
};
