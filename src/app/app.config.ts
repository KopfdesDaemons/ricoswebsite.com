import { provideHttpClient, withFetch } from "@angular/common/http";
import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule, provideClientHydration } from "@angular/platform-browser";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { TranslateModule } from "@ngx-translate/core";
import { AdsenseModule } from "ng2-adsense";
import { AppRoutingModule } from "./app-routing.module";
import { TRANSLATE_PROVIDER } from "./provider/translation.factory";
import { HighlightService } from "./services/highlight.service";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        importProvidersFrom(
            TranslateModule.forRoot(),
            BrowserModule,
            FormsModule,
            AppRoutingModule,
            FontAwesomeModule,
            AdsenseModule.forRoot({
                adClient: 'ca-pub-1401067475120473',
            })),
        provideClientHydration(),
        HighlightService,
        TRANSLATE_PROVIDER,
        provideHttpClient(withFetch())
    ]
}