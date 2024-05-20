import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-language-switch-offer',
  templateUrl: './language-switch-offer.component.html',
  styleUrls: ['./language-switch-offer.component.scss']
})
export class LanguageSwitchOfferComponent {

  closed: boolean = false;

  constructor(
    public langS: LanguageService
  ) { }
}
