import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Project } from '../../models/project.model';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  imports: [RouterLink, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  languageS = inject(LanguageService);

  project = input.required<Project>();
  readonly clickOnTag = output<string>();
}
