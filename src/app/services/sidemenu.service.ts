import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidemenuService {
  public MenuIsOpen = false;

  public toggleMenu() {
    this.MenuIsOpen = !this.MenuIsOpen;
  }
}
