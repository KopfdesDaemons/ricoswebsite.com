import { TranslateLoader } from '@ngx-translate/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { parse } from 'yaml';
import { inject } from '@angular/core';

export class YamlLanguageLoader implements TranslateLoader {
  path = '/i18n/';
  http = inject(HttpClient);

  public getTranslation(lang: string): Observable<object> {
    return this.http.get(`${this.path}${lang}.yaml`, { responseType: 'text' }).pipe(map((data) => parse(data) as object));
  }
}
