import { Component, Input } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-blogpost-card',
  templateUrl: './blogpost-card.component.html',
  styleUrls: ['./blogpost-card.component.scss']
})
export class BlogpostCardComponent {

  @Input() title: string = ''
  @Input() description: string = ''
  @Input() postURL: string = ''
  @Input() image: string = ''
  @Input() fileName: string = ''

  constructor(
    public languageS: LanguageService
  ) { }
}
