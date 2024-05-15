import { NgModule } from '@angular/core';
import { NavigationStart, PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { LegalNoticeComponent } from './routes/legal-notice/legal-notice.component';
import { BlogPostComponent } from './routes/blog-post/blog-post.component';
import { Meta, Title } from '@angular/platform-browser';
import { filter } from 'rxjs';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projects/page/:page/:technologies', component: HomeComponent, pathMatch: 'full' },
  {path: 'legal-notice', component: LegalNoticeComponent},
  {path: 'blogpost/:title', component: BlogPostComponent },
  {path: 'privacy-policy', component: BlogPostComponent, data: {title: 'privacy-policy' } },
  {path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    preloadingStrategy: PreloadAllModules,
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload',
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router, private meta: Meta, private titleS: Title) {

    // Überwache das Router-Navigationsend-Ereignis, um Meta-Tags zu aktualisieren
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe(() => {
      this.removeMetaData();
    });
  }

  private removeMetaData(): void {
    // Entferne vorhandene Meta-Tags
    this.meta.removeTag('property="og:keywords"');
    this.meta.removeTag('property="og:description"');
    this.meta.removeTag('property="og:author"');
    this.meta.removeTag('property="og:robots"');
    this.meta.removeTag('property="og:image"');
    this.meta.removeTag('property="og:url"');
    this.meta.removeTag('property="og:title"');
    this.meta.removeTag('property="og:type"');
    this.meta.removeTag('name="description"');

    this.titleS.setTitle('Ricos Website');
  }
}
