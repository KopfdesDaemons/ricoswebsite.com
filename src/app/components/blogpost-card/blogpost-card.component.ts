import { Component, Input, OnInit } from '@angular/core';
import { PostMeta } from 'src/app/models/post';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-blogpost-card',
  templateUrl: './blogpost-card.component.html',
  styleUrls: ['./blogpost-card.component.scss']
})
export class BlogpostCardComponent implements OnInit {

  @Input() postMeta: PostMeta | undefined;

  constructor(
    public languageS: LanguageService
  ) {
  }
  ngOnInit(): void {
    if (this.postMeta && this.postMeta.date) {
      this.postMeta.date = new Date(this.postMeta.date).toLocaleDateString(this.languageS.userLanguage);
    }
  }
}
