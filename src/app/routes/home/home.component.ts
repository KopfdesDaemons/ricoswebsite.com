import { Component, ElementRef, inject, viewChild, signal, ChangeDetectionStrategy, afterRenderEffect, effect } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project.model';
import { LanguageService } from 'src/app/services/language.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { lastValueFrom } from 'rxjs';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { FormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [ProjectCardComponent, RouterLink, TranslateModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  protected languageS = inject(LanguageService);
  private meta = inject(Meta);
  private title = inject(Title);
  private ps = inject(ProjectService);
  private translate = inject(TranslateService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  private routeParams = toSignal(this.route.params);
  private queryParams = toSignal(this.route.queryParams);

  protected projects = signal<Project[]>([]);
  protected technologiesFilterOptions: string[] = [];
  protected activeTechnologiesFilter: string[] = [];
  protected searchQuery = '';
  protected totalPages = signal<number>(0);
  protected currentPage = signal<number>(1);
  private totalProjects: number = 0;
  private projectsPerPage = 5;
  readonly projectsSection = viewChild.required<ElementRef>('projectsSection');
  private searchInput = viewChild<ElementRef>('searchInput');

  constructor() {
    effect(async () => {
      // Re-load projects when language, route params or query params change
      this.languageS.userLanguage();
      this.routeParams();
      this.queryParams();

      await this.loadProjects();
    });

    afterRenderEffect(() => {
      if (this.projects().length > 0 && this.route.snapshot.fragment === 'projectsSection') {
        this.projectsSection().nativeElement?.scrollIntoView({ behavior: 'smooth' });
      }
      if (this.queryParams()?.['search']) {
        this.searchInput()?.nativeElement.focus();
      }
    });
  }

  async setMetaTags() {
    const description = await lastValueFrom(this.translate.get('home_description'));
    this.title.setTitle('Ricos Website');
    this.meta.addTags([
      { property: 'og:description', content: description },
      { name: 'description', content: description },
    ]);
  }

  async loadProjects() {
    console.log('load projects');

    const params = this.routeParams();
    const queryParams = this.queryParams();
    if (!params || !queryParams) return;

    await this.setMetaTags();

    const page = +(params['page'] || 1);
    this.currentPage.set(page);
    this.activeTechnologiesFilter = queryParams['technologies'] ? queryParams['technologies'].split('&') : [];
    this.searchQuery = queryParams['search'] || '';

    const [projects, allTechnologies] = await Promise.all([this.ps.getProjects(this.activeTechnologiesFilter, this.projectsPerPage, page, this.searchQuery), this.ps.getAllTechnologies()]);

    this.projects.set(projects.projects);
    this.totalProjects = projects.total;
    this.technologiesFilterOptions = allTechnologies.filter((t) => !this.activeTechnologiesFilter.includes(t));
    this.totalPages.set(Math.ceil(this.totalProjects / this.projectsPerPage));
  }

  getQueryParams(technologies: string[] = this.activeTechnologiesFilter) {
    const queryParams: { [key: string]: string } = {};
    if (technologies.length > 0) {
      queryParams['technologies'] = technologies.join('&');
    }
    if (this.searchQuery) {
      queryParams['search'] = this.searchQuery;
    }
    return Object.keys(queryParams).length > 0 ? queryParams : null;
  }

  async addTechnologieToFilter(technologie: string) {
    await this.applyFilter([...this.activeTechnologiesFilter, technologie]);
  }

  async removeTechnologieFromFilter(technologie: string) {
    await this.applyFilter(this.activeTechnologiesFilter.filter((item) => item !== technologie));
  }

  async search() {
    this.activeTechnologiesFilter = [];
    await this.router.navigate([`/${this.languageS.userLanguage()}/projects/page/1/`], {
      queryParams: this.getQueryParams(),
      fragment: 'projectsSection',
    });
  }

  async applyFilter(filter: string[]) {
    this.searchQuery = '';
    await this.router.navigate([`/${this.languageS.userLanguage()}/projects/page/1/`], {
      queryParams: this.getQueryParams(filter),
      fragment: 'projectsSection',
    });
  }
}
