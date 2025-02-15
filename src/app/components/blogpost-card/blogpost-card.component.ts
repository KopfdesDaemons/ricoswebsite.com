import { Component, Input, OnInit, inject } from '@angular/core';
import { PostMeta } from 'src/app/models/post';
import { LanguageService } from 'src/app/services/language.service';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-blogpost-card',
    templateUrl: './blogpost-card.component.html',
    styleUrls: ['./blogpost-card.component.scss'],
    imports: [RouterLink, TranslateModule]
})
export class BlogpostCardComponent implements OnInit {
  languageS = inject(LanguageService);


  @Input() postMeta: PostMeta | undefined;
  ngOnInit(): void {
    if (this.postMeta && this.postMeta.date) {
      this.postMeta.date = new Date(this.postMeta.date).toLocaleDateString(this.languageS.userLanguage);
    }
  }
}
