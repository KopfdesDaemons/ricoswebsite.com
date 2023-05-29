import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {

  @Input() image:string = '' 
  @Input() linkWebsite:string = '' 
  @Input() linkGithub:string = '' 

}
