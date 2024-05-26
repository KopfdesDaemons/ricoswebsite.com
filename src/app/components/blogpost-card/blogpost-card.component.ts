import { Component, Input } from '@angular/core';
import { PostMeta } from 'src/app/models/post';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-blogpost-card',
  templateUrl: './blogpost-card.component.html',
  styleUrls: ['./blogpost-card.component.scss']
})
export class BlogpostCardComponent {

  @Input() postMeta: PostMeta | undefined;

  constructor(
    public languageS: LanguageService
  ) { }
}
