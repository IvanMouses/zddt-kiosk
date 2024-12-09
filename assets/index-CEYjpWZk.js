import{g as yn,R as Vt}from"./index-CKr5CPvm.js";function lt(a,t){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);t&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),n.push.apply(n,e)}return n}function u(a){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?lt(Object(n),!0).forEach(function(e){C(a,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):lt(Object(n)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))})}return a}function wa(a){"@babel/helpers - typeof";return wa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wa(a)}function kn(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function ut(a,t){for(var n=0;n<t.length;n++){var e=t[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}function xn(a,t,n){return t&&ut(a.prototype,t),n&&ut(a,n),Object.defineProperty(a,"prototype",{writable:!1}),a}function C(a,t,n){return t in a?Object.defineProperty(a,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[t]=n,a}function Qa(a,t){return An(a)||On(a,t)||Rt(a,t)||Pn()}function ca(a){return wn(a)||Cn(a)||Rt(a)||Sn()}function wn(a){if(Array.isArray(a))return Va(a)}function An(a){if(Array.isArray(a))return a}function Cn(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function On(a,t){var n=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(n!=null){var e=[],r=!0,i=!1,o,s;try{for(n=n.call(a);!(r=(o=n.next()).done)&&(e.push(o.value),!(t&&e.length===t));r=!0);}catch(c){i=!0,s=c}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return e}}function Rt(a,t){if(a){if(typeof a=="string")return Va(a,t);var n=Object.prototype.toString.call(a).slice(8,-1);if(n==="Object"&&a.constructor&&(n=a.constructor.name),n==="Map"||n==="Set")return Array.from(a);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Va(a,t)}}function Va(a,t){(t==null||t>a.length)&&(t=a.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=a[n];return e}function Sn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var mt=function(){},Ja={},jt={},Ft=null,Dt={mark:mt,measure:mt};try{typeof window<"u"&&(Ja=window),typeof document<"u"&&(jt=document),typeof MutationObserver<"u"&&(Ft=MutationObserver),typeof performance<"u"&&(Dt=performance)}catch{}var zn=Ja.navigator||{},vt=zn.userAgent,dt=vt===void 0?"":vt,j=Ja,h=jt,pt=Ft,ua=Dt;j.document;var _=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",Yt=~dt.indexOf("MSIE")||~dt.indexOf("Trident/"),ma,va,da,pa,ba,L="___FONT_AWESOME___",Ra=16,$t="fa",Ut="svg-inline--fa",G="data-fa-i2svg",ja="data-fa-pseudo-element",Nn="data-fa-pseudo-element-pending",Za="data-prefix",at="data-icon",bt="fontawesome-i2svg",Mn="async",En=["HTML","HEAD","STYLE","SCRIPT"],Wt=function(){try{return!0}catch{return!1}}(),g="classic",y="sharp",tt=[g,y];function fa(a){return new Proxy(a,{get:function(n,e){return e in n?n[e]:n[g]}})}var ea=fa((ma={},C(ma,g,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),C(ma,y,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),ma)),ra=fa((va={},C(va,g,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),C(va,y,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),va)),ia=fa((da={},C(da,g,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),C(da,y,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),da)),Ln=fa((pa={},C(pa,g,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),C(pa,y,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),pa)),In=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Gt="fa-layers-text",Tn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,_n=fa((ba={},C(ba,g,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),C(ba,y,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),ba)),Xt=[1,2,3,4,5,6,7,8,9,10],Hn=Xt.concat([11,12,13,14,15,16,17,18,19,20]),Vn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],U={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},oa=new Set;Object.keys(ra[g]).map(oa.add.bind(oa));Object.keys(ra[y]).map(oa.add.bind(oa));var Rn=[].concat(tt,ca(oa),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",U.GROUP,U.SWAP_OPACITY,U.PRIMARY,U.SECONDARY]).concat(Xt.map(function(a){return"".concat(a,"x")})).concat(Hn.map(function(a){return"w-".concat(a)})),ta=j.FontAwesomeConfig||{};function jn(a){var t=h.querySelector("script["+a+"]");if(t)return t.getAttribute(a)}function Fn(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}if(h&&typeof h.querySelector=="function"){var Dn=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Dn.forEach(function(a){var t=Qa(a,2),n=t[0],e=t[1],r=Fn(jn(n));r!=null&&(ta[e]=r)})}var Bt={styleDefault:"solid",familyDefault:"classic",cssPrefix:$t,replacementClass:Ut,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ta.familyPrefix&&(ta.cssPrefix=ta.familyPrefix);var J=u(u({},Bt),ta);J.autoReplaceSvg||(J.observeMutations=!1);var v={};Object.keys(Bt).forEach(function(a){Object.defineProperty(v,a,{enumerable:!0,set:function(n){J[a]=n,na.forEach(function(e){return e(v)})},get:function(){return J[a]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(t){J.cssPrefix=t,na.forEach(function(n){return n(v)})},get:function(){return J.cssPrefix}});j.FontAwesomeConfig=v;var na=[];function Yn(a){return na.push(a),function(){na.splice(na.indexOf(a),1)}}var V=Ra,E={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function $n(a){if(!(!a||!_)){var t=h.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=a;for(var n=h.head.childNodes,e=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=i)}return h.head.insertBefore(t,e),a}}var Un="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function sa(){for(var a=12,t="";a-- >0;)t+=Un[Math.random()*62|0];return t}function Z(a){for(var t=[],n=(a||[]).length>>>0;n--;)t[n]=a[n];return t}function nt(a){return a.classList?Z(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(t){return t})}function qt(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Wn(a){return Object.keys(a||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(qt(a[n]),'" ')},"").trim()}function Sa(a){return Object.keys(a||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(a[n].trim(),";")},"")}function et(a){return a.size!==E.size||a.x!==E.x||a.y!==E.y||a.rotate!==E.rotate||a.flipX||a.flipY}function Gn(a){var t=a.transform,n=a.containerWidth,e=a.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:c,path:f}}function Xn(a){var t=a.transform,n=a.width,e=n===void 0?Ra:n,r=a.height,i=r===void 0?Ra:r,o=a.startCentered,s=o===void 0?!1:o,c="";return s&&Yt?c+="translate(".concat(t.x/V-e/2,"em, ").concat(t.y/V-i/2,"em) "):s?c+="translate(calc(-50% + ".concat(t.x/V,"em), calc(-50% + ").concat(t.y/V,"em)) "):c+="translate(".concat(t.x/V,"em, ").concat(t.y/V,"em) "),c+="scale(".concat(t.size/V*(t.flipX?-1:1),", ").concat(t.size/V*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var Bn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
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
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
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
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
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
  left: calc(var(--fa-li-width, 2em) * -1);
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
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
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
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
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
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Kt(){var a=$t,t=Ut,n=v.cssPrefix,e=v.replacementClass,r=Bn;if(n!==a||e!==t){var i=new RegExp("\\.".concat(a,"\\-"),"g"),o=new RegExp("\\--".concat(a,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(e))}return r}var gt=!1;function La(){v.autoAddCss&&!gt&&($n(Kt()),gt=!0)}var qn={mixout:function(){return{dom:{css:Kt,insertCss:La}}},hooks:function(){return{beforeDOMElementCreation:function(){La()},beforeI2svg:function(){La()}}}},I=j||{};I[L]||(I[L]={});I[L].styles||(I[L].styles={});I[L].hooks||(I[L].hooks={});I[L].shims||(I[L].shims=[]);var M=I[L],Qt=[],Kn=function a(){h.removeEventListener("DOMContentLoaded",a),Aa=1,Qt.map(function(t){return t()})},Aa=!1;_&&(Aa=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),Aa||h.addEventListener("DOMContentLoaded",Kn));function Qn(a){_&&(Aa?setTimeout(a,0):Qt.push(a))}function la(a){var t=a.tag,n=a.attributes,e=n===void 0?{}:n,r=a.children,i=r===void 0?[]:r;return typeof a=="string"?qt(a):"<".concat(t," ").concat(Wn(e),">").concat(i.map(la).join(""),"</").concat(t,">")}function ht(a,t,n){if(a&&a[t]&&a[t][n])return{prefix:t,iconName:n,icon:a[t][n]}}var Jn=function(t,n){return function(e,r,i,o){return t.call(n,e,r,i,o)}},Ia=function(t,n,e,r){var i=Object.keys(t),o=i.length,s=r!==void 0?Jn(n,r):n,c,f,l;for(e===void 0?(c=1,l=t[i[0]]):(c=0,l=e);c<o;c++)f=i[c],l=s(l,t[f],f,t);return l};function Zn(a){for(var t=[],n=0,e=a.length;n<e;){var r=a.charCodeAt(n++);if(r>=55296&&r<=56319&&n<e){var i=a.charCodeAt(n++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function Fa(a){var t=Zn(a);return t.length===1?t[0].toString(16):null}function ae(a,t){var n=a.length,e=a.charCodeAt(t),r;return e>=55296&&e<=56319&&n>t+1&&(r=a.charCodeAt(t+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function yt(a){return Object.keys(a).reduce(function(t,n){var e=a[n],r=!!e.icon;return r?t[e.iconName]=e.icon:t[n]=e,t},{})}function Da(a,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=n.skipHooks,r=e===void 0?!1:e,i=yt(t);typeof M.hooks.addPack=="function"&&!r?M.hooks.addPack(a,yt(t)):M.styles[a]=u(u({},M.styles[a]||{}),i),a==="fas"&&Da("fa",t)}var ga,ha,ya,B=M.styles,te=M.shims,ne=(ga={},C(ga,g,Object.values(ia[g])),C(ga,y,Object.values(ia[y])),ga),rt=null,Jt={},Zt={},an={},tn={},nn={},ee=(ha={},C(ha,g,Object.keys(ea[g])),C(ha,y,Object.keys(ea[y])),ha);function re(a){return~Rn.indexOf(a)}function ie(a,t){var n=t.split("-"),e=n[0],r=n.slice(1).join("-");return e===a&&r!==""&&!re(r)?r:null}var en=function(){var t=function(i){return Ia(B,function(o,s,c){return o[c]=Ia(s,i,{}),o},{})};Jt=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(c){return typeof c=="number"});s.forEach(function(c){r[c.toString(16)]=o})}return r}),Zt=t(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(c){return typeof c=="string"});s.forEach(function(c){r[c]=o})}return r}),nn=t(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(c){r[c]=o}),r});var n="far"in B||v.autoFetchSvg,e=Ia(te,function(r,i){var o=i[0],s=i[1],c=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:c}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:c}),r},{names:{},unicodes:{}});an=e.names,tn=e.unicodes,rt=Pa(v.styleDefault,{family:v.familyDefault})};Yn(function(a){rt=Pa(a.styleDefault,{family:v.familyDefault})});en();function it(a,t){return(Jt[a]||{})[t]}function oe(a,t){return(Zt[a]||{})[t]}function W(a,t){return(nn[a]||{})[t]}function rn(a){return an[a]||{prefix:null,iconName:null}}function se(a){var t=tn[a],n=it("fas",a);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function F(){return rt}var ot=function(){return{prefix:null,iconName:null,rest:[]}};function Pa(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,e=n===void 0?g:n,r=ea[e][a],i=ra[e][a]||ra[e][r],o=a in M.styles?a:null;return i||o||null}var kt=(ya={},C(ya,g,Object.keys(ia[g])),C(ya,y,Object.keys(ia[y])),ya);function za(a){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.skipLookups,r=e===void 0?!1:e,i=(t={},C(t,g,"".concat(v.cssPrefix,"-").concat(g)),C(t,y,"".concat(v.cssPrefix,"-").concat(y)),t),o=null,s=g;(a.includes(i[g])||a.some(function(f){return kt[g].includes(f)}))&&(s=g),(a.includes(i[y])||a.some(function(f){return kt[y].includes(f)}))&&(s=y);var c=a.reduce(function(f,l){var m=ie(v.cssPrefix,l);if(B[l]?(l=ne[s].includes(l)?Ln[s][l]:l,o=l,f.prefix=l):ee[s].indexOf(l)>-1?(o=l,f.prefix=Pa(l,{family:s})):m?f.iconName=m:l!==v.replacementClass&&l!==i[g]&&l!==i[y]&&f.rest.push(l),!r&&f.prefix&&f.iconName){var d=o==="fa"?rn(f.iconName):{},b=W(f.prefix,f.iconName);d.prefix&&(o=null),f.iconName=d.iconName||b||f.iconName,f.prefix=d.prefix||f.prefix,f.prefix==="far"&&!B.far&&B.fas&&!v.autoFetchSvg&&(f.prefix="fas")}return f},ot());return(a.includes("fa-brands")||a.includes("fab"))&&(c.prefix="fab"),(a.includes("fa-duotone")||a.includes("fad"))&&(c.prefix="fad"),!c.prefix&&s===y&&(B.fass||v.autoFetchSvg)&&(c.prefix="fass",c.iconName=W(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=F()||"fas"),c}var ce=function(){function a(){kn(this,a),this.definitions={}}return xn(a,[{key:"add",value:function(){for(var n=this,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=u(u({},n.definitions[s]||{}),o[s]),Da(s,o[s]);var c=ia[g][s];c&&Da(c,o[s]),en()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,c=o.iconName,f=o.icon,l=f[2];n[s]||(n[s]={}),l.length>0&&l.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][c]=f}),n}}]),a}(),xt=[],q={},Q={},fe=Object.keys(Q);function le(a,t){var n=t.mixoutsTo;return xt=a,q={},Object.keys(Q).forEach(function(e){fe.indexOf(e)===-1&&delete Q[e]}),xt.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),wa(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(o){q[o]||(q[o]=[]),q[o].push(i[o])})}e.provides&&e.provides(Q)}),n}function Ya(a,t){for(var n=arguments.length,e=new Array(n>2?n-2:0),r=2;r<n;r++)e[r-2]=arguments[r];var i=q[a]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(e))}),t}function X(a){for(var t=arguments.length,n=new Array(t>1?t-1:0),e=1;e<t;e++)n[e-1]=arguments[e];var r=q[a]||[];r.forEach(function(i){i.apply(null,n)})}function T(){var a=arguments[0],t=Array.prototype.slice.call(arguments,1);return Q[a]?Q[a].apply(null,t):void 0}function $a(a){a.prefix==="fa"&&(a.prefix="fas");var t=a.iconName,n=a.prefix||F();if(t)return t=W(n,t)||t,ht(on.definitions,n,t)||ht(M.styles,n,t)}var on=new ce,ue=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,X("noAuto")},me={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return _?(X("beforeI2svg",t),T("pseudoElements2svg",t),T("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,Qn(function(){de({autoReplaceSvgRoot:n}),X("watch",t)})}},ve={icon:function(t){if(t===null)return null;if(wa(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:W(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],e=Pa(t[0]);return{prefix:e,iconName:W(e,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(v.cssPrefix,"-"))>-1||t.match(In))){var r=za(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||F(),iconName:W(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=F();return{prefix:i,iconName:W(i,t)||t}}}},N={noAuto:ue,config:v,dom:me,parse:ve,library:on,findIconDefinition:$a,toHtml:la},de=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,e=n===void 0?h:n;(Object.keys(M.styles).length>0||v.autoFetchSvg)&&_&&v.autoReplaceSvg&&N.dom.i2svg({node:e})};function Na(a,t){return Object.defineProperty(a,"abstract",{get:t}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(e){return la(e)})}}),Object.defineProperty(a,"node",{get:function(){if(_){var e=h.createElement("div");return e.innerHTML=a.html,e.children}}}),a}function pe(a){var t=a.children,n=a.main,e=a.mask,r=a.attributes,i=a.styles,o=a.transform;if(et(o)&&n.found&&!e.found){var s=n.width,c=n.height,f={x:s/c/2,y:.5};r.style=Sa(u(u({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function be(a){var t=a.prefix,n=a.iconName,e=a.children,r=a.attributes,i=a.symbol,o=i===!0?"".concat(t,"-").concat(v.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:e}]}]}function st(a){var t=a.icons,n=t.main,e=t.mask,r=a.prefix,i=a.iconName,o=a.transform,s=a.symbol,c=a.title,f=a.maskId,l=a.titleId,m=a.extra,d=a.watchable,b=d===void 0?!1:d,w=e.found?e:n,S=w.width,k=w.height,P=r==="fak",x=[v.replacementClass,i?"".concat(v.cssPrefix,"-").concat(i):""].filter(function(H){return m.classes.indexOf(H)===-1}).filter(function(H){return H!==""||!!H}).concat(m.classes).join(" "),A={children:[],attributes:u(u({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:x,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(k)})},z=P&&!~m.classes.indexOf("fa-fw")?{width:"".concat(S/k*16*.0625,"em")}:{};b&&(A.attributes[G]=""),c&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(l||sa())},children:[c]}),delete A.attributes.title);var O=u(u({},A),{},{prefix:r,iconName:i,main:n,mask:e,maskId:f,transform:o,symbol:s,styles:u(u({},z),m.styles)}),Y=e.found&&n.found?T("generateAbstractMask",O)||{children:[],attributes:{}}:T("generateAbstractIcon",O)||{children:[],attributes:{}},$=Y.children,Ea=Y.attributes;return O.children=$,O.attributes=Ea,s?be(O):pe(O)}function wt(a){var t=a.content,n=a.width,e=a.height,r=a.transform,i=a.title,o=a.extra,s=a.watchable,c=s===void 0?!1:s,f=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});c&&(f[G]="");var l=u({},o.styles);et(r)&&(l.transform=Xn({transform:r,startCentered:!0,width:n,height:e}),l["-webkit-transform"]=l.transform);var m=Sa(l);m.length>0&&(f.style=m);var d=[];return d.push({tag:"span",attributes:f,children:[t]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function ge(a){var t=a.content,n=a.title,e=a.extra,r=u(u(u({},e.attributes),n?{title:n}:{}),{},{class:e.classes.join(" ")}),i=Sa(e.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ta=M.styles;function Ua(a){var t=a[0],n=a[1],e=a.slice(4),r=Qa(e,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(U.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(U.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(U.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var he={found:!1,width:512,height:512};function ye(a,t){!Wt&&!v.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(t,'" is missing.'))}function Wa(a,t){var n=t;return t==="fa"&&v.styleDefault!==null&&(t=F()),new Promise(function(e,r){if(T("missingIconAbstract"),n==="fa"){var i=rn(a)||{};a=i.iconName||a,t=i.prefix||t}if(a&&t&&Ta[t]&&Ta[t][a]){var o=Ta[t][a];return e(Ua(o))}ye(a,t),e(u(u({},he),{},{icon:v.showMissingIcons&&a?T("missingIconAbstract")||{}:{}}))})}var At=function(){},Ga=v.measurePerformance&&ua&&ua.mark&&ua.measure?ua:{mark:At,measure:At},aa='FA "6.5.2"',ke=function(t){return Ga.mark("".concat(aa," ").concat(t," begins")),function(){return sn(t)}},sn=function(t){Ga.mark("".concat(aa," ").concat(t," ends")),Ga.measure("".concat(aa," ").concat(t),"".concat(aa," ").concat(t," begins"),"".concat(aa," ").concat(t," ends"))},ct={begin:ke,end:sn},ka=function(){};function Ct(a){var t=a.getAttribute?a.getAttribute(G):null;return typeof t=="string"}function xe(a){var t=a.getAttribute?a.getAttribute(Za):null,n=a.getAttribute?a.getAttribute(at):null;return t&&n}function we(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(v.replacementClass)}function Ae(){if(v.autoReplaceSvg===!0)return xa.replace;var a=xa[v.autoReplaceSvg];return a||xa.replace}function Ce(a){return h.createElementNS("http://www.w3.org/2000/svg",a)}function Oe(a){return h.createElement(a)}function cn(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,e=n===void 0?a.tag==="svg"?Ce:Oe:n;if(typeof a=="string")return h.createTextNode(a);var r=e(a.tag);Object.keys(a.attributes||[]).forEach(function(o){r.setAttribute(o,a.attributes[o])});var i=a.children||[];return i.forEach(function(o){r.appendChild(cn(o,{ceFn:e}))}),r}function Se(a){var t=" ".concat(a.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var xa={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(r){n.parentNode.insertBefore(cn(r),n)}),n.getAttribute(G)===null&&v.keepOriginalSource){var e=h.createComment(Se(n));n.parentNode.replaceChild(e,n)}else n.remove()},nest:function(t){var n=t[0],e=t[1];if(~nt(n).indexOf(v.replacementClass))return xa.replace(t);var r=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(" ").reduce(function(s,c){return c===v.replacementClass||c.match(r)?s.toSvg.push(c):s.toNode.push(c),s},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=e.map(function(s){return la(s)}).join(`
`);n.setAttribute(G,""),n.innerHTML=o}};function Ot(a){a()}function fn(a,t){var n=typeof t=="function"?t:ka;if(a.length===0)n();else{var e=Ot;v.mutateApproach===Mn&&(e=j.requestAnimationFrame||Ot),e(function(){var r=Ae(),i=ct.begin("mutate");a.map(r),i(),n()})}}var ft=!1;function ln(){ft=!0}function Xa(){ft=!1}var Ca=null;function St(a){if(pt&&v.observeMutations){var t=a.treeCallback,n=t===void 0?ka:t,e=a.nodeCallback,r=e===void 0?ka:e,i=a.pseudoElementsCallback,o=i===void 0?ka:i,s=a.observeMutationsRoot,c=s===void 0?h:s;Ca=new pt(function(f){if(!ft){var l=F();Z(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ct(m.addedNodes[0])&&(v.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&v.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ct(m.target)&&~Vn.indexOf(m.attributeName))if(m.attributeName==="class"&&xe(m.target)){var d=za(nt(m.target)),b=d.prefix,w=d.iconName;m.target.setAttribute(Za,b||l),w&&m.target.setAttribute(at,w)}else we(m.target)&&r(m.target)})}}),_&&Ca.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Pe(){Ca&&Ca.disconnect()}function ze(a){var t=a.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(e,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(e[o]=s.join(":").trim()),e},{})),n}function Ne(a){var t=a.getAttribute("data-prefix"),n=a.getAttribute("data-icon"),e=a.innerText!==void 0?a.innerText.trim():"",r=za(nt(a));return r.prefix||(r.prefix=F()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=oe(r.prefix,a.innerText)||it(r.prefix,Fa(a.innerText))),!r.iconName&&v.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=a.firstChild.data)),r}function Me(a){var t=Z(a.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=a.getAttribute("title"),e=a.getAttribute("data-fa-title-id");return v.autoA11y&&(n?t["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(e||sa()):(t["aria-hidden"]="true",t.focusable="false")),t}function Ee(){return{iconName:null,title:null,titleId:null,prefix:null,transform:E,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Pt(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ne(a),e=n.iconName,r=n.prefix,i=n.rest,o=Me(a),s=Ya("parseNodeAttributes",{},a),c=t.styleParser?ze(a):[];return u({iconName:e,title:a.getAttribute("title"),titleId:a.getAttribute("data-fa-title-id"),prefix:r,transform:E,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:c,attributes:o}},s)}var Le=M.styles;function un(a){var t=v.autoReplaceSvg==="nest"?Pt(a,{styleParser:!1}):Pt(a);return~t.extra.classes.indexOf(Gt)?T("generateLayersText",a,t):T("generateSvgReplacementMutation",a,t)}var D=new Set;tt.map(function(a){D.add("fa-".concat(a))});Object.keys(ea[g]).map(D.add.bind(D));Object.keys(ea[y]).map(D.add.bind(D));D=ca(D);function zt(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!_)return Promise.resolve();var n=h.documentElement.classList,e=function(m){return n.add("".concat(bt,"-").concat(m))},r=function(m){return n.remove("".concat(bt,"-").concat(m))},i=v.autoFetchSvg?D:tt.map(function(l){return"fa-".concat(l)}).concat(Object.keys(Le));i.includes("fa")||i.push("fa");var o=[".".concat(Gt,":not([").concat(G,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(G,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Z(a.querySelectorAll(o))}catch{}if(s.length>0)e("pending"),r("complete");else return Promise.resolve();var c=ct.begin("onTree"),f=s.reduce(function(l,m){try{var d=un(m);d&&l.push(d)}catch(b){Wt||b.name==="MissingIcon"&&console.error(b)}return l},[]);return new Promise(function(l,m){Promise.all(f).then(function(d){fn(d,function(){e("active"),e("complete"),r("pending"),typeof t=="function"&&t(),c(),l()})}).catch(function(d){c(),m(d)})})}function Ie(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;un(a).then(function(n){n&&fn([n],t)})}function Te(a){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(t||{}).icon?t:$a(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:$a(r||{})),a(e,u(u({},n),{},{mask:r}))}}var _e=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.transform,r=e===void 0?E:e,i=n.symbol,o=i===void 0?!1:i,s=n.mask,c=s===void 0?null:s,f=n.maskId,l=f===void 0?null:f,m=n.title,d=m===void 0?null:m,b=n.titleId,w=b===void 0?null:b,S=n.classes,k=S===void 0?[]:S,P=n.attributes,x=P===void 0?{}:P,A=n.styles,z=A===void 0?{}:A;if(t){var O=t.prefix,Y=t.iconName,$=t.icon;return Na(u({type:"icon"},t),function(){return X("beforeDOMElementCreation",{iconDefinition:t,params:n}),v.autoA11y&&(d?x["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(w||sa()):(x["aria-hidden"]="true",x.focusable="false")),st({icons:{main:Ua($),mask:c?Ua(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:Y,transform:u(u({},E),r),symbol:o,title:d,maskId:l,titleId:w,extra:{attributes:x,styles:z,classes:k}})})}},He={mixout:function(){return{icon:Te(_e)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=zt,n.nodeCallback=Ie,n}}},provides:function(t){t.i2svg=function(n){var e=n.node,r=e===void 0?h:e,i=n.callback,o=i===void 0?function(){}:i;return zt(r,o)},t.generateSvgReplacementMutation=function(n,e){var r=e.iconName,i=e.title,o=e.titleId,s=e.prefix,c=e.transform,f=e.symbol,l=e.mask,m=e.maskId,d=e.extra;return new Promise(function(b,w){Promise.all([Wa(r,s),l.iconName?Wa(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var k=Qa(S,2),P=k[0],x=k[1];b([n,st({icons:{main:P,mask:x},prefix:s,iconName:r,transform:c,symbol:f,maskId:m,title:i,titleId:o,extra:d,watchable:!0})])}).catch(w)})},t.generateAbstractIcon=function(n){var e=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,c=Sa(s);c.length>0&&(r.style=c);var f;return et(o)&&(f=T("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),e.push(f||i.icon),{children:e,attributes:r}}}},Ve={mixout:function(){return{layer:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,i=r===void 0?[]:r;return Na({type:"layer"},function(){X("beforeDOMElementCreation",{assembler:n,params:e});var o=[];return n(function(s){Array.isArray(s)?s.map(function(c){o=o.concat(c.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(ca(i)).join(" ")},children:o}]})}}}},Re={mixout:function(){return{counter:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,i=r===void 0?null:r,o=e.classes,s=o===void 0?[]:o,c=e.attributes,f=c===void 0?{}:c,l=e.styles,m=l===void 0?{}:l;return Na({type:"counter",content:n},function(){return X("beforeDOMElementCreation",{content:n,params:e}),ge({content:n.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(ca(s))}})})}}}},je={mixout:function(){return{text:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?E:r,o=e.title,s=o===void 0?null:o,c=e.classes,f=c===void 0?[]:c,l=e.attributes,m=l===void 0?{}:l,d=e.styles,b=d===void 0?{}:d;return Na({type:"text",content:n},function(){return X("beforeDOMElementCreation",{content:n,params:e}),wt({content:n,transform:u(u({},E),i),title:s,extra:{attributes:m,styles:b,classes:["".concat(v.cssPrefix,"-layers-text")].concat(ca(f))}})})}}},provides:function(t){t.generateLayersText=function(n,e){var r=e.title,i=e.transform,o=e.extra,s=null,c=null;if(Yt){var f=parseInt(getComputedStyle(n).fontSize,10),l=n.getBoundingClientRect();s=l.width/f,c=l.height/f}return v.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,wt({content:n.innerHTML,width:s,height:c,transform:i,title:r,extra:o,watchable:!0})])}}},Fe=new RegExp('"',"ug"),Nt=[1105920,1112319];function De(a){var t=a.replace(Fe,""),n=ae(t,0),e=n>=Nt[0]&&n<=Nt[1],r=t.length===2?t[0]===t[1]:!1;return{value:Fa(r?t[0]:t),isSecondary:e||r}}function Mt(a,t){var n="".concat(Nn).concat(t.replace(":","-"));return new Promise(function(e,r){if(a.getAttribute(n)!==null)return e();var i=Z(a.children),o=i.filter(function($){return $.getAttribute(ja)===t})[0],s=j.getComputedStyle(a,t),c=s.getPropertyValue("font-family").match(Tn),f=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(o&&!c)return a.removeChild(o),e();if(c&&l!=="none"&&l!==""){var m=s.getPropertyValue("content"),d=~["Sharp"].indexOf(c[2])?y:g,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?ra[d][c[2].toLowerCase()]:_n[d][f],w=De(m),S=w.value,k=w.isSecondary,P=c[0].startsWith("FontAwesome"),x=it(b,S),A=x;if(P){var z=se(S);z.iconName&&z.prefix&&(x=z.iconName,b=z.prefix)}if(x&&!k&&(!o||o.getAttribute(Za)!==b||o.getAttribute(at)!==A)){a.setAttribute(n,A),o&&a.removeChild(o);var O=Ee(),Y=O.extra;Y.attributes[ja]=t,Wa(x,b).then(function($){var Ea=st(u(u({},O),{},{icons:{main:$,mask:ot()},prefix:b,iconName:A,extra:Y,watchable:!0})),H=h.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?a.insertBefore(H,a.firstChild):a.appendChild(H),H.outerHTML=Ea.map(function(hn){return la(hn)}).join(`
`),a.removeAttribute(n),e()}).catch(r)}else e()}else e()})}function Ye(a){return Promise.all([Mt(a,"::before"),Mt(a,"::after")])}function $e(a){return a.parentNode!==document.head&&!~En.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(ja)&&(!a.parentNode||a.parentNode.tagName!=="svg")}function Et(a){if(_)return new Promise(function(t,n){var e=Z(a.querySelectorAll("*")).filter($e).map(Ye),r=ct.begin("searchPseudoElements");ln(),Promise.all(e).then(function(){r(),Xa(),t()}).catch(function(){r(),Xa(),n()})})}var Ue={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Et,n}}},provides:function(t){t.pseudoElements2svg=function(n){var e=n.node,r=e===void 0?h:e;v.searchPseudoElements&&Et(r)}}},Lt=!1,We={mixout:function(){return{dom:{unwatch:function(){ln(),Lt=!0}}}},hooks:function(){return{bootstrap:function(){St(Ya("mutationObserverCallbacks",{}))},noAuto:function(){Pe()},watch:function(n){var e=n.observeMutationsRoot;Lt?Xa():St(Ya("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},It=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(e,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return e.flipX=!0,e;if(o&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(o){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},n)},Ge={mixout:function(){return{parse:{transform:function(n){return It(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,e){var r=e.getAttribute("data-fa-transform");return r&&(n.transform=It(r)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var e=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(c," ").concat(f," ").concat(l)},d={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:m,path:d};return{tag:"g",attributes:u({},b.outer),children:[{tag:"g",attributes:u({},b.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:u(u({},e.icon.attributes),b.path)}]}]}}}},_a={x:0,y:0,width:"100%",height:"100%"};function Tt(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||t)&&(a.attributes.fill="black"),a}function Xe(a){return a.tag==="g"?a.children:[a]}var Be={hooks:function(){return{parseNodeAttributes:function(n,e){var r=e.getAttribute("data-fa-mask"),i=r?za(r.split(" ").map(function(o){return o.trim()})):ot();return i.prefix||(i.prefix=F()),n.mask=i,n.maskId=e.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var e=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,c=n.transform,f=i.width,l=i.icon,m=o.width,d=o.icon,b=Gn({transform:c,containerWidth:m,iconWidth:f}),w={tag:"rect",attributes:u(u({},_a),{},{fill:"white"})},S=l.children?{children:l.children.map(Tt)}:{},k={tag:"g",attributes:u({},b.inner),children:[Tt(u({tag:l.tag,attributes:u(u({},l.attributes),b.path)},S))]},P={tag:"g",attributes:u({},b.outer),children:[k]},x="mask-".concat(s||sa()),A="clip-".concat(s||sa()),z={tag:"mask",attributes:u(u({},_a),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,P]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:Xe(d)},z]};return e.push(O,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(x,")")},_a)}),{children:e,attributes:r}}}},qe={provides:function(t){var n=!1;j.matchMedia&&(n=j.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||e.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},Ke={hooks:function(){return{parseNodeAttributes:function(n,e){var r=e.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},Qe=[qn,He,Ve,Re,je,Ue,We,Ge,Be,qe,Ke];le(Qe,{mixoutsTo:N});N.noAuto;N.config;N.library;N.dom;var Ba=N.parse;N.findIconDefinition;N.toHtml;var Je=N.icon;N.layer;N.text;N.counter;var mn={exports:{}},Ze="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ar=Ze,tr=ar;function vn(){}function dn(){}dn.resetWarningCache=vn;var nr=function(){function a(e,r,i,o,s,c){if(c!==tr){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}a.isRequired=a;function t(){return a}var n={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:t,element:a,elementType:a,instanceOf:t,node:a,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:dn,resetWarningCache:vn};return n.PropTypes=n,n};mn.exports=nr();var er=mn.exports;const p=yn(er);function _t(a,t){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);t&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),n.push.apply(n,e)}return n}function R(a){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_t(Object(n),!0).forEach(function(e){K(a,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):_t(Object(n)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))})}return a}function Oa(a){"@babel/helpers - typeof";return Oa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Oa(a)}function K(a,t,n){return t in a?Object.defineProperty(a,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[t]=n,a}function rr(a,t){if(a==null)return{};var n={},e=Object.keys(a),r,i;for(i=0;i<e.length;i++)r=e[i],!(t.indexOf(r)>=0)&&(n[r]=a[r]);return n}function ir(a,t){if(a==null)return{};var n=rr(a,t),e,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(r=0;r<i.length;r++)e=i[r],!(t.indexOf(e)>=0)&&Object.prototype.propertyIsEnumerable.call(a,e)&&(n[e]=a[e])}return n}function qa(a){return or(a)||sr(a)||cr(a)||fr()}function or(a){if(Array.isArray(a))return Ka(a)}function sr(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function cr(a,t){if(a){if(typeof a=="string")return Ka(a,t);var n=Object.prototype.toString.call(a).slice(8,-1);if(n==="Object"&&a.constructor&&(n=a.constructor.name),n==="Map"||n==="Set")return Array.from(a);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ka(a,t)}}function Ka(a,t){(t==null||t>a.length)&&(t=a.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=a[n];return e}function fr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lr(a){var t,n=a.beat,e=a.fade,r=a.beatFade,i=a.bounce,o=a.shake,s=a.flash,c=a.spin,f=a.spinPulse,l=a.spinReverse,m=a.pulse,d=a.fixedWidth,b=a.inverse,w=a.border,S=a.listItem,k=a.flip,P=a.size,x=a.rotation,A=a.pull,z=(t={"fa-beat":n,"fa-fade":e,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":c,"fa-spin-reverse":l,"fa-spin-pulse":f,"fa-pulse":m,"fa-fw":d,"fa-inverse":b,"fa-border":w,"fa-li":S,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},K(t,"fa-".concat(P),typeof P<"u"&&P!==null),K(t,"fa-rotate-".concat(x),typeof x<"u"&&x!==null&&x!==0),K(t,"fa-pull-".concat(A),typeof A<"u"&&A!==null),K(t,"fa-swap-opacity",a.swapOpacity),t);return Object.keys(z).map(function(O){return z[O]?O:null}).filter(function(O){return O})}function ur(a){return a=a-0,a===a}function pn(a){return ur(a)?a:(a=a.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),a.substr(0,1).toLowerCase()+a.substr(1))}var mr=["style"];function vr(a){return a.charAt(0).toUpperCase()+a.slice(1)}function dr(a){return a.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var e=n.indexOf(":"),r=pn(n.slice(0,e)),i=n.slice(e+1).trim();return r.startsWith("webkit")?t[vr(r)]=i:t[r]=i,t},{})}function bn(a,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var e=(t.children||[]).map(function(c){return bn(a,c)}),r=Object.keys(t.attributes||{}).reduce(function(c,f){var l=t.attributes[f];switch(f){case"class":c.attrs.className=l,delete t.attributes.class;break;case"style":c.attrs.style=dr(l);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?c.attrs[f.toLowerCase()]=l:c.attrs[pn(f)]=l}return c},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=ir(n,mr);return r.attrs.style=R(R({},r.attrs.style),o),a.apply(void 0,[t.tag,R(R({},r.attrs),s)].concat(qa(e)))}var gn=!1;try{gn=!0}catch{}function pr(){if(!gn&&console&&typeof console.error=="function"){var a;(a=console).error.apply(a,arguments)}}function Ht(a){if(a&&Oa(a)==="object"&&a.prefix&&a.iconName&&a.icon)return a;if(Ba.icon)return Ba.icon(a);if(a===null)return null;if(a&&Oa(a)==="object"&&a.prefix&&a.iconName)return a;if(Array.isArray(a)&&a.length===2)return{prefix:a[0],iconName:a[1]};if(typeof a=="string")return{prefix:"fas",iconName:a}}function Ha(a,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?K({},a,t):{}}var Ma=Vt.forwardRef(function(a,t){var n=a.icon,e=a.mask,r=a.symbol,i=a.className,o=a.title,s=a.titleId,c=a.maskId,f=Ht(n),l=Ha("classes",[].concat(qa(lr(a)),qa(i.split(" ")))),m=Ha("transform",typeof a.transform=="string"?Ba.transform(a.transform):a.transform),d=Ha("mask",Ht(e)),b=Je(f,R(R(R(R({},l),m),d),{},{symbol:r,title:o,titleId:s,maskId:c}));if(!b)return pr("Could not find icon",f),null;var w=b.abstract,S={ref:t};return Object.keys(a).forEach(function(k){Ma.defaultProps.hasOwnProperty(k)||(S[k]=a[k])}),br(w[0],S)});Ma.displayName="FontAwesomeIcon";Ma.propTypes={beat:p.bool,border:p.bool,beatFade:p.bool,bounce:p.bool,className:p.string,fade:p.bool,flash:p.bool,mask:p.oneOfType([p.object,p.array,p.string]),maskId:p.string,fixedWidth:p.bool,inverse:p.bool,flip:p.oneOf([!0,!1,"horizontal","vertical","both"]),icon:p.oneOfType([p.object,p.array,p.string]),listItem:p.bool,pull:p.oneOf(["right","left"]),pulse:p.bool,rotation:p.oneOf([0,90,180,270]),shake:p.bool,size:p.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.bool,spinPulse:p.bool,spinReverse:p.bool,symbol:p.oneOfType([p.bool,p.string]),title:p.string,titleId:p.string,transform:p.oneOfType([p.string,p.object]),swapOpacity:p.bool};Ma.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var br=bn.bind(null,Vt.createElement),yr={prefix:"fas",iconName:"magnifying-glass-location",icon:[512,512,["search-location"],"f689","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM288 176c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 48.8 46.5 111.6 68.6 138.6c6 7.3 16.8 7.3 22.7 0c22.1-27 68.6-89.8 68.6-138.6zm-112 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},kr={prefix:"fas",iconName:"people-group",icon:[640,512,[],"e533","M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"]},xr={prefix:"fas",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"]},wr={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},Ar={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},Cr={prefix:"fas",iconName:"wheelchair",icon:[512,512,[],"f193","M192 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM120.5 247.2c12.4-4.7 18.7-18.5 14-30.9s-18.5-18.7-30.9-14C43.1 225.1 0 283.5 0 352c0 88.4 71.6 160 160 160c61.2 0 114.3-34.3 141.2-84.7c6.2-11.7 1.8-26.2-9.9-32.5s-26.2-1.8-32.5 9.9C240 440 202.8 464 160 464C98.1 464 48 413.9 48 352c0-47.9 30.1-88.8 72.5-104.8zM259.8 176l-1.9-9.7c-4.5-22.3-24-38.3-46.8-38.3c-30.1 0-52.7 27.5-46.8 57l23.1 115.5c6 29.9 32.2 51.4 62.8 51.4h5.1c.4 0 .8 0 1.3 0h94.1c6.7 0 12.6 4.1 15 10.4L402 459.2c6 16.1 23.8 24.6 40.1 19.1l48-16c16.8-5.6 25.8-23.7 20.2-40.5s-23.7-25.8-40.5-20.2l-18.7 6.2-25.5-68c-11.7-31.2-41.6-51.9-74.9-51.9H282.2l-9.6-48H336c17.7 0 32-14.3 32-32s-14.3-32-32-32H259.8z"]},Or={prefix:"fas",iconName:"user-tie",icon:[448,512,[],"f508","M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z"]},Sr={prefix:"fas",iconName:"palette",icon:[512,512,[127912],"f53f","M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},Pr={prefix:"fas",iconName:"question",icon:[320,512,[10067,10068,61736],"3f","M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]},zr={prefix:"fas",iconName:"helmet-safety",icon:[576,512,["hard-hat","hat-hard"],"f807","M256 32c-17.7 0-32 14.3-32 32v2.3 99.6c0 5.6-4.5 10.1-10.1 10.1c-3.6 0-7-1.9-8.8-5.1L157.1 87C83 123.5 32 199.8 32 288v64H544l0-66.4c-.9-87.2-51.7-162.4-125.1-198.6l-48 83.9c-1.8 3.2-5.2 5.1-8.8 5.1c-5.6 0-10.1-4.5-10.1-10.1V66.3 64c0-17.7-14.3-32-32-32H256zM16.6 384C7.4 384 0 391.4 0 400.6c0 4.7 2 9.2 5.8 11.9C27.5 428.4 111.8 480 288 480s260.5-51.6 282.2-67.5c3.8-2.8 5.8-7.2 5.8-11.9c0-9.2-7.4-16.6-16.6-16.6H16.6z"]},Nr={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},gr={prefix:"fas",iconName:"person-digging",icon:[576,512,["digging"],"f85e","M208 64a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM9.8 214.8c5.1-12.2 19.1-18 31.4-12.9L60.7 210l22.9-38.1C99.9 144.6 129.3 128 161 128c51.4 0 97 32.9 113.3 81.7l34.6 103.7 79.3 33.1 34.2-45.6c6.4-8.5 16.6-13.3 27.2-12.8s20.3 6.4 25.8 15.5l96 160c5.9 9.9 6.1 22.2 .4 32.2s-16.3 16.2-27.8 16.2H288c-11.1 0-21.4-5.7-27.2-15.2s-6.4-21.2-1.4-31.1l16-32c5.4-10.8 16.5-17.7 28.6-17.7h32l22.5-30L22.8 246.2c-12.2-5.1-18-19.1-12.9-31.4zm82.8 91.8l112 48c11.8 5 19.4 16.6 19.4 29.4v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V405.1l-60.6-26-37 111c-5.6 16.8-23.7 25.8-40.5 20.2S-3.9 486.6 1.6 469.9l48-144 11-33 32 13.7z"]},Mr=gr,Er={prefix:"fas",iconName:"parachute-box",icon:[512,512,[],"f4cd","M383.5 192c.3-5.3 .5-10.6 .5-16c0-51-15.9-96-40.2-127.6C319.5 16.9 288.2 0 256 0s-63.5 16.9-87.8 48.4C143.9 80 128 125 128 176c0 5.4 .2 10.7 .5 16H240V320H208c-7 0-13.7 1.5-19.7 4.2L68.2 192H96.5c-.3-5.3-.5-10.6-.5-16c0-64 22.2-121.2 57.1-159.3C62 49.3 18.6 122.6 4.2 173.6C1.5 183.1 9 192 18.9 192h6L165.2 346.3c-3.3 6.5-5.2 13.9-5.2 21.7v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V368c0-7.8-1.9-15.2-5.2-21.7L487.1 192h6c9.9 0 17.4-8.9 14.7-18.4C493.4 122.6 450 49.3 358.9 16.7C393.8 54.8 416 112.1 416 176c0 5.4-.2 10.7-.5 16h28.3L323.7 324.2c-6-2.7-12.7-4.2-19.7-4.2H272V192H383.5z"]},Lr={prefix:"fas",iconName:"calendar-check",icon:[448,512,[],"f274","M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zM329 305c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-95 95-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L329 305z"]},Ir={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},Tr={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]},_r={prefix:"fas",iconName:"piggy-bank",icon:[576,512,[],"f4d3","M400 96l0 .7c-5.3-.4-10.6-.7-16-.7H256c-16.5 0-32.5 2.1-47.8 6c-.1-2-.2-4-.2-6c0-53 43-96 96-96s96 43 96 96zm-16 32c3.5 0 7 .1 10.4 .3c4.2 .3 8.4 .7 12.6 1.3C424.6 109.1 450.8 96 480 96h11.5c10.4 0 18 9.8 15.5 19.9l-13.8 55.2c15.8 14.8 28.7 32.8 37.5 52.9H544c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H512c-9.1 12.1-19.9 22.9-32 32v64c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H256v32c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V416c-34.9-26.2-58.7-66.3-63.2-112H68c-37.6 0-68-30.4-68-68s30.4-68 68-68h4c13.3 0 24 10.7 24 24s-10.7 24-24 24H68c-11 0-20 9-20 20s9 20 20 20H99.2c12.1-59.8 57.7-107.5 116.3-122.8c12.9-3.4 26.5-5.2 40.5-5.2H384zm64 136a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"]},Hr={prefix:"fas",iconName:"coins",icon:[512,512,[],"f51e","M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"]},Vr={prefix:"fas",iconName:"sliders",icon:[512,512,["sliders-h"],"f1de","M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"]},Rr={prefix:"fas",iconName:"folder-tree",icon:[576,512,[],"f802","M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32v96V384c0 35.3 28.7 64 64 64H256V384H64V160H256V96H64V32zM288 192c0 17.7 14.3 32 32 32H544c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H445.3c-8.5 0-16.6-3.4-22.6-9.4L409.4 9.4c-6-6-14.1-9.4-22.6-9.4H320c-17.7 0-32 14.3-32 32V192zm0 288c0 17.7 14.3 32 32 32H544c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H445.3c-8.5 0-16.6-3.4-22.6-9.4l-13.3-13.3c-6-6-14.1-9.4-22.6-9.4H320c-17.7 0-32 14.3-32 32V480z"]},jr={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},Fr={prefix:"fas",iconName:"utensils",icon:[448,512,[127860,61685,"cutlery"],"f2e7","M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"]},Dr={prefix:"fas",iconName:"angle-down",icon:[448,512,[8964],"f107","M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},Yr={prefix:"fas",iconName:"handshake-angle",icon:[640,512,["hands-helping"],"f4c4","M544 248v3.3l69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5H296c-37.1 0-67.6 28-71.6 64H224V248c0 22.1 17.9 40 40 40s40-17.9 40-40V176c0 0 0-.1 0-.1V160l16 0 136 0c0 0 0 0 .1 0H464c44.2 0 80 35.8 80 80v8zM336 192v56c0 39.8-32.2 72-72 72s-72-32.2-72-72V129.4c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1H384c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16H432c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8v-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z"]},$r={prefix:"fas",iconName:"file",icon:[384,512,[128196,128459,61462],"f15b","M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"]},Ur={prefix:"fas",iconName:"arrow-down",icon:[384,512,[8595],"f063","M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},Wr={prefix:"fas",iconName:"ranking-star",icon:[640,512,[],"e561","M353.8 54.1L330.2 6.3c-3.9-8.3-16.1-8.6-20.4 0L286.2 54.1l-52.3 7.5c-9.3 1.4-13.3 12.9-6.4 19.8l38 37-9 52.1c-1.4 9.3 8.2 16.5 16.8 12.2l46.9-24.8 46.6 24.4c8.6 4.3 18.3-2.9 16.8-12.2l-9-52.1 38-36.6c6.8-6.8 2.9-18.3-6.4-19.8l-52.3-7.5zM256 256c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V288c0-17.7-14.3-32-32-32H256zM32 320c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zm416 96v64c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32V416c0-17.7-14.3-32-32-32H480c-17.7 0-32 14.3-32 32z"]},Gr={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},Xr={prefix:"fas",iconName:"list-check",icon:[512,512,["tasks"],"f0ae","M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},Br={prefix:"fas",iconName:"user-graduate",icon:[448,512,[],"f501","M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9V160c0 70.7-57.3 128-128 128s-128-57.3-128-128V102.9L48 93.3v65.1l15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9H16c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4V86.6C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z"]},qr={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},Kr={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Qr={prefix:"fas",iconName:"chalkboard-user",icon:[640,512,["chalkboard-teacher"],"f51c","M160 64c0-35.3 28.7-64 64-64H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H336.8c-11.8-25.5-29.9-47.5-52.4-64H384V320c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v32h64V64L224 64v49.1C205.2 102.2 183.3 96 160 96V64zm0 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 352h53.3C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z"]},Jr={prefix:"fas",iconName:"book",icon:[448,512,[128212],"f02d","M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},Zr={prefix:"fas",iconName:"building-columns",icon:[512,512,["bank","institution","museum","university"],"f19c","M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224H64V420.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384V416H344V224H280V416H232V224H168V416H128V224zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},ai={prefix:"fas",iconName:"graduation-cap",icon:[640,512,[127891,"mortar-board"],"f19d","M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"]};export{Ar as A,Ur as B,Mr as C,kr as D,Zr as E,Ma as F,Vr as G,Dr as H,Tr as I,Jr as J,Lr as K,qr as a,wr as b,Sr as c,Nr as d,Pr as e,Ir as f,Kr as g,Gr as h,yr as i,Rr as j,$r as k,Br as l,ai as m,Or as n,Qr as o,zr as p,xr as q,Er as r,Hr as s,jr as t,Xr as u,Cr as v,Yr as w,Fr as x,_r as y,Wr as z};
