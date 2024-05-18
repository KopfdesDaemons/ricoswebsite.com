import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { SidemenuService } from 'src/app/services/sidemenu.service';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'src/app/models/project';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  projects: Project[] = [];
  technologiesFilterOptions: string[] = [];
  activTechnologiesFilterOptions: string[] = [];
  totalProjects: number = 0;
  totalPages: number = 0;
  currentPage: number = 0;
  projectsPerPage = 5;
  faCircleXmark = faCircleXmark;

  constructor(
    private route: ActivatedRoute,
    public meta: Meta,
    public ps: ProjectService,
    private router: Router,
    public translate: TranslateService,
    public sidemenuS: SidemenuService) {
    this.meta.addTags([
      { property: 'og:description', content: 'My portfolio website as a hobby web developer.' },
      { name: 'description', content: 'My portfolio website as a hobby web developer.' }]);
  }

  ngOnInit() {
    // Wenn Route sich ändert    
    this.route.params.subscribe(params => {

      let lang = params['lang'];
      if (!lang) {
        lang = 'en';
      }
      this.translate.use(lang);

      // Lese Seite und Filter der Technologien aus URL Parametern
      this.currentPage = +params['page'] || 1;
      if (params['technologies']) this.activTechnologiesFilterOptions = params['technologies'].split('&');

      // Lade Projekte mit der Seite und dem Filter
      this.loadProjects(this.currentPage, this.activTechnologiesFilterOptions);
    })
  }

  async loadProjects(page: number, filter: string[] = []) {
    // Lade alle vorhanden Technologien
    this.technologiesFilterOptions = await this.ps.getAllTechnologies();

    // Entferne aktive Filter aus der Filterauswahl
    this.technologiesFilterOptions = this.technologiesFilterOptions.filter(t => !this.activTechnologiesFilterOptions.includes(t))

    // Lade Projekte mit der Seite und dem Filter
    this.projects = await this.ps.getProjects(filter, this.projectsPerPage, page);

    // Lade Gesamtprojektzahl und Gesamtseitenzahl
    this.totalProjects = await this.ps.getTotalProjectCount(filter);
    this.totalPages = Math.ceil(this.totalProjects / this.projectsPerPage);
  }

  getParamChain(params: string[]) {
    return params.join('&');
  }

  addTechnologieToFilter(technologie: string) {
    // Füge Filteroption zu den aktivern Filteroptionen hinzu
    this.activTechnologiesFilterOptions.push(technologie);

    // Alle aktiven Filteroptionen als ein String
    const technologieString = this.getParamChain(this.activTechnologiesFilterOptions);

    this.router.navigate(['projects/page/1/' + technologieString], { fragment: 'projectsSection' })
  }

  removeTechnologieFromFilter(technologie: string) {
    // Entferne Element aus den aktiver Filteroptionen
    this.activTechnologiesFilterOptions = this.activTechnologiesFilterOptions.filter(item => item !== technologie);

    // Alle aktiven Filteroptionen als ein String
    const technologieString = this.getParamChain(this.activTechnologiesFilterOptions);

    this.router.navigate(['projects/page/1/' + technologieString], { fragment: 'projectsSection' });
  }

  clickOnTag(technologie: string) {
    this.router.navigate(['projects/page/1/' + technologie], { fragment: 'projectsSection' });
  }
}
