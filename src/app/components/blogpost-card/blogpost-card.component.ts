import { Component, inject, input } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PostMeta } from 'src/app/models/post-meta.model';

@Component({
  selector: 'app-blogpost-card',
  templateUrl: './blogpost-card.component.html',
  styleUrls: ['./blogpost-card.component.scss'],
  imports: [RouterLink, TranslateModule],
})
export class BlogpostCardComponent {
  languageS = inject(LanguageService);
  postMeta = input.required<PostMeta>();
}
