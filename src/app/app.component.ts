import { Component, inject } from '@angular/core';
import { SidemenuService } from './services/sidemenu.service';
import { LanguageService } from './services/language.service';
import { HeaderComponent } from './components/header/header.component';
import { NgClass } from '@angular/common';
import { LanguageSwitchOfferComponent } from './components/language-switch-offer/language-switch-offer.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { RouterOutlet } from '@angular/router';
import { ConsentManagerComponent } from './components/consent-manager/consent-manager.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [HeaderComponent, NgClass, LanguageSwitchOfferComponent, SidemenuComponent, RouterOutlet, ConsentManagerComponent, FooterComponent]
})
export class AppComponent {
  sidemenuS = inject(SidemenuService);
  langS = inject(LanguageService);

  title = 'ricoswebsite.com';
}
