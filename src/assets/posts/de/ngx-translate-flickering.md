---
title: "ngx-translate: Flackern der Texte beheben in 2 Schritten"
description: Eine Anleitung wie man das Flackern der Übersetzungen von ngx-translate beim Laden der Webseite beheben kann.
author: Rico
image: assets/images/ng-translate-thumbnail.avif
keywords:
  - ngx-translate
  - Prerendering
  - Angular Localisation
  - Hydration
  - Übersetzungen
date: 2024-05-29
---

## Das Problem: Flackernde Texte beim Laden der Webseite

Bei Verwendung von [ngx-translate](https://github.com/ngx-translate/core) in Angular-Webseiten werden Übersetzungen standardmäßig aus JSON-Dateien geladen. Jeder Übersetzung ist ein Identifier zugeordnet. Beim Aufbau der Seite kann es vorkommen, dass anstelle der Übersetzung kurzzeitig der Identifier oder gar kein Text angezeigt wird. Dies führt zu einem störenden Flackern und im schlimmsten Fall zu einem Layout-Shift.

![alt text](assets/images/ngx-translate-flickering2.gif "Beispiel des Flackerns")

![alt text](assets/images/ngx-translate-flickering.gif "Beispiel des Flackerns")

Diese Problem tritt beim [Prerendering](https://angular.dev/guide/prerendering) auf. Während bei Single Page Applications (SPA) das Flackern nicht sichtbar ist, entsteht es nach dem Prerendern bei der [Hydration](https://angular.dev/guide/hydration). Bei vorgerenderten Webseiten tritt das Flackern nur auf, wenn JavaScript aktiviert ist und die Hydration einsetzt.

## Lösung: So beheben Sie das Flackern von ngx-translate

### Schritt 1: Erstellung einer eigenen Factory

Um das Flackern zu verhindern, müssen die Übersetzungen vor dem Seitenaufbau bereitgestellt werden. Dies erfordert die Erstellung einer eigenen _Factory_, die bei der Initialisierung der App geladen wird.

In der _app.module.ts_ wird ein provider ergänzt:

```typescript
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateService, HttpClient, PLATFORM_ID],
      multi: true
    }
  ],
```

### Schritt 2: Implementierung der Factory

Die folgende factory wird in der _app.module.ts_ ergänzt:

```typescript
export function appInitializerFactory(translate: TranslateService, httpClient: HttpClient, platformId: object) {
  return async () => {
    const languages = ["de", "en"];
    translate.setDefaultLang("en");
    translate.addLangs(languages);

    const path = isPlatformServer(platformId) ? "http://localhost:4200/assets/i18n/" : "assets/i18n/";
    try {
      for (const lang of languages) {
        const translation = await lastValueFrom(httpClient.get(`${path}${lang}.json`));
        translate.setTranslation(lang, translation);
      }
    } catch (error) {
      console.error("Fehler beim Laden der Übersetzungen", error);
    }
  };
}
```

Das Flackern sollte jetzt nicht mehr auftreten.

Um den Code übersichtlicher zu gestalten, ist es ratsam, die Factory aus der app.module.ts auszulagern. Dafür kann eine Datei namens `translation.factory.ts` erstellt werden.
