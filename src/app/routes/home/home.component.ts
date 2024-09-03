import { Component, OnInit, ViewChild, ElementRef, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { SidemenuService } from 'src/app/services/sidemenu.service';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'src/app/models/project';
import { LanguageService } from 'src/app/services/language.service';
import { Location } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Subscription, lastValueFrom } from 'rxjs';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    ProjectCardComponent,
    RouterLink,
    TranslateModule,
  ],
})
export class HomeComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private meta = inject(Meta);
  private title = inject(Title);
  ps = inject(ProjectService);
  private location = inject(Location);
  private languageS = inject(LanguageService);
  private translate = inject(TranslateService);
  sidemenuS = inject(SidemenuService);

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

  ngOnInit() {
    this.routeParamsSubscription = this.route.params.subscribe(async (params) => {

      // Switch to Route Language if not set
      let lang = params['lang'];
      if (!lang) {
        this.location.go('/' + this.languageS.userAgendLanguage + '/');
        this.languageS.updateLanguage(lang);
      }

      this.currentPage = +params['page'] || 1;
      if (params['technologies']) this.activTechnologiesFilterOptions = params['technologies'].split('&');

      this.loadProjects(this.currentPage, this.activTechnologiesFilterOptions);

      const description = await lastValueFrom(this.translate.get('home_description'));
      this.title.setTitle('Ricos Website');
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
