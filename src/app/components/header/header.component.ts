import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { SidemenuService } from 'src/app/services/sidemenu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public sidemenuS: SidemenuService) {}

  faBars = faBars;
}
