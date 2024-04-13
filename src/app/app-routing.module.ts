import { NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { LegalNoticeComponent } from './routes/legal-notice/legal-notice.component';
import { MyBasicCssGalleryComponent } from './routes/my-basic-css-gallery/my-basic-css-gallery.component';
import { BlogPostComponent } from './routes/blog-post/blog-post.component';
import { Meta } from '@angular/platform-browser';
import { filter } from 'rxjs';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projects/page/:page/:technologies', component: HomeComponent, pathMatch: 'full' },
  {path: 'legalNotice', component: LegalNoticeComponent},
  {path: 'my-basic-CSS-gallery', component: MyBasicCssGalleryComponent},
  {path: 'blogpost/:title', component: BlogPostComponent},
  {path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload',
    // scrollOffset: [0, 100] 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router, private meta: Meta) {
    // Überwache das Router-Navigationsend-Ereignis, um Meta-Tags zu aktualisieren
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.removeMetaTags();
    });
  }

  private removeMetaTags(): void {
    // Entferne vorhandene Meta-Tags
    this.meta.removeTag('name="keywords"');
    this.meta.removeTag('name="description"');
    this.meta.removeTag('name="author"');
    this.meta.removeTag('name="robots"');
    this.meta.removeTag('name="image"');
  }
}
