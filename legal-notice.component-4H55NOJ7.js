import {
  TranslateModule,
  TranslatePipe,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YQ2WRJ7O.js";

// src/app/routes/legal-notice/legal-notice.component.ts
var LegalNoticeComponent = class _LegalNoticeComponent {
  static {
    this.\u0275fac = function LegalNoticeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LegalNoticeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LegalNoticeComponent, selectors: [["app-legal-notice"]], decls: 14, vars: 3, consts: [[1, "spacingDiv"]], template: function LegalNoticeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "main")(1, "section")(2, "div", 0)(3, "h1");
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, " Rico Angenvoort");
        \u0275\u0275element(8, "br");
        \u0275\u0275text(9, " Pommernstra\xDFe 48");
        \u0275\u0275element(10, "br");
        \u0275\u0275text(11, " 34497 Korbach");
        \u0275\u0275element(12, "br");
        \u0275\u0275text(13, " GERMANY ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "legal_notice"));
      }
    }, dependencies: [TranslateModule, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\nmain[_ngcontent-%COMP%] {\n  padding-top: 5em;\n  margin-bottom: auto;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: clamp(34px, 4vw, 60px);\n}\np[_ngcontent-%COMP%] {\n  font-size: clamp(20px, 2vw, 32px);\n}\n.spacingDiv[_ngcontent-%COMP%] {\n  padding-right: 30vw;\n  min-height: 100vh;\n}\nsection[_ngcontent-%COMP%] {\n  align-items: center;\n}\n/*# sourceMappingURL=legal-notice.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LegalNoticeComponent, { className: "LegalNoticeComponent", filePath: "src/app/routes/legal-notice/legal-notice.component.ts", lineNumber: 10 });
})();
export {
  LegalNoticeComponent
};
//# sourceMappingURL=legal-notice.component-4H55NOJ7.js.map
