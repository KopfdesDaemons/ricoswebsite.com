import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ConsentManagerComponent } from '../consent-manager/consent-manager.component';
import { ConsentService } from '../../services/consent.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [RouterLink, TranslateModule, ConsentManagerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  languageS = inject(LanguageService);
  consentS = inject(ConsentService);
}
