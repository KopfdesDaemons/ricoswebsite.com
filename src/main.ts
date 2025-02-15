import { Location } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

// Ermöglicht Navigation mit Trailing Slash ohne dass dieser entfernt wird
const __stripTrailingSlash = (Location as any).stripTrailingSlash;
(Location as any).stripTrailingSlash = function _stripTrailingSlash(url: string): string {
  // Zerlege die URL in drei Teile: den Pfad vor dem Fragezeichen, den Query-String und das Fragment
  const urlParts = url.match(/([^?#]*)(\?[^#]*)?(#.*)?/);

  const path = urlParts?.[1] || ''; // Pfad vor Query und Fragment
  const queryString = urlParts?.[2] || ''; // Query-String (optional)
  const fragment = urlParts?.[3] || ''; // Fragment (optional)

  // Wenn der Pfad mit einem Schrägstrich endet, füge einen Punkt vor dem Query-String oder Fragment hinzu
  if (/[^\/]\/$/.test(path)) {
    return path + '.' + queryString + fragment;
  }

  // Falls der Pfad nicht mit einem Schrägstrich endet, rufe die originale stripTrailingSlash Methode auf
  return __stripTrailingSlash(url);
};
