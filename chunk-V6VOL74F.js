import{a as ce}from"./chunk-DSWJBLYP.js";import{g as oe,h as le,y as ae}from"./chunk-77P4CJW4.js";import{Ba as re,U as Q,_ as L,a as x,b as _,f as A,u as G,za as ie}from"./chunk-SY5BRRD3.js";var q=class{constructor(t,n,e,i){this.postMeta=new W(n),this.postMeta.initFromObject(t,e),this.postContent=i}},W=class{constructor(t){this.commentsDisabled=!1,this.hasCodePen=!1,this.hideInFeed=!1,this.fileName=t}initFromObject(t,n){Object.assign(this,t),this.date&&(this.localDateString=new Date(this.date).toLocaleDateString(n))}};function K(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var I=K();function ke(a){I=a}var de=/[&<>"']/,Se=new RegExp(de.source,"g"),xe=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Ie=new RegExp(xe.source,"g"),_e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},he=a=>_e[a];function b(a,t){if(t){if(de.test(a))return a.replace(Se,he)}else if(xe.test(a))return a.replace(Ie,he);return a}var Ae=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Le(a){return a.replace(Ae,(t,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}var Ce=/(^|[^\[])\^/g;function k(a,t){let n=typeof a=="string"?a:a.source;t=t||"";let e={replace:(i,r)=>{let s=typeof r=="string"?r:r.source;return s=s.replace(Ce,"$1"),n=n.replace(i,s),e},getRegex:()=>new RegExp(n,t)};return e}function pe(a){try{a=encodeURI(a).replace(/%25/g,"%")}catch{return null}return a}var Z={exec:()=>null};function ue(a,t){let n=a.replace(/\|/g,(r,s,o)=>{let l=!1,p=s;for(;--p>=0&&o[p]==="\\";)l=!l;return l?"|":" |"}),e=n.split(/ \|/),i=0;if(e[0].trim()||e.shift(),e.length>0&&!e[e.length-1].trim()&&e.pop(),t)if(e.length>t)e.splice(t);else for(;e.length<t;)e.push("");for(;i<e.length;i++)e[i]=e[i].trim().replace(/\\\|/g,"|");return e}function H(a,t,n){let e=a.length;if(e===0)return"";let i=0;for(;i<e;){let r=a.charAt(e-i-1);if(r===t&&!n)i++;else if(r!==t&&n)i++;else break}return a.slice(0,e-i)}function Pe(a,t){if(a.indexOf(t[1])===-1)return-1;let n=0;for(let e=0;e<a.length;e++)if(a[e]==="\\")e++;else if(a[e]===t[0])n++;else if(a[e]===t[1]&&(n--,n<0))return e;return-1}function fe(a,t,n,e){let i=t.href,r=t.title?b(t.title):null,s=a[1].replace(/\\([\[\]])/g,"$1");if(a[0].charAt(0)!=="!"){e.state.inLink=!0;let o={type:"link",raw:n,href:i,title:r,text:s,tokens:e.inlineTokens(s)};return e.state.inLink=!1,o}return{type:"image",raw:n,href:i,title:r,text:b(s)}}function Ee(a,t){let n=a.match(/^(\s+)(?:```)/);if(n===null)return t;let e=n[1];return t.split(`
`).map(i=>{let r=i.match(/^\s+/);if(r===null)return i;let[s]=r;return s.length>=e.length?i.slice(e.length):i}).join(`
`)}var P=class{options;rules;lexer;constructor(t){this.options=t||I}space(t){let n=this.rules.block.newline.exec(t);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(t){let n=this.rules.block.code.exec(t);if(n){let e=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?e:H(e,`
`)}}}fences(t){let n=this.rules.block.fences.exec(t);if(n){let e=n[0],i=Ee(e,n[3]||"");return{type:"code",raw:e,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:i}}}heading(t){let n=this.rules.block.heading.exec(t);if(n){let e=n[2].trim();if(/#$/.test(e)){let i=H(e,"#");(this.options.pedantic||!i||/ $/.test(i))&&(e=i.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(t){let n=this.rules.block.hr.exec(t);if(n)return{type:"hr",raw:n[0]}}blockquote(t){let n=this.rules.block.blockquote.exec(t);if(n){let e=n[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`);e=H(e.replace(/^ *>[ \t]?/gm,""),`
`);let i=this.lexer.state.top;this.lexer.state.top=!0;let r=this.lexer.blockTokens(e);return this.lexer.state.top=i,{type:"blockquote",raw:n[0],tokens:r,text:e}}}list(t){let n=this.rules.block.list.exec(t);if(n){let e=n[1].trim(),i=e.length>1,r={type:"list",raw:"",ordered:i,start:i?+e.slice(0,-1):"",loose:!1,items:[]};e=i?`\\d{1,9}\\${e.slice(-1)}`:`\\${e}`,this.options.pedantic&&(e=i?e:"[*+-]");let s=new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),o="",l="",p=!1;for(;t;){let c=!1;if(!(n=s.exec(t))||this.rules.block.hr.test(t))break;o=n[0],t=t.substring(o.length);let u=n[2].split(`
`,1)[0].replace(/^\t+/,v=>" ".repeat(3*v.length)),h=t.split(`
`,1)[0],g=0;this.options.pedantic?(g=2,l=u.trimStart()):(g=n[2].search(/[^ ]/),g=g>4?1:g,l=u.slice(g),g+=n[1].length);let y=!1;if(!u&&/^ *$/.test(h)&&(o+=h+`
`,t=t.substring(h.length+1),c=!0),!c){let v=new RegExp(`^ {0,${Math.min(3,g-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),O=new RegExp(`^ {0,${Math.min(3,g-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),m=new RegExp(`^ {0,${Math.min(3,g-1)}}(?:\`\`\`|~~~)`),z=new RegExp(`^ {0,${Math.min(3,g-1)}}#`);for(;t;){let w=t.split(`
`,1)[0];if(h=w,this.options.pedantic&&(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),m.test(h)||z.test(h)||v.test(h)||O.test(t))break;if(h.search(/[^ ]/)>=g||!h.trim())l+=`
`+h.slice(g);else{if(y||u.search(/[^ ]/)>=4||m.test(u)||z.test(u)||O.test(u))break;l+=`
`+h}!y&&!h.trim()&&(y=!0),o+=w+`
`,t=t.substring(w.length+1),u=h.slice(g)}}r.loose||(p?r.loose=!0:/\n *\n *$/.test(o)&&(p=!0));let d=null,$;this.options.gfm&&(d=/^\[[ xX]\] /.exec(l),d&&($=d[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),r.items.push({type:"list_item",raw:o,task:!!d,checked:$,loose:!1,text:l,tokens:[]}),r.raw+=o}r.items[r.items.length-1].raw=o.trimEnd(),r.items[r.items.length-1].text=l.trimEnd(),r.raw=r.raw.trimEnd();for(let c=0;c<r.items.length;c++)if(this.lexer.state.top=!1,r.items[c].tokens=this.lexer.blockTokens(r.items[c].text,[]),!r.loose){let u=r.items[c].tokens.filter(g=>g.type==="space"),h=u.length>0&&u.some(g=>/\n.*\n/.test(g.raw));r.loose=h}if(r.loose)for(let c=0;c<r.items.length;c++)r.items[c].loose=!0;return r}}html(t){let n=this.rules.block.html.exec(t);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(t){let n=this.rules.block.def.exec(t);if(n){let e=n[1].toLowerCase().replace(/\s+/g," "),i=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:e,raw:n[0],href:i,title:r}}}table(t){let n=this.rules.block.table.exec(t);if(!n||!/[:|]/.test(n[2]))return;let e=ue(n[1]),i=n[2].replace(/^\||\| *$/g,"").split("|"),r=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],s={type:"table",raw:n[0],header:[],align:[],rows:[]};if(e.length===i.length){for(let o of i)/^ *-+: *$/.test(o)?s.align.push("right"):/^ *:-+: *$/.test(o)?s.align.push("center"):/^ *:-+ *$/.test(o)?s.align.push("left"):s.align.push(null);for(let o of e)s.header.push({text:o,tokens:this.lexer.inline(o)});for(let o of r)s.rows.push(ue(o,s.header.length).map(l=>({text:l,tokens:this.lexer.inline(l)})));return s}}lheading(t){let n=this.rules.block.lheading.exec(t);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(t){let n=this.rules.block.paragraph.exec(t);if(n){let e=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:e,tokens:this.lexer.inline(e)}}}text(t){let n=this.rules.block.text.exec(t);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(t){let n=this.rules.inline.escape.exec(t);if(n)return{type:"escape",raw:n[0],text:b(n[1])}}tag(t){let n=this.rules.inline.tag.exec(t);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(t){let n=this.rules.inline.link.exec(t);if(n){let e=n[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;let s=H(e.slice(0,-1),"\\");if((e.length-s.length)%2===0)return}else{let s=Pe(n[2],"()");if(s>-1){let l=(n[0].indexOf("!")===0?5:4)+n[1].length+s;n[2]=n[2].substring(0,s),n[0]=n[0].substring(0,l).trim(),n[3]=""}}let i=n[2],r="";if(this.options.pedantic){let s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);s&&(i=s[1],r=s[3])}else r=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(e)?i=i.slice(1):i=i.slice(1,-1)),fe(n,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(t,n){let e;if((e=this.rules.inline.reflink.exec(t))||(e=this.rules.inline.nolink.exec(t))){let i=(e[2]||e[1]).replace(/\s+/g," "),r=n[i.toLowerCase()];if(!r){let s=e[0].charAt(0);return{type:"text",raw:s,text:s}}return fe(e,r,e[0],this.lexer)}}emStrong(t,n,e=""){let i=this.rules.inline.emStrongLDelim.exec(t);if(!i||i[3]&&e.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!e||this.rules.inline.punctuation.exec(e)){let s=[...i[0]].length-1,o,l,p=s,c=0,u=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,n=n.slice(-1*t.length+s);(i=u.exec(n))!=null;){if(o=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!o)continue;if(l=[...o].length,i[3]||i[4]){p+=l;continue}else if((i[5]||i[6])&&s%3&&!((s+l)%3)){c+=l;continue}if(p-=l,p>0)continue;l=Math.min(l,l+p+c);let h=[...i[0]][0].length,g=t.slice(0,s+i.index+h+l);if(Math.min(s,l)%2){let d=g.slice(1,-1);return{type:"em",raw:g,text:d,tokens:this.lexer.inlineTokens(d)}}let y=g.slice(2,-2);return{type:"strong",raw:g,text:y,tokens:this.lexer.inlineTokens(y)}}}}codespan(t){let n=this.rules.inline.code.exec(t);if(n){let e=n[2].replace(/\n/g," "),i=/[^ ]/.test(e),r=/^ /.test(e)&&/ $/.test(e);return i&&r&&(e=e.substring(1,e.length-1)),e=b(e,!0),{type:"codespan",raw:n[0],text:e}}}br(t){let n=this.rules.inline.br.exec(t);if(n)return{type:"br",raw:n[0]}}del(t){let n=this.rules.inline.del.exec(t);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(t){let n=this.rules.inline.autolink.exec(t);if(n){let e,i;return n[2]==="@"?(e=b(n[1]),i="mailto:"+e):(e=b(n[1]),i=e),{type:"link",raw:n[0],text:e,href:i,tokens:[{type:"text",raw:e,text:e}]}}}url(t){let n;if(n=this.rules.inline.url.exec(t)){let e,i;if(n[2]==="@")e=b(n[0]),i="mailto:"+e;else{let r;do r=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])?.[0]??"";while(r!==n[0]);e=b(n[0]),n[1]==="www."?i="http://"+n[0]:i=n[0]}return{type:"link",raw:n[0],text:e,href:i,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(t){let n=this.rules.inline.text.exec(t);if(n){let e;return this.lexer.state.inRawBlock?e=n[0]:e=b(n[0]),{type:"text",raw:n[0],text:e}}}},ve=/^(?: *(?:\n|$))+/,Me=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,qe=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,D=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Be=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,me=/(?:[*+-]|\d{1,9}[.)])/,be=k(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,me).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),V=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Ze=/^[^\n]+/,ee=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Fe=k(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",ee).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),De=k(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,me).getRegex(),X="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",te=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,je=k("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",te).replace("tag",X).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),we=k(V).replace("hr",D).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",X).getRegex(),Oe=k(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",we).getRegex(),ne={blockquote:Oe,code:Me,def:Fe,fences:qe,heading:Be,hr:D,html:je,lheading:be,list:De,newline:ve,paragraph:we,table:Z,text:Ze},ge=k("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",D).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",X).getRegex(),Qe=_(x({},ne),{table:ge,paragraph:k(V).replace("hr",D).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ge).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",X).getRegex()}),He=_(x({},ne),{html:k(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",te).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Z,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:k(V).replace("hr",D).replace("heading",` *#{1,6} *[^
]`).replace("lheading",be).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()}),ye=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Ue=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,$e=/^( {2,}|\\)\n(?!\s*$)/,Ne=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,j="\\p{P}\\p{S}",Xe=k(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,j).getRegex(),Ge=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,We=k(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,j).getRegex(),Ye=k("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,j).getRegex(),Je=k("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,j).getRegex(),Ke=k(/\\([punct])/,"gu").replace(/punct/g,j).getRegex(),Ve=k(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),et=k(te).replace("(?:-->|$)","-->").getRegex(),tt=k("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",et).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),N=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,nt=k(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",N).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Te=k(/^!?\[(label)\]\[(ref)\]/).replace("label",N).replace("ref",ee).getRegex(),Re=k(/^!?\[(ref)\](?:\[\])?/).replace("ref",ee).getRegex(),st=k("reflink|nolink(?!\\()","g").replace("reflink",Te).replace("nolink",Re).getRegex(),se={_backpedal:Z,anyPunctuation:Ke,autolink:Ve,blockSkip:Ge,br:$e,code:Ue,del:Z,emStrongLDelim:We,emStrongRDelimAst:Ye,emStrongRDelimUnd:Je,escape:ye,link:nt,nolink:Re,punctuation:Xe,reflink:Te,reflinkSearch:st,tag:tt,text:Ne,url:Z},it=_(x({},se),{link:k(/^!?\[(label)\]\((.*?)\)/).replace("label",N).getRegex(),reflink:k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",N).getRegex()}),Y=_(x({},se),{escape:k(ye).replace("])","~|])").getRegex(),url:k(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),rt=_(x({},Y),{br:k($e).replace("{2,}","*").getRegex(),text:k(Y.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()}),U={normal:ne,gfm:Qe,pedantic:He},B={normal:se,gfm:Y,breaks:rt,pedantic:it},T=class a{tokens;options;state;tokenizer;inlineQueue;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||I,this.options.tokenizer=this.options.tokenizer||new P,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let n={block:U.normal,inline:B.normal};this.options.pedantic?(n.block=U.pedantic,n.inline=B.pedantic):this.options.gfm&&(n.block=U.gfm,this.options.breaks?n.inline=B.breaks:n.inline=B.gfm),this.tokenizer.rules=n}static get rules(){return{block:U,inline:B}}static lex(t,n){return new a(n).lex(t)}static lexInline(t,n){return new a(n).inlineTokens(t)}lex(t){t=t.replace(/\r\n|\r/g,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let e=this.inlineQueue[n];this.inlineTokens(e.src,e.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[]){this.options.pedantic?t=t.replace(/\t/g,"    ").replace(/^ +$/gm,""):t=t.replace(/^( *)(\t+)/gm,(o,l,p)=>l+"    ".repeat(p.length));let e,i,r,s;for(;t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(o=>(e=o.call({lexer:this},t,n))?(t=t.substring(e.raw.length),n.push(e),!0):!1))){if(e=this.tokenizer.space(t)){t=t.substring(e.raw.length),e.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(e);continue}if(e=this.tokenizer.code(t)){t=t.substring(e.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+e.raw,i.text+=`
`+e.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(e);continue}if(e=this.tokenizer.fences(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.heading(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.hr(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.blockquote(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.list(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.html(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.def(t)){t=t.substring(e.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+e.raw,i.text+=`
`+e.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[e.tag]||(this.tokens.links[e.tag]={href:e.href,title:e.title});continue}if(e=this.tokenizer.table(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.lheading(t)){t=t.substring(e.raw.length),n.push(e);continue}if(r=t,this.options.extensions&&this.options.extensions.startBlock){let o=1/0,l=t.slice(1),p;this.options.extensions.startBlock.forEach(c=>{p=c.call({lexer:this},l),typeof p=="number"&&p>=0&&(o=Math.min(o,p))}),o<1/0&&o>=0&&(r=t.substring(0,o+1))}if(this.state.top&&(e=this.tokenizer.paragraph(r))){i=n[n.length-1],s&&i.type==="paragraph"?(i.raw+=`
`+e.raw,i.text+=`
`+e.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(e),s=r.length!==t.length,t=t.substring(e.raw.length);continue}if(e=this.tokenizer.text(t)){t=t.substring(e.raw.length),i=n[n.length-1],i&&i.type==="text"?(i.raw+=`
`+e.raw,i.text+=`
`+e.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(e);continue}if(t){let o="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){let e,i,r,s=t,o,l,p;if(this.tokens.links){let c=Object.keys(this.tokens.links);if(c.length>0)for(;(o=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)c.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(o=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(o=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,o.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;t;)if(l||(p=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(c=>(e=c.call({lexer:this},t,n))?(t=t.substring(e.raw.length),n.push(e),!0):!1))){if(e=this.tokenizer.escape(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.tag(t)){t=t.substring(e.raw.length),i=n[n.length-1],i&&e.type==="text"&&i.type==="text"?(i.raw+=e.raw,i.text+=e.text):n.push(e);continue}if(e=this.tokenizer.link(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(e.raw.length),i=n[n.length-1],i&&e.type==="text"&&i.type==="text"?(i.raw+=e.raw,i.text+=e.text):n.push(e);continue}if(e=this.tokenizer.emStrong(t,s,p)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.codespan(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.br(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.del(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.autolink(t)){t=t.substring(e.raw.length),n.push(e);continue}if(!this.state.inLink&&(e=this.tokenizer.url(t))){t=t.substring(e.raw.length),n.push(e);continue}if(r=t,this.options.extensions&&this.options.extensions.startInline){let c=1/0,u=t.slice(1),h;this.options.extensions.startInline.forEach(g=>{h=g.call({lexer:this},u),typeof h=="number"&&h>=0&&(c=Math.min(c,h))}),c<1/0&&c>=0&&(r=t.substring(0,c+1))}if(e=this.tokenizer.inlineText(r)){t=t.substring(e.raw.length),e.raw.slice(-1)!=="_"&&(p=e.raw.slice(-1)),l=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=e.raw,i.text+=e.text):n.push(e);continue}if(t){let c="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return n}},E=class{options;constructor(t){this.options=t||I}code(t,n,e){let i=(n||"").match(/^\S*/)?.[0];return t=t.replace(/\n$/,"")+`
`,i?'<pre><code class="language-'+b(i)+'">'+(e?t:b(t,!0))+`</code></pre>
`:"<pre><code>"+(e?t:b(t,!0))+`</code></pre>
`}blockquote(t){return`<blockquote>
${t}</blockquote>
`}html(t,n){return t}heading(t,n,e){return`<h${n}>${t}</h${n}>
`}hr(){return`<hr>
`}list(t,n,e){let i=n?"ol":"ul",r=n&&e!==1?' start="'+e+'"':"";return"<"+i+r+`>
`+t+"</"+i+`>
`}listitem(t,n,e){return`<li>${t}</li>
`}checkbox(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(t){return`<p>${t}</p>
`}table(t,n){return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+n+`</table>
`}tablerow(t){return`<tr>
${t}</tr>
`}tablecell(t,n){let e=n.header?"th":"td";return(n.align?`<${e} align="${n.align}">`:`<${e}>`)+t+`</${e}>
`}strong(t){return`<strong>${t}</strong>`}em(t){return`<em>${t}</em>`}codespan(t){return`<code>${t}</code>`}br(){return"<br>"}del(t){return`<del>${t}</del>`}link(t,n,e){let i=pe(t);if(i===null)return e;t=i;let r='<a href="'+t+'"';return n&&(r+=' title="'+n+'"'),r+=">"+e+"</a>",r}image(t,n,e){let i=pe(t);if(i===null)return e;t=i;let r=`<img src="${t}" alt="${e}"`;return n&&(r+=` title="${n}"`),r+=">",r}text(t){return t}},F=class{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,n,e){return""+e}image(t,n,e){return""+e}br(){return""}},R=class a{options;renderer;textRenderer;constructor(t){this.options=t||I,this.options.renderer=this.options.renderer||new E,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new F}static parse(t,n){return new a(n).parse(t)}static parseInline(t,n){return new a(n).parseInline(t)}parse(t,n=!0){let e="";for(let i=0;i<t.length;i++){let r=t[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]){let s=r,o=this.options.extensions.renderers[s.type].call({parser:this},s);if(o!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(s.type)){e+=o||"";continue}}switch(r.type){case"space":continue;case"hr":{e+=this.renderer.hr();continue}case"heading":{let s=r;e+=this.renderer.heading(this.parseInline(s.tokens),s.depth,Le(this.parseInline(s.tokens,this.textRenderer)));continue}case"code":{let s=r;e+=this.renderer.code(s.text,s.lang,!!s.escaped);continue}case"table":{let s=r,o="",l="";for(let c=0;c<s.header.length;c++)l+=this.renderer.tablecell(this.parseInline(s.header[c].tokens),{header:!0,align:s.align[c]});o+=this.renderer.tablerow(l);let p="";for(let c=0;c<s.rows.length;c++){let u=s.rows[c];l="";for(let h=0;h<u.length;h++)l+=this.renderer.tablecell(this.parseInline(u[h].tokens),{header:!1,align:s.align[h]});p+=this.renderer.tablerow(l)}e+=this.renderer.table(o,p);continue}case"blockquote":{let s=r,o=this.parse(s.tokens);e+=this.renderer.blockquote(o);continue}case"list":{let s=r,o=s.ordered,l=s.start,p=s.loose,c="";for(let u=0;u<s.items.length;u++){let h=s.items[u],g=h.checked,y=h.task,d="";if(h.task){let $=this.renderer.checkbox(!!g);p?h.tokens.length>0&&h.tokens[0].type==="paragraph"?(h.tokens[0].text=$+" "+h.tokens[0].text,h.tokens[0].tokens&&h.tokens[0].tokens.length>0&&h.tokens[0].tokens[0].type==="text"&&(h.tokens[0].tokens[0].text=$+" "+h.tokens[0].tokens[0].text)):h.tokens.unshift({type:"text",text:$+" "}):d+=$+" "}d+=this.parse(h.tokens,p),c+=this.renderer.listitem(d,y,!!g)}e+=this.renderer.list(c,o,l);continue}case"html":{let s=r;e+=this.renderer.html(s.text,s.block);continue}case"paragraph":{let s=r;e+=this.renderer.paragraph(this.parseInline(s.tokens));continue}case"text":{let s=r,o=s.tokens?this.parseInline(s.tokens):s.text;for(;i+1<t.length&&t[i+1].type==="text";)s=t[++i],o+=`
`+(s.tokens?this.parseInline(s.tokens):s.text);e+=n?this.renderer.paragraph(o):o;continue}default:{let s='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return e}parseInline(t,n){n=n||this.renderer;let e="";for(let i=0;i<t.length;i++){let r=t[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]){let s=this.options.extensions.renderers[r.type].call({parser:this},r);if(s!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)){e+=s||"";continue}}switch(r.type){case"escape":{let s=r;e+=n.text(s.text);break}case"html":{let s=r;e+=n.html(s.text);break}case"link":{let s=r;e+=n.link(s.href,s.title,this.parseInline(s.tokens,n));break}case"image":{let s=r;e+=n.image(s.href,s.title,s.text);break}case"strong":{let s=r;e+=n.strong(this.parseInline(s.tokens,n));break}case"em":{let s=r;e+=n.em(this.parseInline(s.tokens,n));break}case"codespan":{let s=r;e+=n.codespan(s.text);break}case"br":{e+=n.br();break}case"del":{let s=r;e+=n.del(this.parseInline(s.tokens,n));break}case"text":{let s=r;e+=n.text(s.text);break}default:{let s='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return e}},C=class{options;constructor(t){this.options=t||I}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}},J=class{defaults=K();options=this.setOptions;parse=this.#e(T.lex,R.parse);parseInline=this.#e(T.lexInline,R.parseInline);Parser=R;Renderer=E;TextRenderer=F;Lexer=T;Tokenizer=P;Hooks=C;constructor(...t){this.use(...t)}walkTokens(t,n){let e=[];for(let i of t)switch(e=e.concat(n.call(this,i)),i.type){case"table":{let r=i;for(let s of r.header)e=e.concat(this.walkTokens(s.tokens,n));for(let s of r.rows)for(let o of s)e=e.concat(this.walkTokens(o.tokens,n));break}case"list":{let r=i;e=e.concat(this.walkTokens(r.items,n));break}default:{let r=i;this.defaults.extensions?.childTokens?.[r.type]?this.defaults.extensions.childTokens[r.type].forEach(s=>{let o=r[s].flat(1/0);e=e.concat(this.walkTokens(o,n))}):r.tokens&&(e=e.concat(this.walkTokens(r.tokens,n)))}}return e}use(...t){let n=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(e=>{let i=x({},e);if(i.async=this.defaults.async||i.async||!1,e.extensions&&(e.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){let s=n.renderers[r.name];s?n.renderers[r.name]=function(...o){let l=r.renderer.apply(this,o);return l===!1&&(l=s.apply(this,o)),l}:n.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let s=n[r.level];s?s.unshift(r.tokenizer):n[r.level]=[r.tokenizer],r.start&&(r.level==="block"?n.startBlock?n.startBlock.push(r.start):n.startBlock=[r.start]:r.level==="inline"&&(n.startInline?n.startInline.push(r.start):n.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(n.childTokens[r.name]=r.childTokens)}),i.extensions=n),e.renderer){let r=this.defaults.renderer||new E(this.defaults);for(let s in e.renderer){if(!(s in r))throw new Error(`renderer '${s}' does not exist`);if(s==="options")continue;let o=s,l=e.renderer[o],p=r[o];r[o]=(...c)=>{let u=l.apply(r,c);return u===!1&&(u=p.apply(r,c)),u||""}}i.renderer=r}if(e.tokenizer){let r=this.defaults.tokenizer||new P(this.defaults);for(let s in e.tokenizer){if(!(s in r))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;let o=s,l=e.tokenizer[o],p=r[o];r[o]=(...c)=>{let u=l.apply(r,c);return u===!1&&(u=p.apply(r,c)),u}}i.tokenizer=r}if(e.hooks){let r=this.defaults.hooks||new C;for(let s in e.hooks){if(!(s in r))throw new Error(`hook '${s}' does not exist`);if(s==="options")continue;let o=s,l=e.hooks[o],p=r[o];C.passThroughHooks.has(s)?r[o]=c=>{if(this.defaults.async)return Promise.resolve(l.call(r,c)).then(h=>p.call(r,h));let u=l.call(r,c);return p.call(r,u)}:r[o]=(...c)=>{let u=l.apply(r,c);return u===!1&&(u=p.apply(r,c)),u}}i.hooks=r}if(e.walkTokens){let r=this.defaults.walkTokens,s=e.walkTokens;i.walkTokens=function(o){let l=[];return l.push(s.call(this,o)),r&&(l=l.concat(r.call(this,o))),l}}this.defaults=x(x({},this.defaults),i)}),this}setOptions(t){return this.defaults=x(x({},this.defaults),t),this}lexer(t,n){return T.lex(t,n??this.defaults)}parser(t,n){return R.parse(t,n??this.defaults)}#e(t,n){return(e,i)=>{let r=x({},i),s=x(x({},this.defaults),r);this.defaults.async===!0&&r.async===!1&&(s.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),s.async=!0);let o=this.#t(!!s.silent,!!s.async);if(typeof e>"u"||e===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(s.hooks&&(s.hooks.options=s),s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(e):e).then(l=>t(l,s)).then(l=>s.hooks?s.hooks.processAllTokens(l):l).then(l=>s.walkTokens?Promise.all(this.walkTokens(l,s.walkTokens)).then(()=>l):l).then(l=>n(l,s)).then(l=>s.hooks?s.hooks.postprocess(l):l).catch(o);try{s.hooks&&(e=s.hooks.preprocess(e));let l=t(e,s);s.hooks&&(l=s.hooks.processAllTokens(l)),s.walkTokens&&this.walkTokens(l,s.walkTokens);let p=n(l,s);return s.hooks&&(p=s.hooks.postprocess(p)),p}catch(l){return o(l)}}}#t(t,n){return e=>{if(e.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let i="<p>An error occurred:</p><pre>"+b(e.message+"",!0)+"</pre>";return n?Promise.resolve(i):i}if(n)return Promise.reject(e);throw e}}},S=new J;function f(a,t){return S.parse(a,t)}f.options=f.setOptions=function(a){return S.setOptions(a),f.defaults=S.defaults,ke(f.defaults),f};f.getDefaults=K;f.defaults=I;f.use=function(...a){return S.use(...a),f.defaults=S.defaults,ke(f.defaults),f};f.walkTokens=function(a,t){return S.walkTokens(a,t)};f.parseInline=S.parseInline;f.Parser=R;f.parser=R.parse;f.Renderer=E;f.TextRenderer=F;f.Lexer=T;f.lexer=T.lex;f.Tokenizer=P;f.Hooks=C;f.parse=f;var at=f.options,ct=f.setOptions,ht=f.use,pt=f.walkTokens,ut=f.parseInline;var ft=R.parse,gt=T.lex;var ze=(()=>{let t=class t{extractYamlHeader(e){let r=/^---([\s\S]*?)---/gm.exec(e);if(r&&r.length>1){let s=r[1];return ce(s)}else return null}extractBody(e){let r=/^---([\s\S]*?)---/gm.exec(e);return r&&r.length>1?e.substring(r[0].length).trim():e.trim()}parseMarkdown(e){return A(this,null,function*(){class i extends f.Renderer{link(o,l,p){return`<a href="${o}" title="${l||""}" target="_blank">${p}</a>`}}return yield f.setOptions({renderer:new i}).parse(e)})}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=Q({token:t,factory:t.\u0275fac,providedIn:"root"});let a=t;return a})();var Lt=(()=>{let t=class t{constructor(){this.http=L(le),this.transferState=L(re),this.markdownS=L(ze),this.languageS=L(ae),this.platformId=L(ie),this.baseUrl="/"}getPost(e){return A(this,null,function*(){this.post=this.loadPostFromTransfareState(e);let i=this.languageS.userLanguage;return this.post||(this.post=yield this.loadFromMarkdownFile(e,i)),this.post?(this.savePostTransfereState(e),this.post):null})}savePostTransfereState(e){let i="post-"+this.languageS.userLanguage+"-"+e;this.transferState.set(i,this.post)}loadPostFromTransfareState(e){if(oe(this.platformId))return null;let i="post-"+this.languageS.userLanguage+"-"+e;return this.transferState.get(i,null)}loadFromMarkdownFile(e,i){return A(this,null,function*(){let r=`${this.baseUrl}assets/posts/${i}/${e}.md`;try{let s=yield G(this.http.get(r,{responseType:"text"})),o=this.markdownS.extractYamlHeader(s),l=this.markdownS.extractBody(s),p=yield this.markdownS.parseMarkdown(l);return new q(o,e,this.languageS.userLanguage,p)}catch(s){return console.error(s),s.status===404&&i!=="en"?this.loadFromMarkdownFile(e,"en"):null}})}loadPostList(c){return A(this,arguments,function*(e,i=1,r=10,s="desc",o="date",l=[],p=""){let u=`${this.baseUrl}assets/posts/posts.${e}.json`;try{let h=yield G(this.http.get(u,{responseType:"text"})),y=JSON.parse(h).filter(m=>!m.hideInFeed&&(l.length===0||l.some(z=>m.keywords.some(w=>w.includes(z))))&&(p===""||m.postMeta.title&&m.postMeta.title.includes(p))),d=[];for(let m of y)d.push(new q(m,m.fileName,this.languageS.userLanguage));d.sort((m,z)=>{let w,M;return o==="date"?(w=new Date(m.postMeta?.date??0).getTime(),M=new Date(z.postMeta?.date??0).getTime()):o==="title"?(w=m.postMeta?.title?.toLowerCase()??"",M=z.postMeta?.title?.toLowerCase()??""):(w="",M=""),w<M?s==="asc"?-1:1:w>M?s==="asc"?1:-1:0});let $=(i-1)*r,v=d.slice($,$+r),O=Math.ceil(d.length/r);return{posts:v,totalPages:O}}catch(h){return console.error(h),h.status===404&&e!=="en"?this.loadPostList("en",i,r,s,o,l,p):null}})}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=Q({token:t,factory:t.\u0275fac,providedIn:"root"});let a=t;return a})();export{Lt as a};