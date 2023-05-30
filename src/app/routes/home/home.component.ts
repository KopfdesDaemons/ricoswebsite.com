import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public meta: Meta){
    this.meta.addTag({ 
      name: 'description',
      content: 'My portfolio website as a hobby web designer.' });
  }
}
