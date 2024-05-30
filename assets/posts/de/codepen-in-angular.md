---
title: CodePen in Angular integrieren (DSGVO konform)
author: Rico
image: assets/images/codepen-screenshot.avif
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

## Schritt-für-Schritt-Anleitung: CodePen in einem Angular-Projekt integrieren

Die Integration von CodePen-Snippets in ein Angular-Projekt umfasst folgende Schritte:

1. **HTML-Code einbetten:**

   - Öffne das gewünschtes CodePen-Snippet
   - Klicke unten auf "Embed"
   - Kopiere den bereitgestellten HTML-Code **(Ohne das Script-Tag)**

   ```html
   <p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="result" data-slug-hash="NWOQYqz" data-editable="true" data-user="Rico-the-bold" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
     <span>See the Pen <a href="https://codepen.io/Rico-the-bold/pen/NWOQYqz"> Material Buttons</a> by Rico (<a href="https://codepen.io/Rico-the-bold">@Rico-the-bold</a>) on <a href="https://codepen.io">CodePen</a>.</span>
   </p>
   ```

2. **Ein Skript-Service integrieren:**

   - Erstelle einen neuen Service namens `ScriptService`, um die Skriptladung dynamisch zu handhaben.
   - Dieser Service stellt sicher, dass das CodePen-Skript nur einmal geladen und bei Bedarf neu geladen wird.

   ```typescript
   import { DOCUMENT } from "@angular/common";
   import { Inject, Injectable, Renderer2 } from "@angular/core";

   @Injectable({
     providedIn: "root",
   })
   export class ScriptService {
     constructor(@Inject(DOCUMENT) private document: Document) {}

     addJsScript(renderer: Renderer2, src: string) {
       const existingScript = this.document.querySelector(`script[src="${src}"]`);
       if (existingScript) return;

       const script = renderer.createElement("script");
       script.type = "text/javascript";
       script.src = src;
       renderer.appendChild(this.document.body, script);
     }

     reloadJsScript(renderer: Renderer2, src: string) {
       this.removeJsScript(src);
       this.addJsScript(renderer, src);
     }

     private removeJsScript(src: string): void {
       const existingScript = this.document.querySelector(`script[src="${src}"]`);
       if (existingScript) {
         existingScript.remove();
       }
     }

     ceckIfJsScriptExist(src: string): boolean {
       return !!this.document.querySelector(`script[src="${src}"]`);
     }
   }
   ```

3. **Einen Consent-Service integrieren:**

   Um die Zustimmung des Nutzers gemäß der DSGVO einzuholen, bevor wir CodePen laden, integrieren wir einen Consent-Service.

   ```typescript
   import { isPlatformServer } from "@angular/common";
   import { Inject, Injectable, PLATFORM_ID } from "@angular/core";

   @Injectable({
     providedIn: "root",
   })
   export class ConsentService {
     constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

     giveConsent(serviceName: string) {
       if (isPlatformServer(this.platformId)) return;
       localStorage.setItem(serviceName + "Consent", "true");
     }

     checkConsent(serviceName: string): boolean {
       if (isPlatformServer(this.platformId)) return false;
       return localStorage.getItem(serviceName + "Consent") === "true";
     }
   }
   ```

4. **Einen CodePen-Service integrieren:**

   Nun integrieren wir einen `CodepenService`.

   ```typescript
   import { Inject, Injectable, PLATFORM_ID, Renderer2 } from "@angular/core";
   import { ConsentService } from "./consent.service";
   import { ScriptService } from "./script.service";
   import { isPlatformServer } from "@angular/common";

   @Injectable({
     providedIn: "root",
   })
   export class CodepenService {
     constructor(private consentS: ConsentService, private scriptS: ScriptService, @Inject(PLATFORM_ID) private platformId: Object) {}

     loadCodePen(renderer: Renderer2) {
       if (isPlatformServer(this.platformId)) return;
       if (this.consentS.checkConsent("CodePen")) {
         this.scriptS.reloadJsScript(renderer, "https://cpwebassets.codepen.io/assets/embed/ei.js");
       } else {
         const CodePenDemos = Array.from(document.querySelectorAll(".codepen"));
         for (const demo of CodePenDemos) {
           const spans = Array.from(demo.querySelectorAll("span"));
           for (const span of spans) {
             const button = renderer.createElement("button");
             renderer.addClass(button, "codePenConsentButton");
             button.addEventListener("click", () => this.consentS.giveConsent("CodePen"));

             const buttonText = renderer.createText("Load content from CodePen");
             renderer.appendChild(button, buttonText);

             const parent = span.parentNode;
             renderer.insertBefore(parent, button, span);
             renderer.removeChild(parent, span);

             const paragraph = renderer.createElement("p");
             const paragraphText = renderer.createText("The code is loaded by the third-party provider CodePen. For more details see ");
             renderer.appendChild(paragraph, paragraphText);

             const privacyPolicy = renderer.createElement("a");
             renderer.setAttribute(privacyPolicy, "href", "/privacy-policy");
             const privacyPolicyText = renderer.createText("Privacy Policy");
             renderer.appendChild(privacyPolicy, privacyPolicyText);
             renderer.appendChild(paragraph, privacyPolicy);
             renderer.appendChild(parent, paragraph);
           }
         }
       }
     }
   }
   ```

   Für einen schöneren Zustimmungs-Button ein wenig SCSS:

   ```scss
   .codepen:has(.codePenConsentButton) {
     flex-direction: column;
   }

   .codePenConsentButton {
     $color: rgb(193, 192, 255);
     padding: 1em;
     background-color: $color;
     border-radius: 4px;
     border: 3px solid transparent;
     cursor: pointer;
     display: flex;
     gap: 0.5em;
     font-size: 1.2em;
     transition: all 250ms;
     margin: 0 auto;

     &:hover {
       color: rgb(238, 238, 238);
       border-color: $color;
       background-color: transparent;
     }

     + p {
       font-size: 0.8em;
       text-wrap: balance;
       text-align: center;
     }
   }
   ```

5. **CodePen in der Komponente laden:**

   Zuletzt laden wir CodePen in der Komponente:

   ```typescript
   import { AfterViewChecked, Component, OnInit, Renderer2, ViewEncapsulation } from "@angular/core";
   import { CodepenService } from "src/app/services/codepen.service";

   @Component({
     selector: "app-blog-post",
     templateUrl: "./blog-post.component.html",
     styleUrls: ["./blog-post.component.css"],
   })
   export class BlogPostComponent implements AfterViewChecked {
     constructor(private renderer: Renderer2, private codePenS: CodepenService) {}

     ngAfterViewChecked() {
       this.codePenS.loadCodePen(this.renderer);
     }
   }
   ```
