import { Component, inject } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { LanguageService } from 'src/app/services/language.service';
import { SidemenuService } from 'src/app/services/sidemenu.service';
import { NgClass } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [NgClass, FaIconComponent, RouterLink]
})
export class HeaderComponent {
  sidemenuS = inject(SidemenuService);
  languageS = inject(LanguageService);


  faBars = faBars;

  public clickOnWebsitename() {
    if (this.sidemenuS.MenuIsOpen) this.sidemenuS.toggleMenu();
  }
}
