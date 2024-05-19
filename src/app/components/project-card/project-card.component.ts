import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faGithub, faWordpress, faPhp, faAngular, faNodeJs, faJs } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'src/app/models/project';
import { LanguageService } from 'src/app/services/language.service';

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

  @Input() project: Project | undefined;
  @Output() clickOnTag = new EventEmitter();

  constructor(public languageS: LanguageService) { }
}
