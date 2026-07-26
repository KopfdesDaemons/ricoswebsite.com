import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ApplicationConfig, importProvidersFrom, provideZonelessChangeDetection, TransferState } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, withInMemoryScrolling, withPreloading } from '@angular/router';
import { LocationStrategy, TrailingSlashPathLocationStrategy } from '@angular/common';
import { routes } from './routes/app.routes';
import { TranslateBrowserLoader } from './utilities/translate-browser.loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideZonelessChangeDetection(),
    { provide: LocationStrategy, useClass: TrailingSlashPathLocationStrategy },
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled',
      }),
      withPreloading(PreloadAllModules),
    ),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: TranslateBrowserLoader,
          deps: [HttpClient, TransferState],
        },
      }),
      BrowserModule,
      FormsModule,
    ),
    provideHttpClient(),
  ],
};
