import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LegalNoticeComponent } from './routes/legal-notice/legal-notice.component';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { BlogPostComponent } from './routes/blog-post/blog-post.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import { HighlightService } from './services/highlight.service';
import { DisqusComponent } from './components/disqus/disqus.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { LanguageSwitchOfferComponent } from './components/language-switch-offer/language-switch-offer.component';
import { ConsentManagerComponent } from './components/consent-manager/consent-manager.component';
import { BlogComponent } from './routes/blog/blog.component';
import { BlogpostCardComponent } from './components/blogpost-card/blogpost-card.component';
import { TRANSLATE_PROVIDER } from './provider/translation.factory';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        ProjectCardComponent,
        FooterComponent,
        LegalNoticeComponent,
        SidemenuComponent,
        BlogPostComponent,
        SafeHtmlPipe,
        DisqusComponent,
        LanguageSwitchOfferComponent,
        ConsentManagerComponent,
        BlogComponent,
        BlogpostCardComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        FormsModule,
        AppRoutingModule,
        FontAwesomeModule,
        TranslateModule.forRoot()], providers: [
            provideClientHydration(),
            HighlightService,
            TRANSLATE_PROVIDER,
            provideHttpClient(withFetch())
        ]
})
export class AppModule { }
