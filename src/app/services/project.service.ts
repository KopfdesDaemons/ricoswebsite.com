import { Injectable, PLATFORM_ID, TransferState, inject, makeStateKey } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Project } from '../models/project.model';
import { LanguageService } from './language.service';
import { isPlatformBrowser } from '@angular/common';

type GetProjectsResult = { projects: Project[]; total: number };
type AllTechnologiesResult = string[];
@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private http = inject(HttpClient);
  private languageS = inject(LanguageService);
  private transferState = inject(TransferState);
  private platformId = inject<object>(PLATFORM_ID);

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
    return projects.filter((project) =>
      technologies.some((tech) => {
        if (!project.technologies) return false;
        return project.technologies.includes(tech);
      })
    );
  }

  private filterProjectsBySearchQuery(projects: Project[], searchQuery: string): Project[] {
    if (!searchQuery) {
      return projects;
    }

    const lowerCaseQuery = searchQuery.toLowerCase();

    return projects.filter((project) => {
      // 1. Check project name
      const nameMatches = project.name.toLowerCase().includes(lowerCaseQuery);

      // 2. Check project description
      const descriptionMatches = project.description.toLowerCase().includes(lowerCaseQuery);

      // 3. Check project features
      const featuresMatch = project.features?.some((feature) => feature.toLowerCase().includes(lowerCaseQuery));

      // Return true if any of the fields match the query
      return nameMatches || descriptionMatches || featuresMatch;
    });
  }

  async getProjects(filterByTechnologies: string[] = [], itemsPerPage: number = 10, page: number = 1, searchQuery: string = ''): Promise<GetProjectsResult> {
    const lang = this.languageS.userLanguage();
    const key = makeStateKey<GetProjectsResult>(`projects-list-${lang}-${filterByTechnologies.join('_')}-${itemsPerPage}-${page}-${searchQuery}`);

    if (this.transferState.hasKey(key)) {
      const result = this.transferState.get<GetProjectsResult>(key, { projects: [], total: 0 });
      this.transferState.remove(key);
      return result;
    }

    const projects = await this.loadProjectsFromJson(lang);

    let processedProjects = this.filterProjectsByTechnologies(projects, filterByTechnologies);
    processedProjects = this.filterProjectsBySearchQuery(processedProjects, searchQuery);

    if (filterByTechnologies.length > 0 || searchQuery.length > 0) {
      processedProjects.sort((a, b) => a.name.localeCompare(b.name));
    }

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const result: GetProjectsResult = {
      projects: processedProjects.slice(startIndex, endIndex),
      total: processedProjects.length,
    };

    if (!isPlatformBrowser(this.platformId)) {
      this.transferState.set(key, result);
    }

    return result;
  }

  async getAllTechnologies(): Promise<AllTechnologiesResult> {
    const lang = this.languageS.userLanguage();
    const key = makeStateKey<AllTechnologiesResult>(`all-technologies-${lang}`);

    if (this.transferState.hasKey(key)) {
      const result = this.transferState.get<AllTechnologiesResult>(key, []);
      this.transferState.remove(key);
      return result;
    }

    const projects = await this.loadProjectsFromJson(lang);

    const allTechnologies = projects.flatMap((project) => project.technologies);
    const withoutUndefined = allTechnologies.filter((item) => item !== undefined);
    const uniqueTechnologies = Array.from(new Set(withoutUndefined));

    return uniqueTechnologies.sort();
  }
}
