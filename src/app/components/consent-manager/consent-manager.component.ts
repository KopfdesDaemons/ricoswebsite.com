import { isPlatformServer } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, PLATFORM_ID, inject, viewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConsentService } from 'src/app/services/consent.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-consent-manager',
    templateUrl: './consent-manager.component.html',
    styleUrls: ['./consent-manager.component.scss'],
    imports: [TranslateModule]
})
export class ConsentManagerComponent implements AfterViewInit, OnDestroy {
  consentS = inject(ConsentService);
  private platformId = inject<Object>(PLATFORM_ID);


  readonly dialog = viewChild<ElementRef>('dialog');
  listenOpenStatusSub: Subscription | undefined;

  ngAfterViewInit(): void {
    this.listenOpenStatus();
  }

  switchConsent(event: any, serviceName: string) {
    const value = event.target.checked;
    if (value) this.consentS.giveConsent(serviceName);
    else this.consentS.revokeConsent(serviceName);
  }

  listenOpenStatus() {
    if (isPlatformServer(this.platformId)) return;
    this.listenOpenStatusSub = this.consentS.consentMangerIsVisible.subscribe(value => {
      if (value) this.dialog()?.nativeElement.showModal();
      else this.dialog()?.nativeElement.close();
    });
  }

  ngOnDestroy() {
    if (this.listenOpenStatusSub) {
      this.listenOpenStatusSub.unsubscribe();
    }
  }
}
