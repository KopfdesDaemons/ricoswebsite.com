import { Component, OnInit, Renderer2 } from '@angular/core';
import { ScriptService } from 'src/app/script.service';

@Component({
  selector: 'app-my-basic-css-gallery',
  templateUrl: './my-basic-css-gallery.component.html',
  styleUrls: ['./my-basic-css-gallery.component.scss']
})
export class MyBasicCssGalleryComponent implements OnInit {
  isLoaded = false;

  constructor(private renderer: Renderer2, private scriptService: ScriptService){}
  
  ngOnInit(): void {
    if(this.isLoaded) return;
    this.scriptService.reloadJsScript(this.renderer, 'https://cpwebassets.codepen.io/assets/embed/ei.js');
    this.isLoaded = true;
  }
}
