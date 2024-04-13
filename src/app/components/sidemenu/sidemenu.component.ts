import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { SidemenuService } from 'src/app/sidemenu.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements AfterViewInit{
  
  @ViewChild('sidemenu') component!: ElementRef;
  
  faHome = faHome;
  faGithub = faGithub;

  constructor(public sidemenuS: SidemenuService) {}

  ngAfterViewInit(): void {
    const links = this.component.nativeElement.querySelectorAll('a');

    for(const link of links) {
      link.addEventListener('click', () => {
        if(this.sidemenuS.MenuIsOpen) this.sidemenuS.toggleMenu();
      });
    }
  } 
}
