import{a as T,b as L2}from"./chunk-B5N2J27E.js";import{a as p2}from"./chunk-TW3NJBYV.js";import{a as z2}from"./chunk-VJAOMIY2.js";import{b as e2,f as l2,g as s2,m as a2,n as t2,o as i2,q as n2,s as o2,u as r2,v as f2,y as x}from"./chunk-ULLDCJJZ.js";import{$ as v,$a as g,$b as m2,B as G,Cb as k,Eb as c2,Gb as p,Hb as z,La as V,Ma as K,Pa as i,T as M,Ta as A,Z as a,ac as q,bb as C,bc as F,ca as R,db as d,f as S,ia as j,ib as o,ja as O,jb as r,ka as W,kb as u,lb as Q,nb as J,ob as h,rb as X,sb as $,tb as Z,u as y,ua as U,ub as Y,vb as f,wb as m,xb as H,ya as w}from"./chunk-6JKIXDQD.js";var P=(()=>{let e=class e{constructor(){this.document=a(e2)}addJsScript(c,l){if(this.document.querySelector(`script[src="${l}"]`))return;let L=c.createElement("script");L.type="text/javascript",L.src=l,c.appendChild(this.document.body,L)}reloadJsScript(c,l){this.removeJsScript(l),this.addJsScript(c,l)}removeJsScript(c){let l=this.document.querySelector(`script[src="${c}"]`);l&&l.remove()}ceckIfJsScriptExist(c){return!!this.document.querySelector(`script[src="${c}"]`)}};e.\u0275fac=function(l){return new(l||e)},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();var M2=(()=>{let e=class e{constructor(){this.consentS=a(T),this.scriptS=a(P),this.translate=a(m2),this.languageS=a(x),this.platformId=a(w)}loadCodePen(c){return S(this,null,function*(){if(!s2(this.platformId))if(this.consentS.checkConsent("CodePen"))this.scriptS.reloadJsScript(c,"https://cpwebassets.codepen.io/assets/embed/ei.js");else{let l=Array.from(document.querySelectorAll(".codepen"));for(let t of l){let L=Array.from(t.querySelectorAll("span"));for(let B of L){let N=c.createElement("button");c.addClass(N,"codePenConsentButton"),N.addEventListener("click",()=>this.consentS.giveConsent("CodePen"));let x2=yield y(this.translate.get("codepen_button")),b2=c.createText(x2);c.appendChild(N,b2);let D=B.parentNode;c.insertBefore(D,N,B),c.removeChild(D,B);let _=c.createElement("p"),S2=yield y(this.translate.get("codepen_privacy_notice")),N2=c.createText(S2+" ");c.appendChild(_,N2);let I=c.createElement("a");c.setAttribute(I,"href",this.languageS.userLanguage+"/privacy-policy/.");let y2=yield y(this.translate.get("privacy_policy")),v2=c.createText(y2);c.appendChild(I,v2),c.appendChild(_,I),c.appendChild(D,_)}}}})}};e.\u0275fac=function(l){return new(l||e)},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();var d2=(()=>{let e=class e{constructor(){this.scriptS=a(P),this.consentS=a(T),this.languageS=a(x),this.shortname="ricoswebsite-com",this.consent=this.consentS.checkConsent("Disqus")}giveConsent(){this.consentS.giveConsent("Disqus"),this.consent=!0}loadDisqus(c,l){this.consent=this.consentS.checkConsent("Disqus"),this.disqus=window.DISQUS;let t=this.languageS.userLanguage;this.disqus?window.DISQUS.reset({reload:!0,config:function(){this.page.identifier=l,this.language=t}}):(window.disqus_config=function(){this.page.identifier=l,this.language=t},this.scriptS.addJsScript(c,"https://"+this.shortname+".disqus.com/embed.js"))}};e.\u0275fac=function(l){return new(l||e)},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();var C2={prefix:"far",iconName:"comment",icon:[512,512,[128489,61669],"f075","M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9l.3-.5z"]};var A2=["disqusDiv"],k2=s=>[s];function q2(s,e){s&1&&u(0,"div",1,0)}function F2(s,e){if(s&1){let n=Q();o(0,"div",2)(1,"button",3),J("click",function(){O(n);let l=h();return W(l.giveConsent())}),u(2,"fa-icon",4),o(3,"span"),f(4),p(5,"translate"),r()(),o(6,"span",5),f(7),p(8,"translate"),o(9,"a",6),f(10,"Disqus"),r(),f(11),p(12,"translate"),o(13,"a",7),f(14),p(15,"translate"),r(),f(16,"."),r()()}if(s&2){let n=h();i(2),C("icon",n.faComment),i(2),m(z(5,6,"load_comments")),i(3),H("",z(8,8,"disqus_privacy_notice")," "),i(4),H(". ",z(12,10,"for_more_details_see")," "),i(2),C("routerLink",c2(14,k2,"/"+n.languageS.userLanguage+"/privacy-policy/.")),i(),m(z(15,12,"privacy_policy"))}}var u2=(()=>{let e=class e{constructor(){this.disqusS=a(d2),this.renderer=a(A),this.elementRef=a(U),this.languageS=a(x),this.platformId=a(w),this.faComment=C2}ngOnChanges(){l2(this.platformId)&&(this.observer&&this.observer.disconnect(),this.identifier&&this.disqusS.consent&&(this.observer=new IntersectionObserver(c=>{c.forEach(l=>{l.isIntersecting&&this.isVisible()})}),this.observer.observe(this.elementRef.nativeElement)))}ngOnDestroy(){this.observer?.disconnect()}isVisible(){this.disqusS.consent&&this.identifier&&(this.disqusS.loadDisqus(this.renderer,this.identifier),this.observer?.disconnect())}giveConsent(){this.identifier&&(this.disqusS.giveConsent(),this.observer?.disconnect(),this.disqusS.loadDisqus(this.renderer,this.identifier))}};e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=v({type:e,selectors:[["app-disqus"]],viewQuery:function(l,t){if(l&1&&$(A2,5),l&2){let L;Z(L=Y())&&(t.disqusDiv=L.first)}},inputs:{identifier:"identifier"},standalone:!0,features:[j,k],decls:2,vars:2,consts:[["disqusDiv",""],["id","disqus_thread"],[1,"consentBanner"],[3,"click"],[3,"icon"],[1,"disclaimer"],["href","https://disqus.com/","target","_blank"],[3,"routerLink"]],template:function(l,t){l&1&&g(0,q2,2,0,"div",1)(1,F2,17,16,"div",2),l&2&&(d(t.disqusS.consent?0:-1),i(),d(t.disqusS.consent?-1:1))},dependencies:[p2,f2,F,q],styles:["#disqus_thread[_ngcontent-%COMP%]{padding:0 .5em}.consentBanner[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:.5em}.consentBanner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:1em;background-color:#c1c0ff;border-radius:4px;border:3px solid transparent;cursor:pointer;display:flex;gap:.5em;font-size:1.2em;transition:all .25s}.consentBanner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:var(--font-color);border-color:#c1c0ff;background-color:transparent}.consentBanner[_ngcontent-%COMP%]   .disclaimer[_ngcontent-%COMP%]{font-size:.8em;text-wrap:balance;text-align:center}"]});let s=e;return s})();var h2=(()=>{let e=class e{constructor(){this.sanitized=a(i2)}transform(c){return this.sanitized.bypassSecurityTrustHtml(c)}};e.\u0275fac=function(l){return new(l||e)},e.\u0275pipe=R({name:"safeHtml",type:e,pure:!0,standalone:!0});let s=e;return s})();var E={production:!1,baseUrl:"https://ricoswebsite.com",postsDir:"./src/assets/posts",sitemapPath:"./src/sitemap.txt",blogpostRoute:"/blogpost"};var g2=(()=>{let e=class e{constructor(){this.router=a(r2),this.meta=a(a2),this.title=a(t2),this.router.events.pipe(G(c=>c instanceof n2)).subscribe(()=>{this.removeMetaData()})}removeMetaData(){this.meta.removeTag('name="keywords"'),this.meta.removeTag('property="og:description"'),this.meta.removeTag('property="og:author"'),this.meta.removeTag('property="og:robots"'),this.meta.removeTag('property="og:image"'),this.meta.removeTag('property="og:url"'),this.meta.removeTag('property="og:title"'),this.meta.removeTag('property="og:type"'),this.meta.removeTag('property="article:published_time"'),this.meta.removeTag('name="description"')}updateMetaTags(c){let l=[{property:"og:title",content:c.title},{property:"og:type",content:"article"},{property:"og:url",content:E.baseUrl+this.router.url}];c.author&&l.push({property:"og:author",content:c.author}),c.date&&l.push({property:"article:published_time",content:c.date}),c.description&&(l.push({property:"og:description",content:c.description}),l.push({name:"description",content:c.description})),c.keywords&&l.push({name:"keywords",content:c.keywords}),c.image&&l.push({property:"og:image",content:E.baseUrl+"/"+c.image}),this.meta.addTags(l),this.title.setTitle(c.title??"Ricos Website")}};e.\u0275fac=function(l){return new(l||e)},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();function T2(s,e){if(s&1&&u(0,"img",3),s&2){let n=h();X("alt",n.post==null||n.post.postMeta==null?null:n.post.postMeta.title),C("src",n.post==null||n.post.postMeta==null?null:n.post.postMeta.image,K)}}function P2(s,e){s&1&&(o(0,"h1"),f(1,"404"),r(),o(2,"p"),f(3),p(4,"translate"),r(),o(5,"p"),f(6),p(7,"translate"),r()),s&2&&(i(3),m(z(4,2,"blogpost_not_found")),i(3),m(z(7,4,"blogpost_not_found_text")))}function B2(s,e){if(s&1&&(u(0,"div",5),p(1,"safeHtml")),s&2){let n,c=h();C("innerHTML",z(1,1,(n=c.post==null?null:c.post.postContent)!==null&&n!==void 0?n:""),V)}}function D2(s,e){if(s&1&&u(0,"app-disqus",6),s&2){let n=h();C("identifier",n.post.postMeta.fileName)}}var H1=(()=>{let e=class e{constructor(){this.route=a(o2),this.postS=a(z2),this.renderer=a(A),this.highlightS=a(L2),this.codePenS=a(M2),this.metaS=a(g2),this.postNotFound=!1}ngOnInit(){this.routeParamsSubscription=this.route.params.subscribe(()=>S(this,null,function*(){this.postNotFound=!1;let c=this.route.snapshot.paramMap.get("fileName");c?this.post=yield this.postS.getPost(c):this.route.data.subscribe(l=>S(this,null,function*(){l.fileName&&(this.post=yield this.postS.getPost(l.fileName)),this.post?.postMeta&&(this.post.postMeta.commentsDisabled=!0),this.postNotFound=!this.post})),this.postNotFound=!this.post,this.post?.postMeta&&this.metaS.updateMetaTags(this.post.postMeta)}))}ngOnDestroy(){this.routeParamsSubscription&&this.routeParamsSubscription.unsubscribe()}ngAfterViewChecked(){this.post&&(this.highlightS.highlightAll(),this.post?.postMeta?.hasCodePen&&this.codePenS.loadCodePen(this.renderer))}};e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=v({type:e,selectors:[["app-blog-post"]],standalone:!0,features:[k],decls:16,vars:7,consts:[[1,"blogpostMain"],[1,"hero","gradient"],[1,"sectionSpacer"],["height","495","width","880",3,"src","alt"],[1,"description"],[1,"postContent",3,"innerHTML"],[3,"identifier"]],template:function(l,t){l&1&&(o(0,"main",0)(1,"div",1)(2,"div",2),g(3,T2,1,2,"img",3),o(4,"h1"),f(5),r(),o(6,"div",4)(7,"p"),f(8),r()(),o(9,"time"),f(10),r(),g(11,P2,8,6),r()(),o(12,"section")(13,"div",2),g(14,B2,2,3,"div",5)(15,D2,1,1,"app-disqus",6),r()()()),l&2&&(i(3),d(!(t.post==null||t.post.postMeta==null)&&t.post.postMeta.image?3:-1),i(2),m(t.post==null||t.post.postMeta==null?null:t.post.postMeta.title),i(3),m(t.post==null||t.post.postMeta==null?null:t.post.postMeta.description),i(2),m(t.post==null||t.post.postMeta==null?null:t.post.postMeta.localDateString),i(),d(t.postNotFound?11:-1),i(3),d(t.post!=null&&t.post.postContent?14:-1),i(),d(t.post&&!t.post.postMeta.commentsDisabled?15:-1))},dependencies:[u2,F,q,h2],styles:[`.blogpostMain{padding-bottom:3em}.blogpostMain .hero{display:flex;justify-content:center;padding:1em 4%;text-align:center;overflow:hidden}.blogpostMain .hero img{max-width:100%;height:auto;animation:grow .5s ease-out;aspect-ratio:16/9;object-fit:contain}@media only screen and (max-width: 1100px){.blogpostMain .hero{padding-top:var(--header-height)}}.blogpostMain .hero time{float:right;font-style:italic;font-size:.8em}.blogpostMain .hero .description{max-width:90%;margin:0 auto;font-size:1.2em}@keyframes grow{0%{transform:scale(0)}to{transform:scale(1)}}.blogpostMain .sectionSpacer{max-width:60em;flex:1;width:100%;box-sizing:border-box}@media only screen and (max-width: 800px){.blogpostMain .sectionSpacer{padding:0}}.blogpostMain section{flex-direction:unset;justify-content:center}.blogpostMain .postContent{min-height:40em;line-height:1.5em;margin-bottom:4em;padding:clamp(1em,2vw,2em);overflow:auto;width:100%;box-sizing:border-box}@media only screen and (max-width: 800px){.blogpostMain .postContent ul,.blogpostMain .postContent ol{padding-left:1em}}.blogpostMain .postContent ul{padding-left:1.5em}.blogpostMain .postContent h2,.blogpostMain .postContent h3,.blogpostMain .postContent a{color:#88f}.blogpostMain .postContent h1,.blogpostMain .postContent h2,.blogpostMain .postContent h3,.blogpostMain .postContent h4{margin:1em 0 0;line-height:1.2em}.blogpostMain .postContent img{max-width:100%;border-radius:12px}.blogpostMain .postContent img:hover{filter:brightness(.8)}.blogpostMain .postContent p>code,.blogpostMain .postContent li>code{background-color:#15275a;padding:.4em;border-radius:4px}.blogpostMain .postContent pre{background-color:#1d2027;padding:1em;border-radius:0 12px 12px 0;max-width:100%;overflow-x:auto;font-size:.8em;margin-bottom:1em;border-left:8px solid #3a3a75}.blogpostMain .postContent pre+.toolbar{opacity:unset}.blogpostMain .postContent pre+.toolbar button{padding:.4em;border-radius:unset;font-size:1em;cursor:pointer}.blogpostMain .postContent pre+.toolbar button:hover{background-color:#323242}.blogpostMain .postContent .linkButton{font-size:1.4em;padding:.7em;background-color:#1f1d57;border-radius:24px;cursor:pointer;text-decoration:none;color:#a8a8fc;transition:all .25s;display:inline-block}.blogpostMain .postContent .linkButton:hover{background-color:#2d2b5f}.blogpostMain #disqus_thread{min-height:500px}.blogpostMain .codepen:has(.codePenConsentButton){flex-direction:column}.blogpostMain .codePenConsentButton{padding:1em;background-color:#c1c0ff;border-radius:4px;border:3px solid transparent;cursor:pointer;display:flex;gap:.5em;font-size:1.2em;transition:all .25s;margin:0 auto}.blogpostMain .codePenConsentButton:hover{color:var(--font-color);border-color:#c1c0ff;background-color:transparent}.blogpostMain .codePenConsentButton+p{font-size:.8em;text-wrap:balance;text-align:center}
`],encapsulation:2});let s=e;return s})();export{H1 as BlogPostComponent};