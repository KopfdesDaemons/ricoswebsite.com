import { isPlatformServer } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, PLATFORM_ID, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConsentService } from 'src/app/services/consent.service';

@Component({
  selector: 'app-consent-manager',
  templateUrl: './consent-manager.component.html',
  styleUrls: ['./consent-manager.component.scss']
})
export class ConsentManagerComponent implements AfterViewInit, OnDestroy {

  @ViewChild('dialog') dialog: ElementRef | undefined;
  listenOpenStatusSub: Subscription | undefined;

  constructor(
    public consentS: ConsentService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

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
      if (value) this.dialog?.nativeElement.showModal();
      else this.dialog?.nativeElement.close();
    });
  }

  ngOnDestroy() {
    if (this.listenOpenStatusSub) {
      this.listenOpenStatusSub.unsubscribe();
    }
  }
}
