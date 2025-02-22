---
title: Integrate CodePen into Angular
author: Rico
image: /images/codepen-screenshot.avif
keywords:
  - Integrate codepen
  - Angular codepen
  - Angular embed codepen
  - Codepen in angular
description: Learn how to seamlessly integrate CodePen snippets into your Angular project with this step-by-step guide.
date: 2024-05-18
---

## What is CodePen?

[CodePen](https://codepen.io/) is a popular online code editor and community platform that allows developers to write and share code snippets. It offers a convenient way to showcase interactive elements and test code functionalities.

## Guide: Integrate CodePen into Angular

1. **Integrate a Script Service:**

   - Create a new service named `ScriptService` to handle script loading dynamically.

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

2. **Load CodePen in the Component:**

   Now we load CodePen in the component:

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

   The HTML of the component looks like this:

   ```html
   <ng-content></ng-content>
   ```

3. **Use the CodePen component:**

   - Open your desired CodePen snippet
   - Click on "Embed" located at the bottom
   - Copy the HTML code provided **(Do not include the script tag)**

   ```html
   <p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="result" data-slug-hash="NWOQYqz" data-editable="true" data-user="Rico-the-bold" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
     <span>See the Pen <a href="https://codepen.io/Rico-the-bold/pen/NWOQYqz"> Material Buttons</a> by Rico (<a href="https://codepen.io/Rico-the-bold">@Rico-the-bold</a>) on <a href="https://codepen.io">CodePen</a>.</span>
   </p>
   ```

   - Paste the HTML from CodePen into the component

   ```html
   <app-codepen>
     <p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="result" data-slug-hash="NWOQYqz" data-editable="true" data-user="Rico-the-bold" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em">
       <span>See the Pen <a href="https://codepen.io/Rico-the-bold/pen/NWOQYqz">Material Buttons</a> by Rico (<a href="https://codepen.io/Rico-the-bold">Rico-the-bold</a>)on <a href="https://codepen.io">CodePen</a>.</span>
     </p>
   </app-codepen>
   ```
