import { ChangeDetectionStrategy, Component, effect, ElementRef, inject, PLATFORM_ID, viewChild } from '@angular/core';
import { ConsentService } from 'src/app/services/consent.service';
import { TranslateModule } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-consent-manager',
  templateUrl: './consent-manager.component.html',
  styleUrls: ['./consent-manager.component.scss'],
  imports: [TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsentManagerComponent {
  consentS = inject(ConsentService);
  platformId = inject(PLATFORM_ID);

  readonly dialog = viewChild<ElementRef>('dialog');

  constructor() {
    effect(() => {
      if (!isPlatformBrowser(this.platformId)) return;
      const isOpen = this.consentS.consentManagerIsOpen();
      if (isOpen) this.open();
      else this.close();
    });
  }

  open() {
    this.dialog()?.nativeElement.showModal();
  }

  close() {
    this.dialog()?.nativeElement.close();
  }

  switchConsent(event: any, serviceName: string) {
    const value = event.target.checked;
    if (value) this.consentS.giveConsent(serviceName);
    else this.consentS.revokeConsent(serviceName);
  }
}
