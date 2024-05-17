import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsentService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  giveConsent(serviceName: string) {
    if (isPlatformServer(this.platformId)) return;
    localStorage.setItem(serviceName + 'Consent', 'true');
  }

  checkConsent(serviceName: string): boolean {
    if (isPlatformServer(this.platformId)) return false;
    return localStorage.getItem(serviceName + 'Consent') === 'true';
  }
}
