import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Project } from '../models/project.model';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private http = inject(HttpClient);
  private languageS = inject(LanguageService);

  private projects: Project[] = [];

  // Projekte aus JSON laden
  async loadProjectsFromJson(lang: string = this.languageS.userLanguage): Promise<Project[]> {
    try {
      const url = `/projects.${lang}.json`;
      const response = await lastValueFrom(this.http.get<{ projects: any[] }>(url));
      this.projects = response.projects.map(this.createProjectFromData);
      return this.projects;
    } catch (error) {
      console.error('Fehler beim Laden der Projekte:', error);
      this.projects = [];
      return [];
    }
  }

  // Hilfsfunktion zum Erstellen eines Project-Objekts aus den Daten
  private createProjectFromData(data: any): Project {
    data.technologies = data.technologies.sort();
    return new Project(data.name, data.description, data.image, data.features, data.projectURL, data.githubURL, data.blogpostURL, data.technologies);
  }

  // Abragen der Anzahl der Projekte für Paginierung
  async getTotalProjectCount(filterByTechnologies: string[] = []): Promise<number> {
    await this.loadProjectsFromJson();

    if (filterByTechnologies.length === 0) {
      return this.projects.length;
    }

    const filteredProjects = this.projects.filter((project) => filterByTechnologies.some((tech) => project.technologies.includes(tech)));

    return filteredProjects.length;
  }

  // Abfragen der Projektdaten
  async getProjects(filterByTechnologies: string[] = [], itemsPerPage: number = 10, page: number = 1): Promise<Project[]> {
    await this.loadProjectsFromJson();

    let filteredProjects = this.projects;

    if (filterByTechnologies.length > 0) {
      filteredProjects = filteredProjects.filter((project) => filterByTechnologies.some((tech) => project.technologies.includes(tech)));
      filteredProjects = filteredProjects.sort((a, b) => a.name.localeCompare(b.name));
    }

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return filteredProjects.slice(startIndex, endIndex);
  }

  // Abrufen aller Technologien
  async getAllTechnologies(): Promise<string[]> {
    await this.loadProjectsFromJson();

    const allTechnologies = this.projects.flatMap((project) => project.technologies);
    const uniqueTechnologies = Array.from(new Set(allTechnologies));

    return uniqueTechnologies.sort();
  }
}
