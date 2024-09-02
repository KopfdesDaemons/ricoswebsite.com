import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class YamlLanguageLoader implements TranslateLoader {
    constructor(private http: HttpClient) { }

    getTranslation(lang: string): Observable<any> {
        const path = `assets/i18n/${lang}.yaml`;

        return new Observable(observer => {
            this.http.get(path, { responseType: 'text' }).subscribe(
                response => {
                    const translations = this.parseYaml(response);
                    observer.next(translations);
                    observer.complete();
                },
                error => {
                    console.error('Fehler beim Laden der Übersetzungen', error);
                    observer.error(error);
                }
            );
        });
    }

    private parseYaml(yamlString: string): { [key: string]: string } {
        const lines = yamlString.split('\n');
        const result: { [key: string]: string } = {};

        lines.forEach(line => {
            const delimiter = line.indexOf(':');
            if (delimiter !== -1) {
                const key = line.slice(0, delimiter).trim();
                const value = line.slice(delimiter + 1).trim();
                result[key] = value;
            }
        });

        return result;
    }
}
