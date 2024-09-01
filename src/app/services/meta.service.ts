import { inject, Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  private router = inject(Router);
  private meta = inject(Meta);

  constructor() {

    // Abonniere das NavigationStart-Ereignis
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe(() => {
      this.removeMetaData();
    });
  }

  private removeMetaData(): void {
    // Entferne vorhandene Meta-Tags
    this.meta.removeTag('name="keywords"');
    this.meta.removeTag('property="og:description"');
    this.meta.removeTag('property="og:author"');
    this.meta.removeTag('property="og:robots"');
    this.meta.removeTag('property="og:image"');
    this.meta.removeTag('property="og:url"');
    this.meta.removeTag('property="og:title"');
    this.meta.removeTag('property="og:type"');
    this.meta.removeTag('property="article:published_time"');
    this.meta.removeTag('name="description"');
  }
}
