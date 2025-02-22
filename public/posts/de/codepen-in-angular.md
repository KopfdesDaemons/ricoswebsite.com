---
title: CodePen in Angular integrieren
author: Rico
image: /images/codepen-screenshot.avif
keywords:
  - CodePen integrieren
  - Angular CodePen
  - Angular CodePen einbetten
  - CodePen in Angular
description: Lerne, wie man mit dieser Schritt-für-Schritt-Anleitung CodePen-Snippets in einem Angular-Projekt integrieren kann.
date: 2024-05-18
---

## Was ist CodePen?

[CodePen](https://codepen.io/) ist ein beliebter Online-Code-Editor und Community-Plattform, die es Entwicklern ermöglicht, Code-Snippets zu schreiben und zu teilen. Es bietet eine bequeme Möglichkeit, interaktive Elemente zu präsentieren und Code-Funktionalitäten zu testen.

## Anleitung: CodePen manuell in Angular integrieren

1. **Skript-Service erstellen:**

   Erstelle einen neuen Service namens `ScriptService`, um die Skriptladung dynamisch zu handhaben.

   ```typescript
   import { DOCUMENT } from "@angular/common";
   import { Injectable, Renderer2, inject } from "@angular/core";

   @Injectable({
     providedIn: "root",
   })
   export class ScriptService {
     private document = inject<Document>(DOCUMENT);

     addJsScript(renderer: Renderer2, src: string): Promise<void> {
       return new Promise<void>((resolve, reject) => {
         const existingScript = this.document.querySelector(`script[src="${src}"]`);
         if (existingScript) {
           resolve();
           return;
         }

         const script = renderer.createElement("script");
         script.type = "text/javascript";
         script.src = src;
         script.onload = () => resolve();
         script.onerror = () => reject(new Error(`Error loading script: ${src}`));
         renderer.appendChild(this.document.body, script);
       });
     }

     async reloadJsScript(renderer: Renderer2, src: string) {
       this.removeJsScript(src);
       await this.addJsScript(renderer, src);
     }

     removeJsScript(src: string): void {
       const existingScript = this.document.querySelector(`script[src="${src}"]`);
       if (existingScript) {
         existingScript.remove();
       }
     }
   }
   ```

2. **CodePen in der Komponente laden:**

   Nun laden wir CodePen in der Komponente:

   ```typescript
   import { Component, inject, OnInit, Renderer2 } from "@angular/core";
   import { ScriptService } from "../../services/script.service";

   @Component({
     selector: "app-codepen",
     templateUrl: "./codepen.component.html",
     styleUrl: "./codepen.component.scss",
   })
   export class CodepenComponent implements OnInit {
     private scriptS = inject(ScriptService);
     private renderer = inject(Renderer2);

     async ngOnInit(): Promise<void> {
       await this.scriptS.reloadJsScript(this.renderer, "https://cpwebassets.codepen.io/assets/embed/ei.js");
     }
   }
   ```

   Das HTML der Komponente sieht wie folgt aus:

   ```html
   <ng-content></ng-content>
   ```

3. **CodePen Komponente benutzen:**

   - Öffne das gewünschtes CodePen-Snippet auf der CodePen Webseite
   - Klicke unten auf "Embed"
   - Kopiere den bereitgestellten HTML-Code **(Ohne das Script-Tag)**

   ```html
   <p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="result" data-slug-hash="NWOQYqz" data-editable="true" data-user="Rico-the-bold" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
     <span>See the Pen <a href="https://codepen.io/Rico-the-bold/pen/NWOQYqz"> Material Buttons</a> by Rico (<a href="https://codepen.io/Rico-the-bold">@Rico-the-bold</a>) on <a href="https://codepen.io">CodePen</a>.</span>
   </p>
   ```

   - Füge das HTML von CodePen in das HTML-Tag der Komponente ein:

   ```html
   <app-codepen>
     <p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="result" data-slug-hash="NWOQYqz" data-editable="true" data-user="Rico-the-bold" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em">
       <span>See the Pen <a href="https://codepen.io/Rico-the-bold/pen/NWOQYqz">Material Buttons</a> by Rico (<a href="https://codepen.io/Rico-the-bold">Rico-the-bold</a>)on <a href="https://codepen.io">CodePen</a>.</span>
     </p>
   </app-codepen>
   ```
