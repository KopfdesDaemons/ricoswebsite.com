import { DomSanitizer } from '@angular/platform-browser';
import { PipeTransform, Pipe, inject } from '@angular/core';

@Pipe({
  name: 'safeHtml',
  standalone: true,
})
export class SafeHtmlPipe implements PipeTransform {
  private sanitized = inject(DomSanitizer);

  transform(value: string) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
