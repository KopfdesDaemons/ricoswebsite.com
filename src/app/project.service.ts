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

  // Abfragen der Projektdaten
  async getProjects(filter: string[] = []): Promise<any[]> {
    if (this.projects.length === 0) {   
      await this.loadProjectsFromJson();
    }

    if (filter.length > 0) {
      const filteredProjects: any[] = [];
  
      // Filter die Projekte nach Technologien
      for(const project of this.projects){
        for(const filterTechnologie of filter){
          if(project.technologies.includes(filterTechnologie)){
            if(!filteredProjects.includes(project))filteredProjects.push(project);
            continue;
          }
        }
      }
      return filteredProjects;
    }
    return this.projects;
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
    return technologies;
  }
}
