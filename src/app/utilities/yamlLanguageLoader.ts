import { TranslateLoader } from '@ngx-translate/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { parse } from 'yaml';

export class YamlLanguageLoader implements TranslateLoader {
    constructor(
        private http: HttpClient,
        public path: string = '/assets/i18n/'
    ) { }

    public getTranslation(lang: string): Observable<Object> {
        return this.http
            .get(`${this.path}${lang}.yaml`, { responseType: 'text' })
            .pipe(map((data) => parse(data)));
    }
}
