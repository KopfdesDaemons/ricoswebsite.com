import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptService {
  private loadedScripts: string[] = [];

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  public reloadJsScript(renderer: Renderer2, src: string): HTMLScriptElement {
    this.removeJsScript(src); // Skript entfernen, falls vorhanden

    const script = renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    renderer.appendChild(this.document.body, script);
    this.loadedScripts.push(src);
    return script;
  }

  private removeJsScript(src: string): void {
    const existingScript = this.document.querySelector(`script[src="${src}"]`);
    if (existingScript) {
      existingScript.remove();
      this.loadedScripts = this.loadedScripts.filter(script => script !== src);
    }
  }
}
