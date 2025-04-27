import { Component, inject, HostListener, ElementRef } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { SidemenuService } from 'src/app/services/sidemenu.service';
import { NgClass } from '@angular/common';
import { LanguageService } from 'src/app/services/language.service';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
  imports: [NgClass, RouterLink, FaIconComponent, TranslateModule],
})
export class SidemenuComponent {
  sidemenuS = inject(SidemenuService);
  languageS = inject(LanguageService);
  elementRef = inject(ElementRef);

  faHome = faHome;
  faGithub = faGithub;

  @HostListener('focusout', ['$event'])
  onFocusOut(event: FocusEvent) {
    if (!this.elementRef.nativeElement.contains(event.relatedTarget)) {
      this.toggleMenu();
    }
  }

  toggleMenu() {
    if (this.sidemenuS.MenuIsOpen) this.sidemenuS.toggleMenu();
  }
}
