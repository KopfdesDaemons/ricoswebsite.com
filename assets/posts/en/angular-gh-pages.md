---
title: "Angular: Pre-rendering for deployment on GitHub Pages"
author: Rico
image: assets/images/angular-github-pages.avif
keywords:
  - Angular
  - GitHub Pages
  - Prerendering
description: A guide for deploying an Angular project to GitHub Pages with pre-rendered pages.
date: 2024-09-07
---

The Angular Application Builder pre-renders an Angular project, but is designed for deployment with a backend. By default, all requests run via `server.mjs`, which runs in the backend via Node. In order to be able to use the Application Builder for a deployment with only the pre-rendered files, a few things have to be taken into account.

The project is pre-rendered with the `ng build` command. The pre-rendered files can be found in the `dist/projectname/browser/` directory. The Application Builder has created a separate directory for each route, which has the name of the route and contains an `index.html`. If you start an HTTP server in this directory, you can already test the pre-rendered page.

### The trailing slash problem

Without further adjustments, you will encounter a problem in the network tab of the developer tools: When you call up the page, a redirect occurs. The request is made without a slash at the end of the URL and is then redirected to the URL with a trailing slash.

![302 Redirect](assets/images/302.avif "302 Redirect")

The reason for this is that the HTTP server is looking for a file but finds a directory. When requesting `domain.de/legal-notice`, the HTTP server tries to find the file `domain.de/legal-notice.html`. Since this file does not exist, the redirection to `domain.de/legal-notice/index.html` occurs. To prevent the redirection, the URL `domain.de/legal-notice/` should be called directly.

Now the problem remains that Angular changes the URL to `domain.de/legal-notice` after calling `domain.de/legal-notice/`. This leads again to the problem with the redirection when reloading the page. The following script in `main.ts` prevents Angular from removing the trailing slash:

```typescript
import { Location } from "@angular/common";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { appConfig } from "./app/app.config";

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

// Enables navigation with a trailing slash without removing it
const __stripTrailingSlash = (Location as any).stripTrailingSlash;
(Location as any).stripTrailingSlash = function _stripTrailingSlash(url: string): string {
  // Split the URL into three parts: the path before the question mark, the query string, and the fragment
  const urlParts = url.match(/([^?#]*)(\?[^#]*)?(#.*)?/);

  const path = urlParts?.[1] || ""; // Path before query and fragment
  const queryString = urlParts?.[2] || ""; // Query string (optional)
  const fragment = urlParts?.[3] || ""; // Fragment (optional)

  // If the path ends with a slash, add a dot before the query string or fragment
  if (/[^\/]\/$/.test(path)) {
    return path + "." + queryString + fragment;
  }

  // If the path does not end with a slash, call the original stripTrailingSlash method
  return __stripTrailingSlash(url);
};
```

All route paths in Angular must have a trailing slash, followed by a dot.

```typescript
export const routes: Routes = [
  { path: "", loadComponent: () => import("./routes/home/home.component").then((m) => m.HomeComponent) },
  { path: "legal-notice/.", loadComponent: () => import("./routes/legal-notice/legal-notice.component").then((m) => m.LegalNoticeComponent) },
  { path: "legal-notice", loadComponent: () => import("./routes/legal-notice/legal-notice.component").then((m) => m.LegalNoticeComponent) },
];
```

The call must also end with a period:

```html
<a routerLink="/legal-notice/.">legal-notice</a>
```

## Testing the pre-rendered page

The pre-rendered page should be tested before deployment.

_Change to the directory_

```bash
cd dist/projektname/browser
```

_Starting the HTTP server_

```bash
http-server
```

## Deployment on GitHub Pages

The directory `dist/projectname/browser/` must be uploaded to GitHub Pages. This can be done either manually or with the help of [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages).

The deployment is just one command:

```bash
npx angular-cli-ghpages --dir=dist/projektname/browser --cname=domain.com
```
