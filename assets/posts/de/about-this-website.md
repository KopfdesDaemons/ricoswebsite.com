---
title: Über diese Webseite
author: Rico
keywords:
  - angular
  - markdown
  - YAML
description: Ein kleiner Einblick, wie diese Website funktioniert.
date: 2024-05-12
---

## Rendering

Diese Website wurde mit Angular erstellt und mit dem Angular Prerenderer vorgerendert.
Der initiale Seitenaufruf ist statisch und anschließend funktioniert die Website wie eine Single-Page-Application.
Es wird Static Site Generation (SSG) mit Hydratation verwendet.

## Hosting

Diese Website wird auf GitHub Pages gehostet.
Das [GitHub Repository](https://github.com/KopfdesDaemons/ricoswebsite.com) ist öffentlich.
Für das Deployment auf GitHub Pages wird [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages) verwendet.

## Skalierbarkeit

### Blogbeiträge

Die Blogbeiträge werden aus Markdown-Dateien geladen, die alle Metadaten im Header enthalten. Hier ist ein Beispiel:

```yaml
---
title: Über diese Webseite
author: Rico
keywords:
  - angular
  - markdown
  - YAML
description: Ein kleiner Einblick, wie diese Website funktioniert.
date: 2024-05-12
---
```

Beim ersten Aufruf der Seite sind die Daten bereits vorgerendert. Beim Navigieren nach dem ersten Seitenaufruf werden die Daten über http-Requests geladen.

### Portfoliio

Die Projektinformationen für das Portfolio werden dynamisch aus einer JSON-Datei geladen.

```json
"projects": [
{
    "name": "BlogTube",
    "description": "A WordPress theme that is based on the design scheme of YouTube",
    "image": "assets\\images\\blogtube.avif",
    "features": [
        "infinite scroll feed",
        "custom sidemenu",
        "custom primary color",
        "custom font"
    ],
    "projectURL": "https://wordpress.org/themes/blogtube/",
    "githubURL": "https://github.com/KopfdesDaemons/blogtube",
    "technologies": [
        "WordPress",
        "PHP",
        "JavaScript"
    ]
},]
```
