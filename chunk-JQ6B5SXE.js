import{m as se}from"./chunk-YF5PBYPB.js";import{Jb as ne,La as Jt,Nb as ae,Ob as ie,Rb as re,V as ut,W as Kt,Ya as dt,Za as Zt,_ as z,_a as te,a as Xt,b as qt,dc as mt,ec as oe,hc as J,ja as Qt,jc as y,ub as ee}from"./chunk-SRQQ6BZJ.js";function wn(t,e,n){return(e=In(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function le(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?le(Object(n),!0).forEach(function(a){wn(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):le(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Cn(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function In(t){var e=Cn(t,"string");return typeof e=="symbol"?e:e+""}var ce=()=>{},_t={},ze={},_e=null,Le={mark:ce,measure:ce};try{typeof window<"u"&&(_t=window),typeof document<"u"&&(ze=document),typeof MutationObserver<"u"&&(_e=MutationObserver),typeof performance<"u"&&(Le=performance)}catch{}var{userAgent:fe=""}=_t.navigator||{},N=_t,h=ze,ue=_e,Z=Le,_i=!!N.document,E=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",Re=~fe.indexOf("MSIE")||~fe.indexOf("Trident/"),Sn=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Pn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,je={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},En={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},We=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],g="classic",rt="duotone",On="sharp",Fn="sharp-duotone",He=[g,rt,On,Fn],Nn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Tn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Mn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Dn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},zn=["fak","fa-kit","fakd","fa-kit-duotone"],de={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},_n=["kit"],Ln={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Rn=["fak","fakd"],jn={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},me={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},tt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Wn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Hn=["fak","fa-kit","fakd","fa-kit-duotone"],Yn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Un={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},$n={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},vt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Bn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],xt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Wn,...Bn],Vn=["solid","regular","light","thin","duotone","brands"],Ye=[1,2,3,4,5,6,7,8,9,10],Gn=Ye.concat([11,12,13,14,15,16,17,18,19,20]),Xn=[...Object.keys($n),...Vn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",tt.GROUP,tt.SWAP_OPACITY,tt.PRIMARY,tt.SECONDARY].concat(Ye.map(t=>"".concat(t,"x"))).concat(Gn.map(t=>"w-".concat(t))),qn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},S="___FONT_AWESOME___",At=16,Ue="fa",$e="svg-inline--fa",L="data-fa-i2svg",kt="data-fa-pseudo-element",Kn="data-fa-pseudo-element-pending",Lt="data-prefix",Rt="data-icon",pe="fontawesome-i2svg",Qn="async",Jn=["HTML","HEAD","STYLE","SCRIPT"],Be=(()=>{try{return!0}catch{return!1}})();function K(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[g]}})}var Ve=s({},je);Ve[g]=s(s(s(s({},{"fa-duotone":"duotone"}),je[g]),de.kit),de["kit-duotone"]);var Zn=K(Ve),wt=s({},Dn);wt[g]=s(s(s(s({},{duotone:"fad"}),wt[g]),me.kit),me["kit-duotone"]);var he=K(wt),Ct=s({},vt);Ct[g]=s(s({},Ct[g]),jn.kit);var jt=K(Ct),It=s({},Un);It[g]=s(s({},It[g]),Ln.kit);var Li=K(It),ta=Sn,Ge="fa-layers-text",ea=Pn,na=s({},Nn),Ri=K(na),aa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],pt=En,ia=[..._n,...Xn],V=N.FontAwesomeConfig||{};function ra(t){var e=h.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function oa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}h&&typeof h.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e,i=oa(ra(n));i!=null&&(V[a]=i)});var Xe={styleDefault:"solid",familyDefault:g,cssPrefix:Ue,replacementClass:$e,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};V.familyPrefix&&(V.cssPrefix=V.familyPrefix);var U=s(s({},Xe),V);U.autoReplaceSvg||(U.observeMutations=!1);var c={};Object.keys(Xe).forEach(t=>{Object.defineProperty(c,t,{enumerable:!0,set:function(e){U[t]=e,G.forEach(n=>n(c))},get:function(){return U[t]}})});Object.defineProperty(c,"familyPrefix",{enumerable:!0,set:function(t){U.cssPrefix=t,G.forEach(e=>e(c))},get:function(){return U.cssPrefix}});N.FontAwesomeConfig=c;var G=[];function sa(t){return G.push(t),()=>{G.splice(G.indexOf(t),1)}}var F=At,w={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function la(t){if(!t||!E)return;let e=h.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;let n=h.head.childNodes,a=null;for(let i=n.length-1;i>-1;i--){let r=n[i],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=r)}return h.head.insertBefore(e,a),t}var ca="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function X(){let t=12,e="";for(;t-- >0;)e+=ca[Math.random()*62|0];return e}function $(t){let e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Wt(t){return t.classList?$(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function qe(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function fa(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(qe(t[n]),'" '),"").trim()}function ot(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Ht(t){return t.size!==w.size||t.x!==w.x||t.y!==w.y||t.rotate!==w.rotate||t.flipX||t.flipY}function ua(t){let{transform:e,containerWidth:n,iconWidth:a}=t,i={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(r," ").concat(o," ").concat(l)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:i,inner:u,path:f}}function da(t){let{transform:e,width:n=At,height:a=At,startCentered:i=!1}=t,r="";return i&&Re?r+="translate(".concat(e.x/F-n/2,"em, ").concat(e.y/F-a/2,"em) "):i?r+="translate(calc(-50% + ".concat(e.x/F,"em), calc(-50% + ").concat(e.y/F,"em)) "):r+="translate(".concat(e.x/F,"em, ").concat(e.y/F,"em) "),r+="scale(".concat(e.size/F*(e.flipX?-1:1),", ").concat(e.size/F*(e.flipY?-1:1),") "),r+="rotate(".concat(e.rotate,"deg) "),r}var ma=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Ke(){let t=Ue,e=$e,n=c.cssPrefix,a=c.replacementClass,i=ma;if(n!==t||a!==e){let r=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");i=i.replace(r,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(a))}return i}var ge=!1;function ht(){c.autoAddCss&&!ge&&(la(Ke()),ge=!0)}var pa={mixout(){return{dom:{css:Ke,insertCss:ht}}},hooks(){return{beforeDOMElementCreation(){ht()},beforeI2svg(){ht()}}}},P=N||{};P[S]||(P[S]={});P[S].styles||(P[S].styles={});P[S].hooks||(P[S].hooks={});P[S].shims||(P[S].shims=[]);var C=P[S],Qe=[],Je=function(){h.removeEventListener("DOMContentLoaded",Je),at=1,Qe.map(t=>t())},at=!1;E&&(at=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),at||h.addEventListener("DOMContentLoaded",Je));function ha(t){E&&(at?setTimeout(t,0):Qe.push(t))}function Q(t){let{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?qe(t):"<".concat(e," ").concat(fa(n),">").concat(a.map(Q).join(""),"</").concat(e,">")}function ye(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var ga=function(e,n){return function(a,i,r,o){return e.call(n,a,i,r,o)}},gt=function(e,n,a,i){var r=Object.keys(e),o=r.length,l=i!==void 0?ga(n,i):n,u,f,d;for(a===void 0?(u=1,d=e[r[0]]):(u=0,d=a);u<o;u++)f=r[u],d=l(d,e[f],f,e);return d};function ya(t){let e=[],n=0,a=t.length;for(;n<a;){let i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<a){let r=t.charCodeAt(n++);(r&64512)==56320?e.push(((i&1023)<<10)+(r&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function St(t){let e=ya(t);return e.length===1?e[0].toString(16):null}function ba(t,e){let n=t.length,a=t.charCodeAt(e),i;return a>=55296&&a<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(a-55296)*1024+i-56320+65536:a}function be(t){return Object.keys(t).reduce((e,n)=>{let a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Pt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:a=!1}=n,i=be(e);typeof C.hooks.addPack=="function"&&!a?C.hooks.addPack(t,be(e)):C.styles[t]=s(s({},C.styles[t]||{}),i),t==="fas"&&Pt("fa",e)}var{styles:q,shims:va}=C,Ze=Object.keys(jt),xa=Ze.reduce((t,e)=>(t[e]=Object.keys(jt[e]),t),{}),Yt=null,tn={},en={},nn={},an={},rn={};function Aa(t){return~ia.indexOf(t)}function ka(t,e){let n=e.split("-"),a=n[0],i=n.slice(1).join("-");return a===t&&i!==""&&!Aa(i)?i:null}var on=()=>{let t=a=>gt(q,(i,r,o)=>(i[o]=gt(r,a,{}),i),{});tn=t((a,i,r)=>(i[3]&&(a[i[3]]=r),i[2]&&i[2].filter(l=>typeof l=="number").forEach(l=>{a[l.toString(16)]=r}),a)),en=t((a,i,r)=>(a[r]=r,i[2]&&i[2].filter(l=>typeof l=="string").forEach(l=>{a[l]=r}),a)),rn=t((a,i,r)=>{let o=i[2];return a[r]=r,o.forEach(l=>{a[l]=r}),a});let e="far"in q||c.autoFetchSvg,n=gt(va,(a,i)=>{let r=i[0],o=i[1],l=i[2];return o==="far"&&!e&&(o="fas"),typeof r=="string"&&(a.names[r]={prefix:o,iconName:l}),typeof r=="number"&&(a.unicodes[r.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});nn=n.names,an=n.unicodes,Yt=st(c.styleDefault,{family:c.familyDefault})};sa(t=>{Yt=st(t.styleDefault,{family:c.familyDefault})});on();function Ut(t,e){return(tn[t]||{})[e]}function wa(t,e){return(en[t]||{})[e]}function _(t,e){return(rn[t]||{})[e]}function sn(t){return nn[t]||{prefix:null,iconName:null}}function Ca(t){let e=an[t],n=Ut("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function T(){return Yt}var ln=()=>({prefix:null,iconName:null,rest:[]});function Ia(t){let e=g,n=Ze.reduce((a,i)=>(a[i]="".concat(c.cssPrefix,"-").concat(i),a),{});return He.forEach(a=>{(t.includes(n[a])||t.some(i=>xa[a].includes(i)))&&(e=a)}),e}function st(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:n=g}=e,a=Zn[n][t];if(n===rt&&!t)return"fad";let i=he[n][t]||he[n][a],r=t in C.styles?t:null;return i||r||null}function Sa(t){let e=[],n=null;return t.forEach(a=>{let i=ka(c.cssPrefix,a);i?n=i:a&&e.push(a)}),{iconName:n,rest:e}}function ve(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function lt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:n=!1}=e,a=null,i=xt.concat(Hn),r=ve(t.filter(p=>i.includes(p))),o=ve(t.filter(p=>!xt.includes(p))),l=r.filter(p=>(a=p,!We.includes(p))),[u=null]=l,f=Ia(r),d=s(s({},Sa(o)),{},{prefix:st(u,{family:f})});return s(s(s({},d),Fa({values:t,family:f,styles:q,config:c,canonical:d,givenPrefix:a})),Pa(n,a,d))}function Pa(t,e,n){let{prefix:a,iconName:i}=n;if(t||!a||!i)return{prefix:a,iconName:i};let r=e==="fa"?sn(i):{},o=_(a,i);return i=r.iconName||o||i,a=r.prefix||a,a==="far"&&!q.far&&q.fas&&!c.autoFetchSvg&&(a="fas"),{prefix:a,iconName:i}}var Ea=He.filter(t=>t!==g||t!==rt),Oa=Object.keys(vt).filter(t=>t!==g).map(t=>Object.keys(vt[t])).flat();function Fa(t){let{values:e,family:n,canonical:a,givenPrefix:i="",styles:r={},config:o={}}=t,l=n===rt,u=e.includes("fa-duotone")||e.includes("fad"),f=o.familyDefault==="duotone",d=a.prefix==="fad"||a.prefix==="fa-duotone";if(!l&&(u||f||d)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Ea.includes(n)&&(Object.keys(r).find(m=>Oa.includes(m))||o.autoFetchSvg)){let m=Mn.get(n).defaultShortPrefixId;a.prefix=m,a.iconName=_(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||i==="fa")&&(a.prefix=T()||"fas"),a}var Et=class{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];let i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(r=>{this.definitions[r]=s(s({},this.definitions[r]||{}),i[r]),Pt(r,i[r]);let o=jt[g][r];o&&Pt(o,i[r]),on()})}reset(){this.definitions={}}_pullDefinitions(e,n){let a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(i=>{let{prefix:r,iconName:o,icon:l}=a[i],u=l[2];e[r]||(e[r]={}),u.length>0&&u.forEach(f=>{typeof f=="string"&&(e[r][f]=l)}),e[r][o]=l}),e}},xe=[],H={},Y={},Na=Object.keys(Y);function Ta(t,e){let{mixoutsTo:n}=e;return xe=t,H={},Object.keys(Y).forEach(a=>{Na.indexOf(a)===-1&&delete Y[a]}),xe.forEach(a=>{let i=a.mixout?a.mixout():{};if(Object.keys(i).forEach(r=>{typeof i[r]=="function"&&(n[r]=i[r]),typeof i[r]=="object"&&Object.keys(i[r]).forEach(o=>{n[r]||(n[r]={}),n[r][o]=i[r][o]})}),a.hooks){let r=a.hooks();Object.keys(r).forEach(o=>{H[o]||(H[o]=[]),H[o].push(r[o])})}a.provides&&a.provides(Y)}),n}function Ot(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),i=2;i<n;i++)a[i-2]=arguments[i];return(H[t]||[]).forEach(o=>{e=o.apply(null,[e,...a])}),e}function R(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(H[t]||[]).forEach(r=>{r.apply(null,n)})}function M(){let t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Y[t]?Y[t].apply(null,e):void 0}function Ft(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t,n=t.prefix||T();if(e)return e=_(n,e)||e,ye(cn.definitions,n,e)||ye(C.styles,n,e)}var cn=new Et,Ma=()=>{c.autoReplaceSvg=!1,c.observeMutations=!1,R("noAuto")},Da={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return E?(R("beforeI2svg",t),M("pseudoElements2svg",t),M("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e}=t;c.autoReplaceSvg===!1&&(c.autoReplaceSvg=!0),c.observeMutations=!0,ha(()=>{_a({autoReplaceSvgRoot:e}),R("watch",t)})}},za={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:_(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){let e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=st(t[0]);return{prefix:n,iconName:_(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(c.cssPrefix,"-"))>-1||t.match(ta))){let e=lt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||T(),iconName:_(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){let e=T();return{prefix:e,iconName:_(e,t)||t}}}},x={noAuto:Ma,config:c,dom:Da,parse:za,library:cn,findIconDefinition:Ft,toHtml:Q},_a=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e=h}=t;(Object.keys(C.styles).length>0||c.autoFetchSvg)&&E&&c.autoReplaceSvg&&x.dom.i2svg({node:e})};function ct(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Q(n))}}),Object.defineProperty(t,"node",{get:function(){if(!E)return;let n=h.createElement("div");return n.innerHTML=t.html,n.children}}),t}function La(t){let{children:e,main:n,mask:a,attributes:i,styles:r,transform:o}=t;if(Ht(o)&&n.found&&!a.found){let{width:l,height:u}=n,f={x:l/u/2,y:.5};i.style=ot(s(s({},r),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function Ra(t){let{prefix:e,iconName:n,children:a,attributes:i,symbol:r}=t,o=r===!0?"".concat(e,"-").concat(c.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:s(s({},i),{},{id:o}),children:a}]}]}function $t(t){let{icons:{main:e,mask:n},prefix:a,iconName:i,transform:r,symbol:o,title:l,maskId:u,titleId:f,extra:d,watchable:p=!1}=t,{width:m,height:b}=n.found?n:e,O=Rn.includes(a),D=[c.replacementClass,i?"".concat(c.cssPrefix,"-").concat(i):""].filter(W=>d.classes.indexOf(W)===-1).filter(W=>W!==""||!!W).concat(d.classes).join(" "),A={children:[],attributes:s(s({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:D,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(b)})},I=O&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/b*16*.0625,"em")}:{};p&&(A.attributes[L]=""),l&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(f||X())},children:[l]}),delete A.attributes.title);let v=s(s({},A),{},{prefix:a,iconName:i,main:e,mask:n,maskId:u,transform:r,symbol:o,styles:s(s({},I),d.styles)}),{children:k,attributes:j}=n.found&&e.found?M("generateAbstractMask",v)||{children:[],attributes:{}}:M("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=k,v.attributes=j,o?Ra(v):La(v)}function Ae(t){let{content:e,width:n,height:a,transform:i,title:r,extra:o,watchable:l=!1}=t,u=s(s(s({},o.attributes),r?{title:r}:{}),{},{class:o.classes.join(" ")});l&&(u[L]="");let f=s({},o.styles);Ht(i)&&(f.transform=da({transform:i,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);let d=ot(f);d.length>0&&(u.style=d);let p=[];return p.push({tag:"span",attributes:u,children:[e]}),r&&p.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),p}function ja(t){let{content:e,title:n,extra:a}=t,i=s(s(s({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),r=ot(a.styles);r.length>0&&(i.style=r);let o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var{styles:yt}=C;function Nt(t){let e=t[0],n=t[1],[a]=t.slice(4),i=null;return Array.isArray(a)?i={tag:"g",attributes:{class:"".concat(c.cssPrefix,"-").concat(pt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(pt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(pt.PRIMARY),fill:"currentColor",d:a[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:i}}var Wa={found:!1,width:512,height:512};function Ha(t,e){!Be&&!c.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Tt(t,e){let n=e;return e==="fa"&&c.styleDefault!==null&&(e=T()),new Promise((a,i)=>{if(n==="fa"){let r=sn(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&yt[e]&&yt[e][t]){let r=yt[e][t];return a(Nt(r))}Ha(t,e),a(s(s({},Wa),{},{icon:c.showMissingIcons&&t?M("missingIconAbstract")||{}:{}}))})}var ke=()=>{},Mt=c.measurePerformance&&Z&&Z.mark&&Z.measure?Z:{mark:ke,measure:ke},B='FA "6.7.2"',Ya=t=>(Mt.mark("".concat(B," ").concat(t," begins")),()=>fn(t)),fn=t=>{Mt.mark("".concat(B," ").concat(t," ends")),Mt.measure("".concat(B," ").concat(t),"".concat(B," ").concat(t," begins"),"".concat(B," ").concat(t," ends"))},Bt={begin:Ya,end:fn},et=()=>{};function we(t){return typeof(t.getAttribute?t.getAttribute(L):null)=="string"}function Ua(t){let e=t.getAttribute?t.getAttribute(Lt):null,n=t.getAttribute?t.getAttribute(Rt):null;return e&&n}function $a(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(c.replacementClass)}function Ba(){return c.autoReplaceSvg===!0?nt.replace:nt[c.autoReplaceSvg]||nt.replace}function Va(t){return h.createElementNS("http://www.w3.org/2000/svg",t)}function Ga(t){return h.createElement(t)}function un(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:n=t.tag==="svg"?Va:Ga}=e;if(typeof t=="string")return h.createTextNode(t);let a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(r){a.setAttribute(r,t.attributes[r])}),(t.children||[]).forEach(function(r){a.appendChild(un(r,{ceFn:n}))}),a}function Xa(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var nt={replace:function(t){let e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(un(n),e)}),e.getAttribute(L)===null&&c.keepOriginalSource){let n=h.createComment(Xa(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){let e=t[0],n=t[1];if(~Wt(e).indexOf(c.replacementClass))return nt.replace(t);let a=new RegExp("".concat(c.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){let r=n[0].attributes.class.split(" ").reduce((o,l)=>(l===c.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",r.toNode.join(" "))}let i=n.map(r=>Q(r)).join(`
`);e.setAttribute(L,""),e.innerHTML=i}};function Ce(t){t()}function dn(t,e){let n=typeof e=="function"?e:et;if(t.length===0)n();else{let a=Ce;c.mutateApproach===Qn&&(a=N.requestAnimationFrame||Ce),a(()=>{let i=Ba(),r=Bt.begin("mutate");t.map(i),r(),n()})}}var Vt=!1;function mn(){Vt=!0}function Dt(){Vt=!1}var it=null;function Ie(t){if(!ue||!c.observeMutations)return;let{treeCallback:e=et,nodeCallback:n=et,pseudoElementsCallback:a=et,observeMutationsRoot:i=h}=t;it=new ue(r=>{if(Vt)return;let o=T();$(r).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!we(l.addedNodes[0])&&(c.searchPseudoElements&&a(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&c.searchPseudoElements&&a(l.target.parentNode),l.type==="attributes"&&we(l.target)&&~aa.indexOf(l.attributeName))if(l.attributeName==="class"&&Ua(l.target)){let{prefix:u,iconName:f}=lt(Wt(l.target));l.target.setAttribute(Lt,u||o),f&&l.target.setAttribute(Rt,f)}else $a(l.target)&&n(l.target)})}),E&&it.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function qa(){it&&it.disconnect()}function Ka(t){let e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce((a,i)=>{let r=i.split(":"),o=r[0],l=r.slice(1);return o&&l.length>0&&(a[o]=l.join(":").trim()),a},{})),n}function Qa(t){let e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",i=lt(Wt(t));return i.prefix||(i.prefix=T()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&a.length>0&&(i.iconName=wa(i.prefix,t.innerText)||Ut(i.prefix,St(t.innerText))),!i.iconName&&c.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function Ja(t){let e=$(t.attributes).reduce((i,r)=>(i.name!=="class"&&i.name!=="style"&&(i[r.name]=r.value),i),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return c.autoA11y&&(n?e["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(a||X()):(e["aria-hidden"]="true",e.focusable="false")),e}function Za(){return{iconName:null,title:null,titleId:null,prefix:null,transform:w,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Se(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:n,prefix:a,rest:i}=Qa(t),r=Ja(t),o=Ot("parseNodeAttributes",{},t),l=e.styleParser?Ka(t):[];return s({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:w,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:r}},o)}var{styles:ti}=C;function pn(t){let e=c.autoReplaceSvg==="nest"?Se(t,{styleParser:!1}):Se(t);return~e.extra.classes.indexOf(Ge)?M("generateLayersText",t,e):M("generateSvgReplacementMutation",t,e)}function ei(){return[...zn,...xt]}function Pe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!E)return Promise.resolve();let n=h.documentElement.classList,a=d=>n.add("".concat(pe,"-").concat(d)),i=d=>n.remove("".concat(pe,"-").concat(d)),r=c.autoFetchSvg?ei():We.concat(Object.keys(ti));r.includes("fa")||r.push("fa");let o=[".".concat(Ge,":not([").concat(L,"])")].concat(r.map(d=>".".concat(d,":not([").concat(L,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=$(t.querySelectorAll(o))}catch{}if(l.length>0)a("pending"),i("complete");else return Promise.resolve();let u=Bt.begin("onTree"),f=l.reduce((d,p)=>{try{let m=pn(p);m&&d.push(m)}catch(m){Be||m.name==="MissingIcon"&&console.error(m)}return d},[]);return new Promise((d,p)=>{Promise.all(f).then(m=>{dn(m,()=>{a("active"),a("complete"),i("pending"),typeof e=="function"&&e(),u(),d()})}).catch(m=>{u(),p(m)})})}function ni(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;pn(t).then(n=>{n&&dn([n],e)})}function ai(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:Ft(e||{}),{mask:i}=n;return i&&(i=(i||{}).icon?i:Ft(i||{})),t(a,s(s({},n),{},{mask:i}))}}var ii=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=w,symbol:a=!1,mask:i=null,maskId:r=null,title:o=null,titleId:l=null,classes:u=[],attributes:f={},styles:d={}}=e;if(!t)return;let{prefix:p,iconName:m,icon:b}=t;return ct(s({type:"icon"},t),()=>(R("beforeDOMElementCreation",{iconDefinition:t,params:e}),c.autoA11y&&(o?f["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(l||X()):(f["aria-hidden"]="true",f.focusable="false")),$t({icons:{main:Nt(b),mask:i?Nt(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:s(s({},w),n),symbol:a,title:o,maskId:r,titleId:l,extra:{attributes:f,styles:d,classes:u}})))},ri={mixout(){return{icon:ai(ii)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Pe,t.nodeCallback=ni,t}}},provides(t){t.i2svg=function(e){let{node:n=h,callback:a=()=>{}}=e;return Pe(n,a)},t.generateSvgReplacementMutation=function(e,n){let{iconName:a,title:i,titleId:r,prefix:o,transform:l,symbol:u,mask:f,maskId:d,extra:p}=n;return new Promise((m,b)=>{Promise.all([Tt(a,o),f.iconName?Tt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(O=>{let[D,A]=O;m([e,$t({icons:{main:D,mask:A},prefix:o,iconName:a,transform:l,symbol:u,maskId:d,title:i,titleId:r,extra:p,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:i,transform:r,styles:o}=e,l=ot(o);l.length>0&&(a.style=l);let u;return Ht(r)&&(u=M("generateAbstractTransformGrouping",{main:i,transform:r,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:a}}}},oi={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:n=[]}=e;return ct({type:"layer"},()=>{R("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(i=>{Array.isArray(i)?i.map(r=>{a=a.concat(r.abstract)}):a=a.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(c.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},si={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:n=null,classes:a=[],attributes:i={},styles:r={}}=e;return ct({type:"counter",content:t},()=>(R("beforeDOMElementCreation",{content:t,params:e}),ja({content:t.toString(),title:n,extra:{attributes:i,styles:r,classes:["".concat(c.cssPrefix,"-layers-counter"),...a]}})))}}}},li={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=w,title:a=null,classes:i=[],attributes:r={},styles:o={}}=e;return ct({type:"text",content:t},()=>(R("beforeDOMElementCreation",{content:t,params:e}),Ae({content:t,transform:s(s({},w),n),title:a,extra:{attributes:r,styles:o,classes:["".concat(c.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){let{title:a,transform:i,extra:r}=n,o=null,l=null;if(Re){let u=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();o=f.width/u,l=f.height/u}return c.autoA11y&&!a&&(r.attributes["aria-hidden"]="true"),Promise.resolve([e,Ae({content:e.innerHTML,width:o,height:l,transform:i,title:a,extra:r,watchable:!0})])}}},ci=new RegExp('"',"ug"),Ee=[1105920,1112319],Oe=s(s(s(s({},{FontAwesome:{normal:"fas",400:"fas"}}),Tn),qn),Yn),zt=Object.keys(Oe).reduce((t,e)=>(t[e.toLowerCase()]=Oe[e],t),{}),fi=Object.keys(zt).reduce((t,e)=>{let n=zt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function ui(t){let e=t.replace(ci,""),n=ba(e,0),a=n>=Ee[0]&&n<=Ee[1],i=e.length===2?e[0]===e[1]:!1;return{value:St(i?e[0]:e),isSecondary:a||i}}function di(t,e){let n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),i=isNaN(a)?"normal":a;return(zt[n]||{})[i]||fi[n]}function Fe(t,e){let n="".concat(Kn).concat(e.replace(":","-"));return new Promise((a,i)=>{if(t.getAttribute(n)!==null)return a();let o=$(t.children).filter(m=>m.getAttribute(kt)===e)[0],l=N.getComputedStyle(t,e),u=l.getPropertyValue("font-family"),f=u.match(ea),d=l.getPropertyValue("font-weight"),p=l.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&p!=="none"&&p!==""){let m=l.getPropertyValue("content"),b=di(u,d),{value:O,isSecondary:D}=ui(m),A=f[0].startsWith("FontAwesome"),I=Ut(b,O),v=I;if(A){let k=Ca(O);k.iconName&&k.prefix&&(I=k.iconName,b=k.prefix)}if(I&&!D&&(!o||o.getAttribute(Lt)!==b||o.getAttribute(Rt)!==v)){t.setAttribute(n,v),o&&t.removeChild(o);let k=Za(),{extra:j}=k;j.attributes[kt]=e,Tt(I,b).then(W=>{let An=$t(s(s({},k),{},{icons:{main:W,mask:ln()},prefix:b,iconName:v,extra:j,watchable:!0})),ft=h.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(ft,t.firstChild):t.appendChild(ft),ft.outerHTML=An.map(kn=>Q(kn)).join(`
`),t.removeAttribute(n),a()}).catch(i)}else a()}else a()})}function mi(t){return Promise.all([Fe(t,"::before"),Fe(t,"::after")])}function pi(t){return t.parentNode!==document.head&&!~Jn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(kt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ne(t){if(E)return new Promise((e,n)=>{let a=$(t.querySelectorAll("*")).filter(pi).map(mi),i=Bt.begin("searchPseudoElements");mn(),Promise.all(a).then(()=>{i(),Dt(),e()}).catch(()=>{i(),Dt(),n()})})}var hi={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Ne,t}}},provides(t){t.pseudoElements2svg=function(e){let{node:n=h}=e;c.searchPseudoElements&&Ne(n)}}},Te=!1,gi={mixout(){return{dom:{unwatch(){mn(),Te=!0}}}},hooks(){return{bootstrap(){Ie(Ot("mutationObserverCallbacks",{}))},noAuto(){qa()},watch(t){let{observeMutationsRoot:e}=t;Te?Dt():Ie(Ot("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},Me=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{let i=a.toLowerCase().split("-"),r=i[0],o=i.slice(1).join("-");if(r&&o==="h")return n.flipX=!0,n;if(r&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(r){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)},yi={mixout(){return{parse:{transform:t=>Me(t)}}},hooks(){return{parseNodeAttributes(t,e){let n=e.getAttribute("data-fa-transform");return n&&(t.transform=Me(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:i,iconWidth:r}=e,o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(f)},p={transform:"translate(".concat(r/2*-1," -256)")},m={outer:o,inner:d,path:p};return{tag:"g",attributes:s({},m.outer),children:[{tag:"g",attributes:s({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:s(s({},n.icon.attributes),m.path)}]}]}}}},bt={x:0,y:0,width:"100%",height:"100%"};function De(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function bi(t){return t.tag==="g"?t.children:[t]}var vi={hooks(){return{parseNodeAttributes(t,e){let n=e.getAttribute("data-fa-mask"),a=n?lt(n.split(" ").map(i=>i.trim())):ln();return a.prefix||(a.prefix=T()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:i,mask:r,maskId:o,transform:l}=e,{width:u,icon:f}=i,{width:d,icon:p}=r,m=ua({transform:l,containerWidth:d,iconWidth:u}),b={tag:"rect",attributes:s(s({},bt),{},{fill:"white"})},O=f.children?{children:f.children.map(De)}:{},D={tag:"g",attributes:s({},m.inner),children:[De(s({tag:f.tag,attributes:s(s({},f.attributes),m.path)},O))]},A={tag:"g",attributes:s({},m.outer),children:[D]},I="mask-".concat(o||X()),v="clip-".concat(o||X()),k={tag:"mask",attributes:s(s({},bt),{},{id:I,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,A]},j={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:bi(p)},k]};return n.push(j,{tag:"rect",attributes:s({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(I,")")},bt)}),{children:n,attributes:a}}}},xi={provides(t){let e=!1;N.matchMedia&&(e=N.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){let n=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:s(s({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let r=s(s({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:s(s({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:s(s({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:s(s({},r),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:s(s({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:s(s({},r),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:s(s({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:s(s({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Ai={hooks(){return{parseNodeAttributes(t,e){let n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},ki=[pa,ri,oi,si,li,hi,gi,yi,vi,xi,Ai];Ta(ki,{mixoutsTo:x});var ji=x.noAuto,hn=x.config,Wi=x.library,gn=x.dom,yn=x.parse,Hi=x.findIconDefinition,Yi=x.toHtml,bn=x.icon,Ui=x.layer,wi=x.text,Ci=x.counter;var Ii=["*"],Si=(()=>{class t{defaultPrefix="fas";fallbackIcon=null;fixedWidth;set autoAddCss(n){hn.autoAddCss=n,this._autoAddCss=n}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static \u0275fac=function(a){return new(a||t)};static \u0275prov=ut({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Pi=(()=>{class t{definitions={};addIcons(...n){for(let a of n){a.prefix in this.definitions||(this.definitions[a.prefix]={}),this.definitions[a.prefix][a.iconName]=a;for(let i of a.icon[2])typeof i=="string"&&(this.definitions[a.prefix][i]=a)}}addIconPacks(...n){for(let a of n){let i=Object.keys(a).map(r=>a[r]);this.addIcons(...i)}}getIconDefinition(n,a){return n in this.definitions&&a in this.definitions[n]?this.definitions[n][a]:null}static \u0275fac=function(a){return new(a||t)};static \u0275prov=ut({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ei=t=>{throw new Error(`Could not find icon with iconName=${t.iconName} and prefix=${t.prefix} in the icon library.`)},Oi=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},xn=t=>t!=null&&(t===90||t===180||t===270||t==="90"||t==="180"||t==="270"),Fi=t=>{let e=xn(t.rotate),n={[`fa-${t.animation}`]:t.animation!=null&&!t.animation.startsWith("spin"),"fa-spin":t.animation==="spin"||t.animation==="spin-reverse","fa-spin-pulse":t.animation==="spin-pulse"||t.animation==="spin-pulse-reverse","fa-spin-reverse":t.animation==="spin-reverse"||t.animation==="spin-pulse-reverse","fa-pulse":t.animation==="spin-pulse"||t.animation==="spin-pulse-reverse","fa-fw":t.fixedWidth,"fa-border":t.border,"fa-inverse":t.inverse,"fa-layers-counter":t.counter,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both",[`fa-${t.size}`]:t.size!==null,[`fa-rotate-${t.rotate}`]:e,"fa-rotate-by":t.rotate!=null&&!e,[`fa-pull-${t.pull}`]:t.pull!==null,[`fa-stack-${t.stackItemSize}`]:t.stackItemSize!=null};return Object.keys(n).map(a=>n[a]?a:null).filter(a=>a!=null)},Gt=new WeakSet,vn="fa-auto-css";function Ni(t,e){if(!e.autoAddCss||Gt.has(t))return;if(t.getElementById(vn)!=null){e.autoAddCss=!1,Gt.add(t);return}let n=t.createElement("style");n.setAttribute("type","text/css"),n.setAttribute("id",vn),n.innerHTML=gn.css();let a=t.head.childNodes,i=null;for(let r=a.length-1;r>-1;r--){let o=a[r],l=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(l)>-1&&(i=o)}t.head.insertBefore(n,i),e.autoAddCss=!1,Gt.add(t)}var Ti=t=>t.prefix!==void 0&&t.iconName!==void 0,Mi=(t,e)=>Ti(t)?t:Array.isArray(t)&&t.length===2?{prefix:t[0],iconName:t[1]}:{prefix:e,iconName:t},Di=(()=>{class t{stackItemSize=J("1x");size=J();_effect=oe(()=>{if(this.size())throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')});static \u0275fac=function(a){return new(a||t)};static \u0275dir=te({type:t,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:[1,"stackItemSize"],size:[1,"size"]}})}return t})(),zi=(()=>{class t{size=J();classes=mt(()=>{let n=this.size(),a=n?{[`fa-${n}`]:!0}:{};return qt(Xt({},a),{"fa-stack":!0})});static \u0275fac=function(a){return new(a||t)};static \u0275cmp=dt({type:t,selectors:[["fa-stack"]],hostVars:2,hostBindings:function(a,i){a&2&&re(i.classes())},inputs:{size:[1,"size"]},ngContentSelectors:Ii,decls:1,vars:0,template:function(a,i){a&1&&(ae(),ie(0))},encapsulation:2,changeDetection:0})}return t})(),nr=(()=>{class t{icon=y.required();title=y();animation=y();mask=y();flip=y();size=y();pull=y();border=y();inverse=y();symbol=y();rotate=y();fixedWidth=y();transform=y();a11yRole=y();renderedIconHTML=mt(()=>{let n=this.icon();if(n==null&&this.config.fallbackIcon==null)return Oi(),"";let a=this.findIconDefinition(n??this.config.fallbackIcon);if(!a)return"";let i=this.buildParams();Ni(this.document,this.config);let r=bn(a,i);return this.sanitizer.bypassSecurityTrustHtml(r.html.join(`
`))});document=z(Qt);sanitizer=z(se);config=z(Si);iconLibrary=z(Pi);stackItem=z(Di,{optional:!0});stack=z(zi,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}findIconDefinition(n){let a=Mi(n,this.config.defaultPrefix);if("icon"in a)return a;let i=this.iconLibrary.getIconDefinition(a.prefix,a.iconName);return i??(Ei(a),null)}buildParams(){let n=this.fixedWidth(),a={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof n=="boolean"?n:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},i=this.transform(),r=typeof i=="string"?yn.transform(i):i,o=this.mask(),l=o!=null?this.findIconDefinition(o):null,u={},f=this.a11yRole();f!=null&&(u.role=f);let d={};return a.rotate!=null&&!xn(a.rotate)&&(d["--fa-rotate-angle"]=`${a.rotate}`),{title:this.title(),transform:r,classes:Fi(a),mask:l??void 0,symbol:this.symbol(),attributes:u,styles:d}}static \u0275fac=function(a){return new(a||t)};static \u0275cmp=dt({type:t,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(a,i){a&2&&(ne("innerHTML",i.renderedIconHTML(),Jt),ee("title",i.title()))},inputs:{icon:[1,"icon"],title:[1,"title"],animation:[1,"animation"],mask:[1,"mask"],flip:[1,"flip"],size:[1,"size"],pull:[1,"pull"],border:[1,"border"],inverse:[1,"inverse"],symbol:[1,"symbol"],rotate:[1,"rotate"],fixedWidth:[1,"fixedWidth"],transform:[1,"transform"],a11yRole:[1,"a11yRole"]},outputs:{icon:"iconChange",title:"titleChange",animation:"animationChange",mask:"maskChange",flip:"flipChange",size:"sizeChange",pull:"pullChange",border:"borderChange",inverse:"inverseChange",symbol:"symbolChange",rotate:"rotateChange",fixedWidth:"fixedWidthChange",transform:"transformChange",a11yRole:"a11yRoleChange"},decls:0,vars:0,template:function(a,i){},encapsulation:2,changeDetection:0})}return t})();var ar=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275mod=Zt({type:t});static \u0275inj=Kt({})}return t})();export{nr as a,ar as b};
