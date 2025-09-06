import { Component, inject, input, output } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { LanguageService } from 'src/app/services/language.service';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  imports: [RouterLink, TranslateModule],
})
export class ProjectCardComponent {
  languageS = inject(LanguageService);

  project = input.required<Project>();
  readonly clickOnTag = output<string>();
}
