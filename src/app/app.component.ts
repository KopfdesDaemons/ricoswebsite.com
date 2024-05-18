import { Component } from '@angular/core';
import { SidemenuService } from './services/sidemenu.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ricoswebsite.com';

  constructor(public sidemenuS: SidemenuService, private translate: TranslateService) {
    translate.use('de');
  }
}
