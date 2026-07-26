import { provideServerRendering, withRoutes } from '@angular/ssr';
import { mergeApplicationConfig, ApplicationConfig, TransferState } from '@angular/core';
import { appConfig } from './app.config';
import { serverRoutes } from './routes/app.routes.server';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateServerLoader } from './utilities/translate-server.loader';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes)),
    {
      provide: TranslateLoader,
      useClass: TranslateServerLoader,
      deps: [TransferState],
    },
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig, {
  // Override the client-side TranslateModule providers on the server
  providers: [TranslateModule.forRoot({ loader: { provide: TranslateLoader, useClass: TranslateServerLoader, deps: [TransferState] } }).providers!],
});
