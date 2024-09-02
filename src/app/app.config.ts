import { HttpClient, provideHttpClient, withFetch } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { YamlLanguageLoader } from "./utilities/yamlLanguageLoader";
import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule, provideClientHydration } from "@angular/platform-browser";
import { provideRouter, withInMemoryScrolling } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AdsenseModule } from "ng2-adsense";
import { routes } from "./app.routes";
import { HighlightService } from "./services/highlight.service";

export const appConfig: ApplicationConfig = {
    providers: [
        provideClientHydration(),
        provideRouter(routes, withInMemoryScrolling({
            scrollPositionRestoration: "top",
            anchorScrolling: 'enabled',
        })),
        importProvidersFrom(
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: (http: HttpClient) => new YamlLanguageLoader(http),
                    deps: [HttpClient]
                }
            }),
            BrowserModule,
            FormsModule,
            FontAwesomeModule,
            AdsenseModule.forRoot({
                adClient: 'ca-pub-1401067475120473',
            })
        ),
        HighlightService,
        provideHttpClient(withFetch()),
    ]
}
