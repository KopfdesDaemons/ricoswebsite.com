import {
  SidemenuService,
  faAngular,
  faCircleXmark,
  faGithub,
  faJs,
  faNodeJs,
  faPhp,
  faUpRightFromSquare,
  faWordpress
} from "./chunk-D45IXOGT.js";
import {
  FaIconComponent
} from "./chunk-C4FMDJ5B.js";
import {
  ActivatedRoute,
  HttpClient,
  LanguageService,
  Location,
  Meta,
  Router,
  RouterLink,
  Title
} from "./chunk-S6YPVKVZ.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService,
  __async,
  inject,
  input,
  lastValueFrom,
  output,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-YQ2WRJ7O.js";

// src/app/models/project.model.ts
var Project = class {
  constructor(name, description, image, features, projectURL, githubURL, blogpostURL, technologies) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.features = features;
    this.projectURL = projectURL;
    this.githubURL = githubURL;
    this.blogpostURL = blogpostURL;
    this.technologies = technologies;
  }
};

// src/app/services/project.service.ts
var ProjectService = class _ProjectService {
  constructor() {
    this.http = inject(HttpClient);
    this.languageS = inject(LanguageService);
    this.projects = [];
  }
  // Projekte aus JSON laden
  loadProjectsFromJson() {
    return __async(this, arguments, function* (lang = this.languageS.userLanguage) {
      try {
        const url = `/projects.${lang}.json`;
        const response = yield lastValueFrom(this.http.get(url));
        this.projects = response.projects.map(this.createProjectFromData);
        return this.projects;
      } catch (error) {
        console.error("Fehler beim Laden der Projekte:", error);
        this.projects = [];
        return [];
      }
    });
  }
  // Hilfsfunktion zum Erstellen eines Project-Objekts aus den Daten
  createProjectFromData(data) {
    data.technologies = data.technologies.sort();
    return new Project(data.name, data.description, data.image, data.features, data.projectURL, data.githubURL, data.blogpostURL, data.technologies);
  }
  // Abragen der Anzahl der Projekte für Paginierung
  getTotalProjectCount() {
    return __async(this, arguments, function* (filterByTechnologies = []) {
      yield this.loadProjectsFromJson();
      if (filterByTechnologies.length === 0) {
        return this.projects.length;
      }
      const filteredProjects = this.projects.filter((project) => filterByTechnologies.some((tech) => project.technologies.includes(tech)));
      return filteredProjects.length;
    });
  }
  // Abfragen der Projektdaten
  getProjects() {
    return __async(this, arguments, function* (filterByTechnologies = [], itemsPerPage = 10, page = 1) {
      yield this.loadProjectsFromJson();
      let filteredProjects = this.projects;
      if (filterByTechnologies.length > 0) {
        filteredProjects = filteredProjects.filter((project) => filterByTechnologies.some((tech) => project.technologies.includes(tech)));
        filteredProjects = filteredProjects.sort((a, b) => a.name.localeCompare(b.name));
      }
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return filteredProjects.slice(startIndex, endIndex);
    });
  }
  // Abrufen aller Technologien
  getAllTechnologies() {
    return __async(this, null, function* () {
      yield this.loadProjectsFromJson();
      const allTechnologies = this.projects.flatMap((project) => project.technologies);
      const uniqueTechnologies = Array.from(new Set(allTechnologies));
      return uniqueTechnologies.sort();
    });
  }
  static {
    this.\u0275fac = function ProjectService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProjectService, factory: _ProjectService.\u0275fac, providedIn: "root" });
  }
};

// src/app/components/project-card/project-card.component.ts
var _c0 = (a0) => [a0];
function ProjectCardComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3);
    \u0275\u0275element(1, "img", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c0, "/" + ctx_r0.languageS.userLanguage + ctx_r0.project().blogpostURL));
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("src", ctx_r0.project().image, \u0275\u0275sanitizeUrl);
    \u0275\u0275propertyInterpolate("alt", ctx_r0.project().name);
  }
}
function ProjectCardComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275element(1, "img", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275propertyInterpolate("href", ctx_r0.project().projectURL, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("src", ctx_r0.project().image, \u0275\u0275sanitizeUrl);
    \u0275\u0275propertyInterpolate("alt", ctx_r0.project().name);
  }
}
function ProjectCardComponent_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, "/" + ctx_r0.languageS.userLanguage + ctx_r0.project().blogpostURL));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.project().name);
  }
}
function ProjectCardComponent_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r0.project().projectURL, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.project().name);
  }
}
function ProjectCardComponent_Conditional_2_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r2);
  }
}
function ProjectCardComponent_Conditional_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275element(1, "fa-icon", 10);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275propertyInterpolate("href", ctx_r0.project().projectURL, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.faUpRightFromSquare);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "visit_project"));
  }
}
function ProjectCardComponent_Conditional_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275element(1, "fa-icon", 10);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "GitHub");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275propertyInterpolate("href", ctx_r0.project().githubURL, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.faGithub);
  }
}
function ProjectCardComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProjectCardComponent_Conditional_2_Conditional_0_Template, 2, 5, "a", 3)(1, ProjectCardComponent_Conditional_2_Conditional_1_Template, 2, 3, "a", 4);
    \u0275\u0275elementStart(2, "div", 5);
    \u0275\u0275template(3, ProjectCardComponent_Conditional_2_Conditional_3_Template, 3, 4, "a", 6)(4, ProjectCardComponent_Conditional_2_Conditional_4_Template, 3, 2, "a", 7);
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul");
    \u0275\u0275repeaterCreate(8, ProjectCardComponent_Conditional_2_For_9_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 8);
    \u0275\u0275template(11, ProjectCardComponent_Conditional_2_Conditional_11_Template, 5, 5, "a", 7)(12, ProjectCardComponent_Conditional_2_Conditional_12_Template, 4, 2, "a", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.project().blogpostURL ? 0 : 1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.project().blogpostURL ? 3 : 4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.project().description);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.project().features);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.project().projectURL ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.project().githubURL ? 12 : -1);
  }
}
function ProjectCardComponent_Conditional_3_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r3);
  }
}
function ProjectCardComponent_Conditional_3_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275element(1, "fa-icon", 10);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "GitHub");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275propertyInterpolate("href", ctx_r0.project().githubURL, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.faGithub);
  }
}
function ProjectCardComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 5)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul");
    \u0275\u0275repeaterCreate(8, ProjectCardComponent_Conditional_3_For_9_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 8);
    \u0275\u0275template(11, ProjectCardComponent_Conditional_3_Conditional_11_Template, 4, 2, "a", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("src", ctx_r0.project().image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.project().name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.project().description);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.project().features);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.project().githubURL ? 11 : -1);
  }
}
function ProjectCardComponent_For_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fa-icon", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("icon", ctx_r0.faAngular);
  }
}
function ProjectCardComponent_For_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fa-icon", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("icon", ctx_r0.faPhp);
  }
}
function ProjectCardComponent_For_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fa-icon", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("icon", ctx_r0.faWordpress);
  }
}
function ProjectCardComponent_For_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fa-icon", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("icon", ctx_r0.faNodeJs);
  }
}
function ProjectCardComponent_For_7_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fa-icon", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("icon", ctx_r0.faJs);
  }
}
function ProjectCardComponent_For_7_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 14);
    \u0275\u0275element(1, "rect", 17)(2, "path", 18);
    \u0275\u0275elementEnd();
  }
}
function ProjectCardComponent_For_7_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 15);
    \u0275\u0275element(1, "path", 19);
    \u0275\u0275elementEnd();
  }
}
function ProjectCardComponent_For_7_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 16)(1, "g", 20);
    \u0275\u0275element(2, "path", 21)(3, "path", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "path", 23)(5, "path", 24);
    \u0275\u0275elementEnd();
  }
}
function ProjectCardComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 13);
    \u0275\u0275listener("click", function ProjectCardComponent_For_7_Template_li_click_0_listener() {
      const t_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clickOnTag.emit(t_r5));
    });
    \u0275\u0275template(1, ProjectCardComponent_For_7_Conditional_1_Template, 1, 1, "fa-icon", 10)(2, ProjectCardComponent_For_7_Conditional_2_Template, 1, 1, "fa-icon", 10)(3, ProjectCardComponent_For_7_Conditional_3_Template, 1, 1, "fa-icon", 10)(4, ProjectCardComponent_For_7_Conditional_4_Template, 1, 1, "fa-icon", 10)(5, ProjectCardComponent_For_7_Conditional_5_Template, 1, 1, "fa-icon", 10)(6, ProjectCardComponent_For_7_Conditional_6_Template, 3, 0, ":svg:svg", 14)(7, ProjectCardComponent_For_7_Conditional_7_Template, 2, 0, ":svg:svg", 15)(8, ProjectCardComponent_For_7_Conditional_8_Template, 6, 0, ":svg:svg", 16);
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(t_r5 === "Angular" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(t_r5 === "PHP" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(t_r5 === "WordPress" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(t_r5 === "Node.js" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(t_r5 === "JavaScript" ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(t_r5 === "TypeScript" ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(t_r5 === "Cinnamon" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(t_r5 === "MySQL" ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5);
  }
}
var ProjectCardComponent = class _ProjectCardComponent {
  constructor() {
    this.languageS = inject(LanguageService);
    this.faGithub = faGithub;
    this.faUpRightFromSquare = faUpRightFromSquare;
    this.faWordpress = faWordpress;
    this.faPhp = faPhp;
    this.faAngular = faAngular;
    this.faNodeJs = faNodeJs;
    this.faJs = faJs;
    this.project = input.required();
    this.clickOnTag = output();
  }
  static {
    this.\u0275fac = function ProjectCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectCardComponent, selectors: [["app-project-card"]], inputs: { project: [1, "project"] }, outputs: { clickOnTag: "clickOnTag" }, decls: 8, vars: 1, consts: [[1, "projectDiv"], [1, "row1"], [1, "technologiesDiv"], ["aria-label", "Visit project", 1, "imageDiv", 3, "routerLink"], ["aria-label", "Visit project", "target", "_blank", 1, "imageDiv", 3, "href"], [1, "descriptionDiv"], [3, "routerLink"], ["target", "_blank", 3, "href"], [1, "links"], ["width", "436", "height", "326", 3, "src", "alt"], [3, "icon"], [1, "imageDiv"], ["width", "436", "height", "326", 3, "src"], [3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "height", "512", "viewBox", "0 0 512 512", "width", "512"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xml", "space", "preserve", "enable-background", "new 0 0 23 23", "viewBox", "0 0 23 23", "height", "23px", "width", "23px", "y", "0px", "x", "0px", "version", "1.1"], ["xmlns", "http://www.w3.org/2000/svg", "width", "239", "height", "60", "viewBox", "0 0 18.427 4.626"], ["fill", "#fff", "height", "512", "rx", "50", "width", "512"], ["clip-rule", "evenodd", "d", "m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z", "fill", "#000", "fill-rule", "evenodd"], ["id", "XMLID_9_", "d", "M 11.5 0 C 5.149 0 0 5.149 0 11.5 C 0 17.852 5.149 23 11.5 23 C 17.852 23 23 17.852 23 11.5 C 23 5.149 17.852 0 11.5 0 z M 11.5 1.9609375 C 16.769 1.9609375 21.039062 6.231 21.039062 11.5 C 21.039062 12.310396 20.928511 13.09242 20.738281 13.84375 L 16.201172 8.8007812 L 10.400391 15.400391 L 13.199219 9.8007812 L 11.800781 7.3007812 L 3.5546875 16.777344 C 2.5486997 15.265661 1.9609375 13.451673 1.9609375 11.5 C 1.9609375 6.231 6.231 1.9609375 11.5 1.9609375 z ", 2, "fill", "var(--font-color)"], ["fill", "#00678c", "fill-rule", "evenodd"], ["d", "M2.92 2.906c-.133-.003-.237.01-.324.047-.025.01-.065.01-.068.042.013.013.015.035.027.053a.39.39 0 0 0 .087.102l.107.077c.065.04.138.063.202.103.037.023.073.053.1.078.018.013.03.035.053.043v-.005c-.012-.015-.015-.037-.027-.053l-.05-.048a.79.79 0 0 0-.173-.168c-.053-.037-.17-.087-.192-.148l-.003-.003c.037-.003.08-.017.115-.027.057-.015.108-.012.167-.027l.08-.023v-.015c-.03-.03-.052-.07-.083-.098-.085-.073-.178-.145-.275-.205-.052-.033-.118-.055-.173-.083-.02-.01-.053-.015-.065-.032-.03-.037-.047-.085-.068-.128l-.137-.29c-.03-.065-.048-.13-.085-.19a1.68 1.68 0 0 0-.645-.624c-.062-.035-.135-.05-.213-.068l-.125-.007c-.027-.012-.053-.043-.077-.058-.095-.06-.34-.19-.4-.018-.045.108.067.215.105.27.028.038.065.082.085.125.012.028.015.058.027.088l.087.223a.8.8 0 0 0 .062.103c.013.018.037.027.042.057-.023.033-.025.083-.038.125-.06.188-.037.422.048.56.027.042.1.133.175.098.075-.03.058-.125.08-.208.005-.02.002-.033.012-.047v.003l.068.138c.052.082.142.167.217.223.04.03.072.082.122.1v-.005H1.76c-.01-.015-.025-.022-.038-.033a.81.81 0 0 1-.087-.1 2.15 2.15 0 0 1-.187-.303c-.027-.052-.05-.108-.072-.16-.01-.02-.01-.05-.027-.06-.025.037-.062.068-.08.113-.032.072-.035.16-.047.252-.06-.01-.078-.065-.098-.112-.05-.118-.058-.31-.015-.445.012-.035.062-.145.042-.178-.01-.032-.043-.05-.062-.075-.022-.032-.045-.072-.06-.107C1 1.684.97 1.58.927 1.487.907 1.444.872 1.4.843 1.36.812 1.314.777 1.282.752 1.23.743 1.21.732 1.18.745 1.16c.003-.013.01-.018.023-.022.022-.018.083.005.105.015.062.025.113.048.165.083.023.017.048.048.078.057h.035c.053.012.113.003.163.018.088.028.168.07.24.115a1.48 1.48 0 0 1 .52.57c.02.038.028.073.047.113l.113.245c.035.078.068.158.118.223.025.035.125.053.17.072.033.015.085.028.115.047l.167.113c.027.02.1.062.115.095z"], ["d", "M1.22 1.457c-.028 0-.048.003-.068.008v.003h.003c.013.027.037.045.053.068l.038.08.003-.003c.023-.017.035-.043.035-.083-.01-.012-.012-.023-.02-.035-.01-.017-.032-.025-.045-.038z"], ["d", "M10.064 3.34h1.434c.168 0 .328-.034.458-.095.217-.1.32-.233.32-.408v-.366c0-.14-.118-.275-.354-.366a1.25 1.25 0 0 0-.423-.072h-.602c-.202 0-.297-.06-.324-.194-.004-.015-.004-.03-.004-.046v-.225c0-.012 0-.027.004-.042.027-.103.08-.13.256-.15h1.468v-.332H10.9c-.202 0-.31.012-.404.042-.294.09-.423.236-.423.492v.29c0 .225.252.416.68.46.046.004.095.004.145.004h.515c.02 0 .038 0 .053.004.156.015.225.042.27.1.03.03.038.057.038.092v.29c0 .034-.023.08-.07.118s-.118.065-.214.07c-.02 0-.03.004-.05.004h-1.376zm5.315-.576c0 .34.256.53.767.568l.145.008h1.296V3.01H16.28c-.3 0-.4-.072-.4-.248V1.045h-.5v1.72zm-2.787.015V1.598c0-.3.213-.484.63-.54l.133-.008h.946c.05 0 .092.004.14.008.416.057.625.24.625.54V2.78c0 .244-.088.374-.294.46l.488.442h-.576l-.397-.358-.4.023h-.534c-.088 0-.187-.01-.3-.038-.316-.088-.473-.256-.473-.53zm.538-.026c0 .015.008.03.012.05.027.137.156.213.354.213h.45l-.412-.374h.576l.362.328c.07-.038.11-.092.126-.16.004-.015.004-.034.004-.05V1.63c0-.015 0-.03-.004-.046-.027-.13-.156-.202-.35-.202h-.75c-.22 0-.366.095-.366.248z", "fill", "var(--font-color)", "fill-rule", "evenodd"], ["d", "M3.445 3.342h.496V1.378l.774 1.712c.088.206.214.282.458.282s.362-.076.454-.282l.77-1.712v1.964h.5V1.378c0-.19-.076-.282-.236-.332-.377-.114-.63-.015-.744.24l-.76 1.693-.732-1.693c-.11-.255-.366-.354-.747-.24-.156.05-.233.14-.233.332v1.964zm3.863-1.598h.5v1.08c-.004.06.02.198.3.202H9.18v-1.29h.5v1.765c0 .435-.538.53-.79.534H7.32v-.332h1.575c.32-.034.282-.194.282-.248v-.13H8.12c-.492-.004-.808-.22-.812-.47V1.744z", "fill", "var(--font-color)", "fill-rule", "evenodd"]], template: function ProjectCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, ProjectCardComponent_Conditional_2_Template, 13, 5)(3, ProjectCardComponent_Conditional_3_Template, 12, 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "ul");
        \u0275\u0275repeaterCreate(6, ProjectCardComponent_For_7_Template, 11, 9, "li", null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.project().blogpostURL || ctx.project().projectURL ? 2 : 3);
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.project().technologies);
      }
    }, dependencies: [RouterLink, FaIconComponent, TranslateModule, TranslatePipe], styles: ["\n\n.projectDiv[_ngcontent-%COMP%] {\n  background-color: black;\n  border-radius: 12px;\n  padding: 1em 1em 0.5em 1em;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 2em;\n  font-size: clamp(14px, 1vw, 18px);\n  align-items: center;\n  flex-direction: column;\n}\n.projectDiv[_ngcontent-%COMP%]   .row1[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.projectDiv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.projectDiv[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.projectDiv[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n}\n.projectDiv[_ngcontent-%COMP%]   .imageDiv[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1 0 50%;\n  height: auto;\n}\n.projectDiv[_ngcontent-%COMP%]   .imageDiv[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  max-height: 20em;\n  object-fit: contain;\n}\n.projectDiv[_ngcontent-%COMP%]   .descriptionDiv[_ngcontent-%COMP%] {\n  flex: 1 0 50%;\n  min-width: 15em;\n  max-width: 100%;\n  padding: 0 2%;\n  box-sizing: border-box;\n  margin: 0.5em 0;\n}\n.projectDiv[_ngcontent-%COMP%]   .descriptionDiv[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #6464ff;\n  margin-top: 0;\n}\n.projectDiv[_ngcontent-%COMP%]   .descriptionDiv[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5em;\n  margin-top: 1em;\n}\n.projectDiv[_ngcontent-%COMP%]   .descriptionDiv[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: 1px solid gray;\n  padding: 1em;\n  border-radius: 4px;\n  flex: 1;\n}\n.projectDiv[_ngcontent-%COMP%]   .descriptionDiv[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  margin-right: 0.5em;\n  font-size: 1.4em;\n}\n.projectDiv[_ngcontent-%COMP%]   .descriptionDiv[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #5857ff;\n}\n.projectDiv[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 2em;\n}\n.projectDiv[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-top: 0.5em;\n  text-wrap: pretty;\n}\n.projectDiv[_ngcontent-%COMP%]   .technologiesDiv[_ngcontent-%COMP%] {\n  max-width: 100%;\n  overflow-y: auto;\n  padding-bottom: 0.5em;\n}\n.projectDiv[_ngcontent-%COMP%]   .technologiesDiv[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  gap: 0.4em;\n  padding: 0;\n}\n.projectDiv[_ngcontent-%COMP%]   .technologiesDiv[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border: 1px solid rgb(95, 95, 95);\n  padding: 0.5em;\n  border-radius: 4px;\n  background-color: rgb(48, 48, 48);\n  cursor: pointer;\n  gap: 0.5em;\n  display: flex;\n  align-items: center;\n}\n.projectDiv[_ngcontent-%COMP%]   .technologiesDiv[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n}\n.projectDiv[_ngcontent-%COMP%]   .technologiesDiv[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 1.3em;\n  width: 1.3em;\n}\n.projectDiv[_ngcontent-%COMP%]:hover {\n  transition: all 200ms;\n  box-shadow: 0px 0px 50px 10px #5857ff;\n}\n.projectDiv[_ngcontent-%COMP%]:hover   .descriptionDiv[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: blue;\n}\n/*# sourceMappingURL=project-card.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectCardComponent, { className: "ProjectCardComponent", filePath: "src/app/components/project-card/project-card.component.ts", lineNumber: 16 });
})();

// src/app/routes/home/home.component.ts
var _c02 = ["projectsSection"];
var _forTrack0 = ($index, $item) => $item.name;
function HomeComponent_Conditional_19_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275listener("click", function HomeComponent_Conditional_19_For_7_Template_span_click_3_listener() {
      const technologie_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeTechnologieFromFilter(technologie_r2));
    });
    \u0275\u0275text(4, "cancel");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const technologie_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(technologie_r2);
  }
}
function HomeComponent_Conditional_19_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(2, 1, "filter_options"), ":");
  }
}
function HomeComponent_Conditional_19_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "button", 18);
    \u0275\u0275listener("click", function HomeComponent_Conditional_19_For_13_Template_button_click_1_listener() {
      const technologie_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addTechnologieToFilter(technologie_r5));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const technologie_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(technologie_r5);
  }
}
function HomeComponent_Conditional_19_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "app-project-card", 19);
    \u0275\u0275listener("clickOnTag", function HomeComponent_Conditional_19_For_16_Template_app_project_card_clickOnTag_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.applyFilter([$event]));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const project_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("project", project_r7);
  }
}
function HomeComponent_Conditional_19_Conditional_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 20);
    \u0275\u0275text(1, "<");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("routerLink", "/" + ctx_r2.languageS.userLanguage + "/projects/page/" + (ctx_r2.currentPage - 1) + "/." + ctx_r2.getParamChain(ctx_r2.activTechnologiesFilterOptions))("fragment", "projectsSection");
  }
}
function HomeComponent_Conditional_19_Conditional_17_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 23);
    \u0275\u0275text(2, "1");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", "/" + ctx_r2.languageS.userLanguage + "/projects/page/1/." + ctx_r2.getParamChain(ctx_r2.activTechnologiesFilterOptions))("fragment", "projectsSection");
  }
}
function HomeComponent_Conditional_19_Conditional_17_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 21)(1, "span");
    \u0275\u0275text(2, "\u2026");
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_Conditional_19_Conditional_17_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", "/" + ctx_r2.languageS.userLanguage + "/projects/page/" + (ctx_r2.currentPage - 2) + "/." + ctx_r2.getParamChain(ctx_r2.activTechnologiesFilterOptions))("fragment", "projectsSection");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.currentPage - 2);
  }
}
function HomeComponent_Conditional_19_Conditional_17_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", "/" + ctx_r2.languageS.userLanguage + "/projects/page/" + (ctx_r2.currentPage - 1) + "/." + ctx_r2.getParamChain(ctx_r2.activTechnologiesFilterOptions))("fragment", "projectsSection");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.currentPage - 1);
  }
}
function HomeComponent_Conditional_19_Conditional_17_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", "/" + ctx_r2.languageS.userLanguage + "/projects/page/" + (ctx_r2.currentPage + 1) + "/." + ctx_r2.getParamChain(ctx_r2.activTechnologiesFilterOptions));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.currentPage + 1);
  }
}
function HomeComponent_Conditional_19_Conditional_17_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", "/" + ctx_r2.languageS.userLanguage + "/projects/page/" + (ctx_r2.currentPage + 2) + "/." + ctx_r2.getParamChain(ctx_r2.activTechnologiesFilterOptions))("fragment", "projectsSection");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.currentPage + 2);
  }
}
function HomeComponent_Conditional_19_Conditional_17_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 21)(1, "span");
    \u0275\u0275text(2, "\u2026");
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_Conditional_19_Conditional_17_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", "/" + ctx_r2.languageS.userLanguage + "/projects/page/" + ctx_r2.totalPages + "/." + ctx_r2.getParamChain(ctx_r2.activTechnologiesFilterOptions))("fragment", "projectsSection");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.totalPages);
  }
}
function HomeComponent_Conditional_19_Conditional_17_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 20);
    \u0275\u0275text(1, ">");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("routerLink", "/" + ctx_r2.languageS.userLanguage + "/projects/page/" + (ctx_r2.currentPage + 1) + "/." + ctx_r2.getParamChain(ctx_r2.activTechnologiesFilterOptions))("fragment", "projectsSection");
  }
}
function HomeComponent_Conditional_19_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, HomeComponent_Conditional_19_Conditional_17_Conditional_1_Template, 2, 2, "a", 20);
    \u0275\u0275elementStart(2, "ul");
    \u0275\u0275template(3, HomeComponent_Conditional_19_Conditional_17_Conditional_3_Template, 3, 2, "li")(4, HomeComponent_Conditional_19_Conditional_17_Conditional_4_Template, 3, 0, "li", 21)(5, HomeComponent_Conditional_19_Conditional_17_Conditional_5_Template, 3, 3, "li")(6, HomeComponent_Conditional_19_Conditional_17_Conditional_6_Template, 3, 3, "li");
    \u0275\u0275elementStart(7, "li", 22)(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, HomeComponent_Conditional_19_Conditional_17_Conditional_10_Template, 3, 2, "li")(11, HomeComponent_Conditional_19_Conditional_17_Conditional_11_Template, 3, 3, "li")(12, HomeComponent_Conditional_19_Conditional_17_Conditional_12_Template, 3, 0, "li", 21)(13, HomeComponent_Conditional_19_Conditional_17_Conditional_13_Template, 3, 3, "li");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, HomeComponent_Conditional_19_Conditional_17_Conditional_14_Template, 2, 2, "a", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.currentPage - 1 > 0 ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.currentPage >= 4 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.currentPage >= 5 ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.currentPage - 2 > 0 ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.currentPage - 1 > 0 ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.currentPage);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.currentPage + 1 <= ctx_r2.totalPages ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.currentPage + 2 <= ctx_r2.totalPages ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.totalPages - 4 >= ctx_r2.currentPage ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.totalPages - 3 >= ctx_r2.currentPage ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.currentPage + 1 <= ctx_r2.totalPages ? 14 : -1);
  }
}
function HomeComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 12)(5, "ul", 13);
    \u0275\u0275repeaterCreate(6, HomeComponent_Conditional_19_For_7_Template, 5, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 14)(9, "div");
    \u0275\u0275template(10, HomeComponent_Conditional_19_Conditional_10_Template, 3, 3, "span");
    \u0275\u0275elementStart(11, "ul");
    \u0275\u0275repeaterCreate(12, HomeComponent_Conditional_19_For_13_Template, 3, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "ul", 15);
    \u0275\u0275repeaterCreate(15, HomeComponent_Conditional_19_For_16_Template, 2, 1, "li", null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, HomeComponent_Conditional_19_Conditional_17_Template, 15, 11, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "my_projects"));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.activTechnologiesFilterOptions);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.technologiesFilterOptions.length > 0 ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.technologiesFilterOptions);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.projects);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.totalPages > 1 ? 17 : -1);
  }
}
var HomeComponent = class _HomeComponent {
  constructor() {
    this.meta = inject(Meta);
    this.title = inject(Title);
    this.languageS = inject(LanguageService);
    this.ps = inject(ProjectService);
    this.location = inject(Location);
    this.translate = inject(TranslateService);
    this.sidemenuS = inject(SidemenuService);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.projectsSection = viewChild("projectsSection");
    this.projects = [];
    this.technologiesFilterOptions = [];
    this.activTechnologiesFilterOptions = [];
    this.totalProjects = 0;
    this.totalPages = 0;
    this.currentPage = 0;
    this.projectsPerPage = 5;
    this.faCircleXmark = faCircleXmark;
  }
  ngOnInit() {
    this.routeParamsSubscription = this.route.params.subscribe((params) => __async(this, null, function* () {
      const lang = params["lang"];
      if (!lang)
        yield this.router.navigate(["/" + this.languageS.userAgendLanguage + "/projects/page/1/."]);
      this.activTechnologiesFilterOptions = [];
      this.currentPage = +params["page"] || 1;
      const technologieParams = params["technologies"]?.replace(/^\./, "");
      if (technologieParams)
        this.activTechnologiesFilterOptions = technologieParams.split("&");
      yield this.loadProjects(this.currentPage, this.activTechnologiesFilterOptions);
      const description = yield lastValueFrom(this.translate.get("home_description"));
      this.title.setTitle("Ricos Website");
      this.meta.addTags([
        { property: "og:description", content: description },
        { name: "description", content: description }
      ]);
    }));
  }
  ngOnDestroy() {
    if (this.routeParamsSubscription) {
      this.routeParamsSubscription.unsubscribe();
    }
  }
  loadProjects(_0) {
    return __async(this, arguments, function* (page, filter = []) {
      this.technologiesFilterOptions = yield this.ps.getAllTechnologies();
      this.technologiesFilterOptions = this.technologiesFilterOptions.filter((t) => !this.activTechnologiesFilterOptions.includes(t));
      this.projects = yield this.ps.getProjects(filter, this.projectsPerPage, page);
      this.totalProjects = yield this.ps.getTotalProjectCount(filter);
      this.totalPages = Math.ceil(this.totalProjects / this.projectsPerPage);
    });
  }
  getParamChain(params) {
    return params.join("&");
  }
  addTechnologieToFilter(technologie) {
    return __async(this, null, function* () {
      yield this.applyFilter([...this.activTechnologiesFilterOptions, technologie]);
    });
  }
  removeTechnologieFromFilter(technologie) {
    return __async(this, null, function* () {
      yield this.applyFilter(this.activTechnologiesFilterOptions.filter((item) => item !== technologie));
    });
  }
  applyFilter(filter) {
    return __async(this, null, function* () {
      this.activTechnologiesFilterOptions = filter;
      const filterString = this.getParamChain(this.activTechnologiesFilterOptions);
      const lang = this.languageS.userLanguage;
      const routePath = `/${lang}/projects/page/1/${filterString}`;
      this.location.go(routePath + "#projectsSection");
      if (this.currentPage != 1)
        yield this.router.navigate([routePath], { fragment: "projectsSection" });
      yield this.loadProjects(1, this.activTechnologiesFilterOptions);
      const projectsSection = this.projectsSection();
      if (projectsSection)
        projectsSection.nativeElement.scrollIntoView({ behavior: "smooth" });
    });
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.projectsSection, _c02, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, decls: 20, vars: 7, consts: [["projectsSection", ""], ["id", "firstSection", 1, "gradient"], [1, "sectionSpacer"], [1, "sloganDiv"], [1, "logoDiv"], ["src", "/images/angularLogo.svg", "alt", "angular logo", "width", "80", "height", "80"], ["src", "/images/nodeLogo.svg", "alt", "nodeJS logo", "width", "80", "height", "80"], ["src", "/images/WordPress.svg", "alt", "nodeJS logo", "width", "80", "height", "80"], [1, "profilePicDiv"], [1, "shadowDiv"], ["src", "/images/profile.avif", "alt", "profile picture", "width", "441", "height", "568", 1, "profilePic"], ["id", "projectsSection"], [1, "filter"], [1, "activTechnologiesFilterOptions"], [1, "technologiesFilterOption"], [1, "projectCards"], [1, "pagination"], [1, "material-icon", 3, "click"], [3, "click"], [3, "clickOnTag", "project"], [1, "navLink", 3, "routerLink", "fragment"], [1, "dots"], [1, "current"], [3, "routerLink", "fragment"], ["fragment", "projectsSection", 3, "routerLink"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "main")(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p");
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 4);
        \u0275\u0275element(11, "img", 5)(12, "img", 6)(13, "img", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 8);
        \u0275\u0275element(15, "div", 9)(16, "img", 10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "section", 11, 0);
        \u0275\u0275template(19, HomeComponent_Conditional_19_Template, 18, 5, "div", 2);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, "home_h1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 5, "home_subtitle"));
        \u0275\u0275advance(11);
        \u0275\u0275conditional(ctx.projects.length > 0 ? 19 : -1);
      }
    }, dependencies: [ProjectCardComponent, RouterLink, TranslateModule, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.sectionSpacer[_ngcontent-%COMP%] {\n  padding: 0 5%;\n}\n#firstSection[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  align-items: center;\n  padding-top: 2em;\n}\n@media only screen and (max-width: 1100px) {\n  #firstSection[_ngcontent-%COMP%] {\n    padding-top: var(--header-height);\n  }\n}\n#firstSection[_ngcontent-%COMP%]   app-header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#firstSection[_ngcontent-%COMP%]   .sectionSpacer[_ngcontent-%COMP%] {\n  padding-bottom: 2em;\n  display: grid;\n  grid-template-columns: 1fr auto;\n  grid-template-rows: 1fr;\n  max-width: 70em;\n}\n#firstSection[_ngcontent-%COMP%]   .profilePicDiv[_ngcontent-%COMP%]:hover   .shadowDiv[_ngcontent-%COMP%] {\n  animation-duration: 600ms;\n}\n#firstSection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(34px, 4vw, 60px);\n}\n#firstSection[_ngcontent-%COMP%]   .sloganDiv[_ngcontent-%COMP%] {\n  padding-right: 1em;\n  grid-column: 1;\n  grid-row: 1;\n}\n#firstSection[_ngcontent-%COMP%]   .sloganDiv[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: clamp(20px, 2vw, 24px);\n}\n#firstSection[_ngcontent-%COMP%]   .profilePicDiv[_ngcontent-%COMP%] {\n  width: auto;\n  position: relative;\n  height: auto;\n  grid-column: 2;\n  animation: _ngcontent-%COMP%_grow 500ms ease-out;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#firstSection[_ngcontent-%COMP%]   .profilePic[_ngcontent-%COMP%] {\n  height: 40svh;\n  width: auto;\n  object-fit: cover;\n  animation: _ngcontent-%COMP%_wabeln 5s linear infinite;\n  border: 6px solid var(--border-color);\n}\n#firstSection[_ngcontent-%COMP%]   .shadowDiv[_ngcontent-%COMP%] {\n  box-shadow:\n    #768fff 0 -1px 100px,\n    rgb(54, 57, 219) 0 -2px 10px,\n    #361da7 0 -10px 20px,\n    rgb(32, 11, 88) 0 -18px 40px,\n    5px 5px 15px 5px rgba(0, 0, 0, 0);\n  position: absolute;\n  height: 40svh;\n  width: 100%;\n  transform: scale(0.9);\n  border-radius: 36% 64% 61% 39%/53% 47% 53% 47%;\n  animation: _ngcontent-%COMP%_pulse 3s linear infinite;\n}\n#firstSection[_ngcontent-%COMP%]   .logoDiv[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1em;\n}\n#firstSection[_ngcontent-%COMP%]   .logoDiv[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: clamp(2.5em, 4vw, 4em);\n  width: auto;\n}\n@keyframes _ngcontent-%COMP%_grow {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_wabeln {\n  0%, 100% {\n    border-radius: 36% 64% 61% 39%/53% 47% 53% 47%;\n    transform: translate3d(0, 0, 0) rotateZ(0.01deg);\n  }\n  34% {\n    transform: translate3d(0, 5px, 0) rotateZ(0.01deg);\n  }\n  50% {\n    border-radius: 48% 52% 70% 30%/42% 56% 44% 58%;\n    transform: translate3d(0, 0, 0) rotateZ(0.01deg);\n  }\n  67% {\n    transform: translate3d(0, -3px, 0) rotateZ(0.01deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    transform: scale(0.9);\n  }\n  50% {\n    transform: scale(0.85);\n  }\n}\n@media only screen and (max-width: 800px) {\n  #firstSection[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  #firstSection[_ngcontent-%COMP%]   .sectionSpacer[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto auto;\n  }\n  #firstSection[_ngcontent-%COMP%]   .sloganDiv[_ngcontent-%COMP%] {\n    grid-row: 2;\n  }\n  #firstSection[_ngcontent-%COMP%]   .profilePicDiv[_ngcontent-%COMP%] {\n    grid-column: 1;\n    grid-row: 1;\n    margin: 0 auto;\n  }\n  #firstSection[_ngcontent-%COMP%]   .profilePic[_ngcontent-%COMP%], \n   #firstSection[_ngcontent-%COMP%]   .shadowDiv[_ngcontent-%COMP%] {\n    max-height: 15rem;\n    height: 45svh;\n  }\n}\n#projectsSection[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n#projectsSection[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(24px, 4vw, 36px);\n}\n#projectsSection[_ngcontent-%COMP%]   .sectionSpacer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  margin: 0 auto;\n  width: 100%;\n  box-sizing: border-box;\n}\n#projectsSection[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n#projectsSection[_ngcontent-%COMP%]   .projectCards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#projectsSection[_ngcontent-%COMP%]   .projectCards[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n#projectsSection[_ngcontent-%COMP%]   .projectCards[_ngcontent-%COMP%]   app-project-card[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  max-width: 65em;\n  max-width: 100%;\n}\n#projectsSection[_ngcontent-%COMP%]   .technologiesFilterOption[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  flex: 1 0 50%;\n  min-width: 20em;\n}\n#projectsSection[_ngcontent-%COMP%]   .technologiesFilterOption[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  margin: 0;\n}\n#projectsSection[_ngcontent-%COMP%]   .technologiesFilterOption[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  all: unset;\n  border-radius: 12px;\n  padding: 8px;\n  margin: 4px;\n  background-color: rgb(43, 43, 43);\n  color: rgb(238, 238, 238);\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n#projectsSection[_ngcontent-%COMP%]   .technologiesFilterOption[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: gray;\n}\n#projectsSection[_ngcontent-%COMP%]   .activTechnologiesFilterOptions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex: 1 0 60%;\n}\n#projectsSection[_ngcontent-%COMP%]   .activTechnologiesFilterOptions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border-radius: 12px;\n  padding: 8px;\n  margin: 4px;\n  background-color: rgb(43, 43, 43);\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n#projectsSection[_ngcontent-%COMP%]   .activTechnologiesFilterOptions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .material-icon[_ngcontent-%COMP%]:hover {\n  color: rgb(121, 121, 121);\n  cursor: pointer;\n}\n#projectsSection[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#projectsSection[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n#projectsSection[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .navLink[_ngcontent-%COMP%] {\n  background-color: #361da7;\n  margin: 0.5em;\n  padding: 0.8em 2em;\n  border-radius: 4px;\n}\n#projectsSection[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  display: flex;\n  align-items: center;\n  gap: 0.5em;\n  height: 3em;\n}\n#projectsSection[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n#projectsSection[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0.8em 1.2em;\n  background: black;\n  border: solid 1px gray;\n}\n#projectsSection[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: rgb(0, 0, 68);\n}\n#projectsSection[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: rgb(54, 54, 54);\n}\n#projectsSection[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n#projectsSection[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 1px;\n}\n/*# sourceMappingURL=home.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/routes/home/home.component.ts", lineNumber: 20 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=home.component-P3AMKAYA.js.map
