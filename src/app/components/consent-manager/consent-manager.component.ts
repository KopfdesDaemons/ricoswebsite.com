import { Component } from '@angular/core';
import { ConsentService } from 'src/app/services/consent.service';

@Component({
  selector: 'app-consent-manager',
  templateUrl: './consent-manager.component.html',
  styleUrls: ['./consent-manager.component.scss']
})
export class ConsentManagerComponent {

  constructor(
    public consentS: ConsentService
  ) { }

  switchConsent(event: any, serviceName: string) {
    const value = event.target.checked;
    if (value) this.consentS.giveConsent(serviceName);
    else this.consentS.revokeConsent(serviceName);
  }
}
