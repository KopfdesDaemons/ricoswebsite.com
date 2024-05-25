import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { SidemenuService } from 'src/app/services/sidemenu.service';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'src/app/models/project';
import { LanguageService } from 'src/app/services/language.service';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { Subscription, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('projectsSection') projectsSection: ElementRef | undefined;

  projects: Project[] = [];
  technologiesFilterOptions: string[] = [];
  activTechnologiesFilterOptions: string[] = [];
  totalProjects: number = 0;
  totalPages: number = 0;
  currentPage: number = 0;
  projectsPerPage = 5;
  faCircleXmark = faCircleXmark;
  private routeParamsSubscription: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private meta: Meta,
    public ps: ProjectService,
    private router: Router,
    private location: Location,
    private languageS: LanguageService,
    private translate: TranslateService,
    public sidemenuS: SidemenuService) {
  }

  ngOnInit() {
    this.routeParamsSubscription = this.route.params.subscribe(async (params) => {

      // Load Language
      let lang = this.route.snapshot.paramMap.get('lang');
      if (!lang) {
        this.location.go('/' + this.languageS.userAgendLanguage);
        lang = this.languageS.userAgendLanguage
      }
      this.languageS.updateLanguage(lang);

      this.currentPage = +params['page'] || 1;
      if (params['technologies']) this.activTechnologiesFilterOptions = params['technologies'].split('&');

      this.loadProjects(this.currentPage, this.activTechnologiesFilterOptions);

      const description = await lastValueFrom(this.translate.get('home_description'));
      this.meta.addTags([
        { property: 'og:description', content: description },
        { name: 'description', content: description }
      ]);
    })
  }

  ngOnDestroy(): void {
    if (this.routeParamsSubscription) {
      this.routeParamsSubscription.unsubscribe();
    }
  }

  async loadProjects(page: number, filter: string[] = []) {
    this.technologiesFilterOptions = await this.ps.getAllTechnologies();

    // remove filter chips for active filters
    this.technologiesFilterOptions = this.technologiesFilterOptions.filter(t => !this.activTechnologiesFilterOptions.includes(t))

    this.projects = await this.ps.getProjects(filter, this.projectsPerPage, page);
    this.totalProjects = await this.ps.getTotalProjectCount(filter);
    this.totalPages = Math.ceil(this.totalProjects / this.projectsPerPage);
  }

  getParamChain(params: string[]) {
    return params.join('&');
  }

  addTechnologieToFilter(technologie: string) {
    this.applyFilter([...this.activTechnologiesFilterOptions, technologie]);
  }

  removeTechnologieFromFilter(technologie: string) {
    this.applyFilter(this.activTechnologiesFilterOptions.filter(item => item !== technologie));
  }

  applyFilter(filter: string[]) {
    this.activTechnologiesFilterOptions = filter;

    const technologieString = this.getParamChain(this.activTechnologiesFilterOptions);

    // change route
    if (!technologieString) this.location.go(this.languageS.userLanguage + '#projectsSection');
    else this.location.go(this.languageS.userLanguage + '/projects/page/1/' + technologieString + '#projectsSection');

    this.loadProjects(1, this.activTechnologiesFilterOptions);

    // scroll to projects section
    if (this.projectsSection) this.projectsSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
