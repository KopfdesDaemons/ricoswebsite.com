import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-legal-notice',
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss'],
  imports: [TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LegalNoticeComponent {}
