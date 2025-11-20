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

  private projectsCache = new Map<string, Project[]>();

  async loadProjectsFromJson(lang: string = this.languageS.userLanguage()): Promise<Project[]> {
    if (this.projectsCache.has(lang)) {
      return this.projectsCache.get(lang)!;
    }

    try {
      const url = `/projects.${lang}.json`;
      const response = await lastValueFrom(this.http.get<{ projects: Project[] }>(url));
      this.projectsCache.set(lang, response.projects);
      return response.projects;
    } catch (error) {
      console.error('Fehler beim Laden der Projekte:', error);
      return [];
    }
  }

  private filterProjectsByTechnologies(projects: Project[], technologies: string[]): Project[] {
    if (technologies.length === 0) {
      return projects;
    }
    return projects.filter((project) => technologies.some((tech) => project.technologies.includes(tech)));
  }

  async getTotalProjectCount(filterByTechnologies: string[] = []): Promise<number> {
    const projects = await this.loadProjectsFromJson();
    const filteredProjects = this.filterProjectsByTechnologies(projects, filterByTechnologies);
    return filteredProjects.length;
  }

  async getProjects(filterByTechnologies: string[] = [], itemsPerPage: number = 10, page: number = 1): Promise<Project[]> {
    const projects = await this.loadProjectsFromJson();

    const filteredProjects = this.filterProjectsByTechnologies(projects, filterByTechnologies);
    const sortedProjects = filteredProjects.sort((a, b) => a.name.localeCompare(b.name));

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return sortedProjects.slice(startIndex, endIndex);
  }

  async getAllTechnologies(): Promise<string[]> {
    const projects = await this.loadProjectsFromJson();

    const allTechnologies = projects.flatMap((project) => project.technologies);
    const uniqueTechnologies = Array.from(new Set(allTechnologies));

    return uniqueTechnologies.sort();
  }
}
