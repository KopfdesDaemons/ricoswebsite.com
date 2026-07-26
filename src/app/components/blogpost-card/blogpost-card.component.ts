import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PostMeta } from '../../models/post-meta.model';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-blogpost-card',
  templateUrl: './blogpost-card.component.html',
  styleUrls: ['./blogpost-card.component.scss'],
  imports: [RouterLink, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogpostCardComponent {
  languageS = inject(LanguageService);
  postMeta = input.required<PostMeta>();
}
