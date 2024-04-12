import{I as Ce,J as Se,K as xe,h as Ne,L as Oe,M as se,N as Ee,r as O,O as ae,P as ue,Q as Te,S as $e,T as ie,U as _,V as j,W as le,X as je,y as Ae}from"./index-BRHhMxow.js";import{d as ce,g as G,a as Le}from"./index-CiHJuNMP.js";var Me={grad:.9,turn:360,rad:360/(2*Math.PI)},N=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},v=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=Math.pow(10,t)),Math.round(n*e)/n+0},w=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),e>n?n:e>t?e:t},fe=function(e){return(e=isFinite(e)?e%360:0)>0?e:e+360},Q=function(e){return{r:w(e.r,0,255),g:w(e.g,0,255),b:w(e.b,0,255),a:w(e.a)}},z=function(e){return{r:v(e.r),g:v(e.g),b:v(e.b),a:v(e.a,3)}},ke=/^#([0-9a-f]{3,8})$/i,W=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},de=function(e){var t=e.r,n=e.g,r=e.b,o=e.a,s=Math.max(t,n,r),a=s-Math.min(t,n,r),i=a?s===t?(n-r)/a:s===n?2+(r-t)/a:4+(t-n)/a:0;return{h:60*(i<0?i+6:i),s:s?a/s*100:0,v:s/255*100,a:o}},he=function(e){var t=e.h,n=e.s,r=e.v,o=e.a;t=t/360*6,n/=100,r/=100;var s=Math.floor(t),a=r*(1-n),i=r*(1-(t-s)*n),f=r*(1-(1-t+s)*n),d=s%6;return{r:255*[r,i,a,a,f,r][d],g:255*[f,r,r,i,a,a][d],b:255*[a,a,f,r,r,i][d],a:o}},q=function(e){return{h:fe(e.h),s:w(e.s,0,100),l:w(e.l,0,100),a:w(e.a)}},U=function(e){return{h:v(e.h),s:v(e.s),l:v(e.l),a:v(e.a,3)}},X=function(e){return he((n=(t=e).s,{h:t.h,s:(n*=((r=t.l)<50?r:100-r)/100)>0?2*n/(r+n)*100:0,v:r+n,a:t.a}));var t,n,r},I=function(e){return{h:(t=de(e)).h,s:(o=(200-(n=t.s))*(r=t.v)/100)>0&&o<200?n*r/100/(o<=100?o:200-o)*100:0,l:o/2,a:t.a};var t,n,r,o},Fe=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ie=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,He=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,_e=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Y={string:[[function(e){var t=ke.exec(e);return t?(e=t[1]).length<=4?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?v(parseInt(e[3]+e[3],16)/255,2):1}:e.length===6||e.length===8?{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:e.length===8?v(parseInt(e.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(e){var t=He.exec(e)||_e.exec(e);return t?t[2]!==t[4]||t[4]!==t[6]?null:Q({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(e){var t=Fe.exec(e)||Ie.exec(e);if(!t)return null;var n,r,o=q({h:(n=t[1],r=t[2],r===void 0&&(r="deg"),Number(n)*(Me[r]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return X(o)},"hsl"]],object:[[function(e){var t=e.r,n=e.g,r=e.b,o=e.a,s=o===void 0?1:o;return N(t)&&N(n)&&N(r)?Q({r:Number(t),g:Number(n),b:Number(r),a:Number(s)}):null},"rgb"],[function(e){var t=e.h,n=e.s,r=e.l,o=e.a,s=o===void 0?1:o;if(!N(t)||!N(n)||!N(r))return null;var a=q({h:Number(t),s:Number(n),l:Number(r),a:Number(s)});return X(a)},"hsl"],[function(e){var t=e.h,n=e.s,r=e.v,o=e.a,s=o===void 0?1:o;if(!N(t)||!N(n)||!N(r))return null;var a=function(i){return{h:fe(i.h),s:w(i.s,0,100),v:w(i.v,0,100),a:w(i.a)}}({h:Number(t),s:Number(n),v:Number(r),a:Number(s)});return he(a)},"hsv"]]},Z=function(e,t){for(var n=0;n<t.length;n++){var r=t[n][0](e);if(r)return[r,t[n][1]]}return[null,void 0]},De=function(e){return typeof e=="string"?Z(e.trim(),Y.string):typeof e=="object"&&e!==null?Z(e,Y.object):[null,void 0]},B=function(e,t){var n=I(e);return{h:n.h,s:w(n.s+100*t,0,100),l:n.l,a:n.a}},K=function(e){return(299*e.r+587*e.g+114*e.b)/1e3/255},ee=function(e,t){var n=I(e);return{h:n.h,s:n.s,l:w(n.l+100*t,0,100),a:n.a}},te=function(){function e(t){this.parsed=De(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return e.prototype.isValid=function(){return this.parsed!==null},e.prototype.brightness=function(){return v(K(this.rgba),2)},e.prototype.isDark=function(){return K(this.rgba)<.5},e.prototype.isLight=function(){return K(this.rgba)>=.5},e.prototype.toHex=function(){return t=z(this.rgba),n=t.r,r=t.g,o=t.b,a=(s=t.a)<1?W(v(255*s)):"","#"+W(n)+W(r)+W(o)+a;var t,n,r,o,s,a},e.prototype.toRgb=function(){return z(this.rgba)},e.prototype.toRgbString=function(){return t=z(this.rgba),n=t.r,r=t.g,o=t.b,(s=t.a)<1?"rgba("+n+", "+r+", "+o+", "+s+")":"rgb("+n+", "+r+", "+o+")";var t,n,r,o,s},e.prototype.toHsl=function(){return U(I(this.rgba))},e.prototype.toHslString=function(){return t=U(I(this.rgba)),n=t.h,r=t.s,o=t.l,(s=t.a)<1?"hsla("+n+", "+r+"%, "+o+"%, "+s+")":"hsl("+n+", "+r+"%, "+o+"%)";var t,n,r,o,s},e.prototype.toHsv=function(){return t=de(this.rgba),{h:v(t.h),s:v(t.s),v:v(t.v),a:v(t.a,3)};var t},e.prototype.invert=function(){return x({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},e.prototype.saturate=function(t){return t===void 0&&(t=.1),x(B(this.rgba,t))},e.prototype.desaturate=function(t){return t===void 0&&(t=.1),x(B(this.rgba,-t))},e.prototype.grayscale=function(){return x(B(this.rgba,-1))},e.prototype.lighten=function(t){return t===void 0&&(t=.1),x(ee(this.rgba,t))},e.prototype.darken=function(t){return t===void 0&&(t=.1),x(ee(this.rgba,-t))},e.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},e.prototype.alpha=function(t){return typeof t=="number"?x({r:(n=this.rgba).r,g:n.g,b:n.b,a:t}):v(this.rgba.a,3);var n},e.prototype.hue=function(t){var n=I(this.rgba);return typeof t=="number"?x({h:t,s:n.s,l:n.l,a:n.a}):v(n.h)},e.prototype.isEqual=function(t){return this.toHex()===x(t).toHex()},e}(),x=function(e){return e instanceof te?e:new te(e)};function Ve(e,t){const n={},r=Object.keys(e),o=[{scene:"",handler:s=>F(s,t)[5]},{scene:"Hover",handler:s=>F(s,t)[4]},{scene:"Suppl",handler:s=>F(s,t)[4]},{scene:"Pressed",handler:s=>F(s,t)[6]}];return r.forEach(s=>{o.forEach(a=>{const i=a.handler(e[s]),f=`${s}Color${a.scene}`;n[f]=i})}),n}function Re(e,t){const n={Button:{},Checkbox:{checkMarkColor:k(t)},DatePicker:{itemTextColorActive:k(t)},Calendar:{dateTextColorCurrent:k(t)},Switch:{buttonColor:k(t)}},r=Object.keys(e),o=["","Hover","Pressed","Focus","Disabled"];return r.forEach(s=>{o.forEach(a=>{const i=`textColor${a}${Ce(s)}`;n.Button[i]=k(t)})}),n}function k(e){return e?ce.textColor2:Se.baseColor}function F(e,t){return t?G(e,{theme:"dark",backgroundColor:ce.bodyColor}):G(e)}function We(e){const t={};e.split(";").forEach(n=>{if(n){const[r,o]=n.split(":");t[r.trim()]=o.trim()}})}function ne(e){return x(e).toRgb()}function Pe(e,t,n){const r=document.documentElement,o=r.style.cssText,s=We(o),a={},i=Object.entries(e),f=Object.entries(n);for(const[u,c]of f){const{r:h,g,b:p}=ne(c);a[`--n-${xe(u)}`]=`${h},${g},${p}`}for(const[u,c]of i)F(c,t).map((g,p)=>{const{r:y,g:C,b:A}=ne(g);a[`--n-${u}-color-${p+1}`]=`${y},${C},${A}`});const d=Object.entries({...s,...a}).map(([u,c])=>`${u}: ${c};`).join(" ");r.style.cssText=d}function Je(e,t){const n=Ve(e,t);return Pe(e,t,n),{common:{...n},...Re(e,t)}}function ge(e){return Te()?($e(e),!0):!1}function M(e){return typeof e=="function"?e():Ne(e)}const ze=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Be=Object.prototype.toString,Ke=e=>Be.call(e)==="[object Object]",pe=()=>{};function Ge(e,t){function n(...r){return new Promise((o,s)=>{Promise.resolve(e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})).then(o).catch(s)})}return n}const ve=e=>e();function Qe(e=ve){const t=O(!0);function n(){t.value=!1}function r(){t.value=!0}const o=(...s)=>{t.value&&e(...s)};return{isActive:se(t),pause:n,resume:r,eventFilter:o}}function qe(e){return e||ie()}function me(...e){if(e.length!==1)return Oe(...e);const t=e[0];return typeof t=="function"?se(Ee(()=>({get:t,set:pe}))):O(t)}function Ue(e,t,n={}){const{eventFilter:r=ve,...o}=n;return _(e,Ge(r,t),o)}function Xe(e,t,n={}){const{eventFilter:r,...o}=n,{eventFilter:s,pause:a,resume:i,isActive:f}=Qe(r);return{stop:Ue(e,t,{...o,eventFilter:s}),pause:a,resume:i,isActive:f}}function be(e,t=!0,n){qe()?ae(e,n):t?e():ue(e)}function ye(e){var t;const n=M(e);return(t=n==null?void 0:n.$el)!=null?t:n}const H=ze?window:void 0;function re(...e){let t,n,r,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,o]=e,t=H):[t,n,r,o]=e,!t)return pe;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const s=[],a=()=>{s.forEach(u=>u()),s.length=0},i=(u,c,h,g)=>(u.addEventListener(c,h,g),()=>u.removeEventListener(c,h,g)),f=_(()=>[ye(t),M(o)],([u,c])=>{if(a(),!u)return;const h=Ke(c)?{...c}:c;s.push(...n.flatMap(g=>r.map(p=>i(u,g,p,h))))},{immediate:!0,flush:"post"}),d=()=>{f(),a()};return ge(d),d}function Ye(){const e=O(!1),t=ie();return t&&ae(()=>{e.value=!0},t),e}function Ze(e){const t=Ye();return j(()=>(t.value,!!e()))}function et(e,t={}){const{window:n=H}=t,r=Ze(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let o;const s=O(!1),a=d=>{s.value=d.matches},i=()=>{o&&("removeEventListener"in o?o.removeEventListener("change",a):o.removeListener(a))},f=je(()=>{r.value&&(i(),o=n.matchMedia(M(e)),"addEventListener"in o?o.addEventListener("change",a):o.addListener(a),s.value=o.matches)});return ge(()=>{f(),i(),o=void 0}),s}const P=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},J="__vueuse_ssr_handlers__",tt=nt();function nt(){return J in P||(P[J]=P[J]||{}),P[J]}function we(e,t){return tt[e]||t}function rt(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const ot={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},oe="vueuse-storage";function st(e,t,n,r={}){var o;const{flush:s="pre",deep:a=!0,listenToStorageChanges:i=!0,writeDefaults:f=!0,mergeDefaults:d=!1,shallow:u,window:c=H,eventFilter:h,onError:g=l=>{console.error(l)},initOnMounted:p}=r,y=(u?le:O)(typeof t=="function"?t():t);if(!n)try{n=we("getDefaultStorage",()=>{var l;return(l=H)==null?void 0:l.localStorage})()}catch(l){g(l)}if(!n)return y;const C=M(t),A=rt(C),E=(o=r.serializer)!=null?o:ot[A],{pause:D,resume:m}=Xe(y,()=>V(y.value),{flush:s,deep:a,eventFilter:h});c&&i&&be(()=>{re(c,"storage",S),re(c,oe,R),p&&S()}),p||S();function T(l,b){c&&c.dispatchEvent(new CustomEvent(oe,{detail:{key:e,oldValue:l,newValue:b,storageArea:n}}))}function V(l){try{const b=n.getItem(e);if(l==null)T(b,null),n.removeItem(e);else{const $=E.write(l);b!==$&&(n.setItem(e,$),T(b,$))}}catch(b){g(b)}}function L(l){const b=l?l.newValue:n.getItem(e);if(b==null)return f&&C!=null&&n.setItem(e,E.write(C)),C;if(!l&&d){const $=E.read(b);return typeof d=="function"?d($,C):A==="object"&&!Array.isArray($)?{...C,...$}:$}else return typeof b!="string"?b:E.read(b)}function S(l){if(!(l&&l.storageArea!==n)){if(l&&l.key==null){y.value=C;return}if(!(l&&l.key!==e)){D();try{(l==null?void 0:l.newValue)!==E.write(y.value)&&(y.value=L(l))}catch(b){g(b)}finally{l?ue(m):m()}}}}function R(l){S(l.detail)}return y}function at(e){return et("(prefers-color-scheme: dark)",e)}function ut(e={}){const{selector:t="html",attribute:n="class",initialValue:r="auto",window:o=H,storage:s,storageKey:a="vueuse-color-scheme",listenToStorageChanges:i=!0,storageRef:f,emitAuto:d,disableTransition:u=!0}=e,c={auto:"",light:"light",dark:"dark",...e.modes||{}},h=at({window:o}),g=j(()=>h.value?"dark":"light"),p=f||(a==null?me(r):st(a,r,s,{window:o,listenToStorageChanges:i})),y=j(()=>p.value==="auto"?g.value:p.value),C=we("updateHTMLAttrs",(m,T,V)=>{const L=typeof m=="string"?o==null?void 0:o.document.querySelector(m):ye(m);if(!L)return;let S;if(u&&(S=o.document.createElement("style"),S.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),o.document.head.appendChild(S)),T==="class"){const R=V.split(/\s/g);Object.values(c).flatMap(l=>(l||"").split(/\s/g)).filter(Boolean).forEach(l=>{R.includes(l)?L.classList.add(l):L.classList.remove(l)})}else L.setAttribute(T,V);u&&(o.getComputedStyle(S).opacity,document.head.removeChild(S))});function A(m){var T;C(t,n,(T=c[m])!=null?T:m)}function E(m){e.onChanged?e.onChanged(m,A):A(m)}_(y,E,{flush:"post",immediate:!0}),be(()=>E(y.value));const D=j({get(){return d?p.value:y.value},set(m){p.value=m}});try{return Object.assign(D,{store:p,system:g,state:y})}catch{return D}}function it(e,t){const n=le(d()),r=me(e),o=j({get(){var u;const c=r.value;let h=t!=null&&t.getIndexOf?t.getIndexOf(n.value,c):c.indexOf(n.value);return h<0&&(h=(u=t==null?void 0:t.fallbackIndex)!=null?u:0),h},set(u){s(u)}});function s(u){const c=r.value,h=c.length,g=(u%h+h)%h,p=c[g];return n.value=p,p}function a(u=1){return s(o.value+u)}function i(u=1){return a(u)}function f(u=1){return a(-u)}function d(){var u,c;return(c=M((u=t==null?void 0:t.initialValue)!=null?u:M(e)[0]))!=null?c:void 0}return _(r,()=>s(o.value)),{state:n,index:o,next:i,prev:f,go:s}}const ft=Ae("themeStore",()=>{let e=O(!1),t=()=>{c()};const n=O("light"),r=O(["dark","light"]),o=ut({initialValue:n.value,emitAuto:!0}),{state:s,next:a}=it(r,{initialValue:o});_(s,()=>{r.value.concat(s.value)||(s.value=n.value),o.value=s.value},{immediate:!0});const i=j(()=>{const g=o.system,p=o.store;return s.value==="auto"?g.value==="dark":p.value==="dark"}),f=O({primary:"#18a058",info:"#2080f0",success:"#18a058",warning:"#f0a020",error:"#d03050"}),d=j(()=>i.value?Le:null),u=j(()=>Je(f.value,i.value));function c(){a()}function h(g){f.value={...f.value,...g}}return{theme:d,themeFlag:e,changeTheme:t,darkMode:i,themeConfig:f,themeOverrides:u,modeState:s,toggleDarkMode:c,setThemeConfig:h}});export{ft as t};
