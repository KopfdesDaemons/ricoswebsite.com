import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { LegalNoticeComponent } from './routes/legal-notice/legal-notice.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'legalNotice', component: LegalNoticeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
