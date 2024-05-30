---
title: "ngx-translate: Fix text flickering in 2 steps"
description: A guide on how to fix the flickering of ngx-translate translations when loading the website.
author: Rico
image: assets/images/ng-translate-thumbnail.avif
keywords:
  - ngx-translate
  - Prerendering
  - Angular Localisation
  - Hydration
  - Translations
date: 2024-05-29
---

## The problem: Flickering texts when loading the website

When using [ngx-translate](https://github.com/ngx-translate/core) in Angular websites, translations are loaded from JSON files by default. Each translation is assigned an identifier. When the page is being built, it can happen that the identifier or no text is displayed for a short time instead of the translation. This leads to annoying flickering and, in the worst case, to a layout shift.

![alt text](assets/images/ngx-translate-flickering2.gif "Example of flickering")

![alt text](assets/images/ngx-translate-flickering.gif "Example of flickering")

This issue occurs during [prerendering](https://angular.dev/guide/prerendering). While the flickering is not visible in Single Page Applications (SPA), it occurs after prerendering during [hydration](https://angular.dev/guide/hydration). In prerendered web pages, the flickering only occurs when JavaScript is enabled and hydration is applied.

## Solution: How to fix ngx-translate flickering

### Step 1: Create your own factory

To prevent flickering, translations must be provided before the page is loaded. This requires the creation of a custom _factory_ that is loaded when the app is initialized.

A provider is added in the _app.module.ts_:

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

### Step 2: Implementing the Factory

The following factory is added in the _app.module.ts_:

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
      console.error("Error loading translations", error);
    }
  };
}
```

The flickering should no longer occur.

To make the code clearer, it is advisable to move the factory out of the app.module.ts. A file called `translation.factory.ts` can be created for this purpose.
