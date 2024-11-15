---
title: "Angular: Vorrendern für ein Deployment auf GitHub Pages"
author: Rico
image: assets/images/angular-github-pages.avif
keywords:
  - Angular
  - GitHub Pages
  - Prerendering
description: Eine Anleitung für das Deployment eines Angular Projekts auf GitHub Pages mit vorgerenderten Seiten.
date: 2024-09-07
---

Der Angular Application Builder rendert ein Angular Projekt bereits vor, ist jedoch auf ein Deploment mit einem Backend ausgelegt. Standardmäßig laufen alle Requsts über die `server.mjs`, welche per Node im Backend läuft. Um den Application Builder für ein Deployment nur mit den vorgerenderten Dateien nutzen zu können, müssen ein paar Dinge beachtet werden.

Mit dem Befehl `ng build` wird das Projekt bereits vorgerendert. Die vorgerenderten Dateien sind im Verzeichnis `dist/projektname/browser/` zufinden. Für jede Route hat der Application Builder ein eigenes Verzeichnis angelegt, welches den Namen der Route trägt und eine `index.html` beinhaltet. Startet man einen HTTP-Server in diesem Verzeichnis, kann man die vorgerenderte Seite bereits testen.

### Das Trailing Slash Problem

Ohne weitere Anpassugen stößt man in den Entwicklertools im Netzwerktab auf ein Problem: Beim Aufruf der Seite erfolgt ein Redirect. Die Anfrage erfolgt ohne Slash am Ende der URL und daraufhin folgt eine Weiterleitung zu der URL mit Trailing Slash.

![302 Redirect](assets/images/302.avif "302 Redirect")

Die Ursache dafür ist, dass der HTTP-Server nach einer Datei sucht, aber ein Verzeichnis vorfindet. Bei der Anfrage `domain.de/legal-notice` versucht der HTTP-Server die Datei `domain.de/legal-notice.html` zu finden. Da es diese Datei nicht gibt, erflogt die Weiterleitung zu `domain.de/legal-notice/index.html`. Um die Weiterleitung zu verhindern, sollte direkt die URL `domain.de/legal-notice/` aufgerufen werden.

Nun bleibt noch das Problem, dass Angular nach dem Aufruf von `domain.de/legal-notice/` die URL zu `domain.de/legal-notice` ändert. Das führt wieder zu dem Problem mit der Weiterleitung beim Neuladen der Seite. Das folgende Script in der `main.ts` verhindert, dass Angular den Trailing Slash entfernt:

```typescript
import { Location } from "@angular/common";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { appConfig } from "./app/app.config";

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

// Ermöglicht Navigation mit Trailing Slash ohne dass dieser entfernt wird
const __stripTrailingSlash = (Location as any).stripTrailingSlash;
(Location as any).stripTrailingSlash = function _stripTrailingSlash(url: string): string {
  // Zerlege die URL in drei Teile: den Pfad vor dem Fragezeichen, den Query-String und das Fragment
  const urlParts = url.match(/([^?#]*)(\?[^#]*)?(#.*)?/);

  const path = urlParts?.[1] || ""; // Pfad vor Query und Fragment
  const queryString = urlParts?.[2] || ""; // Query-String (optional)
  const fragment = urlParts?.[3] || ""; // Fragment (optional)

  // Wenn der Pfad mit einem Schrägstrich endet, füge einen Punkt vor dem Query-String oder Fragment hinzu
  if (/[^\/]\/$/.test(path)) {
    return path + "." + queryString + fragment;
  }

  // Falls der Pfad nicht mit einem Schrägstrich endet, rufe die originale stripTrailingSlash Methode auf
  return __stripTrailingSlash(url);
};
```

Alle Pfade der Routen in Angular müssen einen Trailing Slash haben. Diese müssen mit einem Punkt dahinter geschrieben werden.

```typescript
export const routes: Routes = [
  { path: "", loadComponent: () => import("./routes/home/home.component").then((m) => m.HomeComponent) },
  { path: "legal-notice/.", loadComponent: () => import("./routes/legal-notice/legal-notice.component").then((m) => m.LegalNoticeComponent) },
  { path: "legal-notice", loadComponent: () => import("./routes/legal-notice/legal-notice.component").then((m) => m.LegalNoticeComponent) },
];
```

Der Aufruf muss ebenfalls mit einem Punkt enden:

```html
<a routerLink="/legal-notice/.">legal-notice</a>
```

## Testen der vorgerenderten Seite

Vor dem Deployment sollte die vorgerenderte Seite getestet werden.

_Wechsel in das Verzeichnis_

```bash
cd dist/projektname/browser
```

_Starten des HTTP-Servers_

```bash
http-server
```

## Deployment auf GitHub Pages

Das Verzeichnis `dist/projektname/browser/` muss auf GitHub Pages geladen werden. Dies kann entweder manuell gemacht werden oder mit Hilfe von [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages).

Damit ist das Deployment nur ein Befehl:

```bash
npx angular-cli-ghpages --dir=dist/projektname/browser --cname=domain.com
```
