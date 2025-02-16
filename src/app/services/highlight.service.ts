import { Injectable, inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import 'prismjs';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-scss';

@Injectable({
  providedIn: 'root',
})
export class HighlightService {
  private platformId = inject<object>(PLATFORM_ID);

  private prism: any;

  constructor() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.prism = (window as any).Prism;
  }

  highlightAll() {
    if (!this.prism) return;
    this.prism.highlightAll();
  }
}
