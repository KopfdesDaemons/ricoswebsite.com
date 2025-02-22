---
title: "Angular: Disqus manuell integrieren mit eigenem Service"
author: Rico
image: /images/disqus-in-angular.avif
keywords:
  - Disqus integrieren
  - Angular Disqus
  - Angular Disqus manuell einbinden
  - Disqus in Angular
description: Eine Anleitung, wie man Disqus ohne weitere Abhängigkeiten in Angular einbetten kann.
date: 2024-05-30
---

## Was ist Disqus?

[Disqus](https://disqus.com/) ist eine praktische Lösung zur Integration einer Kommentarfunktion auf einer Website, ohne ein eigenes Kommentarsystem entwickeln zu müssen. Disqus stellt die Datenbank bereit und bietet eine Verwaltungsfunktionen für Kommentare.

## Wie wird Disqus in Angular genutzt?

Während [ngx-disqus](https://github.com/MurhafSousli/ngx-disqus) eine vorgefertigte Lösung für die Integration von Disqus mit Angular bietet, kann eine manuelle Implementierung eine attraktive Alternative sein. Dadurch werden zusätzliche Abhängigkeiten vermieden, und nur das von Disqus bereitgestellte Skript wird verwendet.

## Wie kann man Disqus manuell in Angular integrieren?

Die Integration von Disqus in Angular funktioniert etwas anders, da Angular eine Single Page Application (SPA) ist. Das Script kann nicht einfach als Script-Tag eingebettet werden. Wenn sich der Inhalt ändert, muss die Disqus Reset-Funktion ebenfalls richtig aufgerufen werden. Benötigt wird ein Disqus Service sowie eine Disqus Komponente:

1.  **Einen Disqus Service erstellen**

    Zuerst wird ein Service benötigt, der Disqus laden kann:

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

2.  **Disqus Komponente erstellen**

    Um Disqus leicht wieder verwenden zu können, ist eine Disqus Komponente sinnvoll. Die Disqus Komponente sollte Disqus erst laden, wenn der Nutzer zu den Kommentaren gescrollt hat. So werden unnötige HTTP Request vermieden.

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

3.  **Disqus Komponente verwenden**

    Nun können wir die Disqus Komponente in Angular verwenden:

    ```html
    <app-disqus [identifier]="yourID"></app-disqus>
    ```
