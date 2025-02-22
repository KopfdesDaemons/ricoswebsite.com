import {
  FormsModule,
  NgSelectOption,
  ɵNgSelectMultipleOption
} from "./chunk-7JADWIHW.js";
import {
  PostService
} from "./chunk-ZUMQFM6H.js";
import "./chunk-QTWOLS27.js";
import {
  ActivatedRoute,
  HttpErrorResponse,
  LanguageService,
  Meta,
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
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YQ2WRJ7O.js";

// src/app/components/blogpost-card/blogpost-card.component.ts
var _c0 = (a0) => [a0];
function BlogpostCardComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 1);
    \u0275\u0275element(1, "img", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c0, "/" + ctx_r0.languageS.userLanguage + "/blogpost/" + ctx_r0.postMeta().fileName + "/."));
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("src", ctx_r0.postMeta().image, \u0275\u0275sanitizeUrl);
    \u0275\u0275propertyInterpolate("alt", ctx_r0.postMeta().title);
  }
}
function BlogpostCardComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.postMeta().localDateString);
  }
}
function BlogpostCardComponent_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const keyword_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(keyword_r2);
  }
}
function BlogpostCardComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 5);
    \u0275\u0275repeaterCreate(1, BlogpostCardComponent_Conditional_9_For_2_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.postMeta().keywords);
  }
}
var BlogpostCardComponent = class _BlogpostCardComponent {
  constructor() {
    this.languageS = inject(LanguageService);
    this.postMeta = input.required();
  }
  static {
    this.\u0275fac = function BlogpostCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BlogpostCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogpostCardComponent, selectors: [["app-blogpost-card"]], inputs: { postMeta: [1, "postMeta"] }, decls: 13, vars: 14, consts: [[1, "card"], [1, "imageContainer", 3, "routerLink"], [1, "content"], [1, "titleLink", 3, "routerLink"], [1, "date"], [1, "keywords"], [1, "readMore", 3, "routerLink"], [3, "src", "alt"]], template: function BlogpostCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, BlogpostCardComponent_Conditional_1_Template, 2, 5, "a", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "a", 3)(4, "h2");
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, BlogpostCardComponent_Conditional_6_Template, 2, 1, "span", 4);
        \u0275\u0275elementStart(7, "p");
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, BlogpostCardComponent_Conditional_9_Template, 3, 0, "ul", 5);
        \u0275\u0275elementStart(10, "a", 6);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.postMeta().image ? 1 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, "/" + ctx.languageS.userLanguage + "/blogpost/" + ctx.postMeta().fileName + "/."));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.postMeta().title);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.postMeta().date ? 6 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.postMeta().description);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.postMeta().keywords ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c0, "/" + ctx.languageS.userLanguage + "/blogpost/" + ctx.postMeta().fileName));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 8, "read_more"));
      }
    }, dependencies: [RouterLink, TranslateModule, TranslatePipe], styles: ["\n\n.card[_ngcontent-%COMP%] {\n  background-color: rgb(41, 43, 70);\n  border-radius: 12px;\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 60em;\n  box-shadow: 1px 1px 10px 1px #010147;\n  animation: _ngcontent-%COMP%_moveIn 500ms forwards ease-out;\n  border: 1px solid;\n  padding: clamp(1em, 2vw, 2em);\n  gap: 1em;\n}\n@keyframes _ngcontent-%COMP%_moveIn {\n  from {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n}\n.card[_ngcontent-%COMP%]   .imageContainer[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1 0 50%;\n  height: auto;\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n}\n.card[_ngcontent-%COMP%]   .imageContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  aspect-ratio: 16/9;\n  object-fit: contain;\n  border-radius: 12px;\n  filter: brightness(0.95);\n}\n.card[_ngcontent-%COMP%]   .imageContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  filter: brightness(0.9);\n}\n.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  flex: 1 0 45%;\n  min-width: 19em;\n  box-sizing: border-box;\n  text-wrap: pretty;\n}\n@media only screen and (max-width: 800px) {\n  .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    min-width: 0;\n    flex-basis: 100%;\n  }\n}\n.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited:hover {\n  color: #373796;\n  transition: all 200ms;\n}\n.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited {\n  color: var(--font-color);\n}\n.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .titleLink[_ngcontent-%COMP%], \n.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .titleLink[_ngcontent-%COMP%]:visited {\n  color: rgb(97, 97, 255);\n  text-decoration: none;\n}\n.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .titleLink[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .titleLink[_ngcontent-%COMP%]:visited   h2[_ngcontent-%COMP%] {\n  font-size: clamp(24px, 3vw, 28px);\n  margin: 0 0 0.2em 0;\n  width: 100%;\n}\n.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n}\n.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.3em;\n}\n.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .keywords[_ngcontent-%COMP%] {\n  padding: 0;\n  display: inline-flex;\n  flex-wrap: wrap;\n  gap: 0.4em;\n  font-size: 0.7em;\n  margin-top: auto;\n}\n.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .keywords[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  background-color: rgb(133, 162, 172);\n  border-radius: 8px;\n  color: rgb(0, 0, 0);\n  padding: 0.7em;\n}\n.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .readMore[_ngcontent-%COMP%] {\n  float: right;\n  margin-top: 1em;\n}\n/*# sourceMappingURL=blogpost-card.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogpostCardComponent, { className: "BlogpostCardComponent", filePath: "src/app/components/blogpost-card/blogpost-card.component.ts", lineNumber: 13 });
})();

// src/app/routes/blog/blog.component.ts
var _c02 = () => [];
var _c1 = (a0) => [a0];
function BlogComponent_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "app-blogpost-card", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const post_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("postMeta", post_r1.postMeta);
  }
}
function BlogComponent_Conditional_22_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_39_r2 = \u0275\u0275nextContext().$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c1, "/" + ctx_r2.languageS.userLanguage + "/blog/page/" + (\u0275$index_39_r2 + 1)) + "/.");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275$index_39_r2 + 1);
  }
}
function BlogComponent_Conditional_22_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_39_r2 = \u0275\u0275nextContext().$index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275$index_39_r2 + 1);
  }
}
function BlogComponent_Conditional_22_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275template(1, BlogComponent_Conditional_22_For_2_Conditional_1_Template, 2, 4, "a", 9)(2, BlogComponent_Conditional_22_For_2_Conditional_2_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_39_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.currentPage != \u0275$index_39_r2 + 1 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.currentPage === \u0275$index_39_r2 + 1 ? 2 : -1);
  }
}
function BlogComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 7);
    \u0275\u0275repeaterCreate(1, BlogComponent_Conditional_22_For_2_Template, 3, 2, "li", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c02).constructor(ctx_r2.totalPages));
  }
}
var BlogComponent = class _BlogComponent {
  constructor() {
    this.postS = inject(PostService);
    this.languageS = inject(LanguageService);
    this.route = inject(ActivatedRoute);
    this.title = inject(Title);
    this.meta = inject(Meta);
    this.translate = inject(TranslateService);
    this.postsList = [];
    this.currentPage = 1;
    this.pageSize = 5;
    this.sortOrder = "desc";
    this.sortBy = "date";
    this.totalPages = 1;
  }
  ngOnInit() {
    this.routeParamsSubscription = this.route.params.subscribe(() => __async(this, null, function* () {
      const page = this.route.snapshot.paramMap.get("page");
      if (page)
        this.currentPage = Number(page);
      yield this.loadPostsList();
      yield this.setMetaTags();
    }));
  }
  ngOnDestroy() {
    if (this.routeParamsSubscription) {
      this.routeParamsSubscription.unsubscribe();
    }
  }
  setMetaTags() {
    return __async(this, null, function* () {
      const title = yield lastValueFrom(this.translate.get("blog_h1"));
      this.title.setTitle(title);
      this.meta.addTag({ name: "description", content: title });
    });
  }
  loadPostsList() {
    return __async(this, null, function* () {
      try {
        const { posts, totalPages } = yield this.postS.loadPostList(this.languageS.userLanguage, this.currentPage, this.pageSize, this.sortOrder, this.sortBy);
        this.postsList = posts;
        this.totalPages = totalPages;
      } catch (error) {
        console.error(error);
        if (error instanceof HttpErrorResponse) {
          if (error.status === 404 && this.languageS.userLanguage !== "en") {
            yield this.postS.loadPostList("en", this.currentPage, this.pageSize, this.sortOrder, this.sortBy);
          }
        }
      }
    });
  }
  sort(event) {
    return __async(this, null, function* () {
      const [sortBy, sortOrder] = event.target.value.split(" ");
      this.sortBy = sortBy;
      this.sortOrder = sortOrder;
      yield this.loadPostsList();
    });
  }
  static {
    this.\u0275fac = function BlogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BlogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogComponent, selectors: [["app-blog"]], decls: 23, vars: 16, consts: [[1, "options"], [3, "change"], ["value", "date desc"], ["value", "date asc"], ["value", "title asc"], ["value", "title desc"], [1, "feed"], [1, "pagination"], [3, "postMeta"], [3, "routerLink"]], template: function BlogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "main")(1, "section")(2, "h1");
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 0)(6, "select", 1);
        \u0275\u0275listener("change", function BlogComponent_Template_select_change_6_listener($event) {
          return ctx.sort($event);
        });
        \u0275\u0275elementStart(7, "option", 2);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "option", 3);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "option", 4);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "option", 5);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "ul", 6);
        \u0275\u0275repeaterCreate(20, BlogComponent_For_21_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275template(22, BlogComponent_Conditional_22_Template, 3, 1, "ul", 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, "blog_h1"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 8, "date_desc"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 10, "date_asc"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 12, "title_asc"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 14, "title_desc"));
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.postsList);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.totalPages > 1 ? 22 : -1);
      }
    }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, BlogpostCardComponent, RouterLink, TranslateModule, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\nmain[_ngcontent-%COMP%] {\n  margin-bottom: auto;\n  padding: 3em 0 5em 0;\n  background: var(--gradient);\n}\nsection[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 6vw;\n  max-width: 80em;\n  margin: 0 auto;\n  width: 100%;\n  box-sizing: border-box;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: clamp(34px, 4vw, 60px);\n}\n.options[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n}\n.options[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0.5em;\n  border: 2px solid lightgrey;\n  border-radius: 0.5rem;\n  color: black;\n  background-color: white;\n  min-width: 5em;\n}\n.feed[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2em;\n  padding: 0;\n}\n.feed[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5em;\n  padding: 0;\n  font-size: 1.3em;\n}\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0.5em;\n}\n/*# sourceMappingURL=blog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogComponent, { className: "BlogComponent", filePath: "src/app/routes/blog/blog.component.ts", lineNumber: 19 });
})();
export {
  BlogComponent
};
//# sourceMappingURL=blog.component-KUEJKQR6.js.map
