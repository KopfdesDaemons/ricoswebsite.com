import { Component, Input } from '@angular/core';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  faGithub = faGithub;
  faUpRightFromSquare = faUpRightFromSquare;

  @Input() name: string = ''
  @Input() description: string = ''
  @Input() features: string[] = []
  @Input() image: string = '' 
  @Input() linkWebsite: string = '' 
  @Input() linkGithub: string = '' 
}
