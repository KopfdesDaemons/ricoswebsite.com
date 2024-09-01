import { NgModule, inject } from '@angular/core';
import { NavigationStart, PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';



import { Meta } from '@angular/platform-browser';
import { filter } from 'rxjs';




// @NgModule({
//   imports: [RouterModule.forRoot(routes, {
//     scrollPositionRestoration: 'enabled',
//     preloadingStrategy: PreloadAllModules,
//     anchorScrolling: 'enabled',
//     onSameUrlNavigation: 'reload',
//     initialNavigation: 'enabledBlocking'
//   })],
//   exports: [RouterModule]
// })
export class AppRoutingModule {
  private router = inject(Router);
  private meta = inject(Meta);

  constructor() {

    // Überwache das Router-Navigationsend-Ereignis, um Meta-Tags zu aktualisieren
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
