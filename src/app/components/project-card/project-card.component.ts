import { Component, inject, input, output } from '@angular/core';
import { faGithub, faWordpress, faPhp, faAngular, faNodeJs, faJs } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'src/app/models/project.model';
import { LanguageService } from 'src/app/services/language.service';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  imports: [RouterLink, FaIconComponent, TranslateModule],
})
export class ProjectCardComponent {
  languageS = inject(LanguageService);

  faGithub = faGithub;
  faUpRightFromSquare = faUpRightFromSquare;
  faWordpress = faWordpress;
  faPhp = faPhp;
  faAngular = faAngular;
  faNodeJs = faNodeJs;
  faJs = faJs;

  project = input.required<Project>();
  readonly clickOnTag = output<string>();
}
