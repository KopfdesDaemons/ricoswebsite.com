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
      const response = await lastValueFrom(this.http.get<{ projects: any[] }>(url));
      const loadedProjects = response.projects.map(this.createProjectFromData);
      this.projectsCache.set(lang, loadedProjects);
      return loadedProjects;
    } catch (error) {
      console.error('Fehler beim Laden der Projekte:', error);
      return [];
    }
  }

  private createProjectFromData(data: any): Project {
    data.technologies = data.technologies.sort();
    return new Project(data.name, data.description, data.image, data.features, data.projectURL, data.githubURL, data.blogpostURL, data.technologies);
  }

  async getTotalProjectCount(filterByTechnologies: string[] = []): Promise<number> {
    const projects = await this.loadProjectsFromJson();

    if (filterByTechnologies.length === 0) {
      return projects.length;
    }

    const filteredProjects = projects.filter((project) => filterByTechnologies.some((tech) => project.technologies.includes(tech)));

    return filteredProjects.length;
  }

  async getProjects(filterByTechnologies: string[] = [], itemsPerPage: number = 10, page: number = 1): Promise<Project[]> {
    const projects = await this.loadProjectsFromJson();

    let filteredProjects = projects;

    if (filterByTechnologies.length > 0) {
      filteredProjects = filteredProjects.filter((project) => filterByTechnologies.some((tech) => project.technologies.includes(tech)));
      filteredProjects = filteredProjects.sort((a, b) => a.name.localeCompare(b.name));
    }

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return filteredProjects.slice(startIndex, endIndex);
  }

  async getAllTechnologies(): Promise<string[]> {
    const projects = await this.loadProjectsFromJson();

    const allTechnologies = projects.flatMap((project) => project.technologies);
    const uniqueTechnologies = Array.from(new Set(allTechnologies));

    return uniqueTechnologies.sort();
  }
}
