import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { isPlatformServer } from '@angular/common';
import { Project } from '../models/project';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [];

  constructor(
    private http: HttpClient,
    private languageS: LanguageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  private getProjectsUrl(): string {
    return `assets/projects.${this.languageS.userLanguage}.json`;
  }

  // Projekte aus JSON laden
  private async loadProjectsFromJson(): Promise<void> {
    try {
      const url = isPlatformServer(this.platformId)
        ? `http://localhost:4200/${this.getProjectsUrl()}`
        : this.getProjectsUrl();
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
