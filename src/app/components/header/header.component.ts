import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { LanguageService } from 'src/app/services/language.service';
import { SidemenuService } from 'src/app/services/sidemenu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    public sidemenuS: SidemenuService,
    public languageS: LanguageService
  ) { }

  faBars = faBars;

  public clickOnWebsitename() {
    if (this.sidemenuS.MenuIsOpen) this.sidemenuS.toggleMenu();
  }
}
