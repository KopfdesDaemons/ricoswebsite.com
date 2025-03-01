import { Component, OnInit, ElementRef, inject, OnDestroy, viewChild, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
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

  projects: Project[] = [];
  technologiesFilterOptions: string[] = [];
  activTechnologiesFilter: string[] = [];
  totalPages: number = 0;
  currentPage: number = 0;
  faCircleXmark = faCircleXmark;
  private totalProjects: number = 0;
  private projectsPerPage = 5;
  readonly projectsSection = viewChild.required<ElementRef>('projectsSection');
  private routeParamsSubscription: Subscription | undefined;
  private queryParamsSubscription: Subscription | undefined;

  ngOnInit() {
    this.routeParamsSubscription = this.route.params.subscribe(async (params) => {
      const { page } = params;
      this.currentPage = +page || 1;
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

    this.projects = await this.ps.getProjects(filter, this.projectsPerPage, this.currentPage);
    this.totalProjects = await this.ps.getTotalProjectCount(filter);
    this.totalPages = Math.ceil(this.totalProjects / this.projectsPerPage);
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
    await this.router.navigate([`/${this.languageS.userLanguage}/projects/page/1/`], {
      queryParams: this.getQueryParams(filter),
      fragment: 'projectsSection',
    });
  }
}
