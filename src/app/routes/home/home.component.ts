import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  projects: any[] = [];
  technologiesFilterOptions: string[] = [];
  activTechnologiesFilterOptions: string[] = [];

  constructor(public meta: Meta, public ps: ProjectService){
    this.meta.addTag({ 
      name: 'description',
      content: 'My portfolio website as a hobby web developer.' });
  }

  async ngOnInit(){
    this.projects = await this.ps.getProjects();
    this.technologiesFilterOptions = await this.ps.getAllTechnologies();
  }

  addTechnologieToFilter(technologie: string){
    this.activTechnologiesFilterOptions.push(technologie);
    this.technologiesFilterOptions.splice(this.technologiesFilterOptions.indexOf(technologie), 1);
    this.applyFilter();
  }

  removeTechnologieFromFilter(technologie: string) {
    const index = this.activTechnologiesFilterOptions.indexOf(technologie);    
    this.activTechnologiesFilterOptions.splice(index, 1)
    this.technologiesFilterOptions.push(technologie);
    this.applyFilter();
  }

  async applyFilter() {
    this.projects = await this.ps.getProjects(this.activTechnologiesFilterOptions)
  }

  async clickOnTag(technologie: string) {
    this.activTechnologiesFilterOptions = [];
    this.technologiesFilterOptions = await this.ps.getAllTechnologies();
    this.addTechnologieToFilter(technologie);
  }
}
