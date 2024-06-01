---
title: "Angular: Integrate Disqus manually"
author: Rico
image: assets/images/disqus-in-angular.avif
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
    import { Inject, Injectable, Renderer2 } from "@angular/core";
    import { DOCUMENT } from "@angular/common";

    @Injectable({
      providedIn: "root",
    })
    export class DisqusService {
      disqus: any;
      shortname: string = "ricoswebsite-com";

      constructor(@Inject(DOCUMENT) private document: Document) {}

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
    import { Component, Input, ElementRef, Renderer2, OnChanges, SimpleChanges } from "@angular/core";
    import { DisqusService } from "src/app/services/disqus.service";

    @Component({
      selector: "app-disqus",
      templateUrl: "./disqus.component.html",
      styleUrls: ["./disqus.component.scss"],
    })
    export class DisqusComponent implements OnChanges {
      @Input() identifier: string | undefined;
      private observer: IntersectionObserver | undefined;

      constructor(public disqusS: DisqusService, public renderer: Renderer2, private elementRef: ElementRef) {}

      ngOnChanges(changes: SimpleChanges): void {
        this.observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) this.isVisible();
          });
        });
        this.observer.observe(this.elementRef.nativeElement);
      }

      ngOnDestroy(): void {
        this.observer?.disconnect();
      }

      isVisible() {
        if (!this.identifier) return;
        if (this.disqusS.consent && this.identifier) {
          this.disqusS.loadDisqus(this.renderer, this.identifier);
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
