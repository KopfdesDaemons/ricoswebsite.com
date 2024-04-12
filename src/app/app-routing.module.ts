import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { LegalNoticeComponent } from './routes/legal-notice/legal-notice.component';
import { MyBasicCssGalleryComponent } from './routes/my-basic-css-gallery/my-basic-css-gallery.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projects/page/:page/:technologies', component: HomeComponent, pathMatch: 'full' },
  {path: 'legalNotice', component: LegalNoticeComponent},
  {path: 'my-basic-CSS-gallery', component: MyBasicCssGalleryComponent},
  {path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload',
    scrollOffset: [0, 100] 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
