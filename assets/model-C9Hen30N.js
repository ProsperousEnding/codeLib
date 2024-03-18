import{Z as JQ,$ as $Q,r as C_,a0 as tJ,c as eJ,b as S_,w as iJ,e as nJ,o as rJ,f as oJ,h as sJ}from"./index-DLp04J1Y.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const j6="161",Zr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Qr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cJ=0,x_=1,_J=2,wl=1,aJ=2,W1=3,y1=0,dn=1,t1=2,_r=0,So=1,w_=2,M_=3,T_=4,Ml=5,Ir=100,lJ=101,pJ=102,A_=103,E_=104,uJ=200,fJ=201,hJ=202,mJ=203,ps=204,L4=205,Tl=206,dJ=207,yJ=208,vJ=209,gJ=210,CJ=211,SJ=212,xJ=213,wJ=214,MJ=0,TJ=1,AJ=2,k4=3,EJ=4,RJ=5,IJ=6,DJ=7,Mo=0,PJ=1,us=2,ar=0,LJ=1,kJ=2,OJ=3,FJ=4,BJ=5,NJ=6,R_="attached",UJ="detached",Al=300,To=301,Ao=302,k6=303,O6=304,H4=306,Eo=1e3,On=1001,F6=1002,Pi=1003,I_=1004,Zo=1005,Ki=1006,H3=1007,z1=1008,lr=1009,GJ=1010,WJ=1011,b6=1012,El=1013,cr=1014,f1=1015,fs=1016,Rl=1017,Il=1018,Pr=1020,VJ=1021,bn=1023,zJ=1024,HJ=1025,Lr=1026,Ro=1027,jJ=1028,Dl=1029,bJ=1030,Pl=1031,Ll=1033,I4=33776,j3=33777,b3=33778,X3=33779,B6=35840,N6=35841,D_=35842,P_=35843,X6=36196,U6=37492,L_=37496,k_=37808,O_=37809,F_=37810,B_=37811,N_=37812,U_=37813,G_=37814,W_=37815,V_=37816,z_=37817,H_=37818,j_=37819,b_=37820,X_=37821,q3=36492,q_=36494,Y_=36495,XJ=36283,K_=36284,Z_=36285,Q_=36286,qJ=2200,YJ=2201,KJ=2202,O4=2300,F4=2301,Y3=2302,mo=2400,yo=2401,B4=2402,q6=2500,ZJ=2501,kl=3e3,kr=3001,QJ=3200,JJ=3201,Ol=0,$J=1,Xn="",vi="srgb",j1="srgb-linear",Y6="display-p3",j4="display-p3-linear",N4="linear",Ke="srgb",U4="rec709",G4="p3",Jr=7680,J_=519,t$=512,e$=513,i$=514,Fl=515,n$=516,r$=517,o$=518,s$=519,$_=35044,ta="300 es",G6=1035,H1=2e3,W4=2001;class ur{addEventListener(a,f){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[a]===void 0&&(g[a]=[]),g[a].indexOf(f)===-1&&g[a].push(f)}hasEventListener(a,f){if(this._listeners===void 0)return!1;const g=this._listeners;return g[a]!==void 0&&g[a].indexOf(f)!==-1}removeEventListener(a,f){if(this._listeners===void 0)return;const y=this._listeners[a];if(y!==void 0){const P=y.indexOf(f);P!==-1&&y.splice(P,1)}}dispatchEvent(a){if(this._listeners===void 0)return;const g=this._listeners[a.type];if(g!==void 0){a.target=this;const y=g.slice(0);for(let P=0,G=y.length;P<G;P++)y[P].call(this,a);a.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ea=1234567;const ss=Math.PI/180,Io=180/Math.PI;function fr(){const E=Math.random()*4294967295|0,a=Math.random()*4294967295|0,f=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(tn[E&255]+tn[E>>8&255]+tn[E>>16&255]+tn[E>>24&255]+"-"+tn[a&255]+tn[a>>8&255]+"-"+tn[a>>16&15|64]+tn[a>>24&255]+"-"+tn[f&63|128]+tn[f>>8&255]+"-"+tn[f>>16&255]+tn[f>>24&255]+tn[g&255]+tn[g>>8&255]+tn[g>>16&255]+tn[g>>24&255]).toLowerCase()}function Li(E,a,f){return Math.max(a,Math.min(f,E))}function K6(E,a){return(E%a+a)%a}function c$(E,a,f,g,y){return g+(E-a)*(y-g)/(f-a)}function _$(E,a,f){return E!==a?(f-E)/(a-E):0}function cs(E,a,f){return(1-f)*E+f*a}function a$(E,a,f,g){return cs(E,a,1-Math.exp(-f*g))}function l$(E,a=1){return a-Math.abs(K6(E,a*2)-a)}function p$(E,a,f){return E<=a?0:E>=f?1:(E=(E-a)/(f-a),E*E*(3-2*E))}function u$(E,a,f){return E<=a?0:E>=f?1:(E=(E-a)/(f-a),E*E*E*(E*(E*6-15)+10))}function f$(E,a){return E+Math.floor(Math.random()*(a-E+1))}function h$(E,a){return E+Math.random()*(a-E)}function m$(E){return E*(.5-Math.random())}function d$(E){E!==void 0&&(ea=E);let a=ea+=1831565813;return a=Math.imul(a^a>>>15,a|1),a^=a+Math.imul(a^a>>>7,a|61),((a^a>>>14)>>>0)/4294967296}function y$(E){return E*ss}function v$(E){return E*Io}function W6(E){return(E&E-1)===0&&E!==0}function g$(E){return Math.pow(2,Math.ceil(Math.log(E)/Math.LN2))}function V4(E){return Math.pow(2,Math.floor(Math.log(E)/Math.LN2))}function C$(E,a,f,g,y){const P=Math.cos,G=Math.sin,W=P(f/2),X=G(f/2),Y=P((a+g)/2),Q=G((a+g)/2),o0=P((a-g)/2),a0=G((a-g)/2),m0=P((g-a)/2),v0=G((g-a)/2);switch(y){case"XYX":E.set(W*Q,X*o0,X*a0,W*Y);break;case"YZY":E.set(X*a0,W*Q,X*o0,W*Y);break;case"ZXZ":E.set(X*o0,X*a0,W*Q,W*Y);break;case"XZX":E.set(W*Q,X*v0,X*m0,W*Y);break;case"YXY":E.set(X*m0,W*Q,X*v0,W*Y);break;case"ZYZ":E.set(X*v0,X*m0,W*Q,W*Y);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+y)}}function ho(E,a){switch(a.constructor){case Float32Array:return E;case Uint32Array:return E/4294967295;case Uint16Array:return E/65535;case Uint8Array:return E/255;case Int32Array:return Math.max(E/2147483647,-1);case Int16Array:return Math.max(E/32767,-1);case Int8Array:return Math.max(E/127,-1);default:throw new Error("Invalid component type.")}}function un(E,a){switch(a.constructor){case Float32Array:return E;case Uint32Array:return Math.round(E*4294967295);case Uint16Array:return Math.round(E*65535);case Uint8Array:return Math.round(E*255);case Int32Array:return Math.round(E*2147483647);case Int16Array:return Math.round(E*32767);case Int8Array:return Math.round(E*127);default:throw new Error("Invalid component type.")}}const S$={DEG2RAD:ss,RAD2DEG:Io,generateUUID:fr,clamp:Li,euclideanModulo:K6,mapLinear:c$,inverseLerp:_$,lerp:cs,damp:a$,pingpong:l$,smoothstep:p$,smootherstep:u$,randInt:f$,randFloat:h$,randFloatSpread:m$,seededRandom:d$,degToRad:y$,radToDeg:v$,isPowerOfTwo:W6,ceilPowerOfTwo:g$,floorPowerOfTwo:V4,setQuaternionFromProperEuler:C$,normalize:un,denormalize:ho};class st{constructor(a=0,f=0){st.prototype.isVector2=!0,this.x=a,this.y=f}get width(){return this.x}set width(a){this.x=a}get height(){return this.y}set height(a){this.y=a}set(a,f){return this.x=a,this.y=f,this}setScalar(a){return this.x=a,this.y=a,this}setX(a){return this.x=a,this}setY(a){return this.y=a,this}setComponent(a,f){switch(a){case 0:this.x=f;break;case 1:this.y=f;break;default:throw new Error("index is out of range: "+a)}return this}getComponent(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+a)}}clone(){return new this.constructor(this.x,this.y)}copy(a){return this.x=a.x,this.y=a.y,this}add(a){return this.x+=a.x,this.y+=a.y,this}addScalar(a){return this.x+=a,this.y+=a,this}addVectors(a,f){return this.x=a.x+f.x,this.y=a.y+f.y,this}addScaledVector(a,f){return this.x+=a.x*f,this.y+=a.y*f,this}sub(a){return this.x-=a.x,this.y-=a.y,this}subScalar(a){return this.x-=a,this.y-=a,this}subVectors(a,f){return this.x=a.x-f.x,this.y=a.y-f.y,this}multiply(a){return this.x*=a.x,this.y*=a.y,this}multiplyScalar(a){return this.x*=a,this.y*=a,this}divide(a){return this.x/=a.x,this.y/=a.y,this}divideScalar(a){return this.multiplyScalar(1/a)}applyMatrix3(a){const f=this.x,g=this.y,y=a.elements;return this.x=y[0]*f+y[3]*g+y[6],this.y=y[1]*f+y[4]*g+y[7],this}min(a){return this.x=Math.min(this.x,a.x),this.y=Math.min(this.y,a.y),this}max(a){return this.x=Math.max(this.x,a.x),this.y=Math.max(this.y,a.y),this}clamp(a,f){return this.x=Math.max(a.x,Math.min(f.x,this.x)),this.y=Math.max(a.y,Math.min(f.y,this.y)),this}clampScalar(a,f){return this.x=Math.max(a,Math.min(f,this.x)),this.y=Math.max(a,Math.min(f,this.y)),this}clampLength(a,f){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(a,Math.min(f,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(a){return this.x*a.x+this.y*a.y}cross(a){return this.x*a.y-this.y*a.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(a){const f=Math.sqrt(this.lengthSq()*a.lengthSq());if(f===0)return Math.PI/2;const g=this.dot(a)/f;return Math.acos(Li(g,-1,1))}distanceTo(a){return Math.sqrt(this.distanceToSquared(a))}distanceToSquared(a){const f=this.x-a.x,g=this.y-a.y;return f*f+g*g}manhattanDistanceTo(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)}setLength(a){return this.normalize().multiplyScalar(a)}lerp(a,f){return this.x+=(a.x-this.x)*f,this.y+=(a.y-this.y)*f,this}lerpVectors(a,f,g){return this.x=a.x+(f.x-a.x)*g,this.y=a.y+(f.y-a.y)*g,this}equals(a){return a.x===this.x&&a.y===this.y}fromArray(a,f=0){return this.x=a[f],this.y=a[f+1],this}toArray(a=[],f=0){return a[f]=this.x,a[f+1]=this.y,a}fromBufferAttribute(a,f){return this.x=a.getX(f),this.y=a.getY(f),this}rotateAround(a,f){const g=Math.cos(f),y=Math.sin(f),P=this.x-a.x,G=this.y-a.y;return this.x=P*g-G*y+a.x,this.y=P*y+G*g+a.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(a,f,g,y,P,G,W,X,Y){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],a!==void 0&&this.set(a,f,g,y,P,G,W,X,Y)}set(a,f,g,y,P,G,W,X,Y){const Q=this.elements;return Q[0]=a,Q[1]=y,Q[2]=W,Q[3]=f,Q[4]=P,Q[5]=X,Q[6]=g,Q[7]=G,Q[8]=Y,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(a){const f=this.elements,g=a.elements;return f[0]=g[0],f[1]=g[1],f[2]=g[2],f[3]=g[3],f[4]=g[4],f[5]=g[5],f[6]=g[6],f[7]=g[7],f[8]=g[8],this}extractBasis(a,f,g){return a.setFromMatrix3Column(this,0),f.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(a){const f=a.elements;return this.set(f[0],f[4],f[8],f[1],f[5],f[9],f[2],f[6],f[10]),this}multiply(a){return this.multiplyMatrices(this,a)}premultiply(a){return this.multiplyMatrices(a,this)}multiplyMatrices(a,f){const g=a.elements,y=f.elements,P=this.elements,G=g[0],W=g[3],X=g[6],Y=g[1],Q=g[4],o0=g[7],a0=g[2],m0=g[5],v0=g[8],C0=y[0],u0=y[3],t0=y[6],N0=y[1],T0=y[4],O0=y[7],k0=y[2],L0=y[5],D0=y[8];return P[0]=G*C0+W*N0+X*k0,P[3]=G*u0+W*T0+X*L0,P[6]=G*t0+W*O0+X*D0,P[1]=Y*C0+Q*N0+o0*k0,P[4]=Y*u0+Q*T0+o0*L0,P[7]=Y*t0+Q*O0+o0*D0,P[2]=a0*C0+m0*N0+v0*k0,P[5]=a0*u0+m0*T0+v0*L0,P[8]=a0*t0+m0*O0+v0*D0,this}multiplyScalar(a){const f=this.elements;return f[0]*=a,f[3]*=a,f[6]*=a,f[1]*=a,f[4]*=a,f[7]*=a,f[2]*=a,f[5]*=a,f[8]*=a,this}determinant(){const a=this.elements,f=a[0],g=a[1],y=a[2],P=a[3],G=a[4],W=a[5],X=a[6],Y=a[7],Q=a[8];return f*G*Q-f*W*Y-g*P*Q+g*W*X+y*P*Y-y*G*X}invert(){const a=this.elements,f=a[0],g=a[1],y=a[2],P=a[3],G=a[4],W=a[5],X=a[6],Y=a[7],Q=a[8],o0=Q*G-W*Y,a0=W*X-Q*P,m0=Y*P-G*X,v0=f*o0+g*a0+y*m0;if(v0===0)return this.set(0,0,0,0,0,0,0,0,0);const C0=1/v0;return a[0]=o0*C0,a[1]=(y*Y-Q*g)*C0,a[2]=(W*g-y*G)*C0,a[3]=a0*C0,a[4]=(Q*f-y*X)*C0,a[5]=(y*P-W*f)*C0,a[6]=m0*C0,a[7]=(g*X-Y*f)*C0,a[8]=(G*f-g*P)*C0,this}transpose(){let a;const f=this.elements;return a=f[1],f[1]=f[3],f[3]=a,a=f[2],f[2]=f[6],f[6]=a,a=f[5],f[5]=f[7],f[7]=a,this}getNormalMatrix(a){return this.setFromMatrix4(a).invert().transpose()}transposeIntoArray(a){const f=this.elements;return a[0]=f[0],a[1]=f[3],a[2]=f[6],a[3]=f[1],a[4]=f[4],a[5]=f[7],a[6]=f[2],a[7]=f[5],a[8]=f[8],this}setUvTransform(a,f,g,y,P,G,W){const X=Math.cos(P),Y=Math.sin(P);return this.set(g*X,g*Y,-g*(X*G+Y*W)+G+a,-y*Y,y*X,-y*(-Y*G+X*W)+W+f,0,0,1),this}scale(a,f){return this.premultiply(K3.makeScale(a,f)),this}rotate(a){return this.premultiply(K3.makeRotation(-a)),this}translate(a,f){return this.premultiply(K3.makeTranslation(a,f)),this}makeTranslation(a,f){return a.isVector2?this.set(1,0,a.x,0,1,a.y,0,0,1):this.set(1,0,a,0,1,f,0,0,1),this}makeRotation(a){const f=Math.cos(a),g=Math.sin(a);return this.set(f,-g,0,g,f,0,0,0,1),this}makeScale(a,f){return this.set(a,0,0,0,f,0,0,0,1),this}equals(a){const f=this.elements,g=a.elements;for(let y=0;y<9;y++)if(f[y]!==g[y])return!1;return!0}fromArray(a,f=0){for(let g=0;g<9;g++)this.elements[g]=a[g+f];return this}toArray(a=[],f=0){const g=this.elements;return a[f]=g[0],a[f+1]=g[1],a[f+2]=g[2],a[f+3]=g[3],a[f+4]=g[4],a[f+5]=g[5],a[f+6]=g[6],a[f+7]=g[7],a[f+8]=g[8],a}clone(){return new this.constructor().fromArray(this.elements)}}const K3=new le;function Bl(E){for(let a=E.length-1;a>=0;--a)if(E[a]>=65535)return!0;return!1}function hs(E){return document.createElementNS("http://www.w3.org/1999/xhtml",E)}function x$(){const E=hs("canvas");return E.style.display="block",E}const ia={};function xo(E){E in ia||(ia[E]=!0,console.warn(E))}const na=new le().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ra=new le().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Js={[j1]:{transfer:N4,primaries:U4,toReference:E=>E,fromReference:E=>E},[vi]:{transfer:Ke,primaries:U4,toReference:E=>E.convertSRGBToLinear(),fromReference:E=>E.convertLinearToSRGB()},[j4]:{transfer:N4,primaries:G4,toReference:E=>E.applyMatrix3(ra),fromReference:E=>E.applyMatrix3(na)},[Y6]:{transfer:Ke,primaries:G4,toReference:E=>E.convertSRGBToLinear().applyMatrix3(ra),fromReference:E=>E.applyMatrix3(na).convertLinearToSRGB()}},w$=new Set([j1,j4]),Ne={enabled:!0,_workingColorSpace:j1,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(E){if(!w$.has(E))throw new Error(`Unsupported working color space, "${E}".`);this._workingColorSpace=E},convert:function(E,a,f){if(this.enabled===!1||a===f||!a||!f)return E;const g=Js[a].toReference,y=Js[f].fromReference;return y(g(E))},fromWorkingColorSpace:function(E,a){return this.convert(E,this._workingColorSpace,a)},toWorkingColorSpace:function(E,a){return this.convert(E,a,this._workingColorSpace)},getPrimaries:function(E){return Js[E].primaries},getTransfer:function(E){return E===Xn?N4:Js[E].transfer}};function wo(E){return E<.04045?E*.0773993808:Math.pow(E*.9478672986+.0521327014,2.4)}function Z3(E){return E<.0031308?E*12.92:1.055*Math.pow(E,.41666)-.055}let $r;class Nl{static getDataURL(a){if(/^data:/i.test(a.src)||typeof HTMLCanvasElement>"u")return a.src;let f;if(a instanceof HTMLCanvasElement)f=a;else{$r===void 0&&($r=hs("canvas")),$r.width=a.width,$r.height=a.height;const g=$r.getContext("2d");a instanceof ImageData?g.putImageData(a,0,0):g.drawImage(a,0,0,a.width,a.height),f=$r}return f.width>2048||f.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",a),f.toDataURL("image/jpeg",.6)):f.toDataURL("image/png")}static sRGBToLinear(a){if(typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap){const f=hs("canvas");f.width=a.width,f.height=a.height;const g=f.getContext("2d");g.drawImage(a,0,0,a.width,a.height);const y=g.getImageData(0,0,a.width,a.height),P=y.data;for(let G=0;G<P.length;G++)P[G]=wo(P[G]/255)*255;return g.putImageData(y,0,0),f}else if(a.data){const f=a.data.slice(0);for(let g=0;g<f.length;g++)f instanceof Uint8Array||f instanceof Uint8ClampedArray?f[g]=Math.floor(wo(f[g]/255)*255):f[g]=wo(f[g]);return{data:f,width:a.width,height:a.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),a}}let M$=0;class Ul{constructor(a=null){this.isSource=!0,Object.defineProperty(this,"id",{value:M$++}),this.uuid=fr(),this.data=a,this.dataReady=!0,this.version=0}set needsUpdate(a){a===!0&&this.version++}toJSON(a){const f=a===void 0||typeof a=="string";if(!f&&a.images[this.uuid]!==void 0)return a.images[this.uuid];const g={uuid:this.uuid,url:""},y=this.data;if(y!==null){let P;if(Array.isArray(y)){P=[];for(let G=0,W=y.length;G<W;G++)y[G].isDataTexture?P.push(Q3(y[G].image)):P.push(Q3(y[G]))}else P=Q3(y);g.url=P}return f||(a.images[this.uuid]=g),g}}function Q3(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap?Nl.getDataURL(E):E.data?{data:Array.from(E.data),width:E.width,height:E.height,type:E.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let T$=0;class nn extends ur{constructor(a=nn.DEFAULT_IMAGE,f=nn.DEFAULT_MAPPING,g=On,y=On,P=Ki,G=z1,W=bn,X=lr,Y=nn.DEFAULT_ANISOTROPY,Q=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T$++}),this.uuid=fr(),this.name="",this.source=new Ul(a),this.mipmaps=[],this.mapping=f,this.channel=0,this.wrapS=g,this.wrapT=y,this.magFilter=P,this.minFilter=G,this.anisotropy=Y,this.format=W,this.internalFormat=null,this.type=X,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof Q=="string"?this.colorSpace=Q:(xo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=Q===kr?vi:Xn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(a=null){this.source.data=a}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(a){return this.name=a.name,this.source=a.source,this.mipmaps=a.mipmaps.slice(0),this.mapping=a.mapping,this.channel=a.channel,this.wrapS=a.wrapS,this.wrapT=a.wrapT,this.magFilter=a.magFilter,this.minFilter=a.minFilter,this.anisotropy=a.anisotropy,this.format=a.format,this.internalFormat=a.internalFormat,this.type=a.type,this.offset.copy(a.offset),this.repeat.copy(a.repeat),this.center.copy(a.center),this.rotation=a.rotation,this.matrixAutoUpdate=a.matrixAutoUpdate,this.matrix.copy(a.matrix),this.generateMipmaps=a.generateMipmaps,this.premultiplyAlpha=a.premultiplyAlpha,this.flipY=a.flipY,this.unpackAlignment=a.unpackAlignment,this.colorSpace=a.colorSpace,this.userData=JSON.parse(JSON.stringify(a.userData)),this.needsUpdate=!0,this}toJSON(a){const f=a===void 0||typeof a=="string";if(!f&&a.textures[this.uuid]!==void 0)return a.textures[this.uuid];const g={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(a).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(g.userData=this.userData),f||(a.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(a){if(this.mapping!==Al)return a;if(a.applyMatrix3(this.matrix),a.x<0||a.x>1)switch(this.wrapS){case Eo:a.x=a.x-Math.floor(a.x);break;case On:a.x=a.x<0?0:1;break;case F6:Math.abs(Math.floor(a.x)%2)===1?a.x=Math.ceil(a.x)-a.x:a.x=a.x-Math.floor(a.x);break}if(a.y<0||a.y>1)switch(this.wrapT){case Eo:a.y=a.y-Math.floor(a.y);break;case On:a.y=a.y<0?0:1;break;case F6:Math.abs(Math.floor(a.y)%2)===1?a.y=Math.ceil(a.y)-a.y:a.y=a.y-Math.floor(a.y);break}return this.flipY&&(a.y=1-a.y),a}set needsUpdate(a){a===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return xo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===vi?kr:kl}set encoding(a){xo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=a===kr?vi:Xn}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Al;nn.DEFAULT_ANISOTROPY=1;class Fe{constructor(a=0,f=0,g=0,y=1){Fe.prototype.isVector4=!0,this.x=a,this.y=f,this.z=g,this.w=y}get width(){return this.z}set width(a){this.z=a}get height(){return this.w}set height(a){this.w=a}set(a,f,g,y){return this.x=a,this.y=f,this.z=g,this.w=y,this}setScalar(a){return this.x=a,this.y=a,this.z=a,this.w=a,this}setX(a){return this.x=a,this}setY(a){return this.y=a,this}setZ(a){return this.z=a,this}setW(a){return this.w=a,this}setComponent(a,f){switch(a){case 0:this.x=f;break;case 1:this.y=f;break;case 2:this.z=f;break;case 3:this.w=f;break;default:throw new Error("index is out of range: "+a)}return this}getComponent(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+a)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(a){return this.x=a.x,this.y=a.y,this.z=a.z,this.w=a.w!==void 0?a.w:1,this}add(a){return this.x+=a.x,this.y+=a.y,this.z+=a.z,this.w+=a.w,this}addScalar(a){return this.x+=a,this.y+=a,this.z+=a,this.w+=a,this}addVectors(a,f){return this.x=a.x+f.x,this.y=a.y+f.y,this.z=a.z+f.z,this.w=a.w+f.w,this}addScaledVector(a,f){return this.x+=a.x*f,this.y+=a.y*f,this.z+=a.z*f,this.w+=a.w*f,this}sub(a){return this.x-=a.x,this.y-=a.y,this.z-=a.z,this.w-=a.w,this}subScalar(a){return this.x-=a,this.y-=a,this.z-=a,this.w-=a,this}subVectors(a,f){return this.x=a.x-f.x,this.y=a.y-f.y,this.z=a.z-f.z,this.w=a.w-f.w,this}multiply(a){return this.x*=a.x,this.y*=a.y,this.z*=a.z,this.w*=a.w,this}multiplyScalar(a){return this.x*=a,this.y*=a,this.z*=a,this.w*=a,this}applyMatrix4(a){const f=this.x,g=this.y,y=this.z,P=this.w,G=a.elements;return this.x=G[0]*f+G[4]*g+G[8]*y+G[12]*P,this.y=G[1]*f+G[5]*g+G[9]*y+G[13]*P,this.z=G[2]*f+G[6]*g+G[10]*y+G[14]*P,this.w=G[3]*f+G[7]*g+G[11]*y+G[15]*P,this}divideScalar(a){return this.multiplyScalar(1/a)}setAxisAngleFromQuaternion(a){this.w=2*Math.acos(a.w);const f=Math.sqrt(1-a.w*a.w);return f<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=a.x/f,this.y=a.y/f,this.z=a.z/f),this}setAxisAngleFromRotationMatrix(a){let f,g,y,P;const X=a.elements,Y=X[0],Q=X[4],o0=X[8],a0=X[1],m0=X[5],v0=X[9],C0=X[2],u0=X[6],t0=X[10];if(Math.abs(Q-a0)<.01&&Math.abs(o0-C0)<.01&&Math.abs(v0-u0)<.01){if(Math.abs(Q+a0)<.1&&Math.abs(o0+C0)<.1&&Math.abs(v0+u0)<.1&&Math.abs(Y+m0+t0-3)<.1)return this.set(1,0,0,0),this;f=Math.PI;const T0=(Y+1)/2,O0=(m0+1)/2,k0=(t0+1)/2,L0=(Q+a0)/4,D0=(o0+C0)/4,V0=(v0+u0)/4;return T0>O0&&T0>k0?T0<.01?(g=0,y=.707106781,P=.707106781):(g=Math.sqrt(T0),y=L0/g,P=D0/g):O0>k0?O0<.01?(g=.707106781,y=0,P=.707106781):(y=Math.sqrt(O0),g=L0/y,P=V0/y):k0<.01?(g=.707106781,y=.707106781,P=0):(P=Math.sqrt(k0),g=D0/P,y=V0/P),this.set(g,y,P,f),this}let N0=Math.sqrt((u0-v0)*(u0-v0)+(o0-C0)*(o0-C0)+(a0-Q)*(a0-Q));return Math.abs(N0)<.001&&(N0=1),this.x=(u0-v0)/N0,this.y=(o0-C0)/N0,this.z=(a0-Q)/N0,this.w=Math.acos((Y+m0+t0-1)/2),this}min(a){return this.x=Math.min(this.x,a.x),this.y=Math.min(this.y,a.y),this.z=Math.min(this.z,a.z),this.w=Math.min(this.w,a.w),this}max(a){return this.x=Math.max(this.x,a.x),this.y=Math.max(this.y,a.y),this.z=Math.max(this.z,a.z),this.w=Math.max(this.w,a.w),this}clamp(a,f){return this.x=Math.max(a.x,Math.min(f.x,this.x)),this.y=Math.max(a.y,Math.min(f.y,this.y)),this.z=Math.max(a.z,Math.min(f.z,this.z)),this.w=Math.max(a.w,Math.min(f.w,this.w)),this}clampScalar(a,f){return this.x=Math.max(a,Math.min(f,this.x)),this.y=Math.max(a,Math.min(f,this.y)),this.z=Math.max(a,Math.min(f,this.z)),this.w=Math.max(a,Math.min(f,this.w)),this}clampLength(a,f){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(a,Math.min(f,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(a){return this.normalize().multiplyScalar(a)}lerp(a,f){return this.x+=(a.x-this.x)*f,this.y+=(a.y-this.y)*f,this.z+=(a.z-this.z)*f,this.w+=(a.w-this.w)*f,this}lerpVectors(a,f,g){return this.x=a.x+(f.x-a.x)*g,this.y=a.y+(f.y-a.y)*g,this.z=a.z+(f.z-a.z)*g,this.w=a.w+(f.w-a.w)*g,this}equals(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w}fromArray(a,f=0){return this.x=a[f],this.y=a[f+1],this.z=a[f+2],this.w=a[f+3],this}toArray(a=[],f=0){return a[f]=this.x,a[f+1]=this.y,a[f+2]=this.z,a[f+3]=this.w,a}fromBufferAttribute(a,f){return this.x=a.getX(f),this.y=a.getY(f),this.z=a.getZ(f),this.w=a.getW(f),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class A$ extends ur{constructor(a=1,f=1,g={}){super(),this.isRenderTarget=!0,this.width=a,this.height=f,this.depth=1,this.scissor=new Fe(0,0,a,f),this.scissorTest=!1,this.viewport=new Fe(0,0,a,f);const y={width:a,height:f,depth:1};g.encoding!==void 0&&(xo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),g.colorSpace=g.encoding===kr?vi:Xn),g=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ki,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},g),this.texture=new nn(y,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=g.generateMipmaps,this.texture.internalFormat=g.internalFormat,this.depthBuffer=g.depthBuffer,this.stencilBuffer=g.stencilBuffer,this.depthTexture=g.depthTexture,this.samples=g.samples}setSize(a,f,g=1){(this.width!==a||this.height!==f||this.depth!==g)&&(this.width=a,this.height=f,this.depth=g,this.texture.image.width=a,this.texture.image.height=f,this.texture.image.depth=g,this.dispose()),this.viewport.set(0,0,a,f),this.scissor.set(0,0,a,f)}clone(){return new this.constructor().copy(this)}copy(a){this.width=a.width,this.height=a.height,this.depth=a.depth,this.scissor.copy(a.scissor),this.scissorTest=a.scissorTest,this.viewport.copy(a.viewport),this.texture=a.texture.clone(),this.texture.isRenderTargetTexture=!0;const f=Object.assign({},a.texture.image);return this.texture.source=new Ul(f),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,a.depthTexture!==null&&(this.depthTexture=a.depthTexture.clone()),this.samples=a.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pr extends A${constructor(a=1,f=1,g={}){super(a,f,g),this.isWebGLRenderTarget=!0}}class Gl extends nn{constructor(a=null,f=1,g=1,y=1){super(null),this.isDataArrayTexture=!0,this.image={data:a,width:f,height:g,depth:y},this.magFilter=Pi,this.minFilter=Pi,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class E$ extends nn{constructor(a=null,f=1,g=1,y=1){super(null),this.isData3DTexture=!0,this.image={data:a,width:f,height:g,depth:y},this.magFilter=Pi,this.minFilter=Pi,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ei{constructor(a=0,f=0,g=0,y=1){this.isQuaternion=!0,this._x=a,this._y=f,this._z=g,this._w=y}static slerpFlat(a,f,g,y,P,G,W){let X=g[y+0],Y=g[y+1],Q=g[y+2],o0=g[y+3];const a0=P[G+0],m0=P[G+1],v0=P[G+2],C0=P[G+3];if(W===0){a[f+0]=X,a[f+1]=Y,a[f+2]=Q,a[f+3]=o0;return}if(W===1){a[f+0]=a0,a[f+1]=m0,a[f+2]=v0,a[f+3]=C0;return}if(o0!==C0||X!==a0||Y!==m0||Q!==v0){let u0=1-W;const t0=X*a0+Y*m0+Q*v0+o0*C0,N0=t0>=0?1:-1,T0=1-t0*t0;if(T0>Number.EPSILON){const k0=Math.sqrt(T0),L0=Math.atan2(k0,t0*N0);u0=Math.sin(u0*L0)/k0,W=Math.sin(W*L0)/k0}const O0=W*N0;if(X=X*u0+a0*O0,Y=Y*u0+m0*O0,Q=Q*u0+v0*O0,o0=o0*u0+C0*O0,u0===1-W){const k0=1/Math.sqrt(X*X+Y*Y+Q*Q+o0*o0);X*=k0,Y*=k0,Q*=k0,o0*=k0}}a[f]=X,a[f+1]=Y,a[f+2]=Q,a[f+3]=o0}static multiplyQuaternionsFlat(a,f,g,y,P,G){const W=g[y],X=g[y+1],Y=g[y+2],Q=g[y+3],o0=P[G],a0=P[G+1],m0=P[G+2],v0=P[G+3];return a[f]=W*v0+Q*o0+X*m0-Y*a0,a[f+1]=X*v0+Q*a0+Y*o0-W*m0,a[f+2]=Y*v0+Q*m0+W*a0-X*o0,a[f+3]=Q*v0-W*o0-X*a0-Y*m0,a}get x(){return this._x}set x(a){this._x=a,this._onChangeCallback()}get y(){return this._y}set y(a){this._y=a,this._onChangeCallback()}get z(){return this._z}set z(a){this._z=a,this._onChangeCallback()}get w(){return this._w}set w(a){this._w=a,this._onChangeCallback()}set(a,f,g,y){return this._x=a,this._y=f,this._z=g,this._w=y,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(a){return this._x=a.x,this._y=a.y,this._z=a.z,this._w=a.w,this._onChangeCallback(),this}setFromEuler(a,f=!0){const g=a._x,y=a._y,P=a._z,G=a._order,W=Math.cos,X=Math.sin,Y=W(g/2),Q=W(y/2),o0=W(P/2),a0=X(g/2),m0=X(y/2),v0=X(P/2);switch(G){case"XYZ":this._x=a0*Q*o0+Y*m0*v0,this._y=Y*m0*o0-a0*Q*v0,this._z=Y*Q*v0+a0*m0*o0,this._w=Y*Q*o0-a0*m0*v0;break;case"YXZ":this._x=a0*Q*o0+Y*m0*v0,this._y=Y*m0*o0-a0*Q*v0,this._z=Y*Q*v0-a0*m0*o0,this._w=Y*Q*o0+a0*m0*v0;break;case"ZXY":this._x=a0*Q*o0-Y*m0*v0,this._y=Y*m0*o0+a0*Q*v0,this._z=Y*Q*v0+a0*m0*o0,this._w=Y*Q*o0-a0*m0*v0;break;case"ZYX":this._x=a0*Q*o0-Y*m0*v0,this._y=Y*m0*o0+a0*Q*v0,this._z=Y*Q*v0-a0*m0*o0,this._w=Y*Q*o0+a0*m0*v0;break;case"YZX":this._x=a0*Q*o0+Y*m0*v0,this._y=Y*m0*o0+a0*Q*v0,this._z=Y*Q*v0-a0*m0*o0,this._w=Y*Q*o0-a0*m0*v0;break;case"XZY":this._x=a0*Q*o0-Y*m0*v0,this._y=Y*m0*o0-a0*Q*v0,this._z=Y*Q*v0+a0*m0*o0,this._w=Y*Q*o0+a0*m0*v0;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+G)}return f===!0&&this._onChangeCallback(),this}setFromAxisAngle(a,f){const g=f/2,y=Math.sin(g);return this._x=a.x*y,this._y=a.y*y,this._z=a.z*y,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(a){const f=a.elements,g=f[0],y=f[4],P=f[8],G=f[1],W=f[5],X=f[9],Y=f[2],Q=f[6],o0=f[10],a0=g+W+o0;if(a0>0){const m0=.5/Math.sqrt(a0+1);this._w=.25/m0,this._x=(Q-X)*m0,this._y=(P-Y)*m0,this._z=(G-y)*m0}else if(g>W&&g>o0){const m0=2*Math.sqrt(1+g-W-o0);this._w=(Q-X)/m0,this._x=.25*m0,this._y=(y+G)/m0,this._z=(P+Y)/m0}else if(W>o0){const m0=2*Math.sqrt(1+W-g-o0);this._w=(P-Y)/m0,this._x=(y+G)/m0,this._y=.25*m0,this._z=(X+Q)/m0}else{const m0=2*Math.sqrt(1+o0-g-W);this._w=(G-y)/m0,this._x=(P+Y)/m0,this._y=(X+Q)/m0,this._z=.25*m0}return this._onChangeCallback(),this}setFromUnitVectors(a,f){let g=a.dot(f)+1;return g<Number.EPSILON?(g=0,Math.abs(a.x)>Math.abs(a.z)?(this._x=-a.y,this._y=a.x,this._z=0,this._w=g):(this._x=0,this._y=-a.z,this._z=a.y,this._w=g)):(this._x=a.y*f.z-a.z*f.y,this._y=a.z*f.x-a.x*f.z,this._z=a.x*f.y-a.y*f.x,this._w=g),this.normalize()}angleTo(a){return 2*Math.acos(Math.abs(Li(this.dot(a),-1,1)))}rotateTowards(a,f){const g=this.angleTo(a);if(g===0)return this;const y=Math.min(1,f/g);return this.slerp(a,y),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(a){return this._x*a._x+this._y*a._y+this._z*a._z+this._w*a._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let a=this.length();return a===0?(this._x=0,this._y=0,this._z=0,this._w=1):(a=1/a,this._x=this._x*a,this._y=this._y*a,this._z=this._z*a,this._w=this._w*a),this._onChangeCallback(),this}multiply(a){return this.multiplyQuaternions(this,a)}premultiply(a){return this.multiplyQuaternions(a,this)}multiplyQuaternions(a,f){const g=a._x,y=a._y,P=a._z,G=a._w,W=f._x,X=f._y,Y=f._z,Q=f._w;return this._x=g*Q+G*W+y*Y-P*X,this._y=y*Q+G*X+P*W-g*Y,this._z=P*Q+G*Y+g*X-y*W,this._w=G*Q-g*W-y*X-P*Y,this._onChangeCallback(),this}slerp(a,f){if(f===0)return this;if(f===1)return this.copy(a);const g=this._x,y=this._y,P=this._z,G=this._w;let W=G*a._w+g*a._x+y*a._y+P*a._z;if(W<0?(this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=-a._z,W=-W):this.copy(a),W>=1)return this._w=G,this._x=g,this._y=y,this._z=P,this;const X=1-W*W;if(X<=Number.EPSILON){const m0=1-f;return this._w=m0*G+f*this._w,this._x=m0*g+f*this._x,this._y=m0*y+f*this._y,this._z=m0*P+f*this._z,this.normalize(),this}const Y=Math.sqrt(X),Q=Math.atan2(Y,W),o0=Math.sin((1-f)*Q)/Y,a0=Math.sin(f*Q)/Y;return this._w=G*o0+this._w*a0,this._x=g*o0+this._x*a0,this._y=y*o0+this._y*a0,this._z=P*o0+this._z*a0,this._onChangeCallback(),this}slerpQuaternions(a,f,g){return this.copy(a).slerp(f,g)}random(){const a=Math.random(),f=Math.sqrt(1-a),g=Math.sqrt(a),y=2*Math.PI*Math.random(),P=2*Math.PI*Math.random();return this.set(f*Math.cos(y),g*Math.sin(P),g*Math.cos(P),f*Math.sin(y))}equals(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w}fromArray(a,f=0){return this._x=a[f],this._y=a[f+1],this._z=a[f+2],this._w=a[f+3],this._onChangeCallback(),this}toArray(a=[],f=0){return a[f]=this._x,a[f+1]=this._y,a[f+2]=this._z,a[f+3]=this._w,a}fromBufferAttribute(a,f){return this._x=a.getX(f),this._y=a.getY(f),this._z=a.getZ(f),this._w=a.getW(f),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(a){return this._onChangeCallback=a,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K0{constructor(a=0,f=0,g=0){K0.prototype.isVector3=!0,this.x=a,this.y=f,this.z=g}set(a,f,g){return g===void 0&&(g=this.z),this.x=a,this.y=f,this.z=g,this}setScalar(a){return this.x=a,this.y=a,this.z=a,this}setX(a){return this.x=a,this}setY(a){return this.y=a,this}setZ(a){return this.z=a,this}setComponent(a,f){switch(a){case 0:this.x=f;break;case 1:this.y=f;break;case 2:this.z=f;break;default:throw new Error("index is out of range: "+a)}return this}getComponent(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+a)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(a){return this.x=a.x,this.y=a.y,this.z=a.z,this}add(a){return this.x+=a.x,this.y+=a.y,this.z+=a.z,this}addScalar(a){return this.x+=a,this.y+=a,this.z+=a,this}addVectors(a,f){return this.x=a.x+f.x,this.y=a.y+f.y,this.z=a.z+f.z,this}addScaledVector(a,f){return this.x+=a.x*f,this.y+=a.y*f,this.z+=a.z*f,this}sub(a){return this.x-=a.x,this.y-=a.y,this.z-=a.z,this}subScalar(a){return this.x-=a,this.y-=a,this.z-=a,this}subVectors(a,f){return this.x=a.x-f.x,this.y=a.y-f.y,this.z=a.z-f.z,this}multiply(a){return this.x*=a.x,this.y*=a.y,this.z*=a.z,this}multiplyScalar(a){return this.x*=a,this.y*=a,this.z*=a,this}multiplyVectors(a,f){return this.x=a.x*f.x,this.y=a.y*f.y,this.z=a.z*f.z,this}applyEuler(a){return this.applyQuaternion(oa.setFromEuler(a))}applyAxisAngle(a,f){return this.applyQuaternion(oa.setFromAxisAngle(a,f))}applyMatrix3(a){const f=this.x,g=this.y,y=this.z,P=a.elements;return this.x=P[0]*f+P[3]*g+P[6]*y,this.y=P[1]*f+P[4]*g+P[7]*y,this.z=P[2]*f+P[5]*g+P[8]*y,this}applyNormalMatrix(a){return this.applyMatrix3(a).normalize()}applyMatrix4(a){const f=this.x,g=this.y,y=this.z,P=a.elements,G=1/(P[3]*f+P[7]*g+P[11]*y+P[15]);return this.x=(P[0]*f+P[4]*g+P[8]*y+P[12])*G,this.y=(P[1]*f+P[5]*g+P[9]*y+P[13])*G,this.z=(P[2]*f+P[6]*g+P[10]*y+P[14])*G,this}applyQuaternion(a){const f=this.x,g=this.y,y=this.z,P=a.x,G=a.y,W=a.z,X=a.w,Y=2*(G*y-W*g),Q=2*(W*f-P*y),o0=2*(P*g-G*f);return this.x=f+X*Y+G*o0-W*Q,this.y=g+X*Q+W*Y-P*o0,this.z=y+X*o0+P*Q-G*Y,this}project(a){return this.applyMatrix4(a.matrixWorldInverse).applyMatrix4(a.projectionMatrix)}unproject(a){return this.applyMatrix4(a.projectionMatrixInverse).applyMatrix4(a.matrixWorld)}transformDirection(a){const f=this.x,g=this.y,y=this.z,P=a.elements;return this.x=P[0]*f+P[4]*g+P[8]*y,this.y=P[1]*f+P[5]*g+P[9]*y,this.z=P[2]*f+P[6]*g+P[10]*y,this.normalize()}divide(a){return this.x/=a.x,this.y/=a.y,this.z/=a.z,this}divideScalar(a){return this.multiplyScalar(1/a)}min(a){return this.x=Math.min(this.x,a.x),this.y=Math.min(this.y,a.y),this.z=Math.min(this.z,a.z),this}max(a){return this.x=Math.max(this.x,a.x),this.y=Math.max(this.y,a.y),this.z=Math.max(this.z,a.z),this}clamp(a,f){return this.x=Math.max(a.x,Math.min(f.x,this.x)),this.y=Math.max(a.y,Math.min(f.y,this.y)),this.z=Math.max(a.z,Math.min(f.z,this.z)),this}clampScalar(a,f){return this.x=Math.max(a,Math.min(f,this.x)),this.y=Math.max(a,Math.min(f,this.y)),this.z=Math.max(a,Math.min(f,this.z)),this}clampLength(a,f){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(a,Math.min(f,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(a){return this.x*a.x+this.y*a.y+this.z*a.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(a){return this.normalize().multiplyScalar(a)}lerp(a,f){return this.x+=(a.x-this.x)*f,this.y+=(a.y-this.y)*f,this.z+=(a.z-this.z)*f,this}lerpVectors(a,f,g){return this.x=a.x+(f.x-a.x)*g,this.y=a.y+(f.y-a.y)*g,this.z=a.z+(f.z-a.z)*g,this}cross(a){return this.crossVectors(this,a)}crossVectors(a,f){const g=a.x,y=a.y,P=a.z,G=f.x,W=f.y,X=f.z;return this.x=y*X-P*W,this.y=P*G-g*X,this.z=g*W-y*G,this}projectOnVector(a){const f=a.lengthSq();if(f===0)return this.set(0,0,0);const g=a.dot(this)/f;return this.copy(a).multiplyScalar(g)}projectOnPlane(a){return J3.copy(this).projectOnVector(a),this.sub(J3)}reflect(a){return this.sub(J3.copy(a).multiplyScalar(2*this.dot(a)))}angleTo(a){const f=Math.sqrt(this.lengthSq()*a.lengthSq());if(f===0)return Math.PI/2;const g=this.dot(a)/f;return Math.acos(Li(g,-1,1))}distanceTo(a){return Math.sqrt(this.distanceToSquared(a))}distanceToSquared(a){const f=this.x-a.x,g=this.y-a.y,y=this.z-a.z;return f*f+g*g+y*y}manhattanDistanceTo(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)+Math.abs(this.z-a.z)}setFromSpherical(a){return this.setFromSphericalCoords(a.radius,a.phi,a.theta)}setFromSphericalCoords(a,f,g){const y=Math.sin(f)*a;return this.x=y*Math.sin(g),this.y=Math.cos(f)*a,this.z=y*Math.cos(g),this}setFromCylindrical(a){return this.setFromCylindricalCoords(a.radius,a.theta,a.y)}setFromCylindricalCoords(a,f,g){return this.x=a*Math.sin(f),this.y=g,this.z=a*Math.cos(f),this}setFromMatrixPosition(a){const f=a.elements;return this.x=f[12],this.y=f[13],this.z=f[14],this}setFromMatrixScale(a){const f=this.setFromMatrixColumn(a,0).length(),g=this.setFromMatrixColumn(a,1).length(),y=this.setFromMatrixColumn(a,2).length();return this.x=f,this.y=g,this.z=y,this}setFromMatrixColumn(a,f){return this.fromArray(a.elements,f*4)}setFromMatrix3Column(a,f){return this.fromArray(a.elements,f*3)}setFromEuler(a){return this.x=a._x,this.y=a._y,this.z=a._z,this}setFromColor(a){return this.x=a.r,this.y=a.g,this.z=a.b,this}equals(a){return a.x===this.x&&a.y===this.y&&a.z===this.z}fromArray(a,f=0){return this.x=a[f],this.y=a[f+1],this.z=a[f+2],this}toArray(a=[],f=0){return a[f]=this.x,a[f+1]=this.y,a[f+2]=this.z,a}fromBufferAttribute(a,f){return this.x=a.getX(f),this.y=a.getY(f),this.z=a.getZ(f),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const a=(Math.random()-.5)*2,f=Math.random()*Math.PI*2,g=Math.sqrt(1-a**2);return this.x=g*Math.cos(f),this.y=g*Math.sin(f),this.z=a,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const J3=new K0,oa=new Ei;class Lo{constructor(a=new K0(1/0,1/0,1/0),f=new K0(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=a,this.max=f}set(a,f){return this.min.copy(a),this.max.copy(f),this}setFromArray(a){this.makeEmpty();for(let f=0,g=a.length;f<g;f+=3)this.expandByPoint(Qn.fromArray(a,f));return this}setFromBufferAttribute(a){this.makeEmpty();for(let f=0,g=a.count;f<g;f++)this.expandByPoint(Qn.fromBufferAttribute(a,f));return this}setFromPoints(a){this.makeEmpty();for(let f=0,g=a.length;f<g;f++)this.expandByPoint(a[f]);return this}setFromCenterAndSize(a,f){const g=Qn.copy(f).multiplyScalar(.5);return this.min.copy(a).sub(g),this.max.copy(a).add(g),this}setFromObject(a,f=!1){return this.makeEmpty(),this.expandByObject(a,f)}clone(){return new this.constructor().copy(this)}copy(a){return this.min.copy(a.min),this.max.copy(a.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(a){return this.isEmpty()?a.set(0,0,0):a.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(a){return this.isEmpty()?a.set(0,0,0):a.subVectors(this.max,this.min)}expandByPoint(a){return this.min.min(a),this.max.max(a),this}expandByVector(a){return this.min.sub(a),this.max.add(a),this}expandByScalar(a){return this.min.addScalar(-a),this.max.addScalar(a),this}expandByObject(a,f=!1){a.updateWorldMatrix(!1,!1);const g=a.geometry;if(g!==void 0){const P=g.getAttribute("position");if(f===!0&&P!==void 0&&a.isInstancedMesh!==!0)for(let G=0,W=P.count;G<W;G++)a.isMesh===!0?a.getVertexPosition(G,Qn):Qn.fromBufferAttribute(P,G),Qn.applyMatrix4(a.matrixWorld),this.expandByPoint(Qn);else a.boundingBox!==void 0?(a.boundingBox===null&&a.computeBoundingBox(),$s.copy(a.boundingBox)):(g.boundingBox===null&&g.computeBoundingBox(),$s.copy(g.boundingBox)),$s.applyMatrix4(a.matrixWorld),this.union($s)}const y=a.children;for(let P=0,G=y.length;P<G;P++)this.expandByObject(y[P],f);return this}containsPoint(a){return!(a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||a.z<this.min.z||a.z>this.max.z)}containsBox(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z}getParameter(a,f){return f.set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(a){return!(a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y||a.max.z<this.min.z||a.min.z>this.max.z)}intersectsSphere(a){return this.clampPoint(a.center,Qn),Qn.distanceToSquared(a.center)<=a.radius*a.radius}intersectsPlane(a){let f,g;return a.normal.x>0?(f=a.normal.x*this.min.x,g=a.normal.x*this.max.x):(f=a.normal.x*this.max.x,g=a.normal.x*this.min.x),a.normal.y>0?(f+=a.normal.y*this.min.y,g+=a.normal.y*this.max.y):(f+=a.normal.y*this.max.y,g+=a.normal.y*this.min.y),a.normal.z>0?(f+=a.normal.z*this.min.z,g+=a.normal.z*this.max.z):(f+=a.normal.z*this.max.z,g+=a.normal.z*this.min.z),f<=-a.constant&&g>=-a.constant}intersectsTriangle(a){if(this.isEmpty())return!1;this.getCenter(Qo),t4.subVectors(this.max,Qo),to.subVectors(a.a,Qo),eo.subVectors(a.b,Qo),io.subVectors(a.c,Qo),tr.subVectors(eo,to),er.subVectors(io,eo),wr.subVectors(to,io);let f=[0,-tr.z,tr.y,0,-er.z,er.y,0,-wr.z,wr.y,tr.z,0,-tr.x,er.z,0,-er.x,wr.z,0,-wr.x,-tr.y,tr.x,0,-er.y,er.x,0,-wr.y,wr.x,0];return!$3(f,to,eo,io,t4)||(f=[1,0,0,0,1,0,0,0,1],!$3(f,to,eo,io,t4))?!1:(e4.crossVectors(tr,er),f=[e4.x,e4.y,e4.z],$3(f,to,eo,io,t4))}clampPoint(a,f){return f.copy(a).clamp(this.min,this.max)}distanceToPoint(a){return this.clampPoint(a,Qn).distanceTo(a)}getBoundingSphere(a){return this.isEmpty()?a.makeEmpty():(this.getCenter(a.center),a.radius=this.getSize(Qn).length()*.5),a}intersect(a){return this.min.max(a.min),this.max.min(a.max),this.isEmpty()&&this.makeEmpty(),this}union(a){return this.min.min(a.min),this.max.max(a.max),this}applyMatrix4(a){return this.isEmpty()?this:(O1[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(a),O1[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(a),O1[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(a),O1[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(a),O1[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(a),O1[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(a),O1[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(a),O1[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(a),this.setFromPoints(O1),this)}translate(a){return this.min.add(a),this.max.add(a),this}equals(a){return a.min.equals(this.min)&&a.max.equals(this.max)}}const O1=[new K0,new K0,new K0,new K0,new K0,new K0,new K0,new K0],Qn=new K0,$s=new Lo,to=new K0,eo=new K0,io=new K0,tr=new K0,er=new K0,wr=new K0,Qo=new K0,t4=new K0,e4=new K0,Mr=new K0;function $3(E,a,f,g,y){for(let P=0,G=E.length-3;P<=G;P+=3){Mr.fromArray(E,P);const W=y.x*Math.abs(Mr.x)+y.y*Math.abs(Mr.y)+y.z*Math.abs(Mr.z),X=a.dot(Mr),Y=f.dot(Mr),Q=g.dot(Mr);if(Math.max(-Math.max(X,Y,Q),Math.min(X,Y,Q))>W)return!1}return!0}const R$=new Lo,Jo=new K0,t6=new K0;class ko{constructor(a=new K0,f=-1){this.isSphere=!0,this.center=a,this.radius=f}set(a,f){return this.center.copy(a),this.radius=f,this}setFromPoints(a,f){const g=this.center;f!==void 0?g.copy(f):R$.setFromPoints(a).getCenter(g);let y=0;for(let P=0,G=a.length;P<G;P++)y=Math.max(y,g.distanceToSquared(a[P]));return this.radius=Math.sqrt(y),this}copy(a){return this.center.copy(a.center),this.radius=a.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(a){return a.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(a){return a.distanceTo(this.center)-this.radius}intersectsSphere(a){const f=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=f*f}intersectsBox(a){return a.intersectsSphere(this)}intersectsPlane(a){return Math.abs(a.distanceToPoint(this.center))<=this.radius}clampPoint(a,f){const g=this.center.distanceToSquared(a);return f.copy(a),g>this.radius*this.radius&&(f.sub(this.center).normalize(),f.multiplyScalar(this.radius).add(this.center)),f}getBoundingBox(a){return this.isEmpty()?(a.makeEmpty(),a):(a.set(this.center,this.center),a.expandByScalar(this.radius),a)}applyMatrix4(a){return this.center.applyMatrix4(a),this.radius=this.radius*a.getMaxScaleOnAxis(),this}translate(a){return this.center.add(a),this}expandByPoint(a){if(this.isEmpty())return this.center.copy(a),this.radius=0,this;Jo.subVectors(a,this.center);const f=Jo.lengthSq();if(f>this.radius*this.radius){const g=Math.sqrt(f),y=(g-this.radius)*.5;this.center.addScaledVector(Jo,y/g),this.radius+=y}return this}union(a){return a.isEmpty()?this:this.isEmpty()?(this.copy(a),this):(this.center.equals(a.center)===!0?this.radius=Math.max(this.radius,a.radius):(t6.subVectors(a.center,this.center).setLength(a.radius),this.expandByPoint(Jo.copy(a.center).add(t6)),this.expandByPoint(Jo.copy(a.center).sub(t6))),this)}equals(a){return a.center.equals(this.center)&&a.radius===this.radius}clone(){return new this.constructor().copy(this)}}const F1=new K0,e6=new K0,i4=new K0,ir=new K0,i6=new K0,n4=new K0,n6=new K0;class b4{constructor(a=new K0,f=new K0(0,0,-1)){this.origin=a,this.direction=f}set(a,f){return this.origin.copy(a),this.direction.copy(f),this}copy(a){return this.origin.copy(a.origin),this.direction.copy(a.direction),this}at(a,f){return f.copy(this.origin).addScaledVector(this.direction,a)}lookAt(a){return this.direction.copy(a).sub(this.origin).normalize(),this}recast(a){return this.origin.copy(this.at(a,F1)),this}closestPointToPoint(a,f){f.subVectors(a,this.origin);const g=f.dot(this.direction);return g<0?f.copy(this.origin):f.copy(this.origin).addScaledVector(this.direction,g)}distanceToPoint(a){return Math.sqrt(this.distanceSqToPoint(a))}distanceSqToPoint(a){const f=F1.subVectors(a,this.origin).dot(this.direction);return f<0?this.origin.distanceToSquared(a):(F1.copy(this.origin).addScaledVector(this.direction,f),F1.distanceToSquared(a))}distanceSqToSegment(a,f,g,y){e6.copy(a).add(f).multiplyScalar(.5),i4.copy(f).sub(a).normalize(),ir.copy(this.origin).sub(e6);const P=a.distanceTo(f)*.5,G=-this.direction.dot(i4),W=ir.dot(this.direction),X=-ir.dot(i4),Y=ir.lengthSq(),Q=Math.abs(1-G*G);let o0,a0,m0,v0;if(Q>0)if(o0=G*X-W,a0=G*W-X,v0=P*Q,o0>=0)if(a0>=-v0)if(a0<=v0){const C0=1/Q;o0*=C0,a0*=C0,m0=o0*(o0+G*a0+2*W)+a0*(G*o0+a0+2*X)+Y}else a0=P,o0=Math.max(0,-(G*a0+W)),m0=-o0*o0+a0*(a0+2*X)+Y;else a0=-P,o0=Math.max(0,-(G*a0+W)),m0=-o0*o0+a0*(a0+2*X)+Y;else a0<=-v0?(o0=Math.max(0,-(-G*P+W)),a0=o0>0?-P:Math.min(Math.max(-P,-X),P),m0=-o0*o0+a0*(a0+2*X)+Y):a0<=v0?(o0=0,a0=Math.min(Math.max(-P,-X),P),m0=a0*(a0+2*X)+Y):(o0=Math.max(0,-(G*P+W)),a0=o0>0?P:Math.min(Math.max(-P,-X),P),m0=-o0*o0+a0*(a0+2*X)+Y);else a0=G>0?-P:P,o0=Math.max(0,-(G*a0+W)),m0=-o0*o0+a0*(a0+2*X)+Y;return g&&g.copy(this.origin).addScaledVector(this.direction,o0),y&&y.copy(e6).addScaledVector(i4,a0),m0}intersectSphere(a,f){F1.subVectors(a.center,this.origin);const g=F1.dot(this.direction),y=F1.dot(F1)-g*g,P=a.radius*a.radius;if(y>P)return null;const G=Math.sqrt(P-y),W=g-G,X=g+G;return X<0?null:W<0?this.at(X,f):this.at(W,f)}intersectsSphere(a){return this.distanceSqToPoint(a.center)<=a.radius*a.radius}distanceToPlane(a){const f=a.normal.dot(this.direction);if(f===0)return a.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(a.normal)+a.constant)/f;return g>=0?g:null}intersectPlane(a,f){const g=this.distanceToPlane(a);return g===null?null:this.at(g,f)}intersectsPlane(a){const f=a.distanceToPoint(this.origin);return f===0||a.normal.dot(this.direction)*f<0}intersectBox(a,f){let g,y,P,G,W,X;const Y=1/this.direction.x,Q=1/this.direction.y,o0=1/this.direction.z,a0=this.origin;return Y>=0?(g=(a.min.x-a0.x)*Y,y=(a.max.x-a0.x)*Y):(g=(a.max.x-a0.x)*Y,y=(a.min.x-a0.x)*Y),Q>=0?(P=(a.min.y-a0.y)*Q,G=(a.max.y-a0.y)*Q):(P=(a.max.y-a0.y)*Q,G=(a.min.y-a0.y)*Q),g>G||P>y||((P>g||isNaN(g))&&(g=P),(G<y||isNaN(y))&&(y=G),o0>=0?(W=(a.min.z-a0.z)*o0,X=(a.max.z-a0.z)*o0):(W=(a.max.z-a0.z)*o0,X=(a.min.z-a0.z)*o0),g>X||W>y)||((W>g||g!==g)&&(g=W),(X<y||y!==y)&&(y=X),y<0)?null:this.at(g>=0?g:y,f)}intersectsBox(a){return this.intersectBox(a,F1)!==null}intersectTriangle(a,f,g,y,P){i6.subVectors(f,a),n4.subVectors(g,a),n6.crossVectors(i6,n4);let G=this.direction.dot(n6),W;if(G>0){if(y)return null;W=1}else if(G<0)W=-1,G=-G;else return null;ir.subVectors(this.origin,a);const X=W*this.direction.dot(n4.crossVectors(ir,n4));if(X<0)return null;const Y=W*this.direction.dot(i6.cross(ir));if(Y<0||X+Y>G)return null;const Q=-W*ir.dot(n6);return Q<0?null:this.at(Q/G,P)}applyMatrix4(a){return this.origin.applyMatrix4(a),this.direction.transformDirection(a),this}equals(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(a,f,g,y,P,G,W,X,Y,Q,o0,a0,m0,v0,C0,u0){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],a!==void 0&&this.set(a,f,g,y,P,G,W,X,Y,Q,o0,a0,m0,v0,C0,u0)}set(a,f,g,y,P,G,W,X,Y,Q,o0,a0,m0,v0,C0,u0){const t0=this.elements;return t0[0]=a,t0[4]=f,t0[8]=g,t0[12]=y,t0[1]=P,t0[5]=G,t0[9]=W,t0[13]=X,t0[2]=Y,t0[6]=Q,t0[10]=o0,t0[14]=a0,t0[3]=m0,t0[7]=v0,t0[11]=C0,t0[15]=u0,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(a){const f=this.elements,g=a.elements;return f[0]=g[0],f[1]=g[1],f[2]=g[2],f[3]=g[3],f[4]=g[4],f[5]=g[5],f[6]=g[6],f[7]=g[7],f[8]=g[8],f[9]=g[9],f[10]=g[10],f[11]=g[11],f[12]=g[12],f[13]=g[13],f[14]=g[14],f[15]=g[15],this}copyPosition(a){const f=this.elements,g=a.elements;return f[12]=g[12],f[13]=g[13],f[14]=g[14],this}setFromMatrix3(a){const f=a.elements;return this.set(f[0],f[3],f[6],0,f[1],f[4],f[7],0,f[2],f[5],f[8],0,0,0,0,1),this}extractBasis(a,f,g){return a.setFromMatrixColumn(this,0),f.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(a,f,g){return this.set(a.x,f.x,g.x,0,a.y,f.y,g.y,0,a.z,f.z,g.z,0,0,0,0,1),this}extractRotation(a){const f=this.elements,g=a.elements,y=1/no.setFromMatrixColumn(a,0).length(),P=1/no.setFromMatrixColumn(a,1).length(),G=1/no.setFromMatrixColumn(a,2).length();return f[0]=g[0]*y,f[1]=g[1]*y,f[2]=g[2]*y,f[3]=0,f[4]=g[4]*P,f[5]=g[5]*P,f[6]=g[6]*P,f[7]=0,f[8]=g[8]*G,f[9]=g[9]*G,f[10]=g[10]*G,f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,this}makeRotationFromEuler(a){const f=this.elements,g=a.x,y=a.y,P=a.z,G=Math.cos(g),W=Math.sin(g),X=Math.cos(y),Y=Math.sin(y),Q=Math.cos(P),o0=Math.sin(P);if(a.order==="XYZ"){const a0=G*Q,m0=G*o0,v0=W*Q,C0=W*o0;f[0]=X*Q,f[4]=-X*o0,f[8]=Y,f[1]=m0+v0*Y,f[5]=a0-C0*Y,f[9]=-W*X,f[2]=C0-a0*Y,f[6]=v0+m0*Y,f[10]=G*X}else if(a.order==="YXZ"){const a0=X*Q,m0=X*o0,v0=Y*Q,C0=Y*o0;f[0]=a0+C0*W,f[4]=v0*W-m0,f[8]=G*Y,f[1]=G*o0,f[5]=G*Q,f[9]=-W,f[2]=m0*W-v0,f[6]=C0+a0*W,f[10]=G*X}else if(a.order==="ZXY"){const a0=X*Q,m0=X*o0,v0=Y*Q,C0=Y*o0;f[0]=a0-C0*W,f[4]=-G*o0,f[8]=v0+m0*W,f[1]=m0+v0*W,f[5]=G*Q,f[9]=C0-a0*W,f[2]=-G*Y,f[6]=W,f[10]=G*X}else if(a.order==="ZYX"){const a0=G*Q,m0=G*o0,v0=W*Q,C0=W*o0;f[0]=X*Q,f[4]=v0*Y-m0,f[8]=a0*Y+C0,f[1]=X*o0,f[5]=C0*Y+a0,f[9]=m0*Y-v0,f[2]=-Y,f[6]=W*X,f[10]=G*X}else if(a.order==="YZX"){const a0=G*X,m0=G*Y,v0=W*X,C0=W*Y;f[0]=X*Q,f[4]=C0-a0*o0,f[8]=v0*o0+m0,f[1]=o0,f[5]=G*Q,f[9]=-W*Q,f[2]=-Y*Q,f[6]=m0*o0+v0,f[10]=a0-C0*o0}else if(a.order==="XZY"){const a0=G*X,m0=G*Y,v0=W*X,C0=W*Y;f[0]=X*Q,f[4]=-o0,f[8]=Y*Q,f[1]=a0*o0+C0,f[5]=G*Q,f[9]=m0*o0-v0,f[2]=v0*o0-m0,f[6]=W*Q,f[10]=C0*o0+a0}return f[3]=0,f[7]=0,f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,this}makeRotationFromQuaternion(a){return this.compose(I$,a,D$)}lookAt(a,f,g){const y=this.elements;return Ln.subVectors(a,f),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),nr.crossVectors(g,Ln),nr.lengthSq()===0&&(Math.abs(g.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),nr.crossVectors(g,Ln)),nr.normalize(),r4.crossVectors(Ln,nr),y[0]=nr.x,y[4]=r4.x,y[8]=Ln.x,y[1]=nr.y,y[5]=r4.y,y[9]=Ln.y,y[2]=nr.z,y[6]=r4.z,y[10]=Ln.z,this}multiply(a){return this.multiplyMatrices(this,a)}premultiply(a){return this.multiplyMatrices(a,this)}multiplyMatrices(a,f){const g=a.elements,y=f.elements,P=this.elements,G=g[0],W=g[4],X=g[8],Y=g[12],Q=g[1],o0=g[5],a0=g[9],m0=g[13],v0=g[2],C0=g[6],u0=g[10],t0=g[14],N0=g[3],T0=g[7],O0=g[11],k0=g[15],L0=y[0],D0=y[4],V0=y[8],h2=y[12],R0=y[1],j0=y[5],R2=y[9],N2=y[13],o2=y[2],x2=y[6],$0=y[10],k2=y[14],w2=y[3],f2=y[7],F2=y[11],L2=y[15];return P[0]=G*L0+W*R0+X*o2+Y*w2,P[4]=G*D0+W*j0+X*x2+Y*f2,P[8]=G*V0+W*R2+X*$0+Y*F2,P[12]=G*h2+W*N2+X*k2+Y*L2,P[1]=Q*L0+o0*R0+a0*o2+m0*w2,P[5]=Q*D0+o0*j0+a0*x2+m0*f2,P[9]=Q*V0+o0*R2+a0*$0+m0*F2,P[13]=Q*h2+o0*N2+a0*k2+m0*L2,P[2]=v0*L0+C0*R0+u0*o2+t0*w2,P[6]=v0*D0+C0*j0+u0*x2+t0*f2,P[10]=v0*V0+C0*R2+u0*$0+t0*F2,P[14]=v0*h2+C0*N2+u0*k2+t0*L2,P[3]=N0*L0+T0*R0+O0*o2+k0*w2,P[7]=N0*D0+T0*j0+O0*x2+k0*f2,P[11]=N0*V0+T0*R2+O0*$0+k0*F2,P[15]=N0*h2+T0*N2+O0*k2+k0*L2,this}multiplyScalar(a){const f=this.elements;return f[0]*=a,f[4]*=a,f[8]*=a,f[12]*=a,f[1]*=a,f[5]*=a,f[9]*=a,f[13]*=a,f[2]*=a,f[6]*=a,f[10]*=a,f[14]*=a,f[3]*=a,f[7]*=a,f[11]*=a,f[15]*=a,this}determinant(){const a=this.elements,f=a[0],g=a[4],y=a[8],P=a[12],G=a[1],W=a[5],X=a[9],Y=a[13],Q=a[2],o0=a[6],a0=a[10],m0=a[14],v0=a[3],C0=a[7],u0=a[11],t0=a[15];return v0*(+P*X*o0-y*Y*o0-P*W*a0+g*Y*a0+y*W*m0-g*X*m0)+C0*(+f*X*m0-f*Y*a0+P*G*a0-y*G*m0+y*Y*Q-P*X*Q)+u0*(+f*Y*o0-f*W*m0-P*G*o0+g*G*m0+P*W*Q-g*Y*Q)+t0*(-y*W*Q-f*X*o0+f*W*a0+y*G*o0-g*G*a0+g*X*Q)}transpose(){const a=this.elements;let f;return f=a[1],a[1]=a[4],a[4]=f,f=a[2],a[2]=a[8],a[8]=f,f=a[6],a[6]=a[9],a[9]=f,f=a[3],a[3]=a[12],a[12]=f,f=a[7],a[7]=a[13],a[13]=f,f=a[11],a[11]=a[14],a[14]=f,this}setPosition(a,f,g){const y=this.elements;return a.isVector3?(y[12]=a.x,y[13]=a.y,y[14]=a.z):(y[12]=a,y[13]=f,y[14]=g),this}invert(){const a=this.elements,f=a[0],g=a[1],y=a[2],P=a[3],G=a[4],W=a[5],X=a[6],Y=a[7],Q=a[8],o0=a[9],a0=a[10],m0=a[11],v0=a[12],C0=a[13],u0=a[14],t0=a[15],N0=o0*u0*Y-C0*a0*Y+C0*X*m0-W*u0*m0-o0*X*t0+W*a0*t0,T0=v0*a0*Y-Q*u0*Y-v0*X*m0+G*u0*m0+Q*X*t0-G*a0*t0,O0=Q*C0*Y-v0*o0*Y+v0*W*m0-G*C0*m0-Q*W*t0+G*o0*t0,k0=v0*o0*X-Q*C0*X-v0*W*a0+G*C0*a0+Q*W*u0-G*o0*u0,L0=f*N0+g*T0+y*O0+P*k0;if(L0===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D0=1/L0;return a[0]=N0*D0,a[1]=(C0*a0*P-o0*u0*P-C0*y*m0+g*u0*m0+o0*y*t0-g*a0*t0)*D0,a[2]=(W*u0*P-C0*X*P+C0*y*Y-g*u0*Y-W*y*t0+g*X*t0)*D0,a[3]=(o0*X*P-W*a0*P-o0*y*Y+g*a0*Y+W*y*m0-g*X*m0)*D0,a[4]=T0*D0,a[5]=(Q*u0*P-v0*a0*P+v0*y*m0-f*u0*m0-Q*y*t0+f*a0*t0)*D0,a[6]=(v0*X*P-G*u0*P-v0*y*Y+f*u0*Y+G*y*t0-f*X*t0)*D0,a[7]=(G*a0*P-Q*X*P+Q*y*Y-f*a0*Y-G*y*m0+f*X*m0)*D0,a[8]=O0*D0,a[9]=(v0*o0*P-Q*C0*P-v0*g*m0+f*C0*m0+Q*g*t0-f*o0*t0)*D0,a[10]=(G*C0*P-v0*W*P+v0*g*Y-f*C0*Y-G*g*t0+f*W*t0)*D0,a[11]=(Q*W*P-G*o0*P-Q*g*Y+f*o0*Y+G*g*m0-f*W*m0)*D0,a[12]=k0*D0,a[13]=(Q*C0*y-v0*o0*y+v0*g*a0-f*C0*a0-Q*g*u0+f*o0*u0)*D0,a[14]=(v0*W*y-G*C0*y-v0*g*X+f*C0*X+G*g*u0-f*W*u0)*D0,a[15]=(G*o0*y-Q*W*y+Q*g*X-f*o0*X-G*g*a0+f*W*a0)*D0,this}scale(a){const f=this.elements,g=a.x,y=a.y,P=a.z;return f[0]*=g,f[4]*=y,f[8]*=P,f[1]*=g,f[5]*=y,f[9]*=P,f[2]*=g,f[6]*=y,f[10]*=P,f[3]*=g,f[7]*=y,f[11]*=P,this}getMaxScaleOnAxis(){const a=this.elements,f=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],g=a[4]*a[4]+a[5]*a[5]+a[6]*a[6],y=a[8]*a[8]+a[9]*a[9]+a[10]*a[10];return Math.sqrt(Math.max(f,g,y))}makeTranslation(a,f,g){return a.isVector3?this.set(1,0,0,a.x,0,1,0,a.y,0,0,1,a.z,0,0,0,1):this.set(1,0,0,a,0,1,0,f,0,0,1,g,0,0,0,1),this}makeRotationX(a){const f=Math.cos(a),g=Math.sin(a);return this.set(1,0,0,0,0,f,-g,0,0,g,f,0,0,0,0,1),this}makeRotationY(a){const f=Math.cos(a),g=Math.sin(a);return this.set(f,0,g,0,0,1,0,0,-g,0,f,0,0,0,0,1),this}makeRotationZ(a){const f=Math.cos(a),g=Math.sin(a);return this.set(f,-g,0,0,g,f,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(a,f){const g=Math.cos(f),y=Math.sin(f),P=1-g,G=a.x,W=a.y,X=a.z,Y=P*G,Q=P*W;return this.set(Y*G+g,Y*W-y*X,Y*X+y*W,0,Y*W+y*X,Q*W+g,Q*X-y*G,0,Y*X-y*W,Q*X+y*G,P*X*X+g,0,0,0,0,1),this}makeScale(a,f,g){return this.set(a,0,0,0,0,f,0,0,0,0,g,0,0,0,0,1),this}makeShear(a,f,g,y,P,G){return this.set(1,g,P,0,a,1,G,0,f,y,1,0,0,0,0,1),this}compose(a,f,g){const y=this.elements,P=f._x,G=f._y,W=f._z,X=f._w,Y=P+P,Q=G+G,o0=W+W,a0=P*Y,m0=P*Q,v0=P*o0,C0=G*Q,u0=G*o0,t0=W*o0,N0=X*Y,T0=X*Q,O0=X*o0,k0=g.x,L0=g.y,D0=g.z;return y[0]=(1-(C0+t0))*k0,y[1]=(m0+O0)*k0,y[2]=(v0-T0)*k0,y[3]=0,y[4]=(m0-O0)*L0,y[5]=(1-(a0+t0))*L0,y[6]=(u0+N0)*L0,y[7]=0,y[8]=(v0+T0)*D0,y[9]=(u0-N0)*D0,y[10]=(1-(a0+C0))*D0,y[11]=0,y[12]=a.x,y[13]=a.y,y[14]=a.z,y[15]=1,this}decompose(a,f,g){const y=this.elements;let P=no.set(y[0],y[1],y[2]).length();const G=no.set(y[4],y[5],y[6]).length(),W=no.set(y[8],y[9],y[10]).length();this.determinant()<0&&(P=-P),a.x=y[12],a.y=y[13],a.z=y[14],Jn.copy(this);const Y=1/P,Q=1/G,o0=1/W;return Jn.elements[0]*=Y,Jn.elements[1]*=Y,Jn.elements[2]*=Y,Jn.elements[4]*=Q,Jn.elements[5]*=Q,Jn.elements[6]*=Q,Jn.elements[8]*=o0,Jn.elements[9]*=o0,Jn.elements[10]*=o0,f.setFromRotationMatrix(Jn),g.x=P,g.y=G,g.z=W,this}makePerspective(a,f,g,y,P,G,W=H1){const X=this.elements,Y=2*P/(f-a),Q=2*P/(g-y),o0=(f+a)/(f-a),a0=(g+y)/(g-y);let m0,v0;if(W===H1)m0=-(G+P)/(G-P),v0=-2*G*P/(G-P);else if(W===W4)m0=-G/(G-P),v0=-G*P/(G-P);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+W);return X[0]=Y,X[4]=0,X[8]=o0,X[12]=0,X[1]=0,X[5]=Q,X[9]=a0,X[13]=0,X[2]=0,X[6]=0,X[10]=m0,X[14]=v0,X[3]=0,X[7]=0,X[11]=-1,X[15]=0,this}makeOrthographic(a,f,g,y,P,G,W=H1){const X=this.elements,Y=1/(f-a),Q=1/(g-y),o0=1/(G-P),a0=(f+a)*Y,m0=(g+y)*Q;let v0,C0;if(W===H1)v0=(G+P)*o0,C0=-2*o0;else if(W===W4)v0=P*o0,C0=-1*o0;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+W);return X[0]=2*Y,X[4]=0,X[8]=0,X[12]=-a0,X[1]=0,X[5]=2*Q,X[9]=0,X[13]=-m0,X[2]=0,X[6]=0,X[10]=C0,X[14]=-v0,X[3]=0,X[7]=0,X[11]=0,X[15]=1,this}equals(a){const f=this.elements,g=a.elements;for(let y=0;y<16;y++)if(f[y]!==g[y])return!1;return!0}fromArray(a,f=0){for(let g=0;g<16;g++)this.elements[g]=a[g+f];return this}toArray(a=[],f=0){const g=this.elements;return a[f]=g[0],a[f+1]=g[1],a[f+2]=g[2],a[f+3]=g[3],a[f+4]=g[4],a[f+5]=g[5],a[f+6]=g[6],a[f+7]=g[7],a[f+8]=g[8],a[f+9]=g[9],a[f+10]=g[10],a[f+11]=g[11],a[f+12]=g[12],a[f+13]=g[13],a[f+14]=g[14],a[f+15]=g[15],a}}const no=new K0,Jn=new ue,I$=new K0(0,0,0),D$=new K0(1,1,1),nr=new K0,r4=new K0,Ln=new K0,sa=new ue,ca=new Ei;class Oo{constructor(a=0,f=0,g=0,y=Oo.DEFAULT_ORDER){this.isEuler=!0,this._x=a,this._y=f,this._z=g,this._order=y}get x(){return this._x}set x(a){this._x=a,this._onChangeCallback()}get y(){return this._y}set y(a){this._y=a,this._onChangeCallback()}get z(){return this._z}set z(a){this._z=a,this._onChangeCallback()}get order(){return this._order}set order(a){this._order=a,this._onChangeCallback()}set(a,f,g,y=this._order){return this._x=a,this._y=f,this._z=g,this._order=y,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(a){return this._x=a._x,this._y=a._y,this._z=a._z,this._order=a._order,this._onChangeCallback(),this}setFromRotationMatrix(a,f=this._order,g=!0){const y=a.elements,P=y[0],G=y[4],W=y[8],X=y[1],Y=y[5],Q=y[9],o0=y[2],a0=y[6],m0=y[10];switch(f){case"XYZ":this._y=Math.asin(Li(W,-1,1)),Math.abs(W)<.9999999?(this._x=Math.atan2(-Q,m0),this._z=Math.atan2(-G,P)):(this._x=Math.atan2(a0,Y),this._z=0);break;case"YXZ":this._x=Math.asin(-Li(Q,-1,1)),Math.abs(Q)<.9999999?(this._y=Math.atan2(W,m0),this._z=Math.atan2(X,Y)):(this._y=Math.atan2(-o0,P),this._z=0);break;case"ZXY":this._x=Math.asin(Li(a0,-1,1)),Math.abs(a0)<.9999999?(this._y=Math.atan2(-o0,m0),this._z=Math.atan2(-G,Y)):(this._y=0,this._z=Math.atan2(X,P));break;case"ZYX":this._y=Math.asin(-Li(o0,-1,1)),Math.abs(o0)<.9999999?(this._x=Math.atan2(a0,m0),this._z=Math.atan2(X,P)):(this._x=0,this._z=Math.atan2(-G,Y));break;case"YZX":this._z=Math.asin(Li(X,-1,1)),Math.abs(X)<.9999999?(this._x=Math.atan2(-Q,Y),this._y=Math.atan2(-o0,P)):(this._x=0,this._y=Math.atan2(W,m0));break;case"XZY":this._z=Math.asin(-Li(G,-1,1)),Math.abs(G)<.9999999?(this._x=Math.atan2(a0,Y),this._y=Math.atan2(W,P)):(this._x=Math.atan2(-Q,m0),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+f)}return this._order=f,g===!0&&this._onChangeCallback(),this}setFromQuaternion(a,f,g){return sa.makeRotationFromQuaternion(a),this.setFromRotationMatrix(sa,f,g)}setFromVector3(a,f=this._order){return this.set(a.x,a.y,a.z,f)}reorder(a){return ca.setFromEuler(this),this.setFromQuaternion(ca,a)}equals(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order}fromArray(a){return this._x=a[0],this._y=a[1],this._z=a[2],a[3]!==void 0&&(this._order=a[3]),this._onChangeCallback(),this}toArray(a=[],f=0){return a[f]=this._x,a[f+1]=this._y,a[f+2]=this._z,a[f+3]=this._order,a}_onChange(a){return this._onChangeCallback=a,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oo.DEFAULT_ORDER="XYZ";class Wl{constructor(){this.mask=1}set(a){this.mask=(1<<a|0)>>>0}enable(a){this.mask|=1<<a|0}enableAll(){this.mask=-1}toggle(a){this.mask^=1<<a|0}disable(a){this.mask&=~(1<<a|0)}disableAll(){this.mask=0}test(a){return(this.mask&a.mask)!==0}isEnabled(a){return(this.mask&(1<<a|0))!==0}}let P$=0;const _a=new K0,ro=new Ei,B1=new ue,o4=new K0,$o=new K0,L$=new K0,k$=new Ei,aa=new K0(1,0,0),la=new K0(0,1,0),pa=new K0(0,0,1),O$={type:"added"},F$={type:"removed"};class _i extends ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P$++}),this.uuid=fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_i.DEFAULT_UP.clone();const a=new K0,f=new Oo,g=new Ei,y=new K0(1,1,1);function P(){g.setFromEuler(f,!1)}function G(){f.setFromQuaternion(g,void 0,!1)}f._onChange(P),g._onChange(G),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:a},rotation:{configurable:!0,enumerable:!0,value:f},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:y},modelViewMatrix:{value:new ue},normalMatrix:{value:new le}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=_i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(a){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(a),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(a){return this.quaternion.premultiply(a),this}setRotationFromAxisAngle(a,f){this.quaternion.setFromAxisAngle(a,f)}setRotationFromEuler(a){this.quaternion.setFromEuler(a,!0)}setRotationFromMatrix(a){this.quaternion.setFromRotationMatrix(a)}setRotationFromQuaternion(a){this.quaternion.copy(a)}rotateOnAxis(a,f){return ro.setFromAxisAngle(a,f),this.quaternion.multiply(ro),this}rotateOnWorldAxis(a,f){return ro.setFromAxisAngle(a,f),this.quaternion.premultiply(ro),this}rotateX(a){return this.rotateOnAxis(aa,a)}rotateY(a){return this.rotateOnAxis(la,a)}rotateZ(a){return this.rotateOnAxis(pa,a)}translateOnAxis(a,f){return _a.copy(a).applyQuaternion(this.quaternion),this.position.add(_a.multiplyScalar(f)),this}translateX(a){return this.translateOnAxis(aa,a)}translateY(a){return this.translateOnAxis(la,a)}translateZ(a){return this.translateOnAxis(pa,a)}localToWorld(a){return this.updateWorldMatrix(!0,!1),a.applyMatrix4(this.matrixWorld)}worldToLocal(a){return this.updateWorldMatrix(!0,!1),a.applyMatrix4(B1.copy(this.matrixWorld).invert())}lookAt(a,f,g){a.isVector3?o4.copy(a):o4.set(a,f,g);const y=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?B1.lookAt($o,o4,this.up):B1.lookAt(o4,$o,this.up),this.quaternion.setFromRotationMatrix(B1),y&&(B1.extractRotation(y.matrixWorld),ro.setFromRotationMatrix(B1),this.quaternion.premultiply(ro.invert()))}add(a){if(arguments.length>1){for(let f=0;f<arguments.length;f++)this.add(arguments[f]);return this}return a===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",a),this):(a&&a.isObject3D?(a.parent!==null&&a.parent.remove(a),a.parent=this,this.children.push(a),a.dispatchEvent(O$)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",a),this)}remove(a){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const f=this.children.indexOf(a);return f!==-1&&(a.parent=null,this.children.splice(f,1),a.dispatchEvent(F$)),this}removeFromParent(){const a=this.parent;return a!==null&&a.remove(this),this}clear(){return this.remove(...this.children)}attach(a){return this.updateWorldMatrix(!0,!1),B1.copy(this.matrixWorld).invert(),a.parent!==null&&(a.parent.updateWorldMatrix(!0,!1),B1.multiply(a.parent.matrixWorld)),a.applyMatrix4(B1),this.add(a),a.updateWorldMatrix(!1,!0),this}getObjectById(a){return this.getObjectByProperty("id",a)}getObjectByName(a){return this.getObjectByProperty("name",a)}getObjectByProperty(a,f){if(this[a]===f)return this;for(let g=0,y=this.children.length;g<y;g++){const G=this.children[g].getObjectByProperty(a,f);if(G!==void 0)return G}}getObjectsByProperty(a,f,g=[]){this[a]===f&&g.push(this);const y=this.children;for(let P=0,G=y.length;P<G;P++)y[P].getObjectsByProperty(a,f,g);return g}getWorldPosition(a){return this.updateWorldMatrix(!0,!1),a.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(a){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,a,L$),a}getWorldScale(a){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,k$,a),a}getWorldDirection(a){this.updateWorldMatrix(!0,!1);const f=this.matrixWorld.elements;return a.set(f[8],f[9],f[10]).normalize()}raycast(){}traverse(a){a(this);const f=this.children;for(let g=0,y=f.length;g<y;g++)f[g].traverse(a)}traverseVisible(a){if(this.visible===!1)return;a(this);const f=this.children;for(let g=0,y=f.length;g<y;g++)f[g].traverseVisible(a)}traverseAncestors(a){const f=this.parent;f!==null&&(a(f),f.traverseAncestors(a))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(a){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0);const f=this.children;for(let g=0,y=f.length;g<y;g++){const P=f[g];(P.matrixWorldAutoUpdate===!0||a===!0)&&P.updateMatrixWorld(a)}}updateWorldMatrix(a,f){const g=this.parent;if(a===!0&&g!==null&&g.matrixWorldAutoUpdate===!0&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),f===!0){const y=this.children;for(let P=0,G=y.length;P<G;P++){const W=y[P];W.matrixWorldAutoUpdate===!0&&W.updateWorldMatrix(!1,!0)}}}toJSON(a){const f=a===void 0||typeof a=="string",g={};f&&(a={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const y={};y.uuid=this.uuid,y.type=this.type,this.name!==""&&(y.name=this.name),this.castShadow===!0&&(y.castShadow=!0),this.receiveShadow===!0&&(y.receiveShadow=!0),this.visible===!1&&(y.visible=!1),this.frustumCulled===!1&&(y.frustumCulled=!1),this.renderOrder!==0&&(y.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(y.userData=this.userData),y.layers=this.layers.mask,y.matrix=this.matrix.toArray(),y.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(y.matrixAutoUpdate=!1),this.isInstancedMesh&&(y.type="InstancedMesh",y.count=this.count,y.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(y.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(y.type="BatchedMesh",y.perObjectFrustumCulled=this.perObjectFrustumCulled,y.sortObjects=this.sortObjects,y.drawRanges=this._drawRanges,y.reservedRanges=this._reservedRanges,y.visibility=this._visibility,y.active=this._active,y.bounds=this._bounds.map(W=>({boxInitialized:W.boxInitialized,boxMin:W.box.min.toArray(),boxMax:W.box.max.toArray(),sphereInitialized:W.sphereInitialized,sphereRadius:W.sphere.radius,sphereCenter:W.sphere.center.toArray()})),y.maxGeometryCount=this._maxGeometryCount,y.maxVertexCount=this._maxVertexCount,y.maxIndexCount=this._maxIndexCount,y.geometryInitialized=this._geometryInitialized,y.geometryCount=this._geometryCount,y.matricesTexture=this._matricesTexture.toJSON(a),this.boundingSphere!==null&&(y.boundingSphere={center:y.boundingSphere.center.toArray(),radius:y.boundingSphere.radius}),this.boundingBox!==null&&(y.boundingBox={min:y.boundingBox.min.toArray(),max:y.boundingBox.max.toArray()}));function P(W,X){return W[X.uuid]===void 0&&(W[X.uuid]=X.toJSON(a)),X.uuid}if(this.isScene)this.background&&(this.background.isColor?y.background=this.background.toJSON():this.background.isTexture&&(y.background=this.background.toJSON(a).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(y.environment=this.environment.toJSON(a).uuid);else if(this.isMesh||this.isLine||this.isPoints){y.geometry=P(a.geometries,this.geometry);const W=this.geometry.parameters;if(W!==void 0&&W.shapes!==void 0){const X=W.shapes;if(Array.isArray(X))for(let Y=0,Q=X.length;Y<Q;Y++){const o0=X[Y];P(a.shapes,o0)}else P(a.shapes,X)}}if(this.isSkinnedMesh&&(y.bindMode=this.bindMode,y.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(P(a.skeletons,this.skeleton),y.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const W=[];for(let X=0,Y=this.material.length;X<Y;X++)W.push(P(a.materials,this.material[X]));y.material=W}else y.material=P(a.materials,this.material);if(this.children.length>0){y.children=[];for(let W=0;W<this.children.length;W++)y.children.push(this.children[W].toJSON(a).object)}if(this.animations.length>0){y.animations=[];for(let W=0;W<this.animations.length;W++){const X=this.animations[W];y.animations.push(P(a.animations,X))}}if(f){const W=G(a.geometries),X=G(a.materials),Y=G(a.textures),Q=G(a.images),o0=G(a.shapes),a0=G(a.skeletons),m0=G(a.animations),v0=G(a.nodes);W.length>0&&(g.geometries=W),X.length>0&&(g.materials=X),Y.length>0&&(g.textures=Y),Q.length>0&&(g.images=Q),o0.length>0&&(g.shapes=o0),a0.length>0&&(g.skeletons=a0),m0.length>0&&(g.animations=m0),v0.length>0&&(g.nodes=v0)}return g.object=y,g;function G(W){const X=[];for(const Y in W){const Q=W[Y];delete Q.metadata,X.push(Q)}return X}}clone(a){return new this.constructor().copy(this,a)}copy(a,f=!0){if(this.name=a.name,this.up.copy(a.up),this.position.copy(a.position),this.rotation.order=a.rotation.order,this.quaternion.copy(a.quaternion),this.scale.copy(a.scale),this.matrix.copy(a.matrix),this.matrixWorld.copy(a.matrixWorld),this.matrixAutoUpdate=a.matrixAutoUpdate,this.matrixWorldAutoUpdate=a.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=a.matrixWorldNeedsUpdate,this.layers.mask=a.layers.mask,this.visible=a.visible,this.castShadow=a.castShadow,this.receiveShadow=a.receiveShadow,this.frustumCulled=a.frustumCulled,this.renderOrder=a.renderOrder,this.animations=a.animations.slice(),this.userData=JSON.parse(JSON.stringify(a.userData)),f===!0)for(let g=0;g<a.children.length;g++){const y=a.children[g];this.add(y.clone())}return this}}_i.DEFAULT_UP=new K0(0,1,0);_i.DEFAULT_MATRIX_AUTO_UPDATE=!0;_i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new K0,N1=new K0,r6=new K0,U1=new K0,oo=new K0,so=new K0,ua=new K0,o6=new K0,s6=new K0,c6=new K0;class h1{constructor(a=new K0,f=new K0,g=new K0){this.a=a,this.b=f,this.c=g}static getNormal(a,f,g,y){y.subVectors(g,f),$n.subVectors(a,f),y.cross($n);const P=y.lengthSq();return P>0?y.multiplyScalar(1/Math.sqrt(P)):y.set(0,0,0)}static getBarycoord(a,f,g,y,P){$n.subVectors(y,f),N1.subVectors(g,f),r6.subVectors(a,f);const G=$n.dot($n),W=$n.dot(N1),X=$n.dot(r6),Y=N1.dot(N1),Q=N1.dot(r6),o0=G*Y-W*W;if(o0===0)return P.set(0,0,0),null;const a0=1/o0,m0=(Y*X-W*Q)*a0,v0=(G*Q-W*X)*a0;return P.set(1-m0-v0,v0,m0)}static containsPoint(a,f,g,y){return this.getBarycoord(a,f,g,y,U1)===null?!1:U1.x>=0&&U1.y>=0&&U1.x+U1.y<=1}static getInterpolation(a,f,g,y,P,G,W,X){return this.getBarycoord(a,f,g,y,U1)===null?(X.x=0,X.y=0,"z"in X&&(X.z=0),"w"in X&&(X.w=0),null):(X.setScalar(0),X.addScaledVector(P,U1.x),X.addScaledVector(G,U1.y),X.addScaledVector(W,U1.z),X)}static isFrontFacing(a,f,g,y){return $n.subVectors(g,f),N1.subVectors(a,f),$n.cross(N1).dot(y)<0}set(a,f,g){return this.a.copy(a),this.b.copy(f),this.c.copy(g),this}setFromPointsAndIndices(a,f,g,y){return this.a.copy(a[f]),this.b.copy(a[g]),this.c.copy(a[y]),this}setFromAttributeAndIndices(a,f,g,y){return this.a.fromBufferAttribute(a,f),this.b.fromBufferAttribute(a,g),this.c.fromBufferAttribute(a,y),this}clone(){return new this.constructor().copy(this)}copy(a){return this.a.copy(a.a),this.b.copy(a.b),this.c.copy(a.c),this}getArea(){return $n.subVectors(this.c,this.b),N1.subVectors(this.a,this.b),$n.cross(N1).length()*.5}getMidpoint(a){return a.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(a){return h1.getNormal(this.a,this.b,this.c,a)}getPlane(a){return a.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(a,f){return h1.getBarycoord(a,this.a,this.b,this.c,f)}getInterpolation(a,f,g,y,P){return h1.getInterpolation(a,this.a,this.b,this.c,f,g,y,P)}containsPoint(a){return h1.containsPoint(a,this.a,this.b,this.c)}isFrontFacing(a){return h1.isFrontFacing(this.a,this.b,this.c,a)}intersectsBox(a){return a.intersectsTriangle(this)}closestPointToPoint(a,f){const g=this.a,y=this.b,P=this.c;let G,W;oo.subVectors(y,g),so.subVectors(P,g),o6.subVectors(a,g);const X=oo.dot(o6),Y=so.dot(o6);if(X<=0&&Y<=0)return f.copy(g);s6.subVectors(a,y);const Q=oo.dot(s6),o0=so.dot(s6);if(Q>=0&&o0<=Q)return f.copy(y);const a0=X*o0-Q*Y;if(a0<=0&&X>=0&&Q<=0)return G=X/(X-Q),f.copy(g).addScaledVector(oo,G);c6.subVectors(a,P);const m0=oo.dot(c6),v0=so.dot(c6);if(v0>=0&&m0<=v0)return f.copy(P);const C0=m0*Y-X*v0;if(C0<=0&&Y>=0&&v0<=0)return W=Y/(Y-v0),f.copy(g).addScaledVector(so,W);const u0=Q*v0-m0*o0;if(u0<=0&&o0-Q>=0&&m0-v0>=0)return ua.subVectors(P,y),W=(o0-Q)/(o0-Q+(m0-v0)),f.copy(y).addScaledVector(ua,W);const t0=1/(u0+C0+a0);return G=C0*t0,W=a0*t0,f.copy(g).addScaledVector(oo,G).addScaledVector(so,W)}equals(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c)}}const Vl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},s4={h:0,s:0,l:0};function _6(E,a,f){return f<0&&(f+=1),f>1&&(f-=1),f<1/6?E+(a-E)*6*f:f<1/2?a:f<2/3?E+(a-E)*6*(2/3-f):E}class qt{constructor(a,f,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(a,f,g)}set(a,f,g){if(f===void 0&&g===void 0){const y=a;y&&y.isColor?this.copy(y):typeof y=="number"?this.setHex(y):typeof y=="string"&&this.setStyle(y)}else this.setRGB(a,f,g);return this}setScalar(a){return this.r=a,this.g=a,this.b=a,this}setHex(a,f=vi){return a=Math.floor(a),this.r=(a>>16&255)/255,this.g=(a>>8&255)/255,this.b=(a&255)/255,Ne.toWorkingColorSpace(this,f),this}setRGB(a,f,g,y=Ne.workingColorSpace){return this.r=a,this.g=f,this.b=g,Ne.toWorkingColorSpace(this,y),this}setHSL(a,f,g,y=Ne.workingColorSpace){if(a=K6(a,1),f=Li(f,0,1),g=Li(g,0,1),f===0)this.r=this.g=this.b=g;else{const P=g<=.5?g*(1+f):g+f-g*f,G=2*g-P;this.r=_6(G,P,a+1/3),this.g=_6(G,P,a),this.b=_6(G,P,a-1/3)}return Ne.toWorkingColorSpace(this,y),this}setStyle(a,f=vi){function g(P){P!==void 0&&parseFloat(P)<1&&console.warn("THREE.Color: Alpha component of "+a+" will be ignored.")}let y;if(y=/^(\w+)\(([^\)]*)\)/.exec(a)){let P;const G=y[1],W=y[2];switch(G){case"rgb":case"rgba":if(P=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(W))return g(P[4]),this.setRGB(Math.min(255,parseInt(P[1],10))/255,Math.min(255,parseInt(P[2],10))/255,Math.min(255,parseInt(P[3],10))/255,f);if(P=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(W))return g(P[4]),this.setRGB(Math.min(100,parseInt(P[1],10))/100,Math.min(100,parseInt(P[2],10))/100,Math.min(100,parseInt(P[3],10))/100,f);break;case"hsl":case"hsla":if(P=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(W))return g(P[4]),this.setHSL(parseFloat(P[1])/360,parseFloat(P[2])/100,parseFloat(P[3])/100,f);break;default:console.warn("THREE.Color: Unknown color model "+a)}}else if(y=/^\#([A-Fa-f\d]+)$/.exec(a)){const P=y[1],G=P.length;if(G===3)return this.setRGB(parseInt(P.charAt(0),16)/15,parseInt(P.charAt(1),16)/15,parseInt(P.charAt(2),16)/15,f);if(G===6)return this.setHex(parseInt(P,16),f);console.warn("THREE.Color: Invalid hex color "+a)}else if(a&&a.length>0)return this.setColorName(a,f);return this}setColorName(a,f=vi){const g=Vl[a.toLowerCase()];return g!==void 0?this.setHex(g,f):console.warn("THREE.Color: Unknown color "+a),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(a){return this.r=a.r,this.g=a.g,this.b=a.b,this}copySRGBToLinear(a){return this.r=wo(a.r),this.g=wo(a.g),this.b=wo(a.b),this}copyLinearToSRGB(a){return this.r=Z3(a.r),this.g=Z3(a.g),this.b=Z3(a.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(a=vi){return Ne.fromWorkingColorSpace(en.copy(this),a),Math.round(Li(en.r*255,0,255))*65536+Math.round(Li(en.g*255,0,255))*256+Math.round(Li(en.b*255,0,255))}getHexString(a=vi){return("000000"+this.getHex(a).toString(16)).slice(-6)}getHSL(a,f=Ne.workingColorSpace){Ne.fromWorkingColorSpace(en.copy(this),f);const g=en.r,y=en.g,P=en.b,G=Math.max(g,y,P),W=Math.min(g,y,P);let X,Y;const Q=(W+G)/2;if(W===G)X=0,Y=0;else{const o0=G-W;switch(Y=Q<=.5?o0/(G+W):o0/(2-G-W),G){case g:X=(y-P)/o0+(y<P?6:0);break;case y:X=(P-g)/o0+2;break;case P:X=(g-y)/o0+4;break}X/=6}return a.h=X,a.s=Y,a.l=Q,a}getRGB(a,f=Ne.workingColorSpace){return Ne.fromWorkingColorSpace(en.copy(this),f),a.r=en.r,a.g=en.g,a.b=en.b,a}getStyle(a=vi){Ne.fromWorkingColorSpace(en.copy(this),a);const f=en.r,g=en.g,y=en.b;return a!==vi?`color(${a} ${f.toFixed(3)} ${g.toFixed(3)} ${y.toFixed(3)})`:`rgb(${Math.round(f*255)},${Math.round(g*255)},${Math.round(y*255)})`}offsetHSL(a,f,g){return this.getHSL(rr),this.setHSL(rr.h+a,rr.s+f,rr.l+g)}add(a){return this.r+=a.r,this.g+=a.g,this.b+=a.b,this}addColors(a,f){return this.r=a.r+f.r,this.g=a.g+f.g,this.b=a.b+f.b,this}addScalar(a){return this.r+=a,this.g+=a,this.b+=a,this}sub(a){return this.r=Math.max(0,this.r-a.r),this.g=Math.max(0,this.g-a.g),this.b=Math.max(0,this.b-a.b),this}multiply(a){return this.r*=a.r,this.g*=a.g,this.b*=a.b,this}multiplyScalar(a){return this.r*=a,this.g*=a,this.b*=a,this}lerp(a,f){return this.r+=(a.r-this.r)*f,this.g+=(a.g-this.g)*f,this.b+=(a.b-this.b)*f,this}lerpColors(a,f,g){return this.r=a.r+(f.r-a.r)*g,this.g=a.g+(f.g-a.g)*g,this.b=a.b+(f.b-a.b)*g,this}lerpHSL(a,f){this.getHSL(rr),a.getHSL(s4);const g=cs(rr.h,s4.h,f),y=cs(rr.s,s4.s,f),P=cs(rr.l,s4.l,f);return this.setHSL(g,y,P),this}setFromVector3(a){return this.r=a.x,this.g=a.y,this.b=a.z,this}applyMatrix3(a){const f=this.r,g=this.g,y=this.b,P=a.elements;return this.r=P[0]*f+P[3]*g+P[6]*y,this.g=P[1]*f+P[4]*g+P[7]*y,this.b=P[2]*f+P[5]*g+P[8]*y,this}equals(a){return a.r===this.r&&a.g===this.g&&a.b===this.b}fromArray(a,f=0){return this.r=a[f],this.g=a[f+1],this.b=a[f+2],this}toArray(a=[],f=0){return a[f]=this.r,a[f+1]=this.g,a[f+2]=this.b,a}fromBufferAttribute(a,f){return this.r=a.getX(f),this.g=a.getY(f),this.b=a.getZ(f),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new qt;qt.NAMES=Vl;let B$=0;class vs extends ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:B$++}),this.uuid=fr(),this.name="",this.type="Material",this.blending=So,this.side=y1,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ps,this.blendDst=L4,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=k4,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=J_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(a){this._alphaTest>0!=a>0&&this.version++,this._alphaTest=a}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(a){if(a!==void 0)for(const f in a){const g=a[f];if(g===void 0){console.warn(`THREE.Material: parameter '${f}' has value of undefined.`);continue}const y=this[f];if(y===void 0){console.warn(`THREE.Material: '${f}' is not a property of THREE.${this.type}.`);continue}y&&y.isColor?y.set(g):y&&y.isVector3&&g&&g.isVector3?y.copy(g):this[f]=g}}toJSON(a){const f=a===void 0||typeof a=="string";f&&(a={textures:{},images:{}});const g={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(a).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(a).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(a).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(a).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(a).uuid),this.anisotropy!==void 0&&(g.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(g.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(g.anisotropyMap=this.anisotropyMap.toJSON(a).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(a).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(a).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(a).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(a).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(a).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(a).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(a).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(a).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(a).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(a).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(a).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(a).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(a).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(a).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(a).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(a).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(a).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(a).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==So&&(g.blending=this.blending),this.side!==y1&&(g.side=this.side),this.vertexColors===!0&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=!0),this.blendSrc!==ps&&(g.blendSrc=this.blendSrc),this.blendDst!==L4&&(g.blendDst=this.blendDst),this.blendEquation!==Ir&&(g.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(g.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(g.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(g.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(g.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(g.blendAlpha=this.blendAlpha),this.depthFunc!==k4&&(g.depthFunc=this.depthFunc),this.depthTest===!1&&(g.depthTest=this.depthTest),this.depthWrite===!1&&(g.depthWrite=this.depthWrite),this.colorWrite===!1&&(g.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(g.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==J_&&(g.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(g.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(g.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(g.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(g.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(g.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(g.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaHash===!0&&(g.alphaHash=!0),this.alphaToCoverage===!0&&(g.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=!0),this.forceSinglePass===!0&&(g.forceSinglePass=!0),this.wireframe===!0&&(g.wireframe=!0),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=!0),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),Object.keys(this.userData).length>0&&(g.userData=this.userData);function y(P){const G=[];for(const W in P){const X=P[W];delete X.metadata,G.push(X)}return G}if(f){const P=y(a.textures),G=y(a.images);P.length>0&&(g.textures=P),G.length>0&&(g.images=G)}return g}clone(){return new this.constructor().copy(this)}copy(a){this.name=a.name,this.blending=a.blending,this.side=a.side,this.vertexColors=a.vertexColors,this.opacity=a.opacity,this.transparent=a.transparent,this.blendSrc=a.blendSrc,this.blendDst=a.blendDst,this.blendEquation=a.blendEquation,this.blendSrcAlpha=a.blendSrcAlpha,this.blendDstAlpha=a.blendDstAlpha,this.blendEquationAlpha=a.blendEquationAlpha,this.blendColor.copy(a.blendColor),this.blendAlpha=a.blendAlpha,this.depthFunc=a.depthFunc,this.depthTest=a.depthTest,this.depthWrite=a.depthWrite,this.stencilWriteMask=a.stencilWriteMask,this.stencilFunc=a.stencilFunc,this.stencilRef=a.stencilRef,this.stencilFuncMask=a.stencilFuncMask,this.stencilFail=a.stencilFail,this.stencilZFail=a.stencilZFail,this.stencilZPass=a.stencilZPass,this.stencilWrite=a.stencilWrite;const f=a.clippingPlanes;let g=null;if(f!==null){const y=f.length;g=new Array(y);for(let P=0;P!==y;++P)g[P]=f[P].clone()}return this.clippingPlanes=g,this.clipIntersection=a.clipIntersection,this.clipShadows=a.clipShadows,this.shadowSide=a.shadowSide,this.colorWrite=a.colorWrite,this.precision=a.precision,this.polygonOffset=a.polygonOffset,this.polygonOffsetFactor=a.polygonOffsetFactor,this.polygonOffsetUnits=a.polygonOffsetUnits,this.dithering=a.dithering,this.alphaTest=a.alphaTest,this.alphaHash=a.alphaHash,this.alphaToCoverage=a.alphaToCoverage,this.premultipliedAlpha=a.premultipliedAlpha,this.forceSinglePass=a.forceSinglePass,this.visible=a.visible,this.toneMapped=a.toneMapped,this.userData=JSON.parse(JSON.stringify(a.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(a){a===!0&&this.version++}}class d1 extends vs{constructor(a){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(a)}copy(a){return super.copy(a),this.color.copy(a.color),this.map=a.map,this.lightMap=a.lightMap,this.lightMapIntensity=a.lightMapIntensity,this.aoMap=a.aoMap,this.aoMapIntensity=a.aoMapIntensity,this.specularMap=a.specularMap,this.alphaMap=a.alphaMap,this.envMap=a.envMap,this.combine=a.combine,this.reflectivity=a.reflectivity,this.refractionRatio=a.refractionRatio,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.wireframeLinecap=a.wireframeLinecap,this.wireframeLinejoin=a.wireframeLinejoin,this.fog=a.fog,this}}const Ai=new K0,c4=new st;class e1{constructor(a,f,g=!1){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=a,this.itemSize=f,this.count=a!==void 0?a.length/f:0,this.normalized=g,this.usage=$_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=f1,this.version=0}onUploadCallback(){}set needsUpdate(a){a===!0&&this.version++}get updateRange(){return xo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(a){return this.usage=a,this}addUpdateRange(a,f){this.updateRanges.push({start:a,count:f})}clearUpdateRanges(){this.updateRanges.length=0}copy(a){return this.name=a.name,this.array=new a.array.constructor(a.array),this.itemSize=a.itemSize,this.count=a.count,this.normalized=a.normalized,this.usage=a.usage,this.gpuType=a.gpuType,this}copyAt(a,f,g){a*=this.itemSize,g*=f.itemSize;for(let y=0,P=this.itemSize;y<P;y++)this.array[a+y]=f.array[g+y];return this}copyArray(a){return this.array.set(a),this}applyMatrix3(a){if(this.itemSize===2)for(let f=0,g=this.count;f<g;f++)c4.fromBufferAttribute(this,f),c4.applyMatrix3(a),this.setXY(f,c4.x,c4.y);else if(this.itemSize===3)for(let f=0,g=this.count;f<g;f++)Ai.fromBufferAttribute(this,f),Ai.applyMatrix3(a),this.setXYZ(f,Ai.x,Ai.y,Ai.z);return this}applyMatrix4(a){for(let f=0,g=this.count;f<g;f++)Ai.fromBufferAttribute(this,f),Ai.applyMatrix4(a),this.setXYZ(f,Ai.x,Ai.y,Ai.z);return this}applyNormalMatrix(a){for(let f=0,g=this.count;f<g;f++)Ai.fromBufferAttribute(this,f),Ai.applyNormalMatrix(a),this.setXYZ(f,Ai.x,Ai.y,Ai.z);return this}transformDirection(a){for(let f=0,g=this.count;f<g;f++)Ai.fromBufferAttribute(this,f),Ai.transformDirection(a),this.setXYZ(f,Ai.x,Ai.y,Ai.z);return this}set(a,f=0){return this.array.set(a,f),this}getComponent(a,f){let g=this.array[a*this.itemSize+f];return this.normalized&&(g=ho(g,this.array)),g}setComponent(a,f,g){return this.normalized&&(g=un(g,this.array)),this.array[a*this.itemSize+f]=g,this}getX(a){let f=this.array[a*this.itemSize];return this.normalized&&(f=ho(f,this.array)),f}setX(a,f){return this.normalized&&(f=un(f,this.array)),this.array[a*this.itemSize]=f,this}getY(a){let f=this.array[a*this.itemSize+1];return this.normalized&&(f=ho(f,this.array)),f}setY(a,f){return this.normalized&&(f=un(f,this.array)),this.array[a*this.itemSize+1]=f,this}getZ(a){let f=this.array[a*this.itemSize+2];return this.normalized&&(f=ho(f,this.array)),f}setZ(a,f){return this.normalized&&(f=un(f,this.array)),this.array[a*this.itemSize+2]=f,this}getW(a){let f=this.array[a*this.itemSize+3];return this.normalized&&(f=ho(f,this.array)),f}setW(a,f){return this.normalized&&(f=un(f,this.array)),this.array[a*this.itemSize+3]=f,this}setXY(a,f,g){return a*=this.itemSize,this.normalized&&(f=un(f,this.array),g=un(g,this.array)),this.array[a+0]=f,this.array[a+1]=g,this}setXYZ(a,f,g,y){return a*=this.itemSize,this.normalized&&(f=un(f,this.array),g=un(g,this.array),y=un(y,this.array)),this.array[a+0]=f,this.array[a+1]=g,this.array[a+2]=y,this}setXYZW(a,f,g,y,P){return a*=this.itemSize,this.normalized&&(f=un(f,this.array),g=un(g,this.array),y=un(y,this.array),P=un(P,this.array)),this.array[a+0]=f,this.array[a+1]=g,this.array[a+2]=y,this.array[a+3]=P,this}onUpload(a){return this.onUploadCallback=a,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const a={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(a.name=this.name),this.usage!==$_&&(a.usage=this.usage),a}}class Z6 extends e1{constructor(a,f,g){super(new Uint16Array(a),f,g)}}class zl extends e1{constructor(a,f,g){super(new Uint32Array(a),f,g)}}class pi extends e1{constructor(a,f,g){super(new Float32Array(a),f,g)}}let N$=0;const jn=new ue,a6=new _i,co=new K0,kn=new Lo,ts=new Lo,bi=new K0;class Nn extends ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:N$++}),this.uuid=fr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(a){return Array.isArray(a)?this.index=new(Bl(a)?zl:Z6)(a,1):this.index=a,this}getAttribute(a){return this.attributes[a]}setAttribute(a,f){return this.attributes[a]=f,this}deleteAttribute(a){return delete this.attributes[a],this}hasAttribute(a){return this.attributes[a]!==void 0}addGroup(a,f,g=0){this.groups.push({start:a,count:f,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(a,f){this.drawRange.start=a,this.drawRange.count=f}applyMatrix4(a){const f=this.attributes.position;f!==void 0&&(f.applyMatrix4(a),f.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const P=new le().getNormalMatrix(a);g.applyNormalMatrix(P),g.needsUpdate=!0}const y=this.attributes.tangent;return y!==void 0&&(y.transformDirection(a),y.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(a){return jn.makeRotationFromQuaternion(a),this.applyMatrix4(jn),this}rotateX(a){return jn.makeRotationX(a),this.applyMatrix4(jn),this}rotateY(a){return jn.makeRotationY(a),this.applyMatrix4(jn),this}rotateZ(a){return jn.makeRotationZ(a),this.applyMatrix4(jn),this}translate(a,f,g){return jn.makeTranslation(a,f,g),this.applyMatrix4(jn),this}scale(a,f,g){return jn.makeScale(a,f,g),this.applyMatrix4(jn),this}lookAt(a){return a6.lookAt(a),a6.updateMatrix(),this.applyMatrix4(a6.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(co).negate(),this.translate(co.x,co.y,co.z),this}setFromPoints(a){const f=[];for(let g=0,y=a.length;g<y;g++){const P=a[g];f.push(P.x,P.y,P.z||0)}return this.setAttribute("position",new pi(f,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lo);const a=this.attributes.position,f=this.morphAttributes.position;if(a&&a.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new K0(-1/0,-1/0,-1/0),new K0(1/0,1/0,1/0));return}if(a!==void 0){if(this.boundingBox.setFromBufferAttribute(a),f)for(let g=0,y=f.length;g<y;g++){const P=f[g];kn.setFromBufferAttribute(P),this.morphTargetsRelative?(bi.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(bi),bi.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(bi)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ko);const a=this.attributes.position,f=this.morphAttributes.position;if(a&&a.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new K0,1/0);return}if(a){const g=this.boundingSphere.center;if(kn.setFromBufferAttribute(a),f)for(let P=0,G=f.length;P<G;P++){const W=f[P];ts.setFromBufferAttribute(W),this.morphTargetsRelative?(bi.addVectors(kn.min,ts.min),kn.expandByPoint(bi),bi.addVectors(kn.max,ts.max),kn.expandByPoint(bi)):(kn.expandByPoint(ts.min),kn.expandByPoint(ts.max))}kn.getCenter(g);let y=0;for(let P=0,G=a.count;P<G;P++)bi.fromBufferAttribute(a,P),y=Math.max(y,g.distanceToSquared(bi));if(f)for(let P=0,G=f.length;P<G;P++){const W=f[P],X=this.morphTargetsRelative;for(let Y=0,Q=W.count;Y<Q;Y++)bi.fromBufferAttribute(W,Y),X&&(co.fromBufferAttribute(a,Y),bi.add(co)),y=Math.max(y,g.distanceToSquared(bi))}this.boundingSphere.radius=Math.sqrt(y),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const a=this.index,f=this.attributes;if(a===null||f.position===void 0||f.normal===void 0||f.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=a.array,y=f.position.array,P=f.normal.array,G=f.uv.array,W=y.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new e1(new Float32Array(4*W),4));const X=this.getAttribute("tangent").array,Y=[],Q=[];for(let R0=0;R0<W;R0++)Y[R0]=new K0,Q[R0]=new K0;const o0=new K0,a0=new K0,m0=new K0,v0=new st,C0=new st,u0=new st,t0=new K0,N0=new K0;function T0(R0,j0,R2){o0.fromArray(y,R0*3),a0.fromArray(y,j0*3),m0.fromArray(y,R2*3),v0.fromArray(G,R0*2),C0.fromArray(G,j0*2),u0.fromArray(G,R2*2),a0.sub(o0),m0.sub(o0),C0.sub(v0),u0.sub(v0);const N2=1/(C0.x*u0.y-u0.x*C0.y);isFinite(N2)&&(t0.copy(a0).multiplyScalar(u0.y).addScaledVector(m0,-C0.y).multiplyScalar(N2),N0.copy(m0).multiplyScalar(C0.x).addScaledVector(a0,-u0.x).multiplyScalar(N2),Y[R0].add(t0),Y[j0].add(t0),Y[R2].add(t0),Q[R0].add(N0),Q[j0].add(N0),Q[R2].add(N0))}let O0=this.groups;O0.length===0&&(O0=[{start:0,count:g.length}]);for(let R0=0,j0=O0.length;R0<j0;++R0){const R2=O0[R0],N2=R2.start,o2=R2.count;for(let x2=N2,$0=N2+o2;x2<$0;x2+=3)T0(g[x2+0],g[x2+1],g[x2+2])}const k0=new K0,L0=new K0,D0=new K0,V0=new K0;function h2(R0){D0.fromArray(P,R0*3),V0.copy(D0);const j0=Y[R0];k0.copy(j0),k0.sub(D0.multiplyScalar(D0.dot(j0))).normalize(),L0.crossVectors(V0,j0);const N2=L0.dot(Q[R0])<0?-1:1;X[R0*4]=k0.x,X[R0*4+1]=k0.y,X[R0*4+2]=k0.z,X[R0*4+3]=N2}for(let R0=0,j0=O0.length;R0<j0;++R0){const R2=O0[R0],N2=R2.start,o2=R2.count;for(let x2=N2,$0=N2+o2;x2<$0;x2+=3)h2(g[x2+0]),h2(g[x2+1]),h2(g[x2+2])}}computeVertexNormals(){const a=this.index,f=this.getAttribute("position");if(f!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new e1(new Float32Array(f.count*3),3),this.setAttribute("normal",g);else for(let a0=0,m0=g.count;a0<m0;a0++)g.setXYZ(a0,0,0,0);const y=new K0,P=new K0,G=new K0,W=new K0,X=new K0,Y=new K0,Q=new K0,o0=new K0;if(a)for(let a0=0,m0=a.count;a0<m0;a0+=3){const v0=a.getX(a0+0),C0=a.getX(a0+1),u0=a.getX(a0+2);y.fromBufferAttribute(f,v0),P.fromBufferAttribute(f,C0),G.fromBufferAttribute(f,u0),Q.subVectors(G,P),o0.subVectors(y,P),Q.cross(o0),W.fromBufferAttribute(g,v0),X.fromBufferAttribute(g,C0),Y.fromBufferAttribute(g,u0),W.add(Q),X.add(Q),Y.add(Q),g.setXYZ(v0,W.x,W.y,W.z),g.setXYZ(C0,X.x,X.y,X.z),g.setXYZ(u0,Y.x,Y.y,Y.z)}else for(let a0=0,m0=f.count;a0<m0;a0+=3)y.fromBufferAttribute(f,a0+0),P.fromBufferAttribute(f,a0+1),G.fromBufferAttribute(f,a0+2),Q.subVectors(G,P),o0.subVectors(y,P),Q.cross(o0),g.setXYZ(a0+0,Q.x,Q.y,Q.z),g.setXYZ(a0+1,Q.x,Q.y,Q.z),g.setXYZ(a0+2,Q.x,Q.y,Q.z);this.normalizeNormals(),g.needsUpdate=!0}}normalizeNormals(){const a=this.attributes.normal;for(let f=0,g=a.count;f<g;f++)bi.fromBufferAttribute(a,f),bi.normalize(),a.setXYZ(f,bi.x,bi.y,bi.z)}toNonIndexed(){function a(W,X){const Y=W.array,Q=W.itemSize,o0=W.normalized,a0=new Y.constructor(X.length*Q);let m0=0,v0=0;for(let C0=0,u0=X.length;C0<u0;C0++){W.isInterleavedBufferAttribute?m0=X[C0]*W.data.stride+W.offset:m0=X[C0]*Q;for(let t0=0;t0<Q;t0++)a0[v0++]=Y[m0++]}return new e1(a0,Q,o0)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const f=new Nn,g=this.index.array,y=this.attributes;for(const W in y){const X=y[W],Y=a(X,g);f.setAttribute(W,Y)}const P=this.morphAttributes;for(const W in P){const X=[],Y=P[W];for(let Q=0,o0=Y.length;Q<o0;Q++){const a0=Y[Q],m0=a(a0,g);X.push(m0)}f.morphAttributes[W]=X}f.morphTargetsRelative=this.morphTargetsRelative;const G=this.groups;for(let W=0,X=G.length;W<X;W++){const Y=G[W];f.addGroup(Y.start,Y.count,Y.materialIndex)}return f}toJSON(){const a={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),Object.keys(this.userData).length>0&&(a.userData=this.userData),this.parameters!==void 0){const X=this.parameters;for(const Y in X)X[Y]!==void 0&&(a[Y]=X[Y]);return a}a.data={attributes:{}};const f=this.index;f!==null&&(a.data.index={type:f.array.constructor.name,array:Array.prototype.slice.call(f.array)});const g=this.attributes;for(const X in g){const Y=g[X];a.data.attributes[X]=Y.toJSON(a.data)}const y={};let P=!1;for(const X in this.morphAttributes){const Y=this.morphAttributes[X],Q=[];for(let o0=0,a0=Y.length;o0<a0;o0++){const m0=Y[o0];Q.push(m0.toJSON(a.data))}Q.length>0&&(y[X]=Q,P=!0)}P&&(a.data.morphAttributes=y,a.data.morphTargetsRelative=this.morphTargetsRelative);const G=this.groups;G.length>0&&(a.data.groups=JSON.parse(JSON.stringify(G)));const W=this.boundingSphere;return W!==null&&(a.data.boundingSphere={center:W.center.toArray(),radius:W.radius}),a}clone(){return new this.constructor().copy(this)}copy(a){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const f={};this.name=a.name;const g=a.index;g!==null&&this.setIndex(g.clone(f));const y=a.attributes;for(const Y in y){const Q=y[Y];this.setAttribute(Y,Q.clone(f))}const P=a.morphAttributes;for(const Y in P){const Q=[],o0=P[Y];for(let a0=0,m0=o0.length;a0<m0;a0++)Q.push(o0[a0].clone(f));this.morphAttributes[Y]=Q}this.morphTargetsRelative=a.morphTargetsRelative;const G=a.groups;for(let Y=0,Q=G.length;Y<Q;Y++){const o0=G[Y];this.addGroup(o0.start,o0.count,o0.materialIndex)}const W=a.boundingBox;W!==null&&(this.boundingBox=W.clone());const X=a.boundingSphere;return X!==null&&(this.boundingSphere=X.clone()),this.drawRange.start=a.drawRange.start,this.drawRange.count=a.drawRange.count,this.userData=a.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fa=new ue,Tr=new b4,_4=new ko,ha=new K0,_o=new K0,ao=new K0,lo=new K0,l6=new K0,a4=new K0,l4=new st,p4=new st,u4=new st,ma=new K0,da=new K0,ya=new K0,f4=new K0,h4=new K0;class Zi extends _i{constructor(a=new Nn,f=new d1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=a,this.material=f,this.updateMorphTargets()}copy(a,f){return super.copy(a,f),a.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=a.morphTargetInfluences.slice()),a.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},a.morphTargetDictionary)),this.material=Array.isArray(a.material)?a.material.slice():a.material,this.geometry=a.geometry,this}updateMorphTargets(){const f=this.geometry.morphAttributes,g=Object.keys(f);if(g.length>0){const y=f[g[0]];if(y!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let P=0,G=y.length;P<G;P++){const W=y[P].name||String(P);this.morphTargetInfluences.push(0),this.morphTargetDictionary[W]=P}}}}getVertexPosition(a,f){const g=this.geometry,y=g.attributes.position,P=g.morphAttributes.position,G=g.morphTargetsRelative;f.fromBufferAttribute(y,a);const W=this.morphTargetInfluences;if(P&&W){a4.set(0,0,0);for(let X=0,Y=P.length;X<Y;X++){const Q=W[X],o0=P[X];Q!==0&&(l6.fromBufferAttribute(o0,a),G?a4.addScaledVector(l6,Q):a4.addScaledVector(l6.sub(f),Q))}f.add(a4)}return f}raycast(a,f){const g=this.geometry,y=this.material,P=this.matrixWorld;y!==void 0&&(g.boundingSphere===null&&g.computeBoundingSphere(),_4.copy(g.boundingSphere),_4.applyMatrix4(P),Tr.copy(a.ray).recast(a.near),!(_4.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(_4,ha)===null||Tr.origin.distanceToSquared(ha)>(a.far-a.near)**2))&&(fa.copy(P).invert(),Tr.copy(a.ray).applyMatrix4(fa),!(g.boundingBox!==null&&Tr.intersectsBox(g.boundingBox)===!1)&&this._computeIntersections(a,f,Tr)))}_computeIntersections(a,f,g){let y;const P=this.geometry,G=this.material,W=P.index,X=P.attributes.position,Y=P.attributes.uv,Q=P.attributes.uv1,o0=P.attributes.normal,a0=P.groups,m0=P.drawRange;if(W!==null)if(Array.isArray(G))for(let v0=0,C0=a0.length;v0<C0;v0++){const u0=a0[v0],t0=G[u0.materialIndex],N0=Math.max(u0.start,m0.start),T0=Math.min(W.count,Math.min(u0.start+u0.count,m0.start+m0.count));for(let O0=N0,k0=T0;O0<k0;O0+=3){const L0=W.getX(O0),D0=W.getX(O0+1),V0=W.getX(O0+2);y=m4(this,t0,a,g,Y,Q,o0,L0,D0,V0),y&&(y.faceIndex=Math.floor(O0/3),y.face.materialIndex=u0.materialIndex,f.push(y))}}else{const v0=Math.max(0,m0.start),C0=Math.min(W.count,m0.start+m0.count);for(let u0=v0,t0=C0;u0<t0;u0+=3){const N0=W.getX(u0),T0=W.getX(u0+1),O0=W.getX(u0+2);y=m4(this,G,a,g,Y,Q,o0,N0,T0,O0),y&&(y.faceIndex=Math.floor(u0/3),f.push(y))}}else if(X!==void 0)if(Array.isArray(G))for(let v0=0,C0=a0.length;v0<C0;v0++){const u0=a0[v0],t0=G[u0.materialIndex],N0=Math.max(u0.start,m0.start),T0=Math.min(X.count,Math.min(u0.start+u0.count,m0.start+m0.count));for(let O0=N0,k0=T0;O0<k0;O0+=3){const L0=O0,D0=O0+1,V0=O0+2;y=m4(this,t0,a,g,Y,Q,o0,L0,D0,V0),y&&(y.faceIndex=Math.floor(O0/3),y.face.materialIndex=u0.materialIndex,f.push(y))}}else{const v0=Math.max(0,m0.start),C0=Math.min(X.count,m0.start+m0.count);for(let u0=v0,t0=C0;u0<t0;u0+=3){const N0=u0,T0=u0+1,O0=u0+2;y=m4(this,G,a,g,Y,Q,o0,N0,T0,O0),y&&(y.faceIndex=Math.floor(u0/3),f.push(y))}}}}function U$(E,a,f,g,y,P,G,W){let X;if(a.side===dn?X=g.intersectTriangle(G,P,y,!0,W):X=g.intersectTriangle(y,P,G,a.side===y1,W),X===null)return null;h4.copy(W),h4.applyMatrix4(E.matrixWorld);const Y=f.ray.origin.distanceTo(h4);return Y<f.near||Y>f.far?null:{distance:Y,point:h4.clone(),object:E}}function m4(E,a,f,g,y,P,G,W,X,Y){E.getVertexPosition(W,_o),E.getVertexPosition(X,ao),E.getVertexPosition(Y,lo);const Q=U$(E,a,f,g,_o,ao,lo,f4);if(Q){y&&(l4.fromBufferAttribute(y,W),p4.fromBufferAttribute(y,X),u4.fromBufferAttribute(y,Y),Q.uv=h1.getInterpolation(f4,_o,ao,lo,l4,p4,u4,new st)),P&&(l4.fromBufferAttribute(P,W),p4.fromBufferAttribute(P,X),u4.fromBufferAttribute(P,Y),Q.uv1=h1.getInterpolation(f4,_o,ao,lo,l4,p4,u4,new st),Q.uv2=Q.uv1),G&&(ma.fromBufferAttribute(G,W),da.fromBufferAttribute(G,X),ya.fromBufferAttribute(G,Y),Q.normal=h1.getInterpolation(f4,_o,ao,lo,ma,da,ya,new K0),Q.normal.dot(g.direction)>0&&Q.normal.multiplyScalar(-1));const o0={a:W,b:X,c:Y,normal:new K0,materialIndex:0};h1.getNormal(_o,ao,lo,o0.normal),Q.face=o0}return Q}class Br extends Nn{constructor(a=1,f=1,g=1,y=1,P=1,G=1){super(),this.type="BoxGeometry",this.parameters={width:a,height:f,depth:g,widthSegments:y,heightSegments:P,depthSegments:G};const W=this;y=Math.floor(y),P=Math.floor(P),G=Math.floor(G);const X=[],Y=[],Q=[],o0=[];let a0=0,m0=0;v0("z","y","x",-1,-1,g,f,a,G,P,0),v0("z","y","x",1,-1,g,f,-a,G,P,1),v0("x","z","y",1,1,a,g,f,y,G,2),v0("x","z","y",1,-1,a,g,-f,y,G,3),v0("x","y","z",1,-1,a,f,g,y,P,4),v0("x","y","z",-1,-1,a,f,-g,y,P,5),this.setIndex(X),this.setAttribute("position",new pi(Y,3)),this.setAttribute("normal",new pi(Q,3)),this.setAttribute("uv",new pi(o0,2));function v0(C0,u0,t0,N0,T0,O0,k0,L0,D0,V0,h2){const R0=O0/D0,j0=k0/V0,R2=O0/2,N2=k0/2,o2=L0/2,x2=D0+1,$0=V0+1;let k2=0,w2=0;const f2=new K0;for(let F2=0;F2<$0;F2++){const L2=F2*j0-N2;for(let X2=0;X2<x2;X2++){const Y2=X2*R0-R2;f2[C0]=Y2*N0,f2[u0]=L2*T0,f2[t0]=o2,Y.push(f2.x,f2.y,f2.z),f2[C0]=0,f2[u0]=0,f2[t0]=L0>0?1:-1,Q.push(f2.x,f2.y,f2.z),o0.push(X2/D0),o0.push(1-F2/V0),k2+=1}}for(let F2=0;F2<V0;F2++)for(let L2=0;L2<D0;L2++){const X2=a0+L2+x2*F2,Y2=a0+L2+x2*(F2+1),c2=a0+(L2+1)+x2*(F2+1),g2=a0+(L2+1)+x2*F2;X.push(X2,Y2,g2),X.push(Y2,c2,g2),w2+=6}W.addGroup(m0,w2,h2),m0+=w2,a0+=k2}}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}static fromJSON(a){return new Br(a.width,a.height,a.depth,a.widthSegments,a.heightSegments,a.depthSegments)}}function Do(E){const a={};for(const f in E){a[f]={};for(const g in E[f]){const y=E[f][g];y&&(y.isColor||y.isMatrix3||y.isMatrix4||y.isVector2||y.isVector3||y.isVector4||y.isTexture||y.isQuaternion)?y.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),a[f][g]=null):a[f][g]=y.clone():Array.isArray(y)?a[f][g]=y.slice():a[f][g]=y}}return a}function fn(E){const a={};for(let f=0;f<E.length;f++){const g=Do(E[f]);for(const y in g)a[y]=g[y]}return a}function G$(E){const a=[];for(let f=0;f<E.length;f++)a.push(E[f].clone());return a}function Hl(E){return E.getRenderTarget()===null?E.outputColorSpace:Ne.workingColorSpace}const ms={clone:Do,merge:fn};var W$=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,V$=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class v1 extends vs{constructor(a){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W$,this.fragmentShader=V$,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,a!==void 0&&this.setValues(a)}copy(a){return super.copy(a),this.fragmentShader=a.fragmentShader,this.vertexShader=a.vertexShader,this.uniforms=Do(a.uniforms),this.uniformsGroups=G$(a.uniformsGroups),this.defines=Object.assign({},a.defines),this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.fog=a.fog,this.lights=a.lights,this.clipping=a.clipping,this.extensions=Object.assign({},a.extensions),this.glslVersion=a.glslVersion,this}toJSON(a){const f=super.toJSON(a);f.glslVersion=this.glslVersion,f.uniforms={};for(const y in this.uniforms){const G=this.uniforms[y].value;G&&G.isTexture?f.uniforms[y]={type:"t",value:G.toJSON(a).uuid}:G&&G.isColor?f.uniforms[y]={type:"c",value:G.getHex()}:G&&G.isVector2?f.uniforms[y]={type:"v2",value:G.toArray()}:G&&G.isVector3?f.uniforms[y]={type:"v3",value:G.toArray()}:G&&G.isVector4?f.uniforms[y]={type:"v4",value:G.toArray()}:G&&G.isMatrix3?f.uniforms[y]={type:"m3",value:G.toArray()}:G&&G.isMatrix4?f.uniforms[y]={type:"m4",value:G.toArray()}:f.uniforms[y]={value:G}}Object.keys(this.defines).length>0&&(f.defines=this.defines),f.vertexShader=this.vertexShader,f.fragmentShader=this.fragmentShader,f.lights=this.lights,f.clipping=this.clipping;const g={};for(const y in this.extensions)this.extensions[y]===!0&&(g[y]=!0);return Object.keys(g).length>0&&(f.extensions=g),f}}class jl extends _i{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=H1}copy(a,f){return super.copy(a,f),this.matrixWorldInverse.copy(a.matrixWorldInverse),this.projectionMatrix.copy(a.projectionMatrix),this.projectionMatrixInverse.copy(a.projectionMatrixInverse),this.coordinateSystem=a.coordinateSystem,this}getWorldDirection(a){return super.getWorldDirection(a).negate()}updateMatrixWorld(a){super.updateMatrixWorld(a),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(a,f){super.updateWorldMatrix(a,f),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const or=new K0,va=new st,ga=new st;class hn extends jl{constructor(a=50,f=1,g=.1,y=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=a,this.zoom=1,this.near=g,this.far=y,this.focus=10,this.aspect=f,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(a,f){return super.copy(a,f),this.fov=a.fov,this.zoom=a.zoom,this.near=a.near,this.far=a.far,this.focus=a.focus,this.aspect=a.aspect,this.view=a.view===null?null:Object.assign({},a.view),this.filmGauge=a.filmGauge,this.filmOffset=a.filmOffset,this}setFocalLength(a){const f=.5*this.getFilmHeight()/a;this.fov=Io*2*Math.atan(f),this.updateProjectionMatrix()}getFocalLength(){const a=Math.tan(ss*.5*this.fov);return .5*this.getFilmHeight()/a}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(a,f,g){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),f.set(or.x,or.y).multiplyScalar(-a/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),g.set(or.x,or.y).multiplyScalar(-a/or.z)}getViewSize(a,f){return this.getViewBounds(a,va,ga),f.subVectors(ga,va)}setViewOffset(a,f,g,y,P,G){this.aspect=a/f,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=a,this.view.fullHeight=f,this.view.offsetX=g,this.view.offsetY=y,this.view.width=P,this.view.height=G,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const a=this.near;let f=a*Math.tan(ss*.5*this.fov)/this.zoom,g=2*f,y=this.aspect*g,P=-.5*y;const G=this.view;if(this.view!==null&&this.view.enabled){const X=G.fullWidth,Y=G.fullHeight;P+=G.offsetX*y/X,f-=G.offsetY*g/Y,y*=G.width/X,g*=G.height/Y}const W=this.filmOffset;W!==0&&(P+=a*W/this.getFilmWidth()),this.projectionMatrix.makePerspective(P,P+y,f,f-g,a,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(a){const f=super.toJSON(a);return f.object.fov=this.fov,f.object.zoom=this.zoom,f.object.near=this.near,f.object.far=this.far,f.object.focus=this.focus,f.object.aspect=this.aspect,this.view!==null&&(f.object.view=Object.assign({},this.view)),f.object.filmGauge=this.filmGauge,f.object.filmOffset=this.filmOffset,f}}const po=-90,uo=1;class z$ extends _i{constructor(a,f,g){super(),this.type="CubeCamera",this.renderTarget=g,this.coordinateSystem=null,this.activeMipmapLevel=0;const y=new hn(po,uo,a,f);y.layers=this.layers,this.add(y);const P=new hn(po,uo,a,f);P.layers=this.layers,this.add(P);const G=new hn(po,uo,a,f);G.layers=this.layers,this.add(G);const W=new hn(po,uo,a,f);W.layers=this.layers,this.add(W);const X=new hn(po,uo,a,f);X.layers=this.layers,this.add(X);const Y=new hn(po,uo,a,f);Y.layers=this.layers,this.add(Y)}updateCoordinateSystem(){const a=this.coordinateSystem,f=this.children.concat(),[g,y,P,G,W,X]=f;for(const Y of f)this.remove(Y);if(a===H1)g.up.set(0,1,0),g.lookAt(1,0,0),y.up.set(0,1,0),y.lookAt(-1,0,0),P.up.set(0,0,-1),P.lookAt(0,1,0),G.up.set(0,0,1),G.lookAt(0,-1,0),W.up.set(0,1,0),W.lookAt(0,0,1),X.up.set(0,1,0),X.lookAt(0,0,-1);else if(a===W4)g.up.set(0,-1,0),g.lookAt(-1,0,0),y.up.set(0,-1,0),y.lookAt(1,0,0),P.up.set(0,0,1),P.lookAt(0,1,0),G.up.set(0,0,-1),G.lookAt(0,-1,0),W.up.set(0,-1,0),W.lookAt(0,0,1),X.up.set(0,-1,0),X.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+a);for(const Y of f)this.add(Y),Y.updateMatrixWorld()}update(a,f){this.parent===null&&this.updateMatrixWorld();const{renderTarget:g,activeMipmapLevel:y}=this;this.coordinateSystem!==a.coordinateSystem&&(this.coordinateSystem=a.coordinateSystem,this.updateCoordinateSystem());const[P,G,W,X,Y,Q]=this.children,o0=a.getRenderTarget(),a0=a.getActiveCubeFace(),m0=a.getActiveMipmapLevel(),v0=a.xr.enabled;a.xr.enabled=!1;const C0=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,a.setRenderTarget(g,0,y),a.render(f,P),a.setRenderTarget(g,1,y),a.render(f,G),a.setRenderTarget(g,2,y),a.render(f,W),a.setRenderTarget(g,3,y),a.render(f,X),a.setRenderTarget(g,4,y),a.render(f,Y),g.texture.generateMipmaps=C0,a.setRenderTarget(g,5,y),a.render(f,Q),a.setRenderTarget(o0,a0,m0),a.xr.enabled=v0,g.texture.needsPMREMUpdate=!0}}class bl extends nn{constructor(a,f,g,y,P,G,W,X,Y,Q){a=a!==void 0?a:[],f=f!==void 0?f:To,super(a,f,g,y,P,G,W,X,Y,Q),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(a){this.image=a}}class H$ extends pr{constructor(a=1,f={}){super(a,a,f),this.isWebGLCubeRenderTarget=!0;const g={width:a,height:a,depth:1},y=[g,g,g,g,g,g];f.encoding!==void 0&&(xo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),f.colorSpace=f.encoding===kr?vi:Xn),this.texture=new bl(y,f.mapping,f.wrapS,f.wrapT,f.magFilter,f.minFilter,f.format,f.type,f.anisotropy,f.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=f.generateMipmaps!==void 0?f.generateMipmaps:!1,this.texture.minFilter=f.minFilter!==void 0?f.minFilter:Ki}fromEquirectangularTexture(a,f){this.texture.type=f.type,this.texture.colorSpace=f.colorSpace,this.texture.generateMipmaps=f.generateMipmaps,this.texture.minFilter=f.minFilter,this.texture.magFilter=f.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},y=new Br(5,5,5),P=new v1({name:"CubemapFromEquirect",uniforms:Do(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:dn,blending:_r});P.uniforms.tEquirect.value=f;const G=new Zi(y,P),W=f.minFilter;return f.minFilter===z1&&(f.minFilter=Ki),new z$(1,10,this).update(a,G),f.minFilter=W,G.geometry.dispose(),G.material.dispose(),this}clear(a,f,g,y){const P=a.getRenderTarget();for(let G=0;G<6;G++)a.setRenderTarget(this,G),a.clear(f,g,y);a.setRenderTarget(P)}}const p6=new K0,j$=new K0,b$=new le;class V1{constructor(a=new K0(1,0,0),f=0){this.isPlane=!0,this.normal=a,this.constant=f}set(a,f){return this.normal.copy(a),this.constant=f,this}setComponents(a,f,g,y){return this.normal.set(a,f,g),this.constant=y,this}setFromNormalAndCoplanarPoint(a,f){return this.normal.copy(a),this.constant=-f.dot(this.normal),this}setFromCoplanarPoints(a,f,g){const y=p6.subVectors(g,f).cross(j$.subVectors(a,f)).normalize();return this.setFromNormalAndCoplanarPoint(y,a),this}copy(a){return this.normal.copy(a.normal),this.constant=a.constant,this}normalize(){const a=1/this.normal.length();return this.normal.multiplyScalar(a),this.constant*=a,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(a){return this.normal.dot(a)+this.constant}distanceToSphere(a){return this.distanceToPoint(a.center)-a.radius}projectPoint(a,f){return f.copy(a).addScaledVector(this.normal,-this.distanceToPoint(a))}intersectLine(a,f){const g=a.delta(p6),y=this.normal.dot(g);if(y===0)return this.distanceToPoint(a.start)===0?f.copy(a.start):null;const P=-(a.start.dot(this.normal)+this.constant)/y;return P<0||P>1?null:f.copy(a.start).addScaledVector(g,P)}intersectsLine(a){const f=this.distanceToPoint(a.start),g=this.distanceToPoint(a.end);return f<0&&g>0||g<0&&f>0}intersectsBox(a){return a.intersectsPlane(this)}intersectsSphere(a){return a.intersectsPlane(this)}coplanarPoint(a){return a.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(a,f){const g=f||b$.getNormalMatrix(a),y=this.coplanarPoint(p6).applyMatrix4(a),P=this.normal.applyMatrix3(g).normalize();return this.constant=-y.dot(P),this}translate(a){return this.constant-=a.dot(this.normal),this}equals(a){return a.normal.equals(this.normal)&&a.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new ko,d4=new K0;class Q6{constructor(a=new V1,f=new V1,g=new V1,y=new V1,P=new V1,G=new V1){this.planes=[a,f,g,y,P,G]}set(a,f,g,y,P,G){const W=this.planes;return W[0].copy(a),W[1].copy(f),W[2].copy(g),W[3].copy(y),W[4].copy(P),W[5].copy(G),this}copy(a){const f=this.planes;for(let g=0;g<6;g++)f[g].copy(a.planes[g]);return this}setFromProjectionMatrix(a,f=H1){const g=this.planes,y=a.elements,P=y[0],G=y[1],W=y[2],X=y[3],Y=y[4],Q=y[5],o0=y[6],a0=y[7],m0=y[8],v0=y[9],C0=y[10],u0=y[11],t0=y[12],N0=y[13],T0=y[14],O0=y[15];if(g[0].setComponents(X-P,a0-Y,u0-m0,O0-t0).normalize(),g[1].setComponents(X+P,a0+Y,u0+m0,O0+t0).normalize(),g[2].setComponents(X+G,a0+Q,u0+v0,O0+N0).normalize(),g[3].setComponents(X-G,a0-Q,u0-v0,O0-N0).normalize(),g[4].setComponents(X-W,a0-o0,u0-C0,O0-T0).normalize(),f===H1)g[5].setComponents(X+W,a0+o0,u0+C0,O0+T0).normalize();else if(f===W4)g[5].setComponents(W,o0,C0,T0).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+f);return this}intersectsObject(a){if(a.boundingSphere!==void 0)a.boundingSphere===null&&a.computeBoundingSphere(),Ar.copy(a.boundingSphere).applyMatrix4(a.matrixWorld);else{const f=a.geometry;f.boundingSphere===null&&f.computeBoundingSphere(),Ar.copy(f.boundingSphere).applyMatrix4(a.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(a){return Ar.center.set(0,0,0),Ar.radius=.7071067811865476,Ar.applyMatrix4(a.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(a){const f=this.planes,g=a.center,y=-a.radius;for(let P=0;P<6;P++)if(f[P].distanceToPoint(g)<y)return!1;return!0}intersectsBox(a){const f=this.planes;for(let g=0;g<6;g++){const y=f[g];if(d4.x=y.normal.x>0?a.max.x:a.min.x,d4.y=y.normal.y>0?a.max.y:a.min.y,d4.z=y.normal.z>0?a.max.z:a.min.z,y.distanceToPoint(d4)<0)return!1}return!0}containsPoint(a){const f=this.planes;for(let g=0;g<6;g++)if(f[g].distanceToPoint(a)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xl(){let E=null,a=!1,f=null,g=null;function y(P,G){f(P,G),g=E.requestAnimationFrame(y)}return{start:function(){a!==!0&&f!==null&&(g=E.requestAnimationFrame(y),a=!0)},stop:function(){E.cancelAnimationFrame(g),a=!1},setAnimationLoop:function(P){f=P},setContext:function(P){E=P}}}function X$(E,a){const f=a.isWebGL2,g=new WeakMap;function y(Y,Q){const o0=Y.array,a0=Y.usage,m0=o0.byteLength,v0=E.createBuffer();E.bindBuffer(Q,v0),E.bufferData(Q,o0,a0),Y.onUploadCallback();let C0;if(o0 instanceof Float32Array)C0=E.FLOAT;else if(o0 instanceof Uint16Array)if(Y.isFloat16BufferAttribute)if(f)C0=E.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else C0=E.UNSIGNED_SHORT;else if(o0 instanceof Int16Array)C0=E.SHORT;else if(o0 instanceof Uint32Array)C0=E.UNSIGNED_INT;else if(o0 instanceof Int32Array)C0=E.INT;else if(o0 instanceof Int8Array)C0=E.BYTE;else if(o0 instanceof Uint8Array)C0=E.UNSIGNED_BYTE;else if(o0 instanceof Uint8ClampedArray)C0=E.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o0);return{buffer:v0,type:C0,bytesPerElement:o0.BYTES_PER_ELEMENT,version:Y.version,size:m0}}function P(Y,Q,o0){const a0=Q.array,m0=Q._updateRange,v0=Q.updateRanges;if(E.bindBuffer(o0,Y),m0.count===-1&&v0.length===0&&E.bufferSubData(o0,0,a0),v0.length!==0){for(let C0=0,u0=v0.length;C0<u0;C0++){const t0=v0[C0];f?E.bufferSubData(o0,t0.start*a0.BYTES_PER_ELEMENT,a0,t0.start,t0.count):E.bufferSubData(o0,t0.start*a0.BYTES_PER_ELEMENT,a0.subarray(t0.start,t0.start+t0.count))}Q.clearUpdateRanges()}m0.count!==-1&&(f?E.bufferSubData(o0,m0.offset*a0.BYTES_PER_ELEMENT,a0,m0.offset,m0.count):E.bufferSubData(o0,m0.offset*a0.BYTES_PER_ELEMENT,a0.subarray(m0.offset,m0.offset+m0.count)),m0.count=-1),Q.onUploadCallback()}function G(Y){return Y.isInterleavedBufferAttribute&&(Y=Y.data),g.get(Y)}function W(Y){Y.isInterleavedBufferAttribute&&(Y=Y.data);const Q=g.get(Y);Q&&(E.deleteBuffer(Q.buffer),g.delete(Y))}function X(Y,Q){if(Y.isGLBufferAttribute){const a0=g.get(Y);(!a0||a0.version<Y.version)&&g.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}Y.isInterleavedBufferAttribute&&(Y=Y.data);const o0=g.get(Y);if(o0===void 0)g.set(Y,y(Y,Q));else if(o0.version<Y.version){if(o0.size!==Y.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");P(o0.buffer,Y,Q),o0.version=Y.version}}return{get:G,remove:W,update:X}}class gs extends Nn{constructor(a=1,f=1,g=1,y=1){super(),this.type="PlaneGeometry",this.parameters={width:a,height:f,widthSegments:g,heightSegments:y};const P=a/2,G=f/2,W=Math.floor(g),X=Math.floor(y),Y=W+1,Q=X+1,o0=a/W,a0=f/X,m0=[],v0=[],C0=[],u0=[];for(let t0=0;t0<Q;t0++){const N0=t0*a0-G;for(let T0=0;T0<Y;T0++){const O0=T0*o0-P;v0.push(O0,-N0,0),C0.push(0,0,1),u0.push(T0/W),u0.push(1-t0/X)}}for(let t0=0;t0<X;t0++)for(let N0=0;N0<W;N0++){const T0=N0+Y*t0,O0=N0+Y*(t0+1),k0=N0+1+Y*(t0+1),L0=N0+1+Y*t0;m0.push(T0,O0,L0),m0.push(O0,k0,L0)}this.setIndex(m0),this.setAttribute("position",new pi(v0,3)),this.setAttribute("normal",new pi(C0,3)),this.setAttribute("uv",new pi(u0,2))}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}static fromJSON(a){return new gs(a.width,a.height,a.widthSegments,a.heightSegments)}}var q$=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Y$=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,K$=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Z$=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q$=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,J$=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$$=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,t00=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,e00=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,i00=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,n00=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,r00=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o00=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,s00=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,c00=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_00=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,a00=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,l00=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,p00=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,u00=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,f00=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,h00=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,m00=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,d00=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,y00=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,v00=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,g00=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,C00=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,S00=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x00=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,w00="gl_FragColor = linearToOutputTexel( gl_FragColor );",M00=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,T00=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,A00=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,E00=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,R00=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,I00=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,D00=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P00=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L00=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,k00=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,O00=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,F00=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,B00=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,N00=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,U00=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G00=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,W00=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,V00=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,z00=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,H00=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,j00=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b00=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,X00=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,q00=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Y00=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,K00=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z00=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Q00=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J00=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$00=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,t20=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e20=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i20=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,n20=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r20=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,o20=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s20=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c20=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,_20=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,a20=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,l20=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,p20=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,u20=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f20=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h20=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,m20=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,d20=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,y20=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,v20=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g20=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,C20=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,S20=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,x20=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w20=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M20=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,T20=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A20=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E20=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,R20=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,I20=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,D20=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,P20=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,L20=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,k20=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,O20=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F20=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,B20=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,N20=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U20=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G20=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,W20=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,V20=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,z20=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,H20=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,j20=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,b20=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const X20=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q20=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y20=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K20=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z20=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q20=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J20=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$20=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,tt0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,et0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,it0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nt0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rt0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ot0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,st0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ct0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_t0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,at0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lt0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pt0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ut0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ft0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ht0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mt0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dt0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yt0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vt0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gt0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ct0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,St0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xt0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wt0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Mt0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tt0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,se={alphahash_fragment:q$,alphahash_pars_fragment:Y$,alphamap_fragment:K$,alphamap_pars_fragment:Z$,alphatest_fragment:Q$,alphatest_pars_fragment:J$,aomap_fragment:$$,aomap_pars_fragment:t00,batching_pars_vertex:e00,batching_vertex:i00,begin_vertex:n00,beginnormal_vertex:r00,bsdfs:o00,iridescence_fragment:s00,bumpmap_pars_fragment:c00,clipping_planes_fragment:_00,clipping_planes_pars_fragment:a00,clipping_planes_pars_vertex:l00,clipping_planes_vertex:p00,color_fragment:u00,color_pars_fragment:f00,color_pars_vertex:h00,color_vertex:m00,common:d00,cube_uv_reflection_fragment:y00,defaultnormal_vertex:v00,displacementmap_pars_vertex:g00,displacementmap_vertex:C00,emissivemap_fragment:S00,emissivemap_pars_fragment:x00,colorspace_fragment:w00,colorspace_pars_fragment:M00,envmap_fragment:T00,envmap_common_pars_fragment:A00,envmap_pars_fragment:E00,envmap_pars_vertex:R00,envmap_physical_pars_fragment:W00,envmap_vertex:I00,fog_vertex:D00,fog_pars_vertex:P00,fog_fragment:L00,fog_pars_fragment:k00,gradientmap_pars_fragment:O00,lightmap_fragment:F00,lightmap_pars_fragment:B00,lights_lambert_fragment:N00,lights_lambert_pars_fragment:U00,lights_pars_begin:G00,lights_toon_fragment:V00,lights_toon_pars_fragment:z00,lights_phong_fragment:H00,lights_phong_pars_fragment:j00,lights_physical_fragment:b00,lights_physical_pars_fragment:X00,lights_fragment_begin:q00,lights_fragment_maps:Y00,lights_fragment_end:K00,logdepthbuf_fragment:Z00,logdepthbuf_pars_fragment:Q00,logdepthbuf_pars_vertex:J00,logdepthbuf_vertex:$00,map_fragment:t20,map_pars_fragment:e20,map_particle_fragment:i20,map_particle_pars_fragment:n20,metalnessmap_fragment:r20,metalnessmap_pars_fragment:o20,morphcolor_vertex:s20,morphnormal_vertex:c20,morphtarget_pars_vertex:_20,morphtarget_vertex:a20,normal_fragment_begin:l20,normal_fragment_maps:p20,normal_pars_fragment:u20,normal_pars_vertex:f20,normal_vertex:h20,normalmap_pars_fragment:m20,clearcoat_normal_fragment_begin:d20,clearcoat_normal_fragment_maps:y20,clearcoat_pars_fragment:v20,iridescence_pars_fragment:g20,opaque_fragment:C20,packing:S20,premultiplied_alpha_fragment:x20,project_vertex:w20,dithering_fragment:M20,dithering_pars_fragment:T20,roughnessmap_fragment:A20,roughnessmap_pars_fragment:E20,shadowmap_pars_fragment:R20,shadowmap_pars_vertex:I20,shadowmap_vertex:D20,shadowmask_pars_fragment:P20,skinbase_vertex:L20,skinning_pars_vertex:k20,skinning_vertex:O20,skinnormal_vertex:F20,specularmap_fragment:B20,specularmap_pars_fragment:N20,tonemapping_fragment:U20,tonemapping_pars_fragment:G20,transmission_fragment:W20,transmission_pars_fragment:V20,uv_pars_fragment:z20,uv_pars_vertex:H20,uv_vertex:j20,worldpos_vertex:b20,background_vert:X20,background_frag:q20,backgroundCube_vert:Y20,backgroundCube_frag:K20,cube_vert:Z20,cube_frag:Q20,depth_vert:J20,depth_frag:$20,distanceRGBA_vert:tt0,distanceRGBA_frag:et0,equirect_vert:it0,equirect_frag:nt0,linedashed_vert:rt0,linedashed_frag:ot0,meshbasic_vert:st0,meshbasic_frag:ct0,meshlambert_vert:_t0,meshlambert_frag:at0,meshmatcap_vert:lt0,meshmatcap_frag:pt0,meshnormal_vert:ut0,meshnormal_frag:ft0,meshphong_vert:ht0,meshphong_frag:mt0,meshphysical_vert:dt0,meshphysical_frag:yt0,meshtoon_vert:vt0,meshtoon_frag:gt0,points_vert:Ct0,points_frag:St0,shadow_vert:xt0,shadow_frag:wt0,sprite_vert:Mt0,sprite_frag:Tt0},tt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},mn={basic:{uniforms:fn([tt.common,tt.specularmap,tt.envmap,tt.aomap,tt.lightmap,tt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:fn([tt.common,tt.specularmap,tt.envmap,tt.aomap,tt.lightmap,tt.emissivemap,tt.bumpmap,tt.normalmap,tt.displacementmap,tt.fog,tt.lights,{emissive:{value:new qt(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:fn([tt.common,tt.specularmap,tt.envmap,tt.aomap,tt.lightmap,tt.emissivemap,tt.bumpmap,tt.normalmap,tt.displacementmap,tt.fog,tt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:fn([tt.common,tt.envmap,tt.aomap,tt.lightmap,tt.emissivemap,tt.bumpmap,tt.normalmap,tt.displacementmap,tt.roughnessmap,tt.metalnessmap,tt.fog,tt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:fn([tt.common,tt.aomap,tt.lightmap,tt.emissivemap,tt.bumpmap,tt.normalmap,tt.displacementmap,tt.gradientmap,tt.fog,tt.lights,{emissive:{value:new qt(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:fn([tt.common,tt.bumpmap,tt.normalmap,tt.displacementmap,tt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:fn([tt.points,tt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:fn([tt.common,tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:fn([tt.common,tt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:fn([tt.common,tt.bumpmap,tt.normalmap,tt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:fn([tt.sprite,tt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:fn([tt.common,tt.displacementmap,{referencePosition:{value:new K0},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:fn([tt.lights,tt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};mn.physical={uniforms:fn([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const y4={r:0,b:0,g:0};function At0(E,a,f,g,y,P,G){const W=new qt(0);let X=P===!0?0:1,Y,Q,o0=null,a0=0,m0=null;function v0(u0,t0){let N0=!1,T0=t0.isScene===!0?t0.background:null;T0&&T0.isTexture&&(T0=(t0.backgroundBlurriness>0?f:a).get(T0)),T0===null?C0(W,X):T0&&T0.isColor&&(C0(T0,1),N0=!0);const O0=E.xr.getEnvironmentBlendMode();O0==="additive"?g.buffers.color.setClear(0,0,0,1,G):O0==="alpha-blend"&&g.buffers.color.setClear(0,0,0,0,G),(E.autoClear||N0)&&E.clear(E.autoClearColor,E.autoClearDepth,E.autoClearStencil),T0&&(T0.isCubeTexture||T0.mapping===H4)?(Q===void 0&&(Q=new Zi(new Br(1,1,1),new v1({name:"BackgroundCubeMaterial",uniforms:Do(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),Q.geometry.deleteAttribute("normal"),Q.geometry.deleteAttribute("uv"),Q.onBeforeRender=function(k0,L0,D0){this.matrixWorld.copyPosition(D0.matrixWorld)},Object.defineProperty(Q.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),y.update(Q)),Q.material.uniforms.envMap.value=T0,Q.material.uniforms.flipEnvMap.value=T0.isCubeTexture&&T0.isRenderTargetTexture===!1?-1:1,Q.material.uniforms.backgroundBlurriness.value=t0.backgroundBlurriness,Q.material.uniforms.backgroundIntensity.value=t0.backgroundIntensity,Q.material.toneMapped=Ne.getTransfer(T0.colorSpace)!==Ke,(o0!==T0||a0!==T0.version||m0!==E.toneMapping)&&(Q.material.needsUpdate=!0,o0=T0,a0=T0.version,m0=E.toneMapping),Q.layers.enableAll(),u0.unshift(Q,Q.geometry,Q.material,0,0,null)):T0&&T0.isTexture&&(Y===void 0&&(Y=new Zi(new gs(2,2),new v1({name:"BackgroundMaterial",uniforms:Do(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:y1,depthTest:!1,depthWrite:!1,fog:!1})),Y.geometry.deleteAttribute("normal"),Object.defineProperty(Y.material,"map",{get:function(){return this.uniforms.t2D.value}}),y.update(Y)),Y.material.uniforms.t2D.value=T0,Y.material.uniforms.backgroundIntensity.value=t0.backgroundIntensity,Y.material.toneMapped=Ne.getTransfer(T0.colorSpace)!==Ke,T0.matrixAutoUpdate===!0&&T0.updateMatrix(),Y.material.uniforms.uvTransform.value.copy(T0.matrix),(o0!==T0||a0!==T0.version||m0!==E.toneMapping)&&(Y.material.needsUpdate=!0,o0=T0,a0=T0.version,m0=E.toneMapping),Y.layers.enableAll(),u0.unshift(Y,Y.geometry,Y.material,0,0,null))}function C0(u0,t0){u0.getRGB(y4,Hl(E)),g.buffers.color.setClear(y4.r,y4.g,y4.b,t0,G)}return{getClearColor:function(){return W},setClearColor:function(u0,t0=1){W.set(u0),X=t0,C0(W,X)},getClearAlpha:function(){return X},setClearAlpha:function(u0){X=u0,C0(W,X)},render:v0}}function Et0(E,a,f,g){const y=E.getParameter(E.MAX_VERTEX_ATTRIBS),P=g.isWebGL2?null:a.get("OES_vertex_array_object"),G=g.isWebGL2||P!==null,W={},X=u0(null);let Y=X,Q=!1;function o0(o2,x2,$0,k2,w2){let f2=!1;if(G){const F2=C0(k2,$0,x2);Y!==F2&&(Y=F2,m0(Y.object)),f2=t0(o2,k2,$0,w2),f2&&N0(o2,k2,$0,w2)}else{const F2=x2.wireframe===!0;(Y.geometry!==k2.id||Y.program!==$0.id||Y.wireframe!==F2)&&(Y.geometry=k2.id,Y.program=$0.id,Y.wireframe=F2,f2=!0)}w2!==null&&f.update(w2,E.ELEMENT_ARRAY_BUFFER),(f2||Q)&&(Q=!1,V0(o2,x2,$0,k2),w2!==null&&E.bindBuffer(E.ELEMENT_ARRAY_BUFFER,f.get(w2).buffer))}function a0(){return g.isWebGL2?E.createVertexArray():P.createVertexArrayOES()}function m0(o2){return g.isWebGL2?E.bindVertexArray(o2):P.bindVertexArrayOES(o2)}function v0(o2){return g.isWebGL2?E.deleteVertexArray(o2):P.deleteVertexArrayOES(o2)}function C0(o2,x2,$0){const k2=$0.wireframe===!0;let w2=W[o2.id];w2===void 0&&(w2={},W[o2.id]=w2);let f2=w2[x2.id];f2===void 0&&(f2={},w2[x2.id]=f2);let F2=f2[k2];return F2===void 0&&(F2=u0(a0()),f2[k2]=F2),F2}function u0(o2){const x2=[],$0=[],k2=[];for(let w2=0;w2<y;w2++)x2[w2]=0,$0[w2]=0,k2[w2]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x2,enabledAttributes:$0,attributeDivisors:k2,object:o2,attributes:{},index:null}}function t0(o2,x2,$0,k2){const w2=Y.attributes,f2=x2.attributes;let F2=0;const L2=$0.getAttributes();for(const X2 in L2)if(L2[X2].location>=0){const c2=w2[X2];let g2=f2[X2];if(g2===void 0&&(X2==="instanceMatrix"&&o2.instanceMatrix&&(g2=o2.instanceMatrix),X2==="instanceColor"&&o2.instanceColor&&(g2=o2.instanceColor)),c2===void 0||c2.attribute!==g2||g2&&c2.data!==g2.data)return!0;F2++}return Y.attributesNum!==F2||Y.index!==k2}function N0(o2,x2,$0,k2){const w2={},f2=x2.attributes;let F2=0;const L2=$0.getAttributes();for(const X2 in L2)if(L2[X2].location>=0){let c2=f2[X2];c2===void 0&&(X2==="instanceMatrix"&&o2.instanceMatrix&&(c2=o2.instanceMatrix),X2==="instanceColor"&&o2.instanceColor&&(c2=o2.instanceColor));const g2={};g2.attribute=c2,c2&&c2.data&&(g2.data=c2.data),w2[X2]=g2,F2++}Y.attributes=w2,Y.attributesNum=F2,Y.index=k2}function T0(){const o2=Y.newAttributes;for(let x2=0,$0=o2.length;x2<$0;x2++)o2[x2]=0}function O0(o2){k0(o2,0)}function k0(o2,x2){const $0=Y.newAttributes,k2=Y.enabledAttributes,w2=Y.attributeDivisors;$0[o2]=1,k2[o2]===0&&(E.enableVertexAttribArray(o2),k2[o2]=1),w2[o2]!==x2&&((g.isWebGL2?E:a.get("ANGLE_instanced_arrays"))[g.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](o2,x2),w2[o2]=x2)}function L0(){const o2=Y.newAttributes,x2=Y.enabledAttributes;for(let $0=0,k2=x2.length;$0<k2;$0++)x2[$0]!==o2[$0]&&(E.disableVertexAttribArray($0),x2[$0]=0)}function D0(o2,x2,$0,k2,w2,f2,F2){F2===!0?E.vertexAttribIPointer(o2,x2,$0,w2,f2):E.vertexAttribPointer(o2,x2,$0,k2,w2,f2)}function V0(o2,x2,$0,k2){if(g.isWebGL2===!1&&(o2.isInstancedMesh||k2.isInstancedBufferGeometry)&&a.get("ANGLE_instanced_arrays")===null)return;T0();const w2=k2.attributes,f2=$0.getAttributes(),F2=x2.defaultAttributeValues;for(const L2 in f2){const X2=f2[L2];if(X2.location>=0){let Y2=w2[L2];if(Y2===void 0&&(L2==="instanceMatrix"&&o2.instanceMatrix&&(Y2=o2.instanceMatrix),L2==="instanceColor"&&o2.instanceColor&&(Y2=o2.instanceColor)),Y2!==void 0){const c2=Y2.normalized,g2=Y2.itemSize,P2=f.get(Y2);if(P2===void 0)continue;const z2=P2.buffer,J2=P2.type,$2=P2.bytesPerElement,Dt=g.isWebGL2===!0&&(J2===E.INT||J2===E.UNSIGNED_INT||Y2.gpuType===El);if(Y2.isInterleavedBufferAttribute){const Ut=Y2.data,l2=Ut.stride,ce=Y2.offset;if(Ut.isInstancedInterleavedBuffer){for(let Mt=0;Mt<X2.locationSize;Mt++)k0(X2.location+Mt,Ut.meshPerAttribute);o2.isInstancedMesh!==!0&&k2._maxInstanceCount===void 0&&(k2._maxInstanceCount=Ut.meshPerAttribute*Ut.count)}else for(let Mt=0;Mt<X2.locationSize;Mt++)O0(X2.location+Mt);E.bindBuffer(E.ARRAY_BUFFER,z2);for(let Mt=0;Mt<X2.locationSize;Mt++)D0(X2.location+Mt,g2/X2.locationSize,J2,c2,l2*$2,(ce+g2/X2.locationSize*Mt)*$2,Dt)}else{if(Y2.isInstancedBufferAttribute){for(let Ut=0;Ut<X2.locationSize;Ut++)k0(X2.location+Ut,Y2.meshPerAttribute);o2.isInstancedMesh!==!0&&k2._maxInstanceCount===void 0&&(k2._maxInstanceCount=Y2.meshPerAttribute*Y2.count)}else for(let Ut=0;Ut<X2.locationSize;Ut++)O0(X2.location+Ut);E.bindBuffer(E.ARRAY_BUFFER,z2);for(let Ut=0;Ut<X2.locationSize;Ut++)D0(X2.location+Ut,g2/X2.locationSize,J2,c2,g2*$2,g2/X2.locationSize*Ut*$2,Dt)}}else if(F2!==void 0){const c2=F2[L2];if(c2!==void 0)switch(c2.length){case 2:E.vertexAttrib2fv(X2.location,c2);break;case 3:E.vertexAttrib3fv(X2.location,c2);break;case 4:E.vertexAttrib4fv(X2.location,c2);break;default:E.vertexAttrib1fv(X2.location,c2)}}}}L0()}function h2(){R2();for(const o2 in W){const x2=W[o2];for(const $0 in x2){const k2=x2[$0];for(const w2 in k2)v0(k2[w2].object),delete k2[w2];delete x2[$0]}delete W[o2]}}function R0(o2){if(W[o2.id]===void 0)return;const x2=W[o2.id];for(const $0 in x2){const k2=x2[$0];for(const w2 in k2)v0(k2[w2].object),delete k2[w2];delete x2[$0]}delete W[o2.id]}function j0(o2){for(const x2 in W){const $0=W[x2];if($0[o2.id]===void 0)continue;const k2=$0[o2.id];for(const w2 in k2)v0(k2[w2].object),delete k2[w2];delete $0[o2.id]}}function R2(){N2(),Q=!0,Y!==X&&(Y=X,m0(Y.object))}function N2(){X.geometry=null,X.program=null,X.wireframe=!1}return{setup:o0,reset:R2,resetDefaultState:N2,dispose:h2,releaseStatesOfGeometry:R0,releaseStatesOfProgram:j0,initAttributes:T0,enableAttribute:O0,disableUnusedAttributes:L0}}function Rt0(E,a,f,g){const y=g.isWebGL2;let P;function G(Q){P=Q}function W(Q,o0){E.drawArrays(P,Q,o0),f.update(o0,P,1)}function X(Q,o0,a0){if(a0===0)return;let m0,v0;if(y)m0=E,v0="drawArraysInstanced";else if(m0=a.get("ANGLE_instanced_arrays"),v0="drawArraysInstancedANGLE",m0===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m0[v0](P,Q,o0,a0),f.update(o0,P,a0)}function Y(Q,o0,a0){if(a0===0)return;const m0=a.get("WEBGL_multi_draw");if(m0===null)for(let v0=0;v0<a0;v0++)this.render(Q[v0],o0[v0]);else{m0.multiDrawArraysWEBGL(P,Q,0,o0,0,a0);let v0=0;for(let C0=0;C0<a0;C0++)v0+=o0[C0];f.update(v0,P,1)}}this.setMode=G,this.render=W,this.renderInstances=X,this.renderMultiDraw=Y}function It0(E,a,f){let g;function y(){if(g!==void 0)return g;if(a.has("EXT_texture_filter_anisotropic")===!0){const D0=a.get("EXT_texture_filter_anisotropic");g=E.getParameter(D0.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else g=0;return g}function P(D0){if(D0==="highp"){if(E.getShaderPrecisionFormat(E.VERTEX_SHADER,E.HIGH_FLOAT).precision>0&&E.getShaderPrecisionFormat(E.FRAGMENT_SHADER,E.HIGH_FLOAT).precision>0)return"highp";D0="mediump"}return D0==="mediump"&&E.getShaderPrecisionFormat(E.VERTEX_SHADER,E.MEDIUM_FLOAT).precision>0&&E.getShaderPrecisionFormat(E.FRAGMENT_SHADER,E.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const G=typeof WebGL2RenderingContext<"u"&&E.constructor.name==="WebGL2RenderingContext";let W=f.precision!==void 0?f.precision:"highp";const X=P(W);X!==W&&(console.warn("THREE.WebGLRenderer:",W,"not supported, using",X,"instead."),W=X);const Y=G||a.has("WEBGL_draw_buffers"),Q=f.logarithmicDepthBuffer===!0,o0=E.getParameter(E.MAX_TEXTURE_IMAGE_UNITS),a0=E.getParameter(E.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m0=E.getParameter(E.MAX_TEXTURE_SIZE),v0=E.getParameter(E.MAX_CUBE_MAP_TEXTURE_SIZE),C0=E.getParameter(E.MAX_VERTEX_ATTRIBS),u0=E.getParameter(E.MAX_VERTEX_UNIFORM_VECTORS),t0=E.getParameter(E.MAX_VARYING_VECTORS),N0=E.getParameter(E.MAX_FRAGMENT_UNIFORM_VECTORS),T0=a0>0,O0=G||a.has("OES_texture_float"),k0=T0&&O0,L0=G?E.getParameter(E.MAX_SAMPLES):0;return{isWebGL2:G,drawBuffers:Y,getMaxAnisotropy:y,getMaxPrecision:P,precision:W,logarithmicDepthBuffer:Q,maxTextures:o0,maxVertexTextures:a0,maxTextureSize:m0,maxCubemapSize:v0,maxAttributes:C0,maxVertexUniforms:u0,maxVaryings:t0,maxFragmentUniforms:N0,vertexTextures:T0,floatFragmentTextures:O0,floatVertexTextures:k0,maxSamples:L0}}function Dt0(E){const a=this;let f=null,g=0,y=!1,P=!1;const G=new V1,W=new le,X={value:null,needsUpdate:!1};this.uniform=X,this.numPlanes=0,this.numIntersection=0,this.init=function(o0,a0){const m0=o0.length!==0||a0||g!==0||y;return y=a0,g=o0.length,m0},this.beginShadows=function(){P=!0,Q(null)},this.endShadows=function(){P=!1},this.setGlobalState=function(o0,a0){f=Q(o0,a0,0)},this.setState=function(o0,a0,m0){const v0=o0.clippingPlanes,C0=o0.clipIntersection,u0=o0.clipShadows,t0=E.get(o0);if(!y||v0===null||v0.length===0||P&&!u0)P?Q(null):Y();else{const N0=P?0:g,T0=N0*4;let O0=t0.clippingState||null;X.value=O0,O0=Q(v0,a0,T0,m0);for(let k0=0;k0!==T0;++k0)O0[k0]=f[k0];t0.clippingState=O0,this.numIntersection=C0?this.numPlanes:0,this.numPlanes+=N0}};function Y(){X.value!==f&&(X.value=f,X.needsUpdate=g>0),a.numPlanes=g,a.numIntersection=0}function Q(o0,a0,m0,v0){const C0=o0!==null?o0.length:0;let u0=null;if(C0!==0){if(u0=X.value,v0!==!0||u0===null){const t0=m0+C0*4,N0=a0.matrixWorldInverse;W.getNormalMatrix(N0),(u0===null||u0.length<t0)&&(u0=new Float32Array(t0));for(let T0=0,O0=m0;T0!==C0;++T0,O0+=4)G.copy(o0[T0]).applyMatrix4(N0,W),G.normal.toArray(u0,O0),u0[O0+3]=G.constant}X.value=u0,X.needsUpdate=!0}return a.numPlanes=C0,a.numIntersection=0,u0}}function Pt0(E){let a=new WeakMap;function f(G,W){return W===k6?G.mapping=To:W===O6&&(G.mapping=Ao),G}function g(G){if(G&&G.isTexture){const W=G.mapping;if(W===k6||W===O6)if(a.has(G)){const X=a.get(G).texture;return f(X,G.mapping)}else{const X=G.image;if(X&&X.height>0){const Y=new H$(X.height);return Y.fromEquirectangularTexture(E,G),a.set(G,Y),G.addEventListener("dispose",y),f(Y.texture,G.mapping)}else return null}}return G}function y(G){const W=G.target;W.removeEventListener("dispose",y);const X=a.get(W);X!==void 0&&(a.delete(W),X.dispose())}function P(){a=new WeakMap}return{get:g,dispose:P}}class ql extends jl{constructor(a=-1,f=1,g=1,y=-1,P=.1,G=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=a,this.right=f,this.top=g,this.bottom=y,this.near=P,this.far=G,this.updateProjectionMatrix()}copy(a,f){return super.copy(a,f),this.left=a.left,this.right=a.right,this.top=a.top,this.bottom=a.bottom,this.near=a.near,this.far=a.far,this.zoom=a.zoom,this.view=a.view===null?null:Object.assign({},a.view),this}setViewOffset(a,f,g,y,P,G){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=a,this.view.fullHeight=f,this.view.offsetX=g,this.view.offsetY=y,this.view.width=P,this.view.height=G,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const a=(this.right-this.left)/(2*this.zoom),f=(this.top-this.bottom)/(2*this.zoom),g=(this.right+this.left)/2,y=(this.top+this.bottom)/2;let P=g-a,G=g+a,W=y+f,X=y-f;if(this.view!==null&&this.view.enabled){const Y=(this.right-this.left)/this.view.fullWidth/this.zoom,Q=(this.top-this.bottom)/this.view.fullHeight/this.zoom;P+=Y*this.view.offsetX,G=P+Y*this.view.width,W-=Q*this.view.offsetY,X=W-Q*this.view.height}this.projectionMatrix.makeOrthographic(P,G,W,X,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(a){const f=super.toJSON(a);return f.object.zoom=this.zoom,f.object.left=this.left,f.object.right=this.right,f.object.top=this.top,f.object.bottom=this.bottom,f.object.near=this.near,f.object.far=this.far,this.view!==null&&(f.object.view=Object.assign({},this.view)),f}}const vo=4,Ca=[.125,.215,.35,.446,.526,.582],Dr=20,u6=new ql,Sa=new qt;let f6=null,h6=0,m6=0;const Rr=(1+Math.sqrt(5))/2,fo=1/Rr,xa=[new K0(1,1,1),new K0(-1,1,1),new K0(1,1,-1),new K0(-1,1,-1),new K0(0,Rr,fo),new K0(0,Rr,-fo),new K0(fo,0,Rr),new K0(-fo,0,Rr),new K0(Rr,fo,0),new K0(-Rr,fo,0)];class wa{constructor(a){this._renderer=a,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(a,f=0,g=.1,y=100){f6=this._renderer.getRenderTarget(),h6=this._renderer.getActiveCubeFace(),m6=this._renderer.getActiveMipmapLevel(),this._setSize(256);const P=this._allocateTargets();return P.depthBuffer=!0,this._sceneToCubeUV(a,g,y,P),f>0&&this._blur(P,0,0,f),this._applyPMREM(P),this._cleanup(P),P}fromEquirectangular(a,f=null){return this._fromTexture(a,f)}fromCubemap(a,f=null){return this._fromTexture(a,f)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Aa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ta(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(a){this._lodMax=Math.floor(Math.log2(a)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let a=0;a<this._lodPlanes.length;a++)this._lodPlanes[a].dispose()}_cleanup(a){this._renderer.setRenderTarget(f6,h6,m6),a.scissorTest=!1,v4(a,0,0,a.width,a.height)}_fromTexture(a,f){a.mapping===To||a.mapping===Ao?this._setSize(a.image.length===0?16:a.image[0].width||a.image[0].image.width):this._setSize(a.image.width/4),f6=this._renderer.getRenderTarget(),h6=this._renderer.getActiveCubeFace(),m6=this._renderer.getActiveMipmapLevel();const g=f||this._allocateTargets();return this._textureToCubeUV(a,g),this._applyPMREM(g),this._cleanup(g),g}_allocateTargets(){const a=3*Math.max(this._cubeSize,112),f=4*this._cubeSize,g={magFilter:Ki,minFilter:Ki,generateMipmaps:!1,type:fs,format:bn,colorSpace:j1,depthBuffer:!1},y=Ma(a,f,g);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==a||this._pingPongRenderTarget.height!==f){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ma(a,f,g);const{_lodMax:P}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lt0(P)),this._blurMaterial=kt0(P,a,f)}return y}_compileMaterial(a){const f=new Zi(this._lodPlanes[0],a);this._renderer.compile(f,u6)}_sceneToCubeUV(a,f,g,y){const W=new hn(90,1,f,g),X=[1,-1,1,1,1,1],Y=[1,1,1,-1,-1,-1],Q=this._renderer,o0=Q.autoClear,a0=Q.toneMapping;Q.getClearColor(Sa),Q.toneMapping=ar,Q.autoClear=!1;const m0=new d1({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),v0=new Zi(new Br,m0);let C0=!1;const u0=a.background;u0?u0.isColor&&(m0.color.copy(u0),a.background=null,C0=!0):(m0.color.copy(Sa),C0=!0);for(let t0=0;t0<6;t0++){const N0=t0%3;N0===0?(W.up.set(0,X[t0],0),W.lookAt(Y[t0],0,0)):N0===1?(W.up.set(0,0,X[t0]),W.lookAt(0,Y[t0],0)):(W.up.set(0,X[t0],0),W.lookAt(0,0,Y[t0]));const T0=this._cubeSize;v4(y,N0*T0,t0>2?T0:0,T0,T0),Q.setRenderTarget(y),C0&&Q.render(v0,W),Q.render(a,W)}v0.geometry.dispose(),v0.material.dispose(),Q.toneMapping=a0,Q.autoClear=o0,a.background=u0}_textureToCubeUV(a,f){const g=this._renderer,y=a.mapping===To||a.mapping===Ao;y?(this._cubemapMaterial===null&&(this._cubemapMaterial=Aa()),this._cubemapMaterial.uniforms.flipEnvMap.value=a.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ta());const P=y?this._cubemapMaterial:this._equirectMaterial,G=new Zi(this._lodPlanes[0],P),W=P.uniforms;W.envMap.value=a;const X=this._cubeSize;v4(f,0,0,3*X,2*X),g.setRenderTarget(f),g.render(G,u6)}_applyPMREM(a){const f=this._renderer,g=f.autoClear;f.autoClear=!1;for(let y=1;y<this._lodPlanes.length;y++){const P=Math.sqrt(this._sigmas[y]*this._sigmas[y]-this._sigmas[y-1]*this._sigmas[y-1]),G=xa[(y-1)%xa.length];this._blur(a,y-1,y,P,G)}f.autoClear=g}_blur(a,f,g,y,P){const G=this._pingPongRenderTarget;this._halfBlur(a,G,f,g,y,"latitudinal",P),this._halfBlur(G,a,g,g,y,"longitudinal",P)}_halfBlur(a,f,g,y,P,G,W){const X=this._renderer,Y=this._blurMaterial;G!=="latitudinal"&&G!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const Q=3,o0=new Zi(this._lodPlanes[y],Y),a0=Y.uniforms,m0=this._sizeLods[g]-1,v0=isFinite(P)?Math.PI/(2*m0):2*Math.PI/(2*Dr-1),C0=P/v0,u0=isFinite(P)?1+Math.floor(Q*C0):Dr;u0>Dr&&console.warn(`sigmaRadians, ${P}, is too large and will clip, as it requested ${u0} samples when the maximum is set to ${Dr}`);const t0=[];let N0=0;for(let D0=0;D0<Dr;++D0){const V0=D0/C0,h2=Math.exp(-V0*V0/2);t0.push(h2),D0===0?N0+=h2:D0<u0&&(N0+=2*h2)}for(let D0=0;D0<t0.length;D0++)t0[D0]=t0[D0]/N0;a0.envMap.value=a.texture,a0.samples.value=u0,a0.weights.value=t0,a0.latitudinal.value=G==="latitudinal",W&&(a0.poleAxis.value=W);const{_lodMax:T0}=this;a0.dTheta.value=v0,a0.mipInt.value=T0-g;const O0=this._sizeLods[y],k0=3*O0*(y>T0-vo?y-T0+vo:0),L0=4*(this._cubeSize-O0);v4(f,k0,L0,3*O0,2*O0),X.setRenderTarget(f),X.render(o0,u6)}}function Lt0(E){const a=[],f=[],g=[];let y=E;const P=E-vo+1+Ca.length;for(let G=0;G<P;G++){const W=Math.pow(2,y);f.push(W);let X=1/W;G>E-vo?X=Ca[G-E+vo-1]:G===0&&(X=0),g.push(X);const Y=1/(W-2),Q=-Y,o0=1+Y,a0=[Q,Q,o0,Q,o0,o0,Q,Q,o0,o0,Q,o0],m0=6,v0=6,C0=3,u0=2,t0=1,N0=new Float32Array(C0*v0*m0),T0=new Float32Array(u0*v0*m0),O0=new Float32Array(t0*v0*m0);for(let L0=0;L0<m0;L0++){const D0=L0%3*2/3-1,V0=L0>2?0:-1,h2=[D0,V0,0,D0+2/3,V0,0,D0+2/3,V0+1,0,D0,V0,0,D0+2/3,V0+1,0,D0,V0+1,0];N0.set(h2,C0*v0*L0),T0.set(a0,u0*v0*L0);const R0=[L0,L0,L0,L0,L0,L0];O0.set(R0,t0*v0*L0)}const k0=new Nn;k0.setAttribute("position",new e1(N0,C0)),k0.setAttribute("uv",new e1(T0,u0)),k0.setAttribute("faceIndex",new e1(O0,t0)),a.push(k0),y>vo&&y--}return{lodPlanes:a,sizeLods:f,sigmas:g}}function Ma(E,a,f){const g=new pr(E,a,f);return g.texture.mapping=H4,g.texture.name="PMREM.cubeUv",g.scissorTest=!0,g}function v4(E,a,f,g,y){E.viewport.set(a,f,g,y),E.scissor.set(a,f,g,y)}function kt0(E,a,f){const g=new Float32Array(Dr),y=new K0(0,1,0);return new v1({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/a,CUBEUV_TEXEL_HEIGHT:1/f,CUBEUV_MAX_MIP:`${E}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:g},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:y}},vertexShader:J6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Ta(){return new v1({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:J6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Aa(){return new v1({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:J6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function J6(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ot0(E){let a=new WeakMap,f=null;function g(W){if(W&&W.isTexture){const X=W.mapping,Y=X===k6||X===O6,Q=X===To||X===Ao;if(Y||Q)if(W.isRenderTargetTexture&&W.needsPMREMUpdate===!0){W.needsPMREMUpdate=!1;let o0=a.get(W);return f===null&&(f=new wa(E)),o0=Y?f.fromEquirectangular(W,o0):f.fromCubemap(W,o0),a.set(W,o0),o0.texture}else{if(a.has(W))return a.get(W).texture;{const o0=W.image;if(Y&&o0&&o0.height>0||Q&&o0&&y(o0)){f===null&&(f=new wa(E));const a0=Y?f.fromEquirectangular(W):f.fromCubemap(W);return a.set(W,a0),W.addEventListener("dispose",P),a0.texture}else return null}}}return W}function y(W){let X=0;const Y=6;for(let Q=0;Q<Y;Q++)W[Q]!==void 0&&X++;return X===Y}function P(W){const X=W.target;X.removeEventListener("dispose",P);const Y=a.get(X);Y!==void 0&&(a.delete(X),Y.dispose())}function G(){a=new WeakMap,f!==null&&(f.dispose(),f=null)}return{get:g,dispose:G}}function Ft0(E){const a={};function f(g){if(a[g]!==void 0)return a[g];let y;switch(g){case"WEBGL_depth_texture":y=E.getExtension("WEBGL_depth_texture")||E.getExtension("MOZ_WEBGL_depth_texture")||E.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":y=E.getExtension("EXT_texture_filter_anisotropic")||E.getExtension("MOZ_EXT_texture_filter_anisotropic")||E.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":y=E.getExtension("WEBGL_compressed_texture_s3tc")||E.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||E.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":y=E.getExtension("WEBGL_compressed_texture_pvrtc")||E.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:y=E.getExtension(g)}return a[g]=y,y}return{has:function(g){return f(g)!==null},init:function(g){g.isWebGL2?(f("EXT_color_buffer_float"),f("WEBGL_clip_cull_distance")):(f("WEBGL_depth_texture"),f("OES_texture_float"),f("OES_texture_half_float"),f("OES_texture_half_float_linear"),f("OES_standard_derivatives"),f("OES_element_index_uint"),f("OES_vertex_array_object"),f("ANGLE_instanced_arrays")),f("OES_texture_float_linear"),f("EXT_color_buffer_half_float"),f("WEBGL_multisampled_render_to_texture")},get:function(g){const y=f(g);return y===null&&console.warn("THREE.WebGLRenderer: "+g+" extension not supported."),y}}}function Bt0(E,a,f,g){const y={},P=new WeakMap;function G(o0){const a0=o0.target;a0.index!==null&&a.remove(a0.index);for(const v0 in a0.attributes)a.remove(a0.attributes[v0]);for(const v0 in a0.morphAttributes){const C0=a0.morphAttributes[v0];for(let u0=0,t0=C0.length;u0<t0;u0++)a.remove(C0[u0])}a0.removeEventListener("dispose",G),delete y[a0.id];const m0=P.get(a0);m0&&(a.remove(m0),P.delete(a0)),g.releaseStatesOfGeometry(a0),a0.isInstancedBufferGeometry===!0&&delete a0._maxInstanceCount,f.memory.geometries--}function W(o0,a0){return y[a0.id]===!0||(a0.addEventListener("dispose",G),y[a0.id]=!0,f.memory.geometries++),a0}function X(o0){const a0=o0.attributes;for(const v0 in a0)a.update(a0[v0],E.ARRAY_BUFFER);const m0=o0.morphAttributes;for(const v0 in m0){const C0=m0[v0];for(let u0=0,t0=C0.length;u0<t0;u0++)a.update(C0[u0],E.ARRAY_BUFFER)}}function Y(o0){const a0=[],m0=o0.index,v0=o0.attributes.position;let C0=0;if(m0!==null){const N0=m0.array;C0=m0.version;for(let T0=0,O0=N0.length;T0<O0;T0+=3){const k0=N0[T0+0],L0=N0[T0+1],D0=N0[T0+2];a0.push(k0,L0,L0,D0,D0,k0)}}else if(v0!==void 0){const N0=v0.array;C0=v0.version;for(let T0=0,O0=N0.length/3-1;T0<O0;T0+=3){const k0=T0+0,L0=T0+1,D0=T0+2;a0.push(k0,L0,L0,D0,D0,k0)}}else return;const u0=new(Bl(a0)?zl:Z6)(a0,1);u0.version=C0;const t0=P.get(o0);t0&&a.remove(t0),P.set(o0,u0)}function Q(o0){const a0=P.get(o0);if(a0){const m0=o0.index;m0!==null&&a0.version<m0.version&&Y(o0)}else Y(o0);return P.get(o0)}return{get:W,update:X,getWireframeAttribute:Q}}function Nt0(E,a,f,g){const y=g.isWebGL2;let P;function G(m0){P=m0}let W,X;function Y(m0){W=m0.type,X=m0.bytesPerElement}function Q(m0,v0){E.drawElements(P,v0,W,m0*X),f.update(v0,P,1)}function o0(m0,v0,C0){if(C0===0)return;let u0,t0;if(y)u0=E,t0="drawElementsInstanced";else if(u0=a.get("ANGLE_instanced_arrays"),t0="drawElementsInstancedANGLE",u0===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u0[t0](P,v0,W,m0*X,C0),f.update(v0,P,C0)}function a0(m0,v0,C0){if(C0===0)return;const u0=a.get("WEBGL_multi_draw");if(u0===null)for(let t0=0;t0<C0;t0++)this.render(m0[t0]/X,v0[t0]);else{u0.multiDrawElementsWEBGL(P,v0,0,W,m0,0,C0);let t0=0;for(let N0=0;N0<C0;N0++)t0+=v0[N0];f.update(t0,P,1)}}this.setMode=G,this.setIndex=Y,this.render=Q,this.renderInstances=o0,this.renderMultiDraw=a0}function Ut0(E){const a={geometries:0,textures:0},f={frame:0,calls:0,triangles:0,points:0,lines:0};function g(P,G,W){switch(f.calls++,G){case E.TRIANGLES:f.triangles+=W*(P/3);break;case E.LINES:f.lines+=W*(P/2);break;case E.LINE_STRIP:f.lines+=W*(P-1);break;case E.LINE_LOOP:f.lines+=W*P;break;case E.POINTS:f.points+=W*P;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",G);break}}function y(){f.calls=0,f.triangles=0,f.points=0,f.lines=0}return{memory:a,render:f,programs:null,autoReset:!0,reset:y,update:g}}function Gt0(E,a){return E[0]-a[0]}function Wt0(E,a){return Math.abs(a[1])-Math.abs(E[1])}function Vt0(E,a,f){const g={},y=new Float32Array(8),P=new WeakMap,G=new Fe,W=[];for(let Y=0;Y<8;Y++)W[Y]=[Y,0];function X(Y,Q,o0){const a0=Y.morphTargetInfluences;if(a.isWebGL2===!0){const m0=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,v0=m0!==void 0?m0.length:0;let C0=P.get(Q);if(C0===void 0||C0.count!==v0){let o2=function(){R2.dispose(),P.delete(Q),Q.removeEventListener("dispose",o2)};C0!==void 0&&C0.texture.dispose();const N0=Q.morphAttributes.position!==void 0,T0=Q.morphAttributes.normal!==void 0,O0=Q.morphAttributes.color!==void 0,k0=Q.morphAttributes.position||[],L0=Q.morphAttributes.normal||[],D0=Q.morphAttributes.color||[];let V0=0;N0===!0&&(V0=1),T0===!0&&(V0=2),O0===!0&&(V0=3);let h2=Q.attributes.position.count*V0,R0=1;h2>a.maxTextureSize&&(R0=Math.ceil(h2/a.maxTextureSize),h2=a.maxTextureSize);const j0=new Float32Array(h2*R0*4*v0),R2=new Gl(j0,h2,R0,v0);R2.type=f1,R2.needsUpdate=!0;const N2=V0*4;for(let x2=0;x2<v0;x2++){const $0=k0[x2],k2=L0[x2],w2=D0[x2],f2=h2*R0*4*x2;for(let F2=0;F2<$0.count;F2++){const L2=F2*N2;N0===!0&&(G.fromBufferAttribute($0,F2),j0[f2+L2+0]=G.x,j0[f2+L2+1]=G.y,j0[f2+L2+2]=G.z,j0[f2+L2+3]=0),T0===!0&&(G.fromBufferAttribute(k2,F2),j0[f2+L2+4]=G.x,j0[f2+L2+5]=G.y,j0[f2+L2+6]=G.z,j0[f2+L2+7]=0),O0===!0&&(G.fromBufferAttribute(w2,F2),j0[f2+L2+8]=G.x,j0[f2+L2+9]=G.y,j0[f2+L2+10]=G.z,j0[f2+L2+11]=w2.itemSize===4?G.w:1)}}C0={count:v0,texture:R2,size:new st(h2,R0)},P.set(Q,C0),Q.addEventListener("dispose",o2)}let u0=0;for(let N0=0;N0<a0.length;N0++)u0+=a0[N0];const t0=Q.morphTargetsRelative?1:1-u0;o0.getUniforms().setValue(E,"morphTargetBaseInfluence",t0),o0.getUniforms().setValue(E,"morphTargetInfluences",a0),o0.getUniforms().setValue(E,"morphTargetsTexture",C0.texture,f),o0.getUniforms().setValue(E,"morphTargetsTextureSize",C0.size)}else{const m0=a0===void 0?0:a0.length;let v0=g[Q.id];if(v0===void 0||v0.length!==m0){v0=[];for(let T0=0;T0<m0;T0++)v0[T0]=[T0,0];g[Q.id]=v0}for(let T0=0;T0<m0;T0++){const O0=v0[T0];O0[0]=T0,O0[1]=a0[T0]}v0.sort(Wt0);for(let T0=0;T0<8;T0++)T0<m0&&v0[T0][1]?(W[T0][0]=v0[T0][0],W[T0][1]=v0[T0][1]):(W[T0][0]=Number.MAX_SAFE_INTEGER,W[T0][1]=0);W.sort(Gt0);const C0=Q.morphAttributes.position,u0=Q.morphAttributes.normal;let t0=0;for(let T0=0;T0<8;T0++){const O0=W[T0],k0=O0[0],L0=O0[1];k0!==Number.MAX_SAFE_INTEGER&&L0?(C0&&Q.getAttribute("morphTarget"+T0)!==C0[k0]&&Q.setAttribute("morphTarget"+T0,C0[k0]),u0&&Q.getAttribute("morphNormal"+T0)!==u0[k0]&&Q.setAttribute("morphNormal"+T0,u0[k0]),y[T0]=L0,t0+=L0):(C0&&Q.hasAttribute("morphTarget"+T0)===!0&&Q.deleteAttribute("morphTarget"+T0),u0&&Q.hasAttribute("morphNormal"+T0)===!0&&Q.deleteAttribute("morphNormal"+T0),y[T0]=0)}const N0=Q.morphTargetsRelative?1:1-t0;o0.getUniforms().setValue(E,"morphTargetBaseInfluence",N0),o0.getUniforms().setValue(E,"morphTargetInfluences",y)}}return{update:X}}function zt0(E,a,f,g){let y=new WeakMap;function P(X){const Y=g.render.frame,Q=X.geometry,o0=a.get(X,Q);if(y.get(o0)!==Y&&(a.update(o0),y.set(o0,Y)),X.isInstancedMesh&&(X.hasEventListener("dispose",W)===!1&&X.addEventListener("dispose",W),y.get(X)!==Y&&(f.update(X.instanceMatrix,E.ARRAY_BUFFER),X.instanceColor!==null&&f.update(X.instanceColor,E.ARRAY_BUFFER),y.set(X,Y))),X.isSkinnedMesh){const a0=X.skeleton;y.get(a0)!==Y&&(a0.update(),y.set(a0,Y))}return o0}function G(){y=new WeakMap}function W(X){const Y=X.target;Y.removeEventListener("dispose",W),f.remove(Y.instanceMatrix),Y.instanceColor!==null&&f.remove(Y.instanceColor)}return{update:P,dispose:G}}class Yl extends nn{constructor(a,f,g,y,P,G,W,X,Y,Q){if(Q=Q!==void 0?Q:Lr,Q!==Lr&&Q!==Ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");g===void 0&&Q===Lr&&(g=cr),g===void 0&&Q===Ro&&(g=Pr),super(null,y,P,G,W,X,Q,g,Y),this.isDepthTexture=!0,this.image={width:a,height:f},this.magFilter=W!==void 0?W:Pi,this.minFilter=X!==void 0?X:Pi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(a){return super.copy(a),this.compareFunction=a.compareFunction,this}toJSON(a){const f=super.toJSON(a);return this.compareFunction!==null&&(f.compareFunction=this.compareFunction),f}}const Kl=new nn,Zl=new Yl(1,1);Zl.compareFunction=Fl;const Ql=new Gl,Jl=new E$,$l=new bl,Ea=[],Ra=[],Ia=new Float32Array(16),Da=new Float32Array(9),Pa=new Float32Array(4);function Fo(E,a,f){const g=E[0];if(g<=0||g>0)return E;const y=a*f;let P=Ea[y];if(P===void 0&&(P=new Float32Array(y),Ea[y]=P),a!==0){g.toArray(P,0);for(let G=1,W=0;G!==a;++G)W+=f,E[G].toArray(P,W)}return P}function ki(E,a){if(E.length!==a.length)return!1;for(let f=0,g=E.length;f<g;f++)if(E[f]!==a[f])return!1;return!0}function Oi(E,a){for(let f=0,g=a.length;f<g;f++)E[f]=a[f]}function X4(E,a){let f=Ra[a];f===void 0&&(f=new Int32Array(a),Ra[a]=f);for(let g=0;g!==a;++g)f[g]=E.allocateTextureUnit();return f}function Ht0(E,a){const f=this.cache;f[0]!==a&&(E.uniform1f(this.addr,a),f[0]=a)}function jt0(E,a){const f=this.cache;if(a.x!==void 0)(f[0]!==a.x||f[1]!==a.y)&&(E.uniform2f(this.addr,a.x,a.y),f[0]=a.x,f[1]=a.y);else{if(ki(f,a))return;E.uniform2fv(this.addr,a),Oi(f,a)}}function bt0(E,a){const f=this.cache;if(a.x!==void 0)(f[0]!==a.x||f[1]!==a.y||f[2]!==a.z)&&(E.uniform3f(this.addr,a.x,a.y,a.z),f[0]=a.x,f[1]=a.y,f[2]=a.z);else if(a.r!==void 0)(f[0]!==a.r||f[1]!==a.g||f[2]!==a.b)&&(E.uniform3f(this.addr,a.r,a.g,a.b),f[0]=a.r,f[1]=a.g,f[2]=a.b);else{if(ki(f,a))return;E.uniform3fv(this.addr,a),Oi(f,a)}}function Xt0(E,a){const f=this.cache;if(a.x!==void 0)(f[0]!==a.x||f[1]!==a.y||f[2]!==a.z||f[3]!==a.w)&&(E.uniform4f(this.addr,a.x,a.y,a.z,a.w),f[0]=a.x,f[1]=a.y,f[2]=a.z,f[3]=a.w);else{if(ki(f,a))return;E.uniform4fv(this.addr,a),Oi(f,a)}}function qt0(E,a){const f=this.cache,g=a.elements;if(g===void 0){if(ki(f,a))return;E.uniformMatrix2fv(this.addr,!1,a),Oi(f,a)}else{if(ki(f,g))return;Pa.set(g),E.uniformMatrix2fv(this.addr,!1,Pa),Oi(f,g)}}function Yt0(E,a){const f=this.cache,g=a.elements;if(g===void 0){if(ki(f,a))return;E.uniformMatrix3fv(this.addr,!1,a),Oi(f,a)}else{if(ki(f,g))return;Da.set(g),E.uniformMatrix3fv(this.addr,!1,Da),Oi(f,g)}}function Kt0(E,a){const f=this.cache,g=a.elements;if(g===void 0){if(ki(f,a))return;E.uniformMatrix4fv(this.addr,!1,a),Oi(f,a)}else{if(ki(f,g))return;Ia.set(g),E.uniformMatrix4fv(this.addr,!1,Ia),Oi(f,g)}}function Zt0(E,a){const f=this.cache;f[0]!==a&&(E.uniform1i(this.addr,a),f[0]=a)}function Qt0(E,a){const f=this.cache;if(a.x!==void 0)(f[0]!==a.x||f[1]!==a.y)&&(E.uniform2i(this.addr,a.x,a.y),f[0]=a.x,f[1]=a.y);else{if(ki(f,a))return;E.uniform2iv(this.addr,a),Oi(f,a)}}function Jt0(E,a){const f=this.cache;if(a.x!==void 0)(f[0]!==a.x||f[1]!==a.y||f[2]!==a.z)&&(E.uniform3i(this.addr,a.x,a.y,a.z),f[0]=a.x,f[1]=a.y,f[2]=a.z);else{if(ki(f,a))return;E.uniform3iv(this.addr,a),Oi(f,a)}}function $t0(E,a){const f=this.cache;if(a.x!==void 0)(f[0]!==a.x||f[1]!==a.y||f[2]!==a.z||f[3]!==a.w)&&(E.uniform4i(this.addr,a.x,a.y,a.z,a.w),f[0]=a.x,f[1]=a.y,f[2]=a.z,f[3]=a.w);else{if(ki(f,a))return;E.uniform4iv(this.addr,a),Oi(f,a)}}function te0(E,a){const f=this.cache;f[0]!==a&&(E.uniform1ui(this.addr,a),f[0]=a)}function ee0(E,a){const f=this.cache;if(a.x!==void 0)(f[0]!==a.x||f[1]!==a.y)&&(E.uniform2ui(this.addr,a.x,a.y),f[0]=a.x,f[1]=a.y);else{if(ki(f,a))return;E.uniform2uiv(this.addr,a),Oi(f,a)}}function ie0(E,a){const f=this.cache;if(a.x!==void 0)(f[0]!==a.x||f[1]!==a.y||f[2]!==a.z)&&(E.uniform3ui(this.addr,a.x,a.y,a.z),f[0]=a.x,f[1]=a.y,f[2]=a.z);else{if(ki(f,a))return;E.uniform3uiv(this.addr,a),Oi(f,a)}}function ne0(E,a){const f=this.cache;if(a.x!==void 0)(f[0]!==a.x||f[1]!==a.y||f[2]!==a.z||f[3]!==a.w)&&(E.uniform4ui(this.addr,a.x,a.y,a.z,a.w),f[0]=a.x,f[1]=a.y,f[2]=a.z,f[3]=a.w);else{if(ki(f,a))return;E.uniform4uiv(this.addr,a),Oi(f,a)}}function re0(E,a,f){const g=this.cache,y=f.allocateTextureUnit();g[0]!==y&&(E.uniform1i(this.addr,y),g[0]=y);const P=this.type===E.SAMPLER_2D_SHADOW?Zl:Kl;f.setTexture2D(a||P,y)}function oe0(E,a,f){const g=this.cache,y=f.allocateTextureUnit();g[0]!==y&&(E.uniform1i(this.addr,y),g[0]=y),f.setTexture3D(a||Jl,y)}function se0(E,a,f){const g=this.cache,y=f.allocateTextureUnit();g[0]!==y&&(E.uniform1i(this.addr,y),g[0]=y),f.setTextureCube(a||$l,y)}function ce0(E,a,f){const g=this.cache,y=f.allocateTextureUnit();g[0]!==y&&(E.uniform1i(this.addr,y),g[0]=y),f.setTexture2DArray(a||Ql,y)}function _e0(E){switch(E){case 5126:return Ht0;case 35664:return jt0;case 35665:return bt0;case 35666:return Xt0;case 35674:return qt0;case 35675:return Yt0;case 35676:return Kt0;case 5124:case 35670:return Zt0;case 35667:case 35671:return Qt0;case 35668:case 35672:return Jt0;case 35669:case 35673:return $t0;case 5125:return te0;case 36294:return ee0;case 36295:return ie0;case 36296:return ne0;case 35678:case 36198:case 36298:case 36306:case 35682:return re0;case 35679:case 36299:case 36307:return oe0;case 35680:case 36300:case 36308:case 36293:return se0;case 36289:case 36303:case 36311:case 36292:return ce0}}function ae0(E,a){E.uniform1fv(this.addr,a)}function le0(E,a){const f=Fo(a,this.size,2);E.uniform2fv(this.addr,f)}function pe0(E,a){const f=Fo(a,this.size,3);E.uniform3fv(this.addr,f)}function ue0(E,a){const f=Fo(a,this.size,4);E.uniform4fv(this.addr,f)}function fe0(E,a){const f=Fo(a,this.size,4);E.uniformMatrix2fv(this.addr,!1,f)}function he0(E,a){const f=Fo(a,this.size,9);E.uniformMatrix3fv(this.addr,!1,f)}function me0(E,a){const f=Fo(a,this.size,16);E.uniformMatrix4fv(this.addr,!1,f)}function de0(E,a){E.uniform1iv(this.addr,a)}function ye0(E,a){E.uniform2iv(this.addr,a)}function ve0(E,a){E.uniform3iv(this.addr,a)}function ge0(E,a){E.uniform4iv(this.addr,a)}function Ce0(E,a){E.uniform1uiv(this.addr,a)}function Se0(E,a){E.uniform2uiv(this.addr,a)}function xe0(E,a){E.uniform3uiv(this.addr,a)}function we0(E,a){E.uniform4uiv(this.addr,a)}function Me0(E,a,f){const g=this.cache,y=a.length,P=X4(f,y);ki(g,P)||(E.uniform1iv(this.addr,P),Oi(g,P));for(let G=0;G!==y;++G)f.setTexture2D(a[G]||Kl,P[G])}function Te0(E,a,f){const g=this.cache,y=a.length,P=X4(f,y);ki(g,P)||(E.uniform1iv(this.addr,P),Oi(g,P));for(let G=0;G!==y;++G)f.setTexture3D(a[G]||Jl,P[G])}function Ae0(E,a,f){const g=this.cache,y=a.length,P=X4(f,y);ki(g,P)||(E.uniform1iv(this.addr,P),Oi(g,P));for(let G=0;G!==y;++G)f.setTextureCube(a[G]||$l,P[G])}function Ee0(E,a,f){const g=this.cache,y=a.length,P=X4(f,y);ki(g,P)||(E.uniform1iv(this.addr,P),Oi(g,P));for(let G=0;G!==y;++G)f.setTexture2DArray(a[G]||Ql,P[G])}function Re0(E){switch(E){case 5126:return ae0;case 35664:return le0;case 35665:return pe0;case 35666:return ue0;case 35674:return fe0;case 35675:return he0;case 35676:return me0;case 5124:case 35670:return de0;case 35667:case 35671:return ye0;case 35668:case 35672:return ve0;case 35669:case 35673:return ge0;case 5125:return Ce0;case 36294:return Se0;case 36295:return xe0;case 36296:return we0;case 35678:case 36198:case 36298:case 36306:case 35682:return Me0;case 35679:case 36299:case 36307:return Te0;case 35680:case 36300:case 36308:case 36293:return Ae0;case 36289:case 36303:case 36311:case 36292:return Ee0}}class Ie0{constructor(a,f,g){this.id=a,this.addr=g,this.cache=[],this.type=f.type,this.setValue=_e0(f.type)}}class De0{constructor(a,f,g){this.id=a,this.addr=g,this.cache=[],this.type=f.type,this.size=f.size,this.setValue=Re0(f.type)}}class Pe0{constructor(a){this.id=a,this.seq=[],this.map={}}setValue(a,f,g){const y=this.seq;for(let P=0,G=y.length;P!==G;++P){const W=y[P];W.setValue(a,f[W.id],g)}}}const d6=/(\w+)(\])?(\[|\.)?/g;function La(E,a){E.seq.push(a),E.map[a.id]=a}function Le0(E,a,f){const g=E.name,y=g.length;for(d6.lastIndex=0;;){const P=d6.exec(g),G=d6.lastIndex;let W=P[1];const X=P[2]==="]",Y=P[3];if(X&&(W=W|0),Y===void 0||Y==="["&&G+2===y){La(f,Y===void 0?new Ie0(W,E,a):new De0(W,E,a));break}else{let o0=f.map[W];o0===void 0&&(o0=new Pe0(W),La(f,o0)),f=o0}}}class D4{constructor(a,f){this.seq=[],this.map={};const g=a.getProgramParameter(f,a.ACTIVE_UNIFORMS);for(let y=0;y<g;++y){const P=a.getActiveUniform(f,y),G=a.getUniformLocation(f,P.name);Le0(P,G,this)}}setValue(a,f,g,y){const P=this.map[f];P!==void 0&&P.setValue(a,g,y)}setOptional(a,f,g){const y=f[g];y!==void 0&&this.setValue(a,g,y)}static upload(a,f,g,y){for(let P=0,G=f.length;P!==G;++P){const W=f[P],X=g[W.id];X.needsUpdate!==!1&&W.setValue(a,X.value,y)}}static seqWithValue(a,f){const g=[];for(let y=0,P=a.length;y!==P;++y){const G=a[y];G.id in f&&g.push(G)}return g}}function ka(E,a,f){const g=E.createShader(a);return E.shaderSource(g,f),E.compileShader(g),g}const ke0=37297;let Oe0=0;function Fe0(E,a){const f=E.split(`
`),g=[],y=Math.max(a-6,0),P=Math.min(a+6,f.length);for(let G=y;G<P;G++){const W=G+1;g.push(`${W===a?">":" "} ${W}: ${f[G]}`)}return g.join(`
`)}function Be0(E){const a=Ne.getPrimaries(Ne.workingColorSpace),f=Ne.getPrimaries(E);let g;switch(a===f?g="":a===G4&&f===U4?g="LinearDisplayP3ToLinearSRGB":a===U4&&f===G4&&(g="LinearSRGBToLinearDisplayP3"),E){case j1:case j4:return[g,"LinearTransferOETF"];case vi:case Y6:return[g,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",E),[g,"LinearTransferOETF"]}}function Oa(E,a,f){const g=E.getShaderParameter(a,E.COMPILE_STATUS),y=E.getShaderInfoLog(a).trim();if(g&&y==="")return"";const P=/ERROR: 0:(\d+)/.exec(y);if(P){const G=parseInt(P[1]);return f.toUpperCase()+`

`+y+`

`+Fe0(E.getShaderSource(a),G)}else return y}function Ne0(E,a){const f=Be0(a);return`vec4 ${E}( vec4 value ) { return ${f[0]}( ${f[1]}( value ) ); }`}function Ue0(E,a){let f;switch(a){case LJ:f="Linear";break;case kJ:f="Reinhard";break;case OJ:f="OptimizedCineon";break;case FJ:f="ACESFilmic";break;case NJ:f="AgX";break;case BJ:f="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",a),f="Linear"}return"vec3 "+E+"( vec3 color ) { return "+f+"ToneMapping( color ); }"}function Ge0(E){return[E.extensionDerivatives||E.envMapCubeUVHeight||E.bumpMap||E.normalMapTangentSpace||E.clearcoatNormalMap||E.flatShading||E.alphaToCoverage||E.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(E.extensionFragDepth||E.logarithmicDepthBuffer)&&E.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",E.extensionDrawBuffers&&E.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(E.extensionShaderTextureLOD||E.envMap||E.transmission)&&E.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(go).join(`
`)}function We0(E){return[E.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",E.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(go).join(`
`)}function Ve0(E){const a=[];for(const f in E){const g=E[f];g!==!1&&a.push("#define "+f+" "+g)}return a.join(`
`)}function ze0(E,a){const f={},g=E.getProgramParameter(a,E.ACTIVE_ATTRIBUTES);for(let y=0;y<g;y++){const P=E.getActiveAttrib(a,y),G=P.name;let W=1;P.type===E.FLOAT_MAT2&&(W=2),P.type===E.FLOAT_MAT3&&(W=3),P.type===E.FLOAT_MAT4&&(W=4),f[G]={type:P.type,location:E.getAttribLocation(a,G),locationSize:W}}return f}function go(E){return E!==""}function Fa(E,a){const f=a.numSpotLightShadows+a.numSpotLightMaps-a.numSpotLightShadowsWithMaps;return E.replace(/NUM_DIR_LIGHTS/g,a.numDirLights).replace(/NUM_SPOT_LIGHTS/g,a.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,a.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,f).replace(/NUM_RECT_AREA_LIGHTS/g,a.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,a.numPointLights).replace(/NUM_HEMI_LIGHTS/g,a.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,a.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,a.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,a.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,a.numPointLightShadows)}function Ba(E,a){return E.replace(/NUM_CLIPPING_PLANES/g,a.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,a.numClippingPlanes-a.numClipIntersection)}const He0=/^[ \t]*#include +<([\w\d./]+)>/gm;function V6(E){return E.replace(He0,be0)}const je0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function be0(E,a){let f=se[a];if(f===void 0){const g=je0.get(a);if(g!==void 0)f=se[g],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',a,g);else throw new Error("Can not resolve #include <"+a+">")}return V6(f)}const Xe0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Na(E){return E.replace(Xe0,qe0)}function qe0(E,a,f,g){let y="";for(let P=parseInt(a);P<parseInt(f);P++)y+=g.replace(/\[\s*i\s*\]/g,"[ "+P+" ]").replace(/UNROLLED_LOOP_INDEX/g,P);return y}function Ua(E){let a=`precision ${E.precision} float;
	precision ${E.precision} int;
	precision ${E.precision} sampler2D;
	precision ${E.precision} samplerCube;
	`;return E.isWebGL2&&(a+=`precision ${E.precision} sampler3D;
		precision ${E.precision} sampler2DArray;
		precision ${E.precision} sampler2DShadow;
		precision ${E.precision} samplerCubeShadow;
		precision ${E.precision} sampler2DArrayShadow;
		precision ${E.precision} isampler2D;
		precision ${E.precision} isampler3D;
		precision ${E.precision} isamplerCube;
		precision ${E.precision} isampler2DArray;
		precision ${E.precision} usampler2D;
		precision ${E.precision} usampler3D;
		precision ${E.precision} usamplerCube;
		precision ${E.precision} usampler2DArray;
		`),E.precision==="highp"?a+=`
#define HIGH_PRECISION`:E.precision==="mediump"?a+=`
#define MEDIUM_PRECISION`:E.precision==="lowp"&&(a+=`
#define LOW_PRECISION`),a}function Ye0(E){let a="SHADOWMAP_TYPE_BASIC";return E.shadowMapType===wl?a="SHADOWMAP_TYPE_PCF":E.shadowMapType===aJ?a="SHADOWMAP_TYPE_PCF_SOFT":E.shadowMapType===W1&&(a="SHADOWMAP_TYPE_VSM"),a}function Ke0(E){let a="ENVMAP_TYPE_CUBE";if(E.envMap)switch(E.envMapMode){case To:case Ao:a="ENVMAP_TYPE_CUBE";break;case H4:a="ENVMAP_TYPE_CUBE_UV";break}return a}function Ze0(E){let a="ENVMAP_MODE_REFLECTION";if(E.envMap)switch(E.envMapMode){case Ao:a="ENVMAP_MODE_REFRACTION";break}return a}function Qe0(E){let a="ENVMAP_BLENDING_NONE";if(E.envMap)switch(E.combine){case Mo:a="ENVMAP_BLENDING_MULTIPLY";break;case PJ:a="ENVMAP_BLENDING_MIX";break;case us:a="ENVMAP_BLENDING_ADD";break}return a}function Je0(E){const a=E.envMapCubeUVHeight;if(a===null)return null;const f=Math.log2(a)-2,g=1/a;return{texelWidth:1/(3*Math.max(Math.pow(2,f),7*16)),texelHeight:g,maxMip:f}}function $e0(E,a,f,g){const y=E.getContext(),P=f.defines;let G=f.vertexShader,W=f.fragmentShader;const X=Ye0(f),Y=Ke0(f),Q=Ze0(f),o0=Qe0(f),a0=Je0(f),m0=f.isWebGL2?"":Ge0(f),v0=We0(f),C0=Ve0(P),u0=y.createProgram();let t0,N0,T0=f.glslVersion?"#version "+f.glslVersion+`
`:"";f.isRawShaderMaterial?(t0=["#define SHADER_TYPE "+f.shaderType,"#define SHADER_NAME "+f.shaderName,C0].filter(go).join(`
`),t0.length>0&&(t0+=`
`),N0=[m0,"#define SHADER_TYPE "+f.shaderType,"#define SHADER_NAME "+f.shaderName,C0].filter(go).join(`
`),N0.length>0&&(N0+=`
`)):(t0=[Ua(f),"#define SHADER_TYPE "+f.shaderType,"#define SHADER_NAME "+f.shaderName,C0,f.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",f.batching?"#define USE_BATCHING":"",f.instancing?"#define USE_INSTANCING":"",f.instancingColor?"#define USE_INSTANCING_COLOR":"",f.useFog&&f.fog?"#define USE_FOG":"",f.useFog&&f.fogExp2?"#define FOG_EXP2":"",f.map?"#define USE_MAP":"",f.envMap?"#define USE_ENVMAP":"",f.envMap?"#define "+Q:"",f.lightMap?"#define USE_LIGHTMAP":"",f.aoMap?"#define USE_AOMAP":"",f.bumpMap?"#define USE_BUMPMAP":"",f.normalMap?"#define USE_NORMALMAP":"",f.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",f.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",f.displacementMap?"#define USE_DISPLACEMENTMAP":"",f.emissiveMap?"#define USE_EMISSIVEMAP":"",f.anisotropy?"#define USE_ANISOTROPY":"",f.anisotropyMap?"#define USE_ANISOTROPYMAP":"",f.clearcoatMap?"#define USE_CLEARCOATMAP":"",f.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",f.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",f.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",f.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",f.specularMap?"#define USE_SPECULARMAP":"",f.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",f.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",f.roughnessMap?"#define USE_ROUGHNESSMAP":"",f.metalnessMap?"#define USE_METALNESSMAP":"",f.alphaMap?"#define USE_ALPHAMAP":"",f.alphaHash?"#define USE_ALPHAHASH":"",f.transmission?"#define USE_TRANSMISSION":"",f.transmissionMap?"#define USE_TRANSMISSIONMAP":"",f.thicknessMap?"#define USE_THICKNESSMAP":"",f.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",f.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",f.mapUv?"#define MAP_UV "+f.mapUv:"",f.alphaMapUv?"#define ALPHAMAP_UV "+f.alphaMapUv:"",f.lightMapUv?"#define LIGHTMAP_UV "+f.lightMapUv:"",f.aoMapUv?"#define AOMAP_UV "+f.aoMapUv:"",f.emissiveMapUv?"#define EMISSIVEMAP_UV "+f.emissiveMapUv:"",f.bumpMapUv?"#define BUMPMAP_UV "+f.bumpMapUv:"",f.normalMapUv?"#define NORMALMAP_UV "+f.normalMapUv:"",f.displacementMapUv?"#define DISPLACEMENTMAP_UV "+f.displacementMapUv:"",f.metalnessMapUv?"#define METALNESSMAP_UV "+f.metalnessMapUv:"",f.roughnessMapUv?"#define ROUGHNESSMAP_UV "+f.roughnessMapUv:"",f.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+f.anisotropyMapUv:"",f.clearcoatMapUv?"#define CLEARCOATMAP_UV "+f.clearcoatMapUv:"",f.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+f.clearcoatNormalMapUv:"",f.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+f.clearcoatRoughnessMapUv:"",f.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+f.iridescenceMapUv:"",f.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+f.iridescenceThicknessMapUv:"",f.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+f.sheenColorMapUv:"",f.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+f.sheenRoughnessMapUv:"",f.specularMapUv?"#define SPECULARMAP_UV "+f.specularMapUv:"",f.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+f.specularColorMapUv:"",f.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+f.specularIntensityMapUv:"",f.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+f.transmissionMapUv:"",f.thicknessMapUv?"#define THICKNESSMAP_UV "+f.thicknessMapUv:"",f.vertexTangents&&f.flatShading===!1?"#define USE_TANGENT":"",f.vertexColors?"#define USE_COLOR":"",f.vertexAlphas?"#define USE_COLOR_ALPHA":"",f.vertexUv1s?"#define USE_UV1":"",f.vertexUv2s?"#define USE_UV2":"",f.vertexUv3s?"#define USE_UV3":"",f.pointsUvs?"#define USE_POINTS_UV":"",f.flatShading?"#define FLAT_SHADED":"",f.skinning?"#define USE_SKINNING":"",f.morphTargets?"#define USE_MORPHTARGETS":"",f.morphNormals&&f.flatShading===!1?"#define USE_MORPHNORMALS":"",f.morphColors&&f.isWebGL2?"#define USE_MORPHCOLORS":"",f.morphTargetsCount>0&&f.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",f.morphTargetsCount>0&&f.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+f.morphTextureStride:"",f.morphTargetsCount>0&&f.isWebGL2?"#define MORPHTARGETS_COUNT "+f.morphTargetsCount:"",f.doubleSided?"#define DOUBLE_SIDED":"",f.flipSided?"#define FLIP_SIDED":"",f.shadowMapEnabled?"#define USE_SHADOWMAP":"",f.shadowMapEnabled?"#define "+X:"",f.sizeAttenuation?"#define USE_SIZEATTENUATION":"",f.numLightProbes>0?"#define USE_LIGHT_PROBES":"",f.useLegacyLights?"#define LEGACY_LIGHTS":"",f.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",f.logarithmicDepthBuffer&&f.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(go).join(`
`),N0=[m0,Ua(f),"#define SHADER_TYPE "+f.shaderType,"#define SHADER_NAME "+f.shaderName,C0,f.useFog&&f.fog?"#define USE_FOG":"",f.useFog&&f.fogExp2?"#define FOG_EXP2":"",f.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",f.map?"#define USE_MAP":"",f.matcap?"#define USE_MATCAP":"",f.envMap?"#define USE_ENVMAP":"",f.envMap?"#define "+Y:"",f.envMap?"#define "+Q:"",f.envMap?"#define "+o0:"",a0?"#define CUBEUV_TEXEL_WIDTH "+a0.texelWidth:"",a0?"#define CUBEUV_TEXEL_HEIGHT "+a0.texelHeight:"",a0?"#define CUBEUV_MAX_MIP "+a0.maxMip+".0":"",f.lightMap?"#define USE_LIGHTMAP":"",f.aoMap?"#define USE_AOMAP":"",f.bumpMap?"#define USE_BUMPMAP":"",f.normalMap?"#define USE_NORMALMAP":"",f.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",f.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",f.emissiveMap?"#define USE_EMISSIVEMAP":"",f.anisotropy?"#define USE_ANISOTROPY":"",f.anisotropyMap?"#define USE_ANISOTROPYMAP":"",f.clearcoat?"#define USE_CLEARCOAT":"",f.clearcoatMap?"#define USE_CLEARCOATMAP":"",f.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",f.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",f.iridescence?"#define USE_IRIDESCENCE":"",f.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",f.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",f.specularMap?"#define USE_SPECULARMAP":"",f.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",f.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",f.roughnessMap?"#define USE_ROUGHNESSMAP":"",f.metalnessMap?"#define USE_METALNESSMAP":"",f.alphaMap?"#define USE_ALPHAMAP":"",f.alphaTest?"#define USE_ALPHATEST":"",f.alphaHash?"#define USE_ALPHAHASH":"",f.sheen?"#define USE_SHEEN":"",f.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",f.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",f.transmission?"#define USE_TRANSMISSION":"",f.transmissionMap?"#define USE_TRANSMISSIONMAP":"",f.thicknessMap?"#define USE_THICKNESSMAP":"",f.vertexTangents&&f.flatShading===!1?"#define USE_TANGENT":"",f.vertexColors||f.instancingColor?"#define USE_COLOR":"",f.vertexAlphas?"#define USE_COLOR_ALPHA":"",f.vertexUv1s?"#define USE_UV1":"",f.vertexUv2s?"#define USE_UV2":"",f.vertexUv3s?"#define USE_UV3":"",f.pointsUvs?"#define USE_POINTS_UV":"",f.gradientMap?"#define USE_GRADIENTMAP":"",f.flatShading?"#define FLAT_SHADED":"",f.doubleSided?"#define DOUBLE_SIDED":"",f.flipSided?"#define FLIP_SIDED":"",f.shadowMapEnabled?"#define USE_SHADOWMAP":"",f.shadowMapEnabled?"#define "+X:"",f.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",f.numLightProbes>0?"#define USE_LIGHT_PROBES":"",f.useLegacyLights?"#define LEGACY_LIGHTS":"",f.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",f.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",f.logarithmicDepthBuffer&&f.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",f.toneMapping!==ar?"#define TONE_MAPPING":"",f.toneMapping!==ar?se.tonemapping_pars_fragment:"",f.toneMapping!==ar?Ue0("toneMapping",f.toneMapping):"",f.dithering?"#define DITHERING":"",f.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,Ne0("linearToOutputTexel",f.outputColorSpace),f.useDepthPacking?"#define DEPTH_PACKING "+f.depthPacking:"",`
`].filter(go).join(`
`)),G=V6(G),G=Fa(G,f),G=Ba(G,f),W=V6(W),W=Fa(W,f),W=Ba(W,f),G=Na(G),W=Na(W),f.isWebGL2&&f.isRawShaderMaterial!==!0&&(T0=`#version 300 es
`,t0=[v0,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+t0,N0=["precision mediump sampler2DArray;","#define varying in",f.glslVersion===ta?"":"layout(location = 0) out highp vec4 pc_fragColor;",f.glslVersion===ta?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+N0);const O0=T0+t0+G,k0=T0+N0+W,L0=ka(y,y.VERTEX_SHADER,O0),D0=ka(y,y.FRAGMENT_SHADER,k0);y.attachShader(u0,L0),y.attachShader(u0,D0),f.index0AttributeName!==void 0?y.bindAttribLocation(u0,0,f.index0AttributeName):f.morphTargets===!0&&y.bindAttribLocation(u0,0,"position"),y.linkProgram(u0);function V0(R2){if(E.debug.checkShaderErrors){const N2=y.getProgramInfoLog(u0).trim(),o2=y.getShaderInfoLog(L0).trim(),x2=y.getShaderInfoLog(D0).trim();let $0=!0,k2=!0;if(y.getProgramParameter(u0,y.LINK_STATUS)===!1)if($0=!1,typeof E.debug.onShaderError=="function")E.debug.onShaderError(y,u0,L0,D0);else{const w2=Oa(y,L0,"vertex"),f2=Oa(y,D0,"fragment");console.error("THREE.WebGLProgram: Shader Error "+y.getError()+" - VALIDATE_STATUS "+y.getProgramParameter(u0,y.VALIDATE_STATUS)+`

Material Name: `+R2.name+`
Material Type: `+R2.type+`

Program Info Log: `+N2+`
`+w2+`
`+f2)}else N2!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N2):(o2===""||x2==="")&&(k2=!1);k2&&(R2.diagnostics={runnable:$0,programLog:N2,vertexShader:{log:o2,prefix:t0},fragmentShader:{log:x2,prefix:N0}})}y.deleteShader(L0),y.deleteShader(D0),h2=new D4(y,u0),R0=ze0(y,u0)}let h2;this.getUniforms=function(){return h2===void 0&&V0(this),h2};let R0;this.getAttributes=function(){return R0===void 0&&V0(this),R0};let j0=f.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j0===!1&&(j0=y.getProgramParameter(u0,ke0)),j0},this.destroy=function(){g.releaseStatesOfProgram(this),y.deleteProgram(u0),this.program=void 0},this.type=f.shaderType,this.name=f.shaderName,this.id=Oe0++,this.cacheKey=a,this.usedTimes=1,this.program=u0,this.vertexShader=L0,this.fragmentShader=D0,this}let ti0=0;class ei0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(a){const f=a.vertexShader,g=a.fragmentShader,y=this._getShaderStage(f),P=this._getShaderStage(g),G=this._getShaderCacheForMaterial(a);return G.has(y)===!1&&(G.add(y),y.usedTimes++),G.has(P)===!1&&(G.add(P),P.usedTimes++),this}remove(a){const f=this.materialCache.get(a);for(const g of f)g.usedTimes--,g.usedTimes===0&&this.shaderCache.delete(g.code);return this.materialCache.delete(a),this}getVertexShaderID(a){return this._getShaderStage(a.vertexShader).id}getFragmentShaderID(a){return this._getShaderStage(a.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(a){const f=this.materialCache;let g=f.get(a);return g===void 0&&(g=new Set,f.set(a,g)),g}_getShaderStage(a){const f=this.shaderCache;let g=f.get(a);return g===void 0&&(g=new ii0(a),f.set(a,g)),g}}class ii0{constructor(a){this.id=ti0++,this.code=a,this.usedTimes=0}}function ni0(E,a,f,g,y,P,G){const W=new Wl,X=new ei0,Y=new Set,Q=[],o0=y.isWebGL2,a0=y.logarithmicDepthBuffer,m0=y.vertexTextures;let v0=y.precision;const C0={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u0(R0){return Y.add(R0),R0===0?"uv":`uv${R0}`}function t0(R0,j0,R2,N2,o2){const x2=N2.fog,$0=o2.geometry,k2=R0.isMeshStandardMaterial?N2.environment:null,w2=(R0.isMeshStandardMaterial?f:a).get(R0.envMap||k2),f2=w2&&w2.mapping===H4?w2.image.height:null,F2=C0[R0.type];R0.precision!==null&&(v0=y.getMaxPrecision(R0.precision),v0!==R0.precision&&console.warn("THREE.WebGLProgram.getParameters:",R0.precision,"not supported, using",v0,"instead."));const L2=$0.morphAttributes.position||$0.morphAttributes.normal||$0.morphAttributes.color,X2=L2!==void 0?L2.length:0;let Y2=0;$0.morphAttributes.position!==void 0&&(Y2=1),$0.morphAttributes.normal!==void 0&&(Y2=2),$0.morphAttributes.color!==void 0&&(Y2=3);let c2,g2,P2,z2;if(F2){const ee=mn[F2];c2=ee.vertexShader,g2=ee.fragmentShader}else c2=R0.vertexShader,g2=R0.fragmentShader,X.update(R0),P2=X.getVertexShaderID(R0),z2=X.getFragmentShaderID(R0);const J2=E.getRenderTarget(),$2=o2.isInstancedMesh===!0,Dt=o2.isBatchedMesh===!0,Ut=!!R0.map,l2=!!R0.matcap,ce=!!w2,Mt=!!R0.aoMap,Lt=!!R0.lightMap,yt=!!R0.bumpMap,Ue=!!R0.normalMap,jt=!!R0.displacementMap,z0=!!R0.emissiveMap,F0=!!R0.metalnessMap,v2=!!R0.roughnessMap,G2=R0.anisotropy>0,V2=R0.clearcoat>0,U2=R0.iridescence>0,vt=R0.sheen>0,nt=R0.transmission>0,pt=G2&&!!R0.anisotropyMap,xt=V2&&!!R0.clearcoatMap,Bt=V2&&!!R0.clearcoatNormalMap,W2=V2&&!!R0.clearcoatRoughnessMap,ge=U2&&!!R0.iridescenceMap,Zt=U2&&!!R0.iridescenceThicknessMap,Wt=vt&&!!R0.sheenColorMap,mt=vt&&!!R0.sheenRoughnessMap,ct=!!R0.specularMap,bt=!!R0.specularColorMap,Z0=!!R0.specularIntensityMap,q2=nt&&!!R0.transmissionMap,rt=nt&&!!R0.thicknessMap,Tt=!!R0.gradientMap,b0=!!R0.alphaMap,j2=R0.alphaTest>0,H2=!!R0.alphaHash,dt=!!R0.extensions;let Rt=ar;R0.toneMapped&&(J2===null||J2.isXRRenderTarget===!0)&&(Rt=E.toneMapping);const de={isWebGL2:o0,shaderID:F2,shaderType:R0.type,shaderName:R0.name,vertexShader:c2,fragmentShader:g2,defines:R0.defines,customVertexShaderID:P2,customFragmentShaderID:z2,isRawShaderMaterial:R0.isRawShaderMaterial===!0,glslVersion:R0.glslVersion,precision:v0,batching:Dt,instancing:$2,instancingColor:$2&&o2.instanceColor!==null,supportsVertexTextures:m0,outputColorSpace:J2===null?E.outputColorSpace:J2.isXRRenderTarget===!0?J2.texture.colorSpace:j1,alphaToCoverage:!!R0.alphaToCoverage,map:Ut,matcap:l2,envMap:ce,envMapMode:ce&&w2.mapping,envMapCubeUVHeight:f2,aoMap:Mt,lightMap:Lt,bumpMap:yt,normalMap:Ue,displacementMap:m0&&jt,emissiveMap:z0,normalMapObjectSpace:Ue&&R0.normalMapType===$J,normalMapTangentSpace:Ue&&R0.normalMapType===Ol,metalnessMap:F0,roughnessMap:v2,anisotropy:G2,anisotropyMap:pt,clearcoat:V2,clearcoatMap:xt,clearcoatNormalMap:Bt,clearcoatRoughnessMap:W2,iridescence:U2,iridescenceMap:ge,iridescenceThicknessMap:Zt,sheen:vt,sheenColorMap:Wt,sheenRoughnessMap:mt,specularMap:ct,specularColorMap:bt,specularIntensityMap:Z0,transmission:nt,transmissionMap:q2,thicknessMap:rt,gradientMap:Tt,opaque:R0.transparent===!1&&R0.blending===So&&R0.alphaToCoverage===!1,alphaMap:b0,alphaTest:j2,alphaHash:H2,combine:R0.combine,mapUv:Ut&&u0(R0.map.channel),aoMapUv:Mt&&u0(R0.aoMap.channel),lightMapUv:Lt&&u0(R0.lightMap.channel),bumpMapUv:yt&&u0(R0.bumpMap.channel),normalMapUv:Ue&&u0(R0.normalMap.channel),displacementMapUv:jt&&u0(R0.displacementMap.channel),emissiveMapUv:z0&&u0(R0.emissiveMap.channel),metalnessMapUv:F0&&u0(R0.metalnessMap.channel),roughnessMapUv:v2&&u0(R0.roughnessMap.channel),anisotropyMapUv:pt&&u0(R0.anisotropyMap.channel),clearcoatMapUv:xt&&u0(R0.clearcoatMap.channel),clearcoatNormalMapUv:Bt&&u0(R0.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W2&&u0(R0.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&u0(R0.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&u0(R0.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&u0(R0.sheenColorMap.channel),sheenRoughnessMapUv:mt&&u0(R0.sheenRoughnessMap.channel),specularMapUv:ct&&u0(R0.specularMap.channel),specularColorMapUv:bt&&u0(R0.specularColorMap.channel),specularIntensityMapUv:Z0&&u0(R0.specularIntensityMap.channel),transmissionMapUv:q2&&u0(R0.transmissionMap.channel),thicknessMapUv:rt&&u0(R0.thicknessMap.channel),alphaMapUv:b0&&u0(R0.alphaMap.channel),vertexTangents:!!$0.attributes.tangent&&(Ue||G2),vertexColors:R0.vertexColors,vertexAlphas:R0.vertexColors===!0&&!!$0.attributes.color&&$0.attributes.color.itemSize===4,pointsUvs:o2.isPoints===!0&&!!$0.attributes.uv&&(Ut||b0),fog:!!x2,useFog:R0.fog===!0,fogExp2:!!x2&&x2.isFogExp2,flatShading:R0.flatShading===!0,sizeAttenuation:R0.sizeAttenuation===!0,logarithmicDepthBuffer:a0,skinning:o2.isSkinnedMesh===!0,morphTargets:$0.morphAttributes.position!==void 0,morphNormals:$0.morphAttributes.normal!==void 0,morphColors:$0.morphAttributes.color!==void 0,morphTargetsCount:X2,morphTextureStride:Y2,numDirLights:j0.directional.length,numPointLights:j0.point.length,numSpotLights:j0.spot.length,numSpotLightMaps:j0.spotLightMap.length,numRectAreaLights:j0.rectArea.length,numHemiLights:j0.hemi.length,numDirLightShadows:j0.directionalShadowMap.length,numPointLightShadows:j0.pointShadowMap.length,numSpotLightShadows:j0.spotShadowMap.length,numSpotLightShadowsWithMaps:j0.numSpotLightShadowsWithMaps,numLightProbes:j0.numLightProbes,numClippingPlanes:G.numPlanes,numClipIntersection:G.numIntersection,dithering:R0.dithering,shadowMapEnabled:E.shadowMap.enabled&&R2.length>0,shadowMapType:E.shadowMap.type,toneMapping:Rt,useLegacyLights:E._useLegacyLights,decodeVideoTexture:Ut&&R0.map.isVideoTexture===!0&&Ne.getTransfer(R0.map.colorSpace)===Ke,premultipliedAlpha:R0.premultipliedAlpha,doubleSided:R0.side===t1,flipSided:R0.side===dn,useDepthPacking:R0.depthPacking>=0,depthPacking:R0.depthPacking||0,index0AttributeName:R0.index0AttributeName,extensionDerivatives:dt&&R0.extensions.derivatives===!0,extensionFragDepth:dt&&R0.extensions.fragDepth===!0,extensionDrawBuffers:dt&&R0.extensions.drawBuffers===!0,extensionShaderTextureLOD:dt&&R0.extensions.shaderTextureLOD===!0,extensionClipCullDistance:dt&&R0.extensions.clipCullDistance===!0&&g.has("WEBGL_clip_cull_distance"),extensionMultiDraw:dt&&R0.extensions.multiDraw===!0&&g.has("WEBGL_multi_draw"),rendererExtensionFragDepth:o0||g.has("EXT_frag_depth"),rendererExtensionDrawBuffers:o0||g.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:o0||g.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:g.has("KHR_parallel_shader_compile"),customProgramCacheKey:R0.customProgramCacheKey()};return de.vertexUv1s=Y.has(1),de.vertexUv2s=Y.has(2),de.vertexUv3s=Y.has(3),Y.clear(),de}function N0(R0){const j0=[];if(R0.shaderID?j0.push(R0.shaderID):(j0.push(R0.customVertexShaderID),j0.push(R0.customFragmentShaderID)),R0.defines!==void 0)for(const R2 in R0.defines)j0.push(R2),j0.push(R0.defines[R2]);return R0.isRawShaderMaterial===!1&&(T0(j0,R0),O0(j0,R0),j0.push(E.outputColorSpace)),j0.push(R0.customProgramCacheKey),j0.join()}function T0(R0,j0){R0.push(j0.precision),R0.push(j0.outputColorSpace),R0.push(j0.envMapMode),R0.push(j0.envMapCubeUVHeight),R0.push(j0.mapUv),R0.push(j0.alphaMapUv),R0.push(j0.lightMapUv),R0.push(j0.aoMapUv),R0.push(j0.bumpMapUv),R0.push(j0.normalMapUv),R0.push(j0.displacementMapUv),R0.push(j0.emissiveMapUv),R0.push(j0.metalnessMapUv),R0.push(j0.roughnessMapUv),R0.push(j0.anisotropyMapUv),R0.push(j0.clearcoatMapUv),R0.push(j0.clearcoatNormalMapUv),R0.push(j0.clearcoatRoughnessMapUv),R0.push(j0.iridescenceMapUv),R0.push(j0.iridescenceThicknessMapUv),R0.push(j0.sheenColorMapUv),R0.push(j0.sheenRoughnessMapUv),R0.push(j0.specularMapUv),R0.push(j0.specularColorMapUv),R0.push(j0.specularIntensityMapUv),R0.push(j0.transmissionMapUv),R0.push(j0.thicknessMapUv),R0.push(j0.combine),R0.push(j0.fogExp2),R0.push(j0.sizeAttenuation),R0.push(j0.morphTargetsCount),R0.push(j0.morphAttributeCount),R0.push(j0.numDirLights),R0.push(j0.numPointLights),R0.push(j0.numSpotLights),R0.push(j0.numSpotLightMaps),R0.push(j0.numHemiLights),R0.push(j0.numRectAreaLights),R0.push(j0.numDirLightShadows),R0.push(j0.numPointLightShadows),R0.push(j0.numSpotLightShadows),R0.push(j0.numSpotLightShadowsWithMaps),R0.push(j0.numLightProbes),R0.push(j0.shadowMapType),R0.push(j0.toneMapping),R0.push(j0.numClippingPlanes),R0.push(j0.numClipIntersection),R0.push(j0.depthPacking)}function O0(R0,j0){W.disableAll(),j0.isWebGL2&&W.enable(0),j0.supportsVertexTextures&&W.enable(1),j0.instancing&&W.enable(2),j0.instancingColor&&W.enable(3),j0.matcap&&W.enable(4),j0.envMap&&W.enable(5),j0.normalMapObjectSpace&&W.enable(6),j0.normalMapTangentSpace&&W.enable(7),j0.clearcoat&&W.enable(8),j0.iridescence&&W.enable(9),j0.alphaTest&&W.enable(10),j0.vertexColors&&W.enable(11),j0.vertexAlphas&&W.enable(12),j0.vertexUv1s&&W.enable(13),j0.vertexUv2s&&W.enable(14),j0.vertexUv3s&&W.enable(15),j0.vertexTangents&&W.enable(16),j0.anisotropy&&W.enable(17),j0.alphaHash&&W.enable(18),j0.batching&&W.enable(19),R0.push(W.mask),W.disableAll(),j0.fog&&W.enable(0),j0.useFog&&W.enable(1),j0.flatShading&&W.enable(2),j0.logarithmicDepthBuffer&&W.enable(3),j0.skinning&&W.enable(4),j0.morphTargets&&W.enable(5),j0.morphNormals&&W.enable(6),j0.morphColors&&W.enable(7),j0.premultipliedAlpha&&W.enable(8),j0.shadowMapEnabled&&W.enable(9),j0.useLegacyLights&&W.enable(10),j0.doubleSided&&W.enable(11),j0.flipSided&&W.enable(12),j0.useDepthPacking&&W.enable(13),j0.dithering&&W.enable(14),j0.transmission&&W.enable(15),j0.sheen&&W.enable(16),j0.opaque&&W.enable(17),j0.pointsUvs&&W.enable(18),j0.decodeVideoTexture&&W.enable(19),j0.alphaToCoverage&&W.enable(20),R0.push(W.mask)}function k0(R0){const j0=C0[R0.type];let R2;if(j0){const N2=mn[j0];R2=ms.clone(N2.uniforms)}else R2=R0.uniforms;return R2}function L0(R0,j0){let R2;for(let N2=0,o2=Q.length;N2<o2;N2++){const x2=Q[N2];if(x2.cacheKey===j0){R2=x2,++R2.usedTimes;break}}return R2===void 0&&(R2=new $e0(E,j0,R0,P),Q.push(R2)),R2}function D0(R0){if(--R0.usedTimes===0){const j0=Q.indexOf(R0);Q[j0]=Q[Q.length-1],Q.pop(),R0.destroy()}}function V0(R0){X.remove(R0)}function h2(){X.dispose()}return{getParameters:t0,getProgramCacheKey:N0,getUniforms:k0,acquireProgram:L0,releaseProgram:D0,releaseShaderCache:V0,programs:Q,dispose:h2}}function ri0(){let E=new WeakMap;function a(P){let G=E.get(P);return G===void 0&&(G={},E.set(P,G)),G}function f(P){E.delete(P)}function g(P,G,W){E.get(P)[G]=W}function y(){E=new WeakMap}return{get:a,remove:f,update:g,dispose:y}}function oi0(E,a){return E.groupOrder!==a.groupOrder?E.groupOrder-a.groupOrder:E.renderOrder!==a.renderOrder?E.renderOrder-a.renderOrder:E.material.id!==a.material.id?E.material.id-a.material.id:E.z!==a.z?E.z-a.z:E.id-a.id}function Ga(E,a){return E.groupOrder!==a.groupOrder?E.groupOrder-a.groupOrder:E.renderOrder!==a.renderOrder?E.renderOrder-a.renderOrder:E.z!==a.z?a.z-E.z:E.id-a.id}function Wa(){const E=[];let a=0;const f=[],g=[],y=[];function P(){a=0,f.length=0,g.length=0,y.length=0}function G(o0,a0,m0,v0,C0,u0){let t0=E[a];return t0===void 0?(t0={id:o0.id,object:o0,geometry:a0,material:m0,groupOrder:v0,renderOrder:o0.renderOrder,z:C0,group:u0},E[a]=t0):(t0.id=o0.id,t0.object=o0,t0.geometry=a0,t0.material=m0,t0.groupOrder=v0,t0.renderOrder=o0.renderOrder,t0.z=C0,t0.group=u0),a++,t0}function W(o0,a0,m0,v0,C0,u0){const t0=G(o0,a0,m0,v0,C0,u0);m0.transmission>0?g.push(t0):m0.transparent===!0?y.push(t0):f.push(t0)}function X(o0,a0,m0,v0,C0,u0){const t0=G(o0,a0,m0,v0,C0,u0);m0.transmission>0?g.unshift(t0):m0.transparent===!0?y.unshift(t0):f.unshift(t0)}function Y(o0,a0){f.length>1&&f.sort(o0||oi0),g.length>1&&g.sort(a0||Ga),y.length>1&&y.sort(a0||Ga)}function Q(){for(let o0=a,a0=E.length;o0<a0;o0++){const m0=E[o0];if(m0.id===null)break;m0.id=null,m0.object=null,m0.geometry=null,m0.material=null,m0.group=null}}return{opaque:f,transmissive:g,transparent:y,init:P,push:W,unshift:X,finish:Q,sort:Y}}function si0(){let E=new WeakMap;function a(g,y){const P=E.get(g);let G;return P===void 0?(G=new Wa,E.set(g,[G])):y>=P.length?(G=new Wa,P.push(G)):G=P[y],G}function f(){E=new WeakMap}return{get:a,dispose:f}}function ci0(){const E={};return{get:function(a){if(E[a.id]!==void 0)return E[a.id];let f;switch(a.type){case"DirectionalLight":f={direction:new K0,color:new qt};break;case"SpotLight":f={position:new K0,direction:new K0,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":f={position:new K0,color:new qt,distance:0,decay:0};break;case"HemisphereLight":f={direction:new K0,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":f={color:new qt,position:new K0,halfWidth:new K0,halfHeight:new K0};break}return E[a.id]=f,f}}}function _i0(){const E={};return{get:function(a){if(E[a.id]!==void 0)return E[a.id];let f;switch(a.type){case"DirectionalLight":f={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":f={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":f={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return E[a.id]=f,f}}}let ai0=0;function li0(E,a){return(a.castShadow?2:0)-(E.castShadow?2:0)+(a.map?1:0)-(E.map?1:0)}function pi0(E,a){const f=new ci0,g=_i0(),y={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let Q=0;Q<9;Q++)y.probe.push(new K0);const P=new K0,G=new ue,W=new ue;function X(Q,o0){let a0=0,m0=0,v0=0;for(let R2=0;R2<9;R2++)y.probe[R2].set(0,0,0);let C0=0,u0=0,t0=0,N0=0,T0=0,O0=0,k0=0,L0=0,D0=0,V0=0,h2=0;Q.sort(li0);const R0=o0===!0?Math.PI:1;for(let R2=0,N2=Q.length;R2<N2;R2++){const o2=Q[R2],x2=o2.color,$0=o2.intensity,k2=o2.distance,w2=o2.shadow&&o2.shadow.map?o2.shadow.map.texture:null;if(o2.isAmbientLight)a0+=x2.r*$0*R0,m0+=x2.g*$0*R0,v0+=x2.b*$0*R0;else if(o2.isLightProbe){for(let f2=0;f2<9;f2++)y.probe[f2].addScaledVector(o2.sh.coefficients[f2],$0);h2++}else if(o2.isDirectionalLight){const f2=f.get(o2);if(f2.color.copy(o2.color).multiplyScalar(o2.intensity*R0),o2.castShadow){const F2=o2.shadow,L2=g.get(o2);L2.shadowBias=F2.bias,L2.shadowNormalBias=F2.normalBias,L2.shadowRadius=F2.radius,L2.shadowMapSize=F2.mapSize,y.directionalShadow[C0]=L2,y.directionalShadowMap[C0]=w2,y.directionalShadowMatrix[C0]=o2.shadow.matrix,O0++}y.directional[C0]=f2,C0++}else if(o2.isSpotLight){const f2=f.get(o2);f2.position.setFromMatrixPosition(o2.matrixWorld),f2.color.copy(x2).multiplyScalar($0*R0),f2.distance=k2,f2.coneCos=Math.cos(o2.angle),f2.penumbraCos=Math.cos(o2.angle*(1-o2.penumbra)),f2.decay=o2.decay,y.spot[t0]=f2;const F2=o2.shadow;if(o2.map&&(y.spotLightMap[D0]=o2.map,D0++,F2.updateMatrices(o2),o2.castShadow&&V0++),y.spotLightMatrix[t0]=F2.matrix,o2.castShadow){const L2=g.get(o2);L2.shadowBias=F2.bias,L2.shadowNormalBias=F2.normalBias,L2.shadowRadius=F2.radius,L2.shadowMapSize=F2.mapSize,y.spotShadow[t0]=L2,y.spotShadowMap[t0]=w2,L0++}t0++}else if(o2.isRectAreaLight){const f2=f.get(o2);f2.color.copy(x2).multiplyScalar($0),f2.halfWidth.set(o2.width*.5,0,0),f2.halfHeight.set(0,o2.height*.5,0),y.rectArea[N0]=f2,N0++}else if(o2.isPointLight){const f2=f.get(o2);if(f2.color.copy(o2.color).multiplyScalar(o2.intensity*R0),f2.distance=o2.distance,f2.decay=o2.decay,o2.castShadow){const F2=o2.shadow,L2=g.get(o2);L2.shadowBias=F2.bias,L2.shadowNormalBias=F2.normalBias,L2.shadowRadius=F2.radius,L2.shadowMapSize=F2.mapSize,L2.shadowCameraNear=F2.camera.near,L2.shadowCameraFar=F2.camera.far,y.pointShadow[u0]=L2,y.pointShadowMap[u0]=w2,y.pointShadowMatrix[u0]=o2.shadow.matrix,k0++}y.point[u0]=f2,u0++}else if(o2.isHemisphereLight){const f2=f.get(o2);f2.skyColor.copy(o2.color).multiplyScalar($0*R0),f2.groundColor.copy(o2.groundColor).multiplyScalar($0*R0),y.hemi[T0]=f2,T0++}}N0>0&&(a.isWebGL2?E.has("OES_texture_float_linear")===!0?(y.rectAreaLTC1=tt.LTC_FLOAT_1,y.rectAreaLTC2=tt.LTC_FLOAT_2):(y.rectAreaLTC1=tt.LTC_HALF_1,y.rectAreaLTC2=tt.LTC_HALF_2):E.has("OES_texture_float_linear")===!0?(y.rectAreaLTC1=tt.LTC_FLOAT_1,y.rectAreaLTC2=tt.LTC_FLOAT_2):E.has("OES_texture_half_float_linear")===!0?(y.rectAreaLTC1=tt.LTC_HALF_1,y.rectAreaLTC2=tt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),y.ambient[0]=a0,y.ambient[1]=m0,y.ambient[2]=v0;const j0=y.hash;(j0.directionalLength!==C0||j0.pointLength!==u0||j0.spotLength!==t0||j0.rectAreaLength!==N0||j0.hemiLength!==T0||j0.numDirectionalShadows!==O0||j0.numPointShadows!==k0||j0.numSpotShadows!==L0||j0.numSpotMaps!==D0||j0.numLightProbes!==h2)&&(y.directional.length=C0,y.spot.length=t0,y.rectArea.length=N0,y.point.length=u0,y.hemi.length=T0,y.directionalShadow.length=O0,y.directionalShadowMap.length=O0,y.pointShadow.length=k0,y.pointShadowMap.length=k0,y.spotShadow.length=L0,y.spotShadowMap.length=L0,y.directionalShadowMatrix.length=O0,y.pointShadowMatrix.length=k0,y.spotLightMatrix.length=L0+D0-V0,y.spotLightMap.length=D0,y.numSpotLightShadowsWithMaps=V0,y.numLightProbes=h2,j0.directionalLength=C0,j0.pointLength=u0,j0.spotLength=t0,j0.rectAreaLength=N0,j0.hemiLength=T0,j0.numDirectionalShadows=O0,j0.numPointShadows=k0,j0.numSpotShadows=L0,j0.numSpotMaps=D0,j0.numLightProbes=h2,y.version=ai0++)}function Y(Q,o0){let a0=0,m0=0,v0=0,C0=0,u0=0;const t0=o0.matrixWorldInverse;for(let N0=0,T0=Q.length;N0<T0;N0++){const O0=Q[N0];if(O0.isDirectionalLight){const k0=y.directional[a0];k0.direction.setFromMatrixPosition(O0.matrixWorld),P.setFromMatrixPosition(O0.target.matrixWorld),k0.direction.sub(P),k0.direction.transformDirection(t0),a0++}else if(O0.isSpotLight){const k0=y.spot[v0];k0.position.setFromMatrixPosition(O0.matrixWorld),k0.position.applyMatrix4(t0),k0.direction.setFromMatrixPosition(O0.matrixWorld),P.setFromMatrixPosition(O0.target.matrixWorld),k0.direction.sub(P),k0.direction.transformDirection(t0),v0++}else if(O0.isRectAreaLight){const k0=y.rectArea[C0];k0.position.setFromMatrixPosition(O0.matrixWorld),k0.position.applyMatrix4(t0),W.identity(),G.copy(O0.matrixWorld),G.premultiply(t0),W.extractRotation(G),k0.halfWidth.set(O0.width*.5,0,0),k0.halfHeight.set(0,O0.height*.5,0),k0.halfWidth.applyMatrix4(W),k0.halfHeight.applyMatrix4(W),C0++}else if(O0.isPointLight){const k0=y.point[m0];k0.position.setFromMatrixPosition(O0.matrixWorld),k0.position.applyMatrix4(t0),m0++}else if(O0.isHemisphereLight){const k0=y.hemi[u0];k0.direction.setFromMatrixPosition(O0.matrixWorld),k0.direction.transformDirection(t0),u0++}}}return{setup:X,setupView:Y,state:y}}function Va(E,a){const f=new pi0(E,a),g=[],y=[];function P(){g.length=0,y.length=0}function G(o0){g.push(o0)}function W(o0){y.push(o0)}function X(o0){f.setup(g,o0)}function Y(o0){f.setupView(g,o0)}return{init:P,state:{lightsArray:g,shadowsArray:y,lights:f},setupLights:X,setupLightsView:Y,pushLight:G,pushShadow:W}}function ui0(E,a){let f=new WeakMap;function g(P,G=0){const W=f.get(P);let X;return W===void 0?(X=new Va(E,a),f.set(P,[X])):G>=W.length?(X=new Va(E,a),W.push(X)):X=W[G],X}function y(){f=new WeakMap}return{get:g,dispose:y}}class fi0 extends vs{constructor(a){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=QJ,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(a)}copy(a){return super.copy(a),this.depthPacking=a.depthPacking,this.map=a.map,this.alphaMap=a.alphaMap,this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this}}class hi0 extends vs{constructor(a){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(a)}copy(a){return super.copy(a),this.map=a.map,this.alphaMap=a.alphaMap,this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this}}const mi0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,di0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yi0(E,a,f){let g=new Q6;const y=new st,P=new st,G=new Fe,W=new fi0({depthPacking:JJ}),X=new hi0,Y={},Q=f.maxTextureSize,o0={[y1]:dn,[dn]:y1,[t1]:t1},a0=new v1({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:mi0,fragmentShader:di0}),m0=a0.clone();m0.defines.HORIZONTAL_PASS=1;const v0=new Nn;v0.setAttribute("position",new e1(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C0=new Zi(v0,a0),u0=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wl;let t0=this.type;this.render=function(L0,D0,V0){if(u0.enabled===!1||u0.autoUpdate===!1&&u0.needsUpdate===!1||L0.length===0)return;const h2=E.getRenderTarget(),R0=E.getActiveCubeFace(),j0=E.getActiveMipmapLevel(),R2=E.state;R2.setBlending(_r),R2.buffers.color.setClear(1,1,1,1),R2.buffers.depth.setTest(!0),R2.setScissorTest(!1);const N2=t0!==W1&&this.type===W1,o2=t0===W1&&this.type!==W1;for(let x2=0,$0=L0.length;x2<$0;x2++){const k2=L0[x2],w2=k2.shadow;if(w2===void 0){console.warn("THREE.WebGLShadowMap:",k2,"has no shadow.");continue}if(w2.autoUpdate===!1&&w2.needsUpdate===!1)continue;y.copy(w2.mapSize);const f2=w2.getFrameExtents();if(y.multiply(f2),P.copy(w2.mapSize),(y.x>Q||y.y>Q)&&(y.x>Q&&(P.x=Math.floor(Q/f2.x),y.x=P.x*f2.x,w2.mapSize.x=P.x),y.y>Q&&(P.y=Math.floor(Q/f2.y),y.y=P.y*f2.y,w2.mapSize.y=P.y)),w2.map===null||N2===!0||o2===!0){const L2=this.type!==W1?{minFilter:Pi,magFilter:Pi}:{};w2.map!==null&&w2.map.dispose(),w2.map=new pr(y.x,y.y,L2),w2.map.texture.name=k2.name+".shadowMap",w2.camera.updateProjectionMatrix()}E.setRenderTarget(w2.map),E.clear();const F2=w2.getViewportCount();for(let L2=0;L2<F2;L2++){const X2=w2.getViewport(L2);G.set(P.x*X2.x,P.y*X2.y,P.x*X2.z,P.y*X2.w),R2.viewport(G),w2.updateMatrices(k2,L2),g=w2.getFrustum(),O0(D0,V0,w2.camera,k2,this.type)}w2.isPointLightShadow!==!0&&this.type===W1&&N0(w2,V0),w2.needsUpdate=!1}t0=this.type,u0.needsUpdate=!1,E.setRenderTarget(h2,R0,j0)};function N0(L0,D0){const V0=a.update(C0);a0.defines.VSM_SAMPLES!==L0.blurSamples&&(a0.defines.VSM_SAMPLES=L0.blurSamples,m0.defines.VSM_SAMPLES=L0.blurSamples,a0.needsUpdate=!0,m0.needsUpdate=!0),L0.mapPass===null&&(L0.mapPass=new pr(y.x,y.y)),a0.uniforms.shadow_pass.value=L0.map.texture,a0.uniforms.resolution.value=L0.mapSize,a0.uniforms.radius.value=L0.radius,E.setRenderTarget(L0.mapPass),E.clear(),E.renderBufferDirect(D0,null,V0,a0,C0,null),m0.uniforms.shadow_pass.value=L0.mapPass.texture,m0.uniforms.resolution.value=L0.mapSize,m0.uniforms.radius.value=L0.radius,E.setRenderTarget(L0.map),E.clear(),E.renderBufferDirect(D0,null,V0,m0,C0,null)}function T0(L0,D0,V0,h2){let R0=null;const j0=V0.isPointLight===!0?L0.customDistanceMaterial:L0.customDepthMaterial;if(j0!==void 0)R0=j0;else if(R0=V0.isPointLight===!0?X:W,E.localClippingEnabled&&D0.clipShadows===!0&&Array.isArray(D0.clippingPlanes)&&D0.clippingPlanes.length!==0||D0.displacementMap&&D0.displacementScale!==0||D0.alphaMap&&D0.alphaTest>0||D0.map&&D0.alphaTest>0){const R2=R0.uuid,N2=D0.uuid;let o2=Y[R2];o2===void 0&&(o2={},Y[R2]=o2);let x2=o2[N2];x2===void 0&&(x2=R0.clone(),o2[N2]=x2,D0.addEventListener("dispose",k0)),R0=x2}if(R0.visible=D0.visible,R0.wireframe=D0.wireframe,h2===W1?R0.side=D0.shadowSide!==null?D0.shadowSide:D0.side:R0.side=D0.shadowSide!==null?D0.shadowSide:o0[D0.side],R0.alphaMap=D0.alphaMap,R0.alphaTest=D0.alphaTest,R0.map=D0.map,R0.clipShadows=D0.clipShadows,R0.clippingPlanes=D0.clippingPlanes,R0.clipIntersection=D0.clipIntersection,R0.displacementMap=D0.displacementMap,R0.displacementScale=D0.displacementScale,R0.displacementBias=D0.displacementBias,R0.wireframeLinewidth=D0.wireframeLinewidth,R0.linewidth=D0.linewidth,V0.isPointLight===!0&&R0.isMeshDistanceMaterial===!0){const R2=E.properties.get(R0);R2.light=V0}return R0}function O0(L0,D0,V0,h2,R0){if(L0.visible===!1)return;if(L0.layers.test(D0.layers)&&(L0.isMesh||L0.isLine||L0.isPoints)&&(L0.castShadow||L0.receiveShadow&&R0===W1)&&(!L0.frustumCulled||g.intersectsObject(L0))){L0.modelViewMatrix.multiplyMatrices(V0.matrixWorldInverse,L0.matrixWorld);const N2=a.update(L0),o2=L0.material;if(Array.isArray(o2)){const x2=N2.groups;for(let $0=0,k2=x2.length;$0<k2;$0++){const w2=x2[$0],f2=o2[w2.materialIndex];if(f2&&f2.visible){const F2=T0(L0,f2,h2,R0);L0.onBeforeShadow(E,L0,D0,V0,N2,F2,w2),E.renderBufferDirect(V0,null,N2,F2,L0,w2),L0.onAfterShadow(E,L0,D0,V0,N2,F2,w2)}}}else if(o2.visible){const x2=T0(L0,o2,h2,R0);L0.onBeforeShadow(E,L0,D0,V0,N2,x2,null),E.renderBufferDirect(V0,null,N2,x2,L0,null),L0.onAfterShadow(E,L0,D0,V0,N2,x2,null)}}const R2=L0.children;for(let N2=0,o2=R2.length;N2<o2;N2++)O0(R2[N2],D0,V0,h2,R0)}function k0(L0){L0.target.removeEventListener("dispose",k0);for(const V0 in Y){const h2=Y[V0],R0=L0.target.uuid;R0 in h2&&(h2[R0].dispose(),delete h2[R0])}}}function vi0(E,a,f){const g=f.isWebGL2;function y(){let b0=!1;const j2=new Fe;let H2=null;const dt=new Fe(0,0,0,0);return{setMask:function(Rt){H2!==Rt&&!b0&&(E.colorMask(Rt,Rt,Rt,Rt),H2=Rt)},setLocked:function(Rt){b0=Rt},setClear:function(Rt,de,ee,Le,ui){ui===!0&&(Rt*=Le,de*=Le,ee*=Le),j2.set(Rt,de,ee,Le),dt.equals(j2)===!1&&(E.clearColor(Rt,de,ee,Le),dt.copy(j2))},reset:function(){b0=!1,H2=null,dt.set(-1,0,0,0)}}}function P(){let b0=!1,j2=null,H2=null,dt=null;return{setTest:function(Rt){Rt?$2(E.DEPTH_TEST):Dt(E.DEPTH_TEST)},setMask:function(Rt){j2!==Rt&&!b0&&(E.depthMask(Rt),j2=Rt)},setFunc:function(Rt){if(H2!==Rt){switch(Rt){case MJ:E.depthFunc(E.NEVER);break;case TJ:E.depthFunc(E.ALWAYS);break;case AJ:E.depthFunc(E.LESS);break;case k4:E.depthFunc(E.LEQUAL);break;case EJ:E.depthFunc(E.EQUAL);break;case RJ:E.depthFunc(E.GEQUAL);break;case IJ:E.depthFunc(E.GREATER);break;case DJ:E.depthFunc(E.NOTEQUAL);break;default:E.depthFunc(E.LEQUAL)}H2=Rt}},setLocked:function(Rt){b0=Rt},setClear:function(Rt){dt!==Rt&&(E.clearDepth(Rt),dt=Rt)},reset:function(){b0=!1,j2=null,H2=null,dt=null}}}function G(){let b0=!1,j2=null,H2=null,dt=null,Rt=null,de=null,ee=null,Le=null,ui=null;return{setTest:function(ye){b0||(ye?$2(E.STENCIL_TEST):Dt(E.STENCIL_TEST))},setMask:function(ye){j2!==ye&&!b0&&(E.stencilMask(ye),j2=ye)},setFunc:function(ye,Ze,Xi){(H2!==ye||dt!==Ze||Rt!==Xi)&&(E.stencilFunc(ye,Ze,Xi),H2=ye,dt=Ze,Rt=Xi)},setOp:function(ye,Ze,Xi){(de!==ye||ee!==Ze||Le!==Xi)&&(E.stencilOp(ye,Ze,Xi),de=ye,ee=Ze,Le=Xi)},setLocked:function(ye){b0=ye},setClear:function(ye){ui!==ye&&(E.clearStencil(ye),ui=ye)},reset:function(){b0=!1,j2=null,H2=null,dt=null,Rt=null,de=null,ee=null,Le=null,ui=null}}}const W=new y,X=new P,Y=new G,Q=new WeakMap,o0=new WeakMap;let a0={},m0={},v0=new WeakMap,C0=[],u0=null,t0=!1,N0=null,T0=null,O0=null,k0=null,L0=null,D0=null,V0=null,h2=new qt(0,0,0),R0=0,j0=!1,R2=null,N2=null,o2=null,x2=null,$0=null;const k2=E.getParameter(E.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let w2=!1,f2=0;const F2=E.getParameter(E.VERSION);F2.indexOf("WebGL")!==-1?(f2=parseFloat(/^WebGL (\d)/.exec(F2)[1]),w2=f2>=1):F2.indexOf("OpenGL ES")!==-1&&(f2=parseFloat(/^OpenGL ES (\d)/.exec(F2)[1]),w2=f2>=2);let L2=null,X2={};const Y2=E.getParameter(E.SCISSOR_BOX),c2=E.getParameter(E.VIEWPORT),g2=new Fe().fromArray(Y2),P2=new Fe().fromArray(c2);function z2(b0,j2,H2,dt){const Rt=new Uint8Array(4),de=E.createTexture();E.bindTexture(b0,de),E.texParameteri(b0,E.TEXTURE_MIN_FILTER,E.NEAREST),E.texParameteri(b0,E.TEXTURE_MAG_FILTER,E.NEAREST);for(let ee=0;ee<H2;ee++)g&&(b0===E.TEXTURE_3D||b0===E.TEXTURE_2D_ARRAY)?E.texImage3D(j2,0,E.RGBA,1,1,dt,0,E.RGBA,E.UNSIGNED_BYTE,Rt):E.texImage2D(j2+ee,0,E.RGBA,1,1,0,E.RGBA,E.UNSIGNED_BYTE,Rt);return de}const J2={};J2[E.TEXTURE_2D]=z2(E.TEXTURE_2D,E.TEXTURE_2D,1),J2[E.TEXTURE_CUBE_MAP]=z2(E.TEXTURE_CUBE_MAP,E.TEXTURE_CUBE_MAP_POSITIVE_X,6),g&&(J2[E.TEXTURE_2D_ARRAY]=z2(E.TEXTURE_2D_ARRAY,E.TEXTURE_2D_ARRAY,1,1),J2[E.TEXTURE_3D]=z2(E.TEXTURE_3D,E.TEXTURE_3D,1,1)),W.setClear(0,0,0,1),X.setClear(1),Y.setClear(0),$2(E.DEPTH_TEST),X.setFunc(k4),jt(!1),z0(x_),$2(E.CULL_FACE),yt(_r);function $2(b0){a0[b0]!==!0&&(E.enable(b0),a0[b0]=!0)}function Dt(b0){a0[b0]!==!1&&(E.disable(b0),a0[b0]=!1)}function Ut(b0,j2){return m0[b0]!==j2?(E.bindFramebuffer(b0,j2),m0[b0]=j2,g&&(b0===E.DRAW_FRAMEBUFFER&&(m0[E.FRAMEBUFFER]=j2),b0===E.FRAMEBUFFER&&(m0[E.DRAW_FRAMEBUFFER]=j2)),!0):!1}function l2(b0,j2){let H2=C0,dt=!1;if(b0)if(H2=v0.get(j2),H2===void 0&&(H2=[],v0.set(j2,H2)),b0.isWebGLMultipleRenderTargets){const Rt=b0.texture;if(H2.length!==Rt.length||H2[0]!==E.COLOR_ATTACHMENT0){for(let de=0,ee=Rt.length;de<ee;de++)H2[de]=E.COLOR_ATTACHMENT0+de;H2.length=Rt.length,dt=!0}}else H2[0]!==E.COLOR_ATTACHMENT0&&(H2[0]=E.COLOR_ATTACHMENT0,dt=!0);else H2[0]!==E.BACK&&(H2[0]=E.BACK,dt=!0);dt&&(f.isWebGL2?E.drawBuffers(H2):a.get("WEBGL_draw_buffers").drawBuffersWEBGL(H2))}function ce(b0){return u0!==b0?(E.useProgram(b0),u0=b0,!0):!1}const Mt={[Ir]:E.FUNC_ADD,[lJ]:E.FUNC_SUBTRACT,[pJ]:E.FUNC_REVERSE_SUBTRACT};if(g)Mt[A_]=E.MIN,Mt[E_]=E.MAX;else{const b0=a.get("EXT_blend_minmax");b0!==null&&(Mt[A_]=b0.MIN_EXT,Mt[E_]=b0.MAX_EXT)}const Lt={[uJ]:E.ZERO,[fJ]:E.ONE,[hJ]:E.SRC_COLOR,[ps]:E.SRC_ALPHA,[gJ]:E.SRC_ALPHA_SATURATE,[yJ]:E.DST_COLOR,[Tl]:E.DST_ALPHA,[mJ]:E.ONE_MINUS_SRC_COLOR,[L4]:E.ONE_MINUS_SRC_ALPHA,[vJ]:E.ONE_MINUS_DST_COLOR,[dJ]:E.ONE_MINUS_DST_ALPHA,[CJ]:E.CONSTANT_COLOR,[SJ]:E.ONE_MINUS_CONSTANT_COLOR,[xJ]:E.CONSTANT_ALPHA,[wJ]:E.ONE_MINUS_CONSTANT_ALPHA};function yt(b0,j2,H2,dt,Rt,de,ee,Le,ui,ye){if(b0===_r){t0===!0&&(Dt(E.BLEND),t0=!1);return}if(t0===!1&&($2(E.BLEND),t0=!0),b0!==Ml){if(b0!==N0||ye!==j0){if((T0!==Ir||L0!==Ir)&&(E.blendEquation(E.FUNC_ADD),T0=Ir,L0=Ir),ye)switch(b0){case So:E.blendFuncSeparate(E.ONE,E.ONE_MINUS_SRC_ALPHA,E.ONE,E.ONE_MINUS_SRC_ALPHA);break;case w_:E.blendFunc(E.ONE,E.ONE);break;case M_:E.blendFuncSeparate(E.ZERO,E.ONE_MINUS_SRC_COLOR,E.ZERO,E.ONE);break;case T_:E.blendFuncSeparate(E.ZERO,E.SRC_COLOR,E.ZERO,E.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b0);break}else switch(b0){case So:E.blendFuncSeparate(E.SRC_ALPHA,E.ONE_MINUS_SRC_ALPHA,E.ONE,E.ONE_MINUS_SRC_ALPHA);break;case w_:E.blendFunc(E.SRC_ALPHA,E.ONE);break;case M_:E.blendFuncSeparate(E.ZERO,E.ONE_MINUS_SRC_COLOR,E.ZERO,E.ONE);break;case T_:E.blendFunc(E.ZERO,E.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b0);break}O0=null,k0=null,D0=null,V0=null,h2.set(0,0,0),R0=0,N0=b0,j0=ye}return}Rt=Rt||j2,de=de||H2,ee=ee||dt,(j2!==T0||Rt!==L0)&&(E.blendEquationSeparate(Mt[j2],Mt[Rt]),T0=j2,L0=Rt),(H2!==O0||dt!==k0||de!==D0||ee!==V0)&&(E.blendFuncSeparate(Lt[H2],Lt[dt],Lt[de],Lt[ee]),O0=H2,k0=dt,D0=de,V0=ee),(Le.equals(h2)===!1||ui!==R0)&&(E.blendColor(Le.r,Le.g,Le.b,ui),h2.copy(Le),R0=ui),N0=b0,j0=!1}function Ue(b0,j2){b0.side===t1?Dt(E.CULL_FACE):$2(E.CULL_FACE);let H2=b0.side===dn;j2&&(H2=!H2),jt(H2),b0.blending===So&&b0.transparent===!1?yt(_r):yt(b0.blending,b0.blendEquation,b0.blendSrc,b0.blendDst,b0.blendEquationAlpha,b0.blendSrcAlpha,b0.blendDstAlpha,b0.blendColor,b0.blendAlpha,b0.premultipliedAlpha),X.setFunc(b0.depthFunc),X.setTest(b0.depthTest),X.setMask(b0.depthWrite),W.setMask(b0.colorWrite);const dt=b0.stencilWrite;Y.setTest(dt),dt&&(Y.setMask(b0.stencilWriteMask),Y.setFunc(b0.stencilFunc,b0.stencilRef,b0.stencilFuncMask),Y.setOp(b0.stencilFail,b0.stencilZFail,b0.stencilZPass)),v2(b0.polygonOffset,b0.polygonOffsetFactor,b0.polygonOffsetUnits),b0.alphaToCoverage===!0?$2(E.SAMPLE_ALPHA_TO_COVERAGE):Dt(E.SAMPLE_ALPHA_TO_COVERAGE)}function jt(b0){R2!==b0&&(b0?E.frontFace(E.CW):E.frontFace(E.CCW),R2=b0)}function z0(b0){b0!==cJ?($2(E.CULL_FACE),b0!==N2&&(b0===x_?E.cullFace(E.BACK):b0===_J?E.cullFace(E.FRONT):E.cullFace(E.FRONT_AND_BACK))):Dt(E.CULL_FACE),N2=b0}function F0(b0){b0!==o2&&(w2&&E.lineWidth(b0),o2=b0)}function v2(b0,j2,H2){b0?($2(E.POLYGON_OFFSET_FILL),(x2!==j2||$0!==H2)&&(E.polygonOffset(j2,H2),x2=j2,$0=H2)):Dt(E.POLYGON_OFFSET_FILL)}function G2(b0){b0?$2(E.SCISSOR_TEST):Dt(E.SCISSOR_TEST)}function V2(b0){b0===void 0&&(b0=E.TEXTURE0+k2-1),L2!==b0&&(E.activeTexture(b0),L2=b0)}function U2(b0,j2,H2){H2===void 0&&(L2===null?H2=E.TEXTURE0+k2-1:H2=L2);let dt=X2[H2];dt===void 0&&(dt={type:void 0,texture:void 0},X2[H2]=dt),(dt.type!==b0||dt.texture!==j2)&&(L2!==H2&&(E.activeTexture(H2),L2=H2),E.bindTexture(b0,j2||J2[b0]),dt.type=b0,dt.texture=j2)}function vt(){const b0=X2[L2];b0!==void 0&&b0.type!==void 0&&(E.bindTexture(b0.type,null),b0.type=void 0,b0.texture=void 0)}function nt(){try{E.compressedTexImage2D.apply(E,arguments)}catch(b0){console.error("THREE.WebGLState:",b0)}}function pt(){try{E.compressedTexImage3D.apply(E,arguments)}catch(b0){console.error("THREE.WebGLState:",b0)}}function xt(){try{E.texSubImage2D.apply(E,arguments)}catch(b0){console.error("THREE.WebGLState:",b0)}}function Bt(){try{E.texSubImage3D.apply(E,arguments)}catch(b0){console.error("THREE.WebGLState:",b0)}}function W2(){try{E.compressedTexSubImage2D.apply(E,arguments)}catch(b0){console.error("THREE.WebGLState:",b0)}}function ge(){try{E.compressedTexSubImage3D.apply(E,arguments)}catch(b0){console.error("THREE.WebGLState:",b0)}}function Zt(){try{E.texStorage2D.apply(E,arguments)}catch(b0){console.error("THREE.WebGLState:",b0)}}function Wt(){try{E.texStorage3D.apply(E,arguments)}catch(b0){console.error("THREE.WebGLState:",b0)}}function mt(){try{E.texImage2D.apply(E,arguments)}catch(b0){console.error("THREE.WebGLState:",b0)}}function ct(){try{E.texImage3D.apply(E,arguments)}catch(b0){console.error("THREE.WebGLState:",b0)}}function bt(b0){g2.equals(b0)===!1&&(E.scissor(b0.x,b0.y,b0.z,b0.w),g2.copy(b0))}function Z0(b0){P2.equals(b0)===!1&&(E.viewport(b0.x,b0.y,b0.z,b0.w),P2.copy(b0))}function q2(b0,j2){let H2=o0.get(j2);H2===void 0&&(H2=new WeakMap,o0.set(j2,H2));let dt=H2.get(b0);dt===void 0&&(dt=E.getUniformBlockIndex(j2,b0.name),H2.set(b0,dt))}function rt(b0,j2){const dt=o0.get(j2).get(b0);Q.get(j2)!==dt&&(E.uniformBlockBinding(j2,dt,b0.__bindingPointIndex),Q.set(j2,dt))}function Tt(){E.disable(E.BLEND),E.disable(E.CULL_FACE),E.disable(E.DEPTH_TEST),E.disable(E.POLYGON_OFFSET_FILL),E.disable(E.SCISSOR_TEST),E.disable(E.STENCIL_TEST),E.disable(E.SAMPLE_ALPHA_TO_COVERAGE),E.blendEquation(E.FUNC_ADD),E.blendFunc(E.ONE,E.ZERO),E.blendFuncSeparate(E.ONE,E.ZERO,E.ONE,E.ZERO),E.blendColor(0,0,0,0),E.colorMask(!0,!0,!0,!0),E.clearColor(0,0,0,0),E.depthMask(!0),E.depthFunc(E.LESS),E.clearDepth(1),E.stencilMask(4294967295),E.stencilFunc(E.ALWAYS,0,4294967295),E.stencilOp(E.KEEP,E.KEEP,E.KEEP),E.clearStencil(0),E.cullFace(E.BACK),E.frontFace(E.CCW),E.polygonOffset(0,0),E.activeTexture(E.TEXTURE0),E.bindFramebuffer(E.FRAMEBUFFER,null),g===!0&&(E.bindFramebuffer(E.DRAW_FRAMEBUFFER,null),E.bindFramebuffer(E.READ_FRAMEBUFFER,null)),E.useProgram(null),E.lineWidth(1),E.scissor(0,0,E.canvas.width,E.canvas.height),E.viewport(0,0,E.canvas.width,E.canvas.height),a0={},L2=null,X2={},m0={},v0=new WeakMap,C0=[],u0=null,t0=!1,N0=null,T0=null,O0=null,k0=null,L0=null,D0=null,V0=null,h2=new qt(0,0,0),R0=0,j0=!1,R2=null,N2=null,o2=null,x2=null,$0=null,g2.set(0,0,E.canvas.width,E.canvas.height),P2.set(0,0,E.canvas.width,E.canvas.height),W.reset(),X.reset(),Y.reset()}return{buffers:{color:W,depth:X,stencil:Y},enable:$2,disable:Dt,bindFramebuffer:Ut,drawBuffers:l2,useProgram:ce,setBlending:yt,setMaterial:Ue,setFlipSided:jt,setCullFace:z0,setLineWidth:F0,setPolygonOffset:v2,setScissorTest:G2,activeTexture:V2,bindTexture:U2,unbindTexture:vt,compressedTexImage2D:nt,compressedTexImage3D:pt,texImage2D:mt,texImage3D:ct,updateUBOMapping:q2,uniformBlockBinding:rt,texStorage2D:Zt,texStorage3D:Wt,texSubImage2D:xt,texSubImage3D:Bt,compressedTexSubImage2D:W2,compressedTexSubImage3D:ge,scissor:bt,viewport:Z0,reset:Tt}}function gi0(E,a,f,g,y,P,G){const W=y.isWebGL2,X=a.has("WEBGL_multisampled_render_to_texture")?a.get("WEBGL_multisampled_render_to_texture"):null,Y=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),Q=new WeakMap;let o0;const a0=new WeakMap;let m0=!1;try{m0=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v0(z0,F0){return m0?new OffscreenCanvas(z0,F0):hs("canvas")}function C0(z0,F0,v2,G2){let V2=1;if((z0.width>G2||z0.height>G2)&&(V2=G2/Math.max(z0.width,z0.height)),V2<1||F0===!0)if(typeof HTMLImageElement<"u"&&z0 instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z0 instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z0 instanceof ImageBitmap){const U2=F0?V4:Math.floor,vt=U2(V2*z0.width),nt=U2(V2*z0.height);o0===void 0&&(o0=v0(vt,nt));const pt=v2?v0(vt,nt):o0;return pt.width=vt,pt.height=nt,pt.getContext("2d").drawImage(z0,0,0,vt,nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z0.width+"x"+z0.height+") to ("+vt+"x"+nt+")."),pt}else return"data"in z0&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z0.width+"x"+z0.height+")."),z0;return z0}function u0(z0){return W6(z0.width)&&W6(z0.height)}function t0(z0){return W?!1:z0.wrapS!==On||z0.wrapT!==On||z0.minFilter!==Pi&&z0.minFilter!==Ki}function N0(z0,F0){return z0.generateMipmaps&&F0&&z0.minFilter!==Pi&&z0.minFilter!==Ki}function T0(z0){E.generateMipmap(z0)}function O0(z0,F0,v2,G2,V2=!1){if(W===!1)return F0;if(z0!==null){if(E[z0]!==void 0)return E[z0];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z0+"'")}let U2=F0;if(F0===E.RED&&(v2===E.FLOAT&&(U2=E.R32F),v2===E.HALF_FLOAT&&(U2=E.R16F),v2===E.UNSIGNED_BYTE&&(U2=E.R8)),F0===E.RED_INTEGER&&(v2===E.UNSIGNED_BYTE&&(U2=E.R8UI),v2===E.UNSIGNED_SHORT&&(U2=E.R16UI),v2===E.UNSIGNED_INT&&(U2=E.R32UI),v2===E.BYTE&&(U2=E.R8I),v2===E.SHORT&&(U2=E.R16I),v2===E.INT&&(U2=E.R32I)),F0===E.RG&&(v2===E.FLOAT&&(U2=E.RG32F),v2===E.HALF_FLOAT&&(U2=E.RG16F),v2===E.UNSIGNED_BYTE&&(U2=E.RG8)),F0===E.RGBA){const vt=V2?N4:Ne.getTransfer(G2);v2===E.FLOAT&&(U2=E.RGBA32F),v2===E.HALF_FLOAT&&(U2=E.RGBA16F),v2===E.UNSIGNED_BYTE&&(U2=vt===Ke?E.SRGB8_ALPHA8:E.RGBA8),v2===E.UNSIGNED_SHORT_4_4_4_4&&(U2=E.RGBA4),v2===E.UNSIGNED_SHORT_5_5_5_1&&(U2=E.RGB5_A1)}return(U2===E.R16F||U2===E.R32F||U2===E.RG16F||U2===E.RG32F||U2===E.RGBA16F||U2===E.RGBA32F)&&a.get("EXT_color_buffer_float"),U2}function k0(z0,F0,v2){return N0(z0,v2)===!0||z0.isFramebufferTexture&&z0.minFilter!==Pi&&z0.minFilter!==Ki?Math.log2(Math.max(F0.width,F0.height))+1:z0.mipmaps!==void 0&&z0.mipmaps.length>0?z0.mipmaps.length:z0.isCompressedTexture&&Array.isArray(z0.image)?F0.mipmaps.length:1}function L0(z0){return z0===Pi||z0===I_||z0===Zo?E.NEAREST:E.LINEAR}function D0(z0){const F0=z0.target;F0.removeEventListener("dispose",D0),h2(F0),F0.isVideoTexture&&Q.delete(F0)}function V0(z0){const F0=z0.target;F0.removeEventListener("dispose",V0),j0(F0)}function h2(z0){const F0=g.get(z0);if(F0.__webglInit===void 0)return;const v2=z0.source,G2=a0.get(v2);if(G2){const V2=G2[F0.__cacheKey];V2.usedTimes--,V2.usedTimes===0&&R0(z0),Object.keys(G2).length===0&&a0.delete(v2)}g.remove(z0)}function R0(z0){const F0=g.get(z0);E.deleteTexture(F0.__webglTexture);const v2=z0.source,G2=a0.get(v2);delete G2[F0.__cacheKey],G.memory.textures--}function j0(z0){const F0=z0.texture,v2=g.get(z0),G2=g.get(F0);if(G2.__webglTexture!==void 0&&(E.deleteTexture(G2.__webglTexture),G.memory.textures--),z0.depthTexture&&z0.depthTexture.dispose(),z0.isWebGLCubeRenderTarget)for(let V2=0;V2<6;V2++){if(Array.isArray(v2.__webglFramebuffer[V2]))for(let U2=0;U2<v2.__webglFramebuffer[V2].length;U2++)E.deleteFramebuffer(v2.__webglFramebuffer[V2][U2]);else E.deleteFramebuffer(v2.__webglFramebuffer[V2]);v2.__webglDepthbuffer&&E.deleteRenderbuffer(v2.__webglDepthbuffer[V2])}else{if(Array.isArray(v2.__webglFramebuffer))for(let V2=0;V2<v2.__webglFramebuffer.length;V2++)E.deleteFramebuffer(v2.__webglFramebuffer[V2]);else E.deleteFramebuffer(v2.__webglFramebuffer);if(v2.__webglDepthbuffer&&E.deleteRenderbuffer(v2.__webglDepthbuffer),v2.__webglMultisampledFramebuffer&&E.deleteFramebuffer(v2.__webglMultisampledFramebuffer),v2.__webglColorRenderbuffer)for(let V2=0;V2<v2.__webglColorRenderbuffer.length;V2++)v2.__webglColorRenderbuffer[V2]&&E.deleteRenderbuffer(v2.__webglColorRenderbuffer[V2]);v2.__webglDepthRenderbuffer&&E.deleteRenderbuffer(v2.__webglDepthRenderbuffer)}if(z0.isWebGLMultipleRenderTargets)for(let V2=0,U2=F0.length;V2<U2;V2++){const vt=g.get(F0[V2]);vt.__webglTexture&&(E.deleteTexture(vt.__webglTexture),G.memory.textures--),g.remove(F0[V2])}g.remove(F0),g.remove(z0)}let R2=0;function N2(){R2=0}function o2(){const z0=R2;return z0>=y.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z0+" texture units while this GPU supports only "+y.maxTextures),R2+=1,z0}function x2(z0){const F0=[];return F0.push(z0.wrapS),F0.push(z0.wrapT),F0.push(z0.wrapR||0),F0.push(z0.magFilter),F0.push(z0.minFilter),F0.push(z0.anisotropy),F0.push(z0.internalFormat),F0.push(z0.format),F0.push(z0.type),F0.push(z0.generateMipmaps),F0.push(z0.premultiplyAlpha),F0.push(z0.flipY),F0.push(z0.unpackAlignment),F0.push(z0.colorSpace),F0.join()}function $0(z0,F0){const v2=g.get(z0);if(z0.isVideoTexture&&Ue(z0),z0.isRenderTargetTexture===!1&&z0.version>0&&v2.__version!==z0.version){const G2=z0.image;if(G2===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G2.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{g2(v2,z0,F0);return}}f.bindTexture(E.TEXTURE_2D,v2.__webglTexture,E.TEXTURE0+F0)}function k2(z0,F0){const v2=g.get(z0);if(z0.version>0&&v2.__version!==z0.version){g2(v2,z0,F0);return}f.bindTexture(E.TEXTURE_2D_ARRAY,v2.__webglTexture,E.TEXTURE0+F0)}function w2(z0,F0){const v2=g.get(z0);if(z0.version>0&&v2.__version!==z0.version){g2(v2,z0,F0);return}f.bindTexture(E.TEXTURE_3D,v2.__webglTexture,E.TEXTURE0+F0)}function f2(z0,F0){const v2=g.get(z0);if(z0.version>0&&v2.__version!==z0.version){P2(v2,z0,F0);return}f.bindTexture(E.TEXTURE_CUBE_MAP,v2.__webglTexture,E.TEXTURE0+F0)}const F2={[Eo]:E.REPEAT,[On]:E.CLAMP_TO_EDGE,[F6]:E.MIRRORED_REPEAT},L2={[Pi]:E.NEAREST,[I_]:E.NEAREST_MIPMAP_NEAREST,[Zo]:E.NEAREST_MIPMAP_LINEAR,[Ki]:E.LINEAR,[H3]:E.LINEAR_MIPMAP_NEAREST,[z1]:E.LINEAR_MIPMAP_LINEAR},X2={[t$]:E.NEVER,[s$]:E.ALWAYS,[e$]:E.LESS,[Fl]:E.LEQUAL,[i$]:E.EQUAL,[o$]:E.GEQUAL,[n$]:E.GREATER,[r$]:E.NOTEQUAL};function Y2(z0,F0,v2){if(F0.type===f1&&a.has("OES_texture_float_linear")===!1&&(F0.magFilter===Ki||F0.magFilter===H3||F0.magFilter===Zo||F0.magFilter===z1||F0.minFilter===Ki||F0.minFilter===H3||F0.minFilter===Zo||F0.minFilter===z1)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),v2?(E.texParameteri(z0,E.TEXTURE_WRAP_S,F2[F0.wrapS]),E.texParameteri(z0,E.TEXTURE_WRAP_T,F2[F0.wrapT]),(z0===E.TEXTURE_3D||z0===E.TEXTURE_2D_ARRAY)&&E.texParameteri(z0,E.TEXTURE_WRAP_R,F2[F0.wrapR]),E.texParameteri(z0,E.TEXTURE_MAG_FILTER,L2[F0.magFilter]),E.texParameteri(z0,E.TEXTURE_MIN_FILTER,L2[F0.minFilter])):(E.texParameteri(z0,E.TEXTURE_WRAP_S,E.CLAMP_TO_EDGE),E.texParameteri(z0,E.TEXTURE_WRAP_T,E.CLAMP_TO_EDGE),(z0===E.TEXTURE_3D||z0===E.TEXTURE_2D_ARRAY)&&E.texParameteri(z0,E.TEXTURE_WRAP_R,E.CLAMP_TO_EDGE),(F0.wrapS!==On||F0.wrapT!==On)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),E.texParameteri(z0,E.TEXTURE_MAG_FILTER,L0(F0.magFilter)),E.texParameteri(z0,E.TEXTURE_MIN_FILTER,L0(F0.minFilter)),F0.minFilter!==Pi&&F0.minFilter!==Ki&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),F0.compareFunction&&(E.texParameteri(z0,E.TEXTURE_COMPARE_MODE,E.COMPARE_REF_TO_TEXTURE),E.texParameteri(z0,E.TEXTURE_COMPARE_FUNC,X2[F0.compareFunction])),a.has("EXT_texture_filter_anisotropic")===!0){const G2=a.get("EXT_texture_filter_anisotropic");if(F0.magFilter===Pi||F0.minFilter!==Zo&&F0.minFilter!==z1||F0.type===f1&&a.has("OES_texture_float_linear")===!1||W===!1&&F0.type===fs&&a.has("OES_texture_half_float_linear")===!1)return;(F0.anisotropy>1||g.get(F0).__currentAnisotropy)&&(E.texParameterf(z0,G2.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(F0.anisotropy,y.getMaxAnisotropy())),g.get(F0).__currentAnisotropy=F0.anisotropy)}}function c2(z0,F0){let v2=!1;z0.__webglInit===void 0&&(z0.__webglInit=!0,F0.addEventListener("dispose",D0));const G2=F0.source;let V2=a0.get(G2);V2===void 0&&(V2={},a0.set(G2,V2));const U2=x2(F0);if(U2!==z0.__cacheKey){V2[U2]===void 0&&(V2[U2]={texture:E.createTexture(),usedTimes:0},G.memory.textures++,v2=!0),V2[U2].usedTimes++;const vt=V2[z0.__cacheKey];vt!==void 0&&(V2[z0.__cacheKey].usedTimes--,vt.usedTimes===0&&R0(F0)),z0.__cacheKey=U2,z0.__webglTexture=V2[U2].texture}return v2}function g2(z0,F0,v2){let G2=E.TEXTURE_2D;(F0.isDataArrayTexture||F0.isCompressedArrayTexture)&&(G2=E.TEXTURE_2D_ARRAY),F0.isData3DTexture&&(G2=E.TEXTURE_3D);const V2=c2(z0,F0),U2=F0.source;f.bindTexture(G2,z0.__webglTexture,E.TEXTURE0+v2);const vt=g.get(U2);if(U2.version!==vt.__version||V2===!0){f.activeTexture(E.TEXTURE0+v2);const nt=Ne.getPrimaries(Ne.workingColorSpace),pt=F0.colorSpace===Xn?null:Ne.getPrimaries(F0.colorSpace),xt=F0.colorSpace===Xn||nt===pt?E.NONE:E.BROWSER_DEFAULT_WEBGL;E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,F0.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F0.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,F0.unpackAlignment),E.pixelStorei(E.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Bt=t0(F0)&&u0(F0.image)===!1;let W2=C0(F0.image,Bt,!1,y.maxTextureSize);W2=jt(F0,W2);const ge=u0(W2)||W,Zt=P.convert(F0.format,F0.colorSpace);let Wt=P.convert(F0.type),mt=O0(F0.internalFormat,Zt,Wt,F0.colorSpace,F0.isVideoTexture);Y2(G2,F0,ge);let ct;const bt=F0.mipmaps,Z0=W&&F0.isVideoTexture!==!0&&mt!==X6,q2=vt.__version===void 0||V2===!0,rt=U2.dataReady,Tt=k0(F0,W2,ge);if(F0.isDepthTexture)mt=E.DEPTH_COMPONENT,W?F0.type===f1?mt=E.DEPTH_COMPONENT32F:F0.type===cr?mt=E.DEPTH_COMPONENT24:F0.type===Pr?mt=E.DEPTH24_STENCIL8:mt=E.DEPTH_COMPONENT16:F0.type===f1&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),F0.format===Lr&&mt===E.DEPTH_COMPONENT&&F0.type!==b6&&F0.type!==cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),F0.type=cr,Wt=P.convert(F0.type)),F0.format===Ro&&mt===E.DEPTH_COMPONENT&&(mt=E.DEPTH_STENCIL,F0.type!==Pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),F0.type=Pr,Wt=P.convert(F0.type))),q2&&(Z0?f.texStorage2D(E.TEXTURE_2D,1,mt,W2.width,W2.height):f.texImage2D(E.TEXTURE_2D,0,mt,W2.width,W2.height,0,Zt,Wt,null));else if(F0.isDataTexture)if(bt.length>0&&ge){Z0&&q2&&f.texStorage2D(E.TEXTURE_2D,Tt,mt,bt[0].width,bt[0].height);for(let b0=0,j2=bt.length;b0<j2;b0++)ct=bt[b0],Z0?rt&&f.texSubImage2D(E.TEXTURE_2D,b0,0,0,ct.width,ct.height,Zt,Wt,ct.data):f.texImage2D(E.TEXTURE_2D,b0,mt,ct.width,ct.height,0,Zt,Wt,ct.data);F0.generateMipmaps=!1}else Z0?(q2&&f.texStorage2D(E.TEXTURE_2D,Tt,mt,W2.width,W2.height),rt&&f.texSubImage2D(E.TEXTURE_2D,0,0,0,W2.width,W2.height,Zt,Wt,W2.data)):f.texImage2D(E.TEXTURE_2D,0,mt,W2.width,W2.height,0,Zt,Wt,W2.data);else if(F0.isCompressedTexture)if(F0.isCompressedArrayTexture){Z0&&q2&&f.texStorage3D(E.TEXTURE_2D_ARRAY,Tt,mt,bt[0].width,bt[0].height,W2.depth);for(let b0=0,j2=bt.length;b0<j2;b0++)ct=bt[b0],F0.format!==bn?Zt!==null?Z0?rt&&f.compressedTexSubImage3D(E.TEXTURE_2D_ARRAY,b0,0,0,0,ct.width,ct.height,W2.depth,Zt,ct.data,0,0):f.compressedTexImage3D(E.TEXTURE_2D_ARRAY,b0,mt,ct.width,ct.height,W2.depth,0,ct.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Z0?rt&&f.texSubImage3D(E.TEXTURE_2D_ARRAY,b0,0,0,0,ct.width,ct.height,W2.depth,Zt,Wt,ct.data):f.texImage3D(E.TEXTURE_2D_ARRAY,b0,mt,ct.width,ct.height,W2.depth,0,Zt,Wt,ct.data)}else{Z0&&q2&&f.texStorage2D(E.TEXTURE_2D,Tt,mt,bt[0].width,bt[0].height);for(let b0=0,j2=bt.length;b0<j2;b0++)ct=bt[b0],F0.format!==bn?Zt!==null?Z0?rt&&f.compressedTexSubImage2D(E.TEXTURE_2D,b0,0,0,ct.width,ct.height,Zt,ct.data):f.compressedTexImage2D(E.TEXTURE_2D,b0,mt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Z0?rt&&f.texSubImage2D(E.TEXTURE_2D,b0,0,0,ct.width,ct.height,Zt,Wt,ct.data):f.texImage2D(E.TEXTURE_2D,b0,mt,ct.width,ct.height,0,Zt,Wt,ct.data)}else if(F0.isDataArrayTexture)Z0?(q2&&f.texStorage3D(E.TEXTURE_2D_ARRAY,Tt,mt,W2.width,W2.height,W2.depth),rt&&f.texSubImage3D(E.TEXTURE_2D_ARRAY,0,0,0,0,W2.width,W2.height,W2.depth,Zt,Wt,W2.data)):f.texImage3D(E.TEXTURE_2D_ARRAY,0,mt,W2.width,W2.height,W2.depth,0,Zt,Wt,W2.data);else if(F0.isData3DTexture)Z0?(q2&&f.texStorage3D(E.TEXTURE_3D,Tt,mt,W2.width,W2.height,W2.depth),rt&&f.texSubImage3D(E.TEXTURE_3D,0,0,0,0,W2.width,W2.height,W2.depth,Zt,Wt,W2.data)):f.texImage3D(E.TEXTURE_3D,0,mt,W2.width,W2.height,W2.depth,0,Zt,Wt,W2.data);else if(F0.isFramebufferTexture){if(q2)if(Z0)f.texStorage2D(E.TEXTURE_2D,Tt,mt,W2.width,W2.height);else{let b0=W2.width,j2=W2.height;for(let H2=0;H2<Tt;H2++)f.texImage2D(E.TEXTURE_2D,H2,mt,b0,j2,0,Zt,Wt,null),b0>>=1,j2>>=1}}else if(bt.length>0&&ge){Z0&&q2&&f.texStorage2D(E.TEXTURE_2D,Tt,mt,bt[0].width,bt[0].height);for(let b0=0,j2=bt.length;b0<j2;b0++)ct=bt[b0],Z0?rt&&f.texSubImage2D(E.TEXTURE_2D,b0,0,0,Zt,Wt,ct):f.texImage2D(E.TEXTURE_2D,b0,mt,Zt,Wt,ct);F0.generateMipmaps=!1}else Z0?(q2&&f.texStorage2D(E.TEXTURE_2D,Tt,mt,W2.width,W2.height),rt&&f.texSubImage2D(E.TEXTURE_2D,0,0,0,Zt,Wt,W2)):f.texImage2D(E.TEXTURE_2D,0,mt,Zt,Wt,W2);N0(F0,ge)&&T0(G2),vt.__version=U2.version,F0.onUpdate&&F0.onUpdate(F0)}z0.__version=F0.version}function P2(z0,F0,v2){if(F0.image.length!==6)return;const G2=c2(z0,F0),V2=F0.source;f.bindTexture(E.TEXTURE_CUBE_MAP,z0.__webglTexture,E.TEXTURE0+v2);const U2=g.get(V2);if(V2.version!==U2.__version||G2===!0){f.activeTexture(E.TEXTURE0+v2);const vt=Ne.getPrimaries(Ne.workingColorSpace),nt=F0.colorSpace===Xn?null:Ne.getPrimaries(F0.colorSpace),pt=F0.colorSpace===Xn||vt===nt?E.NONE:E.BROWSER_DEFAULT_WEBGL;E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,F0.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F0.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,F0.unpackAlignment),E.pixelStorei(E.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const xt=F0.isCompressedTexture||F0.image[0].isCompressedTexture,Bt=F0.image[0]&&F0.image[0].isDataTexture,W2=[];for(let b0=0;b0<6;b0++)!xt&&!Bt?W2[b0]=C0(F0.image[b0],!1,!0,y.maxCubemapSize):W2[b0]=Bt?F0.image[b0].image:F0.image[b0],W2[b0]=jt(F0,W2[b0]);const ge=W2[0],Zt=u0(ge)||W,Wt=P.convert(F0.format,F0.colorSpace),mt=P.convert(F0.type),ct=O0(F0.internalFormat,Wt,mt,F0.colorSpace),bt=W&&F0.isVideoTexture!==!0,Z0=U2.__version===void 0||G2===!0,q2=V2.dataReady;let rt=k0(F0,ge,Zt);Y2(E.TEXTURE_CUBE_MAP,F0,Zt);let Tt;if(xt){bt&&Z0&&f.texStorage2D(E.TEXTURE_CUBE_MAP,rt,ct,ge.width,ge.height);for(let b0=0;b0<6;b0++){Tt=W2[b0].mipmaps;for(let j2=0;j2<Tt.length;j2++){const H2=Tt[j2];F0.format!==bn?Wt!==null?bt?q2&&f.compressedTexSubImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+b0,j2,0,0,H2.width,H2.height,Wt,H2.data):f.compressedTexImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+b0,j2,ct,H2.width,H2.height,0,H2.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):bt?q2&&f.texSubImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+b0,j2,0,0,H2.width,H2.height,Wt,mt,H2.data):f.texImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+b0,j2,ct,H2.width,H2.height,0,Wt,mt,H2.data)}}}else{Tt=F0.mipmaps,bt&&Z0&&(Tt.length>0&&rt++,f.texStorage2D(E.TEXTURE_CUBE_MAP,rt,ct,W2[0].width,W2[0].height));for(let b0=0;b0<6;b0++)if(Bt){bt?q2&&f.texSubImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+b0,0,0,0,W2[b0].width,W2[b0].height,Wt,mt,W2[b0].data):f.texImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+b0,0,ct,W2[b0].width,W2[b0].height,0,Wt,mt,W2[b0].data);for(let j2=0;j2<Tt.length;j2++){const dt=Tt[j2].image[b0].image;bt?q2&&f.texSubImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+b0,j2+1,0,0,dt.width,dt.height,Wt,mt,dt.data):f.texImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+b0,j2+1,ct,dt.width,dt.height,0,Wt,mt,dt.data)}}else{bt?q2&&f.texSubImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+b0,0,0,0,Wt,mt,W2[b0]):f.texImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+b0,0,ct,Wt,mt,W2[b0]);for(let j2=0;j2<Tt.length;j2++){const H2=Tt[j2];bt?q2&&f.texSubImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+b0,j2+1,0,0,Wt,mt,H2.image[b0]):f.texImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+b0,j2+1,ct,Wt,mt,H2.image[b0])}}}N0(F0,Zt)&&T0(E.TEXTURE_CUBE_MAP),U2.__version=V2.version,F0.onUpdate&&F0.onUpdate(F0)}z0.__version=F0.version}function z2(z0,F0,v2,G2,V2,U2){const vt=P.convert(v2.format,v2.colorSpace),nt=P.convert(v2.type),pt=O0(v2.internalFormat,vt,nt,v2.colorSpace);if(!g.get(F0).__hasExternalTextures){const Bt=Math.max(1,F0.width>>U2),W2=Math.max(1,F0.height>>U2);V2===E.TEXTURE_3D||V2===E.TEXTURE_2D_ARRAY?f.texImage3D(V2,U2,pt,Bt,W2,F0.depth,0,vt,nt,null):f.texImage2D(V2,U2,pt,Bt,W2,0,vt,nt,null)}f.bindFramebuffer(E.FRAMEBUFFER,z0),yt(F0)?X.framebufferTexture2DMultisampleEXT(E.FRAMEBUFFER,G2,V2,g.get(v2).__webglTexture,0,Lt(F0)):(V2===E.TEXTURE_2D||V2>=E.TEXTURE_CUBE_MAP_POSITIVE_X&&V2<=E.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&E.framebufferTexture2D(E.FRAMEBUFFER,G2,V2,g.get(v2).__webglTexture,U2),f.bindFramebuffer(E.FRAMEBUFFER,null)}function J2(z0,F0,v2){if(E.bindRenderbuffer(E.RENDERBUFFER,z0),F0.depthBuffer&&!F0.stencilBuffer){let G2=W===!0?E.DEPTH_COMPONENT24:E.DEPTH_COMPONENT16;if(v2||yt(F0)){const V2=F0.depthTexture;V2&&V2.isDepthTexture&&(V2.type===f1?G2=E.DEPTH_COMPONENT32F:V2.type===cr&&(G2=E.DEPTH_COMPONENT24));const U2=Lt(F0);yt(F0)?X.renderbufferStorageMultisampleEXT(E.RENDERBUFFER,U2,G2,F0.width,F0.height):E.renderbufferStorageMultisample(E.RENDERBUFFER,U2,G2,F0.width,F0.height)}else E.renderbufferStorage(E.RENDERBUFFER,G2,F0.width,F0.height);E.framebufferRenderbuffer(E.FRAMEBUFFER,E.DEPTH_ATTACHMENT,E.RENDERBUFFER,z0)}else if(F0.depthBuffer&&F0.stencilBuffer){const G2=Lt(F0);v2&&yt(F0)===!1?E.renderbufferStorageMultisample(E.RENDERBUFFER,G2,E.DEPTH24_STENCIL8,F0.width,F0.height):yt(F0)?X.renderbufferStorageMultisampleEXT(E.RENDERBUFFER,G2,E.DEPTH24_STENCIL8,F0.width,F0.height):E.renderbufferStorage(E.RENDERBUFFER,E.DEPTH_STENCIL,F0.width,F0.height),E.framebufferRenderbuffer(E.FRAMEBUFFER,E.DEPTH_STENCIL_ATTACHMENT,E.RENDERBUFFER,z0)}else{const G2=F0.isWebGLMultipleRenderTargets===!0?F0.texture:[F0.texture];for(let V2=0;V2<G2.length;V2++){const U2=G2[V2],vt=P.convert(U2.format,U2.colorSpace),nt=P.convert(U2.type),pt=O0(U2.internalFormat,vt,nt,U2.colorSpace),xt=Lt(F0);v2&&yt(F0)===!1?E.renderbufferStorageMultisample(E.RENDERBUFFER,xt,pt,F0.width,F0.height):yt(F0)?X.renderbufferStorageMultisampleEXT(E.RENDERBUFFER,xt,pt,F0.width,F0.height):E.renderbufferStorage(E.RENDERBUFFER,pt,F0.width,F0.height)}}E.bindRenderbuffer(E.RENDERBUFFER,null)}function $2(z0,F0){if(F0&&F0.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(f.bindFramebuffer(E.FRAMEBUFFER,z0),!(F0.depthTexture&&F0.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!g.get(F0.depthTexture).__webglTexture||F0.depthTexture.image.width!==F0.width||F0.depthTexture.image.height!==F0.height)&&(F0.depthTexture.image.width=F0.width,F0.depthTexture.image.height=F0.height,F0.depthTexture.needsUpdate=!0),$0(F0.depthTexture,0);const G2=g.get(F0.depthTexture).__webglTexture,V2=Lt(F0);if(F0.depthTexture.format===Lr)yt(F0)?X.framebufferTexture2DMultisampleEXT(E.FRAMEBUFFER,E.DEPTH_ATTACHMENT,E.TEXTURE_2D,G2,0,V2):E.framebufferTexture2D(E.FRAMEBUFFER,E.DEPTH_ATTACHMENT,E.TEXTURE_2D,G2,0);else if(F0.depthTexture.format===Ro)yt(F0)?X.framebufferTexture2DMultisampleEXT(E.FRAMEBUFFER,E.DEPTH_STENCIL_ATTACHMENT,E.TEXTURE_2D,G2,0,V2):E.framebufferTexture2D(E.FRAMEBUFFER,E.DEPTH_STENCIL_ATTACHMENT,E.TEXTURE_2D,G2,0);else throw new Error("Unknown depthTexture format")}function Dt(z0){const F0=g.get(z0),v2=z0.isWebGLCubeRenderTarget===!0;if(z0.depthTexture&&!F0.__autoAllocateDepthBuffer){if(v2)throw new Error("target.depthTexture not supported in Cube render targets");$2(F0.__webglFramebuffer,z0)}else if(v2){F0.__webglDepthbuffer=[];for(let G2=0;G2<6;G2++)f.bindFramebuffer(E.FRAMEBUFFER,F0.__webglFramebuffer[G2]),F0.__webglDepthbuffer[G2]=E.createRenderbuffer(),J2(F0.__webglDepthbuffer[G2],z0,!1)}else f.bindFramebuffer(E.FRAMEBUFFER,F0.__webglFramebuffer),F0.__webglDepthbuffer=E.createRenderbuffer(),J2(F0.__webglDepthbuffer,z0,!1);f.bindFramebuffer(E.FRAMEBUFFER,null)}function Ut(z0,F0,v2){const G2=g.get(z0);F0!==void 0&&z2(G2.__webglFramebuffer,z0,z0.texture,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,0),v2!==void 0&&Dt(z0)}function l2(z0){const F0=z0.texture,v2=g.get(z0),G2=g.get(F0);z0.addEventListener("dispose",V0),z0.isWebGLMultipleRenderTargets!==!0&&(G2.__webglTexture===void 0&&(G2.__webglTexture=E.createTexture()),G2.__version=F0.version,G.memory.textures++);const V2=z0.isWebGLCubeRenderTarget===!0,U2=z0.isWebGLMultipleRenderTargets===!0,vt=u0(z0)||W;if(V2){v2.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(W&&F0.mipmaps&&F0.mipmaps.length>0){v2.__webglFramebuffer[nt]=[];for(let pt=0;pt<F0.mipmaps.length;pt++)v2.__webglFramebuffer[nt][pt]=E.createFramebuffer()}else v2.__webglFramebuffer[nt]=E.createFramebuffer()}else{if(W&&F0.mipmaps&&F0.mipmaps.length>0){v2.__webglFramebuffer=[];for(let nt=0;nt<F0.mipmaps.length;nt++)v2.__webglFramebuffer[nt]=E.createFramebuffer()}else v2.__webglFramebuffer=E.createFramebuffer();if(U2)if(y.drawBuffers){const nt=z0.texture;for(let pt=0,xt=nt.length;pt<xt;pt++){const Bt=g.get(nt[pt]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=E.createTexture(),G.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(W&&z0.samples>0&&yt(z0)===!1){const nt=U2?F0:[F0];v2.__webglMultisampledFramebuffer=E.createFramebuffer(),v2.__webglColorRenderbuffer=[],f.bindFramebuffer(E.FRAMEBUFFER,v2.__webglMultisampledFramebuffer);for(let pt=0;pt<nt.length;pt++){const xt=nt[pt];v2.__webglColorRenderbuffer[pt]=E.createRenderbuffer(),E.bindRenderbuffer(E.RENDERBUFFER,v2.__webglColorRenderbuffer[pt]);const Bt=P.convert(xt.format,xt.colorSpace),W2=P.convert(xt.type),ge=O0(xt.internalFormat,Bt,W2,xt.colorSpace,z0.isXRRenderTarget===!0),Zt=Lt(z0);E.renderbufferStorageMultisample(E.RENDERBUFFER,Zt,ge,z0.width,z0.height),E.framebufferRenderbuffer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+pt,E.RENDERBUFFER,v2.__webglColorRenderbuffer[pt])}E.bindRenderbuffer(E.RENDERBUFFER,null),z0.depthBuffer&&(v2.__webglDepthRenderbuffer=E.createRenderbuffer(),J2(v2.__webglDepthRenderbuffer,z0,!0)),f.bindFramebuffer(E.FRAMEBUFFER,null)}}if(V2){f.bindTexture(E.TEXTURE_CUBE_MAP,G2.__webglTexture),Y2(E.TEXTURE_CUBE_MAP,F0,vt);for(let nt=0;nt<6;nt++)if(W&&F0.mipmaps&&F0.mipmaps.length>0)for(let pt=0;pt<F0.mipmaps.length;pt++)z2(v2.__webglFramebuffer[nt][pt],z0,F0,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+nt,pt);else z2(v2.__webglFramebuffer[nt],z0,F0,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);N0(F0,vt)&&T0(E.TEXTURE_CUBE_MAP),f.unbindTexture()}else if(U2){const nt=z0.texture;for(let pt=0,xt=nt.length;pt<xt;pt++){const Bt=nt[pt],W2=g.get(Bt);f.bindTexture(E.TEXTURE_2D,W2.__webglTexture),Y2(E.TEXTURE_2D,Bt,vt),z2(v2.__webglFramebuffer,z0,Bt,E.COLOR_ATTACHMENT0+pt,E.TEXTURE_2D,0),N0(Bt,vt)&&T0(E.TEXTURE_2D)}f.unbindTexture()}else{let nt=E.TEXTURE_2D;if((z0.isWebGL3DRenderTarget||z0.isWebGLArrayRenderTarget)&&(W?nt=z0.isWebGL3DRenderTarget?E.TEXTURE_3D:E.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),f.bindTexture(nt,G2.__webglTexture),Y2(nt,F0,vt),W&&F0.mipmaps&&F0.mipmaps.length>0)for(let pt=0;pt<F0.mipmaps.length;pt++)z2(v2.__webglFramebuffer[pt],z0,F0,E.COLOR_ATTACHMENT0,nt,pt);else z2(v2.__webglFramebuffer,z0,F0,E.COLOR_ATTACHMENT0,nt,0);N0(F0,vt)&&T0(nt),f.unbindTexture()}z0.depthBuffer&&Dt(z0)}function ce(z0){const F0=u0(z0)||W,v2=z0.isWebGLMultipleRenderTargets===!0?z0.texture:[z0.texture];for(let G2=0,V2=v2.length;G2<V2;G2++){const U2=v2[G2];if(N0(U2,F0)){const vt=z0.isWebGLCubeRenderTarget?E.TEXTURE_CUBE_MAP:E.TEXTURE_2D,nt=g.get(U2).__webglTexture;f.bindTexture(vt,nt),T0(vt),f.unbindTexture()}}}function Mt(z0){if(W&&z0.samples>0&&yt(z0)===!1){const F0=z0.isWebGLMultipleRenderTargets?z0.texture:[z0.texture],v2=z0.width,G2=z0.height;let V2=E.COLOR_BUFFER_BIT;const U2=[],vt=z0.stencilBuffer?E.DEPTH_STENCIL_ATTACHMENT:E.DEPTH_ATTACHMENT,nt=g.get(z0),pt=z0.isWebGLMultipleRenderTargets===!0;if(pt)for(let xt=0;xt<F0.length;xt++)f.bindFramebuffer(E.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),E.framebufferRenderbuffer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+xt,E.RENDERBUFFER,null),f.bindFramebuffer(E.FRAMEBUFFER,nt.__webglFramebuffer),E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0+xt,E.TEXTURE_2D,null,0);f.bindFramebuffer(E.READ_FRAMEBUFFER,nt.__webglMultisampledFramebuffer),f.bindFramebuffer(E.DRAW_FRAMEBUFFER,nt.__webglFramebuffer);for(let xt=0;xt<F0.length;xt++){U2.push(E.COLOR_ATTACHMENT0+xt),z0.depthBuffer&&U2.push(vt);const Bt=nt.__ignoreDepthValues!==void 0?nt.__ignoreDepthValues:!1;if(Bt===!1&&(z0.depthBuffer&&(V2|=E.DEPTH_BUFFER_BIT),z0.stencilBuffer&&(V2|=E.STENCIL_BUFFER_BIT)),pt&&E.framebufferRenderbuffer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.RENDERBUFFER,nt.__webglColorRenderbuffer[xt]),Bt===!0&&(E.invalidateFramebuffer(E.READ_FRAMEBUFFER,[vt]),E.invalidateFramebuffer(E.DRAW_FRAMEBUFFER,[vt])),pt){const W2=g.get(F0[xt]).__webglTexture;E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,W2,0)}E.blitFramebuffer(0,0,v2,G2,0,0,v2,G2,V2,E.NEAREST),Y&&E.invalidateFramebuffer(E.READ_FRAMEBUFFER,U2)}if(f.bindFramebuffer(E.READ_FRAMEBUFFER,null),f.bindFramebuffer(E.DRAW_FRAMEBUFFER,null),pt)for(let xt=0;xt<F0.length;xt++){f.bindFramebuffer(E.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),E.framebufferRenderbuffer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+xt,E.RENDERBUFFER,nt.__webglColorRenderbuffer[xt]);const Bt=g.get(F0[xt]).__webglTexture;f.bindFramebuffer(E.FRAMEBUFFER,nt.__webglFramebuffer),E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0+xt,E.TEXTURE_2D,Bt,0)}f.bindFramebuffer(E.DRAW_FRAMEBUFFER,nt.__webglMultisampledFramebuffer)}}function Lt(z0){return Math.min(y.maxSamples,z0.samples)}function yt(z0){const F0=g.get(z0);return W&&z0.samples>0&&a.has("WEBGL_multisampled_render_to_texture")===!0&&F0.__useRenderToTexture!==!1}function Ue(z0){const F0=G.render.frame;Q.get(z0)!==F0&&(Q.set(z0,F0),z0.update())}function jt(z0,F0){const v2=z0.colorSpace,G2=z0.format,V2=z0.type;return z0.isCompressedTexture===!0||z0.isVideoTexture===!0||z0.format===G6||v2!==j1&&v2!==Xn&&(Ne.getTransfer(v2)===Ke?W===!1?a.has("EXT_sRGB")===!0&&G2===bn?(z0.format=G6,z0.minFilter=Ki,z0.generateMipmaps=!1):F0=Nl.sRGBToLinear(F0):(G2!==bn||V2!==lr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",v2)),F0}this.allocateTextureUnit=o2,this.resetTextureUnits=N2,this.setTexture2D=$0,this.setTexture2DArray=k2,this.setTexture3D=w2,this.setTextureCube=f2,this.rebindTextures=Ut,this.setupRenderTarget=l2,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=z2,this.useMultisampledRTT=yt}function Ci0(E,a,f){const g=f.isWebGL2;function y(P,G=Xn){let W;const X=Ne.getTransfer(G);if(P===lr)return E.UNSIGNED_BYTE;if(P===Rl)return E.UNSIGNED_SHORT_4_4_4_4;if(P===Il)return E.UNSIGNED_SHORT_5_5_5_1;if(P===GJ)return E.BYTE;if(P===WJ)return E.SHORT;if(P===b6)return E.UNSIGNED_SHORT;if(P===El)return E.INT;if(P===cr)return E.UNSIGNED_INT;if(P===f1)return E.FLOAT;if(P===fs)return g?E.HALF_FLOAT:(W=a.get("OES_texture_half_float"),W!==null?W.HALF_FLOAT_OES:null);if(P===VJ)return E.ALPHA;if(P===bn)return E.RGBA;if(P===zJ)return E.LUMINANCE;if(P===HJ)return E.LUMINANCE_ALPHA;if(P===Lr)return E.DEPTH_COMPONENT;if(P===Ro)return E.DEPTH_STENCIL;if(P===G6)return W=a.get("EXT_sRGB"),W!==null?W.SRGB_ALPHA_EXT:null;if(P===jJ)return E.RED;if(P===Dl)return E.RED_INTEGER;if(P===bJ)return E.RG;if(P===Pl)return E.RG_INTEGER;if(P===Ll)return E.RGBA_INTEGER;if(P===I4||P===j3||P===b3||P===X3)if(X===Ke)if(W=a.get("WEBGL_compressed_texture_s3tc_srgb"),W!==null){if(P===I4)return W.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(P===j3)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(P===b3)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(P===X3)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(W=a.get("WEBGL_compressed_texture_s3tc"),W!==null){if(P===I4)return W.COMPRESSED_RGB_S3TC_DXT1_EXT;if(P===j3)return W.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(P===b3)return W.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(P===X3)return W.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(P===B6||P===N6||P===D_||P===P_)if(W=a.get("WEBGL_compressed_texture_pvrtc"),W!==null){if(P===B6)return W.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(P===N6)return W.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(P===D_)return W.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(P===P_)return W.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(P===X6)return W=a.get("WEBGL_compressed_texture_etc1"),W!==null?W.COMPRESSED_RGB_ETC1_WEBGL:null;if(P===U6||P===L_)if(W=a.get("WEBGL_compressed_texture_etc"),W!==null){if(P===U6)return X===Ke?W.COMPRESSED_SRGB8_ETC2:W.COMPRESSED_RGB8_ETC2;if(P===L_)return X===Ke?W.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:W.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(P===k_||P===O_||P===F_||P===B_||P===N_||P===U_||P===G_||P===W_||P===V_||P===z_||P===H_||P===j_||P===b_||P===X_)if(W=a.get("WEBGL_compressed_texture_astc"),W!==null){if(P===k_)return X===Ke?W.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:W.COMPRESSED_RGBA_ASTC_4x4_KHR;if(P===O_)return X===Ke?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:W.COMPRESSED_RGBA_ASTC_5x4_KHR;if(P===F_)return X===Ke?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:W.COMPRESSED_RGBA_ASTC_5x5_KHR;if(P===B_)return X===Ke?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:W.COMPRESSED_RGBA_ASTC_6x5_KHR;if(P===N_)return X===Ke?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:W.COMPRESSED_RGBA_ASTC_6x6_KHR;if(P===U_)return X===Ke?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:W.COMPRESSED_RGBA_ASTC_8x5_KHR;if(P===G_)return X===Ke?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:W.COMPRESSED_RGBA_ASTC_8x6_KHR;if(P===W_)return X===Ke?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:W.COMPRESSED_RGBA_ASTC_8x8_KHR;if(P===V_)return X===Ke?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:W.COMPRESSED_RGBA_ASTC_10x5_KHR;if(P===z_)return X===Ke?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:W.COMPRESSED_RGBA_ASTC_10x6_KHR;if(P===H_)return X===Ke?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:W.COMPRESSED_RGBA_ASTC_10x8_KHR;if(P===j_)return X===Ke?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:W.COMPRESSED_RGBA_ASTC_10x10_KHR;if(P===b_)return X===Ke?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:W.COMPRESSED_RGBA_ASTC_12x10_KHR;if(P===X_)return X===Ke?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:W.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(P===q3||P===q_||P===Y_)if(W=a.get("EXT_texture_compression_bptc"),W!==null){if(P===q3)return X===Ke?W.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:W.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(P===q_)return W.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(P===Y_)return W.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(P===XJ||P===K_||P===Z_||P===Q_)if(W=a.get("EXT_texture_compression_rgtc"),W!==null){if(P===q3)return W.COMPRESSED_RED_RGTC1_EXT;if(P===K_)return W.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(P===Z_)return W.COMPRESSED_RED_GREEN_RGTC2_EXT;if(P===Q_)return W.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return P===Pr?g?E.UNSIGNED_INT_24_8:(W=a.get("WEBGL_depth_texture"),W!==null?W.UNSIGNED_INT_24_8_WEBGL:null):E[P]!==void 0?E[P]:null}return{convert:y}}class Si0 extends hn{constructor(a=[]){super(),this.isArrayCamera=!0,this.cameras=a}}class g4 extends _i{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xi0={type:"move"};class y6{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new g4,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new g4,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K0,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K0),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new g4,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K0,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K0),this._grip}dispatchEvent(a){return this._targetRay!==null&&this._targetRay.dispatchEvent(a),this._grip!==null&&this._grip.dispatchEvent(a),this._hand!==null&&this._hand.dispatchEvent(a),this}connect(a){if(a&&a.hand){const f=this._hand;if(f)for(const g of a.hand.values())this._getHandJoint(f,g)}return this.dispatchEvent({type:"connected",data:a}),this}disconnect(a){return this.dispatchEvent({type:"disconnected",data:a}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(a,f,g){let y=null,P=null,G=null;const W=this._targetRay,X=this._grip,Y=this._hand;if(a&&f.session.visibilityState!=="visible-blurred"){if(Y&&a.hand){G=!0;for(const C0 of a.hand.values()){const u0=f.getJointPose(C0,g),t0=this._getHandJoint(Y,C0);u0!==null&&(t0.matrix.fromArray(u0.transform.matrix),t0.matrix.decompose(t0.position,t0.rotation,t0.scale),t0.matrixWorldNeedsUpdate=!0,t0.jointRadius=u0.radius),t0.visible=u0!==null}const Q=Y.joints["index-finger-tip"],o0=Y.joints["thumb-tip"],a0=Q.position.distanceTo(o0.position),m0=.02,v0=.005;Y.inputState.pinching&&a0>m0+v0?(Y.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:a.handedness,target:this})):!Y.inputState.pinching&&a0<=m0-v0&&(Y.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:a.handedness,target:this}))}else X!==null&&a.gripSpace&&(P=f.getPose(a.gripSpace,g),P!==null&&(X.matrix.fromArray(P.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,P.linearVelocity?(X.hasLinearVelocity=!0,X.linearVelocity.copy(P.linearVelocity)):X.hasLinearVelocity=!1,P.angularVelocity?(X.hasAngularVelocity=!0,X.angularVelocity.copy(P.angularVelocity)):X.hasAngularVelocity=!1));W!==null&&(y=f.getPose(a.targetRaySpace,g),y===null&&P!==null&&(y=P),y!==null&&(W.matrix.fromArray(y.transform.matrix),W.matrix.decompose(W.position,W.rotation,W.scale),W.matrixWorldNeedsUpdate=!0,y.linearVelocity?(W.hasLinearVelocity=!0,W.linearVelocity.copy(y.linearVelocity)):W.hasLinearVelocity=!1,y.angularVelocity?(W.hasAngularVelocity=!0,W.angularVelocity.copy(y.angularVelocity)):W.hasAngularVelocity=!1,this.dispatchEvent(xi0)))}return W!==null&&(W.visible=y!==null),X!==null&&(X.visible=P!==null),Y!==null&&(Y.visible=G!==null),this}_getHandJoint(a,f){if(a.joints[f.jointName]===void 0){const g=new g4;g.matrixAutoUpdate=!1,g.visible=!1,a.joints[f.jointName]=g,a.add(g)}return a.joints[f.jointName]}}const wi0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mi0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ti0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(a,f,g){if(this.texture===null){const y=new nn,P=a.properties.get(y);P.__webglTexture=f.texture,(f.depthNear!=g.depthNear||f.depthFar!=g.depthFar)&&(this.depthNear=f.depthNear,this.depthFar=f.depthFar),this.texture=y}}render(a,f){if(this.texture!==null){if(this.mesh===null){const g=f.cameras[0].viewport,y=new v1({extensions:{fragDepth:!0},vertexShader:wi0,fragmentShader:Mi0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:g.z},depthHeight:{value:g.w}}});this.mesh=new Zi(new gs(20,20),y)}a.render(this.mesh,f)}}reset(){this.texture=null,this.mesh=null}}class Ai0 extends ur{constructor(a,f){super();const g=this;let y=null,P=1,G=null,W="local-floor",X=1,Y=null,Q=null,o0=null,a0=null,m0=null,v0=null;const C0=new Ti0,u0=f.getContextAttributes();let t0=null,N0=null;const T0=[],O0=[],k0=new st;let L0=null;const D0=new hn;D0.layers.enable(1),D0.viewport=new Fe;const V0=new hn;V0.layers.enable(2),V0.viewport=new Fe;const h2=[D0,V0],R0=new Si0;R0.layers.enable(1),R0.layers.enable(2);let j0=null,R2=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(c2){let g2=T0[c2];return g2===void 0&&(g2=new y6,T0[c2]=g2),g2.getTargetRaySpace()},this.getControllerGrip=function(c2){let g2=T0[c2];return g2===void 0&&(g2=new y6,T0[c2]=g2),g2.getGripSpace()},this.getHand=function(c2){let g2=T0[c2];return g2===void 0&&(g2=new y6,T0[c2]=g2),g2.getHandSpace()};function N2(c2){const g2=O0.indexOf(c2.inputSource);if(g2===-1)return;const P2=T0[g2];P2!==void 0&&(P2.update(c2.inputSource,c2.frame,Y||G),P2.dispatchEvent({type:c2.type,data:c2.inputSource}))}function o2(){y.removeEventListener("select",N2),y.removeEventListener("selectstart",N2),y.removeEventListener("selectend",N2),y.removeEventListener("squeeze",N2),y.removeEventListener("squeezestart",N2),y.removeEventListener("squeezeend",N2),y.removeEventListener("end",o2),y.removeEventListener("inputsourceschange",x2);for(let c2=0;c2<T0.length;c2++){const g2=O0[c2];g2!==null&&(O0[c2]=null,T0[c2].disconnect(g2))}j0=null,R2=null,C0.reset(),a.setRenderTarget(t0),m0=null,a0=null,o0=null,y=null,N0=null,Y2.stop(),g.isPresenting=!1,a.setPixelRatio(L0),a.setSize(k0.width,k0.height,!1),g.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(c2){P=c2,g.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(c2){W=c2,g.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return Y||G},this.setReferenceSpace=function(c2){Y=c2},this.getBaseLayer=function(){return a0!==null?a0:m0},this.getBinding=function(){return o0},this.getFrame=function(){return v0},this.getSession=function(){return y},this.setSession=async function(c2){if(y=c2,y!==null){if(t0=a.getRenderTarget(),y.addEventListener("select",N2),y.addEventListener("selectstart",N2),y.addEventListener("selectend",N2),y.addEventListener("squeeze",N2),y.addEventListener("squeezestart",N2),y.addEventListener("squeezeend",N2),y.addEventListener("end",o2),y.addEventListener("inputsourceschange",x2),u0.xrCompatible!==!0&&await f.makeXRCompatible(),L0=a.getPixelRatio(),a.getSize(k0),y.renderState.layers===void 0||a.capabilities.isWebGL2===!1){const g2={antialias:y.renderState.layers===void 0?u0.antialias:!0,alpha:!0,depth:u0.depth,stencil:u0.stencil,framebufferScaleFactor:P};m0=new XRWebGLLayer(y,f,g2),y.updateRenderState({baseLayer:m0}),a.setPixelRatio(1),a.setSize(m0.framebufferWidth,m0.framebufferHeight,!1),N0=new pr(m0.framebufferWidth,m0.framebufferHeight,{format:bn,type:lr,colorSpace:a.outputColorSpace,stencilBuffer:u0.stencil})}else{let g2=null,P2=null,z2=null;u0.depth&&(z2=u0.stencil?f.DEPTH24_STENCIL8:f.DEPTH_COMPONENT24,g2=u0.stencil?Ro:Lr,P2=u0.stencil?Pr:cr);const J2={colorFormat:f.RGBA8,depthFormat:z2,scaleFactor:P};o0=new XRWebGLBinding(y,f),a0=o0.createProjectionLayer(J2),y.updateRenderState({layers:[a0]}),a.setPixelRatio(1),a.setSize(a0.textureWidth,a0.textureHeight,!1),N0=new pr(a0.textureWidth,a0.textureHeight,{format:bn,type:lr,depthTexture:new Yl(a0.textureWidth,a0.textureHeight,P2,void 0,void 0,void 0,void 0,void 0,void 0,g2),stencilBuffer:u0.stencil,colorSpace:a.outputColorSpace,samples:u0.antialias?4:0});const $2=a.properties.get(N0);$2.__ignoreDepthValues=a0.ignoreDepthValues}N0.isXRRenderTarget=!0,this.setFoveation(X),Y=null,G=await y.requestReferenceSpace(W),Y2.setContext(y),Y2.start(),g.isPresenting=!0,g.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(y!==null)return y.environmentBlendMode};function x2(c2){for(let g2=0;g2<c2.removed.length;g2++){const P2=c2.removed[g2],z2=O0.indexOf(P2);z2>=0&&(O0[z2]=null,T0[z2].disconnect(P2))}for(let g2=0;g2<c2.added.length;g2++){const P2=c2.added[g2];let z2=O0.indexOf(P2);if(z2===-1){for(let $2=0;$2<T0.length;$2++)if($2>=O0.length){O0.push(P2),z2=$2;break}else if(O0[$2]===null){O0[$2]=P2,z2=$2;break}if(z2===-1)break}const J2=T0[z2];J2&&J2.connect(P2)}}const $0=new K0,k2=new K0;function w2(c2,g2,P2){$0.setFromMatrixPosition(g2.matrixWorld),k2.setFromMatrixPosition(P2.matrixWorld);const z2=$0.distanceTo(k2),J2=g2.projectionMatrix.elements,$2=P2.projectionMatrix.elements,Dt=J2[14]/(J2[10]-1),Ut=J2[14]/(J2[10]+1),l2=(J2[9]+1)/J2[5],ce=(J2[9]-1)/J2[5],Mt=(J2[8]-1)/J2[0],Lt=($2[8]+1)/$2[0],yt=Dt*Mt,Ue=Dt*Lt,jt=z2/(-Mt+Lt),z0=jt*-Mt;g2.matrixWorld.decompose(c2.position,c2.quaternion,c2.scale),c2.translateX(z0),c2.translateZ(jt),c2.matrixWorld.compose(c2.position,c2.quaternion,c2.scale),c2.matrixWorldInverse.copy(c2.matrixWorld).invert();const F0=Dt+jt,v2=Ut+jt,G2=yt-z0,V2=Ue+(z2-z0),U2=l2*Ut/v2*F0,vt=ce*Ut/v2*F0;c2.projectionMatrix.makePerspective(G2,V2,U2,vt,F0,v2),c2.projectionMatrixInverse.copy(c2.projectionMatrix).invert()}function f2(c2,g2){g2===null?c2.matrixWorld.copy(c2.matrix):c2.matrixWorld.multiplyMatrices(g2.matrixWorld,c2.matrix),c2.matrixWorldInverse.copy(c2.matrixWorld).invert()}this.updateCamera=function(c2){if(y===null)return;C0.texture!==null&&(c2.near=C0.depthNear,c2.far=C0.depthFar),R0.near=V0.near=D0.near=c2.near,R0.far=V0.far=D0.far=c2.far,(j0!==R0.near||R2!==R0.far)&&(y.updateRenderState({depthNear:R0.near,depthFar:R0.far}),j0=R0.near,R2=R0.far,D0.near=j0,D0.far=R2,V0.near=j0,V0.far=R2,D0.updateProjectionMatrix(),V0.updateProjectionMatrix(),c2.updateProjectionMatrix());const g2=c2.parent,P2=R0.cameras;f2(R0,g2);for(let z2=0;z2<P2.length;z2++)f2(P2[z2],g2);P2.length===2?w2(R0,D0,V0):R0.projectionMatrix.copy(D0.projectionMatrix),F2(c2,R0,g2)};function F2(c2,g2,P2){P2===null?c2.matrix.copy(g2.matrixWorld):(c2.matrix.copy(P2.matrixWorld),c2.matrix.invert(),c2.matrix.multiply(g2.matrixWorld)),c2.matrix.decompose(c2.position,c2.quaternion,c2.scale),c2.updateMatrixWorld(!0),c2.projectionMatrix.copy(g2.projectionMatrix),c2.projectionMatrixInverse.copy(g2.projectionMatrixInverse),c2.isPerspectiveCamera&&(c2.fov=Io*2*Math.atan(1/c2.projectionMatrix.elements[5]),c2.zoom=1)}this.getCamera=function(){return R0},this.getFoveation=function(){if(!(a0===null&&m0===null))return X},this.setFoveation=function(c2){X=c2,a0!==null&&(a0.fixedFoveation=c2),m0!==null&&m0.fixedFoveation!==void 0&&(m0.fixedFoveation=c2)},this.hasDepthSensing=function(){return C0.texture!==null};let L2=null;function X2(c2,g2){if(Q=g2.getViewerPose(Y||G),v0=g2,Q!==null){const P2=Q.views;m0!==null&&(a.setRenderTargetFramebuffer(N0,m0.framebuffer),a.setRenderTarget(N0));let z2=!1;P2.length!==R0.cameras.length&&(R0.cameras.length=0,z2=!0);for(let $2=0;$2<P2.length;$2++){const Dt=P2[$2];let Ut=null;if(m0!==null)Ut=m0.getViewport(Dt);else{const ce=o0.getViewSubImage(a0,Dt);Ut=ce.viewport,$2===0&&(a.setRenderTargetTextures(N0,ce.colorTexture,a0.ignoreDepthValues?void 0:ce.depthStencilTexture),a.setRenderTarget(N0))}let l2=h2[$2];l2===void 0&&(l2=new hn,l2.layers.enable($2),l2.viewport=new Fe,h2[$2]=l2),l2.matrix.fromArray(Dt.transform.matrix),l2.matrix.decompose(l2.position,l2.quaternion,l2.scale),l2.projectionMatrix.fromArray(Dt.projectionMatrix),l2.projectionMatrixInverse.copy(l2.projectionMatrix).invert(),l2.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),$2===0&&(R0.matrix.copy(l2.matrix),R0.matrix.decompose(R0.position,R0.quaternion,R0.scale)),z2===!0&&R0.cameras.push(l2)}const J2=y.enabledFeatures;if(J2&&J2.includes("depth-sensing")){const $2=o0.getDepthInformation(P2[0]);$2&&$2.isValid&&$2.texture&&C0.init(a,$2,y.renderState)}}for(let P2=0;P2<T0.length;P2++){const z2=O0[P2],J2=T0[P2];z2!==null&&J2!==void 0&&J2.update(z2,g2,Y||G)}C0.render(a,R0),L2&&L2(c2,g2),g2.detectedPlanes&&g.dispatchEvent({type:"planesdetected",data:g2}),v0=null}const Y2=new Xl;Y2.setAnimationLoop(X2),this.setAnimationLoop=function(c2){L2=c2},this.dispose=function(){}}}function Ei0(E,a){function f(u0,t0){u0.matrixAutoUpdate===!0&&u0.updateMatrix(),t0.value.copy(u0.matrix)}function g(u0,t0){t0.color.getRGB(u0.fogColor.value,Hl(E)),t0.isFog?(u0.fogNear.value=t0.near,u0.fogFar.value=t0.far):t0.isFogExp2&&(u0.fogDensity.value=t0.density)}function y(u0,t0,N0,T0,O0){t0.isMeshBasicMaterial||t0.isMeshLambertMaterial?P(u0,t0):t0.isMeshToonMaterial?(P(u0,t0),o0(u0,t0)):t0.isMeshPhongMaterial?(P(u0,t0),Q(u0,t0)):t0.isMeshStandardMaterial?(P(u0,t0),a0(u0,t0),t0.isMeshPhysicalMaterial&&m0(u0,t0,O0)):t0.isMeshMatcapMaterial?(P(u0,t0),v0(u0,t0)):t0.isMeshDepthMaterial?P(u0,t0):t0.isMeshDistanceMaterial?(P(u0,t0),C0(u0,t0)):t0.isMeshNormalMaterial?P(u0,t0):t0.isLineBasicMaterial?(G(u0,t0),t0.isLineDashedMaterial&&W(u0,t0)):t0.isPointsMaterial?X(u0,t0,N0,T0):t0.isSpriteMaterial?Y(u0,t0):t0.isShadowMaterial?(u0.color.value.copy(t0.color),u0.opacity.value=t0.opacity):t0.isShaderMaterial&&(t0.uniformsNeedUpdate=!1)}function P(u0,t0){u0.opacity.value=t0.opacity,t0.color&&u0.diffuse.value.copy(t0.color),t0.emissive&&u0.emissive.value.copy(t0.emissive).multiplyScalar(t0.emissiveIntensity),t0.map&&(u0.map.value=t0.map,f(t0.map,u0.mapTransform)),t0.alphaMap&&(u0.alphaMap.value=t0.alphaMap,f(t0.alphaMap,u0.alphaMapTransform)),t0.bumpMap&&(u0.bumpMap.value=t0.bumpMap,f(t0.bumpMap,u0.bumpMapTransform),u0.bumpScale.value=t0.bumpScale,t0.side===dn&&(u0.bumpScale.value*=-1)),t0.normalMap&&(u0.normalMap.value=t0.normalMap,f(t0.normalMap,u0.normalMapTransform),u0.normalScale.value.copy(t0.normalScale),t0.side===dn&&u0.normalScale.value.negate()),t0.displacementMap&&(u0.displacementMap.value=t0.displacementMap,f(t0.displacementMap,u0.displacementMapTransform),u0.displacementScale.value=t0.displacementScale,u0.displacementBias.value=t0.displacementBias),t0.emissiveMap&&(u0.emissiveMap.value=t0.emissiveMap,f(t0.emissiveMap,u0.emissiveMapTransform)),t0.specularMap&&(u0.specularMap.value=t0.specularMap,f(t0.specularMap,u0.specularMapTransform)),t0.alphaTest>0&&(u0.alphaTest.value=t0.alphaTest);const N0=a.get(t0).envMap;if(N0&&(u0.envMap.value=N0,u0.flipEnvMap.value=N0.isCubeTexture&&N0.isRenderTargetTexture===!1?-1:1,u0.reflectivity.value=t0.reflectivity,u0.ior.value=t0.ior,u0.refractionRatio.value=t0.refractionRatio),t0.lightMap){u0.lightMap.value=t0.lightMap;const T0=E._useLegacyLights===!0?Math.PI:1;u0.lightMapIntensity.value=t0.lightMapIntensity*T0,f(t0.lightMap,u0.lightMapTransform)}t0.aoMap&&(u0.aoMap.value=t0.aoMap,u0.aoMapIntensity.value=t0.aoMapIntensity,f(t0.aoMap,u0.aoMapTransform))}function G(u0,t0){u0.diffuse.value.copy(t0.color),u0.opacity.value=t0.opacity,t0.map&&(u0.map.value=t0.map,f(t0.map,u0.mapTransform))}function W(u0,t0){u0.dashSize.value=t0.dashSize,u0.totalSize.value=t0.dashSize+t0.gapSize,u0.scale.value=t0.scale}function X(u0,t0,N0,T0){u0.diffuse.value.copy(t0.color),u0.opacity.value=t0.opacity,u0.size.value=t0.size*N0,u0.scale.value=T0*.5,t0.map&&(u0.map.value=t0.map,f(t0.map,u0.uvTransform)),t0.alphaMap&&(u0.alphaMap.value=t0.alphaMap,f(t0.alphaMap,u0.alphaMapTransform)),t0.alphaTest>0&&(u0.alphaTest.value=t0.alphaTest)}function Y(u0,t0){u0.diffuse.value.copy(t0.color),u0.opacity.value=t0.opacity,u0.rotation.value=t0.rotation,t0.map&&(u0.map.value=t0.map,f(t0.map,u0.mapTransform)),t0.alphaMap&&(u0.alphaMap.value=t0.alphaMap,f(t0.alphaMap,u0.alphaMapTransform)),t0.alphaTest>0&&(u0.alphaTest.value=t0.alphaTest)}function Q(u0,t0){u0.specular.value.copy(t0.specular),u0.shininess.value=Math.max(t0.shininess,1e-4)}function o0(u0,t0){t0.gradientMap&&(u0.gradientMap.value=t0.gradientMap)}function a0(u0,t0){u0.metalness.value=t0.metalness,t0.metalnessMap&&(u0.metalnessMap.value=t0.metalnessMap,f(t0.metalnessMap,u0.metalnessMapTransform)),u0.roughness.value=t0.roughness,t0.roughnessMap&&(u0.roughnessMap.value=t0.roughnessMap,f(t0.roughnessMap,u0.roughnessMapTransform)),a.get(t0).envMap&&(u0.envMapIntensity.value=t0.envMapIntensity)}function m0(u0,t0,N0){u0.ior.value=t0.ior,t0.sheen>0&&(u0.sheenColor.value.copy(t0.sheenColor).multiplyScalar(t0.sheen),u0.sheenRoughness.value=t0.sheenRoughness,t0.sheenColorMap&&(u0.sheenColorMap.value=t0.sheenColorMap,f(t0.sheenColorMap,u0.sheenColorMapTransform)),t0.sheenRoughnessMap&&(u0.sheenRoughnessMap.value=t0.sheenRoughnessMap,f(t0.sheenRoughnessMap,u0.sheenRoughnessMapTransform))),t0.clearcoat>0&&(u0.clearcoat.value=t0.clearcoat,u0.clearcoatRoughness.value=t0.clearcoatRoughness,t0.clearcoatMap&&(u0.clearcoatMap.value=t0.clearcoatMap,f(t0.clearcoatMap,u0.clearcoatMapTransform)),t0.clearcoatRoughnessMap&&(u0.clearcoatRoughnessMap.value=t0.clearcoatRoughnessMap,f(t0.clearcoatRoughnessMap,u0.clearcoatRoughnessMapTransform)),t0.clearcoatNormalMap&&(u0.clearcoatNormalMap.value=t0.clearcoatNormalMap,f(t0.clearcoatNormalMap,u0.clearcoatNormalMapTransform),u0.clearcoatNormalScale.value.copy(t0.clearcoatNormalScale),t0.side===dn&&u0.clearcoatNormalScale.value.negate())),t0.iridescence>0&&(u0.iridescence.value=t0.iridescence,u0.iridescenceIOR.value=t0.iridescenceIOR,u0.iridescenceThicknessMinimum.value=t0.iridescenceThicknessRange[0],u0.iridescenceThicknessMaximum.value=t0.iridescenceThicknessRange[1],t0.iridescenceMap&&(u0.iridescenceMap.value=t0.iridescenceMap,f(t0.iridescenceMap,u0.iridescenceMapTransform)),t0.iridescenceThicknessMap&&(u0.iridescenceThicknessMap.value=t0.iridescenceThicknessMap,f(t0.iridescenceThicknessMap,u0.iridescenceThicknessMapTransform))),t0.transmission>0&&(u0.transmission.value=t0.transmission,u0.transmissionSamplerMap.value=N0.texture,u0.transmissionSamplerSize.value.set(N0.width,N0.height),t0.transmissionMap&&(u0.transmissionMap.value=t0.transmissionMap,f(t0.transmissionMap,u0.transmissionMapTransform)),u0.thickness.value=t0.thickness,t0.thicknessMap&&(u0.thicknessMap.value=t0.thicknessMap,f(t0.thicknessMap,u0.thicknessMapTransform)),u0.attenuationDistance.value=t0.attenuationDistance,u0.attenuationColor.value.copy(t0.attenuationColor)),t0.anisotropy>0&&(u0.anisotropyVector.value.set(t0.anisotropy*Math.cos(t0.anisotropyRotation),t0.anisotropy*Math.sin(t0.anisotropyRotation)),t0.anisotropyMap&&(u0.anisotropyMap.value=t0.anisotropyMap,f(t0.anisotropyMap,u0.anisotropyMapTransform))),u0.specularIntensity.value=t0.specularIntensity,u0.specularColor.value.copy(t0.specularColor),t0.specularColorMap&&(u0.specularColorMap.value=t0.specularColorMap,f(t0.specularColorMap,u0.specularColorMapTransform)),t0.specularIntensityMap&&(u0.specularIntensityMap.value=t0.specularIntensityMap,f(t0.specularIntensityMap,u0.specularIntensityMapTransform))}function v0(u0,t0){t0.matcap&&(u0.matcap.value=t0.matcap)}function C0(u0,t0){const N0=a.get(t0).light;u0.referencePosition.value.setFromMatrixPosition(N0.matrixWorld),u0.nearDistance.value=N0.shadow.camera.near,u0.farDistance.value=N0.shadow.camera.far}return{refreshFogUniforms:g,refreshMaterialUniforms:y}}function Ri0(E,a,f,g){let y={},P={},G=[];const W=f.isWebGL2?E.getParameter(E.MAX_UNIFORM_BUFFER_BINDINGS):0;function X(N0,T0){const O0=T0.program;g.uniformBlockBinding(N0,O0)}function Y(N0,T0){let O0=y[N0.id];O0===void 0&&(v0(N0),O0=Q(N0),y[N0.id]=O0,N0.addEventListener("dispose",u0));const k0=T0.program;g.updateUBOMapping(N0,k0);const L0=a.render.frame;P[N0.id]!==L0&&(a0(N0),P[N0.id]=L0)}function Q(N0){const T0=o0();N0.__bindingPointIndex=T0;const O0=E.createBuffer(),k0=N0.__size,L0=N0.usage;return E.bindBuffer(E.UNIFORM_BUFFER,O0),E.bufferData(E.UNIFORM_BUFFER,k0,L0),E.bindBuffer(E.UNIFORM_BUFFER,null),E.bindBufferBase(E.UNIFORM_BUFFER,T0,O0),O0}function o0(){for(let N0=0;N0<W;N0++)if(G.indexOf(N0)===-1)return G.push(N0),N0;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function a0(N0){const T0=y[N0.id],O0=N0.uniforms,k0=N0.__cache;E.bindBuffer(E.UNIFORM_BUFFER,T0);for(let L0=0,D0=O0.length;L0<D0;L0++){const V0=Array.isArray(O0[L0])?O0[L0]:[O0[L0]];for(let h2=0,R0=V0.length;h2<R0;h2++){const j0=V0[h2];if(m0(j0,L0,h2,k0)===!0){const R2=j0.__offset,N2=Array.isArray(j0.value)?j0.value:[j0.value];let o2=0;for(let x2=0;x2<N2.length;x2++){const $0=N2[x2],k2=C0($0);typeof $0=="number"||typeof $0=="boolean"?(j0.__data[0]=$0,E.bufferSubData(E.UNIFORM_BUFFER,R2+o2,j0.__data)):$0.isMatrix3?(j0.__data[0]=$0.elements[0],j0.__data[1]=$0.elements[1],j0.__data[2]=$0.elements[2],j0.__data[3]=0,j0.__data[4]=$0.elements[3],j0.__data[5]=$0.elements[4],j0.__data[6]=$0.elements[5],j0.__data[7]=0,j0.__data[8]=$0.elements[6],j0.__data[9]=$0.elements[7],j0.__data[10]=$0.elements[8],j0.__data[11]=0):($0.toArray(j0.__data,o2),o2+=k2.storage/Float32Array.BYTES_PER_ELEMENT)}E.bufferSubData(E.UNIFORM_BUFFER,R2,j0.__data)}}}E.bindBuffer(E.UNIFORM_BUFFER,null)}function m0(N0,T0,O0,k0){const L0=N0.value,D0=T0+"_"+O0;if(k0[D0]===void 0)return typeof L0=="number"||typeof L0=="boolean"?k0[D0]=L0:k0[D0]=L0.clone(),!0;{const V0=k0[D0];if(typeof L0=="number"||typeof L0=="boolean"){if(V0!==L0)return k0[D0]=L0,!0}else if(V0.equals(L0)===!1)return V0.copy(L0),!0}return!1}function v0(N0){const T0=N0.uniforms;let O0=0;const k0=16;for(let D0=0,V0=T0.length;D0<V0;D0++){const h2=Array.isArray(T0[D0])?T0[D0]:[T0[D0]];for(let R0=0,j0=h2.length;R0<j0;R0++){const R2=h2[R0],N2=Array.isArray(R2.value)?R2.value:[R2.value];for(let o2=0,x2=N2.length;o2<x2;o2++){const $0=N2[o2],k2=C0($0),w2=O0%k0;w2!==0&&k0-w2<k2.boundary&&(O0+=k0-w2),R2.__data=new Float32Array(k2.storage/Float32Array.BYTES_PER_ELEMENT),R2.__offset=O0,O0+=k2.storage}}}const L0=O0%k0;return L0>0&&(O0+=k0-L0),N0.__size=O0,N0.__cache={},this}function C0(N0){const T0={boundary:0,storage:0};return typeof N0=="number"||typeof N0=="boolean"?(T0.boundary=4,T0.storage=4):N0.isVector2?(T0.boundary=8,T0.storage=8):N0.isVector3||N0.isColor?(T0.boundary=16,T0.storage=12):N0.isVector4?(T0.boundary=16,T0.storage=16):N0.isMatrix3?(T0.boundary=48,T0.storage=48):N0.isMatrix4?(T0.boundary=64,T0.storage=64):N0.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N0),T0}function u0(N0){const T0=N0.target;T0.removeEventListener("dispose",u0);const O0=G.indexOf(T0.__bindingPointIndex);G.splice(O0,1),E.deleteBuffer(y[T0.id]),delete y[T0.id],delete P[T0.id]}function t0(){for(const N0 in y)E.deleteBuffer(y[N0]);G=[],y={},P={}}return{bind:X,update:Y,dispose:t0}}class t5{constructor(a={}){const{canvas:f=x$(),context:g=null,depth:y=!0,stencil:P=!0,alpha:G=!1,antialias:W=!1,premultipliedAlpha:X=!0,preserveDrawingBuffer:Y=!1,powerPreference:Q="default",failIfMajorPerformanceCaveat:o0=!1}=a;this.isWebGLRenderer=!0;let a0;g!==null?a0=g.getContextAttributes().alpha:a0=G;const m0=new Uint32Array(4),v0=new Int32Array(4);let C0=null,u0=null;const t0=[],N0=[];this.domElement=f,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vi,this._useLegacyLights=!1,this.toneMapping=ar,this.toneMappingExposure=1;const T0=this;let O0=!1,k0=0,L0=0,D0=null,V0=-1,h2=null;const R0=new Fe,j0=new Fe;let R2=null;const N2=new qt(0);let o2=0,x2=f.width,$0=f.height,k2=1,w2=null,f2=null;const F2=new Fe(0,0,x2,$0),L2=new Fe(0,0,x2,$0);let X2=!1;const Y2=new Q6;let c2=!1,g2=!1,P2=null;const z2=new ue,J2=new st,$2=new K0,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ut(){return D0===null?k2:1}let l2=g;function ce(W0,a2){for(let p2=0;p2<W0.length;p2++){const E2=W0[p2],C2=f.getContext(E2,a2);if(C2!==null)return C2}return null}try{const W0={alpha:!0,depth:y,stencil:P,antialias:W,premultipliedAlpha:X,preserveDrawingBuffer:Y,powerPreference:Q,failIfMajorPerformanceCaveat:o0};if("setAttribute"in f&&f.setAttribute("data-engine",`three.js r${j6}`),f.addEventListener("webglcontextlost",Tt,!1),f.addEventListener("webglcontextrestored",b0,!1),f.addEventListener("webglcontextcreationerror",j2,!1),l2===null){const a2=["webgl2","webgl","experimental-webgl"];if(T0.isWebGL1Renderer===!0&&a2.shift(),l2=ce(a2,W0),l2===null)throw ce(a2)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&l2 instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),l2.getShaderPrecisionFormat===void 0&&(l2.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(W0){throw console.error("THREE.WebGLRenderer: "+W0.message),W0}let Mt,Lt,yt,Ue,jt,z0,F0,v2,G2,V2,U2,vt,nt,pt,xt,Bt,W2,ge,Zt,Wt,mt,ct,bt,Z0;function q2(){Mt=new Ft0(l2),Lt=new It0(l2,Mt,a),Mt.init(Lt),ct=new Ci0(l2,Mt,Lt),yt=new vi0(l2,Mt,Lt),Ue=new Ut0(l2),jt=new ri0,z0=new gi0(l2,Mt,yt,jt,Lt,ct,Ue),F0=new Pt0(T0),v2=new Ot0(T0),G2=new X$(l2,Lt),bt=new Et0(l2,Mt,G2,Lt),V2=new Bt0(l2,G2,Ue,bt),U2=new zt0(l2,V2,G2,Ue),Zt=new Vt0(l2,Lt,z0),Bt=new Dt0(jt),vt=new ni0(T0,F0,v2,Mt,Lt,bt,Bt),nt=new Ei0(T0,jt),pt=new si0,xt=new ui0(Mt,Lt),ge=new At0(T0,F0,v2,yt,U2,a0,X),W2=new yi0(T0,U2,Lt),Z0=new Ri0(l2,Ue,Lt,yt),Wt=new Rt0(l2,Mt,Ue,Lt),mt=new Nt0(l2,Mt,Ue,Lt),Ue.programs=vt.programs,T0.capabilities=Lt,T0.extensions=Mt,T0.properties=jt,T0.renderLists=pt,T0.shadowMap=W2,T0.state=yt,T0.info=Ue}q2();const rt=new Ai0(T0,l2);this.xr=rt,this.getContext=function(){return l2},this.getContextAttributes=function(){return l2.getContextAttributes()},this.forceContextLoss=function(){const W0=Mt.get("WEBGL_lose_context");W0&&W0.loseContext()},this.forceContextRestore=function(){const W0=Mt.get("WEBGL_lose_context");W0&&W0.restoreContext()},this.getPixelRatio=function(){return k2},this.setPixelRatio=function(W0){W0!==void 0&&(k2=W0,this.setSize(x2,$0,!1))},this.getSize=function(W0){return W0.set(x2,$0)},this.setSize=function(W0,a2,p2=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}x2=W0,$0=a2,f.width=Math.floor(W0*k2),f.height=Math.floor(a2*k2),p2===!0&&(f.style.width=W0+"px",f.style.height=a2+"px"),this.setViewport(0,0,W0,a2)},this.getDrawingBufferSize=function(W0){return W0.set(x2*k2,$0*k2).floor()},this.setDrawingBufferSize=function(W0,a2,p2){x2=W0,$0=a2,k2=p2,f.width=Math.floor(W0*p2),f.height=Math.floor(a2*p2),this.setViewport(0,0,W0,a2)},this.getCurrentViewport=function(W0){return W0.copy(R0)},this.getViewport=function(W0){return W0.copy(F2)},this.setViewport=function(W0,a2,p2,E2){W0.isVector4?F2.set(W0.x,W0.y,W0.z,W0.w):F2.set(W0,a2,p2,E2),yt.viewport(R0.copy(F2).multiplyScalar(k2).floor())},this.getScissor=function(W0){return W0.copy(L2)},this.setScissor=function(W0,a2,p2,E2){W0.isVector4?L2.set(W0.x,W0.y,W0.z,W0.w):L2.set(W0,a2,p2,E2),yt.scissor(j0.copy(L2).multiplyScalar(k2).floor())},this.getScissorTest=function(){return X2},this.setScissorTest=function(W0){yt.setScissorTest(X2=W0)},this.setOpaqueSort=function(W0){w2=W0},this.setTransparentSort=function(W0){f2=W0},this.getClearColor=function(W0){return W0.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(W0=!0,a2=!0,p2=!0){let E2=0;if(W0){let C2=!1;if(D0!==null){const at=D0.texture.format;C2=at===Ll||at===Pl||at===Dl}if(C2){const at=D0.texture.type,wt=at===lr||at===cr||at===b6||at===Pr||at===Rl||at===Il,Nt=ge.getClearColor(),kt=ge.getClearAlpha(),Yt=Nt.r,Kt=Nt.g,Xt=Nt.b;wt?(m0[0]=Yt,m0[1]=Kt,m0[2]=Xt,m0[3]=kt,l2.clearBufferuiv(l2.COLOR,0,m0)):(v0[0]=Yt,v0[1]=Kt,v0[2]=Xt,v0[3]=kt,l2.clearBufferiv(l2.COLOR,0,v0))}else E2|=l2.COLOR_BUFFER_BIT}a2&&(E2|=l2.DEPTH_BUFFER_BIT),p2&&(E2|=l2.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),l2.clear(E2)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){f.removeEventListener("webglcontextlost",Tt,!1),f.removeEventListener("webglcontextrestored",b0,!1),f.removeEventListener("webglcontextcreationerror",j2,!1),pt.dispose(),xt.dispose(),jt.dispose(),F0.dispose(),v2.dispose(),U2.dispose(),bt.dispose(),Z0.dispose(),vt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",ui),rt.removeEventListener("sessionend",ye),P2&&(P2.dispose(),P2=null),Ze.stop()};function Tt(W0){W0.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O0=!0}function b0(){console.log("THREE.WebGLRenderer: Context Restored."),O0=!1;const W0=Ue.autoReset,a2=W2.enabled,p2=W2.autoUpdate,E2=W2.needsUpdate,C2=W2.type;q2(),Ue.autoReset=W0,W2.enabled=a2,W2.autoUpdate=p2,W2.needsUpdate=E2,W2.type=C2}function j2(W0){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",W0.statusMessage)}function H2(W0){const a2=W0.target;a2.removeEventListener("dispose",H2),dt(a2)}function dt(W0){Rt(W0),jt.remove(W0)}function Rt(W0){const a2=jt.get(W0).programs;a2!==void 0&&(a2.forEach(function(p2){vt.releaseProgram(p2)}),W0.isShaderMaterial&&vt.releaseShaderCache(W0))}this.renderBufferDirect=function(W0,a2,p2,E2,C2,at){a2===null&&(a2=Dt);const wt=C2.isMesh&&C2.matrixWorld.determinant()<0,Nt=Z4(W0,a2,p2,E2,C2);yt.setMaterial(E2,wt);let kt=p2.index,Yt=1;if(E2.wireframe===!0){if(kt=V2.getWireframeAttribute(p2),kt===void 0)return;Yt=2}const Kt=p2.drawRange,Xt=p2.attributes.position;let Qe=Kt.start*Yt,rn=(Kt.start+Kt.count)*Yt;at!==null&&(Qe=Math.max(Qe,at.start*Yt),rn=Math.min(rn,(at.start+at.count)*Yt)),kt!==null?(Qe=Math.max(Qe,0),rn=Math.min(rn,kt.count)):Xt!=null&&(Qe=Math.max(Qe,0),rn=Math.min(rn,Xt.count));const gi=rn-Qe;if(gi<0||gi===1/0)return;bt.setup(C2,E2,Nt,p2,kt);let qn,qe=Wt;if(kt!==null&&(qn=G2.get(kt),qe=mt,qe.setIndex(qn)),C2.isMesh)E2.wireframe===!0?(yt.setLineWidth(E2.wireframeLinewidth*Ut()),qe.setMode(l2.LINES)):qe.setMode(l2.TRIANGLES);else if(C2.isLine){let ne=E2.linewidth;ne===void 0&&(ne=1),yt.setLineWidth(ne*Ut()),C2.isLineSegments?qe.setMode(l2.LINES):C2.isLineLoop?qe.setMode(l2.LINE_LOOP):qe.setMode(l2.LINE_STRIP)}else C2.isPoints?qe.setMode(l2.POINTS):C2.isSprite&&qe.setMode(l2.TRIANGLES);if(C2.isBatchedMesh)qe.renderMultiDraw(C2._multiDrawStarts,C2._multiDrawCounts,C2._multiDrawCount);else if(C2.isInstancedMesh)qe.renderInstances(Qe,gi,C2.count);else if(p2.isInstancedBufferGeometry){const ne=p2._maxInstanceCount!==void 0?p2._maxInstanceCount:1/0,q1=Math.min(p2.instanceCount,ne);qe.renderInstances(Qe,gi,q1)}else qe.render(Qe,gi)};function de(W0,a2,p2){W0.transparent===!0&&W0.side===t1&&W0.forceSinglePass===!1?(W0.side=dn,W0.needsUpdate=!0,Un(W0,a2,p2),W0.side=y1,W0.needsUpdate=!0,Un(W0,a2,p2),W0.side=t1):Un(W0,a2,p2)}this.compile=function(W0,a2,p2=null){p2===null&&(p2=W0),u0=xt.get(p2),u0.init(),N0.push(u0),p2.traverseVisible(function(C2){C2.isLight&&C2.layers.test(a2.layers)&&(u0.pushLight(C2),C2.castShadow&&u0.pushShadow(C2))}),W0!==p2&&W0.traverseVisible(function(C2){C2.isLight&&C2.layers.test(a2.layers)&&(u0.pushLight(C2),C2.castShadow&&u0.pushShadow(C2))}),u0.setupLights(T0._useLegacyLights);const E2=new Set;return W0.traverse(function(C2){const at=C2.material;if(at)if(Array.isArray(at))for(let wt=0;wt<at.length;wt++){const Nt=at[wt];de(Nt,p2,C2),E2.add(Nt)}else de(at,p2,C2),E2.add(at)}),N0.pop(),u0=null,E2},this.compileAsync=function(W0,a2,p2=null){const E2=this.compile(W0,a2,p2);return new Promise(C2=>{function at(){if(E2.forEach(function(wt){jt.get(wt).currentProgram.isReady()&&E2.delete(wt)}),E2.size===0){C2(W0);return}setTimeout(at,10)}Mt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let ee=null;function Le(W0){ee&&ee(W0)}function ui(){Ze.stop()}function ye(){Ze.start()}const Ze=new Xl;Ze.setAnimationLoop(Le),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(W0){ee=W0,rt.setAnimationLoop(W0),W0===null?Ze.stop():Ze.start()},rt.addEventListener("sessionstart",ui),rt.addEventListener("sessionend",ye),this.render=function(W0,a2){if(a2!==void 0&&a2.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O0===!0)return;W0.matrixWorldAutoUpdate===!0&&W0.updateMatrixWorld(),a2.parent===null&&a2.matrixWorldAutoUpdate===!0&&a2.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(a2),a2=rt.getCamera()),W0.isScene===!0&&W0.onBeforeRender(T0,W0,a2,D0),u0=xt.get(W0,N0.length),u0.init(),N0.push(u0),z2.multiplyMatrices(a2.projectionMatrix,a2.matrixWorldInverse),Y2.setFromProjectionMatrix(z2),g2=this.localClippingEnabled,c2=Bt.init(this.clippingPlanes,g2),C0=pt.get(W0,t0.length),C0.init(),t0.push(C0),Xi(W0,a2,0,T0.sortObjects),C0.finish(),T0.sortObjects===!0&&C0.sort(w2,f2),this.info.render.frame++,c2===!0&&Bt.beginShadows();const p2=u0.state.shadowsArray;if(W2.render(p2,W0,a2),c2===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1)&&ge.render(C0,W0),u0.setupLights(T0._useLegacyLights),a2.isArrayCamera){const E2=a2.cameras;for(let C2=0,at=E2.length;C2<at;C2++){const wt=E2[C2];xs(C0,W0,wt,wt.viewport)}}else xs(C0,W0,a2);D0!==null&&(z0.updateMultisampleRenderTarget(D0),z0.updateRenderTargetMipmap(D0)),W0.isScene===!0&&W0.onAfterRender(T0,W0,a2),bt.resetDefaultState(),V0=-1,h2=null,N0.pop(),N0.length>0?u0=N0[N0.length-1]:u0=null,t0.pop(),t0.length>0?C0=t0[t0.length-1]:C0=null};function Xi(W0,a2,p2,E2){if(W0.visible===!1)return;if(W0.layers.test(a2.layers)){if(W0.isGroup)p2=W0.renderOrder;else if(W0.isLOD)W0.autoUpdate===!0&&W0.update(a2);else if(W0.isLight)u0.pushLight(W0),W0.castShadow&&u0.pushShadow(W0);else if(W0.isSprite){if(!W0.frustumCulled||Y2.intersectsSprite(W0)){E2&&$2.setFromMatrixPosition(W0.matrixWorld).applyMatrix4(z2);const wt=U2.update(W0),Nt=W0.material;Nt.visible&&C0.push(W0,wt,Nt,p2,$2.z,null)}}else if((W0.isMesh||W0.isLine||W0.isPoints)&&(!W0.frustumCulled||Y2.intersectsObject(W0))){const wt=U2.update(W0),Nt=W0.material;if(E2&&(W0.boundingSphere!==void 0?(W0.boundingSphere===null&&W0.computeBoundingSphere(),$2.copy(W0.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),$2.copy(wt.boundingSphere.center)),$2.applyMatrix4(W0.matrixWorld).applyMatrix4(z2)),Array.isArray(Nt)){const kt=wt.groups;for(let Yt=0,Kt=kt.length;Yt<Kt;Yt++){const Xt=kt[Yt],Qe=Nt[Xt.materialIndex];Qe&&Qe.visible&&C0.push(W0,wt,Qe,p2,$2.z,Xt)}}else Nt.visible&&C0.push(W0,wt,Nt,p2,$2.z,null)}}const at=W0.children;for(let wt=0,Nt=at.length;wt<Nt;wt++)Xi(at[wt],a2,p2,E2)}function xs(W0,a2,p2,E2){const C2=W0.opaque,at=W0.transmissive,wt=W0.transparent;u0.setupLightsView(p2),c2===!0&&Bt.setGlobalState(T0.clippingPlanes,p2),at.length>0&&K4(C2,at,a2,p2),E2&&yt.viewport(R0.copy(E2)),C2.length>0&&Nr(C2,a2,p2),at.length>0&&Nr(at,a2,p2),wt.length>0&&Nr(wt,a2,p2),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function K4(W0,a2,p2,E2){if((p2.isScene===!0?p2.overrideMaterial:null)!==null)return;const at=Lt.isWebGL2;P2===null&&(P2=new pr(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")?fs:lr,minFilter:z1,samples:at?4:0})),T0.getDrawingBufferSize(J2),at?P2.setSize(J2.x,J2.y):P2.setSize(V4(J2.x),V4(J2.y));const wt=T0.getRenderTarget();T0.setRenderTarget(P2),T0.getClearColor(N2),o2=T0.getClearAlpha(),o2<1&&T0.setClearColor(16777215,.5),T0.clear();const Nt=T0.toneMapping;T0.toneMapping=ar,Nr(W0,p2,E2),z0.updateMultisampleRenderTarget(P2),z0.updateRenderTargetMipmap(P2);let kt=!1;for(let Yt=0,Kt=a2.length;Yt<Kt;Yt++){const Xt=a2[Yt],Qe=Xt.object,rn=Xt.geometry,gi=Xt.material,qn=Xt.group;if(gi.side===t1&&Qe.layers.test(E2.layers)){const qe=gi.side;gi.side=dn,gi.needsUpdate=!0,ws(Qe,p2,E2,rn,gi,qn),gi.side=qe,gi.needsUpdate=!0,kt=!0}}kt===!0&&(z0.updateMultisampleRenderTarget(P2),z0.updateRenderTargetMipmap(P2)),T0.setRenderTarget(wt),T0.setClearColor(N2,o2),T0.toneMapping=Nt}function Nr(W0,a2,p2){const E2=a2.isScene===!0?a2.overrideMaterial:null;for(let C2=0,at=W0.length;C2<at;C2++){const wt=W0[C2],Nt=wt.object,kt=wt.geometry,Yt=E2===null?wt.material:E2,Kt=wt.group;Nt.layers.test(p2.layers)&&ws(Nt,a2,p2,kt,Yt,Kt)}}function ws(W0,a2,p2,E2,C2,at){W0.onBeforeRender(T0,a2,p2,E2,C2,at),W0.modelViewMatrix.multiplyMatrices(p2.matrixWorldInverse,W0.matrixWorld),W0.normalMatrix.getNormalMatrix(W0.modelViewMatrix),C2.onBeforeRender(T0,a2,p2,E2,W0,at),C2.transparent===!0&&C2.side===t1&&C2.forceSinglePass===!1?(C2.side=dn,C2.needsUpdate=!0,T0.renderBufferDirect(p2,a2,E2,C2,W0,at),C2.side=y1,C2.needsUpdate=!0,T0.renderBufferDirect(p2,a2,E2,C2,W0,at),C2.side=t1):T0.renderBufferDirect(p2,a2,E2,C2,W0,at),W0.onAfterRender(T0,a2,p2,E2,C2,at)}function Un(W0,a2,p2){a2.isScene!==!0&&(a2=Dt);const E2=jt.get(W0),C2=u0.state.lights,at=u0.state.shadowsArray,wt=C2.state.version,Nt=vt.getParameters(W0,C2.state,at,a2,p2),kt=vt.getProgramCacheKey(Nt);let Yt=E2.programs;E2.environment=W0.isMeshStandardMaterial?a2.environment:null,E2.fog=a2.fog,E2.envMap=(W0.isMeshStandardMaterial?v2:F0).get(W0.envMap||E2.environment),Yt===void 0&&(W0.addEventListener("dispose",H2),Yt=new Map,E2.programs=Yt);let Kt=Yt.get(kt);if(Kt!==void 0){if(E2.currentProgram===Kt&&E2.lightsStateVersion===wt)return Ms(W0,Nt),Kt}else Nt.uniforms=vt.getUniforms(W0),W0.onBuild(p2,Nt,T0),W0.onBeforeCompile(Nt,T0),Kt=vt.acquireProgram(Nt,kt),Yt.set(kt,Kt),E2.uniforms=Nt.uniforms;const Xt=E2.uniforms;return(!W0.isShaderMaterial&&!W0.isRawShaderMaterial||W0.clipping===!0)&&(Xt.clippingPlanes=Bt.uniform),Ms(W0,Nt),E2.needsLights=J4(W0),E2.lightsStateVersion=wt,E2.needsLights&&(Xt.ambientLightColor.value=C2.state.ambient,Xt.lightProbe.value=C2.state.probe,Xt.directionalLights.value=C2.state.directional,Xt.directionalLightShadows.value=C2.state.directionalShadow,Xt.spotLights.value=C2.state.spot,Xt.spotLightShadows.value=C2.state.spotShadow,Xt.rectAreaLights.value=C2.state.rectArea,Xt.ltc_1.value=C2.state.rectAreaLTC1,Xt.ltc_2.value=C2.state.rectAreaLTC2,Xt.pointLights.value=C2.state.point,Xt.pointLightShadows.value=C2.state.pointShadow,Xt.hemisphereLights.value=C2.state.hemi,Xt.directionalShadowMap.value=C2.state.directionalShadowMap,Xt.directionalShadowMatrix.value=C2.state.directionalShadowMatrix,Xt.spotShadowMap.value=C2.state.spotShadowMap,Xt.spotLightMatrix.value=C2.state.spotLightMatrix,Xt.spotLightMap.value=C2.state.spotLightMap,Xt.pointShadowMap.value=C2.state.pointShadowMap,Xt.pointShadowMatrix.value=C2.state.pointShadowMatrix),E2.currentProgram=Kt,E2.uniformsList=null,Kt}function X1(W0){if(W0.uniformsList===null){const a2=W0.currentProgram.getUniforms();W0.uniformsList=D4.seqWithValue(a2.seq,W0.uniforms)}return W0.uniformsList}function Ms(W0,a2){const p2=jt.get(W0);p2.outputColorSpace=a2.outputColorSpace,p2.batching=a2.batching,p2.instancing=a2.instancing,p2.instancingColor=a2.instancingColor,p2.skinning=a2.skinning,p2.morphTargets=a2.morphTargets,p2.morphNormals=a2.morphNormals,p2.morphColors=a2.morphColors,p2.morphTargetsCount=a2.morphTargetsCount,p2.numClippingPlanes=a2.numClippingPlanes,p2.numIntersection=a2.numClipIntersection,p2.vertexAlphas=a2.vertexAlphas,p2.vertexTangents=a2.vertexTangents,p2.toneMapping=a2.toneMapping}function Z4(W0,a2,p2,E2,C2){a2.isScene!==!0&&(a2=Dt),z0.resetTextureUnits();const at=a2.fog,wt=E2.isMeshStandardMaterial?a2.environment:null,Nt=D0===null?T0.outputColorSpace:D0.isXRRenderTarget===!0?D0.texture.colorSpace:j1,kt=(E2.isMeshStandardMaterial?v2:F0).get(E2.envMap||wt),Yt=E2.vertexColors===!0&&!!p2.attributes.color&&p2.attributes.color.itemSize===4,Kt=!!p2.attributes.tangent&&(!!E2.normalMap||E2.anisotropy>0),Xt=!!p2.morphAttributes.position,Qe=!!p2.morphAttributes.normal,rn=!!p2.morphAttributes.color;let gi=ar;E2.toneMapped&&(D0===null||D0.isXRRenderTarget===!0)&&(gi=T0.toneMapping);const qn=p2.morphAttributes.position||p2.morphAttributes.normal||p2.morphAttributes.color,qe=qn!==void 0?qn.length:0,ne=jt.get(E2),q1=u0.state.lights;if(c2===!0&&(g2===!0||W0!==h2)){const yn=W0===h2&&E2.id===V0;Bt.setState(E2,W0,yn)}let Je=!1;E2.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==q1.state.version||ne.outputColorSpace!==Nt||C2.isBatchedMesh&&ne.batching===!1||!C2.isBatchedMesh&&ne.batching===!0||C2.isInstancedMesh&&ne.instancing===!1||!C2.isInstancedMesh&&ne.instancing===!0||C2.isSkinnedMesh&&ne.skinning===!1||!C2.isSkinnedMesh&&ne.skinning===!0||C2.isInstancedMesh&&ne.instancingColor===!0&&C2.instanceColor===null||C2.isInstancedMesh&&ne.instancingColor===!1&&C2.instanceColor!==null||ne.envMap!==kt||E2.fog===!0&&ne.fog!==at||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==Bt.numPlanes||ne.numIntersection!==Bt.numIntersection)||ne.vertexAlphas!==Yt||ne.vertexTangents!==Kt||ne.morphTargets!==Xt||ne.morphNormals!==Qe||ne.morphColors!==rn||ne.toneMapping!==gi||Lt.isWebGL2===!0&&ne.morphTargetsCount!==qe)&&(Je=!0):(Je=!0,ne.__version=E2.version);let S1=ne.currentProgram;Je===!0&&(S1=Un(E2,a2,C2));let Ts=!1,$e=!1,Go=!1;const fi=S1.getUniforms(),x1=ne.uniforms;if(yt.useProgram(S1.program)&&(Ts=!0,$e=!0,Go=!0),E2.id!==V0&&(V0=E2.id,$e=!0),Ts||h2!==W0){fi.setValue(l2,"projectionMatrix",W0.projectionMatrix),fi.setValue(l2,"viewMatrix",W0.matrixWorldInverse);const yn=fi.map.cameraPosition;yn!==void 0&&yn.setValue(l2,$2.setFromMatrixPosition(W0.matrixWorld)),Lt.logarithmicDepthBuffer&&fi.setValue(l2,"logDepthBufFC",2/(Math.log(W0.far+1)/Math.LN2)),(E2.isMeshPhongMaterial||E2.isMeshToonMaterial||E2.isMeshLambertMaterial||E2.isMeshBasicMaterial||E2.isMeshStandardMaterial||E2.isShaderMaterial)&&fi.setValue(l2,"isOrthographic",W0.isOrthographicCamera===!0),h2!==W0&&(h2=W0,$e=!0,Go=!0)}if(C2.isSkinnedMesh){fi.setOptional(l2,C2,"bindMatrix"),fi.setOptional(l2,C2,"bindMatrixInverse");const yn=C2.skeleton;yn&&(Lt.floatVertexTextures?(yn.boneTexture===null&&yn.computeBoneTexture(),fi.setValue(l2,"boneTexture",yn.boneTexture,z0)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}C2.isBatchedMesh&&(fi.setOptional(l2,C2,"batchingTexture"),fi.setValue(l2,"batchingTexture",C2._matricesTexture,z0));const Wo=p2.morphAttributes;if((Wo.position!==void 0||Wo.normal!==void 0||Wo.color!==void 0&&Lt.isWebGL2===!0)&&Zt.update(C2,p2,S1),($e||ne.receiveShadow!==C2.receiveShadow)&&(ne.receiveShadow=C2.receiveShadow,fi.setValue(l2,"receiveShadow",C2.receiveShadow)),E2.isMeshGouraudMaterial&&E2.envMap!==null&&(x1.envMap.value=kt,x1.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),$e&&(fi.setValue(l2,"toneMappingExposure",T0.toneMappingExposure),ne.needsLights&&Q4(x1,Go),at&&E2.fog===!0&&nt.refreshFogUniforms(x1,at),nt.refreshMaterialUniforms(x1,E2,k2,$0,P2),D4.upload(l2,X1(ne),x1,z0)),E2.isShaderMaterial&&E2.uniformsNeedUpdate===!0&&(D4.upload(l2,X1(ne),x1,z0),E2.uniformsNeedUpdate=!1),E2.isSpriteMaterial&&fi.setValue(l2,"center",C2.center),fi.setValue(l2,"modelViewMatrix",C2.modelViewMatrix),fi.setValue(l2,"normalMatrix",C2.normalMatrix),fi.setValue(l2,"modelMatrix",C2.matrixWorld),E2.isShaderMaterial||E2.isRawShaderMaterial){const yn=E2.uniformsGroups;for(let Gn=0,$4=yn.length;Gn<$4;Gn++)if(Lt.isWebGL2){const As=yn[Gn];Z0.update(As,S1),Z0.bind(As,S1)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return S1}function Q4(W0,a2){W0.ambientLightColor.needsUpdate=a2,W0.lightProbe.needsUpdate=a2,W0.directionalLights.needsUpdate=a2,W0.directionalLightShadows.needsUpdate=a2,W0.pointLights.needsUpdate=a2,W0.pointLightShadows.needsUpdate=a2,W0.spotLights.needsUpdate=a2,W0.spotLightShadows.needsUpdate=a2,W0.rectAreaLights.needsUpdate=a2,W0.hemisphereLights.needsUpdate=a2}function J4(W0){return W0.isMeshLambertMaterial||W0.isMeshToonMaterial||W0.isMeshPhongMaterial||W0.isMeshStandardMaterial||W0.isShadowMaterial||W0.isShaderMaterial&&W0.lights===!0}this.getActiveCubeFace=function(){return k0},this.getActiveMipmapLevel=function(){return L0},this.getRenderTarget=function(){return D0},this.setRenderTargetTextures=function(W0,a2,p2){jt.get(W0.texture).__webglTexture=a2,jt.get(W0.depthTexture).__webglTexture=p2;const E2=jt.get(W0);E2.__hasExternalTextures=!0,E2.__hasExternalTextures&&(E2.__autoAllocateDepthBuffer=p2===void 0,E2.__autoAllocateDepthBuffer||Mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),E2.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(W0,a2){const p2=jt.get(W0);p2.__webglFramebuffer=a2,p2.__useDefaultFramebuffer=a2===void 0},this.setRenderTarget=function(W0,a2=0,p2=0){D0=W0,k0=a2,L0=p2;let E2=!0,C2=null,at=!1,wt=!1;if(W0){const kt=jt.get(W0);kt.__useDefaultFramebuffer!==void 0?(yt.bindFramebuffer(l2.FRAMEBUFFER,null),E2=!1):kt.__webglFramebuffer===void 0?z0.setupRenderTarget(W0):kt.__hasExternalTextures&&z0.rebindTextures(W0,jt.get(W0.texture).__webglTexture,jt.get(W0.depthTexture).__webglTexture);const Yt=W0.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(wt=!0);const Kt=jt.get(W0).__webglFramebuffer;W0.isWebGLCubeRenderTarget?(Array.isArray(Kt[a2])?C2=Kt[a2][p2]:C2=Kt[a2],at=!0):Lt.isWebGL2&&W0.samples>0&&z0.useMultisampledRTT(W0)===!1?C2=jt.get(W0).__webglMultisampledFramebuffer:Array.isArray(Kt)?C2=Kt[p2]:C2=Kt,R0.copy(W0.viewport),j0.copy(W0.scissor),R2=W0.scissorTest}else R0.copy(F2).multiplyScalar(k2).floor(),j0.copy(L2).multiplyScalar(k2).floor(),R2=X2;if(yt.bindFramebuffer(l2.FRAMEBUFFER,C2)&&Lt.drawBuffers&&E2&&yt.drawBuffers(W0,C2),yt.viewport(R0),yt.scissor(j0),yt.setScissorTest(R2),at){const kt=jt.get(W0.texture);l2.framebufferTexture2D(l2.FRAMEBUFFER,l2.COLOR_ATTACHMENT0,l2.TEXTURE_CUBE_MAP_POSITIVE_X+a2,kt.__webglTexture,p2)}else if(wt){const kt=jt.get(W0.texture),Yt=a2||0;l2.framebufferTextureLayer(l2.FRAMEBUFFER,l2.COLOR_ATTACHMENT0,kt.__webglTexture,p2||0,Yt)}V0=-1},this.readRenderTargetPixels=function(W0,a2,p2,E2,C2,at,wt){if(!(W0&&W0.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=jt.get(W0).__webglFramebuffer;if(W0.isWebGLCubeRenderTarget&&wt!==void 0&&(Nt=Nt[wt]),Nt){yt.bindFramebuffer(l2.FRAMEBUFFER,Nt);try{const kt=W0.texture,Yt=kt.format,Kt=kt.type;if(Yt!==bn&&ct.convert(Yt)!==l2.getParameter(l2.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xt=Kt===fs&&(Mt.has("EXT_color_buffer_half_float")||Lt.isWebGL2&&Mt.has("EXT_color_buffer_float"));if(Kt!==lr&&ct.convert(Kt)!==l2.getParameter(l2.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Kt===f1&&(Lt.isWebGL2||Mt.has("OES_texture_float")||Mt.has("WEBGL_color_buffer_float")))&&!Xt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}a2>=0&&a2<=W0.width-E2&&p2>=0&&p2<=W0.height-C2&&l2.readPixels(a2,p2,E2,C2,ct.convert(Yt),ct.convert(Kt),at)}finally{const kt=D0!==null?jt.get(D0).__webglFramebuffer:null;yt.bindFramebuffer(l2.FRAMEBUFFER,kt)}}},this.copyFramebufferToTexture=function(W0,a2,p2=0){const E2=Math.pow(2,-p2),C2=Math.floor(a2.image.width*E2),at=Math.floor(a2.image.height*E2);z0.setTexture2D(a2,0),l2.copyTexSubImage2D(l2.TEXTURE_2D,p2,0,0,W0.x,W0.y,C2,at),yt.unbindTexture()},this.copyTextureToTexture=function(W0,a2,p2,E2=0){const C2=a2.image.width,at=a2.image.height,wt=ct.convert(p2.format),Nt=ct.convert(p2.type);z0.setTexture2D(p2,0),l2.pixelStorei(l2.UNPACK_FLIP_Y_WEBGL,p2.flipY),l2.pixelStorei(l2.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p2.premultiplyAlpha),l2.pixelStorei(l2.UNPACK_ALIGNMENT,p2.unpackAlignment),a2.isDataTexture?l2.texSubImage2D(l2.TEXTURE_2D,E2,W0.x,W0.y,C2,at,wt,Nt,a2.image.data):a2.isCompressedTexture?l2.compressedTexSubImage2D(l2.TEXTURE_2D,E2,W0.x,W0.y,a2.mipmaps[0].width,a2.mipmaps[0].height,wt,a2.mipmaps[0].data):l2.texSubImage2D(l2.TEXTURE_2D,E2,W0.x,W0.y,wt,Nt,a2.image),E2===0&&p2.generateMipmaps&&l2.generateMipmap(l2.TEXTURE_2D),yt.unbindTexture()},this.copyTextureToTexture3D=function(W0,a2,p2,E2,C2=0){if(T0.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const at=W0.max.x-W0.min.x+1,wt=W0.max.y-W0.min.y+1,Nt=W0.max.z-W0.min.z+1,kt=ct.convert(E2.format),Yt=ct.convert(E2.type);let Kt;if(E2.isData3DTexture)z0.setTexture3D(E2,0),Kt=l2.TEXTURE_3D;else if(E2.isDataArrayTexture||E2.isCompressedArrayTexture)z0.setTexture2DArray(E2,0),Kt=l2.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}l2.pixelStorei(l2.UNPACK_FLIP_Y_WEBGL,E2.flipY),l2.pixelStorei(l2.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E2.premultiplyAlpha),l2.pixelStorei(l2.UNPACK_ALIGNMENT,E2.unpackAlignment);const Xt=l2.getParameter(l2.UNPACK_ROW_LENGTH),Qe=l2.getParameter(l2.UNPACK_IMAGE_HEIGHT),rn=l2.getParameter(l2.UNPACK_SKIP_PIXELS),gi=l2.getParameter(l2.UNPACK_SKIP_ROWS),qn=l2.getParameter(l2.UNPACK_SKIP_IMAGES),qe=p2.isCompressedTexture?p2.mipmaps[C2]:p2.image;l2.pixelStorei(l2.UNPACK_ROW_LENGTH,qe.width),l2.pixelStorei(l2.UNPACK_IMAGE_HEIGHT,qe.height),l2.pixelStorei(l2.UNPACK_SKIP_PIXELS,W0.min.x),l2.pixelStorei(l2.UNPACK_SKIP_ROWS,W0.min.y),l2.pixelStorei(l2.UNPACK_SKIP_IMAGES,W0.min.z),p2.isDataTexture||p2.isData3DTexture?l2.texSubImage3D(Kt,C2,a2.x,a2.y,a2.z,at,wt,Nt,kt,Yt,qe.data):p2.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),l2.compressedTexSubImage3D(Kt,C2,a2.x,a2.y,a2.z,at,wt,Nt,kt,qe.data)):l2.texSubImage3D(Kt,C2,a2.x,a2.y,a2.z,at,wt,Nt,kt,Yt,qe),l2.pixelStorei(l2.UNPACK_ROW_LENGTH,Xt),l2.pixelStorei(l2.UNPACK_IMAGE_HEIGHT,Qe),l2.pixelStorei(l2.UNPACK_SKIP_PIXELS,rn),l2.pixelStorei(l2.UNPACK_SKIP_ROWS,gi),l2.pixelStorei(l2.UNPACK_SKIP_IMAGES,qn),C2===0&&E2.generateMipmaps&&l2.generateMipmap(Kt),yt.unbindTexture()},this.initTexture=function(W0){W0.isCubeTexture?z0.setTextureCube(W0,0):W0.isData3DTexture?z0.setTexture3D(W0,0):W0.isDataArrayTexture||W0.isCompressedArrayTexture?z0.setTexture2DArray(W0,0):z0.setTexture2D(W0,0),yt.unbindTexture()},this.resetState=function(){k0=0,L0=0,D0=null,yt.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return H1}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(a){this._outputColorSpace=a;const f=this.getContext();f.drawingBufferColorSpace=a===Y6?"display-p3":"srgb",f.unpackColorSpace=Ne.workingColorSpace===j4?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===vi?kr:kl}set outputEncoding(a){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=a===kr?vi:j1}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(a){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=a}}class Ii0 extends t5{}Ii0.prototype.isWebGL1Renderer=!0;class Di0 extends _i{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(a,f){return super.copy(a,f),a.background!==null&&(this.background=a.background.clone()),a.environment!==null&&(this.environment=a.environment.clone()),a.fog!==null&&(this.fog=a.fog.clone()),this.backgroundBlurriness=a.backgroundBlurriness,this.backgroundIntensity=a.backgroundIntensity,a.overrideMaterial!==null&&(this.overrideMaterial=a.overrideMaterial.clone()),this.matrixAutoUpdate=a.matrixAutoUpdate,this}toJSON(a){const f=super.toJSON(a);return this.fog!==null&&(f.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(f.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(f.object.backgroundIntensity=this.backgroundIntensity),f}}const za=new K0,Ha=new Fe,ja=new Fe,Pi0=new K0,ba=new ue,C4=new K0,v6=new ko,Xa=new ue,g6=new b4;class Li0 extends Zi{constructor(a,f){super(a,f),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=R_,this.bindMatrix=new ue,this.bindMatrixInverse=new ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const a=this.geometry;this.boundingBox===null&&(this.boundingBox=new Lo),this.boundingBox.makeEmpty();const f=a.getAttribute("position");for(let g=0;g<f.count;g++)this.getVertexPosition(g,C4),this.boundingBox.expandByPoint(C4)}computeBoundingSphere(){const a=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ko),this.boundingSphere.makeEmpty();const f=a.getAttribute("position");for(let g=0;g<f.count;g++)this.getVertexPosition(g,C4),this.boundingSphere.expandByPoint(C4)}copy(a,f){return super.copy(a,f),this.bindMode=a.bindMode,this.bindMatrix.copy(a.bindMatrix),this.bindMatrixInverse.copy(a.bindMatrixInverse),this.skeleton=a.skeleton,a.boundingBox!==null&&(this.boundingBox=a.boundingBox.clone()),a.boundingSphere!==null&&(this.boundingSphere=a.boundingSphere.clone()),this}raycast(a,f){const g=this.material,y=this.matrixWorld;g!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),v6.copy(this.boundingSphere),v6.applyMatrix4(y),a.ray.intersectsSphere(v6)!==!1&&(Xa.copy(y).invert(),g6.copy(a.ray).applyMatrix4(Xa),!(this.boundingBox!==null&&g6.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(a,f,g6)))}getVertexPosition(a,f){return super.getVertexPosition(a,f),this.applyBoneTransform(a,f),f}bind(a,f){this.skeleton=a,f===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),f=this.matrixWorld),this.bindMatrix.copy(f),this.bindMatrixInverse.copy(f).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const a=new Fe,f=this.geometry.attributes.skinWeight;for(let g=0,y=f.count;g<y;g++){a.fromBufferAttribute(f,g);const P=1/a.manhattanLength();P!==1/0?a.multiplyScalar(P):a.set(1,0,0,0),f.setXYZW(g,a.x,a.y,a.z,a.w)}}updateMatrixWorld(a){super.updateMatrixWorld(a),this.bindMode===R_?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===UJ?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(a,f){const g=this.skeleton,y=this.geometry;Ha.fromBufferAttribute(y.attributes.skinIndex,a),ja.fromBufferAttribute(y.attributes.skinWeight,a),za.copy(f).applyMatrix4(this.bindMatrix),f.set(0,0,0);for(let P=0;P<4;P++){const G=ja.getComponent(P);if(G!==0){const W=Ha.getComponent(P);ba.multiplyMatrices(g.bones[W].matrixWorld,g.boneInverses[W]),f.addScaledVector(Pi0.copy(za).applyMatrix4(ba),G)}}return f.applyMatrix4(this.bindMatrixInverse)}}class $6 extends _i{constructor(){super(),this.isBone=!0,this.type="Bone"}}class e5 extends nn{constructor(a=null,f=1,g=1,y,P,G,W,X,Y=Pi,Q=Pi,o0,a0){super(null,G,W,X,Y,Q,y,P,o0,a0),this.isDataTexture=!0,this.image={data:a,width:f,height:g},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qa=new ue,ki0=new ue;class t8{constructor(a=[],f=[]){this.uuid=fr(),this.bones=a.slice(0),this.boneInverses=f,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const a=this.bones,f=this.boneInverses;if(this.boneMatrices=new Float32Array(a.length*16),f.length===0)this.calculateInverses();else if(a.length!==f.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let g=0,y=this.bones.length;g<y;g++)this.boneInverses.push(new ue)}}calculateInverses(){this.boneInverses.length=0;for(let a=0,f=this.bones.length;a<f;a++){const g=new ue;this.bones[a]&&g.copy(this.bones[a].matrixWorld).invert(),this.boneInverses.push(g)}}pose(){for(let a=0,f=this.bones.length;a<f;a++){const g=this.bones[a];g&&g.matrixWorld.copy(this.boneInverses[a]).invert()}for(let a=0,f=this.bones.length;a<f;a++){const g=this.bones[a];g&&(g.parent&&g.parent.isBone?(g.matrix.copy(g.parent.matrixWorld).invert(),g.matrix.multiply(g.matrixWorld)):g.matrix.copy(g.matrixWorld),g.matrix.decompose(g.position,g.quaternion,g.scale))}}update(){const a=this.bones,f=this.boneInverses,g=this.boneMatrices,y=this.boneTexture;for(let P=0,G=a.length;P<G;P++){const W=a[P]?a[P].matrixWorld:ki0;qa.multiplyMatrices(W,f[P]),qa.toArray(g,P*16)}y!==null&&(y.needsUpdate=!0)}clone(){return new t8(this.bones,this.boneInverses)}computeBoneTexture(){let a=Math.sqrt(this.bones.length*4);a=Math.ceil(a/4)*4,a=Math.max(a,4);const f=new Float32Array(a*a*4);f.set(this.boneMatrices);const g=new e5(f,a,a,bn,f1);return g.needsUpdate=!0,this.boneMatrices=f,this.boneTexture=g,this}getBoneByName(a){for(let f=0,g=this.bones.length;f<g;f++){const y=this.bones[f];if(y.name===a)return y}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(a,f){this.uuid=a.uuid;for(let g=0,y=a.bones.length;g<y;g++){const P=a.bones[g];let G=f[P];G===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",P),G=new $6),this.bones.push(G),this.boneInverses.push(new ue().fromArray(a.boneInverses[g]))}return this.init(),this}toJSON(){const a={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};a.uuid=this.uuid;const f=this.bones,g=this.boneInverses;for(let y=0,P=f.length;y<P;y++){const G=f[y];a.bones.push(G.uuid);const W=g[y];a.boneInverses.push(W.toArray())}return a}}class e8 extends vs{constructor(a){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(a)}copy(a){return super.copy(a),this.color.copy(a.color),this.map=a.map,this.linewidth=a.linewidth,this.linecap=a.linecap,this.linejoin=a.linejoin,this.fog=a.fog,this}}const Ya=new K0,Ka=new K0,Za=new ue,C6=new b4,S4=new ko;class i5 extends _i{constructor(a=new Nn,f=new e8){super(),this.isLine=!0,this.type="Line",this.geometry=a,this.material=f,this.updateMorphTargets()}copy(a,f){return super.copy(a,f),this.material=Array.isArray(a.material)?a.material.slice():a.material,this.geometry=a.geometry,this}computeLineDistances(){const a=this.geometry;if(a.index===null){const f=a.attributes.position,g=[0];for(let y=1,P=f.count;y<P;y++)Ya.fromBufferAttribute(f,y-1),Ka.fromBufferAttribute(f,y),g[y]=g[y-1],g[y]+=Ya.distanceTo(Ka);a.setAttribute("lineDistance",new pi(g,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(a,f){const g=this.geometry,y=this.matrixWorld,P=a.params.Line.threshold,G=g.drawRange;if(g.boundingSphere===null&&g.computeBoundingSphere(),S4.copy(g.boundingSphere),S4.applyMatrix4(y),S4.radius+=P,a.ray.intersectsSphere(S4)===!1)return;Za.copy(y).invert(),C6.copy(a.ray).applyMatrix4(Za);const W=P/((this.scale.x+this.scale.y+this.scale.z)/3),X=W*W,Y=new K0,Q=new K0,o0=new K0,a0=new K0,m0=this.isLineSegments?2:1,v0=g.index,u0=g.attributes.position;if(v0!==null){const t0=Math.max(0,G.start),N0=Math.min(v0.count,G.start+G.count);for(let T0=t0,O0=N0-1;T0<O0;T0+=m0){const k0=v0.getX(T0),L0=v0.getX(T0+1);if(Y.fromBufferAttribute(u0,k0),Q.fromBufferAttribute(u0,L0),C6.distanceSqToSegment(Y,Q,a0,o0)>X)continue;a0.applyMatrix4(this.matrixWorld);const V0=a.ray.origin.distanceTo(a0);V0<a.near||V0>a.far||f.push({distance:V0,point:o0.clone().applyMatrix4(this.matrixWorld),index:T0,face:null,faceIndex:null,object:this})}}else{const t0=Math.max(0,G.start),N0=Math.min(u0.count,G.start+G.count);for(let T0=t0,O0=N0-1;T0<O0;T0+=m0){if(Y.fromBufferAttribute(u0,T0),Q.fromBufferAttribute(u0,T0+1),C6.distanceSqToSegment(Y,Q,a0,o0)>X)continue;a0.applyMatrix4(this.matrixWorld);const L0=a.ray.origin.distanceTo(a0);L0<a.near||L0>a.far||f.push({distance:L0,point:o0.clone().applyMatrix4(this.matrixWorld),index:T0,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const f=this.geometry.morphAttributes,g=Object.keys(f);if(g.length>0){const y=f[g[0]];if(y!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let P=0,G=y.length;P<G;P++){const W=y[P].name||String(P);this.morphTargetInfluences.push(0),this.morphTargetDictionary[W]=P}}}}}const Qa=new K0,Ja=new K0;class Oi0 extends i5{constructor(a,f){super(a,f),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const a=this.geometry;if(a.index===null){const f=a.attributes.position,g=[];for(let y=0,P=f.count;y<P;y+=2)Qa.fromBufferAttribute(f,y),Ja.fromBufferAttribute(f,y+1),g[y]=y===0?0:g[y-1],g[y+1]=g[y]+Qa.distanceTo(Ja);a.setAttribute("lineDistance",new pi(g,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class g1{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(a,f){const g=this.getUtoTmapping(a);return this.getPoint(g,f)}getPoints(a=5){const f=[];for(let g=0;g<=a;g++)f.push(this.getPoint(g/a));return f}getSpacedPoints(a=5){const f=[];for(let g=0;g<=a;g++)f.push(this.getPointAt(g/a));return f}getLength(){const a=this.getLengths();return a[a.length-1]}getLengths(a=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const f=[];let g,y=this.getPoint(0),P=0;f.push(0);for(let G=1;G<=a;G++)g=this.getPoint(G/a),P+=g.distanceTo(y),f.push(P),y=g;return this.cacheArcLengths=f,f}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(a,f){const g=this.getLengths();let y=0;const P=g.length;let G;f?G=f:G=a*g[P-1];let W=0,X=P-1,Y;for(;W<=X;)if(y=Math.floor(W+(X-W)/2),Y=g[y]-G,Y<0)W=y+1;else if(Y>0)X=y-1;else{X=y;break}if(y=X,g[y]===G)return y/(P-1);const Q=g[y],a0=g[y+1]-Q,m0=(G-Q)/a0;return(y+m0)/(P-1)}getTangent(a,f){let y=a-1e-4,P=a+1e-4;y<0&&(y=0),P>1&&(P=1);const G=this.getPoint(y),W=this.getPoint(P),X=f||(G.isVector2?new st:new K0);return X.copy(W).sub(G).normalize(),X}getTangentAt(a,f){const g=this.getUtoTmapping(a);return this.getTangent(g,f)}computeFrenetFrames(a,f){const g=new K0,y=[],P=[],G=[],W=new K0,X=new ue;for(let m0=0;m0<=a;m0++){const v0=m0/a;y[m0]=this.getTangentAt(v0,new K0)}P[0]=new K0,G[0]=new K0;let Y=Number.MAX_VALUE;const Q=Math.abs(y[0].x),o0=Math.abs(y[0].y),a0=Math.abs(y[0].z);Q<=Y&&(Y=Q,g.set(1,0,0)),o0<=Y&&(Y=o0,g.set(0,1,0)),a0<=Y&&g.set(0,0,1),W.crossVectors(y[0],g).normalize(),P[0].crossVectors(y[0],W),G[0].crossVectors(y[0],P[0]);for(let m0=1;m0<=a;m0++){if(P[m0]=P[m0-1].clone(),G[m0]=G[m0-1].clone(),W.crossVectors(y[m0-1],y[m0]),W.length()>Number.EPSILON){W.normalize();const v0=Math.acos(Li(y[m0-1].dot(y[m0]),-1,1));P[m0].applyMatrix4(X.makeRotationAxis(W,v0))}G[m0].crossVectors(y[m0],P[m0])}if(f===!0){let m0=Math.acos(Li(P[0].dot(P[a]),-1,1));m0/=a,y[0].dot(W.crossVectors(P[0],P[a]))>0&&(m0=-m0);for(let v0=1;v0<=a;v0++)P[v0].applyMatrix4(X.makeRotationAxis(y[v0],m0*v0)),G[v0].crossVectors(y[v0],P[v0])}return{tangents:y,normals:P,binormals:G}}clone(){return new this.constructor().copy(this)}copy(a){return this.arcLengthDivisions=a.arcLengthDivisions,this}toJSON(){const a={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return a.arcLengthDivisions=this.arcLengthDivisions,a.type=this.type,a}fromJSON(a){return this.arcLengthDivisions=a.arcLengthDivisions,this}}class i8 extends g1{constructor(a=0,f=0,g=1,y=1,P=0,G=Math.PI*2,W=!1,X=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=a,this.aY=f,this.xRadius=g,this.yRadius=y,this.aStartAngle=P,this.aEndAngle=G,this.aClockwise=W,this.aRotation=X}getPoint(a,f){const g=f||new st,y=Math.PI*2;let P=this.aEndAngle-this.aStartAngle;const G=Math.abs(P)<Number.EPSILON;for(;P<0;)P+=y;for(;P>y;)P-=y;P<Number.EPSILON&&(G?P=0:P=y),this.aClockwise===!0&&!G&&(P===y?P=-y:P=P-y);const W=this.aStartAngle+a*P;let X=this.aX+this.xRadius*Math.cos(W),Y=this.aY+this.yRadius*Math.sin(W);if(this.aRotation!==0){const Q=Math.cos(this.aRotation),o0=Math.sin(this.aRotation),a0=X-this.aX,m0=Y-this.aY;X=a0*Q-m0*o0+this.aX,Y=a0*o0+m0*Q+this.aY}return g.set(X,Y)}copy(a){return super.copy(a),this.aX=a.aX,this.aY=a.aY,this.xRadius=a.xRadius,this.yRadius=a.yRadius,this.aStartAngle=a.aStartAngle,this.aEndAngle=a.aEndAngle,this.aClockwise=a.aClockwise,this.aRotation=a.aRotation,this}toJSON(){const a=super.toJSON();return a.aX=this.aX,a.aY=this.aY,a.xRadius=this.xRadius,a.yRadius=this.yRadius,a.aStartAngle=this.aStartAngle,a.aEndAngle=this.aEndAngle,a.aClockwise=this.aClockwise,a.aRotation=this.aRotation,a}fromJSON(a){return super.fromJSON(a),this.aX=a.aX,this.aY=a.aY,this.xRadius=a.xRadius,this.yRadius=a.yRadius,this.aStartAngle=a.aStartAngle,this.aEndAngle=a.aEndAngle,this.aClockwise=a.aClockwise,this.aRotation=a.aRotation,this}}class Fi0 extends i8{constructor(a,f,g,y,P,G){super(a,f,g,g,y,P,G),this.isArcCurve=!0,this.type="ArcCurve"}}function n8(){let E=0,a=0,f=0,g=0;function y(P,G,W,X){E=P,a=W,f=-3*P+3*G-2*W-X,g=2*P-2*G+W+X}return{initCatmullRom:function(P,G,W,X,Y){y(G,W,Y*(W-P),Y*(X-G))},initNonuniformCatmullRom:function(P,G,W,X,Y,Q,o0){let a0=(G-P)/Y-(W-P)/(Y+Q)+(W-G)/Q,m0=(W-G)/Q-(X-G)/(Q+o0)+(X-W)/o0;a0*=Q,m0*=Q,y(G,W,a0,m0)},calc:function(P){const G=P*P,W=G*P;return E+a*P+f*G+g*W}}}const x4=new K0,S6=new n8,x6=new n8,w6=new n8;class Bi0 extends g1{constructor(a=[],f=!1,g="centripetal",y=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=a,this.closed=f,this.curveType=g,this.tension=y}getPoint(a,f=new K0){const g=f,y=this.points,P=y.length,G=(P-(this.closed?0:1))*a;let W=Math.floor(G),X=G-W;this.closed?W+=W>0?0:(Math.floor(Math.abs(W)/P)+1)*P:X===0&&W===P-1&&(W=P-2,X=1);let Y,Q;this.closed||W>0?Y=y[(W-1)%P]:(x4.subVectors(y[0],y[1]).add(y[0]),Y=x4);const o0=y[W%P],a0=y[(W+1)%P];if(this.closed||W+2<P?Q=y[(W+2)%P]:(x4.subVectors(y[P-1],y[P-2]).add(y[P-1]),Q=x4),this.curveType==="centripetal"||this.curveType==="chordal"){const m0=this.curveType==="chordal"?.5:.25;let v0=Math.pow(Y.distanceToSquared(o0),m0),C0=Math.pow(o0.distanceToSquared(a0),m0),u0=Math.pow(a0.distanceToSquared(Q),m0);C0<1e-4&&(C0=1),v0<1e-4&&(v0=C0),u0<1e-4&&(u0=C0),S6.initNonuniformCatmullRom(Y.x,o0.x,a0.x,Q.x,v0,C0,u0),x6.initNonuniformCatmullRom(Y.y,o0.y,a0.y,Q.y,v0,C0,u0),w6.initNonuniformCatmullRom(Y.z,o0.z,a0.z,Q.z,v0,C0,u0)}else this.curveType==="catmullrom"&&(S6.initCatmullRom(Y.x,o0.x,a0.x,Q.x,this.tension),x6.initCatmullRom(Y.y,o0.y,a0.y,Q.y,this.tension),w6.initCatmullRom(Y.z,o0.z,a0.z,Q.z,this.tension));return g.set(S6.calc(X),x6.calc(X),w6.calc(X)),g}copy(a){super.copy(a),this.points=[];for(let f=0,g=a.points.length;f<g;f++){const y=a.points[f];this.points.push(y.clone())}return this.closed=a.closed,this.curveType=a.curveType,this.tension=a.tension,this}toJSON(){const a=super.toJSON();a.points=[];for(let f=0,g=this.points.length;f<g;f++){const y=this.points[f];a.points.push(y.toArray())}return a.closed=this.closed,a.curveType=this.curveType,a.tension=this.tension,a}fromJSON(a){super.fromJSON(a),this.points=[];for(let f=0,g=a.points.length;f<g;f++){const y=a.points[f];this.points.push(new K0().fromArray(y))}return this.closed=a.closed,this.curveType=a.curveType,this.tension=a.tension,this}}function $a(E,a,f,g,y){const P=(g-a)*.5,G=(y-f)*.5,W=E*E,X=E*W;return(2*f-2*g+P+G)*X+(-3*f+3*g-2*P-G)*W+P*E+f}function Ni0(E,a){const f=1-E;return f*f*a}function Ui0(E,a){return 2*(1-E)*E*a}function Gi0(E,a){return E*E*a}function _s(E,a,f,g){return Ni0(E,a)+Ui0(E,f)+Gi0(E,g)}function Wi0(E,a){const f=1-E;return f*f*f*a}function Vi0(E,a){const f=1-E;return 3*f*f*E*a}function zi0(E,a){return 3*(1-E)*E*E*a}function Hi0(E,a){return E*E*E*a}function as(E,a,f,g,y){return Wi0(E,a)+Vi0(E,f)+zi0(E,g)+Hi0(E,y)}class n5 extends g1{constructor(a=new st,f=new st,g=new st,y=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=a,this.v1=f,this.v2=g,this.v3=y}getPoint(a,f=new st){const g=f,y=this.v0,P=this.v1,G=this.v2,W=this.v3;return g.set(as(a,y.x,P.x,G.x,W.x),as(a,y.y,P.y,G.y,W.y)),g}copy(a){return super.copy(a),this.v0.copy(a.v0),this.v1.copy(a.v1),this.v2.copy(a.v2),this.v3.copy(a.v3),this}toJSON(){const a=super.toJSON();return a.v0=this.v0.toArray(),a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a.v3=this.v3.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v0.fromArray(a.v0),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this.v3.fromArray(a.v3),this}}class ji0 extends g1{constructor(a=new K0,f=new K0,g=new K0,y=new K0){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=a,this.v1=f,this.v2=g,this.v3=y}getPoint(a,f=new K0){const g=f,y=this.v0,P=this.v1,G=this.v2,W=this.v3;return g.set(as(a,y.x,P.x,G.x,W.x),as(a,y.y,P.y,G.y,W.y),as(a,y.z,P.z,G.z,W.z)),g}copy(a){return super.copy(a),this.v0.copy(a.v0),this.v1.copy(a.v1),this.v2.copy(a.v2),this.v3.copy(a.v3),this}toJSON(){const a=super.toJSON();return a.v0=this.v0.toArray(),a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a.v3=this.v3.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v0.fromArray(a.v0),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this.v3.fromArray(a.v3),this}}class r5 extends g1{constructor(a=new st,f=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=a,this.v2=f}getPoint(a,f=new st){const g=f;return a===1?g.copy(this.v2):(g.copy(this.v2).sub(this.v1),g.multiplyScalar(a).add(this.v1)),g}getPointAt(a,f){return this.getPoint(a,f)}getTangent(a,f=new st){return f.subVectors(this.v2,this.v1).normalize()}getTangentAt(a,f){return this.getTangent(a,f)}copy(a){return super.copy(a),this.v1.copy(a.v1),this.v2.copy(a.v2),this}toJSON(){const a=super.toJSON();return a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this}}class bi0 extends g1{constructor(a=new K0,f=new K0){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=a,this.v2=f}getPoint(a,f=new K0){const g=f;return a===1?g.copy(this.v2):(g.copy(this.v2).sub(this.v1),g.multiplyScalar(a).add(this.v1)),g}getPointAt(a,f){return this.getPoint(a,f)}getTangent(a,f=new K0){return f.subVectors(this.v2,this.v1).normalize()}getTangentAt(a,f){return this.getTangent(a,f)}copy(a){return super.copy(a),this.v1.copy(a.v1),this.v2.copy(a.v2),this}toJSON(){const a=super.toJSON();return a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this}}class o5 extends g1{constructor(a=new st,f=new st,g=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=a,this.v1=f,this.v2=g}getPoint(a,f=new st){const g=f,y=this.v0,P=this.v1,G=this.v2;return g.set(_s(a,y.x,P.x,G.x),_s(a,y.y,P.y,G.y)),g}copy(a){return super.copy(a),this.v0.copy(a.v0),this.v1.copy(a.v1),this.v2.copy(a.v2),this}toJSON(){const a=super.toJSON();return a.v0=this.v0.toArray(),a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v0.fromArray(a.v0),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this}}class Xi0 extends g1{constructor(a=new K0,f=new K0,g=new K0){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=a,this.v1=f,this.v2=g}getPoint(a,f=new K0){const g=f,y=this.v0,P=this.v1,G=this.v2;return g.set(_s(a,y.x,P.x,G.x),_s(a,y.y,P.y,G.y),_s(a,y.z,P.z,G.z)),g}copy(a){return super.copy(a),this.v0.copy(a.v0),this.v1.copy(a.v1),this.v2.copy(a.v2),this}toJSON(){const a=super.toJSON();return a.v0=this.v0.toArray(),a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v0.fromArray(a.v0),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this}}class s5 extends g1{constructor(a=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=a}getPoint(a,f=new st){const g=f,y=this.points,P=(y.length-1)*a,G=Math.floor(P),W=P-G,X=y[G===0?G:G-1],Y=y[G],Q=y[G>y.length-2?y.length-1:G+1],o0=y[G>y.length-3?y.length-1:G+2];return g.set($a(W,X.x,Y.x,Q.x,o0.x),$a(W,X.y,Y.y,Q.y,o0.y)),g}copy(a){super.copy(a),this.points=[];for(let f=0,g=a.points.length;f<g;f++){const y=a.points[f];this.points.push(y.clone())}return this}toJSON(){const a=super.toJSON();a.points=[];for(let f=0,g=this.points.length;f<g;f++){const y=this.points[f];a.points.push(y.toArray())}return a}fromJSON(a){super.fromJSON(a),this.points=[];for(let f=0,g=a.points.length;f<g;f++){const y=a.points[f];this.points.push(new st().fromArray(y))}return this}}var tl=Object.freeze({__proto__:null,ArcCurve:Fi0,CatmullRomCurve3:Bi0,CubicBezierCurve:n5,CubicBezierCurve3:ji0,EllipseCurve:i8,LineCurve:r5,LineCurve3:bi0,QuadraticBezierCurve:o5,QuadraticBezierCurve3:Xi0,SplineCurve:s5});class qi0 extends g1{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(a){this.curves.push(a)}closePath(){const a=this.curves[0].getPoint(0),f=this.curves[this.curves.length-1].getPoint(1);if(!a.equals(f)){const g=a.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tl[g](f,a))}return this}getPoint(a,f){const g=a*this.getLength(),y=this.getCurveLengths();let P=0;for(;P<y.length;){if(y[P]>=g){const G=y[P]-g,W=this.curves[P],X=W.getLength(),Y=X===0?0:1-G/X;return W.getPointAt(Y,f)}P++}return null}getLength(){const a=this.getCurveLengths();return a[a.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const a=[];let f=0;for(let g=0,y=this.curves.length;g<y;g++)f+=this.curves[g].getLength(),a.push(f);return this.cacheLengths=a,a}getSpacedPoints(a=40){const f=[];for(let g=0;g<=a;g++)f.push(this.getPoint(g/a));return this.autoClose&&f.push(f[0]),f}getPoints(a=12){const f=[];let g;for(let y=0,P=this.curves;y<P.length;y++){const G=P[y],W=G.isEllipseCurve?a*2:G.isLineCurve||G.isLineCurve3?1:G.isSplineCurve?a*G.points.length:a,X=G.getPoints(W);for(let Y=0;Y<X.length;Y++){const Q=X[Y];g&&g.equals(Q)||(f.push(Q),g=Q)}}return this.autoClose&&f.length>1&&!f[f.length-1].equals(f[0])&&f.push(f[0]),f}copy(a){super.copy(a),this.curves=[];for(let f=0,g=a.curves.length;f<g;f++){const y=a.curves[f];this.curves.push(y.clone())}return this.autoClose=a.autoClose,this}toJSON(){const a=super.toJSON();a.autoClose=this.autoClose,a.curves=[];for(let f=0,g=this.curves.length;f<g;f++){const y=this.curves[f];a.curves.push(y.toJSON())}return a}fromJSON(a){super.fromJSON(a),this.autoClose=a.autoClose,this.curves=[];for(let f=0,g=a.curves.length;f<g;f++){const y=a.curves[f];this.curves.push(new tl[y.type]().fromJSON(y))}return this}}class Yi0 extends qi0{constructor(a){super(),this.type="Path",this.currentPoint=new st,a&&this.setFromPoints(a)}setFromPoints(a){this.moveTo(a[0].x,a[0].y);for(let f=1,g=a.length;f<g;f++)this.lineTo(a[f].x,a[f].y);return this}moveTo(a,f){return this.currentPoint.set(a,f),this}lineTo(a,f){const g=new r5(this.currentPoint.clone(),new st(a,f));return this.curves.push(g),this.currentPoint.set(a,f),this}quadraticCurveTo(a,f,g,y){const P=new o5(this.currentPoint.clone(),new st(a,f),new st(g,y));return this.curves.push(P),this.currentPoint.set(g,y),this}bezierCurveTo(a,f,g,y,P,G){const W=new n5(this.currentPoint.clone(),new st(a,f),new st(g,y),new st(P,G));return this.curves.push(W),this.currentPoint.set(P,G),this}splineThru(a){const f=[this.currentPoint.clone()].concat(a),g=new s5(f);return this.curves.push(g),this.currentPoint.copy(a[a.length-1]),this}arc(a,f,g,y,P,G){const W=this.currentPoint.x,X=this.currentPoint.y;return this.absarc(a+W,f+X,g,y,P,G),this}absarc(a,f,g,y,P,G){return this.absellipse(a,f,g,g,y,P,G),this}ellipse(a,f,g,y,P,G,W,X){const Y=this.currentPoint.x,Q=this.currentPoint.y;return this.absellipse(a+Y,f+Q,g,y,P,G,W,X),this}absellipse(a,f,g,y,P,G,W,X){const Y=new i8(a,f,g,y,P,G,W,X);if(this.curves.length>0){const o0=Y.getPoint(0);o0.equals(this.currentPoint)||this.lineTo(o0.x,o0.y)}this.curves.push(Y);const Q=Y.getPoint(1);return this.currentPoint.copy(Q),this}copy(a){return super.copy(a),this.currentPoint.copy(a.currentPoint),this}toJSON(){const a=super.toJSON();return a.currentPoint=this.currentPoint.toArray(),a}fromJSON(a){return super.fromJSON(a),this.currentPoint.fromArray(a.currentPoint),this}}class r8 extends Nn{constructor(a=[new st(0,-.5),new st(.5,0),new st(0,.5)],f=12,g=0,y=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:a,segments:f,phiStart:g,phiLength:y},f=Math.floor(f),y=Li(y,0,Math.PI*2);const P=[],G=[],W=[],X=[],Y=[],Q=1/f,o0=new K0,a0=new st,m0=new K0,v0=new K0,C0=new K0;let u0=0,t0=0;for(let N0=0;N0<=a.length-1;N0++)switch(N0){case 0:u0=a[N0+1].x-a[N0].x,t0=a[N0+1].y-a[N0].y,m0.x=t0*1,m0.y=-u0,m0.z=t0*0,C0.copy(m0),m0.normalize(),X.push(m0.x,m0.y,m0.z);break;case a.length-1:X.push(C0.x,C0.y,C0.z);break;default:u0=a[N0+1].x-a[N0].x,t0=a[N0+1].y-a[N0].y,m0.x=t0*1,m0.y=-u0,m0.z=t0*0,v0.copy(m0),m0.x+=C0.x,m0.y+=C0.y,m0.z+=C0.z,m0.normalize(),X.push(m0.x,m0.y,m0.z),C0.copy(v0)}for(let N0=0;N0<=f;N0++){const T0=g+N0*Q*y,O0=Math.sin(T0),k0=Math.cos(T0);for(let L0=0;L0<=a.length-1;L0++){o0.x=a[L0].x*O0,o0.y=a[L0].y,o0.z=a[L0].x*k0,G.push(o0.x,o0.y,o0.z),a0.x=N0/f,a0.y=L0/(a.length-1),W.push(a0.x,a0.y);const D0=X[3*L0+0]*O0,V0=X[3*L0+1],h2=X[3*L0+0]*k0;Y.push(D0,V0,h2)}}for(let N0=0;N0<f;N0++)for(let T0=0;T0<a.length-1;T0++){const O0=T0+N0*a.length,k0=O0,L0=O0+a.length,D0=O0+a.length+1,V0=O0+1;P.push(k0,L0,V0),P.push(D0,V0,L0)}this.setIndex(P),this.setAttribute("position",new pi(G,3)),this.setAttribute("uv",new pi(W,2)),this.setAttribute("normal",new pi(Y,3))}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}static fromJSON(a){return new r8(a.points,a.segments,a.phiStart,a.phiLength)}}class o8 extends r8{constructor(a=1,f=1,g=4,y=8){const P=new Yi0;P.absarc(0,-f/2,a,Math.PI*1.5,0),P.absarc(0,f/2,a,0,Math.PI*.5),super(P.getPoints(g),y),this.type="CapsuleGeometry",this.parameters={radius:a,length:f,capSegments:g,radialSegments:y}}static fromJSON(a){return new o8(a.radius,a.length,a.capSegments,a.radialSegments)}}class Cs extends Nn{constructor(a=1,f=32,g=16,y=0,P=Math.PI*2,G=0,W=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:a,widthSegments:f,heightSegments:g,phiStart:y,phiLength:P,thetaStart:G,thetaLength:W},f=Math.max(3,Math.floor(f)),g=Math.max(2,Math.floor(g));const X=Math.min(G+W,Math.PI);let Y=0;const Q=[],o0=new K0,a0=new K0,m0=[],v0=[],C0=[],u0=[];for(let t0=0;t0<=g;t0++){const N0=[],T0=t0/g;let O0=0;t0===0&&G===0?O0=.5/f:t0===g&&X===Math.PI&&(O0=-.5/f);for(let k0=0;k0<=f;k0++){const L0=k0/f;o0.x=-a*Math.cos(y+L0*P)*Math.sin(G+T0*W),o0.y=a*Math.cos(G+T0*W),o0.z=a*Math.sin(y+L0*P)*Math.sin(G+T0*W),v0.push(o0.x,o0.y,o0.z),a0.copy(o0).normalize(),C0.push(a0.x,a0.y,a0.z),u0.push(L0+O0,1-T0),N0.push(Y++)}Q.push(N0)}for(let t0=0;t0<g;t0++)for(let N0=0;N0<f;N0++){const T0=Q[t0][N0+1],O0=Q[t0][N0],k0=Q[t0+1][N0],L0=Q[t0+1][N0+1];(t0!==0||G>0)&&m0.push(T0,O0,L0),(t0!==g-1||X<Math.PI)&&m0.push(O0,k0,L0)}this.setIndex(m0),this.setAttribute("position",new pi(v0,3)),this.setAttribute("normal",new pi(C0,3)),this.setAttribute("uv",new pi(u0,2))}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}static fromJSON(a){return new Cs(a.radius,a.widthSegments,a.heightSegments,a.phiStart,a.phiLength,a.thetaStart,a.thetaLength)}}function w4(E,a,f){return!E||!f&&E.constructor===a?E:typeof a.BYTES_PER_ELEMENT=="number"?new a(E):Array.prototype.slice.call(E)}function Ki0(E){return ArrayBuffer.isView(E)&&!(E instanceof DataView)}function Zi0(E){function a(y,P){return E[y]-E[P]}const f=E.length,g=new Array(f);for(let y=0;y!==f;++y)g[y]=y;return g.sort(a),g}function el(E,a,f){const g=E.length,y=new E.constructor(g);for(let P=0,G=0;G!==g;++P){const W=f[P]*a;for(let X=0;X!==a;++X)y[G++]=E[W+X]}return y}function c5(E,a,f,g){let y=1,P=E[0];for(;P!==void 0&&P[g]===void 0;)P=E[y++];if(P===void 0)return;let G=P[g];if(G!==void 0)if(Array.isArray(G))do G=P[g],G!==void 0&&(a.push(P.time),f.push.apply(f,G)),P=E[y++];while(P!==void 0);else if(G.toArray!==void 0)do G=P[g],G!==void 0&&(a.push(P.time),G.toArray(f,f.length)),P=E[y++];while(P!==void 0);else do G=P[g],G!==void 0&&(a.push(P.time),f.push(G)),P=E[y++];while(P!==void 0)}class Ss{constructor(a,f,g,y){this.parameterPositions=a,this._cachedIndex=0,this.resultBuffer=y!==void 0?y:new f.constructor(g),this.sampleValues=f,this.valueSize=g,this.settings=null,this.DefaultSettings_={}}evaluate(a){const f=this.parameterPositions;let g=this._cachedIndex,y=f[g],P=f[g-1];t:{e:{let G;i:{n:if(!(a<y)){for(let W=g+2;;){if(y===void 0){if(a<P)break n;return g=f.length,this._cachedIndex=g,this.copySampleValue_(g-1)}if(g===W)break;if(P=y,y=f[++g],a<y)break e}G=f.length;break i}if(!(a>=P)){const W=f[1];a<W&&(g=2,P=W);for(let X=g-2;;){if(P===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(g===X)break;if(y=P,P=f[--g-1],a>=P)break e}G=g,g=0;break i}break t}for(;g<G;){const W=g+G>>>1;a<f[W]?G=W:g=W+1}if(y=f[g],P=f[g-1],P===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(y===void 0)return g=f.length,this._cachedIndex=g,this.copySampleValue_(g-1)}this._cachedIndex=g,this.intervalChanged_(g,P,y)}return this.interpolate_(g,P,a,y)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(a){const f=this.resultBuffer,g=this.sampleValues,y=this.valueSize,P=a*y;for(let G=0;G!==y;++G)f[G]=g[P+G];return f}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Qi0 extends Ss{constructor(a,f,g,y){super(a,f,g,y),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mo,endingEnd:mo}}intervalChanged_(a,f,g){const y=this.parameterPositions;let P=a-2,G=a+1,W=y[P],X=y[G];if(W===void 0)switch(this.getSettings_().endingStart){case yo:P=a,W=2*f-g;break;case B4:P=y.length-2,W=f+y[P]-y[P+1];break;default:P=a,W=g}if(X===void 0)switch(this.getSettings_().endingEnd){case yo:G=a,X=2*g-f;break;case B4:G=1,X=g+y[1]-y[0];break;default:G=a-1,X=f}const Y=(g-f)*.5,Q=this.valueSize;this._weightPrev=Y/(f-W),this._weightNext=Y/(X-g),this._offsetPrev=P*Q,this._offsetNext=G*Q}interpolate_(a,f,g,y){const P=this.resultBuffer,G=this.sampleValues,W=this.valueSize,X=a*W,Y=X-W,Q=this._offsetPrev,o0=this._offsetNext,a0=this._weightPrev,m0=this._weightNext,v0=(g-f)/(y-f),C0=v0*v0,u0=C0*v0,t0=-a0*u0+2*a0*C0-a0*v0,N0=(1+a0)*u0+(-1.5-2*a0)*C0+(-.5+a0)*v0+1,T0=(-1-m0)*u0+(1.5+m0)*C0+.5*v0,O0=m0*u0-m0*C0;for(let k0=0;k0!==W;++k0)P[k0]=t0*G[Q+k0]+N0*G[Y+k0]+T0*G[X+k0]+O0*G[o0+k0];return P}}class _5 extends Ss{constructor(a,f,g,y){super(a,f,g,y)}interpolate_(a,f,g,y){const P=this.resultBuffer,G=this.sampleValues,W=this.valueSize,X=a*W,Y=X-W,Q=(g-f)/(y-f),o0=1-Q;for(let a0=0;a0!==W;++a0)P[a0]=G[Y+a0]*o0+G[X+a0]*Q;return P}}class Ji0 extends Ss{constructor(a,f,g,y){super(a,f,g,y)}interpolate_(a){return this.copySampleValue_(a-1)}}class C1{constructor(a,f,g,y){if(a===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(f===void 0||f.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+a);this.name=a,this.times=w4(f,this.TimeBufferType),this.values=w4(g,this.ValueBufferType),this.setInterpolation(y||this.DefaultInterpolation)}static toJSON(a){const f=a.constructor;let g;if(f.toJSON!==this.toJSON)g=f.toJSON(a);else{g={name:a.name,times:w4(a.times,Array),values:w4(a.values,Array)};const y=a.getInterpolation();y!==a.DefaultInterpolation&&(g.interpolation=y)}return g.type=a.ValueTypeName,g}InterpolantFactoryMethodDiscrete(a){return new Ji0(this.times,this.values,this.getValueSize(),a)}InterpolantFactoryMethodLinear(a){return new _5(this.times,this.values,this.getValueSize(),a)}InterpolantFactoryMethodSmooth(a){return new Qi0(this.times,this.values,this.getValueSize(),a)}setInterpolation(a){let f;switch(a){case O4:f=this.InterpolantFactoryMethodDiscrete;break;case F4:f=this.InterpolantFactoryMethodLinear;break;case Y3:f=this.InterpolantFactoryMethodSmooth;break}if(f===void 0){const g="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(a!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(g);return console.warn("THREE.KeyframeTrack:",g),this}return this.createInterpolant=f,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return O4;case this.InterpolantFactoryMethodLinear:return F4;case this.InterpolantFactoryMethodSmooth:return Y3}}getValueSize(){return this.values.length/this.times.length}shift(a){if(a!==0){const f=this.times;for(let g=0,y=f.length;g!==y;++g)f[g]+=a}return this}scale(a){if(a!==1){const f=this.times;for(let g=0,y=f.length;g!==y;++g)f[g]*=a}return this}trim(a,f){const g=this.times,y=g.length;let P=0,G=y-1;for(;P!==y&&g[P]<a;)++P;for(;G!==-1&&g[G]>f;)--G;if(++G,P!==0||G!==y){P>=G&&(G=Math.max(G,1),P=G-1);const W=this.getValueSize();this.times=g.slice(P,G),this.values=this.values.slice(P*W,G*W)}return this}validate(){let a=!0;const f=this.getValueSize();f-Math.floor(f)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),a=!1);const g=this.times,y=this.values,P=g.length;P===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),a=!1);let G=null;for(let W=0;W!==P;W++){const X=g[W];if(typeof X=="number"&&isNaN(X)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,W,X),a=!1;break}if(G!==null&&G>X){console.error("THREE.KeyframeTrack: Out of order keys.",this,W,X,G),a=!1;break}G=X}if(y!==void 0&&Ki0(y))for(let W=0,X=y.length;W!==X;++W){const Y=y[W];if(isNaN(Y)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,W,Y),a=!1;break}}return a}optimize(){const a=this.times.slice(),f=this.values.slice(),g=this.getValueSize(),y=this.getInterpolation()===Y3,P=a.length-1;let G=1;for(let W=1;W<P;++W){let X=!1;const Y=a[W],Q=a[W+1];if(Y!==Q&&(W!==1||Y!==a[0]))if(y)X=!0;else{const o0=W*g,a0=o0-g,m0=o0+g;for(let v0=0;v0!==g;++v0){const C0=f[o0+v0];if(C0!==f[a0+v0]||C0!==f[m0+v0]){X=!0;break}}}if(X){if(W!==G){a[G]=a[W];const o0=W*g,a0=G*g;for(let m0=0;m0!==g;++m0)f[a0+m0]=f[o0+m0]}++G}}if(P>0){a[G]=a[P];for(let W=P*g,X=G*g,Y=0;Y!==g;++Y)f[X+Y]=f[W+Y];++G}return G!==a.length?(this.times=a.slice(0,G),this.values=f.slice(0,G*g)):(this.times=a,this.values=f),this}clone(){const a=this.times.slice(),f=this.values.slice(),g=this.constructor,y=new g(this.name,a,f);return y.createInterpolant=this.createInterpolant,y}}C1.prototype.TimeBufferType=Float32Array;C1.prototype.ValueBufferType=Float32Array;C1.prototype.DefaultInterpolation=F4;class Bo extends C1{}Bo.prototype.ValueTypeName="bool";Bo.prototype.ValueBufferType=Array;Bo.prototype.DefaultInterpolation=O4;Bo.prototype.InterpolantFactoryMethodLinear=void 0;Bo.prototype.InterpolantFactoryMethodSmooth=void 0;class a5 extends C1{}a5.prototype.ValueTypeName="color";class Po extends C1{}Po.prototype.ValueTypeName="number";class $i0 extends Ss{constructor(a,f,g,y){super(a,f,g,y)}interpolate_(a,f,g,y){const P=this.resultBuffer,G=this.sampleValues,W=this.valueSize,X=(g-f)/(y-f);let Y=a*W;for(let Q=Y+W;Y!==Q;Y+=4)Ei.slerpFlat(P,0,G,Y-W,G,Y,X);return P}}class Fr extends C1{InterpolantFactoryMethodLinear(a){return new $i0(this.times,this.values,this.getValueSize(),a)}}Fr.prototype.ValueTypeName="quaternion";Fr.prototype.DefaultInterpolation=F4;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;class No extends C1{}No.prototype.ValueTypeName="string";No.prototype.ValueBufferType=Array;No.prototype.DefaultInterpolation=O4;No.prototype.InterpolantFactoryMethodLinear=void 0;No.prototype.InterpolantFactoryMethodSmooth=void 0;class Or extends C1{}Or.prototype.ValueTypeName="vector";class Co{constructor(a,f=-1,g,y=q6){this.name=a,this.tracks=g,this.duration=f,this.blendMode=y,this.uuid=fr(),this.duration<0&&this.resetDuration()}static parse(a){const f=[],g=a.tracks,y=1/(a.fps||1);for(let G=0,W=g.length;G!==W;++G)f.push(en0(g[G]).scale(y));const P=new this(a.name,a.duration,f,a.blendMode);return P.uuid=a.uuid,P}static toJSON(a){const f=[],g=a.tracks,y={name:a.name,duration:a.duration,tracks:f,uuid:a.uuid,blendMode:a.blendMode};for(let P=0,G=g.length;P!==G;++P)f.push(C1.toJSON(g[P]));return y}static CreateFromMorphTargetSequence(a,f,g,y){const P=f.length,G=[];for(let W=0;W<P;W++){let X=[],Y=[];X.push((W+P-1)%P,W,(W+1)%P),Y.push(0,1,0);const Q=Zi0(X);X=el(X,1,Q),Y=el(Y,1,Q),!y&&X[0]===0&&(X.push(P),Y.push(Y[0])),G.push(new Po(".morphTargetInfluences["+f[W].name+"]",X,Y).scale(1/g))}return new this(a,-1,G)}static findByName(a,f){let g=a;if(!Array.isArray(a)){const y=a;g=y.geometry&&y.geometry.animations||y.animations}for(let y=0;y<g.length;y++)if(g[y].name===f)return g[y];return null}static CreateClipsFromMorphTargetSequences(a,f,g){const y={},P=/^([\w-]*?)([\d]+)$/;for(let W=0,X=a.length;W<X;W++){const Y=a[W],Q=Y.name.match(P);if(Q&&Q.length>1){const o0=Q[1];let a0=y[o0];a0||(y[o0]=a0=[]),a0.push(Y)}}const G=[];for(const W in y)G.push(this.CreateFromMorphTargetSequence(W,y[W],f,g));return G}static parseAnimation(a,f){if(!a)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const g=function(o0,a0,m0,v0,C0){if(m0.length!==0){const u0=[],t0=[];c5(m0,u0,t0,v0),u0.length!==0&&C0.push(new o0(a0,u0,t0))}},y=[],P=a.name||"default",G=a.fps||30,W=a.blendMode;let X=a.length||-1;const Y=a.hierarchy||[];for(let o0=0;o0<Y.length;o0++){const a0=Y[o0].keys;if(!(!a0||a0.length===0))if(a0[0].morphTargets){const m0={};let v0;for(v0=0;v0<a0.length;v0++)if(a0[v0].morphTargets)for(let C0=0;C0<a0[v0].morphTargets.length;C0++)m0[a0[v0].morphTargets[C0]]=-1;for(const C0 in m0){const u0=[],t0=[];for(let N0=0;N0!==a0[v0].morphTargets.length;++N0){const T0=a0[v0];u0.push(T0.time),t0.push(T0.morphTarget===C0?1:0)}y.push(new Po(".morphTargetInfluence["+C0+"]",u0,t0))}X=m0.length*G}else{const m0=".bones["+f[o0].name+"]";g(Or,m0+".position",a0,"pos",y),g(Fr,m0+".quaternion",a0,"rot",y),g(Or,m0+".scale",a0,"scl",y)}}return y.length===0?null:new this(P,X,y,W)}resetDuration(){const a=this.tracks;let f=0;for(let g=0,y=a.length;g!==y;++g){const P=this.tracks[g];f=Math.max(f,P.times[P.times.length-1])}return this.duration=f,this}trim(){for(let a=0;a<this.tracks.length;a++)this.tracks[a].trim(0,this.duration);return this}validate(){let a=!0;for(let f=0;f<this.tracks.length;f++)a=a&&this.tracks[f].validate();return a}optimize(){for(let a=0;a<this.tracks.length;a++)this.tracks[a].optimize();return this}clone(){const a=[];for(let f=0;f<this.tracks.length;f++)a.push(this.tracks[f].clone());return new this.constructor(this.name,this.duration,a,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function tn0(E){switch(E.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Po;case"vector":case"vector2":case"vector3":case"vector4":return Or;case"color":return a5;case"quaternion":return Fr;case"bool":case"boolean":return Bo;case"string":return No}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+E)}function en0(E){if(E.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const a=tn0(E.type);if(E.times===void 0){const f=[],g=[];c5(E.keys,f,g,"value"),E.times=f,E.values=g}return a.parse!==void 0?a.parse(E):new a(E.name,E.times,E.values,E.interpolation)}const z4={enabled:!1,files:{},add:function(E,a){this.enabled!==!1&&(this.files[E]=a)},get:function(E){if(this.enabled!==!1)return this.files[E]},remove:function(E){delete this.files[E]},clear:function(){this.files={}}};class in0{constructor(a,f,g){const y=this;let P=!1,G=0,W=0,X;const Y=[];this.onStart=void 0,this.onLoad=a,this.onProgress=f,this.onError=g,this.itemStart=function(Q){W++,P===!1&&y.onStart!==void 0&&y.onStart(Q,G,W),P=!0},this.itemEnd=function(Q){G++,y.onProgress!==void 0&&y.onProgress(Q,G,W),G===W&&(P=!1,y.onLoad!==void 0&&y.onLoad())},this.itemError=function(Q){y.onError!==void 0&&y.onError(Q)},this.resolveURL=function(Q){return X?X(Q):Q},this.setURLModifier=function(Q){return X=Q,this},this.addHandler=function(Q,o0){return Y.push(Q,o0),this},this.removeHandler=function(Q){const o0=Y.indexOf(Q);return o0!==-1&&Y.splice(o0,2),this},this.getHandler=function(Q){for(let o0=0,a0=Y.length;o0<a0;o0+=2){const m0=Y[o0],v0=Y[o0+1];if(m0.global&&(m0.lastIndex=0),m0.test(Q))return v0}return null}}}const nn0=new in0;class Uo{constructor(a){this.manager=a!==void 0?a:nn0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(a,f){const g=this;return new Promise(function(y,P){g.load(a,y,f,P)})}parse(){}setCrossOrigin(a){return this.crossOrigin=a,this}setWithCredentials(a){return this.withCredentials=a,this}setPath(a){return this.path=a,this}setResourcePath(a){return this.resourcePath=a,this}setRequestHeader(a){return this.requestHeader=a,this}}Uo.DEFAULT_MATERIAL_NAME="__DEFAULT";const G1={};class rn0 extends Error{constructor(a,f){super(a),this.response=f}}class l5 extends Uo{constructor(a){super(a)}load(a,f,g,y){a===void 0&&(a=""),this.path!==void 0&&(a=this.path+a),a=this.manager.resolveURL(a);const P=z4.get(a);if(P!==void 0)return this.manager.itemStart(a),setTimeout(()=>{f&&f(P),this.manager.itemEnd(a)},0),P;if(G1[a]!==void 0){G1[a].push({onLoad:f,onProgress:g,onError:y});return}G1[a]=[],G1[a].push({onLoad:f,onProgress:g,onError:y});const G=new Request(a,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),W=this.mimeType,X=this.responseType;fetch(G).then(Y=>{if(Y.status===200||Y.status===0){if(Y.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||Y.body===void 0||Y.body.getReader===void 0)return Y;const Q=G1[a],o0=Y.body.getReader(),a0=Y.headers.get("Content-Length")||Y.headers.get("X-File-Size"),m0=a0?parseInt(a0):0,v0=m0!==0;let C0=0;const u0=new ReadableStream({start(t0){N0();function N0(){o0.read().then(({done:T0,value:O0})=>{if(T0)t0.close();else{C0+=O0.byteLength;const k0=new ProgressEvent("progress",{lengthComputable:v0,loaded:C0,total:m0});for(let L0=0,D0=Q.length;L0<D0;L0++){const V0=Q[L0];V0.onProgress&&V0.onProgress(k0)}t0.enqueue(O0),N0()}})}}});return new Response(u0)}else throw new rn0(`fetch for "${Y.url}" responded with ${Y.status}: ${Y.statusText}`,Y)}).then(Y=>{switch(X){case"arraybuffer":return Y.arrayBuffer();case"blob":return Y.blob();case"document":return Y.text().then(Q=>new DOMParser().parseFromString(Q,W));case"json":return Y.json();default:if(W===void 0)return Y.text();{const o0=/charset="?([^;"\s]*)"?/i.exec(W),a0=o0&&o0[1]?o0[1].toLowerCase():void 0,m0=new TextDecoder(a0);return Y.arrayBuffer().then(v0=>m0.decode(v0))}}}).then(Y=>{z4.add(a,Y);const Q=G1[a];delete G1[a];for(let o0=0,a0=Q.length;o0<a0;o0++){const m0=Q[o0];m0.onLoad&&m0.onLoad(Y)}}).catch(Y=>{const Q=G1[a];if(Q===void 0)throw this.manager.itemError(a),Y;delete G1[a];for(let o0=0,a0=Q.length;o0<a0;o0++){const m0=Q[o0];m0.onError&&m0.onError(Y)}this.manager.itemError(a)}).finally(()=>{this.manager.itemEnd(a)}),this.manager.itemStart(a)}setResponseType(a){return this.responseType=a,this}setMimeType(a){return this.mimeType=a,this}}class on0 extends Uo{constructor(a){super(a)}load(a,f,g,y){this.path!==void 0&&(a=this.path+a),a=this.manager.resolveURL(a);const P=this,G=z4.get(a);if(G!==void 0)return P.manager.itemStart(a),setTimeout(function(){f&&f(G),P.manager.itemEnd(a)},0),G;const W=hs("img");function X(){Q(),z4.add(a,this),f&&f(this),P.manager.itemEnd(a)}function Y(o0){Q(),y&&y(o0),P.manager.itemError(a),P.manager.itemEnd(a)}function Q(){W.removeEventListener("load",X,!1),W.removeEventListener("error",Y,!1)}return W.addEventListener("load",X,!1),W.addEventListener("error",Y,!1),a.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(W.crossOrigin=this.crossOrigin),P.manager.itemStart(a),W.src=a,W}}class sn0 extends Uo{constructor(a){super(a)}load(a,f,g,y){const P=this,G=new e5,W=new l5(this.manager);return W.setResponseType("arraybuffer"),W.setRequestHeader(this.requestHeader),W.setPath(this.path),W.setWithCredentials(P.withCredentials),W.load(a,function(X){let Y;try{Y=P.parse(X)}catch(Q){if(y!==void 0)y(Q);else{console.error(Q);return}}Y.image!==void 0?G.image=Y.image:Y.data!==void 0&&(G.image.width=Y.width,G.image.height=Y.height,G.image.data=Y.data),G.wrapS=Y.wrapS!==void 0?Y.wrapS:On,G.wrapT=Y.wrapT!==void 0?Y.wrapT:On,G.magFilter=Y.magFilter!==void 0?Y.magFilter:Ki,G.minFilter=Y.minFilter!==void 0?Y.minFilter:Ki,G.anisotropy=Y.anisotropy!==void 0?Y.anisotropy:1,Y.colorSpace!==void 0?G.colorSpace=Y.colorSpace:Y.encoding!==void 0&&(G.encoding=Y.encoding),Y.flipY!==void 0&&(G.flipY=Y.flipY),Y.format!==void 0&&(G.format=Y.format),Y.type!==void 0&&(G.type=Y.type),Y.mipmaps!==void 0&&(G.mipmaps=Y.mipmaps,G.minFilter=z1),Y.mipmapCount===1&&(G.minFilter=Ki),Y.generateMipmaps!==void 0&&(G.generateMipmaps=Y.generateMipmaps),G.needsUpdate=!0,f&&f(G,Y)},g,y),G}}class s8 extends Uo{constructor(a){super(a)}load(a,f,g,y){const P=new nn,G=new on0(this.manager);return G.setCrossOrigin(this.crossOrigin),G.setPath(this.path),G.load(a,function(W){P.image=W,P.needsUpdate=!0,f!==void 0&&f(P)},g,y),P}}class q4 extends _i{constructor(a,f=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(a),this.intensity=f}dispose(){}copy(a,f){return super.copy(a,f),this.color.copy(a.color),this.intensity=a.intensity,this}toJSON(a){const f=super.toJSON(a);return f.object.color=this.color.getHex(),f.object.intensity=this.intensity,this.groundColor!==void 0&&(f.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(f.object.distance=this.distance),this.angle!==void 0&&(f.object.angle=this.angle),this.decay!==void 0&&(f.object.decay=this.decay),this.penumbra!==void 0&&(f.object.penumbra=this.penumbra),this.shadow!==void 0&&(f.object.shadow=this.shadow.toJSON()),f}}const M6=new ue,il=new K0,nl=new K0;class c8{constructor(a){this.camera=a,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Q6,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(a){const f=this.camera,g=this.matrix;il.setFromMatrixPosition(a.matrixWorld),f.position.copy(il),nl.setFromMatrixPosition(a.target.matrixWorld),f.lookAt(nl),f.updateMatrixWorld(),M6.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),this._frustum.setFromProjectionMatrix(M6),g.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),g.multiply(M6)}getViewport(a){return this._viewports[a]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(a){return this.camera=a.camera.clone(),this.bias=a.bias,this.radius=a.radius,this.mapSize.copy(a.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const a={};return this.bias!==0&&(a.bias=this.bias),this.normalBias!==0&&(a.normalBias=this.normalBias),this.radius!==1&&(a.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(a.mapSize=this.mapSize.toArray()),a.camera=this.camera.toJSON(!1).object,delete a.camera.matrix,a}}class cn0 extends c8{constructor(){super(new hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(a){const f=this.camera,g=Io*2*a.angle*this.focus,y=this.mapSize.width/this.mapSize.height,P=a.distance||f.far;(g!==f.fov||y!==f.aspect||P!==f.far)&&(f.fov=g,f.aspect=y,f.far=P,f.updateProjectionMatrix()),super.updateMatrices(a)}copy(a){return super.copy(a),this.focus=a.focus,this}}class _n0 extends q4{constructor(a,f,g=0,y=Math.PI/3,P=0,G=2){super(a,f),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_i.DEFAULT_UP),this.updateMatrix(),this.target=new _i,this.distance=g,this.angle=y,this.penumbra=P,this.decay=G,this.map=null,this.shadow=new cn0}get power(){return this.intensity*Math.PI}set power(a){this.intensity=a/Math.PI}dispose(){this.shadow.dispose()}copy(a,f){return super.copy(a,f),this.distance=a.distance,this.angle=a.angle,this.penumbra=a.penumbra,this.decay=a.decay,this.target=a.target.clone(),this.shadow=a.shadow.clone(),this}}const rl=new ue,es=new K0,T6=new K0;class an0 extends c8{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new Fe(2,1,1,1),new Fe(0,1,1,1),new Fe(3,1,1,1),new Fe(1,1,1,1),new Fe(3,0,1,1),new Fe(1,0,1,1)],this._cubeDirections=[new K0(1,0,0),new K0(-1,0,0),new K0(0,0,1),new K0(0,0,-1),new K0(0,1,0),new K0(0,-1,0)],this._cubeUps=[new K0(0,1,0),new K0(0,1,0),new K0(0,1,0),new K0(0,1,0),new K0(0,0,1),new K0(0,0,-1)]}updateMatrices(a,f=0){const g=this.camera,y=this.matrix,P=a.distance||g.far;P!==g.far&&(g.far=P,g.updateProjectionMatrix()),es.setFromMatrixPosition(a.matrixWorld),g.position.copy(es),T6.copy(g.position),T6.add(this._cubeDirections[f]),g.up.copy(this._cubeUps[f]),g.lookAt(T6),g.updateMatrixWorld(),y.makeTranslation(-es.x,-es.y,-es.z),rl.multiplyMatrices(g.projectionMatrix,g.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rl)}}class ln0 extends q4{constructor(a,f,g=0,y=2){super(a,f),this.isPointLight=!0,this.type="PointLight",this.distance=g,this.decay=y,this.shadow=new an0}get power(){return this.intensity*4*Math.PI}set power(a){this.intensity=a/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(a,f){return super.copy(a,f),this.distance=a.distance,this.decay=a.decay,this.shadow=a.shadow.clone(),this}}class pn0 extends c8{constructor(){super(new ql(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class un0 extends q4{constructor(a,f){super(a,f),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_i.DEFAULT_UP),this.updateMatrix(),this.target=new _i,this.shadow=new pn0}dispose(){this.shadow.dispose()}copy(a){return super.copy(a),this.target=a.target.clone(),this.shadow=a.shadow.clone(),this}}class fn0 extends q4{constructor(a,f){super(a,f),this.isAmbientLight=!0,this.type="AmbientLight"}}class hn0{static decodeText(a){if(typeof TextDecoder<"u")return new TextDecoder().decode(a);let f="";for(let g=0,y=a.length;g<y;g++)f+=String.fromCharCode(a[g]);try{return decodeURIComponent(escape(f))}catch{return f}}static extractUrlBase(a){const f=a.lastIndexOf("/");return f===-1?"./":a.slice(0,f+1)}static resolveURL(a,f){return typeof a!="string"||a===""?"":(/^https?:\/\//i.test(f)&&/^\//.test(a)&&(f=f.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(a)||/^data:.*,.*$/i.test(a)||/^blob:.*$/i.test(a)?a:f+a)}}class mn0{constructor(a=!0){this.autoStart=a,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ol(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let a=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const f=ol();a=(f-this.oldTime)/1e3,this.oldTime=f,this.elapsedTime+=a}return a}}function ol(){return(typeof performance>"u"?Date:performance).now()}class dn0{constructor(a,f,g){this.binding=a,this.valueSize=g;let y,P,G;switch(f){case"quaternion":y=this._slerp,P=this._slerpAdditive,G=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(g*6),this._workIndex=5;break;case"string":case"bool":y=this._select,P=this._select,G=this._setAdditiveIdentityOther,this.buffer=new Array(g*5);break;default:y=this._lerp,P=this._lerpAdditive,G=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(g*5)}this._mixBufferRegion=y,this._mixBufferRegionAdditive=P,this._setIdentity=G,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(a,f){const g=this.buffer,y=this.valueSize,P=a*y+y;let G=this.cumulativeWeight;if(G===0){for(let W=0;W!==y;++W)g[P+W]=g[W];G=f}else{G+=f;const W=f/G;this._mixBufferRegion(g,P,0,W,y)}this.cumulativeWeight=G}accumulateAdditive(a){const f=this.buffer,g=this.valueSize,y=g*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(f,y,0,a,g),this.cumulativeWeightAdditive+=a}apply(a){const f=this.valueSize,g=this.buffer,y=a*f+f,P=this.cumulativeWeight,G=this.cumulativeWeightAdditive,W=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,P<1){const X=f*this._origIndex;this._mixBufferRegion(g,y,X,1-P,f)}G>0&&this._mixBufferRegionAdditive(g,y,this._addIndex*f,1,f);for(let X=f,Y=f+f;X!==Y;++X)if(g[X]!==g[X+f]){W.setValue(g,y);break}}saveOriginalState(){const a=this.binding,f=this.buffer,g=this.valueSize,y=g*this._origIndex;a.getValue(f,y);for(let P=g,G=y;P!==G;++P)f[P]=f[y+P%g];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const a=this.valueSize*3;this.binding.setValue(this.buffer,a)}_setAdditiveIdentityNumeric(){const a=this._addIndex*this.valueSize,f=a+this.valueSize;for(let g=a;g<f;g++)this.buffer[g]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const a=this._origIndex*this.valueSize,f=this._addIndex*this.valueSize;for(let g=0;g<this.valueSize;g++)this.buffer[f+g]=this.buffer[a+g]}_select(a,f,g,y,P){if(y>=.5)for(let G=0;G!==P;++G)a[f+G]=a[g+G]}_slerp(a,f,g,y){Ei.slerpFlat(a,f,a,f,a,g,y)}_slerpAdditive(a,f,g,y,P){const G=this._workIndex*P;Ei.multiplyQuaternionsFlat(a,G,a,f,a,g),Ei.slerpFlat(a,f,a,f,a,G,y)}_lerp(a,f,g,y,P){const G=1-y;for(let W=0;W!==P;++W){const X=f+W;a[X]=a[X]*G+a[g+W]*y}}_lerpAdditive(a,f,g,y,P){for(let G=0;G!==P;++G){const W=f+G;a[W]=a[W]+a[g+G]*y}}}const _8="\\[\\]\\.:\\/",yn0=new RegExp("["+_8+"]","g"),a8="[^"+_8+"]",vn0="[^"+_8.replace("\\.","")+"]",gn0=/((?:WC+[\/:])*)/.source.replace("WC",a8),Cn0=/(WCOD+)?/.source.replace("WCOD",vn0),Sn0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",a8),xn0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",a8),wn0=new RegExp("^"+gn0+Cn0+Sn0+xn0+"$"),Mn0=["material","materials","bones","map"];class Tn0{constructor(a,f,g){const y=g||Oe.parseTrackName(f);this._targetGroup=a,this._bindings=a.subscribe_(f,y)}getValue(a,f){this.bind();const g=this._targetGroup.nCachedObjects_,y=this._bindings[g];y!==void 0&&y.getValue(a,f)}setValue(a,f){const g=this._bindings;for(let y=this._targetGroup.nCachedObjects_,P=g.length;y!==P;++y)g[y].setValue(a,f)}bind(){const a=this._bindings;for(let f=this._targetGroup.nCachedObjects_,g=a.length;f!==g;++f)a[f].bind()}unbind(){const a=this._bindings;for(let f=this._targetGroup.nCachedObjects_,g=a.length;f!==g;++f)a[f].unbind()}}class Oe{constructor(a,f,g){this.path=f,this.parsedPath=g||Oe.parseTrackName(f),this.node=Oe.findNode(a,this.parsedPath.nodeName),this.rootNode=a,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(a,f,g){return a&&a.isAnimationObjectGroup?new Oe.Composite(a,f,g):new Oe(a,f,g)}static sanitizeNodeName(a){return a.replace(/\s/g,"_").replace(yn0,"")}static parseTrackName(a){const f=wn0.exec(a);if(f===null)throw new Error("PropertyBinding: Cannot parse trackName: "+a);const g={nodeName:f[2],objectName:f[3],objectIndex:f[4],propertyName:f[5],propertyIndex:f[6]},y=g.nodeName&&g.nodeName.lastIndexOf(".");if(y!==void 0&&y!==-1){const P=g.nodeName.substring(y+1);Mn0.indexOf(P)!==-1&&(g.nodeName=g.nodeName.substring(0,y),g.objectName=P)}if(g.propertyName===null||g.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+a);return g}static findNode(a,f){if(f===void 0||f===""||f==="."||f===-1||f===a.name||f===a.uuid)return a;if(a.skeleton){const g=a.skeleton.getBoneByName(f);if(g!==void 0)return g}if(a.children){const g=function(P){for(let G=0;G<P.length;G++){const W=P[G];if(W.name===f||W.uuid===f)return W;const X=g(W.children);if(X)return X}return null},y=g(a.children);if(y)return y}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(a,f){a[f]=this.targetObject[this.propertyName]}_getValue_array(a,f){const g=this.resolvedProperty;for(let y=0,P=g.length;y!==P;++y)a[f++]=g[y]}_getValue_arrayElement(a,f){a[f]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(a,f){this.resolvedProperty.toArray(a,f)}_setValue_direct(a,f){this.targetObject[this.propertyName]=a[f]}_setValue_direct_setNeedsUpdate(a,f){this.targetObject[this.propertyName]=a[f],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(a,f){this.targetObject[this.propertyName]=a[f],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(a,f){const g=this.resolvedProperty;for(let y=0,P=g.length;y!==P;++y)g[y]=a[f++]}_setValue_array_setNeedsUpdate(a,f){const g=this.resolvedProperty;for(let y=0,P=g.length;y!==P;++y)g[y]=a[f++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(a,f){const g=this.resolvedProperty;for(let y=0,P=g.length;y!==P;++y)g[y]=a[f++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(a,f){this.resolvedProperty[this.propertyIndex]=a[f]}_setValue_arrayElement_setNeedsUpdate(a,f){this.resolvedProperty[this.propertyIndex]=a[f],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(a,f){this.resolvedProperty[this.propertyIndex]=a[f],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(a,f){this.resolvedProperty.fromArray(a,f)}_setValue_fromArray_setNeedsUpdate(a,f){this.resolvedProperty.fromArray(a,f),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(a,f){this.resolvedProperty.fromArray(a,f),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(a,f){this.bind(),this.getValue(a,f)}_setValue_unbound(a,f){this.bind(),this.setValue(a,f)}bind(){let a=this.node;const f=this.parsedPath,g=f.objectName,y=f.propertyName;let P=f.propertyIndex;if(a||(a=Oe.findNode(this.rootNode,f.nodeName),this.node=a),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!a){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(g){let Y=f.objectIndex;switch(g){case"materials":if(!a.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!a.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}a=a.material.materials;break;case"bones":if(!a.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}a=a.skeleton.bones;for(let Q=0;Q<a.length;Q++)if(a[Q].name===Y){Y=Q;break}break;case"map":if("map"in a){a=a.map;break}if(!a.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!a.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}a=a.material.map;break;default:if(a[g]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}a=a[g]}if(Y!==void 0){if(a[Y]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,a);return}a=a[Y]}}const G=a[y];if(G===void 0){const Y=f.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+Y+"."+y+" but it wasn't found.",a);return}let W=this.Versioning.None;this.targetObject=a,a.needsUpdate!==void 0?W=this.Versioning.NeedsUpdate:a.matrixWorldNeedsUpdate!==void 0&&(W=this.Versioning.MatrixWorldNeedsUpdate);let X=this.BindingType.Direct;if(P!==void 0){if(y==="morphTargetInfluences"){if(!a.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!a.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}a.morphTargetDictionary[P]!==void 0&&(P=a.morphTargetDictionary[P])}X=this.BindingType.ArrayElement,this.resolvedProperty=G,this.propertyIndex=P}else G.fromArray!==void 0&&G.toArray!==void 0?(X=this.BindingType.HasFromToArray,this.resolvedProperty=G):Array.isArray(G)?(X=this.BindingType.EntireArray,this.resolvedProperty=G):this.propertyName=y;this.getValue=this.GetterByBindingType[X],this.setValue=this.SetterByBindingTypeAndVersioning[X][W]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Oe.Composite=Tn0;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class An0{constructor(a,f,g=null,y=f.blendMode){this._mixer=a,this._clip=f,this._localRoot=g,this.blendMode=y;const P=f.tracks,G=P.length,W=new Array(G),X={endingStart:mo,endingEnd:mo};for(let Y=0;Y!==G;++Y){const Q=P[Y].createInterpolant(null);W[Y]=Q,Q.settings=X}this._interpolantSettings=X,this._interpolants=W,this._propertyBindings=new Array(G),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=YJ,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(a){return this._startTime=a,this}setLoop(a,f){return this.loop=a,this.repetitions=f,this}setEffectiveWeight(a){return this.weight=a,this._effectiveWeight=this.enabled?a:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(a){return this._scheduleFading(a,0,1)}fadeOut(a){return this._scheduleFading(a,1,0)}crossFadeFrom(a,f,g){if(a.fadeOut(f),this.fadeIn(f),g){const y=this._clip.duration,P=a._clip.duration,G=P/y,W=y/P;a.warp(1,G,f),this.warp(W,1,f)}return this}crossFadeTo(a,f,g){return a.crossFadeFrom(this,f,g)}stopFading(){const a=this._weightInterpolant;return a!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(a)),this}setEffectiveTimeScale(a){return this.timeScale=a,this._effectiveTimeScale=this.paused?0:a,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(a){return this.timeScale=this._clip.duration/a,this.stopWarping()}syncWith(a){return this.time=a.time,this.timeScale=a.timeScale,this.stopWarping()}halt(a){return this.warp(this._effectiveTimeScale,0,a)}warp(a,f,g){const y=this._mixer,P=y.time,G=this.timeScale;let W=this._timeScaleInterpolant;W===null&&(W=y._lendControlInterpolant(),this._timeScaleInterpolant=W);const X=W.parameterPositions,Y=W.sampleValues;return X[0]=P,X[1]=P+g,Y[0]=a/G,Y[1]=f/G,this}stopWarping(){const a=this._timeScaleInterpolant;return a!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(a)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(a,f,g,y){if(!this.enabled){this._updateWeight(a);return}const P=this._startTime;if(P!==null){const X=(a-P)*g;X<0||g===0?f=0:(this._startTime=null,f=g*X)}f*=this._updateTimeScale(a);const G=this._updateTime(f),W=this._updateWeight(a);if(W>0){const X=this._interpolants,Y=this._propertyBindings;switch(this.blendMode){case ZJ:for(let Q=0,o0=X.length;Q!==o0;++Q)X[Q].evaluate(G),Y[Q].accumulateAdditive(W);break;case q6:default:for(let Q=0,o0=X.length;Q!==o0;++Q)X[Q].evaluate(G),Y[Q].accumulate(y,W)}}}_updateWeight(a){let f=0;if(this.enabled){f=this.weight;const g=this._weightInterpolant;if(g!==null){const y=g.evaluate(a)[0];f*=y,a>g.parameterPositions[1]&&(this.stopFading(),y===0&&(this.enabled=!1))}}return this._effectiveWeight=f,f}_updateTimeScale(a){let f=0;if(!this.paused){f=this.timeScale;const g=this._timeScaleInterpolant;if(g!==null){const y=g.evaluate(a)[0];f*=y,a>g.parameterPositions[1]&&(this.stopWarping(),f===0?this.paused=!0:this.timeScale=f)}}return this._effectiveTimeScale=f,f}_updateTime(a){const f=this._clip.duration,g=this.loop;let y=this.time+a,P=this._loopCount;const G=g===KJ;if(a===0)return P===-1?y:G&&(P&1)===1?f-y:y;if(g===qJ){P===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(y>=f)y=f;else if(y<0)y=0;else{this.time=y;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=y,this._mixer.dispatchEvent({type:"finished",action:this,direction:a<0?-1:1})}}else{if(P===-1&&(a>=0?(P=0,this._setEndings(!0,this.repetitions===0,G)):this._setEndings(this.repetitions===0,!0,G)),y>=f||y<0){const W=Math.floor(y/f);y-=f*W,P+=Math.abs(W);const X=this.repetitions-P;if(X<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,y=a>0?f:0,this.time=y,this._mixer.dispatchEvent({type:"finished",action:this,direction:a>0?1:-1});else{if(X===1){const Y=a<0;this._setEndings(Y,!Y,G)}else this._setEndings(!1,!1,G);this._loopCount=P,this.time=y,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:W})}}else this.time=y;if(G&&(P&1)===1)return f-y}return y}_setEndings(a,f,g){const y=this._interpolantSettings;g?(y.endingStart=yo,y.endingEnd=yo):(a?y.endingStart=this.zeroSlopeAtStart?yo:mo:y.endingStart=B4,f?y.endingEnd=this.zeroSlopeAtEnd?yo:mo:y.endingEnd=B4)}_scheduleFading(a,f,g){const y=this._mixer,P=y.time;let G=this._weightInterpolant;G===null&&(G=y._lendControlInterpolant(),this._weightInterpolant=G);const W=G.parameterPositions,X=G.sampleValues;return W[0]=P,X[0]=f,W[1]=P+a,X[1]=g,this}}const En0=new Float32Array(1);class sl extends ur{constructor(a){super(),this._root=a,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(a,f){const g=a._localRoot||this._root,y=a._clip.tracks,P=y.length,G=a._propertyBindings,W=a._interpolants,X=g.uuid,Y=this._bindingsByRootAndName;let Q=Y[X];Q===void 0&&(Q={},Y[X]=Q);for(let o0=0;o0!==P;++o0){const a0=y[o0],m0=a0.name;let v0=Q[m0];if(v0!==void 0)++v0.referenceCount,G[o0]=v0;else{if(v0=G[o0],v0!==void 0){v0._cacheIndex===null&&(++v0.referenceCount,this._addInactiveBinding(v0,X,m0));continue}const C0=f&&f._propertyBindings[o0].binding.parsedPath;v0=new dn0(Oe.create(g,m0,C0),a0.ValueTypeName,a0.getValueSize()),++v0.referenceCount,this._addInactiveBinding(v0,X,m0),G[o0]=v0}W[o0].resultBuffer=v0.buffer}}_activateAction(a){if(!this._isActiveAction(a)){if(a._cacheIndex===null){const g=(a._localRoot||this._root).uuid,y=a._clip.uuid,P=this._actionsByClip[y];this._bindAction(a,P&&P.knownActions[0]),this._addInactiveAction(a,y,g)}const f=a._propertyBindings;for(let g=0,y=f.length;g!==y;++g){const P=f[g];P.useCount++===0&&(this._lendBinding(P),P.saveOriginalState())}this._lendAction(a)}}_deactivateAction(a){if(this._isActiveAction(a)){const f=a._propertyBindings;for(let g=0,y=f.length;g!==y;++g){const P=f[g];--P.useCount===0&&(P.restoreOriginalState(),this._takeBackBinding(P))}this._takeBackAction(a)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const a=this;this.stats={actions:{get total(){return a._actions.length},get inUse(){return a._nActiveActions}},bindings:{get total(){return a._bindings.length},get inUse(){return a._nActiveBindings}},controlInterpolants:{get total(){return a._controlInterpolants.length},get inUse(){return a._nActiveControlInterpolants}}}}_isActiveAction(a){const f=a._cacheIndex;return f!==null&&f<this._nActiveActions}_addInactiveAction(a,f,g){const y=this._actions,P=this._actionsByClip;let G=P[f];if(G===void 0)G={knownActions:[a],actionByRoot:{}},a._byClipCacheIndex=0,P[f]=G;else{const W=G.knownActions;a._byClipCacheIndex=W.length,W.push(a)}a._cacheIndex=y.length,y.push(a),G.actionByRoot[g]=a}_removeInactiveAction(a){const f=this._actions,g=f[f.length-1],y=a._cacheIndex;g._cacheIndex=y,f[y]=g,f.pop(),a._cacheIndex=null;const P=a._clip.uuid,G=this._actionsByClip,W=G[P],X=W.knownActions,Y=X[X.length-1],Q=a._byClipCacheIndex;Y._byClipCacheIndex=Q,X[Q]=Y,X.pop(),a._byClipCacheIndex=null;const o0=W.actionByRoot,a0=(a._localRoot||this._root).uuid;delete o0[a0],X.length===0&&delete G[P],this._removeInactiveBindingsForAction(a)}_removeInactiveBindingsForAction(a){const f=a._propertyBindings;for(let g=0,y=f.length;g!==y;++g){const P=f[g];--P.referenceCount===0&&this._removeInactiveBinding(P)}}_lendAction(a){const f=this._actions,g=a._cacheIndex,y=this._nActiveActions++,P=f[y];a._cacheIndex=y,f[y]=a,P._cacheIndex=g,f[g]=P}_takeBackAction(a){const f=this._actions,g=a._cacheIndex,y=--this._nActiveActions,P=f[y];a._cacheIndex=y,f[y]=a,P._cacheIndex=g,f[g]=P}_addInactiveBinding(a,f,g){const y=this._bindingsByRootAndName,P=this._bindings;let G=y[f];G===void 0&&(G={},y[f]=G),G[g]=a,a._cacheIndex=P.length,P.push(a)}_removeInactiveBinding(a){const f=this._bindings,g=a.binding,y=g.rootNode.uuid,P=g.path,G=this._bindingsByRootAndName,W=G[y],X=f[f.length-1],Y=a._cacheIndex;X._cacheIndex=Y,f[Y]=X,f.pop(),delete W[P],Object.keys(W).length===0&&delete G[y]}_lendBinding(a){const f=this._bindings,g=a._cacheIndex,y=this._nActiveBindings++,P=f[y];a._cacheIndex=y,f[y]=a,P._cacheIndex=g,f[g]=P}_takeBackBinding(a){const f=this._bindings,g=a._cacheIndex,y=--this._nActiveBindings,P=f[y];a._cacheIndex=y,f[y]=a,P._cacheIndex=g,f[g]=P}_lendControlInterpolant(){const a=this._controlInterpolants,f=this._nActiveControlInterpolants++;let g=a[f];return g===void 0&&(g=new _5(new Float32Array(2),new Float32Array(2),1,En0),g.__cacheIndex=f,a[f]=g),g}_takeBackControlInterpolant(a){const f=this._controlInterpolants,g=a.__cacheIndex,y=--this._nActiveControlInterpolants,P=f[y];a.__cacheIndex=y,f[y]=a,P.__cacheIndex=g,f[g]=P}clipAction(a,f,g){const y=f||this._root,P=y.uuid;let G=typeof a=="string"?Co.findByName(y,a):a;const W=G!==null?G.uuid:a,X=this._actionsByClip[W];let Y=null;if(g===void 0&&(G!==null?g=G.blendMode:g=q6),X!==void 0){const o0=X.actionByRoot[P];if(o0!==void 0&&o0.blendMode===g)return o0;Y=X.knownActions[0],G===null&&(G=Y._clip)}if(G===null)return null;const Q=new An0(this,G,f,g);return this._bindAction(Q,Y),this._addInactiveAction(Q,W,P),Q}existingAction(a,f){const g=f||this._root,y=g.uuid,P=typeof a=="string"?Co.findByName(g,a):a,G=P?P.uuid:a,W=this._actionsByClip[G];return W!==void 0&&W.actionByRoot[y]||null}stopAllAction(){const a=this._actions,f=this._nActiveActions;for(let g=f-1;g>=0;--g)a[g].stop();return this}update(a){a*=this.timeScale;const f=this._actions,g=this._nActiveActions,y=this.time+=a,P=Math.sign(a),G=this._accuIndex^=1;for(let Y=0;Y!==g;++Y)f[Y]._update(y,a,P,G);const W=this._bindings,X=this._nActiveBindings;for(let Y=0;Y!==X;++Y)W[Y].apply(G);return this}setTime(a){this.time=0;for(let f=0;f<this._actions.length;f++)this._actions[f].time=0;return this.update(a)}getRoot(){return this._root}uncacheClip(a){const f=this._actions,g=a.uuid,y=this._actionsByClip,P=y[g];if(P!==void 0){const G=P.knownActions;for(let W=0,X=G.length;W!==X;++W){const Y=G[W];this._deactivateAction(Y);const Q=Y._cacheIndex,o0=f[f.length-1];Y._cacheIndex=null,Y._byClipCacheIndex=null,o0._cacheIndex=Q,f[Q]=o0,f.pop(),this._removeInactiveBindingsForAction(Y)}delete y[g]}}uncacheRoot(a){const f=a.uuid,g=this._actionsByClip;for(const G in g){const W=g[G].actionByRoot,X=W[f];X!==void 0&&(this._deactivateAction(X),this._removeInactiveAction(X))}const y=this._bindingsByRootAndName,P=y[f];if(P!==void 0)for(const G in P){const W=P[G];W.restoreOriginalState(),this._removeInactiveBinding(W)}}uncacheAction(a,f){const g=this.existingAction(a,f);g!==null&&(this._deactivateAction(g),this._removeInactiveAction(g))}}class cl{constructor(a=1,f=0,g=0){return this.radius=a,this.phi=f,this.theta=g,this}set(a,f,g){return this.radius=a,this.phi=f,this.theta=g,this}copy(a){return this.radius=a.radius,this.phi=a.phi,this.theta=a.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(a){return this.setFromCartesianCoords(a.x,a.y,a.z)}setFromCartesianCoords(a,f,g){return this.radius=Math.sqrt(a*a+f*f+g*g),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(a,g),this.phi=Math.acos(Li(f/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Rn0 extends Oi0{constructor(a=1){const f=[0,0,0,a,0,0,0,0,0,0,a,0,0,0,0,0,0,a],g=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],y=new Nn;y.setAttribute("position",new pi(f,3)),y.setAttribute("color",new pi(g,3));const P=new e8({vertexColors:!0,toneMapped:!1});super(y,P),this.type="AxesHelper"}setColors(a,f,g){const y=new qt,P=this.geometry.attributes.color.array;return y.set(a),y.toArray(P,0),y.toArray(P,3),y.set(f),y.toArray(P,6),y.toArray(P,9),y.set(g),y.toArray(P,12),y.toArray(P,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:j6}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=j6);class In0 extends Zi{constructor(a,f={}){super(a),this.isWater=!0;const g=this,y=f.textureWidth!==void 0?f.textureWidth:512,P=f.textureHeight!==void 0?f.textureHeight:512,G=f.clipBias!==void 0?f.clipBias:0,W=f.alpha!==void 0?f.alpha:1,X=f.time!==void 0?f.time:0,Y=f.waterNormals!==void 0?f.waterNormals:null,Q=f.sunDirection!==void 0?f.sunDirection:new K0(.70707,.70707,0),o0=new qt(f.sunColor!==void 0?f.sunColor:16777215),a0=new qt(f.waterColor!==void 0?f.waterColor:8355711),m0=f.eye!==void 0?f.eye:new K0(0,0,0),v0=f.distortionScale!==void 0?f.distortionScale:20,C0=f.side!==void 0?f.side:y1,u0=f.fog!==void 0?f.fog:!1,t0=new V1,N0=new K0,T0=new K0,O0=new K0,k0=new ue,L0=new K0(0,0,-1),D0=new Fe,V0=new K0,h2=new K0,R0=new Fe,j0=new ue,R2=new hn,N2=new pr(y,P),o2={name:"MirrorShader",uniforms:ms.merge([tt.fog,tt.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new ue},sunColor:{value:new qt(8355711)},sunDirection:{value:new K0(.70707,.70707,0)},eye:{value:new K0},waterColor:{value:new qt(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},x2=new v1({name:o2.name,uniforms:ms.clone(o2.uniforms),vertexShader:o2.vertexShader,fragmentShader:o2.fragmentShader,lights:!0,side:C0,fog:u0});x2.uniforms.mirrorSampler.value=N2.texture,x2.uniforms.textureMatrix.value=j0,x2.uniforms.alpha.value=W,x2.uniforms.time.value=X,x2.uniforms.normalSampler.value=Y,x2.uniforms.sunColor.value=o0,x2.uniforms.waterColor.value=a0,x2.uniforms.sunDirection.value=Q,x2.uniforms.distortionScale.value=v0,x2.uniforms.eye.value=m0,g.material=x2,g.onBeforeRender=function($0,k2,w2){if(T0.setFromMatrixPosition(g.matrixWorld),O0.setFromMatrixPosition(w2.matrixWorld),k0.extractRotation(g.matrixWorld),N0.set(0,0,1),N0.applyMatrix4(k0),V0.subVectors(T0,O0),V0.dot(N0)>0)return;V0.reflect(N0).negate(),V0.add(T0),k0.extractRotation(w2.matrixWorld),L0.set(0,0,-1),L0.applyMatrix4(k0),L0.add(O0),h2.subVectors(T0,L0),h2.reflect(N0).negate(),h2.add(T0),R2.position.copy(V0),R2.up.set(0,1,0),R2.up.applyMatrix4(k0),R2.up.reflect(N0),R2.lookAt(h2),R2.far=w2.far,R2.updateMatrixWorld(),R2.projectionMatrix.copy(w2.projectionMatrix),j0.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),j0.multiply(R2.projectionMatrix),j0.multiply(R2.matrixWorldInverse),t0.setFromNormalAndCoplanarPoint(N0,T0),t0.applyMatrix4(R2.matrixWorldInverse),D0.set(t0.normal.x,t0.normal.y,t0.normal.z,t0.constant);const f2=R2.projectionMatrix;R0.x=(Math.sign(D0.x)+f2.elements[8])/f2.elements[0],R0.y=(Math.sign(D0.y)+f2.elements[9])/f2.elements[5],R0.z=-1,R0.w=(1+f2.elements[10])/f2.elements[14],D0.multiplyScalar(2/D0.dot(R0)),f2.elements[2]=D0.x,f2.elements[6]=D0.y,f2.elements[10]=D0.z+1-G,f2.elements[14]=D0.w,m0.setFromMatrixPosition(w2.matrixWorld);const F2=$0.getRenderTarget(),L2=$0.xr.enabled,X2=$0.shadowMap.autoUpdate;g.visible=!1,$0.xr.enabled=!1,$0.shadowMap.autoUpdate=!1,$0.setRenderTarget(N2),$0.state.buffers.depth.setMask(!0),$0.autoClear===!1&&$0.clear(),$0.render(k2,R2),g.visible=!0,$0.xr.enabled=L2,$0.shadowMap.autoUpdate=X2,$0.setRenderTarget(F2);const Y2=w2.viewport;Y2!==void 0&&$0.state.viewport(Y2)}}}const Bn=new Di0,Dn0=()=>{const E=new Br(50,.2,50),a=new d1({color:65280}),f=new Zi(E,a);f.position.set(0,-.05,0),Bn.add(f)};let os;const p5=()=>{const E=new gs(1e4,1e4);os=new In0(E,{textureWidth:512,textureHeight:512,waterNormals:new s8().load("bg/waternormals.jpg",function(a){a.wrapS=a.wrapT=Eo}),sunDirection:new K0,sunColor:16777215,waterColor:7695,distortionScale:3.7,fog:Bn.fog!==void 0}),os.rotation.x=-Math.PI/2,console.log(os),Bn.add(os)};p5();const Pn0=E=>{const a=new d1({map:new s8().load(E),color:16777215,side:dn}),f=new Zi(new Cs(5,100,100),a);f.scale.set(30,30,30),Bn.add(f)},Ln0=new fn0(16777215,.8),_l=new ln0(4210752,.4),al=new un0(16777215,1),ll=new _n0(16777215,1,100,Math.PI/4,.5,1),kn0=()=>{_l.position.set(0,2,2),al.position.set(-1,2,2),ll.position.set(0,4,0),Bn.add(Ln0),Bn.add(_l),Bn.add(al),Bn.add(ll)},pl={type:"change"},A6={type:"start"},ul={type:"end"},M4=new b4,fl=new V1,On0=Math.cos(70*S$.DEG2RAD);class u5 extends ur{constructor(a,f){super(),this.object=a,this.domElement=f,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new K0,this.cursor=new K0,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zr.ROTATE,MIDDLE:Zr.DOLLY,RIGHT:Zr.PAN},this.touches={ONE:Qr.ROTATE,TWO:Qr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return W.phi},this.getAzimuthalAngle=function(){return W.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(Z0){Z0.addEventListener("keydown",xt),this._domElementKeyEvents=Z0},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",xt),this._domElementKeyEvents=null},this.saveState=function(){g.target0.copy(g.target),g.position0.copy(g.object.position),g.zoom0=g.object.zoom},this.reset=function(){g.target.copy(g.target0),g.object.position.copy(g.position0),g.object.zoom=g.zoom0,g.object.updateProjectionMatrix(),g.dispatchEvent(pl),g.update(),P=y.NONE},this.update=function(){const Z0=new K0,q2=new Ei().setFromUnitVectors(a.up,new K0(0,1,0)),rt=q2.clone().invert(),Tt=new K0,b0=new Ei,j2=new K0,H2=2*Math.PI;return function(Rt=null){const de=g.object.position;Z0.copy(de).sub(g.target),Z0.applyQuaternion(q2),W.setFromVector3(Z0),g.autoRotate&&P===y.NONE&&R2(R0(Rt)),g.enableDamping?(W.theta+=X.theta*g.dampingFactor,W.phi+=X.phi*g.dampingFactor):(W.theta+=X.theta,W.phi+=X.phi);let ee=g.minAzimuthAngle,Le=g.maxAzimuthAngle;isFinite(ee)&&isFinite(Le)&&(ee<-Math.PI?ee+=H2:ee>Math.PI&&(ee-=H2),Le<-Math.PI?Le+=H2:Le>Math.PI&&(Le-=H2),ee<=Le?W.theta=Math.max(ee,Math.min(Le,W.theta)):W.theta=W.theta>(ee+Le)/2?Math.max(ee,W.theta):Math.min(Le,W.theta)),W.phi=Math.max(g.minPolarAngle,Math.min(g.maxPolarAngle,W.phi)),W.makeSafe(),g.enableDamping===!0?g.target.addScaledVector(Q,g.dampingFactor):g.target.add(Q),g.target.sub(g.cursor),g.target.clampLength(g.minTargetRadius,g.maxTargetRadius),g.target.add(g.cursor),g.zoomToCursor&&L0||g.object.isOrthographicCamera?W.radius=F2(W.radius):W.radius=F2(W.radius*Y),Z0.setFromSpherical(W),Z0.applyQuaternion(rt),de.copy(g.target).add(Z0),g.object.lookAt(g.target),g.enableDamping===!0?(X.theta*=1-g.dampingFactor,X.phi*=1-g.dampingFactor,Q.multiplyScalar(1-g.dampingFactor)):(X.set(0,0,0),Q.set(0,0,0));let ui=!1;if(g.zoomToCursor&&L0){let ye=null;if(g.object.isPerspectiveCamera){const Ze=Z0.length();ye=F2(Ze*Y);const Xi=Ze-ye;g.object.position.addScaledVector(O0,Xi),g.object.updateMatrixWorld()}else if(g.object.isOrthographicCamera){const Ze=new K0(k0.x,k0.y,0);Ze.unproject(g.object),g.object.zoom=Math.max(g.minZoom,Math.min(g.maxZoom,g.object.zoom/Y)),g.object.updateProjectionMatrix(),ui=!0;const Xi=new K0(k0.x,k0.y,0);Xi.unproject(g.object),g.object.position.sub(Xi).add(Ze),g.object.updateMatrixWorld(),ye=Z0.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),g.zoomToCursor=!1;ye!==null&&(this.screenSpacePanning?g.target.set(0,0,-1).transformDirection(g.object.matrix).multiplyScalar(ye).add(g.object.position):(M4.origin.copy(g.object.position),M4.direction.set(0,0,-1).transformDirection(g.object.matrix),Math.abs(g.object.up.dot(M4.direction))<On0?a.lookAt(g.target):(fl.setFromNormalAndCoplanarPoint(g.object.up,g.target),M4.intersectPlane(fl,g.target))))}else g.object.isOrthographicCamera&&(ui=Y!==1,ui&&(g.object.zoom=Math.max(g.minZoom,Math.min(g.maxZoom,g.object.zoom/Y)),g.object.updateProjectionMatrix()));return Y=1,L0=!1,ui||Tt.distanceToSquared(g.object.position)>G||8*(1-b0.dot(g.object.quaternion))>G||j2.distanceToSquared(g.target)>0?(g.dispatchEvent(pl),Tt.copy(g.object.position),b0.copy(g.object.quaternion),j2.copy(g.target),!0):!1}}(),this.dispose=function(){g.domElement.removeEventListener("contextmenu",ge),g.domElement.removeEventListener("pointerdown",z0),g.domElement.removeEventListener("pointercancel",v2),g.domElement.removeEventListener("wheel",U2),g.domElement.removeEventListener("pointermove",F0),g.domElement.removeEventListener("pointerup",v2),g._domElementKeyEvents!==null&&(g._domElementKeyEvents.removeEventListener("keydown",xt),g._domElementKeyEvents=null)};const g=this,y={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let P=y.NONE;const G=1e-6,W=new cl,X=new cl;let Y=1;const Q=new K0,o0=new st,a0=new st,m0=new st,v0=new st,C0=new st,u0=new st,t0=new st,N0=new st,T0=new st,O0=new K0,k0=new st;let L0=!1;const D0=[],V0={};let h2=!1;function R0(Z0){return Z0!==null?2*Math.PI/60*g.autoRotateSpeed*Z0:2*Math.PI/60/60*g.autoRotateSpeed}function j0(Z0){const q2=Math.abs(Z0*.01);return Math.pow(.95,g.zoomSpeed*q2)}function R2(Z0){X.theta-=Z0}function N2(Z0){X.phi-=Z0}const o2=function(){const Z0=new K0;return function(rt,Tt){Z0.setFromMatrixColumn(Tt,0),Z0.multiplyScalar(-rt),Q.add(Z0)}}(),x2=function(){const Z0=new K0;return function(rt,Tt){g.screenSpacePanning===!0?Z0.setFromMatrixColumn(Tt,1):(Z0.setFromMatrixColumn(Tt,0),Z0.crossVectors(g.object.up,Z0)),Z0.multiplyScalar(rt),Q.add(Z0)}}(),$0=function(){const Z0=new K0;return function(rt,Tt){const b0=g.domElement;if(g.object.isPerspectiveCamera){const j2=g.object.position;Z0.copy(j2).sub(g.target);let H2=Z0.length();H2*=Math.tan(g.object.fov/2*Math.PI/180),o2(2*rt*H2/b0.clientHeight,g.object.matrix),x2(2*Tt*H2/b0.clientHeight,g.object.matrix)}else g.object.isOrthographicCamera?(o2(rt*(g.object.right-g.object.left)/g.object.zoom/b0.clientWidth,g.object.matrix),x2(Tt*(g.object.top-g.object.bottom)/g.object.zoom/b0.clientHeight,g.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),g.enablePan=!1)}}();function k2(Z0){g.object.isPerspectiveCamera||g.object.isOrthographicCamera?Y/=Z0:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),g.enableZoom=!1)}function w2(Z0){g.object.isPerspectiveCamera||g.object.isOrthographicCamera?Y*=Z0:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),g.enableZoom=!1)}function f2(Z0,q2){if(!g.zoomToCursor)return;L0=!0;const rt=g.domElement.getBoundingClientRect(),Tt=Z0-rt.left,b0=q2-rt.top,j2=rt.width,H2=rt.height;k0.x=Tt/j2*2-1,k0.y=-(b0/H2)*2+1,O0.set(k0.x,k0.y,1).unproject(g.object).sub(g.object.position).normalize()}function F2(Z0){return Math.max(g.minDistance,Math.min(g.maxDistance,Z0))}function L2(Z0){o0.set(Z0.clientX,Z0.clientY)}function X2(Z0){f2(Z0.clientX,Z0.clientX),t0.set(Z0.clientX,Z0.clientY)}function Y2(Z0){v0.set(Z0.clientX,Z0.clientY)}function c2(Z0){a0.set(Z0.clientX,Z0.clientY),m0.subVectors(a0,o0).multiplyScalar(g.rotateSpeed);const q2=g.domElement;R2(2*Math.PI*m0.x/q2.clientHeight),N2(2*Math.PI*m0.y/q2.clientHeight),o0.copy(a0),g.update()}function g2(Z0){N0.set(Z0.clientX,Z0.clientY),T0.subVectors(N0,t0),T0.y>0?k2(j0(T0.y)):T0.y<0&&w2(j0(T0.y)),t0.copy(N0),g.update()}function P2(Z0){C0.set(Z0.clientX,Z0.clientY),u0.subVectors(C0,v0).multiplyScalar(g.panSpeed),$0(u0.x,u0.y),v0.copy(C0),g.update()}function z2(Z0){f2(Z0.clientX,Z0.clientY),Z0.deltaY<0?w2(j0(Z0.deltaY)):Z0.deltaY>0&&k2(j0(Z0.deltaY)),g.update()}function J2(Z0){let q2=!1;switch(Z0.code){case g.keys.UP:Z0.ctrlKey||Z0.metaKey||Z0.shiftKey?N2(2*Math.PI*g.rotateSpeed/g.domElement.clientHeight):$0(0,g.keyPanSpeed),q2=!0;break;case g.keys.BOTTOM:Z0.ctrlKey||Z0.metaKey||Z0.shiftKey?N2(-2*Math.PI*g.rotateSpeed/g.domElement.clientHeight):$0(0,-g.keyPanSpeed),q2=!0;break;case g.keys.LEFT:Z0.ctrlKey||Z0.metaKey||Z0.shiftKey?R2(2*Math.PI*g.rotateSpeed/g.domElement.clientHeight):$0(g.keyPanSpeed,0),q2=!0;break;case g.keys.RIGHT:Z0.ctrlKey||Z0.metaKey||Z0.shiftKey?R2(-2*Math.PI*g.rotateSpeed/g.domElement.clientHeight):$0(-g.keyPanSpeed,0),q2=!0;break}q2&&(Z0.preventDefault(),g.update())}function $2(Z0){if(D0.length===1)o0.set(Z0.pageX,Z0.pageY);else{const q2=ct(Z0),rt=.5*(Z0.pageX+q2.x),Tt=.5*(Z0.pageY+q2.y);o0.set(rt,Tt)}}function Dt(Z0){if(D0.length===1)v0.set(Z0.pageX,Z0.pageY);else{const q2=ct(Z0),rt=.5*(Z0.pageX+q2.x),Tt=.5*(Z0.pageY+q2.y);v0.set(rt,Tt)}}function Ut(Z0){const q2=ct(Z0),rt=Z0.pageX-q2.x,Tt=Z0.pageY-q2.y,b0=Math.sqrt(rt*rt+Tt*Tt);t0.set(0,b0)}function l2(Z0){g.enableZoom&&Ut(Z0),g.enablePan&&Dt(Z0)}function ce(Z0){g.enableZoom&&Ut(Z0),g.enableRotate&&$2(Z0)}function Mt(Z0){if(D0.length==1)a0.set(Z0.pageX,Z0.pageY);else{const rt=ct(Z0),Tt=.5*(Z0.pageX+rt.x),b0=.5*(Z0.pageY+rt.y);a0.set(Tt,b0)}m0.subVectors(a0,o0).multiplyScalar(g.rotateSpeed);const q2=g.domElement;R2(2*Math.PI*m0.x/q2.clientHeight),N2(2*Math.PI*m0.y/q2.clientHeight),o0.copy(a0)}function Lt(Z0){if(D0.length===1)C0.set(Z0.pageX,Z0.pageY);else{const q2=ct(Z0),rt=.5*(Z0.pageX+q2.x),Tt=.5*(Z0.pageY+q2.y);C0.set(rt,Tt)}u0.subVectors(C0,v0).multiplyScalar(g.panSpeed),$0(u0.x,u0.y),v0.copy(C0)}function yt(Z0){const q2=ct(Z0),rt=Z0.pageX-q2.x,Tt=Z0.pageY-q2.y,b0=Math.sqrt(rt*rt+Tt*Tt);N0.set(0,b0),T0.set(0,Math.pow(N0.y/t0.y,g.zoomSpeed)),k2(T0.y),t0.copy(N0);const j2=(Z0.pageX+q2.x)*.5,H2=(Z0.pageY+q2.y)*.5;f2(j2,H2)}function Ue(Z0){g.enableZoom&&yt(Z0),g.enablePan&&Lt(Z0)}function jt(Z0){g.enableZoom&&yt(Z0),g.enableRotate&&Mt(Z0)}function z0(Z0){g.enabled!==!1&&(D0.length===0&&(g.domElement.setPointerCapture(Z0.pointerId),g.domElement.addEventListener("pointermove",F0),g.domElement.addEventListener("pointerup",v2)),Zt(Z0),Z0.pointerType==="touch"?Bt(Z0):G2(Z0))}function F0(Z0){g.enabled!==!1&&(Z0.pointerType==="touch"?W2(Z0):V2(Z0))}function v2(Z0){switch(Wt(Z0),D0.length){case 0:g.domElement.releasePointerCapture(Z0.pointerId),g.domElement.removeEventListener("pointermove",F0),g.domElement.removeEventListener("pointerup",v2),g.dispatchEvent(ul),P=y.NONE;break;case 1:const q2=D0[0],rt=V0[q2];Bt({pointerId:q2,pageX:rt.x,pageY:rt.y});break}}function G2(Z0){let q2;switch(Z0.button){case 0:q2=g.mouseButtons.LEFT;break;case 1:q2=g.mouseButtons.MIDDLE;break;case 2:q2=g.mouseButtons.RIGHT;break;default:q2=-1}switch(q2){case Zr.DOLLY:if(g.enableZoom===!1)return;X2(Z0),P=y.DOLLY;break;case Zr.ROTATE:if(Z0.ctrlKey||Z0.metaKey||Z0.shiftKey){if(g.enablePan===!1)return;Y2(Z0),P=y.PAN}else{if(g.enableRotate===!1)return;L2(Z0),P=y.ROTATE}break;case Zr.PAN:if(Z0.ctrlKey||Z0.metaKey||Z0.shiftKey){if(g.enableRotate===!1)return;L2(Z0),P=y.ROTATE}else{if(g.enablePan===!1)return;Y2(Z0),P=y.PAN}break;default:P=y.NONE}P!==y.NONE&&g.dispatchEvent(A6)}function V2(Z0){switch(P){case y.ROTATE:if(g.enableRotate===!1)return;c2(Z0);break;case y.DOLLY:if(g.enableZoom===!1)return;g2(Z0);break;case y.PAN:if(g.enablePan===!1)return;P2(Z0);break}}function U2(Z0){g.enabled===!1||g.enableZoom===!1||P!==y.NONE||(Z0.preventDefault(),g.dispatchEvent(A6),z2(vt(Z0)),g.dispatchEvent(ul))}function vt(Z0){const q2=Z0.deltaMode,rt={clientX:Z0.clientX,clientY:Z0.clientY,deltaY:Z0.deltaY};switch(q2){case 1:rt.deltaY*=16;break;case 2:rt.deltaY*=100;break}return Z0.ctrlKey&&!h2&&(rt.deltaY*=10),rt}function nt(Z0){Z0.key==="Control"&&(h2=!0,g.domElement.getRootNode().addEventListener("keyup",pt,{passive:!0,capture:!0}))}function pt(Z0){Z0.key==="Control"&&(h2=!1,g.domElement.getRootNode().removeEventListener("keyup",pt,{passive:!0,capture:!0}))}function xt(Z0){g.enabled===!1||g.enablePan===!1||J2(Z0)}function Bt(Z0){switch(mt(Z0),D0.length){case 1:switch(g.touches.ONE){case Qr.ROTATE:if(g.enableRotate===!1)return;$2(Z0),P=y.TOUCH_ROTATE;break;case Qr.PAN:if(g.enablePan===!1)return;Dt(Z0),P=y.TOUCH_PAN;break;default:P=y.NONE}break;case 2:switch(g.touches.TWO){case Qr.DOLLY_PAN:if(g.enableZoom===!1&&g.enablePan===!1)return;l2(Z0),P=y.TOUCH_DOLLY_PAN;break;case Qr.DOLLY_ROTATE:if(g.enableZoom===!1&&g.enableRotate===!1)return;ce(Z0),P=y.TOUCH_DOLLY_ROTATE;break;default:P=y.NONE}break;default:P=y.NONE}P!==y.NONE&&g.dispatchEvent(A6)}function W2(Z0){switch(mt(Z0),P){case y.TOUCH_ROTATE:if(g.enableRotate===!1)return;Mt(Z0),g.update();break;case y.TOUCH_PAN:if(g.enablePan===!1)return;Lt(Z0),g.update();break;case y.TOUCH_DOLLY_PAN:if(g.enableZoom===!1&&g.enablePan===!1)return;Ue(Z0),g.update();break;case y.TOUCH_DOLLY_ROTATE:if(g.enableZoom===!1&&g.enableRotate===!1)return;jt(Z0),g.update();break;default:P=y.NONE}}function ge(Z0){g.enabled!==!1&&Z0.preventDefault()}function Zt(Z0){D0.push(Z0.pointerId)}function Wt(Z0){delete V0[Z0.pointerId];for(let q2=0;q2<D0.length;q2++)if(D0[q2]==Z0.pointerId){D0.splice(q2,1);return}}function mt(Z0){let q2=V0[Z0.pointerId];q2===void 0&&(q2=new st,V0[Z0.pointerId]=q2),q2.set(Z0.pageX,Z0.pageY)}function ct(Z0){const q2=Z0.pointerId===D0[0]?D0[1]:D0[0];return V0[q2]}g.domElement.addEventListener("contextmenu",ge),g.domElement.addEventListener("pointerdown",z0),g.domElement.addEventListener("pointercancel",v2),g.domElement.addEventListener("wheel",U2,{passive:!1}),g.domElement.getRootNode().addEventListener("keydown",nt,{passive:!0,capture:!0}),this.update()}}const hl=window.innerWidth-10,ml=window.innerHeight-50,m1=new t5({antialias:!0}),Fn0=()=>{f5.addEventListener("change",()=>{m1.setSize(hl,ml),m1.setPixelRatio(Math.min(window.devicePixelRatio,2)),Fn.aspect=hl/ml,Fn.updateProjectionMatrix(),m1.render(Bn,Fn)})},Bn0=window.innerWidth-10,Nn0=window.innerHeight-50,Fn=new hn(50,Bn0/Nn0,.1,1e4),f5=new u5(Fn,m1.domElement);f5.target.set(0,0,0);Fn.target=new K0(0,100,0);const Un0=()=>{Fn.position.x=10,Fn.position.z=80,Fn.position.y=5,Fn.lookAt(0,0,0),Fn.up=new K0(0,1,0)},Gn0=()=>{let E=new u5(Fn,m1.domElement);E.enablePan=!1,E.enableZoom=!0,E.minDistance=0,E.maxDistance=100,E.enableDamping=!0,E.dampingFactor=.1,E.maxPolarAngle=Math.PI/4*3,E.minPolarAngle=Math.PI/4,E.autoRotate=!0,E.autoRotateSpeed=1},dl=new Ei,yl=new K0,is=new K0,vl=new K0,ns=new K0,E6=new K0,T4=new Ei,Wn0=new K0,R6=new K0,z6=new K0,Er=new ue;class gl{constructor(a,f=[]){this.mesh=a,this.iks=f,this._valid()}update(){const a=this.iks;for(let f=0,g=a.length;f<g;f++)this.updateOne(a[f]);return this}updateOne(a){const f=this.mesh.skeleton.bones,g=Math,y=f[a.effector],P=f[a.target];yl.setFromMatrixPosition(P.matrixWorld);const G=a.links,W=a.iteration!==void 0?a.iteration:1;for(let X=0;X<W;X++){let Y=!1;for(let Q=0,o0=G.length;Q<o0;Q++){const a0=f[G[Q].index];if(G[Q].enabled===!1)break;const m0=G[Q].limitation,v0=G[Q].rotationMin,C0=G[Q].rotationMax;a0.matrixWorld.decompose(E6,T4,Wn0),T4.invert(),vl.setFromMatrixPosition(y.matrixWorld),ns.subVectors(vl,E6),ns.applyQuaternion(T4),ns.normalize(),is.subVectors(yl,E6),is.applyQuaternion(T4),is.normalize();let u0=is.dot(ns);if(u0>1?u0=1:u0<-1&&(u0=-1),u0=g.acos(u0),!(u0<1e-5)){if(a.minAngle!==void 0&&u0<a.minAngle&&(u0=a.minAngle),a.maxAngle!==void 0&&u0>a.maxAngle&&(u0=a.maxAngle),R6.crossVectors(ns,is),R6.normalize(),dl.setFromAxisAngle(R6,u0),a0.quaternion.multiply(dl),m0!==void 0){let t0=a0.quaternion.w;t0>1&&(t0=1);const N0=g.sqrt(1-t0*t0);a0.quaternion.set(m0.x*N0,m0.y*N0,m0.z*N0,t0)}v0!==void 0&&a0.rotation.setFromVector3(z6.setFromEuler(a0.rotation).max(v0)),C0!==void 0&&a0.rotation.setFromVector3(z6.setFromEuler(a0.rotation).min(C0)),a0.updateMatrixWorld(!0),Y=!0}}if(!Y)break}return this}createHelper(){return new Vn0(this.mesh,this.iks)}_valid(){const a=this.iks,f=this.mesh.skeleton.bones;for(let g=0,y=a.length;g<y;g++){const P=a[g],G=f[P.effector],W=P.links;let X,Y;X=G;for(let Q=0,o0=W.length;Q<o0;Q++)Y=f[W[Q].index],X.parent!==Y&&console.warn("THREE.CCDIKSolver: bone "+X.name+" is not the child of bone "+Y.name),X=Y}}}function P4(E,a){return z6.setFromMatrixPosition(E.matrixWorld).applyMatrix4(a)}function I6(E,a,f,g){const y=P4(f,g);E[a*3+0]=y.x,E[a*3+1]=y.y,E[a*3+2]=y.z}class Vn0 extends _i{constructor(a,f=[],g=.25){super(),this.root=a,this.iks=f,this.matrix.copy(a.matrixWorld),this.matrixAutoUpdate=!1,this.sphereGeometry=new Cs(g,16,8),this.targetSphereMaterial=new d1({color:new qt(16746632),depthTest:!1,depthWrite:!1,transparent:!0}),this.effectorSphereMaterial=new d1({color:new qt(8978312),depthTest:!1,depthWrite:!1,transparent:!0}),this.linkSphereMaterial=new d1({color:new qt(8947967),depthTest:!1,depthWrite:!1,transparent:!0}),this.lineMaterial=new e8({color:new qt(16711680),depthTest:!1,depthWrite:!1,transparent:!0}),this._init()}updateMatrixWorld(a){const f=this.root;if(this.visible){let g=0;const y=this.iks,P=f.skeleton.bones;Er.copy(f.matrixWorld).invert();for(let G=0,W=y.length;G<W;G++){const X=y[G],Y=P[X.target],Q=P[X.effector],o0=this.children[g++],a0=this.children[g++];o0.position.copy(P4(Y,Er)),a0.position.copy(P4(Q,Er));for(let C0=0,u0=X.links.length;C0<u0;C0++){const t0=X.links[C0],N0=P[t0.index];this.children[g++].position.copy(P4(N0,Er))}const m0=this.children[g++],v0=m0.geometry.attributes.position.array;I6(v0,0,Y,Er),I6(v0,1,Q,Er);for(let C0=0,u0=X.links.length;C0<u0;C0++){const t0=X.links[C0],N0=P[t0.index];I6(v0,C0+2,N0,Er)}m0.geometry.attributes.position.needsUpdate=!0}}this.matrix.copy(f.matrixWorld),super.updateMatrixWorld(a)}dispose(){this.sphereGeometry.dispose(),this.targetSphereMaterial.dispose(),this.effectorSphereMaterial.dispose(),this.linkSphereMaterial.dispose(),this.lineMaterial.dispose();const a=this.children;for(let f=0;f<a.length;f++){const g=a[f];g.isLine&&g.geometry.dispose()}}_init(){const a=this,f=this.iks;function g(X){const Y=new Nn,Q=new Float32Array((2+X.links.length)*3);return Y.setAttribute("position",new e1(Q,3)),Y}function y(){return new Zi(a.sphereGeometry,a.targetSphereMaterial)}function P(){return new Zi(a.sphereGeometry,a.effectorSphereMaterial)}function G(){return new Zi(a.sphereGeometry,a.linkSphereMaterial)}function W(X){return new i5(g(X),a.lineMaterial)}for(let X=0,Y=f.length;X<Y;X++){const Q=f[X];this.add(y()),this.add(P());for(let o0=0,a0=Q.links.length;o0<a0;o0++)this.add(G());this.add(W(Q))}}}class Cl{constructor(a,f,g=[],y={}){if(typeof Ammo>"u")throw new Error("THREE.MMDPhysics: Import ammo.js https://github.com/kripken/ammo.js");this.manager=new zn0,this.mesh=a,this.unitStep=y.unitStep!==void 0?y.unitStep:1/65,this.maxStepNum=y.maxStepNum!==void 0?y.maxStepNum:3,this.gravity=new K0(0,-9.8*10,0),y.gravity!==void 0&&this.gravity.copy(y.gravity),this.world=y.world!==void 0?y.world:null,this.bodies=[],this.constraints=[],this._init(a,f,g)}update(a){const f=this.manager,g=this.mesh;let y=!1;const P=f.allocThreeVector3(),G=f.allocThreeQuaternion(),W=f.allocThreeVector3();g.matrixWorld.decompose(P,G,W),(W.x!==1||W.y!==1||W.z!==1)&&(y=!0);let X;return y&&(X=g.parent,X!==null&&(g.parent=null),W.copy(this.mesh.scale),g.scale.set(1,1,1),g.updateMatrixWorld(!0)),this._updateRigidBodies(),this._stepSimulation(a),this._updateBones(),y&&(X!==null&&(g.parent=X),g.scale.copy(W)),f.freeThreeVector3(W),f.freeThreeQuaternion(G),f.freeThreeVector3(P),this}reset(){for(let a=0,f=this.bodies.length;a<f;a++)this.bodies[a].reset();return this}warmup(a){for(let f=0;f<a;f++)this.update(1/60);return this}setGravity(a){return this.world.setGravity(new Ammo.btVector3(a.x,a.y,a.z)),this.gravity.copy(a),this}createHelper(){return new bn0(this.mesh,this)}_init(a,f,g){const y=this.manager,P=a.parent;P!==null&&(a.parent=null);const G=y.allocThreeVector3(),W=y.allocThreeQuaternion(),X=y.allocThreeVector3();G.copy(a.position),W.copy(a.quaternion),X.copy(a.scale),a.position.set(0,0,0),a.quaternion.set(0,0,0,1),a.scale.set(1,1,1),a.updateMatrixWorld(!0),this.world===null&&(this.world=this._createWorld(),this.setGravity(this.gravity)),this._initRigidBodies(f),this._initConstraints(g),P!==null&&(a.parent=P),a.position.copy(G),a.quaternion.copy(W),a.scale.copy(X),a.updateMatrixWorld(!0),this.reset(),y.freeThreeVector3(G),y.freeThreeQuaternion(W),y.freeThreeVector3(X)}_createWorld(){const a=new Ammo.btDefaultCollisionConfiguration,f=new Ammo.btCollisionDispatcher(a),g=new Ammo.btDbvtBroadphase,y=new Ammo.btSequentialImpulseConstraintSolver;return new Ammo.btDiscreteDynamicsWorld(f,g,y,a)}_initRigidBodies(a){for(let f=0,g=a.length;f<g;f++)this.bodies.push(new Hn0(this.mesh,this.world,a[f],this.manager))}_initConstraints(a){for(let f=0,g=a.length;f<g;f++){const y=a[f],P=this.bodies[y.rigidBodyIndex1],G=this.bodies[y.rigidBodyIndex2];this.constraints.push(new jn0(this.mesh,this.world,P,G,y,this.manager))}}_stepSimulation(a){const f=this.unitStep;let g=a,y=(a/f|0)+1;g<f&&(g=f,y=1),y>this.maxStepNum&&(y=this.maxStepNum),this.world.stepSimulation(g,y,f)}_updateRigidBodies(){for(let a=0,f=this.bodies.length;a<f;a++)this.bodies[a].updateFromBone()}_updateBones(){for(let a=0,f=this.bodies.length;a<f;a++)this.bodies[a].updateBone()}}class zn0{constructor(){this.threeVector3s=[],this.threeMatrix4s=[],this.threeQuaternions=[],this.threeEulers=[],this.transforms=[],this.quaternions=[],this.vector3s=[]}allocThreeVector3(){return this.threeVector3s.length>0?this.threeVector3s.pop():new K0}freeThreeVector3(a){this.threeVector3s.push(a)}allocThreeMatrix4(){return this.threeMatrix4s.length>0?this.threeMatrix4s.pop():new ue}freeThreeMatrix4(a){this.threeMatrix4s.push(a)}allocThreeQuaternion(){return this.threeQuaternions.length>0?this.threeQuaternions.pop():new Ei}freeThreeQuaternion(a){this.threeQuaternions.push(a)}allocThreeEuler(){return this.threeEulers.length>0?this.threeEulers.pop():new Oo}freeThreeEuler(a){this.threeEulers.push(a)}allocTransform(){return this.transforms.length>0?this.transforms.pop():new Ammo.btTransform}freeTransform(a){this.transforms.push(a)}allocQuaternion(){return this.quaternions.length>0?this.quaternions.pop():new Ammo.btQuaternion}freeQuaternion(a){this.quaternions.push(a)}allocVector3(){return this.vector3s.length>0?this.vector3s.pop():new Ammo.btVector3}freeVector3(a){this.vector3s.push(a)}setIdentity(a){a.setIdentity()}getBasis(a){var f=this.allocQuaternion();return a.getBasis().getRotation(f),f}getBasisAsMatrix3(a){var f=this.getBasis(a),g=this.quaternionToMatrix3(f);return this.freeQuaternion(f),g}getOrigin(a){return a.getOrigin()}setOrigin(a,f){a.getOrigin().setValue(f.x(),f.y(),f.z())}copyOrigin(a,f){var g=f.getOrigin();this.setOrigin(a,g)}setBasis(a,f){a.setRotation(f)}setBasisFromMatrix3(a,f){var g=this.matrix3ToQuaternion(f);this.setBasis(a,g),this.freeQuaternion(g)}setOriginFromArray3(a,f){a.getOrigin().setValue(f[0],f[1],f[2])}setOriginFromThreeVector3(a,f){a.getOrigin().setValue(f.x,f.y,f.z)}setBasisFromArray3(a,f){var g=this.allocThreeQuaternion(),y=this.allocThreeEuler();y.set(f[0],f[1],f[2]),this.setBasisFromThreeQuaternion(a,g.setFromEuler(y)),this.freeThreeEuler(y),this.freeThreeQuaternion(g)}setBasisFromThreeQuaternion(a,f){var g=this.allocQuaternion();g.setX(f.x),g.setY(f.y),g.setZ(f.z),g.setW(f.w),this.setBasis(a,g),this.freeQuaternion(g)}multiplyTransforms(a,f){var g=this.allocTransform();this.setIdentity(g);var y=this.getBasisAsMatrix3(a),P=this.getBasisAsMatrix3(f),G=this.getOrigin(a),W=this.getOrigin(f),X=this.multiplyMatrix3ByVector3(y,W),Y=this.addVector3(X,G);this.setOrigin(g,Y);var Q=this.multiplyMatrices3(y,P);return this.setBasisFromMatrix3(g,Q),this.freeVector3(X),this.freeVector3(Y),g}inverseTransform(a){var f=this.allocTransform(),g=this.getBasisAsMatrix3(a),y=this.getOrigin(a),P=this.transposeMatrix3(g),G=this.negativeVector3(y),W=this.multiplyMatrix3ByVector3(P,G);return this.setOrigin(f,W),this.setBasisFromMatrix3(f,P),this.freeVector3(G),this.freeVector3(W),f}multiplyMatrices3(a,f){var g=[],y=this.rowOfMatrix3(a,0),P=this.rowOfMatrix3(a,1),G=this.rowOfMatrix3(a,2),W=this.columnOfMatrix3(f,0),X=this.columnOfMatrix3(f,1),Y=this.columnOfMatrix3(f,2);return g[0]=this.dotVectors3(y,W),g[1]=this.dotVectors3(y,X),g[2]=this.dotVectors3(y,Y),g[3]=this.dotVectors3(P,W),g[4]=this.dotVectors3(P,X),g[5]=this.dotVectors3(P,Y),g[6]=this.dotVectors3(G,W),g[7]=this.dotVectors3(G,X),g[8]=this.dotVectors3(G,Y),this.freeVector3(y),this.freeVector3(P),this.freeVector3(G),this.freeVector3(W),this.freeVector3(X),this.freeVector3(Y),g}addVector3(a,f){var g=this.allocVector3();return g.setValue(a.x()+f.x(),a.y()+f.y(),a.z()+f.z()),g}dotVectors3(a,f){return a.x()*f.x()+a.y()*f.y()+a.z()*f.z()}rowOfMatrix3(a,f){var g=this.allocVector3();return g.setValue(a[f*3+0],a[f*3+1],a[f*3+2]),g}columnOfMatrix3(a,f){var g=this.allocVector3();return g.setValue(a[f+0],a[f+3],a[f+6]),g}negativeVector3(a){var f=this.allocVector3();return f.setValue(-a.x(),-a.y(),-a.z()),f}multiplyMatrix3ByVector3(a,f){var g=this.allocVector3(),y=this.rowOfMatrix3(a,0),P=this.rowOfMatrix3(a,1),G=this.rowOfMatrix3(a,2),W=this.dotVectors3(y,f),X=this.dotVectors3(P,f),Y=this.dotVectors3(G,f);return g.setValue(W,X,Y),this.freeVector3(y),this.freeVector3(P),this.freeVector3(G),g}transposeMatrix3(a){var f=[];return f[0]=a[0],f[1]=a[3],f[2]=a[6],f[3]=a[1],f[4]=a[4],f[5]=a[7],f[6]=a[2],f[7]=a[5],f[8]=a[8],f}quaternionToMatrix3(a){var f=[],g=a.x(),y=a.y(),P=a.z(),G=a.w(),W=g*g,X=y*y,Y=P*P,Q=g*y,o0=y*P,a0=P*g,m0=g*G,v0=y*G,C0=P*G;return f[0]=1-2*(X+Y),f[1]=2*(Q-C0),f[2]=2*(a0+v0),f[3]=2*(Q+C0),f[4]=1-2*(Y+W),f[5]=2*(o0-m0),f[6]=2*(a0-v0),f[7]=2*(o0+m0),f[8]=1-2*(W+X),f}matrix3ToQuaternion(a){var f=a[0]+a[4]+a[8],g,y,P,G,W;f>0?(g=Math.sqrt(f+1)*2,W=.25*g,y=(a[7]-a[5])/g,P=(a[2]-a[6])/g,G=(a[3]-a[1])/g):a[0]>a[4]&&a[0]>a[8]?(g=Math.sqrt(1+a[0]-a[4]-a[8])*2,W=(a[7]-a[5])/g,y=.25*g,P=(a[1]+a[3])/g,G=(a[2]+a[6])/g):a[4]>a[8]?(g=Math.sqrt(1+a[4]-a[0]-a[8])*2,W=(a[2]-a[6])/g,y=(a[1]+a[3])/g,P=.25*g,G=(a[5]+a[7])/g):(g=Math.sqrt(1+a[8]-a[0]-a[4])*2,W=(a[3]-a[1])/g,y=(a[2]+a[6])/g,P=(a[5]+a[7])/g,G=.25*g);var X=this.allocQuaternion();return X.setX(y),X.setY(P),X.setZ(G),X.setW(W),X}}class Hn0{constructor(a,f,g,y){this.mesh=a,this.world=f,this.params=g,this.manager=y,this.body=null,this.bone=null,this.boneOffsetForm=null,this.boneOffsetFormInverse=null,this._init()}reset(){return this._setTransformFromBone(),this}updateFromBone(){return this.params.boneIndex!==-1&&this.params.type===0&&this._setTransformFromBone(),this}updateBone(){return this.params.type===0||this.params.boneIndex===-1?this:(this._updateBoneRotation(),this.params.type===1&&this._updateBonePosition(),this.bone.updateMatrixWorld(!0),this.params.type===2&&this._setPositionFromBone(),this)}_init(){function a(u0){switch(u0.shapeType){case 0:return new Ammo.btSphereShape(u0.width);case 1:return new Ammo.btBoxShape(new Ammo.btVector3(u0.width,u0.height,u0.depth));case 2:return new Ammo.btCapsuleShape(u0.width,u0.height);default:throw new Error("unknown shape type "+u0.shapeType)}}const f=this.manager,g=this.params,y=this.mesh.skeleton.bones,P=g.boneIndex===-1?new $6:y[g.boneIndex],G=a(g),W=g.type===0?0:g.weight,X=f.allocVector3();X.setValue(0,0,0),W!==0&&G.calculateLocalInertia(W,X);const Y=f.allocTransform();f.setIdentity(Y),f.setOriginFromArray3(Y,g.position),f.setBasisFromArray3(Y,g.rotation);const Q=f.allocThreeVector3(),o0=f.allocTransform();f.setIdentity(o0),f.setOriginFromThreeVector3(o0,P.getWorldPosition(Q));const a0=f.multiplyTransforms(o0,Y),m0=new Ammo.btDefaultMotionState(a0),v0=new Ammo.btRigidBodyConstructionInfo(W,m0,G,X);v0.set_m_friction(g.friction),v0.set_m_restitution(g.restitution);const C0=new Ammo.btRigidBody(v0);g.type===0&&(C0.setCollisionFlags(C0.getCollisionFlags()|2),C0.setActivationState(4)),C0.setDamping(g.positionDamping,g.rotationDamping),C0.setSleepingThresholds(0,0),this.world.addRigidBody(C0,1<<g.groupIndex,g.groupTarget),this.body=C0,this.bone=P,this.boneOffsetForm=Y,this.boneOffsetFormInverse=f.inverseTransform(Y),f.freeVector3(X),f.freeTransform(a0),f.freeTransform(o0),f.freeThreeVector3(Q)}_getBoneTransform(){const a=this.manager,f=a.allocThreeVector3(),g=a.allocThreeQuaternion(),y=a.allocThreeVector3();this.bone.matrixWorld.decompose(f,g,y);const P=a.allocTransform();a.setOriginFromThreeVector3(P,f),a.setBasisFromThreeQuaternion(P,g);const G=a.multiplyTransforms(P,this.boneOffsetForm);return a.freeTransform(P),a.freeThreeVector3(y),a.freeThreeQuaternion(g),a.freeThreeVector3(f),G}_getWorldTransformForBone(){const a=this.manager,f=this.body.getCenterOfMassTransform();return a.multiplyTransforms(f,this.boneOffsetFormInverse)}_setTransformFromBone(){const a=this.manager,f=this._getBoneTransform();this.body.setCenterOfMassTransform(f),this.body.getMotionState().setWorldTransform(f),a.freeTransform(f)}_setPositionFromBone(){const a=this.manager,f=this._getBoneTransform(),g=a.allocTransform();this.body.getMotionState().getWorldTransform(g),a.copyOrigin(g,f),this.body.setCenterOfMassTransform(g),this.body.getMotionState().setWorldTransform(g),a.freeTransform(g),a.freeTransform(f)}_updateBoneRotation(){const a=this.manager,f=this._getWorldTransformForBone(),g=a.getBasis(f),y=a.allocThreeQuaternion(),P=a.allocThreeQuaternion(),G=a.allocThreeQuaternion();y.set(g.x(),g.y(),g.z(),g.w()),P.setFromRotationMatrix(this.bone.matrixWorld),P.conjugate(),P.multiply(y),G.setFromRotationMatrix(this.bone.matrix),this.bone.quaternion.copy(P.multiply(G).normalize()),a.freeThreeQuaternion(y),a.freeThreeQuaternion(P),a.freeThreeQuaternion(G),a.freeQuaternion(g),a.freeTransform(f)}_updateBonePosition(){const a=this.manager,f=this._getWorldTransformForBone(),g=a.allocThreeVector3(),y=a.getOrigin(f);g.set(y.x(),y.y(),y.z()),this.bone.parent&&this.bone.parent.worldToLocal(g),this.bone.position.copy(g),a.freeThreeVector3(g),a.freeTransform(f)}}class jn0{constructor(a,f,g,y,P,G){this.mesh=a,this.world=f,this.bodyA=g,this.bodyB=y,this.params=P,this.manager=G,this.constraint=null,this._init()}_init(){const a=this.manager,f=this.params,g=this.bodyA,y=this.bodyB,P=a.allocTransform();a.setIdentity(P),a.setOriginFromArray3(P,f.position),a.setBasisFromArray3(P,f.rotation);const G=a.allocTransform(),W=a.allocTransform();g.body.getMotionState().getWorldTransform(G),y.body.getMotionState().getWorldTransform(W);const X=a.inverseTransform(G),Y=a.inverseTransform(W),Q=a.multiplyTransforms(X,P),o0=a.multiplyTransforms(Y,P),a0=new Ammo.btGeneric6DofSpringConstraint(g.body,y.body,Q,o0,!0),m0=a.allocVector3(),v0=a.allocVector3(),C0=a.allocVector3(),u0=a.allocVector3();m0.setValue(f.translationLimitation1[0],f.translationLimitation1[1],f.translationLimitation1[2]),v0.setValue(f.translationLimitation2[0],f.translationLimitation2[1],f.translationLimitation2[2]),C0.setValue(f.rotationLimitation1[0],f.rotationLimitation1[1],f.rotationLimitation1[2]),u0.setValue(f.rotationLimitation2[0],f.rotationLimitation2[1],f.rotationLimitation2[2]),a0.setLinearLowerLimit(m0),a0.setLinearUpperLimit(v0),a0.setAngularLowerLimit(C0),a0.setAngularUpperLimit(u0);for(let t0=0;t0<3;t0++)f.springPosition[t0]!==0&&(a0.enableSpring(t0,!0),a0.setStiffness(t0,f.springPosition[t0]));for(let t0=0;t0<3;t0++)f.springRotation[t0]!==0&&(a0.enableSpring(t0+3,!0),a0.setStiffness(t0+3,f.springRotation[t0]));if(a0.setParam!==void 0)for(let t0=0;t0<6;t0++)a0.setParam(2,.475,t0);this.world.addConstraint(a0,!0),this.constraint=a0,a.freeTransform(P),a.freeTransform(G),a.freeTransform(W),a.freeTransform(X),a.freeTransform(Y),a.freeTransform(Q),a.freeTransform(o0),a.freeVector3(m0),a.freeVector3(v0),a.freeVector3(C0),a.freeVector3(u0)}}const A4=new K0,rs=new Ei,E4=new K0,D6=new ue;class bn0 extends _i{constructor(a,f){super(),this.root=a,this.physics=f,this.matrix.copy(a.matrixWorld),this.matrixAutoUpdate=!1,this.materials=[],this.materials.push(new d1({color:new qt(16746632),wireframe:!0,depthTest:!1,depthWrite:!1,opacity:.25,transparent:!0})),this.materials.push(new d1({color:new qt(8978312),wireframe:!0,depthTest:!1,depthWrite:!1,opacity:.25,transparent:!0})),this.materials.push(new d1({color:new qt(8947967),wireframe:!0,depthTest:!1,depthWrite:!1,opacity:.25,transparent:!0})),this._init()}dispose(){const a=this.materials,f=this.children;for(let g=0;g<a.length;g++)a[g].dispose();for(let g=0;g<f.length;g++){const y=f[g];y.isMesh&&y.geometry.dispose()}}updateMatrixWorld(a){var f=this.root;if(this.visible){var g=this.physics.bodies;D6.copy(f.matrixWorld).decompose(A4,rs,E4).compose(A4,rs,E4.set(1,1,1)).invert();for(var y=0,P=g.length;y<P;y++){var G=g[y].body,W=this.children[y],X=G.getCenterOfMassTransform(),Y=X.getOrigin(),Q=X.getRotation();W.position.set(Y.x(),Y.y(),Y.z()).applyMatrix4(D6),W.quaternion.setFromRotationMatrix(D6).multiply(rs.set(Q.x(),Q.y(),Q.z(),Q.w()))}}this.matrix.copy(f.matrixWorld).decompose(A4,rs,E4).compose(A4,rs,E4.set(1,1,1)),super.updateMatrixWorld(a)}_init(){var a=this.physics.bodies;function f(G){switch(G.shapeType){case 0:return new Cs(G.width,16,8);case 1:return new Br(G.width*2,G.height*2,G.depth*2,8,8,8);case 2:return new o8(G.width,G.height,8,16);default:return null}}for(var g=0,y=a.length;g<y;g++){var P=a[g].params;this.add(new Zi(f(P),this.materials[P.type]))}}}class Xn0{constructor(a={}){this.meshes=[],this.camera=null,this.cameraTarget=new _i,this.cameraTarget.name="target",this.audio=null,this.audioManager=null,this.objects=new WeakMap,this.configuration={sync:a.sync!==void 0?a.sync:!0,afterglow:a.afterglow!==void 0?a.afterglow:0,resetPhysicsOnLoop:a.resetPhysicsOnLoop!==void 0?a.resetPhysicsOnLoop:!0,pmxAnimation:a.pmxAnimation!==void 0?a.pmxAnimation:!1},this.enabled={animation:!0,ik:!0,grant:!0,physics:!0,cameraAnimation:!0},this.onBeforePhysics=function(){},this.sharedPhysics=!1,this.masterPhysics=null}add(a,f={}){if(a.isSkinnedMesh)this._addMesh(a,f);else if(a.isCamera)this._setupCamera(a,f);else if(a.type==="Audio")this._setupAudio(a,f);else throw new Error("THREE.MMDAnimationHelper.add: accepts only THREE.SkinnedMesh or THREE.Camera or THREE.Audio instance.");return this.configuration.sync&&this._syncDuration(),this}remove(a){if(a.isSkinnedMesh)this._removeMesh(a);else if(a.isCamera)this._clearCamera(a);else if(a.type==="Audio")this._clearAudio(a);else throw new Error("THREE.MMDAnimationHelper.remove: accepts only THREE.SkinnedMesh or THREE.Camera or THREE.Audio instance.");return this.configuration.sync&&this._syncDuration(),this}update(a){this.audioManager!==null&&this.audioManager.control(a);for(let f=0;f<this.meshes.length;f++)this._animateMesh(this.meshes[f],a);return this.sharedPhysics&&this._updateSharedPhysics(a),this.camera!==null&&this._animateCamera(this.camera,a),this}pose(a,f,g={}){g.resetPose!==!1&&a.pose();const y=a.skeleton.bones,P=f.bones,G={};for(let Y=0,Q=y.length;Y<Q;Y++)G[y[Y].name]=Y;const W=new K0,X=new Ei;for(let Y=0,Q=P.length;Y<Q;Y++){const o0=P[Y],a0=G[o0.name];if(a0===void 0)continue;const m0=y[a0];m0.position.add(W.fromArray(o0.translation)),m0.quaternion.multiply(X.fromArray(o0.quaternion))}if(a.updateMatrixWorld(!0),this.configuration.pmxAnimation&&a.geometry.userData.MMD&&a.geometry.userData.MMD.format==="pmx"){const Y=this._sortBoneDataArray(a.geometry.userData.MMD.bones.slice()),Q=g.ik!==!1?this._createCCDIKSolver(a):null,o0=g.grant!==!1?this.createGrantSolver(a):null;this._animatePMXMesh(a,Y,Q,o0)}else g.ik!==!1&&this._createCCDIKSolver(a).update(),g.grant!==!1&&this.createGrantSolver(a).update();return this}enable(a,f){if(this.enabled[a]===void 0)throw new Error("THREE.MMDAnimationHelper.enable: unknown key "+a);if(this.enabled[a]=f,a==="physics")for(let g=0,y=this.meshes.length;g<y;g++)this._optimizeIK(this.meshes[g],f);return this}createGrantSolver(a){return new Kn0(a,a.geometry.userData.MMD.grants)}_addMesh(a,f){if(this.meshes.indexOf(a)>=0)throw new Error("THREE.MMDAnimationHelper._addMesh: SkinnedMesh '"+a.name+"' has already been added.");return this.meshes.push(a),this.objects.set(a,{looped:!1}),this._setupMeshAnimation(a,f.animation),f.physics!==!1&&this._setupMeshPhysics(a,f),this}_setupCamera(a,f){if(this.camera===a)throw new Error("THREE.MMDAnimationHelper._setupCamera: Camera '"+a.name+"' has already been set.");return this.camera&&this.clearCamera(this.camera),this.camera=a,a.add(this.cameraTarget),this.objects.set(a,{}),f.animation!==void 0&&this._setupCameraAnimation(a,f.animation),this}_setupAudio(a,f){if(this.audio===a)throw new Error("THREE.MMDAnimationHelper._setupAudio: Audio '"+a.name+"' has already been set.");return this.audio&&this.clearAudio(this.audio),this.audio=a,this.audioManager=new Yn0(a,f),this.objects.set(this.audioManager,{duration:this.audioManager.duration}),this}_removeMesh(a){let f=!1,g=0;for(let y=0,P=this.meshes.length;y<P;y++){if(this.meshes[y]===a){this.objects.delete(a),f=!0;continue}this.meshes[g++]=this.meshes[y]}if(!f)throw new Error("THREE.MMDAnimationHelper._removeMesh: SkinnedMesh '"+a.name+"' has not been added yet.");return this.meshes.length=g,this}_clearCamera(a){if(a!==this.camera)throw new Error("THREE.MMDAnimationHelper._clearCamera: Camera '"+a.name+"' has not been set yet.");return this.camera.remove(this.cameraTarget),this.objects.delete(this.camera),this.camera=null,this}_clearAudio(a){if(a!==this.audio)throw new Error("THREE.MMDAnimationHelper._clearAudio: Audio '"+a.name+"' has not been set yet.");return this.objects.delete(this.audioManager),this.audio=null,this.audioManager=null,this}_setupMeshAnimation(a,f){const g=this.objects.get(a);if(f!==void 0){const y=Array.isArray(f)?f:[f];g.mixer=new sl(a);for(let P=0,G=y.length;P<G;P++)g.mixer.clipAction(y[P]).play();g.mixer.addEventListener("loop",function(P){const G=P.action._clip.tracks;G.length>0&&G[0].name.slice(0,6)!==".bones"||(g.looped=!0)})}return g.ikSolver=this._createCCDIKSolver(a),g.grantSolver=this.createGrantSolver(a),this}_setupCameraAnimation(a,f){const g=Array.isArray(f)?f:[f],y=this.objects.get(a);y.mixer=new sl(a);for(let P=0,G=g.length;P<G;P++)y.mixer.clipAction(g[P]).play()}_setupMeshPhysics(a,f){const g=this.objects.get(a);if(f.world===void 0&&this.sharedPhysics){const y=this._getMasterPhysics();y!==null&&(world=y.world)}g.physics=this._createMMDPhysics(a,f),g.mixer&&f.animationWarmup!==!1&&(this._animateMesh(a,0),g.physics.reset()),g.physics.warmup(f.warmup!==void 0?f.warmup:60),this._optimizeIK(a,!0)}_animateMesh(a,f){const g=this.objects.get(a),y=g.mixer,P=g.ikSolver,G=g.grantSolver,W=g.physics,X=g.looped;y&&this.enabled.animation&&(this._restoreBones(a),y.update(f),this._saveBones(a),this.configuration.pmxAnimation&&a.geometry.userData.MMD&&a.geometry.userData.MMD.format==="pmx"?(g.sortedBonesData||(g.sortedBonesData=this._sortBoneDataArray(a.geometry.userData.MMD.bones.slice())),this._animatePMXMesh(a,g.sortedBonesData,P&&this.enabled.ik?P:null,G&&this.enabled.grant?G:null)):(P&&this.enabled.ik&&(a.updateMatrixWorld(!0),P.update()),G&&this.enabled.grant&&G.update())),X===!0&&this.enabled.physics&&(W&&this.configuration.resetPhysicsOnLoop&&W.reset(),g.looped=!1),W&&this.enabled.physics&&!this.sharedPhysics&&(this.onBeforePhysics(a),W.update(f))}_sortBoneDataArray(a){return a.sort(function(f,g){return f.transformationClass!==g.transformationClass?f.transformationClass-g.transformationClass:f.index-g.index})}_animatePMXMesh(a,f,g,y){H6=0,sr.clear();for(let P=0,G=f.length;P<G;P++)h5(a,f[P].index,g,y);return a.updateMatrixWorld(!0),this}_animateCamera(a,f){const g=this.objects.get(a).mixer;g&&this.enabled.cameraAnimation&&(g.update(f),a.updateProjectionMatrix(),a.up.set(0,1,0),a.up.applyQuaternion(a.quaternion),a.lookAt(this.cameraTarget.position))}_optimizeIK(a,f){const g=a.geometry.userData.MMD.iks,y=a.geometry.userData.MMD.bones;for(let P=0,G=g.length;P<G;P++){const X=g[P].links;for(let Y=0,Q=X.length;Y<Q;Y++){const o0=X[Y];f===!0?o0.enabled=!(y[o0.index].rigidBodyType>0):o0.enabled=!0}}}_createCCDIKSolver(a){if(gl===void 0)throw new Error("THREE.MMDAnimationHelper: Import CCDIKSolver.");return new gl(a,a.geometry.userData.MMD.iks)}_createMMDPhysics(a,f){if(Cl===void 0)throw new Error("THREE.MMDPhysics: Import MMDPhysics.");return new Cl(a,a.geometry.userData.MMD.rigidBodies,a.geometry.userData.MMD.constraints,f)}_syncDuration(){let a=0;const f=this.objects,g=this.meshes,y=this.camera,P=this.audioManager;for(let G=0,W=g.length;G<W;G++){const X=this.objects.get(g[G]).mixer;if(X!==void 0)for(let Y=0;Y<X._actions.length;Y++){const Q=X._actions[Y]._clip;f.has(Q)||f.set(Q,{duration:Q.duration}),a=Math.max(a,f.get(Q).duration)}}if(y!==null){const G=this.objects.get(y).mixer;if(G!==void 0)for(let W=0,X=G._actions.length;W<X;W++){const Y=G._actions[W]._clip;f.has(Y)||f.set(Y,{duration:Y.duration}),a=Math.max(a,f.get(Y).duration)}}P!==null&&(a=Math.max(a,f.get(P).duration)),a+=this.configuration.afterglow;for(let G=0,W=this.meshes.length;G<W;G++){const X=this.objects.get(this.meshes[G]).mixer;if(X!==void 0)for(let Y=0,Q=X._actions.length;Y<Q;Y++)X._actions[Y]._clip.duration=a}if(y!==null){const G=this.objects.get(y).mixer;if(G!==void 0)for(let W=0,X=G._actions.length;W<X;W++)G._actions[W]._clip.duration=a}P!==null&&(P.duration=a)}_updatePropertyMixersBuffer(a){const f=this.objects.get(a).mixer,g=f._bindings,y=f._accuIndex;for(let P=0,G=g.length;P<G;P++){const W=g[P],X=W.buffer,Y=W.valueSize,Q=(y+1)*Y;W.binding.getValue(X,Q)}}_saveBones(a){const f=this.objects.get(a),g=a.skeleton.bones;let y=f.backupBones;y===void 0&&(y=new Float32Array(g.length*7),f.backupBones=y);for(let P=0,G=g.length;P<G;P++){const W=g[P];W.position.toArray(y,P*7),W.quaternion.toArray(y,P*7+3)}}_restoreBones(a){const g=this.objects.get(a).backupBones;if(g===void 0)return;const y=a.skeleton.bones;for(let P=0,G=y.length;P<G;P++){const W=y[P];W.position.fromArray(g,P*7),W.quaternion.fromArray(g,P*7+3)}}_getMasterPhysics(){if(this.masterPhysics!==null)return this.masterPhysics;for(let a=0,f=this.meshes.length;a<f;a++){const g=this.meshes[a].physics;if(g!=null)return this.masterPhysics=g,this.masterPhysics}return null}_updateSharedPhysics(a){if(this.meshes.length===0||!this.enabled.physics||!this.sharedPhysics)return;const f=this._getMasterPhysics();if(f!==null){for(let g=0,y=this.meshes.length;g<y;g++){const P=this.meshes[g].physics;P!=null&&P.updateRigidBodies()}f.stepSimulation(a);for(let g=0,y=this.meshes.length;g<y;g++){const P=this.meshes[g].physics;P!=null&&P.updateBones()}}}}const P6=[];let H6=0;function qn0(){return H6>=P6.length&&P6.push(new Ei),P6[H6++]}const sr=new Map;function h5(E,a,f,g){const y=E.skeleton.bones,G=E.geometry.userData.MMD.bones[a],W=y[a];if(sr.has(a))return;const X=qn0();if(sr.set(a,X.copy(W.quaternion)),g&&G.grant&&!G.grant.isLocal&&G.grant.affectRotation){const Y=G.grant.parentIndex,Q=G.grant.ratio;sr.has(Y)||h5(E,Y,f,g),g.addGrantRotation(W,sr.get(Y),Q)}if(f&&G.ik){E.updateMatrixWorld(!0),f.updateOne(G.ik);const Y=G.ik.links;for(let Q=0,o0=Y.length;Q<o0;Q++){const a0=Y[Q];if(a0.enabled===!1)continue;const m0=a0.index;sr.has(m0)&&sr.set(m0,sr.get(m0).copy(y[m0].quaternion))}}X.copy(W.quaternion)}class Yn0{constructor(a,f={}){this.audio=a,this.elapsedTime=0,this.currentTime=0,this.delayTime=f.delayTime!==void 0?f.delayTime:0,this.audioDuration=this.audio.buffer.duration,this.duration=this.audioDuration+this.delayTime}control(a){return this.elapsed+=a,this.currentTime+=a,this._shouldStopAudio()&&this.audio.stop(),this._shouldStartAudio()&&this.audio.play(),this}_shouldStartAudio(){if(this.audio.isPlaying)return!1;for(;this.currentTime>=this.duration;)this.currentTime-=this.duration;return!(this.currentTime<this.delayTime||this.currentTime-this.delayTime>this.audioDuration)}_shouldStopAudio(){return this.audio.isPlaying&&this.currentTime>=this.duration}}const L6=new Ei;class Kn0{constructor(a,f=[]){this.mesh=a,this.grants=f}update(){const a=this.grants;for(let f=0,g=a.length;f<g;f++)this.updateOne(a[f]);return this}updateOne(a){const f=this.mesh.skeleton.bones,g=f[a.index],y=f[a.parentIndex];return a.isLocal?(a.affectPosition,a.affectRotation):(a.affectPosition,a.affectRotation&&this.addGrantRotation(g,y.quaternion,a.ratio)),this}addGrantRotation(a,f,g){return L6.set(0,0,0,1),L6.slerp(f,g),a.quaternion.multiply(L6),this}}const Zn0=()=>{const E=new Rn0(100);Bn.add(E)};let l8=new Xn0;const Qn0=`
varying vec3 vViewPosition;

struct BlinnPhongMaterial {

	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;

};

void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;

}

void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
`,Jn0=`
#ifdef USE_MATCAP

	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks
	vec4 matcapColor = texture2D( matcap, uv );

	#ifdef MATCAP_BLENDING_MULTIPLY

		outgoingLight *= matcapColor.rgb;

	#elif defined( MATCAP_BLENDING_ADD )

		outgoingLight += matcapColor.rgb;

	#endif

#endif
`,R4={name:"MMDToonShader",defines:{TOON:!0,MATCAP:!0,MATCAP_BLENDING_ADD:!0},uniforms:ms.merge([mn.toon.uniforms,mn.phong.uniforms,mn.matcap.uniforms]),vertexShader:mn.phong.vertexShader.replace("#include <envmap_pars_vertex>","").replace("#include <envmap_vertex>",""),fragmentShader:mn.phong.fragmentShader.replace("#include <common>",`
					#ifdef USE_MATCAP
						uniform sampler2D matcap;
					#endif

					#include <common>
				`).replace("#include <envmap_common_pars_fragment>",`
					#include <gradientmap_pars_fragment>
				`).replace("#include <envmap_pars_fragment>","").replace("#include <lights_phong_pars_fragment>",Qn0).replace("#include <envmap_fragment>",`
					${Jn0}