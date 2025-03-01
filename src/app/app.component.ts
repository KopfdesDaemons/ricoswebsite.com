import { Component, inject, OnInit } from '@angular/core';
import { SidemenuService } from './services/sidemenu.service';
import { LanguageService } from './services/language.service';
import { HeaderComponent } from './components/header/header.component';
import { NgClass } from '@angular/common';
import { LanguageSwitchOfferComponent } from './components/language-switch-offer/language-switch-offer.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { ActivationStart, Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HeaderComponent, NgClass, LanguageSwitchOfferComponent, SidemenuComponent, RouterOutlet, FooterComponent],
})
export class AppComponent implements OnInit {
  sidemenuS = inject(SidemenuService);
  langS = inject(LanguageService);
  private router = inject(Router);

  ngOnInit(): void {
    this.router.events.subscribe(async (event) => {
      if (event instanceof ActivationStart) {
        let lang = null;
        if (Object.keys(event.snapshot.params).length > 0) lang = event.snapshot.params['lang'];
        await this.langS.updateLanguage(lang);
      }
    });
  }
}
