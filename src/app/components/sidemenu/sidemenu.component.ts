import { Component, inject } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { SidemenuService } from 'src/app/services/sidemenu.service';
import { NgClass } from '@angular/common';
import { LanguageService } from 'src/app/services/language.service';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
  imports: [NgClass, RouterLink, FaIconComponent, FormsModule, TranslateModule]
})
export class SidemenuComponent {
  sidemenuS = inject(SidemenuService);
  languageS = inject(LanguageService);


  faHome = faHome;
  faGithub = faGithub;

  toggleMenu() {
    if (this.sidemenuS.MenuIsOpen) this.sidemenuS.toggleMenu();
  }
}
