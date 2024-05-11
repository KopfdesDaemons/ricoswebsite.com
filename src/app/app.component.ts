import { Component } from '@angular/core';
import { SidemenuService } from './services/sidemenu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ricoswebsite.com';

  constructor(public sidemenuS: SidemenuService) {}
}
