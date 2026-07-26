import { Injectable, makeStateKey, TransferState } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import * as fs from 'fs';
import * as yaml from 'js-yaml';

type TranslationObject = Record<string, unknown>;

@Injectable()
export class TranslateServerLoader implements TranslateLoader {
  constructor(private transferState: TransferState) {}

  public getTranslation(lang: string): Observable<TranslationObject> {
    const key = makeStateKey<TranslationObject | null>('transfer-translate-' + lang);

    // Check if translations are already in TransferState
    if (this.transferState.hasKey(key)) {
      return of(this.transferState.get(key, null)!);
    }

    const path = `dist/ricoswebsite.com/browser/i18n/${lang}.yaml`;

    try {
      const data = fs.readFileSync(path, 'utf8');
      const translations = yaml.load(data) as TranslationObject;
      this.transferState.set(key, translations);
      return of(translations);
    } catch (e) {
      console.error(`Translation file not found for lang ${lang} at ${path}`);
      return of({});
    }
  }
}
