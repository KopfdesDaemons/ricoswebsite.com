/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

import { Location } from '@angular/common';


// Ermöglicht Navigation mit TralingSlash
const __stripTrailingSlash = (Location as any).stripTrailingSlash;
(Location as any).stripTrailingSlash = function _stripTrailingSlash(url: string): string {

  // Zerlege die URL in zwei Teile: den Pfad vor dem Fragezeichen und den Query-String nach dem Fragezeichen
  const queryString$ = url.match(/([^?]*)?(.*)/);

  if (queryString$ && queryString$[2].length > 0) {
    // Überprüfe, ob der Pfad (vor dem Query-String) mit einem Schrägstrich endet
    // Falls ja, füge einen Punkt vor dem Query-String hinzu
    // Andernfalls, rufe die originale stripTrailingSlash Methode auf
    return /[^\/]\/$/.test(queryString$[1]) ? queryString$[1] + '.' + queryString$[2] : __stripTrailingSlash(url);
  }

  // Wenn kein Query-String vorhanden ist oder dieser leer ist
  // Überprüfe, ob URL mit Schrägstrich endet und füge Punkt hinzu
  // Andernfalls, rufe die originale stripTrailingSlash Methode auf
  return /[^\/]\/$/.test(url) ? url + '.' : __stripTrailingSlash(url);
};
