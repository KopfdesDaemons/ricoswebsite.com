---
title: "Angular: Integrate Disqus manually with own service"
author: Rico
image: /images/disqus-in-angular.avif
keywords:
  - Integrate Disqus
  - Angular Disqus
  - Manually integrate Angular Disqus
  - Disqus in Angular
description: A guide on how to embed Disqus in Angular without any additional dependencies.
date: 2024-05-30
---

## What is Disqus?

[Disqus](https://disqus.com/) is a practical solution for integrating a comment function on a website without having to develop your own comment system. Disqus provides the database and offers management functions for comments.

## How to use Disqus in Angular?

While [ngx-disqus](https://github.com/MurhafSousli/ngx-disqus) offers a ready-made solution for integrating Disqus with Angular, a manual implementation can be an attractive alternative. This avoids additional dependencies and only uses the script provided by Disqus.

## How to integrate Disqus with Angular manually?

Integrating Disqus with Angular works a little differently because Angular is a single page application (SPA). The script cannot simply be embedded as a script tag. When the content changes, the Disqus reset function must also be called correctly. A Disqus service and a Disqus component are required:

1.  **Create a Disqus service**

    First you need a service that can load Disqus:

    ```typescript
    import { inject, Injectable, Renderer2 } from "@angular/core";
    import { DOCUMENT } from "@angular/common";

    @Injectable({
      providedIn: "root",
    })
    export class DisqusService {
      private disqus: any;
      private readonly shortname: string = "your-disqus-shortname";
      private readonly document = inject(DOCUMENT);

      loadDisqus(renderer: Renderer2, id: string): void {
        this.disqus = (window as any)["DISQUS"];
        if (!this.disqus) {
          (window as any).disqus_config = function () {
            this.page.identifier = id;
          };
          const script = renderer.createElement("script");
          script.type = "text/javascript";
          script.src = "https://" + this.shortname + ".disqus.com/embed.js";
          renderer.appendChild(this.document.body, script);
        } else {
          (window as any)["DISQUS"].reset({
            reload: true,
            config: function () {
              this.page.identifier = id;
            },
          });
        }
      }
    }
    ```

2.  **Create a Disqus component**

    In order to be able to use Disqus again easily, a Disqus component is useful. The Disqus component should only load Disqus when the user has scrolled to the comments. This avoids unnecessary HTTP requests.

    `disqus.component.html`:

    ```html
    <div id="disqus_thread"></div>
    ```

    `disqus.component.ts`:

    ```typescript
    import { Component, ElementRef, Renderer2, ViewChild, OnChanges, PLATFORM_ID, inject, input } from "@angular/core";
    import { DisqusService } from "src/app/services/disqus.service";
    import { faComment } from "@fortawesome/free-regular-svg-icons";
    import { isPlatformBrowser } from "@angular/common";
    import { FaIconComponent } from "@fortawesome/angular-fontawesome";
    import { RouterLink } from "@angular/router";
    import { TranslateModule } from "@ngx-translate/core";

    @Component({
      selector: "app-disqus",
      templateUrl: "./disqus.component.html",
      styleUrls: ["./disqus.component.scss"],
      imports: [FaIconComponent, RouterLink, TranslateModule],
    })
    export class DisqusComponent implements OnChanges {
      private disqusS = inject(DisqusService);
      private renderer = inject(Renderer2);
      private elementRef = inject(ElementRef);
      private platformId = inject<object>(PLATFORM_ID);

      readonly identifier = input<string>();
      disqusDiv = ViewChild("disqusDiv");
      private observer: IntersectionObserver | undefined;
      faComment = faComment;

      ngOnChanges(): void {
        if (!isPlatformBrowser(this.platformId)) return;
        if (this.observer) this.observer.disconnect();
        if (!this.identifier()) return;
        this.observer = new IntersectionObserver((entries) => {
          entries.forEach(async (entry) => {
            if (entry.isIntersecting) await this.isVisible();
          });
        });
        this.observer.observe(this.elementRef.nativeElement);
      }

      ngOnDestroy(): void {
        this.observer?.disconnect();
      }

      async isVisible() {
        const identifier = this.identifier();
        if (identifier) {
          await this.disqusS.loadDisqus(this.renderer, identifier);
          this.observer?.disconnect();
        }
      }
    }
    ```

3.  **Use Disqus component**

    Now we can use the Disqus component in Angular:

    ```html
    <app-disqus [identifier]="yourID"></app-disqus>
    ```
