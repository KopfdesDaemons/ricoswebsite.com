import { TranslateService } from '@ngx-translate/core';
import { APP_INITIALIZER, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export function createTranslateLoader(translate: TranslateService, http: HttpClient, platformId: object) {
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

export const TRANSLATE_PROVIDER = {
    provide: APP_INITIALIZER,
    useFactory: createTranslateLoader,
    deps: [TranslateService, HttpClient, PLATFORM_ID],
    multi: true
};
