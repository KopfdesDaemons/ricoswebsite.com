import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LegalNoticeComponent } from './routes/legal-notice/legal-notice.component';
import { MyBasicCssGalleryComponent } from './routes/my-basic-css-gallery/my-basic-css-gallery.component';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProjectCardComponent,
    FooterComponent,
    LegalNoticeComponent,
    MyBasicCssGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
