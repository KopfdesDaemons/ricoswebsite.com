---
title: Ngx-translate - Flackern der Übersetzungsstrings beheben
description: Eine Anleitung wie man die Verzögerung beim Laden der Übersetzungen mit ng-translate beheben kann.
author: Rico
image: assets/images/ng-translate-flickering-post-thumbnail.avif
keywords:
  - ngx-translate
  - angular universal
  - angular localisation
date: 2024-05-29
---

## Das Problem: Beim Laden der Seite flackern kurz die Identifier auf

Die Übersetzungen werden standardmäßig aus JSON Dateien geladen. Für jede Übersetzung gibt es einen Identifier, dem ein Übersetzungsstring zugeordnet ist. Bei Aufbau der Seite wird, statt der Übersetzung, für einen kurzen Augenblick der Identifier angezeigt. Dies verursacht ein Flackern und im schlimmsten Fall ein Layout-Shift.

![alt text](assets/images/ngx-translate-flickering.gif "Beispiel des Flackerns")

Beim [Prerendering](https://angular.dev/guide/prerendering#how-to-prerender-a-page) werden die Übersetzungen nicht gerendert und im vorgerendertem HTML sind die Identifier sichtbar. Erst bei der [Hydration](https://angular.dev/guide/hydration) werden die Übersetzungen geladen. Auch in Hinblick auf SEO ist dies nicht wünschenswert.

## Warum kommt es zum Flackern bei ngx-translate?

Das Flackern kommt daher, da die Übersetzungen asynchron geladen werden und beim Aufbau der Seite noch nicht bereitgestellt wurden. Daher wird als Fallback der Identifier angezeigt.

## Wie behebt man das Flackern bei ngx-translate?

Die Lösung des Problems ist die Bereitstellung der Übersetzungen vor dem Aufbau der Seite. Um dies zu ermöglichen muss eine eigene `Factory` geschrieben werden. Diese Factory muss bei der Appinitialisierung geladen werden und stellt die Übersetzungen bereit.

In der app.module.ts wird ein provider ergänzt:

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

Dann fehlt noch die Factory. Die kann auch in der app.module.ts ergänzt werden oder ausgelagert werden:

```typescript
export function appInitializerFactory(translate: TranslateService, httpClient: HttpClient, platformId: object) {
  return async () => {
    // Setze standard Sprache
    translate.setDefaultLang("en");
    translate.addLangs(["en", "de"]);

    const path = isPlatformServer(platformId) ? "http://localhost:4200/assets/i18n/" : "assets/i18n/";
    try {
      // Lade deutsche Übersetzung
      const deTranslations = await lastValueFrom(httpClient.get(`${path}de.json`));
      translate.setTranslation("de", deTranslations);

      // Lade englische Übersetzung
      const enTranslations = await lastValueFrom(httpClient.get(`${path}en.json`));
      translate.setTranslation("en", enTranslations);
    } catch (error) {
      console.error("Fehler beim Laden der Übersetzungen", error);
    }
  };
}
```
