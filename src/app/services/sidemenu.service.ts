import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidemenuService {
  public menuIsOpen = signal<boolean>(false);

  public toggleMenu() {
    this.menuIsOpen.update((isOpen) => !isOpen);
  }
}
