import { Component } from '@angular/core';
import { faInstagram, faGithub, faStackOverflow, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { ConsentService } from 'src/app/services/consent.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  faInstagram = faInstagram;
  faGithub = faGithub;
  faStackOverflow = faStackOverflow;
  faWordpress = faWordpress;

  constructor(
    public languageS: LanguageService,
    public consentS: ConsentService
  ) { }
}
