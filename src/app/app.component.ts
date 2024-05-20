import { Component } from '@angular/core';
import { SidemenuService } from './services/sidemenu.service';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ricoswebsite.com';

  constructor(public sidemenuS: SidemenuService,
    public langS: LanguageService,
  ) { }
}
