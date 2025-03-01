---
title: Über diese Webseite
author: Rico
keywords:
  - Angular
  - Markdown
  - YAML
  - Prerendering
  - GitHub Pages
description: Ein kleiner Einblick, wie diese Website funktioniert.
date: 2024-05-12
---

## Rendering

Diese Website wurde mit Angular erstellt und vorgerendert.
Der initiale Seitenaufruf ist somit statisch und anschließend übernimmt der Browser das Rendering (SPA).
Serverseitiges Rendern erfolgt nicht, damit die Webseite ohne VPS deployt werden kann.

## Hosting

Diese Website wird auf GitHub Pages gehostet.
Das [GitHub Repository](https://github.com/KopfdesDaemons/ricoswebsite.com) ist öffentlich.
Für das Deployment auf GitHub Pages wird [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages) verwendet.

## PageSpeed Insights

![PageSpeed Insights](/images/pagespeed-german.png "PageSpeed Insights")

Durch GitHub Pages ist die Total Blocking Time höher und die Gesamtwertung von 100 beim Punkt "Leistung" wird leider nicht erreicht. Bei der Verwendung eines VPS ist die Total Blocking Time kein Problem.

## Skalierbarkeit

### Blogbeiträge

Die Blogbeiträge werden aus Markdown-Dateien geladen, die alle Metadaten im Header enthalten. Hier ist ein Beispiel:

```yaml
---
title: Über diese Webseite
author: Rico
keywords:
  - Angular
  - Markdown
  - YAML
  - Prerendering
  - GitHub Pages
description: Ein kleiner Einblick, wie diese Website funktioniert.
date: 2024-05-12
---
```

Beim initialen Aufruf der Seite ist die Seite bereits vorgerendert. Beim anschließendem Navigieren werden die Daten per HTTP-Requests geladen. Dabei werden nur 1 - 2 kB für die Markdown-Datei geladen sowie gegebenenfalls Daten für Bilder.

Für einen neuen Blogbeitrag muss nur eine Markdown-Datei erstellt werden. Alle weiteren Daten werden automatisiert erstellt (Sitemap, Liste der Beiträge für den Feed und Liste der Routenparameter fürs Vorrendern).

### Portfoliio

Die Projektinformationen für das Portfolio werden dynamisch aus einer JSON-Datei geladen.

```json
[
  {
    "name": "BlogTube",
    "description": "Ein WordPress-Theme, das auf dem Designschema von YouTube basiert",
    "image": "\\images\\blogtube.avif",
    "features": ["unendlicher Scroll-Feed", "benutzerdefiniertes Sidemenu", "benutzerdefinierte Primärfarbe", "benutzerdefinierte Schriftart"],
    "projectURL": "https://wordpress.org/themes/blogtube/",
    "githubURL": "https://github.com/KopfdesDaemons/blogtube",
    "blogpostURL": "/blogpost/blogtube/.",
    "technologies": ["WordPress", "PHP", "JavaScript"]
  }
]
```
