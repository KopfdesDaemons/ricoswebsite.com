import {
  DOCUMENT,
  LanguageService,
  isPlatformServer
} from "./chunk-S6YPVKVZ.js";
import {
  BehaviorSubject,
  PLATFORM_ID,
  __async,
  inject,
  ɵɵdefineInjectable
} from "./chunk-YQ2WRJ7O.js";

// src/app/environment/enviroment.ts
var DISQUS_SHORTNAME = "ricoswebsite-com";
var BASE_URL = "https://ricoswebsite.com";

// src/app/services/script.service.ts
var ScriptService = class _ScriptService {
  constructor() {
    this.document = inject(DOCUMENT);
  }
  addJsScript(renderer, src) {
    return new Promise((resolve, reject) => {
      const existingScript = this.document.querySelector(`script[src="${src}"]`);
      if (existingScript) {
        resolve();
        return;
      }
      const script = renderer.createElement("script");
      script.type = "text/javascript";
      script.src = src;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Error loading script: ${src}`));
      renderer.appendChild(this.document.body, script);
    });
  }
  reloadJsScript(renderer, src) {
    return __async(this, null, function* () {
      this.removeJsScript(src);
      yield this.addJsScript(renderer, src);
    });
  }
  removeJsScript(src) {
    const existingScript = this.document.querySelector(`script[src="${src}"]`);
    if (existingScript) {
      existingScript.remove();
    }
  }
  ceckIfJsScriptExist(src) {
    return !!this.document.querySelector(`script[src="${src}"]`);
  }
  static {
    this.\u0275fac = function ScriptService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScriptService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ScriptService, factory: _ScriptService.\u0275fac, providedIn: "root" });
  }
};

// src/app/services/disqus.service.ts
var DisqusService = class _DisqusService {
  constructor() {
    this.scriptS = inject(ScriptService);
    this.languageS = inject(LanguageService);
    this.shortname = "ricoswebsite-com";
  }
  loadDisqus(renderer, title) {
    return __async(this, null, function* () {
      this.disqus = window["DISQUS"];
      const lang = this.languageS.userLanguage;
      if (!this.disqus) {
        window.disqus_config = function() {
          this.page.identifier = title;
          this.language = lang;
        };
        yield this.scriptS.addJsScript(renderer, "https://" + this.shortname + ".disqus.com/embed.js");
      } else {
        window["DISQUS"].reset({
          reload: true,
          config: function() {
            this.page.identifier = title;
            this.language = lang;
          }
        });
      }
    });
  }
  removeDisqus() {
    this.scriptS.removeJsScript("https://" + this.shortname + ".disqus.com/embed.js");
    window["DISQUS"] = void 0;
  }
  static {
    this.\u0275fac = function DisqusService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DisqusService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DisqusService, factory: _DisqusService.\u0275fac, providedIn: "root" });
  }
};

// src/app/services/consent.service.ts
var ConsentService = class _ConsentService {
  constructor() {
    this.platformId = inject(PLATFORM_ID);
    this.scriptS = inject(ScriptService);
    this.disqusS = inject(DisqusService);
    this.consentMangerIsVisible = new BehaviorSubject(false);
    this.possibleConsents = [
      {
        name: "Disqus",
        domains: ["disqus.com"],
        descriptionTransString: "disqus_descr"
      },
      {
        name: "CodePen",
        domains: ["codepen.io", "cdpn.io"],
        descriptionTransString: "codepen_descr"
      },
      {
        name: "Custom Language",
        domains: [],
        descriptionTransString: "custom_language"
      }
    ];
  }
  giveConsent(serviceName) {
    if (isPlatformServer(this.platformId))
      return;
    localStorage.setItem(serviceName, "");
  }
  checkConsent(serviceName) {
    if (isPlatformServer(this.platformId))
      return false;
    return localStorage.getItem(serviceName) != null;
  }
  revokeConsent(serviceName) {
    if (isPlatformServer(this.platformId))
      return;
    localStorage.removeItem(serviceName);
    const consent = this.possibleConsents.find((c) => c.name === serviceName);
    if (consent && consent.domains) {
      consent.domains.forEach((domain) => {
        this.deleteCookiesForDomain(domain);
      });
    }
    if (serviceName === "Disqus") {
      this.scriptS.removeJsScript("https://" + DISQUS_SHORTNAME + ".disqus.com/embed.js");
      window["DISQUS"] = void 0;
      this.disqusS.removeDisqus();
    }
  }
  deleteCookiesForDomain(domain) {
    const cookies = document.cookie.split(";");
    cookies.forEach((cookie) => {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
      document.cookie = name + `=; domain=${domain}; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    });
  }
  openConsentmanager() {
    this.consentMangerIsVisible.next(true);
  }
  closeConsentmanager() {
    this.consentMangerIsVisible.next(false);
  }
  static {
    this.\u0275fac = function ConsentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConsentService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConsentService, factory: _ConsentService.\u0275fac, providedIn: "root" });
  }
};

export {
  BASE_URL,
  ScriptService,
  DisqusService,
  ConsentService
};
//# sourceMappingURL=chunk-UNCXCIG4.js.map
