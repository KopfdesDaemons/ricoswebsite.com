import { Component, inject } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-language-switch-offer',
  templateUrl: './language-switch-offer.component.html',
  styleUrls: ['./language-switch-offer.component.scss'],
  imports: [NgClass],
})
export class LanguageSwitchOfferComponent {
  langS = inject(LanguageService);

  closed: boolean = false;
}
