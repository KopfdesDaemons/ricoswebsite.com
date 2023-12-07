import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectsUrl = '/assets/projects.json';
  private projects: any[] = [];

  constructor(private http: HttpClient) { }

  // Projeckte aus JSON laden
  private async loadProjectsFromJson() {
    const json: any = await lastValueFrom(this.http.get<any[]>(this.projectsUrl));
    this.projects = json.projects;
  }

  // Abragen der Anzahl der Projecte für Paginierung
  async getTotalProjectCount(filter: string[] = []): Promise<number> {
    if (this.projects.length === 0) {
      await this.loadProjectsFromJson();
    }
    
    if (filter.length > 0) {
      let filteredProjects: any[] = [...this.projects];
      filteredProjects = filteredProjects.filter((project) =>
        filter.some((filterTechnologie) => project.technologies.includes(filterTechnologie))
      );
      return filteredProjects.length;
    }

    return this.projects.length;
  }

  // Abfragen der Projektdaten
  async getProjects(filter: string[] = [], itemsPerPage: number = 10, page: number = 1): Promise<any[]> {
    if (this.projects.length === 0) {
      await this.loadProjectsFromJson();
    }
  
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  
    let filteredProjects: any[] = [...this.projects];
  
    if (filter.length > 0) {
      filteredProjects = filteredProjects.filter((project) =>
        filter.some((filterTechnologie) => project.technologies.includes(filterTechnologie))
      );
    }
    
    return filteredProjects.slice(startIndex, endIndex);
  }
  
  async getAllTechnologies(): Promise<string[]> {
    if (this.projects.length === 0) {   
      await this.loadProjectsFromJson();
    }

    const technologies: string[] = [];

    for(const project of this.projects){
      for(const technologie of project.technologies){
        if(!technologies.includes(technologie)) technologies.push(technologie);
      }
    }

    return technologies.sort();
  }
}
