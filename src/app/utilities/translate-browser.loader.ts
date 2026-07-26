import { HttpClient } from '@angular/common/http';
import { Injectable, makeStateKey, TransferState } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { map, Observable, of } from 'rxjs';
import * as yaml from 'js-yaml';

type TranslationObject = Record<string, unknown>;

@Injectable()
export class TranslateBrowserLoader implements TranslateLoader {
  constructor(
    private http: HttpClient,
    private transferState: TransferState,
  ) {}

  public getTranslation(lang: string): Observable<TranslationObject> {
    const key = makeStateKey<TranslationObject | null>('transfer-translate-' + lang);
    const data = this.transferState.get(key, null);

    // Looking for the translations in transfer-state, if not found, http load as fallback
    if (data) {
      return of(data);
    } else {
      return this.http.get(`/i18n/${lang}.yaml`, { responseType: 'text' }).pipe(map((response) => yaml.load(response) as TranslationObject));
    }
  }
}
