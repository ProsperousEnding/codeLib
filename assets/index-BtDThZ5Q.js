import{_ as K,u as N,r as t,s as T,c as V,a as u,b as n,w as a,d as W,n as F,F as O,e as s,o as R,f as i,g as d,t as w,h as v,p as U,i as $,j as y}from"./index--9LzSIPE.js";import{t as G}from"./menu-B8wVw0Gd.js";import{a as H}from"./axios-Bo0ATomq.js";const M=r=>(U("data-v-3869c7d6"),r=r(),$(),r),Q=M(()=>u("div",{class:"shadow"},null,-1)),J={style:{"min-width":"300px",width:"25%",margin:"15% auto",height:"150px"}},L="/oneWord/one.json",P="./bg/bing.png",X={__name:"index",setup(r){const b=N();t("");let p=t(""),h=t(""),x=t("");const k=()=>{H.get(L,{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET"}}).then(e=>{const o=e.data.data;p.value=o.content,h.value=o.origin.author,x.value=o.origin.content}).catch(e=>{console.error(e)})},_=t("www.bing.com"),c=t(""),m=e=>{S()},S=e=>{open("https://"+_.value+c.value)};function l(e){return()=>y(i,{name:e},{default:()=>y(e)})}const g=t("search"),z=t([{label:"百度",key:"www.baidu.com",value:"baidu",string:"/s?wd=",icon:l("baidu")},{label:"必应",key:"www.bing.com",value:"bing",string:"/search?q=",icon:l("bing")},{label:"谷歌",key:"www.google.com",value:"google",string:"/search?q=",icon:l("google")}]),C=(e,o)=>{g.value=o.value,_.value=o.key+o.string},I=()=>{b.push({path:"/layout/navigation"})};k();const A=G();return T(A),(e,o)=>{const f=s("n-button"),j=s("n-dropdown"),B=s("n-input"),D=s("n-h3"),E=s("n-h4");return R(),V(O,null,[Q,u("div",{class:"motherBox",style:F([{backgroundImage:`url(${P})`},{width:"100%"}])},[n(f,{strong:"",secondary:"",type:"info",style:{position:"absolute",right:"15%",top:"2%","z-index":"3"},round:"",onClick:I},{icon:a(()=>[n(i,{class:"home_icon",name:"home",size:"24"})]),default:a(()=>[d(" 首页 ")]),_:1}),u("div",J,[n(B,{placeholder:"Search",id:"search_input",class:"center focus",ref:"",onKeydown:W(m,["enter"]),value:c.value,"onUpdate:value":o[0]||(o[0]=q=>c.value=q),clearable:""},{prefix:a(()=>[n(j,{trigger:"hover",options:z.value,onSelect:C,size:"small",placement:"bottom-start"},{default:a(()=>[n(f,{quaternary:"",circle:"",type:"primary",onClick:m},{icon:a(()=>[n(i,{name:g.value,size:"22"},null,8,["name"])]),_:1})]),_:1},8,["options"])]),_:1},8,["value"])]),n(D,{style:{margin:"0",color:"#ffffff","z-index":"1",display:"flex","justify-content":"center"}},{default:a(()=>[d(w(v(p)),1)]),_:1}),n(E,{style:{margin:"0",color:"#ffffff","z-index":"1",display:"flex","justify-content":"center"}},{default:a(()=>[d(" -- -- "+w(v(h)),1)]),_:1})],4)],64)}}},oe=K(X,[["__scopeId","data-v-3869c7d6"]]);export{oe as default};
