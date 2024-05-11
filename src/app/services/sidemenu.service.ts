import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidemenuService {

  constructor() { }

  public MenuIsOpen = false;

  public toggleMenu() {
    this.MenuIsOpen = !this.MenuIsOpen;
  }
}
