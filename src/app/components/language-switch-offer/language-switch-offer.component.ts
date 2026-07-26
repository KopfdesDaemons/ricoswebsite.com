import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-language-switch-offer',
  templateUrl: './language-switch-offer.component.html',
  styleUrls: ['./language-switch-offer.component.scss'],
  imports: [NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitchOfferComponent {
  langS = inject(LanguageService);

  closed: boolean = false;
}
