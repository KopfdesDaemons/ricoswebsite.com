import { Component, inject, HostListener, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { SidemenuService } from 'src/app/services/sidemenu.service';
import { NgClass } from '@angular/common';
import { LanguageService } from 'src/app/services/language.service';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
  imports: [NgClass, RouterLink, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidemenuComponent {
  sidemenuS = inject(SidemenuService);
  languageS = inject(LanguageService);
  elementRef = inject(ElementRef);

  @HostListener('focusout', ['$event'])
  onFocusOut(event: FocusEvent) {
    if (!this.elementRef.nativeElement.contains(event.relatedTarget)) {
      this.toggleMenu();
    }
  }

  toggleMenu() {
    if (this.sidemenuS.menuIsOpen()) this.sidemenuS.toggleMenu();
  }
}
