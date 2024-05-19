import { Component } from '@angular/core';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  faInstagram = faInstagram;
  faGithub = faGithub;

  constructor(public languageS: LanguageService) { }
}
