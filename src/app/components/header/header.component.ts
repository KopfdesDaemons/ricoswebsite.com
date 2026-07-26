import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SidemenuService } from '../../services/sidemenu.service';

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
