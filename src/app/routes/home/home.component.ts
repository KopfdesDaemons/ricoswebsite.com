import { Component, OnInit, ElementRef, inject, OnDestroy, viewChild, signal, ChangeDetectionStrategy, afterRenderEffect } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project.model';
import { LanguageService } from 'src/app/services/language.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Subscription, lastValueFrom } from 'rxjs';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [ProjectCardComponent, RouterLink, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy {
  languageS = inject(LanguageService);
  private meta = inject(Meta);
  private title = inject(Title);
  private ps = inject(ProjectService);
  private translate = inject(TranslateService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  projects = signal<Project[]>([]);
  technologiesFilterOptions: string[] = [];
  activeTechnologiesFilter: string[] = [];
  private searchQuery = '';
  totalPages = signal<number>(0);
  currentPage = signal<number>(1);
  currentLang = signal<string>('en');
  private totalProjects: number = 0;
  private projectsPerPage = 5;
  readonly projectsSection = viewChild.required<ElementRef>('projectsSection');
  private routeParamsSubscription: Subscription | undefined;
  private queryParamsSubscription: Subscription | undefined;

  constructor() {
    afterRenderEffect(() => {
      if (this.projects().length > 0 && this.route.snapshot.fragment === 'projectsSection') {
        this.projectsSection().nativeElement?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  async ngOnInit() {
    await this.loadProjects();

    this.routeParamsSubscription = this.route.params.subscribe(async (params) => {
      const { page, lang } = params;
      if (this.currentPage() === +page && this.currentLang() === lang) return;
      this.currentLang.set(lang);
      this.currentPage.set(+page || 1);
      await this.loadProjects();
    });

    this.queryParamsSubscription = this.route.queryParams.subscribe(async (params) => {
      const { technologies, search } = params;
      this.activeTechnologiesFilter = technologies ? technologies.split('&') : [];
      this.searchQuery = search || '';
      await this.loadProjects();
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

  ngOnDestroy(): void {
    this.routeParamsSubscription?.unsubscribe();
    this.queryParamsSubscription?.unsubscribe();
  }

  async loadProjects() {
    await this.setMetaTags();
    const filter = this.activeTechnologiesFilter;

    const [projects, allTechnologies] = await Promise.all([this.ps.getProjects(filter, this.projectsPerPage, this.currentPage(), this.searchQuery), this.ps.getAllTechnologies()]);

    this.projects.set(projects.projects);
    this.totalProjects = projects.total;
    this.technologiesFilterOptions = allTechnologies.filter((t) => !this.activeTechnologiesFilter.includes(t));
    this.totalPages.set(Math.ceil(this.totalProjects / this.projectsPerPage));
  }

  getQueryParams(technologies: string[] = this.activeTechnologiesFilter) {
    if (technologies.length === 0 && this.searchQuery === '') return null;
    return { technologies: technologies.join('&'), search: this.searchQuery };
  }

  async addTechnologieToFilter(technologie: string) {
    await this.applyFilter([...this.activeTechnologiesFilter, technologie]);
  }

  async removeTechnologieFromFilter(technologie: string) {
    await this.applyFilter(this.activeTechnologiesFilter.filter((item) => item !== technologie));
  }

  async applyFilter(filter: string[]) {
    this.searchQuery = '';
    await this.router.navigate([`/${this.languageS.userLanguage()}/projects/page/1/`], {
      queryParams: this.getQueryParams(filter),
      fragment: 'projectsSection',
    });
  }
}
