import {
  SidemenuService,
  faBars,
  faGithub,
  faHome,
  faInstagram,
  faStackOverflow,
  faWordpress
} from "./chunk-D45IXOGT.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  RadioControlValueAccessor
} from "./chunk-7JADWIHW.js";
import {
  ConsentService
} from "./chunk-UNCXCIG4.js";
import {
  FaIconComponent,
  FontAwesomeModule
} from "./chunk-C4FMDJ5B.js";
import {
  parse
} from "./chunk-QTWOLS27.js";
import {
  ActivationStart,
  BrowserModule,
  HttpClient,
  LanguageService,
  Location,
  NgClass,
  Router,
  RouterLink,
  RouterOutlet,
  bootstrapApplication,
  isPlatformServer,
  provideClientHydration,
  provideHttpClient,
  provideRouter,
  withFetch,
  withInMemoryScrolling
} from "./chunk-S6YPVKVZ.js";
import {
  PLATFORM_ID,
  TranslateLoader,
  TranslateModule,
  TranslatePipe,
  __async,
  __spreadValues,
  importProvidersFrom,
  inject,
  map,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-YQ2WRJ7O.js";

// src/app/components/header/header.component.ts
var _c0 = (a0) => ({ menuIsOpen: a0 });
var _c1 = (a0) => [a0];
var HeaderComponent = class _HeaderComponent {
  constructor() {
    this.sidemenuS = inject(SidemenuService);
    this.languageS = inject(LanguageService);
    this.faBars = faBars;
  }
  clickOnWebsitename() {
    if (this.sidemenuS.MenuIsOpen)
      this.sidemenuS.toggleMenu();
  }
  static {
    this.\u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], decls: 8, vars: 7, consts: [[3, "ngClass"], ["aria-label", "toggle sidemenu", 1, "toggle_sidemenu_button", 3, "click"], [3, "icon"], [1, "websiteName", 3, "click", "routerLink"]], template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "button", 1);
        \u0275\u0275listener("click", function HeaderComponent_Template_button_click_1_listener() {
          return ctx.sidemenuS.toggleMenu();
        });
        \u0275\u0275element(2, "fa-icon", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "a", 3);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_3_listener() {
          return ctx.clickOnWebsitename();
        });
        \u0275\u0275elementStart(4, "span");
        \u0275\u0275text(5, "Ricos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span");
        \u0275\u0275text(7, " Website");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c0, ctx.sidemenuS.MenuIsOpen));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.faBars);
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c1, ctx.languageS.userLanguage + "/projects/page/1/."));
      }
    }, dependencies: [NgClass, FaIconComponent, RouterLink], styles: ["\n\n.websiteName[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  background: -webkit-linear-gradient(#eee, #2525d9);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\nheader[_ngcontent-%COMP%] {\n  font-size: clamp(14px, 5vw, 24px);\n  box-sizing: border-box;\n  display: flex;\n  vertical-align: middle;\n  height: var(--header-height);\n  position: absolute;\n  z-index: 2;\n}\nheader.menuIsOpen[_ngcontent-%COMP%] {\n  position: fixed;\n}\n@media only screen and (min-width: 1100px) {\n  header[_ngcontent-%COMP%] {\n    position: fixed;\n  }\n  header.menuIsOpen[_ngcontent-%COMP%] {\n    position: absolute;\n  }\n}\n@media only screen and (min-width: 1900px) {\n  header.menuIsOpen[_ngcontent-%COMP%] {\n    position: fixed;\n  }\n}\nheader[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\nheader[_ngcontent-%COMP%]   .websiteName[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\nheader[_ngcontent-%COMP%]   .toggle_sidemenu_button[_ngcontent-%COMP%] {\n  all: unset;\n  color: var(--font-color);\n  cursor: pointer;\n  transition: all 100ms;\n  width: var(--header-height);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nheader[_ngcontent-%COMP%]   .toggle_sidemenu_button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.3);\n}\n/*# sourceMappingURL=header.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/app/components/header/header.component.ts", lineNumber: 15 });
})();

// src/app/components/language-switch-offer/language-switch-offer.component.ts
var _c02 = (a0) => ({ open: a0 });
var LanguageSwitchOfferComponent = class _LanguageSwitchOfferComponent {
  constructor() {
    this.langS = inject(LanguageService);
    this.closed = false;
  }
  static {
    this.\u0275fac = function LanguageSwitchOfferComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LanguageSwitchOfferComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LanguageSwitchOfferComponent, selectors: [["app-language-switch-offer"]], decls: 10, vars: 4, consts: [["id", "languageSwitchOffer", 3, "ngClass"], [1, "closeButton", 3, "click"], [1, "buttons"], [3, "click"]], template: function LanguageSwitchOfferComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
        \u0275\u0275listener("click", function LanguageSwitchOfferComponent_Template_button_click_1_listener() {
          return ctx.closed = true;
        });
        \u0275\u0275text(2, "\u2715");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 2)(6, "button", 3);
        \u0275\u0275listener("click", function LanguageSwitchOfferComponent_Template_button_click_6_listener() {
          return ctx.langS.switchUserLanguage(ctx.langS.userAgendLanguage);
        });
        \u0275\u0275text(7, "Yes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 3);
        \u0275\u0275listener("click", function LanguageSwitchOfferComponent_Template_button_click_8_listener() {
          return ctx.langS.askUserToSwitch = false;
        });
        \u0275\u0275text(9, "No");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c02, ctx.langS.askUserToSwitch && !ctx.closed));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" Do you want to change the language to ", ctx.langS.userAgendLanguage == "de" ? "german" : "english", "? ");
      }
    }, dependencies: [NgClass], styles: ["\n\n#languageSwitchOffer[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 2em;\n  top: 2em;\n  background-color: rgb(37, 44, 51);\n  border-radius: 12px;\n  padding: 1em;\n  z-index: 20;\n  box-shadow: 1px 1px 3px 1px black;\n  transform: translateX(110%);\n  border: solid 1px;\n  opacity: 0;\n}\n@media only screen and (max-width: 600px) {\n  #languageSwitchOffer[_ngcontent-%COMP%] {\n    right: 1em;\n    left: 1em;\n    top: unset;\n    bottom: 1em;\n  }\n}\n@keyframes _ngcontent-%COMP%_moveIn {\n  from {\n    transform: translateX(110%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 100;\n  }\n}\n#languageSwitchOffer.open[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_moveIn 500ms forwards ease-out;\n  transform: translateX(0);\n}\n#languageSwitchOffer[_ngcontent-%COMP%]   .closeButton[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  height: 1.8em;\n  width: 1.8em;\n  float: right;\n  border: none;\n  cursor: pointer;\n}\n#languageSwitchOffer[_ngcontent-%COMP%]   .closeButton[_ngcontent-%COMP%]:hover {\n  background-color: rgb(206, 206, 206);\n}\n#languageSwitchOffer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5em;\n  margin-top: 1em;\n}\n#languageSwitchOffer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: rgb(69, 69, 187);\n  color: var(--font-color);\n  padding: 0.5em 1em;\n  border: none;\n  border: 2px solid transparent;\n  border-radius: 6px;\n  cursor: pointer;\n}\n#languageSwitchOffer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n  border: 2px solid rgb(69, 69, 187);\n}\n/*# sourceMappingURL=language-switch-offer.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LanguageSwitchOfferComponent, { className: "LanguageSwitchOfferComponent", filePath: "src/app/components/language-switch-offer/language-switch-offer.component.ts", lineNumber: 11 });
})();

// src/app/components/sidemenu/sidemenu.component.ts
var _c03 = (a0) => ({ sidemenuOpen: a0 });
var _c12 = (a0) => [a0];
var SidemenuComponent = class _SidemenuComponent {
  constructor() {
    this.sidemenuS = inject(SidemenuService);
    this.languageS = inject(LanguageService);
    this.faHome = faHome;
    this.faGithub = faGithub;
  }
  toggleMenu() {
    if (this.sidemenuS.MenuIsOpen)
      this.sidemenuS.toggleMenu();
  }
  static {
    this.\u0275fac = function SidemenuComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SidemenuComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidemenuComponent, selectors: [["app-sidemenu"]], decls: 67, vars: 37, consts: [["sidemenu", ""], [1, "closingDiv", 3, "click", "ngClass"], ["side", "", 3, "click", "ngClass"], [1, "sidemenuContent"], [3, "click", "routerLink"], [3, "icon"], ["href", "https://github.com/KopfdesDaemons", "target", "_blank", 3, "click"], ["fragment", "projectsSection", 3, "click", "routerLink"], [1, "languageSetter"], ["type", "radio", "id", "german", "name", "language", "value", "de", "checked", "", 3, "ngModelChange", "click", "ngModel"], ["for", "german"], ["xmlns", "http://www.w3.org/2000/svg", "id", "flag-icons-de", "viewBox", "0 0 640 480", "role", "img", "aria-labelledby", "german-flag"], ["id", "german-flag"], ["fill", "#fc0", "d", "M0 320h640v160H0z"], ["fill", "#000001", "d", "M0 0h640v160H0z"], ["fill", "red", "d", "M0 160h640v160H0z"], ["type", "radio", "id", "english", "name", "language", "value", "en", 3, "ngModelChange", "click", "ngModel"], ["for", "english"], ["xmlns", "http://www.w3.org/2000/svg", "id", "flag-icons-us", "viewBox", "0 0 640 480", "role", "img", "aria-labelledby", "us-flag"], ["id", "us-flag"], ["fill", "#bd3d44", "d", "M0 0h640v480H0"], ["stroke", "#fff", "stroke-width", "37", "d", "M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"], ["fill", "#192f5d", "d", "M0 0h364.8v258.5H0"], ["id", "us-a", "markerHeight", "30", "markerWidth", "30"], ["fill", "#fff", "d", "m14 0 9 27L0 10h28L5 27z"], ["fill", "none", "marker-mid", "url(#us-a)", "d", "m0 0 16 11h61 61 61 61 60L47 37h61 61 60 61L16 63h61 61 61 61 60L47 89h61 61 60 61L16 115h61 61 61 61 60L47 141h61 61 60 61L16 166h61 61 61 61 60L47 192h61 61 60 61L16 218h61 61 61 61 60z"]], template: function SidemenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275listener("click", function SidemenuComponent_Template_div_click_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.sidemenuS.toggleMenu());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(1, "aside", 2, 0);
        \u0275\u0275listener("click", function SidemenuComponent_Template_aside_click_1_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleMenu());
        });
        \u0275\u0275elementStart(3, "div", 3)(4, "nav")(5, "ul")(6, "li")(7, "a", 4);
        \u0275\u0275listener("click", function SidemenuComponent_Template_a_click_7_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleMenu());
        });
        \u0275\u0275element(8, "fa-icon", 5);
        \u0275\u0275elementStart(9, "span");
        \u0275\u0275text(10, "Home");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "li")(12, "a", 6);
        \u0275\u0275listener("click", function SidemenuComponent_Template_a_click_12_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleMenu());
        });
        \u0275\u0275element(13, "fa-icon", 5);
        \u0275\u0275elementStart(14, "span");
        \u0275\u0275text(15, "GitHub");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "li");
        \u0275\u0275element(17, "hr");
        \u0275\u0275elementStart(18, "a", 4);
        \u0275\u0275listener("click", function SidemenuComponent_Template_a_click_18_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleMenu());
        });
        \u0275\u0275elementStart(19, "span");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "li");
        \u0275\u0275element(23, "hr");
        \u0275\u0275elementStart(24, "a", 7);
        \u0275\u0275listener("click", function SidemenuComponent_Template_a_click_24_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleMenu());
        });
        \u0275\u0275elementStart(25, "span");
        \u0275\u0275text(26, "Portfolio");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(27, "hr");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "li")(29, "a", 4);
        \u0275\u0275listener("click", function SidemenuComponent_Template_a_click_29_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleMenu());
        });
        \u0275\u0275elementStart(30, "span");
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "li")(34, "a", 4);
        \u0275\u0275listener("click", function SidemenuComponent_Template_a_click_34_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleMenu());
        });
        \u0275\u0275elementStart(35, "span");
        \u0275\u0275text(36);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(38, "fieldset", 8)(39, "legend");
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div")(43, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function SidemenuComponent_Template_input_ngModelChange_43_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.languageS.userLanguage, $event) || (ctx.languageS.userLanguage = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("click", function SidemenuComponent_Template_input_click_43_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.languageS.switchUserLanguage("de"));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "label", 10);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(45, "svg", 11)(46, "title", 12);
        \u0275\u0275text(47, "Flagge von Deutschland");
        \u0275\u0275elementEnd();
        \u0275\u0275element(48, "path", 13)(49, "path", 14)(50, "path", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(51, "span");
        \u0275\u0275text(52, "German");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(53, "div")(54, "input", 16);
        \u0275\u0275twoWayListener("ngModelChange", function SidemenuComponent_Template_input_ngModelChange_54_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.languageS.userLanguage, $event) || (ctx.languageS.userLanguage = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("click", function SidemenuComponent_Template_input_click_54_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.languageS.switchUserLanguage("en"));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "label", 17);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(56, "svg", 18)(57, "title", 19);
        \u0275\u0275text(58, "Flagge der USA");
        \u0275\u0275elementEnd();
        \u0275\u0275element(59, "path", 20)(60, "path", 21)(61, "path", 22);
        \u0275\u0275elementStart(62, "marker", 23);
        \u0275\u0275element(63, "path", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275element(64, "path", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(65, "span");
        \u0275\u0275text(66, "English");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(23, _c03, ctx.sidemenuS.MenuIsOpen));
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(25, _c03, ctx.sidemenuS.MenuIsOpen));
        \u0275\u0275advance(6);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(27, _c12, ctx.languageS.userLanguage + "/projects/page/1/."));
        \u0275\u0275advance();
        \u0275\u0275property("icon", ctx.faHome);
        \u0275\u0275advance(5);
        \u0275\u0275property("icon", ctx.faGithub);
        \u0275\u0275advance(5);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(29, _c12, ctx.languageS.userLanguage + "/blog/."));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 15, "Blog"));
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(31, _c12, ctx.languageS.userLanguage + "/projects/page/1/."));
        \u0275\u0275advance(5);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(33, _c12, ctx.languageS.userLanguage + "/blogpost/css-gallery/."));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 17, "css_gallery_title"));
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(35, _c12, ctx.languageS.userLanguage + "/blogpost/about-this-website/."));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 19, "about_this_website_title"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(41, 21, "language"), ":");
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.languageS.userLanguage);
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.languageS.userLanguage);
      }
    }, dependencies: [NgClass, RouterLink, FaIconComponent, FormsModule, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel, TranslateModule, TranslatePipe], styles: ["\n\n.closingDiv[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  z-index: 1;\n  display: none;\n}\n@media only screen and (max-width: 1100px) {\n  .closingDiv.sidemenuOpen[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\naside[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100dvh;\n  z-index: 1;\n  width: var(--sidemenu-width);\n  transition: transform 100ms ease-in-out;\n  box-sizing: border-box;\n  background-color: var(--section);\n  display: flex;\n}\naside.sidemenuOpen[_ngcontent-%COMP%] {\n  transform: translateX(calc(-1 * var(--sidemenu-width)));\n}\n@media only screen and (max-width: 1100px) {\n  aside[_ngcontent-%COMP%] {\n    transform: translateX(calc(-1 * var(--sidemenu-width)));\n  }\n  aside.sidemenuOpen[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n}\naside[_ngcontent-%COMP%]   .sidemenuContent[_ngcontent-%COMP%] {\n  margin-top: 5em;\n  padding: 0 1em;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  width: 100%;\n}\naside[_ngcontent-%COMP%]   .sidemenuContent[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\naside[_ngcontent-%COMP%]   .sidemenuContent[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\naside[_ngcontent-%COMP%]   .sidemenuContent[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 100%;\n}\naside[_ngcontent-%COMP%]   .sidemenuContent[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 1em 0.5em;\n  flex: 1 1 auto;\n  text-decoration: none;\n  display: flex;\n  gap: 1em;\n  align-items: center;\n  font-size: 1.2em;\n  justify-content: center;\n  text-align: center;\n  text-wrap: balance;\n}\naside[_ngcontent-%COMP%]   .sidemenuContent[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #1c2e64;\n}\naside[_ngcontent-%COMP%]   .sidemenuContent[_ngcontent-%COMP%]   .languageSetter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5em;\n  margin-top: auto;\n  margin-bottom: 1em;\n}\naside[_ngcontent-%COMP%]   .sidemenuContent[_ngcontent-%COMP%]   .languageSetter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\naside[_ngcontent-%COMP%]   .sidemenuContent[_ngcontent-%COMP%]   .languageSetter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  border: solid 1px rgb(109, 109, 109);\n}\naside[_ngcontent-%COMP%]   .sidemenuContent[_ngcontent-%COMP%]   .languageSetter[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5em;\n  -webkit-user-select: none;\n  user-select: none;\n  border: solid 1px transparent;\n  padding: 0.2em;\n  cursor: pointer;\n}\naside[_ngcontent-%COMP%]   .sidemenuContent[_ngcontent-%COMP%]   .languageSetter[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 2em;\n}\naside[_ngcontent-%COMP%]   .sidemenuContent[_ngcontent-%COMP%]   .languageSetter[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\n  background-color: rgb(3, 3, 24);\n}\n/*# sourceMappingURL=sidemenu.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidemenuComponent, { className: "SidemenuComponent", filePath: "src/app/components/sidemenu/sidemenu.component.ts", lineNumber: 18 });
})();

// src/app/components/consent-manager/consent-manager.component.ts
var _c04 = ["dialog"];
function ConsentManagerComponent_Conditional_0_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "div")(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 4);
    \u0275\u0275listener("change", function ConsentManagerComponent_Conditional_0_For_9_Template_input_change_4_listener($event) {
      const service_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.switchConsent($event, service_r4.name));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const service_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(service_r4.name);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.consentS.checkConsent(service_r4.name));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, service_r4.descriptionTransString));
  }
}
function ConsentManagerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "dialog", 1, 0)(2, "div", 2)(3, "h2");
    \u0275\u0275text(4, "Consent\xA0Manager");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 3);
    \u0275\u0275listener("click", function ConsentManagerComponent_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.consentS.closeConsentmanager());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "ul");
    \u0275\u0275repeaterCreate(8, ConsentManagerComponent_Conditional_0_For_9_Template, 8, 5, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.consentS.possibleConsents);
  }
}
var ConsentManagerComponent = class _ConsentManagerComponent {
  constructor() {
    this.consentS = inject(ConsentService);
    this.platformId = inject(PLATFORM_ID);
    this.dialog = viewChild("dialog");
  }
  ngAfterViewInit() {
    this.listenOpenStatus();
  }
  switchConsent(event, serviceName) {
    const value = event.target.checked;
    if (value)
      this.consentS.giveConsent(serviceName);
    else
      this.consentS.revokeConsent(serviceName);
  }
  listenOpenStatus() {
    if (isPlatformServer(this.platformId))
      return;
    this.listenOpenStatusSub = this.consentS.consentMangerIsVisible.subscribe((value) => {
      if (value)
        this.dialog()?.nativeElement.showModal();
      else
        this.dialog()?.nativeElement.close();
    });
  }
  ngOnDestroy() {
    if (this.listenOpenStatusSub) {
      this.listenOpenStatusSub.unsubscribe();
    }
  }
  static {
    this.\u0275fac = function ConsentManagerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConsentManagerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsentManagerComponent, selectors: [["app-consent-manager"]], viewQuery: function ConsentManagerComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.dialog, _c04, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, decls: 1, vars: 1, consts: [["dialog", ""], ["id", "consentManager"], [1, "headlineDiv"], [1, "closeButton", 3, "click"], ["type", "checkbox", 3, "change", "checked"]], template: function ConsentManagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ConsentManagerComponent_Conditional_0_Template, 10, 0, "dialog", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.consentS.consentMangerIsVisible ? 0 : -1);
      }
    }, dependencies: [TranslateModule, TranslatePipe], styles: ['\n\n#consentManager[_ngcontent-%COMP%] {\n  background-color: rgb(37, 44, 51);\n  padding: 1em;\n  position: fixed;\n  top: -10%;\n  box-shadow: 1px 1px 3px 1px black;\n  border-radius: 12px;\n  border: 1px solid;\n  color: var(--font-color);\n  font-size: 1em;\n}\n#consentManager[_ngcontent-%COMP%]::backdrop {\n  -webkit-backdrop-filter: blur(1px);\n  backdrop-filter: blur(1px);\n}\n#consentManager[_ngcontent-%COMP%]   .closeButton[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  height: 2em;\n  width: 2em;\n  border: none;\n  cursor: pointer;\n}\n#consentManager[_ngcontent-%COMP%]   .closeButton[_ngcontent-%COMP%]:hover {\n  background-color: rgb(206, 206, 206);\n}\n#consentManager[_ngcontent-%COMP%]   .headlineDiv[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1em;\n  justify-content: space-between;\n}\n#consentManager[_ngcontent-%COMP%]   .headlineDiv[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n#consentManager[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5em;\n}\n#consentManager[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n#consentManager[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n#consentManager[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n#consentManager[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0.3em;\n}\n#consentManager[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  font-size: 1em;\n  appearance: none;\n  width: 3em;\n  height: 1.5em;\n  background: #ddd;\n  border-radius: 3em;\n  position: relative;\n  cursor: pointer;\n  outline: none;\n}\n#consentManager[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked {\n  background: #295869;\n}\n#consentManager[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: "";\n  width: 1.5em;\n  height: 1.5em;\n  border-radius: 50%;\n  background: #fff;\n  box-shadow: 0 0 0.25em rgba(0, 0, 0, 0.3);\n  left: 0;\n  transition: all 150ms ease-in-out;\n}\n#consentManager[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked:after {\n  left: calc(100% - 1.5em);\n}\n/*# sourceMappingURL=consent-manager.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsentManagerComponent, { className: "ConsentManagerComponent", filePath: "src/app/components/consent-manager/consent-manager.component.ts", lineNumber: 13 });
})();

// src/app/components/footer/footer.component.ts
var FooterComponent = class _FooterComponent {
  constructor() {
    this.languageS = inject(LanguageService);
    this.consentS = inject(ConsentService);
    this.faInstagram = faInstagram;
    this.faGithub = faGithub;
    this.faStackOverflow = faStackOverflow;
    this.faWordpress = faWordpress;
  }
  static {
    this.\u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FooterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 37, vars: 14, consts: [[1, "linkGroup"], [3, "icon"], ["target", "_blank", "href", "https://www.instagram.com/KopfdesDaemons/"], ["target", "_blank", "href", "https://github.com/KopfdesDaemons"], ["target", "_blank", "href", "https://stackoverflow.com/users/13802163/rico"], ["target", "_blank", "href", "https://profiles.wordpress.org/ricosylvain/"], ["routerLink", "/legal-notice/."], [3, "routerLink"], [3, "click"]], template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "footer")(1, "div", 0)(2, "h2");
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "ul")(6, "li");
        \u0275\u0275element(7, "fa-icon", 1);
        \u0275\u0275elementStart(8, "a", 2);
        \u0275\u0275text(9, "Instagram");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "li");
        \u0275\u0275element(11, "fa-icon", 1);
        \u0275\u0275elementStart(12, "a", 3);
        \u0275\u0275text(13, "GitHub");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "li");
        \u0275\u0275element(15, "fa-icon", 1);
        \u0275\u0275elementStart(16, "a", 4);
        \u0275\u0275text(17, "StackOverflow");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "li");
        \u0275\u0275element(19, "fa-icon", 1);
        \u0275\u0275elementStart(20, "a", 5);
        \u0275\u0275text(21, "WordPress");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(22, "div", 0)(23, "h2");
        \u0275\u0275text(24, "Page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "ul")(26, "li")(27, "a", 6);
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "li")(31, "a", 7);
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "li")(35, "span", 8);
        \u0275\u0275listener("click", function FooterComponent_Template_span_click_35_listener() {
          return ctx.consentS.openConsentmanager();
        });
        \u0275\u0275text(36, "Consent Manager");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 8, "my_links"));
        \u0275\u0275advance(4);
        \u0275\u0275property("icon", ctx.faInstagram);
        \u0275\u0275advance(4);
        \u0275\u0275property("icon", ctx.faGithub);
        \u0275\u0275advance(4);
        \u0275\u0275property("icon", ctx.faStackOverflow);
        \u0275\u0275advance(4);
        \u0275\u0275property("icon", ctx.faWordpress);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 10, "legal_notice"));
        \u0275\u0275advance(3);
        \u0275\u0275propertyInterpolate("routerLink", ctx.languageS.userLanguage + "/privacy-policy/.");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 12, "privacy_policy"));
      }
    }, dependencies: [FaIconComponent, RouterLink, TranslateModule, TranslatePipe], styles: ["\n\nfooter[_ngcontent-%COMP%] {\n  font-size: clamp(12px, 5vw, 14px);\n  padding: 4vw;\n  background-color: var(--section);\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2em;\n}\nfooter[_ngcontent-%COMP%]   .linkGroup[_ngcontent-%COMP%] {\n  padding: 1em;\n}\nfooter[_ngcontent-%COMP%]   .linkGroup[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n  margin: 0;\n  color: rgb(206, 245, 245);\n}\nfooter[_ngcontent-%COMP%]   .linkGroup[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0.8em;\n}\nfooter[_ngcontent-%COMP%]   .linkGroup[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 0.5em;\n  padding: 0.2em 0;\n}\nfooter[_ngcontent-%COMP%]   .linkGroup[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  margin-right: 0.5em;\n}\nfooter[_ngcontent-%COMP%]   .linkGroup[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  cursor: pointer;\n}\n/*# sourceMappingURL=footer.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/components/footer/footer.component.ts", lineNumber: 15 });
})();

// src/app/app.component.ts
var _c05 = (a0) => ({ menuIsOpen: a0 });
var AppComponent = class _AppComponent {
  constructor() {
    this.sidemenuS = inject(SidemenuService);
    this.langS = inject(LanguageService);
    this.router = inject(Router);
  }
  ngOnInit() {
    this.router.events.subscribe((event) => __async(this, null, function* () {
      if (event instanceof ActivationStart && Object.keys(event.snapshot.params).length > 0) {
        const lang = event.snapshot.params["lang"];
        yield this.langS.updateLanguage(lang);
      }
    }));
  }
  static {
    this.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 7, vars: 3, consts: [[1, "content", 3, "ngClass"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-header");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275element(2, "app-language-switch-offer")(3, "app-sidemenu")(4, "router-outlet")(5, "app-consent-manager")(6, "app-footer");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(1, _c05, ctx.sidemenuS.MenuIsOpen));
      }
    }, dependencies: [HeaderComponent, NgClass, LanguageSwitchOfferComponent, SidemenuComponent, RouterOutlet, ConsentManagerComponent, FooterComponent], styles: ["\n\n.menuIsOpen[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.content[_ngcontent-%COMP%] {\n  transition: padding-left 100ms ease-in-out;\n}\n@media only screen and (min-width: 1100px) {\n  .content[_ngcontent-%COMP%] {\n    padding-left: var(--sidemenu-width);\n    padding-top: 0;\n  }\n  .menuIsOpen[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n}\n/*# sourceMappingURL=app.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 18 });
})();

// src/app/utilities/yam-language-loader.ts
var YamlLanguageLoader = class {
  constructor() {
    this.path = "/i18n/";
    this.http = inject(HttpClient);
  }
  getTranslation(lang) {
    return this.http.get(`${this.path}${lang}.yaml`, { responseType: "text" }).pipe(map((data) => parse(data)));
  }
};

// src/app/routes/app.routes.ts
var routes = [
  __spreadValues({
    path: "",
    loadComponent: () => import("./home.component-P3AMKAYA.js").then((m) => m.HomeComponent)
  }, false ? { \u0275entryName: "src/app/routes/home/home.component.ts" } : {}),
  __spreadValues({
    path: ":lang/blog/.",
    loadComponent: () => import("./blog.component-IRDZ46MP.js").then((m) => m.BlogComponent)
  }, false ? { \u0275entryName: "src/app/routes/blog/blog.component.ts" } : {}),
  __spreadValues({
    path: ":lang/blog",
    loadComponent: () => import("./blog.component-IRDZ46MP.js").then((m) => m.BlogComponent)
  }, false ? { \u0275entryName: "src/app/routes/blog/blog.component.ts" } : {}),
  __spreadValues({
    path: ":lang/blog/page/:page/.",
    loadComponent: () => import("./blog.component-IRDZ46MP.js").then((m) => m.BlogComponent)
  }, false ? { \u0275entryName: "src/app/routes/blog/blog.component.ts" } : {}),
  __spreadValues({
    path: ":lang/blog/page/:page",
    loadComponent: () => import("./blog.component-IRDZ46MP.js").then((m) => m.BlogComponent)
  }, false ? { \u0275entryName: "src/app/routes/blog/blog.component.ts" } : {}),
  __spreadValues({
    path: ":lang/projects/page/:page/.:technologies",
    loadComponent: () => import("./home.component-P3AMKAYA.js").then((m) => m.HomeComponent)
  }, false ? { \u0275entryName: "src/app/routes/home/home.component.ts" } : {}),
  __spreadValues({
    path: ":lang/projects/page/:page/:technologies",
    loadComponent: () => import("./home.component-P3AMKAYA.js").then((m) => m.HomeComponent)
  }, false ? { \u0275entryName: "src/app/routes/home/home.component.ts" } : {}),
  __spreadValues({
    path: ":lang/projects/page/:page/.",
    loadComponent: () => import("./home.component-P3AMKAYA.js").then((m) => m.HomeComponent)
  }, false ? { \u0275entryName: "src/app/routes/home/home.component.ts" } : {}),
  __spreadValues({
    path: ":lang/projects/page/:page",
    loadComponent: () => import("./home.component-P3AMKAYA.js").then((m) => m.HomeComponent)
  }, false ? { \u0275entryName: "src/app/routes/home/home.component.ts" } : {}),
  __spreadValues({
    path: ":lang/blogpost/:fileName/.",
    loadComponent: () => import("./blog-post.component-X3W5VVZ3.js").then((m) => m.BlogPostComponent)
  }, false ? { \u0275entryName: "src/app/routes/blog-post/blog-post.component.ts" } : {}),
  __spreadValues({
    path: ":lang/blogpost/:fileName",
    loadComponent: () => import("./blog-post.component-X3W5VVZ3.js").then((m) => m.BlogPostComponent)
  }, false ? { \u0275entryName: "src/app/routes/blog-post/blog-post.component.ts" } : {}),
  __spreadValues({
    path: ":lang/privacy-policy/.",
    loadComponent: () => import("./blog-post.component-X3W5VVZ3.js").then((m) => m.BlogPostComponent),
    data: { fileName: "privacy-policy" }
  }, false ? { \u0275entryName: "src/app/routes/blog-post/blog-post.component.ts" } : {}),
  __spreadValues({
    path: ":lang/privacy-policy",
    loadComponent: () => import("./blog-post.component-X3W5VVZ3.js").then((m) => m.BlogPostComponent),
    data: { fileName: "privacy-policy" }
  }, false ? { \u0275entryName: "src/app/routes/blog-post/blog-post.component.ts" } : {}),
  __spreadValues({
    path: "legal-notice/.",
    loadComponent: () => import("./legal-notice.component-4H55NOJ7.js").then((m) => m.LegalNoticeComponent)
  }, false ? { \u0275entryName: "src/app/routes/legal-notice/legal-notice.component.ts" } : {}),
  __spreadValues({
    path: "legal-notice",
    loadComponent: () => import("./legal-notice.component-4H55NOJ7.js").then((m) => m.LegalNoticeComponent)
  }, false ? { \u0275entryName: "src/app/routes/legal-notice/legal-notice.component.ts" } : {}),
  __spreadValues({
    path: "**",
    loadComponent: () => import("./home.component-P3AMKAYA.js").then((m) => m.HomeComponent)
  }, false ? { \u0275entryName: "src/app/routes/home/home.component.ts" } : {})
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideClientHydration(),
    provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration: "top",
      anchorScrolling: "enabled"
    })),
    importProvidersFrom(TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: () => new YamlLanguageLoader()
      }
    }), BrowserModule, FormsModule, FontAwesomeModule),
    // HighlightService,
    provideHttpClient(withFetch())
  ]
};

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
var __stripTrailingSlash = Location.stripTrailingSlash;
Location.stripTrailingSlash = function _stripTrailingSlash(url) {
  const urlParts = url.match(/([^?#]*)(\?[^#]*)?(#.*)?/);
  const path = urlParts?.[1] || "";
  const query = urlParts?.[2] || "";
  const fragment = urlParts?.[3] || "";
  return /[^\\/]\/$/.test(path) ? path + "." + query + fragment : __stripTrailingSlash(url);
};
//# sourceMappingURL=main.js.map
