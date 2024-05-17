import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faGithub, faWordpress, faPhp, faAngular, faNodeJs, faJs } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  faGithub = faGithub;
  faUpRightFromSquare = faUpRightFromSquare;
  faWordpress = faWordpress;
  faPhp = faPhp;
  faAngular = faAngular;
  faNodeJs = faNodeJs;
  faJs = faJs;

  @Input() name: string = ''
  @Input() description: string = ''
  @Input() features: string[] = []
  @Input() image: string = ''
  @Input() linkWebsite: string = ''
  @Input() linkGithub: string = ''
  @Input() technologies: string[] = []

  @Output() clickOnTag = new EventEmitter();
}
