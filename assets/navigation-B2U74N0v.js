import{t as i}from"./menu-Bs8YiAPT.js";import{a as l}from"./axios-Bo0ATomq.js";import{_ as m,r as t,s as g,c as d,t as s,e as o,n as h,o as p}from"./index-CRgcgqbL.js";const _="/bing/HPImageArchive.aspx?format=js&idx=0&n=1&nc=1586183781119&pid=hp&uhd=1&uhdwidth=4196&uhdheight=2160",u={__name:"navigation",setup(f){let a=t(""),r=t(""),c=t("");t("cover"),(()=>{l.get(_,{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET"}}).then(e=>{a.value="https://bing.com/"+e.data.images[0].url}).catch(e=>{console.error(e)})})();const n=i();return g(n),(e,x)=>(p(),d("div",{class:"motherBox",style:h({backgroundImage:`bgUrl(${o(a)})`})},s(o(r))+" "+s(o(c)),5))}},w=m(u,[["__scopeId","data-v-ac70dc93"]]);export{w as default};
