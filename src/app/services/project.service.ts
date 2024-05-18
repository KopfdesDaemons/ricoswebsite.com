import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { isPlatformServer } from '@angular/common';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectsUrl = 'assets/projects.json';
  private projects: Project[] = [];

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) { }

  // Projekte aus JSON laden
  private async loadProjectsFromJson(): Promise<void> {
    if (this.projects.length > 0) return;

    try {
      const url = isPlatformServer(this.platformId)
        ? `http://localhost:4200/${this.projectsUrl}`
        : this.projectsUrl;
      const response = await lastValueFrom(this.http.get<{ projects: any[] }>(url));
      this.projects = response.projects.map(this.createProjectFromData);
    } catch (error) {
      console.error('Fehler beim Laden der Projekte:', error);
      this.projects = [];
    }
  }

  // Hilfsfunktion zum Erstellen eines Project-Objekts aus den Daten
  private createProjectFromData(data: any): Project {
    return new Project(
      data.name,
      data.description,
      data.image,
      data.features,
      data.projectURL,
      data.githubURL,
      data.blogpostURL,
      data.technologies
    );
  }

  // Abragen der Anzahl der Projekte für Paginierung
  async getTotalProjectCount(filter: string[] = []): Promise<number> {
    await this.loadProjectsFromJson();

    if (filter.length === 0) {
      return this.projects.length;
    }

    const filteredProjects = this.projects.filter(project =>
      filter.some(tech => project.technologies.includes(tech))
    );

    return filteredProjects.length;
  }

  // Abfragen der Projektdaten
  async getProjects(filter: string[] = [], itemsPerPage: number = 10, page: number = 1): Promise<Project[]> {
    await this.loadProjectsFromJson();

    let filteredProjects = this.projects;

    if (filter.length > 0) {
      filteredProjects = filteredProjects.filter(project =>
        filter.some(tech => project.technologies.includes(tech))
      );
    }

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return filteredProjects.slice(startIndex, endIndex);
  }

  // Abrufen aller Technologien
  async getAllTechnologies(): Promise<string[]> {
    await this.loadProjectsFromJson();

    const allTechnologies = this.projects.flatMap(project => project.technologies);
    const uniqueTechnologies = Array.from(new Set(allTechnologies));

    return uniqueTechnologies.sort();
  }
}
