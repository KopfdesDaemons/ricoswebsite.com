import { AfterViewInit, Component, ElementRef, PLATFORM_ID, ViewChild, inject } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { SidemenuService } from 'src/app/services/sidemenu.service';
import { isPlatformBrowser, NgClass } from '@angular/common';
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
export class SidemenuComponent implements AfterViewInit {
  sidemenuS = inject(SidemenuService);
  languageS = inject(LanguageService);
  private platformId = inject<Object>(PLATFORM_ID);


  @ViewChild('sidemenu') component!: ElementRef;

  faHome = faHome;
  faGithub = faGithub;

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const links = this.component.nativeElement.querySelectorAll('a');

      for (const link of links) {
        link.addEventListener('click', () => {
          if (this.sidemenuS.MenuIsOpen) this.sidemenuS.toggleMenu();
        });
      }
    }
  }
}
