import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects: any[] = [];

  constructor(public meta: Meta, public ps: ProjectService){
    this.meta.addTag({ 
      name: 'description',
      content: 'My portfolio website as a hobby web developer.' });
  }

  async ngOnInit(){
    this.projects = await this.ps.getProjects();
  }
}
