import { Component, Input, ElementRef, Renderer2, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { DisqusService } from 'src/app/services/disqus.service';
import { faComment } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-disqus',
  templateUrl: './disqus.component.html',
  styleUrls: ['./disqus.component.scss']
})
export class DisqusComponent implements OnChanges {
  @Input() title: string = '';
  @ViewChild('disqusDiv') disqusDiv: ElementRef | undefined;
  private observer: IntersectionObserver | undefined;
  faComment = faComment;

  constructor(
    public disqusS: DisqusService,
    public renderer: Renderer2,
    private elementRef: ElementRef,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {    
    if(!this.disqusS.consent) return;
    this.observer = new IntersectionObserver(entries => { 
      entries.forEach(entry => { 
        if (entry.isIntersecting) this.isVisible();
      }); 
    }); 
    this.observer.observe(this.elementRef.nativeElement);
  }

  isVisible() {    
    if(this.disqusS.consent && this.title) {      
      this.disqusS.loadDisqus(this.renderer, this.title);
      this.observer?.disconnect();
    }
  }

  consent() {
    this.disqusS.consentGanted();
    this.observer?.disconnect();
    this.disqusS.loadDisqus(this.renderer, this.title);
  }
}
