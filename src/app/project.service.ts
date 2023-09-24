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
  async getProjects(): Promise<any[]> {
    if (this.projects.length === 0) {   
      await this.loadProjectsFromJson();
    }
    return this.projects;
  }
}
