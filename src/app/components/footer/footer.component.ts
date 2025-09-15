import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ConsentService } from 'src/app/services/consent.service';
import { LanguageService } from 'src/app/services/language.service';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ConsentManagerComponent } from '../consent-manager/consent-manager.component';

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
