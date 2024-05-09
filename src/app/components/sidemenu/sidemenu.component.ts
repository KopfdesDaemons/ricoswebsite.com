import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { SidemenuService } from 'src/app/sidemenu.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements AfterViewInit{
  
  @ViewChild('sidemenu') component!: ElementRef;
  
  faHome = faHome;
  faGithub = faGithub;

  constructor(public sidemenuS: SidemenuService, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if(isPlatformBrowser(this.platformId)){
        const links = this.component.nativeElement.querySelectorAll('a');
    
        for(const link of links) {
          link.addEventListener('click', () => {
            if(this.sidemenuS.MenuIsOpen) this.sidemenuS.toggleMenu();
          });
        }
    }
  } 
}
