import { Component, OnInit, ElementRef, inject, OnDestroy, viewChild, PLATFORM_ID, effect, signal, ChangeDetectionStrategy } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project.model';
import { LanguageService } from 'src/app/services/language.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Subscription, lastValueFrom } from 'rxjs';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { isPlatformBrowser } from '@angular/common';

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
  private platformID = inject<object>(PLATFORM_ID);

  projects = signal<Project[]>([]);
  technologiesFilterOptions: string[] = [];
  activTechnologiesFilter: string[] = [];
  totalPages = signal<number>(0);
  currentPage = signal<number>(1);
  private totalProjects: number = 0;
  private projectsPerPage = 5;
  readonly projectsSection = viewChild.required<ElementRef>('projectsSection');
  private routeParamsSubscription: Subscription | undefined;
  private queryParamsSubscription: Subscription | undefined;

  constructor() {
    effect(async () => {
      await this.loadProjects();
    });
  }

  ngOnInit() {
    this.routeParamsSubscription = this.route.params.subscribe(async (params) => {
      const { page } = params;
      if (this.currentPage() === +page) return;
      this.currentPage.set(+page || 1);
      await this.loadProjects();

      // scroll to projects section
      if (isPlatformBrowser(this.platformID) && page) {
        this.projectsSection().nativeElement?.scrollIntoView({ behavior: 'smooth' });
      }
    });

    this.queryParamsSubscription = this.route.queryParams.subscribe(async (params) => {
      const { technologies } = params;
      this.activTechnologiesFilter = technologies ? technologies.split('&') : [];
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
    const filter = this.activTechnologiesFilter;
    this.technologiesFilterOptions = await this.ps.getAllTechnologies();

    // remove filter chips for active filters
    this.technologiesFilterOptions = this.technologiesFilterOptions.filter((t) => !this.activTechnologiesFilter.includes(t));

    this.projects.set(await this.ps.getProjects(filter, this.projectsPerPage, this.currentPage()));
    this.totalProjects = await this.ps.getTotalProjectCount(filter);
    this.totalPages.set(Math.ceil(this.totalProjects / this.projectsPerPage));
    await this.setMetaTags();
  }

  getQueryParams(technologies: string[] = this.activTechnologiesFilter) {
    if (technologies.length === 0) return null;
    return { technologies: technologies.join('&') };
  }

  async addTechnologieToFilter(technologie: string) {
    await this.applyFilter([...this.activTechnologiesFilter, technologie]);
  }

  async removeTechnologieFromFilter(technologie: string) {
    await this.applyFilter(this.activTechnologiesFilter.filter((item) => item !== technologie));
  }

  async applyFilter(filter: string[]) {
    await this.router.navigate([`/${this.languageS.userLanguage()}/projects/page/1/`], {
      queryParams: this.getQueryParams(filter),
      fragment: 'projectsSection',
    });
  }
}
