import { Component, inject } from '@angular/core';
import { faInstagram, faGithub, faStackOverflow, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { ConsentService } from 'src/app/services/consent.service';
import { LanguageService } from 'src/app/services/language.service';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ConsentManagerComponent } from '../consent-manager/consent-manager.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [FaIconComponent, RouterLink, TranslateModule, ConsentManagerComponent],
})
export class FooterComponent {
  languageS = inject(LanguageService);
  consentS = inject(ConsentService);

  faInstagram = faInstagram;
  faGithub = faGithub;
  faStackOverflow = faStackOverflow;
  faWordpress = faWordpress;
}
