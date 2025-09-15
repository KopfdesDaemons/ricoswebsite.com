import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SidemenuService } from 'src/app/services/sidemenu.service';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [NgClass, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  sidemenuS = inject(SidemenuService);

  public clickOnWebsitename() {
    if (this.sidemenuS.menuIsOpen()) this.sidemenuS.toggleMenu();
  }
}
