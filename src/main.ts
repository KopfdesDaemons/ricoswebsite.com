import { Location } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));


// Ermöglicht Navigation mit TralingSlash ohne dass dieser entfernt wird
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
