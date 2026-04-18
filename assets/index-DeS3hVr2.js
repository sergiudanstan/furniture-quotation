var Jf=Object.defineProperty;var Qf=(i,e,t)=>e in i?Jf(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Nt=(i,e,t)=>Qf(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const eh="modulepreload",th=function(i){return"/furniture-quotation/"+i},Ml={},Ac=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let a=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");r=a(t.map(c=>{if(c=th(c),c in Ml)return;Ml[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const m=document.createElement("link");if(m.rel=u?"stylesheet":eh,u||(m.as="script"),m.crossOrigin="",m.href=c,l&&m.setAttribute("nonce",l),document.head.appendChild(m),u)return new Promise((_,v)=>{m.addEventListener("load",_),m.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ko="173",nh=0,Sl=1,ih=2,wc=1,rh=2,Yn=3,xi=0,rn=1,jn=2,ei=0,ur=1,yl=2,El=3,Tl=4,sh=5,Li=100,ah=101,oh=102,lh=103,ch=104,uh=200,fh=201,hh=202,dh=203,Wa=204,Xa=205,ph=206,mh=207,gh=208,_h=209,vh=210,xh=211,Mh=212,Sh=213,yh=214,$a=0,qa=1,Ya=2,dr=3,ja=4,Ka=5,Za=6,Ja=7,Rc=0,Eh=1,Th=2,_i=0,Cc=1,Pc=2,Dc=3,Lc=4,Uc=5,Ic=6,Nc=7,Fc=300,pr=301,mr=302,Qa=303,eo=304,Xs=306,to=1e3,Ni=1001,no=1002,wn=1003,bh=1004,ss=1005,In=1006,ca=1007,Fi=1008,ii=1009,Oc=1010,Bc=1011,Wr=1012,Ho=1013,Oi=1014,Kn=1015,Mr=1016,Vo=1017,Go=1018,gr=1020,zc=35902,kc=1021,Hc=1022,An=1023,Vc=1024,Gc=1025,fr=1026,_r=1027,Wc=1028,Wo=1029,Xc=1030,Xo=1031,$o=1033,Ps=33776,Ds=33777,Ls=33778,Us=33779,io=35840,ro=35841,so=35842,ao=35843,oo=36196,lo=37492,co=37496,uo=37808,fo=37809,ho=37810,po=37811,mo=37812,go=37813,_o=37814,vo=37815,xo=37816,Mo=37817,So=37818,yo=37819,Eo=37820,To=37821,Is=36492,bo=36494,Ao=36495,$c=36283,wo=36284,Ro=36285,Co=36286,Ah=3200,wh=3201,qc=0,Rh=1,gi="",hn="srgb",vr="srgb-linear",Bs="linear",gt="srgb",qi=7680,bl=519,Ch=512,Ph=513,Dh=514,Yc=515,Lh=516,Uh=517,Ih=518,Nh=519,Al=35044,wl="300 es",Zn=2e3,zs=2001;class Sr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ua=Math.PI/180,Po=180/Math.PI;function qr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function lt(i,e,t){return Math.max(e,Math.min(t,i))}function Fh(i,e){return(i%e+e)%e}function fa(i,e,t){return(1-t)*i+t*e}function Lr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function tn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ut{constructor(e=0,t=0){ut.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,n,r,s,a,o,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],m=n[2],_=n[5],v=n[8],x=r[0],g=r[3],h=r[6],R=r[1],A=r[4],T=r[7],I=r[2],D=r[5],P=r[8];return s[0]=a*x+o*R+l*I,s[3]=a*g+o*A+l*D,s[6]=a*h+o*T+l*P,s[1]=c*x+u*R+d*I,s[4]=c*g+u*A+d*D,s[7]=c*h+u*T+d*P,s[2]=m*x+_*R+v*I,s[5]=m*g+_*A+v*D,s[8]=m*h+_*T+v*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,m=o*l-u*s,_=c*s-a*l,v=t*d+n*m+r*_;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=d*x,e[1]=(r*c-u*n)*x,e[2]=(o*n-r*a)*x,e[3]=m*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-o*t)*x,e[6]=_*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ha.makeScale(e,t)),this}rotate(e){return this.premultiply(ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ha=new Je;function jc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ks(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Oh(){const i=ks("canvas");return i.style.display="block",i}const Rl={};function or(i){i in Rl||(Rl[i]=!0,console.warn(i))}function Bh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function zh(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function kh(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Cl=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pl=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hh(){const i={enabled:!0,workingColorSpace:vr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===gt&&(r.r=ti(r.r),r.g=ti(r.g),r.b=ti(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===gt&&(r.r=hr(r.r),r.g=hr(r.g),r.b=hr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===gi?Bs:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vr]:{primaries:e,whitePoint:n,transfer:Bs,toXYZ:Cl,fromXYZ:Pl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:e,whitePoint:n,transfer:gt,toXYZ:Cl,fromXYZ:Pl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),i}const ct=Hh();function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Yi;class Vh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yi===void 0&&(Yi=ks("canvas")),Yi.width=e.width,Yi.height=e.height;const n=Yi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Yi}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ks("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ti(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ti(t[n]/255)*255):t[n]=ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gh=0;class Kc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=qr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(da(r[a].image)):s.push(da(r[a]))}else s=da(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wh=0;class sn extends Sr{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,n=Ni,r=Ni,s=In,a=Fi,o=An,l=ii,c=sn.DEFAULT_ANISOTROPY,u=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=qr(),this.name="",this.source=new Kc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case to:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case no:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case to:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case no:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Fc;sn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,n=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],m=l[1],_=l[5],v=l[9],x=l[2],g=l[6],h=l[10];if(Math.abs(u-m)<.01&&Math.abs(d-x)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+m)<.1&&Math.abs(d+x)<.1&&Math.abs(v+g)<.1&&Math.abs(c+_+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,T=(_+1)/2,I=(h+1)/2,D=(u+m)/4,P=(d+x)/4,L=(v+g)/4;return A>T&&A>I?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=D/n,s=P/n):T>I?T<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),n=D/r,s=L/r):I<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),n=P/s,r=L/s),this.set(n,r,s,t),this}let R=Math.sqrt((g-v)*(g-v)+(d-x)*(d-x)+(m-u)*(m-u));return Math.abs(R)<.001&&(R=1),this.x=(g-v)/R,this.y=(d-x)/R,this.z=(m-u)/R,this.w=Math.acos((c+_+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xh extends Sr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new sn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Kc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends Xh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Zc extends sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $h extends sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const m=s[a+0],_=s[a+1],v=s[a+2],x=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=m,e[t+1]=_,e[t+2]=v,e[t+3]=x;return}if(d!==x||l!==m||c!==_||u!==v){let g=1-o;const h=l*m+c*_+u*v+d*x,R=h>=0?1:-1,A=1-h*h;if(A>Number.EPSILON){const I=Math.sqrt(A),D=Math.atan2(I,h*R);g=Math.sin(g*D)/I,o=Math.sin(o*D)/I}const T=o*R;if(l=l*g+m*T,c=c*g+_*T,u=u*g+v*T,d=d*g+x*T,g===1-o){const I=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=I,c*=I,u*=I,d*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[a],m=s[a+1],_=s[a+2],v=s[a+3];return e[t]=o*v+u*d+l*_-c*m,e[t+1]=l*v+u*m+c*d-o*_,e[t+2]=c*v+u*_+o*m-l*d,e[t+3]=u*v-o*d-l*m-c*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),d=o(s/2),m=l(n/2),_=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=m*u*d+c*_*v,this._y=c*_*d-m*u*v,this._z=c*u*v+m*_*d,this._w=c*u*d-m*_*v;break;case"YXZ":this._x=m*u*d+c*_*v,this._y=c*_*d-m*u*v,this._z=c*u*v-m*_*d,this._w=c*u*d+m*_*v;break;case"ZXY":this._x=m*u*d-c*_*v,this._y=c*_*d+m*u*v,this._z=c*u*v+m*_*d,this._w=c*u*d-m*_*v;break;case"ZYX":this._x=m*u*d-c*_*v,this._y=c*_*d+m*u*v,this._z=c*u*v-m*_*d,this._w=c*u*d+m*_*v;break;case"YZX":this._x=m*u*d+c*_*v,this._y=c*_*d+m*u*v,this._z=c*u*v-m*_*d,this._w=c*u*d-m*_*v;break;case"XZY":this._x=m*u*d-c*_*v,this._y=c*_*d-m*u*v,this._z=c*u*v+m*_*d,this._w=c*u*d+m*_*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],m=n+o+d;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(u-l)*_,this._y=(s-c)*_,this._z=(a-r)*_}else if(n>o&&n>d){const _=2*Math.sqrt(1+n-o-d);this._w=(u-l)/_,this._x=.25*_,this._y=(r+a)/_,this._z=(s+c)/_}else if(o>d){const _=2*Math.sqrt(1+o-n-d);this._w=(s-c)/_,this._x=(r+a)/_,this._y=.25*_,this._z=(l+u)/_}else{const _=2*Math.sqrt(1+d-n-o);this._w=(a-r)/_,this._x=(s+c)/_,this._y=(l+u)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const _=1-t;return this._w=_*a+t*this._w,this._x=_*n+t*this._x,this._y=_*r+t*this._y,this._z=_*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,m=Math.sin(t*u)/c;return this._w=a*d+this._w*m,this._x=n*d+this._x*m,this._y=r*d+this._y*m,this._z=s*d+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,n=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pa.copy(this).projectOnVector(e),this.sub(pa)}reflect(e){return this.sub(pa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pa=new X,Dl=new Yr;class jr{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Mn):Mn.fromBufferAttribute(s,a),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),as.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),as.copy(n.boundingBox)),as.applyMatrix4(e.matrixWorld),this.union(as)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ur),os.subVectors(this.max,Ur),ji.subVectors(e.a,Ur),Ki.subVectors(e.b,Ur),Zi.subVectors(e.c,Ur),ci.subVectors(Ki,ji),ui.subVectors(Zi,Ki),Ti.subVectors(ji,Zi);let t=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-Ti.z,Ti.y,ci.z,0,-ci.x,ui.z,0,-ui.x,Ti.z,0,-Ti.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-Ti.y,Ti.x,0];return!ma(t,ji,Ki,Zi,os)||(t=[1,0,0,0,1,0,0,0,1],!ma(t,ji,Ki,Zi,os))?!1:(ls.crossVectors(ci,ui),t=[ls.x,ls.y,ls.z],ma(t,ji,Ki,Zi,os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hn=[new X,new X,new X,new X,new X,new X,new X,new X],Mn=new X,as=new jr,ji=new X,Ki=new X,Zi=new X,ci=new X,ui=new X,Ti=new X,Ur=new X,os=new X,ls=new X,bi=new X;function ma(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){bi.fromArray(i,s);const o=r.x*Math.abs(bi.x)+r.y*Math.abs(bi.y)+r.z*Math.abs(bi.z),l=e.dot(bi),c=t.dot(bi),u=n.dot(bi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const qh=new jr,Ir=new X,ga=new X;class qo{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):qh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ir.subVectors(e,this.center);const t=Ir.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ir,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ir.copy(e.center).add(ga)),this.expandByPoint(Ir.copy(e.center).sub(ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new X,_a=new X,cs=new X,fi=new X,va=new X,us=new X,xa=new X;class Yh{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){_a.copy(e).add(t).multiplyScalar(.5),cs.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(_a);const s=e.distanceTo(t)*.5,a=-this.direction.dot(cs),o=fi.dot(this.direction),l=-fi.dot(cs),c=fi.lengthSq(),u=Math.abs(1-a*a);let d,m,_,v;if(u>0)if(d=a*l-o,m=a*o-l,v=s*u,d>=0)if(m>=-v)if(m<=v){const x=1/u;d*=x,m*=x,_=d*(d+a*m+2*o)+m*(a*d+m+2*l)+c}else m=s,d=Math.max(0,-(a*m+o)),_=-d*d+m*(m+2*l)+c;else m=-s,d=Math.max(0,-(a*m+o)),_=-d*d+m*(m+2*l)+c;else m<=-v?(d=Math.max(0,-(-a*s+o)),m=d>0?-s:Math.min(Math.max(-s,-l),s),_=-d*d+m*(m+2*l)+c):m<=v?(d=0,m=Math.min(Math.max(-s,-l),s),_=m*(m+2*l)+c):(d=Math.max(0,-(a*s+o)),m=d>0?s:Math.min(Math.max(-s,-l),s),_=-d*d+m*(m+2*l)+c);else m=a>0?-s:s,d=Math.max(0,-(a*m+o)),_=-d*d+m*(m+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(_a).addScaledVector(cs,m),_}intersectSphere(e,t){Vn.subVectors(e.center,this.origin);const n=Vn.dot(this.direction),r=Vn.dot(Vn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,m=this.origin;return c>=0?(n=(e.min.x-m.x)*c,r=(e.max.x-m.x)*c):(n=(e.max.x-m.x)*c,r=(e.min.x-m.x)*c),u>=0?(s=(e.min.y-m.y)*u,a=(e.max.y-m.y)*u):(s=(e.max.y-m.y)*u,a=(e.min.y-m.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-m.z)*d,l=(e.max.z-m.z)*d):(o=(e.max.z-m.z)*d,l=(e.min.z-m.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,n,r,s){va.subVectors(t,e),us.subVectors(n,e),xa.crossVectors(va,us);let a=this.direction.dot(xa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fi.subVectors(this.origin,e);const l=o*this.direction.dot(us.crossVectors(fi,us));if(l<0)return null;const c=o*this.direction.dot(va.cross(fi));if(c<0||l+c>a)return null;const u=-o*fi.dot(xa);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,t,n,r,s,a,o,l,c,u,d,m,_,v,x,g){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,d,m,_,v,x,g)}set(e,t,n,r,s,a,o,l,c,u,d,m,_,v,x,g){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=m,h[3]=_,h[7]=v,h[11]=x,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ji.setFromMatrixColumn(e,0).length(),s=1/Ji.setFromMatrixColumn(e,1).length(),a=1/Ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const m=a*u,_=a*d,v=o*u,x=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=_+v*c,t[5]=m-x*c,t[9]=-o*l,t[2]=x-m*c,t[6]=v+_*c,t[10]=a*l}else if(e.order==="YXZ"){const m=l*u,_=l*d,v=c*u,x=c*d;t[0]=m+x*o,t[4]=v*o-_,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=_*o-v,t[6]=x+m*o,t[10]=a*l}else if(e.order==="ZXY"){const m=l*u,_=l*d,v=c*u,x=c*d;t[0]=m-x*o,t[4]=-a*d,t[8]=v+_*o,t[1]=_+v*o,t[5]=a*u,t[9]=x-m*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const m=a*u,_=a*d,v=o*u,x=o*d;t[0]=l*u,t[4]=v*c-_,t[8]=m*c+x,t[1]=l*d,t[5]=x*c+m,t[9]=_*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const m=a*l,_=a*c,v=o*l,x=o*c;t[0]=l*u,t[4]=x-m*d,t[8]=v*d+_,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=_*d+v,t[10]=m-x*d}else if(e.order==="XZY"){const m=a*l,_=a*c,v=o*l,x=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=m*d+x,t[5]=a*u,t[9]=_*d-v,t[2]=v*d-_,t[6]=o*u,t[10]=x*d+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jh,e,Kh)}lookAt(e,t,n){const r=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),hi.crossVectors(n,cn),hi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),hi.crossVectors(n,cn)),hi.normalize(),fs.crossVectors(cn,hi),r[0]=hi.x,r[4]=fs.x,r[8]=cn.x,r[1]=hi.y,r[5]=fs.y,r[9]=cn.y,r[2]=hi.z,r[6]=fs.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],m=n[9],_=n[13],v=n[2],x=n[6],g=n[10],h=n[14],R=n[3],A=n[7],T=n[11],I=n[15],D=r[0],P=r[4],L=r[8],y=r[12],S=r[1],U=r[5],G=r[9],Y=r[13],J=r[2],ie=r[6],K=r[10],ae=r[14],$=r[3],de=r[7],Ee=r[11],we=r[15];return s[0]=a*D+o*S+l*J+c*$,s[4]=a*P+o*U+l*ie+c*de,s[8]=a*L+o*G+l*K+c*Ee,s[12]=a*y+o*Y+l*ae+c*we,s[1]=u*D+d*S+m*J+_*$,s[5]=u*P+d*U+m*ie+_*de,s[9]=u*L+d*G+m*K+_*Ee,s[13]=u*y+d*Y+m*ae+_*we,s[2]=v*D+x*S+g*J+h*$,s[6]=v*P+x*U+g*ie+h*de,s[10]=v*L+x*G+g*K+h*Ee,s[14]=v*y+x*Y+g*ae+h*we,s[3]=R*D+A*S+T*J+I*$,s[7]=R*P+A*U+T*ie+I*de,s[11]=R*L+A*G+T*K+I*Ee,s[15]=R*y+A*Y+T*ae+I*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],m=e[10],_=e[14],v=e[3],x=e[7],g=e[11],h=e[15];return v*(+s*l*d-r*c*d-s*o*m+n*c*m+r*o*_-n*l*_)+x*(+t*l*_-t*c*m+s*a*m-r*a*_+r*c*u-s*l*u)+g*(+t*c*d-t*o*_-s*a*d+n*a*_+s*o*u-n*c*u)+h*(-r*o*u-t*l*d+t*o*m+r*a*d-n*a*m+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],m=e[10],_=e[11],v=e[12],x=e[13],g=e[14],h=e[15],R=d*g*c-x*m*c+x*l*_-o*g*_-d*l*h+o*m*h,A=v*m*c-u*g*c-v*l*_+a*g*_+u*l*h-a*m*h,T=u*x*c-v*d*c+v*o*_-a*x*_-u*o*h+a*d*h,I=v*d*l-u*x*l-v*o*m+a*x*m+u*o*g-a*d*g,D=t*R+n*A+r*T+s*I;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/D;return e[0]=R*P,e[1]=(x*m*s-d*g*s-x*r*_+n*g*_+d*r*h-n*m*h)*P,e[2]=(o*g*s-x*l*s+x*r*c-n*g*c-o*r*h+n*l*h)*P,e[3]=(d*l*s-o*m*s-d*r*c+n*m*c+o*r*_-n*l*_)*P,e[4]=A*P,e[5]=(u*g*s-v*m*s+v*r*_-t*g*_-u*r*h+t*m*h)*P,e[6]=(v*l*s-a*g*s-v*r*c+t*g*c+a*r*h-t*l*h)*P,e[7]=(a*m*s-u*l*s+u*r*c-t*m*c-a*r*_+t*l*_)*P,e[8]=T*P,e[9]=(v*d*s-u*x*s-v*n*_+t*x*_+u*n*h-t*d*h)*P,e[10]=(a*x*s-v*o*s+v*n*c-t*x*c-a*n*h+t*o*h)*P,e[11]=(u*o*s-a*d*s-u*n*c+t*d*c+a*n*_-t*o*_)*P,e[12]=I*P,e[13]=(u*x*r-v*d*r+v*n*m-t*x*m-u*n*g+t*d*g)*P,e[14]=(v*o*r-a*x*r-v*n*l+t*x*l+a*n*g-t*o*g)*P,e[15]=(a*d*r-u*o*r+u*n*l-t*d*l-a*n*m+t*o*m)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,m=s*c,_=s*u,v=s*d,x=a*u,g=a*d,h=o*d,R=l*c,A=l*u,T=l*d,I=n.x,D=n.y,P=n.z;return r[0]=(1-(x+h))*I,r[1]=(_+T)*I,r[2]=(v-A)*I,r[3]=0,r[4]=(_-T)*D,r[5]=(1-(m+h))*D,r[6]=(g+R)*D,r[7]=0,r[8]=(v+A)*P,r[9]=(g-R)*P,r[10]=(1-(m+x))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Ji.set(r[0],r[1],r[2]).length();const a=Ji.set(r[4],r[5],r[6]).length(),o=Ji.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Sn.copy(this);const c=1/s,u=1/a,d=1/o;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=d,Sn.elements[9]*=d,Sn.elements[10]*=d,t.setFromRotationMatrix(Sn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Zn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),d=(t+e)/(t-e),m=(n+r)/(n-r);let _,v;if(o===Zn)_=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===zs)_=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Zn){const l=this.elements,c=1/(t-e),u=1/(n-r),d=1/(a-s),m=(t+e)*c,_=(n+r)*u;let v,x;if(o===Zn)v=(a+s)*d,x=-2*d;else if(o===zs)v=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ji=new X,Sn=new Et,jh=new X(0,0,0),Kh=new X(1,1,1),hi=new X,fs=new X,cn=new X,Ll=new Et,Ul=new Yr;class ri{constructor(e=0,t=0,n=0,r=ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],m=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(lt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,_),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ll.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ll,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ul.setFromEuler(this),this.setFromQuaternion(Ul,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ri.DEFAULT_ORDER="XYZ";class Jc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zh=0;const Il=new X,Qi=new Yr,Gn=new Et,hs=new X,Nr=new X,Jh=new X,Qh=new Yr,Nl=new X(1,0,0),Fl=new X(0,1,0),Ol=new X(0,0,1),Bl={type:"added"},ed={type:"removed"},er={type:"childadded",child:null},Ma={type:"childremoved",child:null};class an extends Sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new X,t=new ri,n=new Yr,r=new X(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new Je}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis(Nl,e)}rotateY(e){return this.rotateOnAxis(Fl,e)}rotateZ(e){return this.rotateOnAxis(Ol,e)}translateOnAxis(e,t){return Il.copy(e).applyQuaternion(this.quaternion),this.position.add(Il.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nl,e)}translateY(e){return this.translateOnAxis(Fl,e)}translateZ(e){return this.translateOnAxis(Ol,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hs.copy(e):hs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Nr,hs,this.up):Gn.lookAt(hs,Nr,this.up),this.quaternion.setFromRotationMatrix(Gn),r&&(Gn.extractRotation(r.matrixWorld),Qi.setFromRotationMatrix(Gn),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bl),er.child=e,this.dispatchEvent(er),er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ed),Ma.child=e,this.dispatchEvent(Ma),Ma.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bl),er.child=e,this.dispatchEvent(er),er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,e,Jh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,Qh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),m=a(e.skeletons),_=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),m.length>0&&(n.skeletons=m),_.length>0&&(n.animations=_),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}an.DEFAULT_UP=new X(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new X,Wn=new X,Sa=new X,Xn=new X,tr=new X,nr=new X,zl=new X,ya=new X,Ea=new X,Ta=new X,ba=new Dt,Aa=new Dt,wa=new Dt;class bn{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),yn.subVectors(e,t),r.cross(yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){yn.subVectors(r,t),Wn.subVectors(n,t),Sa.subVectors(e,t);const a=yn.dot(yn),o=yn.dot(Wn),l=yn.dot(Sa),c=Wn.dot(Wn),u=Wn.dot(Sa),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const m=1/d,_=(c*l-o*u)*m,v=(a*u-o*l)*m;return s.set(1-_-v,v,_)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Xn.x),l.addScaledVector(a,Xn.y),l.addScaledVector(o,Xn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return ba.setScalar(0),Aa.setScalar(0),wa.setScalar(0),ba.fromBufferAttribute(e,t),Aa.fromBufferAttribute(e,n),wa.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ba,s.x),a.addScaledVector(Aa,s.y),a.addScaledVector(wa,s.z),a}static isFrontFacing(e,t,n,r){return yn.subVectors(n,t),Wn.subVectors(e,t),yn.cross(Wn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),yn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return bn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;tr.subVectors(r,n),nr.subVectors(s,n),ya.subVectors(e,n);const l=tr.dot(ya),c=nr.dot(ya);if(l<=0&&c<=0)return t.copy(n);Ea.subVectors(e,r);const u=tr.dot(Ea),d=nr.dot(Ea);if(u>=0&&d<=u)return t.copy(r);const m=l*d-u*c;if(m<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(tr,a);Ta.subVectors(e,s);const _=tr.dot(Ta),v=nr.dot(Ta);if(v>=0&&_<=v)return t.copy(s);const x=_*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(nr,o);const g=u*v-_*d;if(g<=0&&d-u>=0&&_-v>=0)return zl.subVectors(s,r),o=(d-u)/(d-u+(_-v)),t.copy(r).addScaledVector(zl,o);const h=1/(g+x+m);return a=x*h,o=m*h,t.copy(n).addScaledVector(tr,a).addScaledVector(nr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},ds={h:0,s:0,l:0};function Ra(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class _t{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ct.workingColorSpace){if(e=Fh(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ra(a,s,e+1/3),this.g=Ra(a,s,e),this.b=Ra(a,s,e-1/3)}return ct.toWorkingColorSpace(this,r),this}setStyle(e,t=hn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){const n=Qc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return ct.fromWorkingColorSpace(jt.copy(this),e),Math.round(lt(jt.r*255,0,255))*65536+Math.round(lt(jt.g*255,0,255))*256+Math.round(lt(jt.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(jt.copy(this),t);const n=jt.r,r=jt.g,s=jt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=hn){ct.fromWorkingColorSpace(jt.copy(this),e);const t=jt.r,n=jt.g,r=jt.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(ds);const n=fa(di.h,ds.h,t),r=fa(di.s,ds.s,t),s=fa(di.l,ds.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new _t;_t.NAMES=Qc;let td=0;class yr extends Sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=qr(),this.name="",this.type="Material",this.blending=ur,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wa,this.blendDst=Xa,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ur&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Xa&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==dr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class eu extends yr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new X,ps=new ut;let nd=0;class Rn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Al,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ps.fromBufferAttribute(this,t),ps.applyMatrix3(e),this.setXY(t,ps.x,ps.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Lr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Lr(t,this.array)),t}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Lr(t,this.array)),t}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Lr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Lr(t,this.array)),t}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),r=tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Al&&(e.usage=this.usage),e}}class tu extends Rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class nu extends Rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ni extends Rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let id=0;const gn=new Et,Ca=new an,ir=new X,un=new jr,Fr=new jr,Wt=new X;class si extends Sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=qr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jc(e)?nu:tu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return Ca.lookAt(e),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ni(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];un.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Fr.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(un.min,Fr.min),un.expandByPoint(Wt),Wt.addVectors(un.max,Fr.max),un.expandByPoint(Wt)):(un.expandByPoint(Fr.min),un.expandByPoint(Fr.max))}un.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Wt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Wt.fromBufferAttribute(o,c),l&&(ir.fromBufferAttribute(e,c),Wt.add(ir)),r=Math.max(r,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new X,l[L]=new X;const c=new X,u=new X,d=new X,m=new ut,_=new ut,v=new ut,x=new X,g=new X;function h(L,y,S){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,y),d.fromBufferAttribute(n,S),m.fromBufferAttribute(s,L),_.fromBufferAttribute(s,y),v.fromBufferAttribute(s,S),u.sub(c),d.sub(c),_.sub(m),v.sub(m);const U=1/(_.x*v.y-v.x*_.y);isFinite(U)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(d,-_.y).multiplyScalar(U),g.copy(d).multiplyScalar(_.x).addScaledVector(u,-v.x).multiplyScalar(U),o[L].add(x),o[y].add(x),o[S].add(x),l[L].add(g),l[y].add(g),l[S].add(g))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let L=0,y=R.length;L<y;++L){const S=R[L],U=S.start,G=S.count;for(let Y=U,J=U+G;Y<J;Y+=3)h(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const A=new X,T=new X,I=new X,D=new X;function P(L){I.fromBufferAttribute(r,L),D.copy(I);const y=o[L];A.copy(y),A.sub(I.multiplyScalar(I.dot(y))).normalize(),T.crossVectors(D,y);const U=T.dot(l[L])<0?-1:1;a.setXYZW(L,A.x,A.y,A.z,U)}for(let L=0,y=R.length;L<y;++L){const S=R[L],U=S.start,G=S.count;for(let Y=U,J=U+G;Y<J;Y+=3)P(e.getX(Y+0)),P(e.getX(Y+1)),P(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,_=n.count;m<_;m++)n.setXYZ(m,0,0,0);const r=new X,s=new X,a=new X,o=new X,l=new X,c=new X,u=new X,d=new X;if(e)for(let m=0,_=e.count;m<_;m+=3){const v=e.getX(m+0),x=e.getX(m+1),g=e.getX(m+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let m=0,_=t.count;m<_;m+=3)r.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),n.setXYZ(m+0,u.x,u.y,u.z),n.setXYZ(m+1,u.x,u.y,u.z),n.setXYZ(m+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,m=new c.constructor(l.length*u);let _=0,v=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?_=l[x]*o.data.stride+o.offset:_=l[x]*u;for(let h=0;h<u;h++)m[v++]=c[_++]}return new Rn(m,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new si,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const m=c[u],_=e(m,n);l.push(_)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,m=c.length;d<m;d++){const _=c[d];u.push(_.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let m=0,_=d.length;m<_;m++)u.push(d[m].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kl=new Et,Ai=new Yh,ms=new qo,Hl=new X,gs=new X,_s=new X,vs=new X,Pa=new X,xs=new X,Vl=new X,Ms=new X;class dn extends an{constructor(e=new si,t=new eu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){xs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(Pa.fromBufferAttribute(d,e),a?xs.addScaledVector(Pa,u):xs.addScaledVector(Pa.sub(t),u))}t.add(xs)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere),ms.applyMatrix4(s),Ai.copy(e.ray).recast(e.near),!(ms.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(ms,Hl)===null||Ai.origin.distanceToSquared(Hl)>(e.far-e.near)**2))&&(kl.copy(s).invert(),Ai.copy(e.ray).applyMatrix4(kl),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,m=s.groups,_=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=m.length;v<x;v++){const g=m[v],h=a[g.materialIndex],R=Math.max(g.start,_.start),A=Math.min(o.count,Math.min(g.start+g.count,_.start+_.count));for(let T=R,I=A;T<I;T+=3){const D=o.getX(T),P=o.getX(T+1),L=o.getX(T+2);r=Ss(this,h,e,n,c,u,d,D,P,L),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,_.start),x=Math.min(o.count,_.start+_.count);for(let g=v,h=x;g<h;g+=3){const R=o.getX(g),A=o.getX(g+1),T=o.getX(g+2);r=Ss(this,a,e,n,c,u,d,R,A,T),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,x=m.length;v<x;v++){const g=m[v],h=a[g.materialIndex],R=Math.max(g.start,_.start),A=Math.min(l.count,Math.min(g.start+g.count,_.start+_.count));for(let T=R,I=A;T<I;T+=3){const D=T,P=T+1,L=T+2;r=Ss(this,h,e,n,c,u,d,D,P,L),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,_.start),x=Math.min(l.count,_.start+_.count);for(let g=v,h=x;g<h;g+=3){const R=g,A=g+1,T=g+2;r=Ss(this,a,e,n,c,u,d,R,A,T),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function rd(i,e,t,n,r,s,a,o){let l;if(e.side===rn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===xi,o),l===null)return null;Ms.copy(o),Ms.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ms);return c<t.near||c>t.far?null:{distance:c,point:Ms.clone(),object:i}}function Ss(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,gs),i.getVertexPosition(l,_s),i.getVertexPosition(c,vs);const u=rd(i,e,t,n,gs,_s,vs,Vl);if(u){const d=new X;bn.getBarycoord(Vl,gs,_s,vs,d),r&&(u.uv=bn.getInterpolatedAttribute(r,o,l,c,d,new ut)),s&&(u.uv1=bn.getInterpolatedAttribute(s,o,l,c,d,new ut)),a&&(u.normal=bn.getInterpolatedAttribute(a,o,l,c,d,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const m={a:o,b:l,c,normal:new X,materialIndex:0};bn.getNormal(gs,_s,vs,m.normal),u.face=m,u.barycoord=d}return u}class Er extends si{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let m=0,_=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ni(c,3)),this.setAttribute("normal",new ni(u,3)),this.setAttribute("uv",new ni(d,2));function v(x,g,h,R,A,T,I,D,P,L,y){const S=T/P,U=I/L,G=T/2,Y=I/2,J=D/2,ie=P+1,K=L+1;let ae=0,$=0;const de=new X;for(let Ee=0;Ee<K;Ee++){const we=Ee*U-Y;for(let He=0;He<ie;He++){const Xe=He*S-G;de[x]=Xe*R,de[g]=we*A,de[h]=J,c.push(de.x,de.y,de.z),de[x]=0,de[g]=0,de[h]=D>0?1:-1,u.push(de.x,de.y,de.z),d.push(He/P),d.push(1-Ee/L),ae+=1}}for(let Ee=0;Ee<L;Ee++)for(let we=0;we<P;we++){const He=m+we+ie*Ee,Xe=m+we+ie*(Ee+1),Q=m+(we+1)+ie*(Ee+1),se=m+(we+1)+ie*Ee;l.push(He,Xe,se),l.push(Xe,Q,se),$+=6}o.addGroup(_,$,y),_+=$,m+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Qt(i){const e={};for(let t=0;t<i.length;t++){const n=xr(i[t]);for(const r in n)e[r]=n[r]}return e}function sd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function iu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const Yo={clone:xr,merge:Qt};var ad=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,od=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mn extends yr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ad,this.fragmentShader=od,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xr(e.uniforms),this.uniformsGroups=sd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ru extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new X,Gl=new ut,Wl=new ut;class Tn extends ru{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Po*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Po*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,Gl,Wl),t.subVectors(Wl,Gl)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ua*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rr=-90,sr=1;class ld extends an{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Tn(rr,sr,e,t);r.layers=this.layers,this.add(r);const s=new Tn(rr,sr,e,t);s.layers=this.layers,this.add(s);const a=new Tn(rr,sr,e,t);a.layers=this.layers,this.add(a);const o=new Tn(rr,sr,e,t);o.layers=this.layers,this.add(o);const l=new Tn(rr,sr,e,t);l.layers=this.layers,this.add(l);const c=new Tn(rr,sr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,m,_),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class su extends sn{constructor(e,t,n,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:pr,super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cd extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new su(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:In}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Er(5,5,5),s=new mn({name:"CubemapFromEquirect",uniforms:xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:ei});s.uniforms.tEquirect.value=t;const a=new dn(r,s),o=t.minFilter;return t.minFilter===Fi&&(t.minFilter=In),new ld(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class ys extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ud={type:"move"};class Da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ys,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ys,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ys,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,n),h=this._getHandJoint(c,x);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],m=u.position.distanceTo(d.position),_=.02,v=.005;c.inputState.pinching&&m>_+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&m<=_-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ud)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ys;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class fd extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const La=new X,hd=new X,dd=new Je;class Pi{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=La.subVectors(n,t).cross(hd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(La),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||dd.getNormalMatrix(e),r=this.coplanarPoint(La).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new qo,Es=new X;class au{constructor(e=new Pi,t=new Pi,n=new Pi,r=new Pi,s=new Pi,a=new Pi){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zn){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],m=r[7],_=r[8],v=r[9],x=r[10],g=r[11],h=r[12],R=r[13],A=r[14],T=r[15];if(n[0].setComponents(l-s,m-c,g-_,T-h).normalize(),n[1].setComponents(l+s,m+c,g+_,T+h).normalize(),n[2].setComponents(l+a,m+u,g+v,T+R).normalize(),n[3].setComponents(l-a,m-u,g-v,T-R).normalize(),n[4].setComponents(l-o,m-d,g-x,T-A).normalize(),t===Zn)n[5].setComponents(l+o,m+d,g+x,T+A).normalize();else if(t===zs)n[5].setComponents(o,d,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(e){return wi.center.set(0,0,0),wi.radius=.7071067811865476,wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Es.x=r.normal.x>0?e.max.x:e.min.x,Es.y=r.normal.y>0?e.max.y:e.min.y,Es.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Es)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jo extends sn{constructor(e,t,n,r,s,a,o,l,c,u=fr){if(u!==fr&&u!==_r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===fr&&(n=Oi),n===void 0&&u===_r&&(n=gr),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:wn,this.minFilter=l!==void 0?l:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $s extends si{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,d=e/o,m=t/l,_=[],v=[],x=[],g=[];for(let h=0;h<u;h++){const R=h*m-a;for(let A=0;A<c;A++){const T=A*d-s;v.push(T,-R,0),x.push(0,0,1),g.push(A/o),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let R=0;R<o;R++){const A=R+c*h,T=R+c*(h+1),I=R+1+c*(h+1),D=R+1+c*h;_.push(A,T,D),_.push(T,I,D)}this.setIndex(_),this.setAttribute("position",new ni(v,3)),this.setAttribute("normal",new ni(x,3)),this.setAttribute("uv",new ni(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.widthSegments,e.heightSegments)}}class pd extends mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class md extends yr{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qc,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class gd extends yr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _d extends yr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ko extends ru{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class vd extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class Zo{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Xl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Xl(){return performance.now()}function $l(i,e,t,n){const r=xd(n);switch(t){case kc:return i*e;case Vc:return i*e;case Gc:return i*e*2;case Wc:return i*e/r.components*r.byteLength;case Wo:return i*e/r.components*r.byteLength;case Xc:return i*e*2/r.components*r.byteLength;case Xo:return i*e*2/r.components*r.byteLength;case Hc:return i*e*3/r.components*r.byteLength;case An:return i*e*4/r.components*r.byteLength;case $o:return i*e*4/r.components*r.byteLength;case Ps:case Ds:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ls:case Us:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ro:case ao:return Math.max(i,16)*Math.max(e,8)/4;case io:case so:return Math.max(i,8)*Math.max(e,8)/2;case oo:case lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ho:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case po:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case mo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case go:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case _o:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case vo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case xo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case So:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case yo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Eo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case To:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Is:case bo:case Ao:return Math.ceil(i/4)*Math.ceil(e/4)*16;case $c:case wo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ro:case Co:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xd(i){switch(i){case ii:case Oc:return{byteLength:1,components:1};case Wr:case Bc:case Mr:return{byteLength:2,components:1};case Vo:case Go:return{byteLength:2,components:4};case Oi:case Ho:case Kn:return{byteLength:4,components:1};case zc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ko}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ko);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ou(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Md(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,m=i.createBuffer();i.bindBuffer(l,m),i.bufferData(l,c,u),o.onUploadCallback();let _;if(c instanceof Float32Array)_=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=i.SHORT;else if(c instanceof Uint32Array)_=i.UNSIGNED_INT;else if(c instanceof Int32Array)_=i.INT;else if(c instanceof Int8Array)_=i.BYTE;else if(c instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((_,v)=>_.start-v.start);let m=0;for(let _=1;_<d.length;_++){const v=d[m],x=d[_];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++m,d[m]=x)}d.length=m+1;for(let _=0,v=d.length;_<v;_++){const x=d[_];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Sd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yd=`#ifdef USE_ALPHAHASH
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
#endif`,Ed=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Td=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ad=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wd=`#ifdef USE_AOMAP
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
#endif`,Rd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Pd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ld=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ud=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Id=`#ifdef USE_IRIDESCENCE
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
#endif`,Nd=`#ifdef USE_BUMPMAP
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
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Wd=`#define PI 3.141592653589793
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
} // validated`,Xd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$d=`vec3 transformedNormal = objectNormal;
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
#endif`,qd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qd=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,ep=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tp=`#ifdef USE_ENVMAP
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
#endif`,np=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ip=`#ifdef USE_ENVMAP
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
#endif`,rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lp=`#ifdef USE_GRADIENTMAP
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
}`,cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,up=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hp=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,dp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vp=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,xp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Mp=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
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
#endif`,yp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ep=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ap=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pp=`#if defined( USE_POINTS_UV )
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
#endif`,Dp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Up=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ip=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Np=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Op=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gp=`#ifdef USE_NORMALMAP
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
#endif`,Wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$p=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Kp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,im=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,om=`#ifdef USE_SKINNING
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
#endif`,lm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cm=`#ifdef USE_SKINNING
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
#endif`,um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dm=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pm=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mm=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sm=`uniform sampler2D t2D;
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Em=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,wm=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Rm=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,Cm=`#define DISTANCE
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
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Um=`uniform vec3 diffuse;
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
}`,Im=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Nm=`uniform vec3 diffuse;
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
}`,Fm=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,Om=`#define LAMBERT
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
}`,Bm=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,zm=`#define MATCAP
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
}`,km=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,Hm=`#define NORMAL
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
}`,Vm=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,Gm=`#define PHONG
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
}`,Wm=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,Xm=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,$m=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,qm=`#define TOON
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
}`,Ym=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,jm=`uniform vec3 diffuse;
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
}`,Km=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Zm=`uniform vec3 color;
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
}`,Jm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Qm=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:Sd,alphahash_pars_fragment:yd,alphamap_fragment:Ed,alphamap_pars_fragment:Td,alphatest_fragment:bd,alphatest_pars_fragment:Ad,aomap_fragment:wd,aomap_pars_fragment:Rd,batching_pars_vertex:Cd,batching_vertex:Pd,begin_vertex:Dd,beginnormal_vertex:Ld,bsdfs:Ud,iridescence_fragment:Id,bumpmap_pars_fragment:Nd,clipping_planes_fragment:Fd,clipping_planes_pars_fragment:Od,clipping_planes_pars_vertex:Bd,clipping_planes_vertex:zd,color_fragment:kd,color_pars_fragment:Hd,color_pars_vertex:Vd,color_vertex:Gd,common:Wd,cube_uv_reflection_fragment:Xd,defaultnormal_vertex:$d,displacementmap_pars_vertex:qd,displacementmap_vertex:Yd,emissivemap_fragment:jd,emissivemap_pars_fragment:Kd,colorspace_fragment:Zd,colorspace_pars_fragment:Jd,envmap_fragment:Qd,envmap_common_pars_fragment:ep,envmap_pars_fragment:tp,envmap_pars_vertex:np,envmap_physical_pars_fragment:dp,envmap_vertex:ip,fog_vertex:rp,fog_pars_vertex:sp,fog_fragment:ap,fog_pars_fragment:op,gradientmap_pars_fragment:lp,lightmap_pars_fragment:cp,lights_lambert_fragment:up,lights_lambert_pars_fragment:fp,lights_pars_begin:hp,lights_toon_fragment:pp,lights_toon_pars_fragment:mp,lights_phong_fragment:gp,lights_phong_pars_fragment:_p,lights_physical_fragment:vp,lights_physical_pars_fragment:xp,lights_fragment_begin:Mp,lights_fragment_maps:Sp,lights_fragment_end:yp,logdepthbuf_fragment:Ep,logdepthbuf_pars_fragment:Tp,logdepthbuf_pars_vertex:bp,logdepthbuf_vertex:Ap,map_fragment:wp,map_pars_fragment:Rp,map_particle_fragment:Cp,map_particle_pars_fragment:Pp,metalnessmap_fragment:Dp,metalnessmap_pars_fragment:Lp,morphinstance_vertex:Up,morphcolor_vertex:Ip,morphnormal_vertex:Np,morphtarget_pars_vertex:Fp,morphtarget_vertex:Op,normal_fragment_begin:Bp,normal_fragment_maps:zp,normal_pars_fragment:kp,normal_pars_vertex:Hp,normal_vertex:Vp,normalmap_pars_fragment:Gp,clearcoat_normal_fragment_begin:Wp,clearcoat_normal_fragment_maps:Xp,clearcoat_pars_fragment:$p,iridescence_pars_fragment:qp,opaque_fragment:Yp,packing:jp,premultiplied_alpha_fragment:Kp,project_vertex:Zp,dithering_fragment:Jp,dithering_pars_fragment:Qp,roughnessmap_fragment:em,roughnessmap_pars_fragment:tm,shadowmap_pars_fragment:nm,shadowmap_pars_vertex:im,shadowmap_vertex:rm,shadowmask_pars_fragment:sm,skinbase_vertex:am,skinning_pars_vertex:om,skinning_vertex:lm,skinnormal_vertex:cm,specularmap_fragment:um,specularmap_pars_fragment:fm,tonemapping_fragment:hm,tonemapping_pars_fragment:dm,transmission_fragment:pm,transmission_pars_fragment:mm,uv_pars_fragment:gm,uv_pars_vertex:_m,uv_vertex:vm,worldpos_vertex:xm,background_vert:Mm,background_frag:Sm,backgroundCube_vert:ym,backgroundCube_frag:Em,cube_vert:Tm,cube_frag:bm,depth_vert:Am,depth_frag:wm,distanceRGBA_vert:Rm,distanceRGBA_frag:Cm,equirect_vert:Pm,equirect_frag:Dm,linedashed_vert:Lm,linedashed_frag:Um,meshbasic_vert:Im,meshbasic_frag:Nm,meshlambert_vert:Fm,meshlambert_frag:Om,meshmatcap_vert:Bm,meshmatcap_frag:zm,meshnormal_vert:km,meshnormal_frag:Hm,meshphong_vert:Vm,meshphong_frag:Gm,meshphysical_vert:Wm,meshphysical_frag:Xm,meshtoon_vert:$m,meshtoon_frag:qm,points_vert:Ym,points_frag:jm,shadow_vert:Km,shadow_frag:Zm,sprite_vert:Jm,sprite_frag:Qm},ye={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Ln={basic:{uniforms:Qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new _t(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Qt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Qt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new _t(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Qt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Qt([ye.points,ye.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Qt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Qt([ye.common,ye.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Qt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Qt([ye.sprite,ye.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Qt([ye.common,ye.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Qt([ye.lights,ye.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Ln.physical={uniforms:Qt([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Ts={r:0,b:0,g:0},Ri=new ri,eg=new Et;function tg(i,e,t,n,r,s,a){const o=new _t(0);let l=s===!0?0:1,c,u,d=null,m=0,_=null;function v(A){let T=A.isScene===!0?A.background:null;return T&&T.isTexture&&(T=(A.backgroundBlurriness>0?t:e).get(T)),T}function x(A){let T=!1;const I=v(A);I===null?h(o,l):I&&I.isColor&&(h(I,1),T=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(A,T){const I=v(T);I&&(I.isCubeTexture||I.mapping===Xs)?(u===void 0&&(u=new dn(new Er(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:xr(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ri.copy(T.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(eg.makeRotationFromEuler(Ri)),u.material.toneMapped=ct.getTransfer(I.colorSpace)!==gt,(d!==I||m!==I.version||_!==i.toneMapping)&&(u.material.needsUpdate=!0,d=I,m=I.version,_=i.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new dn(new $s(2,2),new mn({name:"BackgroundMaterial",uniforms:xr(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=ct.getTransfer(I.colorSpace)!==gt,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(d!==I||m!==I.version||_!==i.toneMapping)&&(c.material.needsUpdate=!0,d=I,m=I.version,_=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function h(A,T){A.getRGB(Ts,iu(i)),n.buffers.color.setClear(Ts.r,Ts.g,Ts.b,T,a)}function R(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,T=1){o.set(A),l=T,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,h(o,l)},render:x,addToRenderList:g,dispose:R}}function ng(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=m(null);let s=r,a=!1;function o(S,U,G,Y,J){let ie=!1;const K=d(Y,G,U);s!==K&&(s=K,c(s.object)),ie=_(S,Y,G,J),ie&&v(S,Y,G,J),J!==null&&e.update(J,i.ELEMENT_ARRAY_BUFFER),(ie||a)&&(a=!1,T(S,U,G,Y),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function d(S,U,G){const Y=G.wireframe===!0;let J=n[S.id];J===void 0&&(J={},n[S.id]=J);let ie=J[U.id];ie===void 0&&(ie={},J[U.id]=ie);let K=ie[Y];return K===void 0&&(K=m(l()),ie[Y]=K),K}function m(S){const U=[],G=[],Y=[];for(let J=0;J<t;J++)U[J]=0,G[J]=0,Y[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:Y,object:S,attributes:{},index:null}}function _(S,U,G,Y){const J=s.attributes,ie=U.attributes;let K=0;const ae=G.getAttributes();for(const $ in ae)if(ae[$].location>=0){const Ee=J[$];let we=ie[$];if(we===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(we=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(we=S.instanceColor)),Ee===void 0||Ee.attribute!==we||we&&Ee.data!==we.data)return!0;K++}return s.attributesNum!==K||s.index!==Y}function v(S,U,G,Y){const J={},ie=U.attributes;let K=0;const ae=G.getAttributes();for(const $ in ae)if(ae[$].location>=0){let Ee=ie[$];Ee===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(Ee=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(Ee=S.instanceColor));const we={};we.attribute=Ee,Ee&&Ee.data&&(we.data=Ee.data),J[$]=we,K++}s.attributes=J,s.attributesNum=K,s.index=Y}function x(){const S=s.newAttributes;for(let U=0,G=S.length;U<G;U++)S[U]=0}function g(S){h(S,0)}function h(S,U){const G=s.newAttributes,Y=s.enabledAttributes,J=s.attributeDivisors;G[S]=1,Y[S]===0&&(i.enableVertexAttribArray(S),Y[S]=1),J[S]!==U&&(i.vertexAttribDivisor(S,U),J[S]=U)}function R(){const S=s.newAttributes,U=s.enabledAttributes;for(let G=0,Y=U.length;G<Y;G++)U[G]!==S[G]&&(i.disableVertexAttribArray(G),U[G]=0)}function A(S,U,G,Y,J,ie,K){K===!0?i.vertexAttribIPointer(S,U,G,J,ie):i.vertexAttribPointer(S,U,G,Y,J,ie)}function T(S,U,G,Y){x();const J=Y.attributes,ie=G.getAttributes(),K=U.defaultAttributeValues;for(const ae in ie){const $=ie[ae];if($.location>=0){let de=J[ae];if(de===void 0&&(ae==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),ae==="instanceColor"&&S.instanceColor&&(de=S.instanceColor)),de!==void 0){const Ee=de.normalized,we=de.itemSize,He=e.get(de);if(He===void 0)continue;const Xe=He.buffer,Q=He.type,se=He.bytesPerElement,ve=Q===i.INT||Q===i.UNSIGNED_INT||de.gpuType===Ho;if(de.isInterleavedBufferAttribute){const _e=de.data,Le=_e.stride,$e=de.offset;if(_e.isInstancedInterleavedBuffer){for(let Ne=0;Ne<$.locationSize;Ne++)h($.location+Ne,_e.meshPerAttribute);S.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ne=0;Ne<$.locationSize;Ne++)g($.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let Ne=0;Ne<$.locationSize;Ne++)A($.location+Ne,we/$.locationSize,Q,Ee,Le*se,($e+we/$.locationSize*Ne)*se,ve)}else{if(de.isInstancedBufferAttribute){for(let _e=0;_e<$.locationSize;_e++)h($.location+_e,de.meshPerAttribute);S.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let _e=0;_e<$.locationSize;_e++)g($.location+_e);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let _e=0;_e<$.locationSize;_e++)A($.location+_e,we/$.locationSize,Q,Ee,we*se,we/$.locationSize*_e*se,ve)}}else if(K!==void 0){const Ee=K[ae];if(Ee!==void 0)switch(Ee.length){case 2:i.vertexAttrib2fv($.location,Ee);break;case 3:i.vertexAttrib3fv($.location,Ee);break;case 4:i.vertexAttrib4fv($.location,Ee);break;default:i.vertexAttrib1fv($.location,Ee)}}}}R()}function I(){L();for(const S in n){const U=n[S];for(const G in U){const Y=U[G];for(const J in Y)u(Y[J].object),delete Y[J];delete U[G]}delete n[S]}}function D(S){if(n[S.id]===void 0)return;const U=n[S.id];for(const G in U){const Y=U[G];for(const J in Y)u(Y[J].object),delete Y[J];delete U[G]}delete n[S.id]}function P(S){for(const U in n){const G=n[U];if(G[S.id]===void 0)continue;const Y=G[S.id];for(const J in Y)u(Y[J].object),delete Y[J];delete G[S.id]}}function L(){y(),a=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:y,dispose:I,releaseStatesOfGeometry:D,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:g,disableUnusedAttributes:R}}function ig(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let _=0;for(let v=0;v<d;v++)_+=u[v];t.update(_,n,1)}function l(c,u,d,m){if(d===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<c.length;v++)a(c[v],u[v],m[v]);else{_.multiDrawArraysInstancedWEBGL(n,c,0,u,0,m,0,d);let v=0;for(let x=0;x<d;x++)v+=u[x]*m[x];t.update(v,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function rg(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==An&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const L=P===Mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==ii&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Kn&&!L)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,m=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=v>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:m,maxTextures:_,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:R,maxVaryings:A,maxFragmentUniforms:T,vertexTextures:I,maxSamples:D}}function sg(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Pi,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,m){const _=d.length!==0||m||n!==0||r;return r=m,n=d.length,_},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,m){t=u(d,m,0)},this.setState=function(d,m,_){const v=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,h=i.get(d);if(!r||v===null||v.length===0||s&&!g)s?u(null):c();else{const R=s?0:n,A=R*4;let T=h.clippingState||null;l.value=T,T=u(v,m,A,_);for(let I=0;I!==A;++I)T[I]=t[I];h.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,m,_,v){const x=d!==null?d.length:0;let g=null;if(x!==0){if(g=l.value,v!==!0||g===null){const h=_+x*4,R=m.matrixWorldInverse;o.getNormalMatrix(R),(g===null||g.length<h)&&(g=new Float32Array(h));for(let A=0,T=_;A!==x;++A,T+=4)a.copy(d[A]).applyMatrix4(R,o),a.normal.toArray(g,T),g[T+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function ag(i){let e=new WeakMap;function t(a,o){return o===Qa?a.mapping=pr:o===eo&&(a.mapping=mr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Qa||o===eo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new cd(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const lr=4,ql=[.125,.215,.35,.446,.526,.582],Ui=20,Ua=new Ko,Yl=new _t;let Ia=null,Na=0,Fa=0,Oa=!1;const Di=(1+Math.sqrt(5))/2,ar=1/Di,jl=[new X(-Di,ar,0),new X(Di,ar,0),new X(-ar,0,Di),new X(ar,0,Di),new X(0,Di,-ar),new X(0,Di,ar),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class Kl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ia=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ia,Na,Fa),this._renderer.xr.enabled=Oa,e.scissorTest=!1,bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pr||e.mapping===mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ia=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:In,minFilter:In,generateMipmaps:!1,type:Mr,format:An,colorSpace:vr,depthBuffer:!1},r=Zl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=og(s)),this._blurMaterial=lg(s,e,t)}return r}_compileMaterial(e){const t=new dn(this._lodPlanes[0],e);this._renderer.compile(t,Ua)}_sceneToCubeUV(e,t,n,r){const o=new Tn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,m=u.toneMapping;u.getClearColor(Yl),u.toneMapping=_i,u.autoClear=!1;const _=new eu({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),v=new dn(new Er,_);let x=!1;const g=e.background;g?g.isColor&&(_.color.copy(g),e.background=null,x=!0):(_.color.copy(Yl),x=!0);for(let h=0;h<6;h++){const R=h%3;R===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):R===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const A=this._cubeSize;bs(r,R*A,h>2?A:0,A,A),u.setRenderTarget(r),x&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=m,u.autoClear=d,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===pr||e.mapping===mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ql()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new dn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;bs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ua)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=jl[(r-s-1)%jl.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new dn(this._lodPlanes[r],c),m=c.uniforms,_=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*Ui-1),x=s/v,g=isFinite(s)?1+Math.floor(u*x):Ui;g>Ui&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ui}`);const h=[];let R=0;for(let P=0;P<Ui;++P){const L=P/x,y=Math.exp(-L*L/2);h.push(y),P===0?R+=y:P<g&&(R+=2*y)}for(let P=0;P<h.length;P++)h[P]=h[P]/R;m.envMap.value=e.texture,m.samples.value=g,m.weights.value=h,m.latitudinal.value=a==="latitudinal",o&&(m.poleAxis.value=o);const{_lodMax:A}=this;m.dTheta.value=v,m.mipInt.value=A-n;const T=this._sizeLods[r],I=3*T*(r>A-lr?r-A+lr:0),D=4*(this._cubeSize-T);bs(t,I,D,3*T,2*T),l.setRenderTarget(t),l.render(d,Ua)}}function og(i){const e=[],t=[],n=[];let r=i;const s=i-lr+1+ql.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-lr?l=ql[a-i+lr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,m=[u,u,d,u,d,d,u,u,d,d,u,d],_=6,v=6,x=3,g=2,h=1,R=new Float32Array(x*v*_),A=new Float32Array(g*v*_),T=new Float32Array(h*v*_);for(let D=0;D<_;D++){const P=D%3*2/3-1,L=D>2?0:-1,y=[P,L,0,P+2/3,L,0,P+2/3,L+1,0,P,L,0,P+2/3,L+1,0,P,L+1,0];R.set(y,x*v*D),A.set(m,g*v*D);const S=[D,D,D,D,D,D];T.set(S,h*v*D)}const I=new si;I.setAttribute("position",new Rn(R,x)),I.setAttribute("uv",new Rn(A,g)),I.setAttribute("faceIndex",new Rn(T,h)),e.push(I),r>lr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Zl(i,e,t){const n=new Fn(i,e,t);return n.texture.mapping=Xs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function lg(i,e,t){const n=new Float32Array(Ui),r=new X(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Jl(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Ql(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Jo(){return`

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
	`}function cg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Qa||l===eo,u=l===pr||l===mr;if(c||u){let d=e.get(o);const m=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==m)return t===null&&(t=new Kl(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const _=o.image;return c&&_&&_.height>0||u&&_&&r(_)?(t===null&&(t=new Kl(i)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ug(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&or("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function fg(i,e,t,n){const r={},s=new WeakMap;function a(d){const m=d.target;m.index!==null&&e.remove(m.index);for(const v in m.attributes)e.remove(m.attributes[v]);m.removeEventListener("dispose",a),delete r[m.id];const _=s.get(m);_&&(e.remove(_),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function o(d,m){return r[m.id]===!0||(m.addEventListener("dispose",a),r[m.id]=!0,t.memory.geometries++),m}function l(d){const m=d.attributes;for(const _ in m)e.update(m[_],i.ARRAY_BUFFER)}function c(d){const m=[],_=d.index,v=d.attributes.position;let x=0;if(_!==null){const R=_.array;x=_.version;for(let A=0,T=R.length;A<T;A+=3){const I=R[A+0],D=R[A+1],P=R[A+2];m.push(I,D,D,P,P,I)}}else if(v!==void 0){const R=v.array;x=v.version;for(let A=0,T=R.length/3-1;A<T;A+=3){const I=A+0,D=A+1,P=A+2;m.push(I,D,D,P,P,I)}}else return;const g=new(jc(m)?nu:tu)(m,1);g.version=x;const h=s.get(d);h&&e.remove(h),s.set(d,g)}function u(d){const m=s.get(d);if(m){const _=d.index;_!==null&&m.version<_.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function hg(i,e,t){let n;function r(m){n=m}let s,a;function o(m){s=m.type,a=m.bytesPerElement}function l(m,_){i.drawElements(n,_,s,m*a),t.update(_,n,1)}function c(m,_,v){v!==0&&(i.drawElementsInstanced(n,_,s,m*a,v),t.update(_,n,v))}function u(m,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,s,m,0,v);let g=0;for(let h=0;h<v;h++)g+=_[h];t.update(g,n,1)}function d(m,_,v,x){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<m.length;h++)c(m[h]/a,_[h],x[h]);else{g.multiDrawElementsInstancedWEBGL(n,_,0,s,m,0,x,0,v);let h=0;for(let R=0;R<v;R++)h+=_[R]*x[R];t.update(h,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function dg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function pg(i,e,t){const n=new WeakMap,r=new Dt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let m=n.get(o);if(m===void 0||m.count!==d){let y=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",y)};m!==void 0&&m.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let A=0;_===!0&&(A=1),v===!0&&(A=2),x===!0&&(A=3);let T=o.attributes.position.count*A,I=1;T>e.maxTextureSize&&(I=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const D=new Float32Array(T*I*4*d),P=new Zc(D,T,I,d);P.type=Kn,P.needsUpdate=!0;const L=A*4;for(let S=0;S<d;S++){const U=g[S],G=h[S],Y=R[S],J=T*I*4*S;for(let ie=0;ie<U.count;ie++){const K=ie*L;_===!0&&(r.fromBufferAttribute(U,ie),D[J+K+0]=r.x,D[J+K+1]=r.y,D[J+K+2]=r.z,D[J+K+3]=0),v===!0&&(r.fromBufferAttribute(G,ie),D[J+K+4]=r.x,D[J+K+5]=r.y,D[J+K+6]=r.z,D[J+K+7]=0),x===!0&&(r.fromBufferAttribute(Y,ie),D[J+K+8]=r.x,D[J+K+9]=r.y,D[J+K+10]=r.z,D[J+K+11]=Y.itemSize===4?r.w:1)}}m={count:d,texture:P,size:new ut(T,I)},n.set(o,m),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let x=0;x<c.length;x++)_+=c[x];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:s}}function mg(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==c&&(m.update(),r.set(m,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const lu=new sn,ec=new jo(1,1),cu=new Zc,uu=new $h,fu=new su,tc=[],nc=[],ic=new Float32Array(16),rc=new Float32Array(9),sc=new Float32Array(4);function Tr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=tc[r];if(s===void 0&&(s=new Float32Array(r),tc[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function qs(i,e){let t=nc[e];t===void 0&&(t=new Int32Array(e),nc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function gg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function _g(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function vg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function Mg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;sc.set(n),i.uniformMatrix2fv(this.addr,!1,sc),kt(t,n)}}function Sg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;rc.set(n),i.uniformMatrix3fv(this.addr,!1,rc),kt(t,n)}}function yg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;ic.set(n),i.uniformMatrix4fv(this.addr,!1,ic),kt(t,n)}}function Eg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Tg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function bg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function Ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function wg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Rg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function Cg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function Pg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function Dg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ec.compareFunction=Yc,s=ec):s=lu,t.setTexture2D(e||s,r)}function Lg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||uu,r)}function Ug(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||fu,r)}function Ig(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||cu,r)}function Ng(i){switch(i){case 5126:return gg;case 35664:return _g;case 35665:return vg;case 35666:return xg;case 35674:return Mg;case 35675:return Sg;case 35676:return yg;case 5124:case 35670:return Eg;case 35667:case 35671:return Tg;case 35668:case 35672:return bg;case 35669:case 35673:return Ag;case 5125:return wg;case 36294:return Rg;case 36295:return Cg;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Lg;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Ig}}function Fg(i,e){i.uniform1fv(this.addr,e)}function Og(i,e){const t=Tr(e,this.size,2);i.uniform2fv(this.addr,t)}function Bg(i,e){const t=Tr(e,this.size,3);i.uniform3fv(this.addr,t)}function zg(i,e){const t=Tr(e,this.size,4);i.uniform4fv(this.addr,t)}function kg(i,e){const t=Tr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Hg(i,e){const t=Tr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Vg(i,e){const t=Tr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Gg(i,e){i.uniform1iv(this.addr,e)}function Wg(i,e){i.uniform2iv(this.addr,e)}function Xg(i,e){i.uniform3iv(this.addr,e)}function $g(i,e){i.uniform4iv(this.addr,e)}function qg(i,e){i.uniform1uiv(this.addr,e)}function Yg(i,e){i.uniform2uiv(this.addr,e)}function jg(i,e){i.uniform3uiv(this.addr,e)}function Kg(i,e){i.uniform4uiv(this.addr,e)}function Zg(i,e,t){const n=this.cache,r=e.length,s=qs(t,r);zt(n,s)||(i.uniform1iv(this.addr,s),kt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||lu,s[a])}function Jg(i,e,t){const n=this.cache,r=e.length,s=qs(t,r);zt(n,s)||(i.uniform1iv(this.addr,s),kt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||uu,s[a])}function Qg(i,e,t){const n=this.cache,r=e.length,s=qs(t,r);zt(n,s)||(i.uniform1iv(this.addr,s),kt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||fu,s[a])}function e_(i,e,t){const n=this.cache,r=e.length,s=qs(t,r);zt(n,s)||(i.uniform1iv(this.addr,s),kt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||cu,s[a])}function t_(i){switch(i){case 5126:return Fg;case 35664:return Og;case 35665:return Bg;case 35666:return zg;case 35674:return kg;case 35675:return Hg;case 35676:return Vg;case 5124:case 35670:return Gg;case 35667:case 35671:return Wg;case 35668:case 35672:return Xg;case 35669:case 35673:return $g;case 5125:return qg;case 36294:return Yg;case 36295:return jg;case 36296:return Kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Zg;case 35679:case 36299:case 36307:return Jg;case 35680:case 36300:case 36308:case 36293:return Qg;case 36289:case 36303:case 36311:case 36292:return e_}}class n_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ng(t.type)}}class i_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=t_(t.type)}}class r_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Ba=/(\w+)(\])?(\[|\.)?/g;function ac(i,e){i.seq.push(e),i.map[e.id]=e}function s_(i,e,t){const n=i.name,r=n.length;for(Ba.lastIndex=0;;){const s=Ba.exec(n),a=Ba.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){ac(t,c===void 0?new n_(o,i,e):new i_(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new r_(o),ac(t,d)),t=d}}}class Ns{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);s_(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function oc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const a_=37297;let o_=0;function l_(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const lc=new Je;function c_(i){ct._getMatrix(lc,ct.workingColorSpace,i);const e=`mat3( ${lc.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case Bs:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function cc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+l_(i.getShaderSource(e),a)}else return r}function u_(i,e){const t=c_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function f_(i,e){let t;switch(e){case Cc:t="Linear";break;case Pc:t="Reinhard";break;case Dc:t="Cineon";break;case Lc:t="ACESFilmic";break;case Ic:t="AgX";break;case Nc:t="Neutral";break;case Uc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const As=new X;function h_(){ct.getLuminanceCoefficients(As);const i=As.x.toFixed(4),e=As.y.toFixed(4),t=As.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hr).join(`
`)}function p_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function m_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Hr(i){return i!==""}function uc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const g_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Do(i){return i.replace(g_,v_)}const __=new Map;function v_(i,e){let t=Qe[e];if(t===void 0){const n=__.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Do(t)}const x_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hc(i){return i.replace(x_,M_)}function M_(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function dc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function S_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===rh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yn&&(e="SHADOWMAP_TYPE_VSM"),e}function y_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case pr:case mr:e="ENVMAP_TYPE_CUBE";break;case Xs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function E_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case mr:e="ENVMAP_MODE_REFRACTION";break}return e}function T_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Rc:e="ENVMAP_BLENDING_MULTIPLY";break;case Eh:e="ENVMAP_BLENDING_MIX";break;case Th:e="ENVMAP_BLENDING_ADD";break}return e}function b_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function A_(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=S_(t),c=y_(t),u=E_(t),d=T_(t),m=b_(t),_=d_(t),v=p_(s),x=r.createProgram();let g,h,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Hr).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Hr).join(`
`),h.length>0&&(h+=`
`)):(g=[dc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),h=[dc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?Qe.tonemapping_pars_fragment:"",t.toneMapping!==_i?f_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,u_("linearToOutputTexel",t.outputColorSpace),h_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hr).join(`
`)),a=Do(a),a=uc(a,t),a=fc(a,t),o=Do(o),o=uc(o,t),o=fc(o,t),a=hc(a),o=hc(o),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,g=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",t.glslVersion===wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const A=R+g+a,T=R+h+o,I=oc(r,r.VERTEX_SHADER,A),D=oc(r,r.FRAGMENT_SHADER,T);r.attachShader(x,I),r.attachShader(x,D),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function P(U){if(i.debug.checkShaderErrors){const G=r.getProgramInfoLog(x).trim(),Y=r.getShaderInfoLog(I).trim(),J=r.getShaderInfoLog(D).trim();let ie=!0,K=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,I,D);else{const ae=cc(r,I,"vertex"),$=cc(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+G+`
`+ae+`
`+$)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(Y===""||J==="")&&(K=!1);K&&(U.diagnostics={runnable:ie,programLog:G,vertexShader:{log:Y,prefix:g},fragmentShader:{log:J,prefix:h}})}r.deleteShader(I),r.deleteShader(D),L=new Ns(r,x),y=m_(r,x)}let L;this.getUniforms=function(){return L===void 0&&P(this),L};let y;this.getAttributes=function(){return y===void 0&&P(this),y};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,a_)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=o_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=D,this}let w_=0;class R_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new C_(e),t.set(e,n)),n}}class C_{constructor(e){this.id=w_++,this.code=e,this.usedTimes=0}}function P_(i,e,t,n,r,s,a){const o=new Jc,l=new R_,c=new Set,u=[],d=r.logarithmicDepthBuffer,m=r.vertexTextures;let _=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function g(y,S,U,G,Y){const J=G.fog,ie=Y.geometry,K=y.isMeshStandardMaterial?G.environment:null,ae=(y.isMeshStandardMaterial?t:e).get(y.envMap||K),$=ae&&ae.mapping===Xs?ae.image.height:null,de=v[y.type];y.precision!==null&&(_=r.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const Ee=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,we=Ee!==void 0?Ee.length:0;let He=0;ie.morphAttributes.position!==void 0&&(He=1),ie.morphAttributes.normal!==void 0&&(He=2),ie.morphAttributes.color!==void 0&&(He=3);let Xe,Q,se,ve;if(de){const mt=Ln[de];Xe=mt.vertexShader,Q=mt.fragmentShader}else Xe=y.vertexShader,Q=y.fragmentShader,l.update(y),se=l.getVertexShaderID(y),ve=l.getFragmentShaderID(y);const _e=i.getRenderTarget(),Le=i.state.buffers.depth.getReversed(),$e=Y.isInstancedMesh===!0,Ne=Y.isBatchedMesh===!0,rt=!!y.map,et=!!y.matcap,Ve=!!ae,N=!!y.aoMap,Ot=!!y.lightMap,tt=!!y.bumpMap,it=!!y.normalMap,Fe=!!y.displacementMap,pt=!!y.emissiveMap,Ue=!!y.metalnessMap,w=!!y.roughnessMap,M=y.anisotropy>0,V=y.clearcoat>0,oe=y.dispersion>0,ue=y.iridescence>0,ne=y.sheen>0,Ie=y.transmission>0,Me=M&&!!y.anisotropyMap,Re=V&&!!y.clearcoatMap,nt=V&&!!y.clearcoatNormalMap,pe=V&&!!y.clearcoatRoughnessMap,Ae=ue&&!!y.iridescenceMap,Oe=ue&&!!y.iridescenceThicknessMap,Ge=ne&&!!y.sheenColorMap,Ce=ne&&!!y.sheenRoughnessMap,Ke=!!y.specularMap,Ze=!!y.specularColorMap,vt=!!y.specularIntensityMap,O=Ie&&!!y.transmissionMap,Se=Ie&&!!y.thicknessMap,j=!!y.gradientMap,re=!!y.alphaMap,ce=y.alphaTest>0,be=!!y.alphaHash,ke=!!y.extensions;let ft=_i;y.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(ft=i.toneMapping);const Ht={shaderID:de,shaderType:y.type,shaderName:y.name,vertexShader:Xe,fragmentShader:Q,defines:y.defines,customVertexShaderID:se,customFragmentShaderID:ve,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:Ne,batchingColor:Ne&&Y._colorsTexture!==null,instancing:$e,instancingColor:$e&&Y.instanceColor!==null,instancingMorph:$e&&Y.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:_e===null?i.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:vr,alphaToCoverage:!!y.alphaToCoverage,map:rt,matcap:et,envMap:Ve,envMapMode:Ve&&ae.mapping,envMapCubeUVHeight:$,aoMap:N,lightMap:Ot,bumpMap:tt,normalMap:it,displacementMap:m&&Fe,emissiveMap:pt,normalMapObjectSpace:it&&y.normalMapType===Rh,normalMapTangentSpace:it&&y.normalMapType===qc,metalnessMap:Ue,roughnessMap:w,anisotropy:M,anisotropyMap:Me,clearcoat:V,clearcoatMap:Re,clearcoatNormalMap:nt,clearcoatRoughnessMap:pe,dispersion:oe,iridescence:ue,iridescenceMap:Ae,iridescenceThicknessMap:Oe,sheen:ne,sheenColorMap:Ge,sheenRoughnessMap:Ce,specularMap:Ke,specularColorMap:Ze,specularIntensityMap:vt,transmission:Ie,transmissionMap:O,thicknessMap:Se,gradientMap:j,opaque:y.transparent===!1&&y.blending===ur&&y.alphaToCoverage===!1,alphaMap:re,alphaTest:ce,alphaHash:be,combine:y.combine,mapUv:rt&&x(y.map.channel),aoMapUv:N&&x(y.aoMap.channel),lightMapUv:Ot&&x(y.lightMap.channel),bumpMapUv:tt&&x(y.bumpMap.channel),normalMapUv:it&&x(y.normalMap.channel),displacementMapUv:Fe&&x(y.displacementMap.channel),emissiveMapUv:pt&&x(y.emissiveMap.channel),metalnessMapUv:Ue&&x(y.metalnessMap.channel),roughnessMapUv:w&&x(y.roughnessMap.channel),anisotropyMapUv:Me&&x(y.anisotropyMap.channel),clearcoatMapUv:Re&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:nt&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&x(y.sheenRoughnessMap.channel),specularMapUv:Ke&&x(y.specularMap.channel),specularColorMapUv:Ze&&x(y.specularColorMap.channel),specularIntensityMapUv:vt&&x(y.specularIntensityMap.channel),transmissionMapUv:O&&x(y.transmissionMap.channel),thicknessMapUv:Se&&x(y.thicknessMap.channel),alphaMapUv:re&&x(y.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(it||M),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!ie.attributes.uv&&(rt||re),fog:!!J,useFog:y.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Le,skinning:Y.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:He,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:ft,decodeVideoTexture:rt&&y.map.isVideoTexture===!0&&ct.getTransfer(y.map.colorSpace)===gt,decodeVideoTextureEmissive:pt&&y.emissiveMap.isVideoTexture===!0&&ct.getTransfer(y.emissiveMap.colorSpace)===gt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===jn,flipSided:y.side===rn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ke&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&y.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ht.vertexUv1s=c.has(1),Ht.vertexUv2s=c.has(2),Ht.vertexUv3s=c.has(3),c.clear(),Ht}function h(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)S.push(U),S.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(R(S,y),A(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function R(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function A(y,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),y.push(o.mask)}function T(y){const S=v[y.type];let U;if(S){const G=Ln[S];U=Yo.clone(G.uniforms)}else U=y.uniforms;return U}function I(y,S){let U;for(let G=0,Y=u.length;G<Y;G++){const J=u[G];if(J.cacheKey===S){U=J,++U.usedTimes;break}}return U===void 0&&(U=new A_(i,S,y,s),u.push(U)),U}function D(y){if(--y.usedTimes===0){const S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),y.destroy()}}function P(y){l.remove(y)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:T,acquireProgram:I,releaseProgram:D,releaseShaderCache:P,programs:u,dispose:L}}function D_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function L_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function pc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function mc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d,m,_,v,x,g){let h=i[e];return h===void 0?(h={id:d.id,object:d,geometry:m,material:_,groupOrder:v,renderOrder:d.renderOrder,z:x,group:g},i[e]=h):(h.id=d.id,h.object=d,h.geometry=m,h.material=_,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=x,h.group=g),e++,h}function o(d,m,_,v,x,g){const h=a(d,m,_,v,x,g);_.transmission>0?n.push(h):_.transparent===!0?r.push(h):t.push(h)}function l(d,m,_,v,x,g){const h=a(d,m,_,v,x,g);_.transmission>0?n.unshift(h):_.transparent===!0?r.unshift(h):t.unshift(h)}function c(d,m){t.length>1&&t.sort(d||L_),n.length>1&&n.sort(m||pc),r.length>1&&r.sort(m||pc)}function u(){for(let d=e,m=i.length;d<m;d++){const _=i[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function U_(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new mc,i.set(n,[a])):r>=s.length?(a=new mc,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function I_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new _t};break;case"SpotLight":t={position:new X,direction:new X,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new X,halfWidth:new X,halfHeight:new X};break}return i[e.id]=t,t}}}function N_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let F_=0;function O_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function B_(i){const e=new I_,t=N_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new X);const r=new X,s=new Et,a=new Et;function o(c){let u=0,d=0,m=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let _=0,v=0,x=0,g=0,h=0,R=0,A=0,T=0,I=0,D=0,P=0;c.sort(O_);for(let y=0,S=c.length;y<S;y++){const U=c[y],G=U.color,Y=U.intensity,J=U.distance,ie=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=G.r*Y,d+=G.g*Y,m+=G.b*Y;else if(U.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(U.sh.coefficients[K],Y);P++}else if(U.isDirectionalLight){const K=e.get(U);if(K.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const ae=U.shadow,$=t.get(U);$.shadowIntensity=ae.intensity,$.shadowBias=ae.bias,$.shadowNormalBias=ae.normalBias,$.shadowRadius=ae.radius,$.shadowMapSize=ae.mapSize,n.directionalShadow[_]=$,n.directionalShadowMap[_]=ie,n.directionalShadowMatrix[_]=U.shadow.matrix,R++}n.directional[_]=K,_++}else if(U.isSpotLight){const K=e.get(U);K.position.setFromMatrixPosition(U.matrixWorld),K.color.copy(G).multiplyScalar(Y),K.distance=J,K.coneCos=Math.cos(U.angle),K.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),K.decay=U.decay,n.spot[x]=K;const ae=U.shadow;if(U.map&&(n.spotLightMap[I]=U.map,I++,ae.updateMatrices(U),U.castShadow&&D++),n.spotLightMatrix[x]=ae.matrix,U.castShadow){const $=t.get(U);$.shadowIntensity=ae.intensity,$.shadowBias=ae.bias,$.shadowNormalBias=ae.normalBias,$.shadowRadius=ae.radius,$.shadowMapSize=ae.mapSize,n.spotShadow[x]=$,n.spotShadowMap[x]=ie,T++}x++}else if(U.isRectAreaLight){const K=e.get(U);K.color.copy(G).multiplyScalar(Y),K.halfWidth.set(U.width*.5,0,0),K.halfHeight.set(0,U.height*.5,0),n.rectArea[g]=K,g++}else if(U.isPointLight){const K=e.get(U);if(K.color.copy(U.color).multiplyScalar(U.intensity),K.distance=U.distance,K.decay=U.decay,U.castShadow){const ae=U.shadow,$=t.get(U);$.shadowIntensity=ae.intensity,$.shadowBias=ae.bias,$.shadowNormalBias=ae.normalBias,$.shadowRadius=ae.radius,$.shadowMapSize=ae.mapSize,$.shadowCameraNear=ae.camera.near,$.shadowCameraFar=ae.camera.far,n.pointShadow[v]=$,n.pointShadowMap[v]=ie,n.pointShadowMatrix[v]=U.shadow.matrix,A++}n.point[v]=K,v++}else if(U.isHemisphereLight){const K=e.get(U);K.skyColor.copy(U.color).multiplyScalar(Y),K.groundColor.copy(U.groundColor).multiplyScalar(Y),n.hemi[h]=K,h++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=m;const L=n.hash;(L.directionalLength!==_||L.pointLength!==v||L.spotLength!==x||L.rectAreaLength!==g||L.hemiLength!==h||L.numDirectionalShadows!==R||L.numPointShadows!==A||L.numSpotShadows!==T||L.numSpotMaps!==I||L.numLightProbes!==P)&&(n.directional.length=_,n.spot.length=x,n.rectArea.length=g,n.point.length=v,n.hemi.length=h,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=T+I-D,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=P,L.directionalLength=_,L.pointLength=v,L.spotLength=x,L.rectAreaLength=g,L.hemiLength=h,L.numDirectionalShadows=R,L.numPointShadows=A,L.numSpotShadows=T,L.numSpotMaps=I,L.numLightProbes=P,n.version=F_++)}function l(c,u){let d=0,m=0,_=0,v=0,x=0;const g=u.matrixWorldInverse;for(let h=0,R=c.length;h<R;h++){const A=c[h];if(A.isDirectionalLight){const T=n.directional[d];T.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(g),d++}else if(A.isSpotLight){const T=n.spot[_];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(g),_++}else if(A.isRectAreaLight){const T=n.rectArea[v];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(g),a.identity(),s.copy(A.matrixWorld),s.premultiply(g),a.extractRotation(s),T.halfWidth.set(A.width*.5,0,0),T.halfHeight.set(0,A.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),v++}else if(A.isPointLight){const T=n.point[m];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(g),m++}else if(A.isHemisphereLight){const T=n.hemi[x];T.direction.setFromMatrixPosition(A.matrixWorld),T.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:n}}function gc(i){const e=new B_(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function z_(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new gc(i),e.set(r,[o])):s>=a.length?(o=new gc(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const k_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H_=`uniform sampler2D shadow_pass;
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
}`;function V_(i,e,t){let n=new au;const r=new ut,s=new ut,a=new Dt,o=new gd({depthPacking:wh}),l=new _d,c={},u=t.maxTextureSize,d={[xi]:rn,[rn]:xi,[jn]:jn},m=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:k_,fragmentShader:H_}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const v=new si;v.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new dn(v,m),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc;let h=this.type;this.render=function(D,P,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||D.length===0)return;const y=i.getRenderTarget(),S=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),G=i.state;G.setBlending(ei),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const Y=h!==Yn&&this.type===Yn,J=h===Yn&&this.type!==Yn;for(let ie=0,K=D.length;ie<K;ie++){const ae=D[ie],$=ae.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const de=$.getFrameExtents();if(r.multiply(de),s.copy($.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/de.x),r.x=s.x*de.x,$.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/de.y),r.y=s.y*de.y,$.mapSize.y=s.y)),$.map===null||Y===!0||J===!0){const we=this.type!==Yn?{minFilter:wn,magFilter:wn}:{};$.map!==null&&$.map.dispose(),$.map=new Fn(r.x,r.y,we),$.map.texture.name=ae.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const Ee=$.getViewportCount();for(let we=0;we<Ee;we++){const He=$.getViewport(we);a.set(s.x*He.x,s.y*He.y,s.x*He.z,s.y*He.w),G.viewport(a),$.updateMatrices(ae,we),n=$.getFrustum(),T(P,L,$.camera,ae,this.type)}$.isPointLightShadow!==!0&&this.type===Yn&&R($,L),$.needsUpdate=!1}h=this.type,g.needsUpdate=!1,i.setRenderTarget(y,S,U)};function R(D,P){const L=e.update(x);m.defines.VSM_SAMPLES!==D.blurSamples&&(m.defines.VSM_SAMPLES=D.blurSamples,_.defines.VSM_SAMPLES=D.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Fn(r.x,r.y)),m.uniforms.shadow_pass.value=D.map.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(P,null,L,m,x,null),_.uniforms.shadow_pass.value=D.mapPass.texture,_.uniforms.resolution.value=D.mapSize,_.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(P,null,L,_,x,null)}function A(D,P,L,y){let S=null;const U=L.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(U!==void 0)S=U;else if(S=L.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const G=S.uuid,Y=P.uuid;let J=c[G];J===void 0&&(J={},c[G]=J);let ie=J[Y];ie===void 0&&(ie=S.clone(),J[Y]=ie,P.addEventListener("dispose",I)),S=ie}if(S.visible=P.visible,S.wireframe=P.wireframe,y===Yn?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:d[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const G=i.properties.get(S);G.light=L}return S}function T(D,P,L,y,S){if(D.visible===!1)return;if(D.layers.test(P.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&S===Yn)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,D.matrixWorld);const Y=e.update(D),J=D.material;if(Array.isArray(J)){const ie=Y.groups;for(let K=0,ae=ie.length;K<ae;K++){const $=ie[K],de=J[$.materialIndex];if(de&&de.visible){const Ee=A(D,de,y,S);D.onBeforeShadow(i,D,P,L,Y,Ee,$),i.renderBufferDirect(L,null,Y,Ee,D,$),D.onAfterShadow(i,D,P,L,Y,Ee,$)}}}else if(J.visible){const ie=A(D,J,y,S);D.onBeforeShadow(i,D,P,L,Y,ie,null),i.renderBufferDirect(L,null,Y,ie,D,null),D.onAfterShadow(i,D,P,L,Y,ie,null)}}const G=D.children;for(let Y=0,J=G.length;Y<J;Y++)T(G[Y],P,L,y,S)}function I(D){D.target.removeEventListener("dispose",I);for(const L in c){const y=c[L],S=D.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const G_={[$a]:qa,[Ya]:Za,[ja]:Ja,[dr]:Ka,[qa]:$a,[Za]:Ya,[Ja]:ja,[Ka]:dr};function W_(i,e){function t(){let O=!1;const Se=new Dt;let j=null;const re=new Dt(0,0,0,0);return{setMask:function(ce){j!==ce&&!O&&(i.colorMask(ce,ce,ce,ce),j=ce)},setLocked:function(ce){O=ce},setClear:function(ce,be,ke,ft,Ht){Ht===!0&&(ce*=ft,be*=ft,ke*=ft),Se.set(ce,be,ke,ft),re.equals(Se)===!1&&(i.clearColor(ce,be,ke,ft),re.copy(Se))},reset:function(){O=!1,j=null,re.set(-1,0,0,0)}}}function n(){let O=!1,Se=!1,j=null,re=null,ce=null;return{setReversed:function(be){if(Se!==be){const ke=e.get("EXT_clip_control");Se?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT);const ft=ce;ce=null,this.setClear(ft)}Se=be},getReversed:function(){return Se},setTest:function(be){be?_e(i.DEPTH_TEST):Le(i.DEPTH_TEST)},setMask:function(be){j!==be&&!O&&(i.depthMask(be),j=be)},setFunc:function(be){if(Se&&(be=G_[be]),re!==be){switch(be){case $a:i.depthFunc(i.NEVER);break;case qa:i.depthFunc(i.ALWAYS);break;case Ya:i.depthFunc(i.LESS);break;case dr:i.depthFunc(i.LEQUAL);break;case ja:i.depthFunc(i.EQUAL);break;case Ka:i.depthFunc(i.GEQUAL);break;case Za:i.depthFunc(i.GREATER);break;case Ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=be}},setLocked:function(be){O=be},setClear:function(be){ce!==be&&(Se&&(be=1-be),i.clearDepth(be),ce=be)},reset:function(){O=!1,j=null,re=null,ce=null,Se=!1}}}function r(){let O=!1,Se=null,j=null,re=null,ce=null,be=null,ke=null,ft=null,Ht=null;return{setTest:function(mt){O||(mt?_e(i.STENCIL_TEST):Le(i.STENCIL_TEST))},setMask:function(mt){Se!==mt&&!O&&(i.stencilMask(mt),Se=mt)},setFunc:function(mt,Zt,on){(j!==mt||re!==Zt||ce!==on)&&(i.stencilFunc(mt,Zt,on),j=mt,re=Zt,ce=on)},setOp:function(mt,Zt,on){(be!==mt||ke!==Zt||ft!==on)&&(i.stencilOp(mt,Zt,on),be=mt,ke=Zt,ft=on)},setLocked:function(mt){O=mt},setClear:function(mt){Ht!==mt&&(i.clearStencil(mt),Ht=mt)},reset:function(){O=!1,Se=null,j=null,re=null,ce=null,be=null,ke=null,ft=null,Ht=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},m=new WeakMap,_=[],v=null,x=!1,g=null,h=null,R=null,A=null,T=null,I=null,D=null,P=new _t(0,0,0),L=0,y=!1,S=null,U=null,G=null,Y=null,J=null;const ie=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,ae=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec($)[1]),K=ae>=1):$.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),K=ae>=2);let de=null,Ee={};const we=i.getParameter(i.SCISSOR_BOX),He=i.getParameter(i.VIEWPORT),Xe=new Dt().fromArray(we),Q=new Dt().fromArray(He);function se(O,Se,j,re){const ce=new Uint8Array(4),be=i.createTexture();i.bindTexture(O,be),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<j;ke++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,re,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(Se+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return be}const ve={};ve[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),ve[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ve[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_e(i.DEPTH_TEST),a.setFunc(dr),tt(!1),it(Sl),_e(i.CULL_FACE),N(ei);function _e(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function Le(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function $e(O,Se){return d[O]!==Se?(i.bindFramebuffer(O,Se),d[O]=Se,O===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Se),O===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function Ne(O,Se){let j=_,re=!1;if(O){j=m.get(Se),j===void 0&&(j=[],m.set(Se,j));const ce=O.textures;if(j.length!==ce.length||j[0]!==i.COLOR_ATTACHMENT0){for(let be=0,ke=ce.length;be<ke;be++)j[be]=i.COLOR_ATTACHMENT0+be;j.length=ce.length,re=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,re=!0);re&&i.drawBuffers(j)}function rt(O){return v!==O?(i.useProgram(O),v=O,!0):!1}const et={[Li]:i.FUNC_ADD,[ah]:i.FUNC_SUBTRACT,[oh]:i.FUNC_REVERSE_SUBTRACT};et[lh]=i.MIN,et[ch]=i.MAX;const Ve={[uh]:i.ZERO,[fh]:i.ONE,[hh]:i.SRC_COLOR,[Wa]:i.SRC_ALPHA,[vh]:i.SRC_ALPHA_SATURATE,[gh]:i.DST_COLOR,[ph]:i.DST_ALPHA,[dh]:i.ONE_MINUS_SRC_COLOR,[Xa]:i.ONE_MINUS_SRC_ALPHA,[_h]:i.ONE_MINUS_DST_COLOR,[mh]:i.ONE_MINUS_DST_ALPHA,[xh]:i.CONSTANT_COLOR,[Mh]:i.ONE_MINUS_CONSTANT_COLOR,[Sh]:i.CONSTANT_ALPHA,[yh]:i.ONE_MINUS_CONSTANT_ALPHA};function N(O,Se,j,re,ce,be,ke,ft,Ht,mt){if(O===ei){x===!0&&(Le(i.BLEND),x=!1);return}if(x===!1&&(_e(i.BLEND),x=!0),O!==sh){if(O!==g||mt!==y){if((h!==Li||T!==Li)&&(i.blendEquation(i.FUNC_ADD),h=Li,T=Li),mt)switch(O){case ur:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yl:i.blendFunc(i.ONE,i.ONE);break;case El:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ur:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case El:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}R=null,A=null,I=null,D=null,P.set(0,0,0),L=0,g=O,y=mt}return}ce=ce||Se,be=be||j,ke=ke||re,(Se!==h||ce!==T)&&(i.blendEquationSeparate(et[Se],et[ce]),h=Se,T=ce),(j!==R||re!==A||be!==I||ke!==D)&&(i.blendFuncSeparate(Ve[j],Ve[re],Ve[be],Ve[ke]),R=j,A=re,I=be,D=ke),(ft.equals(P)===!1||Ht!==L)&&(i.blendColor(ft.r,ft.g,ft.b,Ht),P.copy(ft),L=Ht),g=O,y=!1}function Ot(O,Se){O.side===jn?Le(i.CULL_FACE):_e(i.CULL_FACE);let j=O.side===rn;Se&&(j=!j),tt(j),O.blending===ur&&O.transparent===!1?N(ei):N(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const re=O.stencilWrite;o.setTest(re),re&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),pt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?_e(i.SAMPLE_ALPHA_TO_COVERAGE):Le(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(O){S!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),S=O)}function it(O){O!==nh?(_e(i.CULL_FACE),O!==U&&(O===Sl?i.cullFace(i.BACK):O===ih?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Le(i.CULL_FACE),U=O}function Fe(O){O!==G&&(K&&i.lineWidth(O),G=O)}function pt(O,Se,j){O?(_e(i.POLYGON_OFFSET_FILL),(Y!==Se||J!==j)&&(i.polygonOffset(Se,j),Y=Se,J=j)):Le(i.POLYGON_OFFSET_FILL)}function Ue(O){O?_e(i.SCISSOR_TEST):Le(i.SCISSOR_TEST)}function w(O){O===void 0&&(O=i.TEXTURE0+ie-1),de!==O&&(i.activeTexture(O),de=O)}function M(O,Se,j){j===void 0&&(de===null?j=i.TEXTURE0+ie-1:j=de);let re=Ee[j];re===void 0&&(re={type:void 0,texture:void 0},Ee[j]=re),(re.type!==O||re.texture!==Se)&&(de!==j&&(i.activeTexture(j),de=j),i.bindTexture(O,Se||ve[O]),re.type=O,re.texture=Se)}function V(){const O=Ee[de];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function oe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ie(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function nt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Oe(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ge(O){Xe.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Xe.copy(O))}function Ce(O){Q.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Q.copy(O))}function Ke(O,Se){let j=c.get(Se);j===void 0&&(j=new WeakMap,c.set(Se,j));let re=j.get(O);re===void 0&&(re=i.getUniformBlockIndex(Se,O.name),j.set(O,re))}function Ze(O,Se){const re=c.get(Se).get(O);l.get(Se)!==re&&(i.uniformBlockBinding(Se,re,O.__bindingPointIndex),l.set(Se,re))}function vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},de=null,Ee={},d={},m=new WeakMap,_=[],v=null,x=!1,g=null,h=null,R=null,A=null,T=null,I=null,D=null,P=new _t(0,0,0),L=0,y=!1,S=null,U=null,G=null,Y=null,J=null,Xe.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:_e,disable:Le,bindFramebuffer:$e,drawBuffers:Ne,useProgram:rt,setBlending:N,setMaterial:Ot,setFlipSided:tt,setCullFace:it,setLineWidth:Fe,setPolygonOffset:pt,setScissorTest:Ue,activeTexture:w,bindTexture:M,unbindTexture:V,compressedTexImage2D:oe,compressedTexImage3D:ue,texImage2D:Ae,texImage3D:Oe,updateUBOMapping:Ke,uniformBlockBinding:Ze,texStorage2D:nt,texStorage3D:pe,texSubImage2D:ne,texSubImage3D:Ie,compressedTexSubImage2D:Me,compressedTexSubImage3D:Re,scissor:Ge,viewport:Ce,reset:vt}}function X_(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,u=new WeakMap;let d;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,M){return _?new OffscreenCanvas(w,M):ks("canvas")}function x(w,M,V){let oe=1;const ue=Ue(w);if((ue.width>V||ue.height>V)&&(oe=V/Math.max(ue.width,ue.height)),oe<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ne=Math.floor(oe*ue.width),Ie=Math.floor(oe*ue.height);d===void 0&&(d=v(ne,Ie));const Me=M?v(ne,Ie):d;return Me.width=ne,Me.height=Ie,Me.getContext("2d").drawImage(w,0,0,ne,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+ne+"x"+Ie+")."),Me}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),w;return w}function g(w){return w.generateMipmaps}function h(w){i.generateMipmap(w)}function R(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(w,M,V,oe,ue=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ne=M;if(M===i.RED&&(V===i.FLOAT&&(ne=i.R32F),V===i.HALF_FLOAT&&(ne=i.R16F),V===i.UNSIGNED_BYTE&&(ne=i.R8)),M===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(ne=i.R8UI),V===i.UNSIGNED_SHORT&&(ne=i.R16UI),V===i.UNSIGNED_INT&&(ne=i.R32UI),V===i.BYTE&&(ne=i.R8I),V===i.SHORT&&(ne=i.R16I),V===i.INT&&(ne=i.R32I)),M===i.RG&&(V===i.FLOAT&&(ne=i.RG32F),V===i.HALF_FLOAT&&(ne=i.RG16F),V===i.UNSIGNED_BYTE&&(ne=i.RG8)),M===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(ne=i.RG8UI),V===i.UNSIGNED_SHORT&&(ne=i.RG16UI),V===i.UNSIGNED_INT&&(ne=i.RG32UI),V===i.BYTE&&(ne=i.RG8I),V===i.SHORT&&(ne=i.RG16I),V===i.INT&&(ne=i.RG32I)),M===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),V===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),V===i.UNSIGNED_INT&&(ne=i.RGB32UI),V===i.BYTE&&(ne=i.RGB8I),V===i.SHORT&&(ne=i.RGB16I),V===i.INT&&(ne=i.RGB32I)),M===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),V===i.UNSIGNED_INT&&(ne=i.RGBA32UI),V===i.BYTE&&(ne=i.RGBA8I),V===i.SHORT&&(ne=i.RGBA16I),V===i.INT&&(ne=i.RGBA32I)),M===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),M===i.RGBA){const Ie=ue?Bs:ct.getTransfer(oe);V===i.FLOAT&&(ne=i.RGBA32F),V===i.HALF_FLOAT&&(ne=i.RGBA16F),V===i.UNSIGNED_BYTE&&(ne=Ie===gt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function T(w,M){let V;return w?M===null||M===Oi||M===gr?V=i.DEPTH24_STENCIL8:M===Kn?V=i.DEPTH32F_STENCIL8:M===Wr&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Oi||M===gr?V=i.DEPTH_COMPONENT24:M===Kn?V=i.DEPTH_COMPONENT32F:M===Wr&&(V=i.DEPTH_COMPONENT16),V}function I(w,M){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==wn&&w.minFilter!==In?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function D(w){const M=w.target;M.removeEventListener("dispose",D),L(M),M.isVideoTexture&&u.delete(M)}function P(w){const M=w.target;M.removeEventListener("dispose",P),S(M)}function L(w){const M=n.get(w);if(M.__webglInit===void 0)return;const V=w.source,oe=m.get(V);if(oe){const ue=oe[M.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&y(w),Object.keys(oe).length===0&&m.delete(V)}n.remove(w)}function y(w){const M=n.get(w);i.deleteTexture(M.__webglTexture);const V=w.source,oe=m.get(V);delete oe[M.__cacheKey],a.memory.textures--}function S(w){const M=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(M.__webglFramebuffer[oe]))for(let ue=0;ue<M.__webglFramebuffer[oe].length;ue++)i.deleteFramebuffer(M.__webglFramebuffer[oe][ue]);else i.deleteFramebuffer(M.__webglFramebuffer[oe]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[oe])}else{if(Array.isArray(M.__webglFramebuffer))for(let oe=0;oe<M.__webglFramebuffer.length;oe++)i.deleteFramebuffer(M.__webglFramebuffer[oe]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let oe=0;oe<M.__webglColorRenderbuffer.length;oe++)M.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[oe]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=w.textures;for(let oe=0,ue=V.length;oe<ue;oe++){const ne=n.get(V[oe]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),a.memory.textures--),n.remove(V[oe])}n.remove(w)}let U=0;function G(){U=0}function Y(){const w=U;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),U+=1,w}function J(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function ie(w,M){const V=n.get(w);if(w.isVideoTexture&&Fe(w),w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){const oe=w.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(V,w,M);return}}t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+M)}function K(w,M){const V=n.get(w);if(w.version>0&&V.__version!==w.version){Q(V,w,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+M)}function ae(w,M){const V=n.get(w);if(w.version>0&&V.__version!==w.version){Q(V,w,M);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+M)}function $(w,M){const V=n.get(w);if(w.version>0&&V.__version!==w.version){se(V,w,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+M)}const de={[to]:i.REPEAT,[Ni]:i.CLAMP_TO_EDGE,[no]:i.MIRRORED_REPEAT},Ee={[wn]:i.NEAREST,[bh]:i.NEAREST_MIPMAP_NEAREST,[ss]:i.NEAREST_MIPMAP_LINEAR,[In]:i.LINEAR,[ca]:i.LINEAR_MIPMAP_NEAREST,[Fi]:i.LINEAR_MIPMAP_LINEAR},we={[Ch]:i.NEVER,[Nh]:i.ALWAYS,[Ph]:i.LESS,[Yc]:i.LEQUAL,[Dh]:i.EQUAL,[Ih]:i.GEQUAL,[Lh]:i.GREATER,[Uh]:i.NOTEQUAL};function He(w,M){if(M.type===Kn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===In||M.magFilter===ca||M.magFilter===ss||M.magFilter===Fi||M.minFilter===In||M.minFilter===ca||M.minFilter===ss||M.minFilter===Fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,de[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,de[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,de[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,Ee[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,Ee[M.minFilter]),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,we[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===wn||M.minFilter!==ss&&M.minFilter!==Fi||M.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Xe(w,M){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",D));const oe=M.source;let ue=m.get(oe);ue===void 0&&(ue={},m.set(oe,ue));const ne=J(M);if(ne!==w.__cacheKey){ue[ne]===void 0&&(ue[ne]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ue[ne].usedTimes++;const Ie=ue[w.__cacheKey];Ie!==void 0&&(ue[w.__cacheKey].usedTimes--,Ie.usedTimes===0&&y(M)),w.__cacheKey=ne,w.__webglTexture=ue[ne].texture}return V}function Q(w,M,V){let oe=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(oe=i.TEXTURE_3D);const ue=Xe(w,M),ne=M.source;t.bindTexture(oe,w.__webglTexture,i.TEXTURE0+V);const Ie=n.get(ne);if(ne.version!==Ie.__version||ue===!0){t.activeTexture(i.TEXTURE0+V);const Me=ct.getPrimaries(ct.workingColorSpace),Re=M.colorSpace===gi?null:ct.getPrimaries(M.colorSpace),nt=M.colorSpace===gi||Me===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let pe=x(M.image,!1,r.maxTextureSize);pe=pt(M,pe);const Ae=s.convert(M.format,M.colorSpace),Oe=s.convert(M.type);let Ge=A(M.internalFormat,Ae,Oe,M.colorSpace,M.isVideoTexture);He(oe,M);let Ce;const Ke=M.mipmaps,Ze=M.isVideoTexture!==!0,vt=Ie.__version===void 0||ue===!0,O=ne.dataReady,Se=I(M,pe);if(M.isDepthTexture)Ge=T(M.format===_r,M.type),vt&&(Ze?t.texStorage2D(i.TEXTURE_2D,1,Ge,pe.width,pe.height):t.texImage2D(i.TEXTURE_2D,0,Ge,pe.width,pe.height,0,Ae,Oe,null));else if(M.isDataTexture)if(Ke.length>0){Ze&&vt&&t.texStorage2D(i.TEXTURE_2D,Se,Ge,Ke[0].width,Ke[0].height);for(let j=0,re=Ke.length;j<re;j++)Ce=Ke[j],Ze?O&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Ce.width,Ce.height,Ae,Oe,Ce.data):t.texImage2D(i.TEXTURE_2D,j,Ge,Ce.width,Ce.height,0,Ae,Oe,Ce.data);M.generateMipmaps=!1}else Ze?(vt&&t.texStorage2D(i.TEXTURE_2D,Se,Ge,pe.width,pe.height),O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe.width,pe.height,Ae,Oe,pe.data)):t.texImage2D(i.TEXTURE_2D,0,Ge,pe.width,pe.height,0,Ae,Oe,pe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ze&&vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Ge,Ke[0].width,Ke[0].height,pe.depth);for(let j=0,re=Ke.length;j<re;j++)if(Ce=Ke[j],M.format!==An)if(Ae!==null)if(Ze){if(O)if(M.layerUpdates.size>0){const ce=$l(Ce.width,Ce.height,M.format,M.type);for(const be of M.layerUpdates){const ke=Ce.data.subarray(be*ce/Ce.data.BYTES_PER_ELEMENT,(be+1)*ce/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,be,Ce.width,Ce.height,1,Ae,ke)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Ce.width,Ce.height,pe.depth,Ae,Ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Ge,Ce.width,Ce.height,pe.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Ce.width,Ce.height,pe.depth,Ae,Oe,Ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,Ge,Ce.width,Ce.height,pe.depth,0,Ae,Oe,Ce.data)}else{Ze&&vt&&t.texStorage2D(i.TEXTURE_2D,Se,Ge,Ke[0].width,Ke[0].height);for(let j=0,re=Ke.length;j<re;j++)Ce=Ke[j],M.format!==An?Ae!==null?Ze?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,Ce.width,Ce.height,Ae,Ce.data):t.compressedTexImage2D(i.TEXTURE_2D,j,Ge,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?O&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Ce.width,Ce.height,Ae,Oe,Ce.data):t.texImage2D(i.TEXTURE_2D,j,Ge,Ce.width,Ce.height,0,Ae,Oe,Ce.data)}else if(M.isDataArrayTexture)if(Ze){if(vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Ge,pe.width,pe.height,pe.depth),O)if(M.layerUpdates.size>0){const j=$l(pe.width,pe.height,M.format,M.type);for(const re of M.layerUpdates){const ce=pe.data.subarray(re*j/pe.data.BYTES_PER_ELEMENT,(re+1)*j/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,pe.width,pe.height,1,Ae,Oe,ce)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ae,Oe,pe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ge,pe.width,pe.height,pe.depth,0,Ae,Oe,pe.data);else if(M.isData3DTexture)Ze?(vt&&t.texStorage3D(i.TEXTURE_3D,Se,Ge,pe.width,pe.height,pe.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ae,Oe,pe.data)):t.texImage3D(i.TEXTURE_3D,0,Ge,pe.width,pe.height,pe.depth,0,Ae,Oe,pe.data);else if(M.isFramebufferTexture){if(vt)if(Ze)t.texStorage2D(i.TEXTURE_2D,Se,Ge,pe.width,pe.height);else{let j=pe.width,re=pe.height;for(let ce=0;ce<Se;ce++)t.texImage2D(i.TEXTURE_2D,ce,Ge,j,re,0,Ae,Oe,null),j>>=1,re>>=1}}else if(Ke.length>0){if(Ze&&vt){const j=Ue(Ke[0]);t.texStorage2D(i.TEXTURE_2D,Se,Ge,j.width,j.height)}for(let j=0,re=Ke.length;j<re;j++)Ce=Ke[j],Ze?O&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Ae,Oe,Ce):t.texImage2D(i.TEXTURE_2D,j,Ge,Ae,Oe,Ce);M.generateMipmaps=!1}else if(Ze){if(vt){const j=Ue(pe);t.texStorage2D(i.TEXTURE_2D,Se,Ge,j.width,j.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae,Oe,pe)}else t.texImage2D(i.TEXTURE_2D,0,Ge,Ae,Oe,pe);g(M)&&h(oe),Ie.__version=ne.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function se(w,M,V){if(M.image.length!==6)return;const oe=Xe(w,M),ue=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+V);const ne=n.get(ue);if(ue.version!==ne.__version||oe===!0){t.activeTexture(i.TEXTURE0+V);const Ie=ct.getPrimaries(ct.workingColorSpace),Me=M.colorSpace===gi?null:ct.getPrimaries(M.colorSpace),Re=M.colorSpace===gi||Ie===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const nt=M.isCompressedTexture||M.image[0].isCompressedTexture,pe=M.image[0]&&M.image[0].isDataTexture,Ae=[];for(let re=0;re<6;re++)!nt&&!pe?Ae[re]=x(M.image[re],!0,r.maxCubemapSize):Ae[re]=pe?M.image[re].image:M.image[re],Ae[re]=pt(M,Ae[re]);const Oe=Ae[0],Ge=s.convert(M.format,M.colorSpace),Ce=s.convert(M.type),Ke=A(M.internalFormat,Ge,Ce,M.colorSpace),Ze=M.isVideoTexture!==!0,vt=ne.__version===void 0||oe===!0,O=ue.dataReady;let Se=I(M,Oe);He(i.TEXTURE_CUBE_MAP,M);let j;if(nt){Ze&&vt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,Ke,Oe.width,Oe.height);for(let re=0;re<6;re++){j=Ae[re].mipmaps;for(let ce=0;ce<j.length;ce++){const be=j[ce];M.format!==An?Ge!==null?Ze?O&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ce,0,0,be.width,be.height,Ge,be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ce,Ke,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ce,0,0,be.width,be.height,Ge,Ce,be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ce,Ke,be.width,be.height,0,Ge,Ce,be.data)}}}else{if(j=M.mipmaps,Ze&&vt){j.length>0&&Se++;const re=Ue(Ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,Ke,re.width,re.height)}for(let re=0;re<6;re++)if(pe){Ze?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ae[re].width,Ae[re].height,Ge,Ce,Ae[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ke,Ae[re].width,Ae[re].height,0,Ge,Ce,Ae[re].data);for(let ce=0;ce<j.length;ce++){const ke=j[ce].image[re].image;Ze?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ce+1,0,0,ke.width,ke.height,Ge,Ce,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ce+1,Ke,ke.width,ke.height,0,Ge,Ce,ke.data)}}else{Ze?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ge,Ce,Ae[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ke,Ge,Ce,Ae[re]);for(let ce=0;ce<j.length;ce++){const be=j[ce];Ze?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ce+1,0,0,Ge,Ce,be.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ce+1,Ke,Ge,Ce,be.image[re])}}}g(M)&&h(i.TEXTURE_CUBE_MAP),ne.__version=ue.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ve(w,M,V,oe,ue,ne){const Ie=s.convert(V.format,V.colorSpace),Me=s.convert(V.type),Re=A(V.internalFormat,Ie,Me,V.colorSpace),nt=n.get(M),pe=n.get(V);if(pe.__renderTarget=M,!nt.__hasExternalTextures){const Ae=Math.max(1,M.width>>ne),Oe=Math.max(1,M.height>>ne);ue===i.TEXTURE_3D||ue===i.TEXTURE_2D_ARRAY?t.texImage3D(ue,ne,Re,Ae,Oe,M.depth,0,Ie,Me,null):t.texImage2D(ue,ne,Re,Ae,Oe,0,Ie,Me,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),it(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,ue,pe.__webglTexture,0,tt(M)):(ue===i.TEXTURE_2D||ue>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,ue,pe.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function _e(w,M,V){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer){const oe=M.depthTexture,ue=oe&&oe.isDepthTexture?oe.type:null,ne=T(M.stencilBuffer,ue),Ie=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=tt(M);it(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me,ne,M.width,M.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,ne,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ne,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ie,i.RENDERBUFFER,w)}else{const oe=M.textures;for(let ue=0;ue<oe.length;ue++){const ne=oe[ue],Ie=s.convert(ne.format,ne.colorSpace),Me=s.convert(ne.type),Re=A(ne.internalFormat,Ie,Me,ne.colorSpace),nt=tt(M);V&&it(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,Re,M.width,M.height):it(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,Re,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Re,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const oe=n.get(M.depthTexture);oe.__renderTarget=M,(!oe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ie(M.depthTexture,0);const ue=oe.__webglTexture,ne=tt(M);if(M.depthTexture.format===fr)it(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0);else if(M.depthTexture.format===_r)it(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function $e(w){const M=n.get(w),V=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const oe=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),oe){const ue=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,oe.removeEventListener("dispose",ue)};oe.addEventListener("dispose",ue),M.__depthDisposeCallback=ue}M.__boundDepthTexture=oe}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Le(M.__webglFramebuffer,w)}else if(V){M.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[oe]),M.__webglDepthbuffer[oe]===void 0)M.__webglDepthbuffer[oe]=i.createRenderbuffer(),_e(M.__webglDepthbuffer[oe],w,!1);else{const ue=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer[oe];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),_e(M.__webglDepthbuffer,w,!1);else{const oe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,ue)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(w,M,V){const oe=n.get(w);M!==void 0&&ve(oe.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&$e(w)}function rt(w){const M=w.texture,V=n.get(w),oe=n.get(M);w.addEventListener("dispose",P);const ue=w.textures,ne=w.isWebGLCubeRenderTarget===!0,Ie=ue.length>1;if(Ie||(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=M.version,a.memory.textures++),ne){V.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[Me]=[];for(let Re=0;Re<M.mipmaps.length;Re++)V.__webglFramebuffer[Me][Re]=i.createFramebuffer()}else V.__webglFramebuffer[Me]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let Me=0;Me<M.mipmaps.length;Me++)V.__webglFramebuffer[Me]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Ie)for(let Me=0,Re=ue.length;Me<Re;Me++){const nt=n.get(ue[Me]);nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&it(w)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Me=0;Me<ue.length;Me++){const Re=ue[Me];V.__webglColorRenderbuffer[Me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[Me]);const nt=s.convert(Re.format,Re.colorSpace),pe=s.convert(Re.type),Ae=A(Re.internalFormat,nt,pe,Re.colorSpace,w.isXRRenderTarget===!0),Oe=tt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,Ae,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,V.__webglColorRenderbuffer[Me])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),_e(V.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),He(i.TEXTURE_CUBE_MAP,M);for(let Me=0;Me<6;Me++)if(M.mipmaps&&M.mipmaps.length>0)for(let Re=0;Re<M.mipmaps.length;Re++)ve(V.__webglFramebuffer[Me][Re],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Re);else ve(V.__webglFramebuffer[Me],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);g(M)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let Me=0,Re=ue.length;Me<Re;Me++){const nt=ue[Me],pe=n.get(nt);t.bindTexture(i.TEXTURE_2D,pe.__webglTexture),He(i.TEXTURE_2D,nt),ve(V.__webglFramebuffer,w,nt,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,0),g(nt)&&h(i.TEXTURE_2D)}t.unbindTexture()}else{let Me=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Me=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,oe.__webglTexture),He(Me,M),M.mipmaps&&M.mipmaps.length>0)for(let Re=0;Re<M.mipmaps.length;Re++)ve(V.__webglFramebuffer[Re],w,M,i.COLOR_ATTACHMENT0,Me,Re);else ve(V.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,Me,0);g(M)&&h(Me),t.unbindTexture()}w.depthBuffer&&$e(w)}function et(w){const M=w.textures;for(let V=0,oe=M.length;V<oe;V++){const ue=M[V];if(g(ue)){const ne=R(w),Ie=n.get(ue).__webglTexture;t.bindTexture(ne,Ie),h(ne),t.unbindTexture()}}}const Ve=[],N=[];function Ot(w){if(w.samples>0){if(it(w)===!1){const M=w.textures,V=w.width,oe=w.height;let ue=i.COLOR_BUFFER_BIT;const ne=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(w),Me=M.length>1;if(Me)for(let Re=0;Re<M.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Re=0;Re<M.length;Re++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ue|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ue|=i.STENCIL_BUFFER_BIT)),Me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Re]);const nt=n.get(M[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,nt,0)}i.blitFramebuffer(0,0,V,oe,0,0,V,oe,ue,i.NEAREST),l===!0&&(Ve.length=0,N.length=0,Ve.push(i.COLOR_ATTACHMENT0+Re),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ve.push(ne),N.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ve))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Me)for(let Re=0;Re<M.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Re]);const nt=n.get(M[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,nt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const M=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function tt(w){return Math.min(r.maxSamples,w.samples)}function it(w){const M=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Fe(w){const M=a.render.frame;u.get(w)!==M&&(u.set(w,M),w.update())}function pt(w,M){const V=w.colorSpace,oe=w.format,ue=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||V!==vr&&V!==gi&&(ct.getTransfer(V)===gt?(oe!==An||ue!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}function Ue(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=G,this.setTexture2D=ie,this.setTexture2DArray=K,this.setTexture3D=ae,this.setTextureCube=$,this.rebindTextures=Ne,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=it}function $_(i,e){function t(n,r=gi){let s;const a=ct.getTransfer(r);if(n===ii)return i.UNSIGNED_BYTE;if(n===Vo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Go)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Oc)return i.BYTE;if(n===Bc)return i.SHORT;if(n===Wr)return i.UNSIGNED_SHORT;if(n===Ho)return i.INT;if(n===Oi)return i.UNSIGNED_INT;if(n===Kn)return i.FLOAT;if(n===Mr)return i.HALF_FLOAT;if(n===kc)return i.ALPHA;if(n===Hc)return i.RGB;if(n===An)return i.RGBA;if(n===Vc)return i.LUMINANCE;if(n===Gc)return i.LUMINANCE_ALPHA;if(n===fr)return i.DEPTH_COMPONENT;if(n===_r)return i.DEPTH_STENCIL;if(n===Wc)return i.RED;if(n===Wo)return i.RED_INTEGER;if(n===Xc)return i.RG;if(n===Xo)return i.RG_INTEGER;if(n===$o)return i.RGBA_INTEGER;if(n===Ps||n===Ds||n===Ls||n===Us)if(a===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ps)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Us)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ps)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ds)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ls)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Us)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===io||n===ro||n===so||n===ao)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===io)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ro)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===so)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ao)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oo||n===lo||n===co)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===oo||n===lo)return a===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===co)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===uo||n===fo||n===ho||n===po||n===mo||n===go||n===_o||n===vo||n===xo||n===Mo||n===So||n===yo||n===Eo||n===To)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===uo)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fo)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ho)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===po)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mo)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===go)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_o)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vo)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xo)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mo)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===So)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yo)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Eo)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===To)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Is||n===bo||n===Ao)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Is)return a===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ao)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$c||n===wo||n===Ro||n===Co)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Is)return s.COMPRESSED_RED_RGTC1_EXT;if(n===wo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ro)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Co)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const q_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class j_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new sn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new mn({vertexShader:q_,fragmentShader:Y_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dn(new $s(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class K_ extends Sr{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,m=null,_=null,v=null;const x=new j_,g=t.getContextAttributes();let h=null,R=null;const A=[],T=[],I=new ut;let D=null;const P=new Tn;P.viewport=new Dt;const L=new Tn;L.viewport=new Dt;const y=[P,L],S=new vd;let U=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let se=A[Q];return se===void 0&&(se=new Da,A[Q]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Q){let se=A[Q];return se===void 0&&(se=new Da,A[Q]=se),se.getGripSpace()},this.getHand=function(Q){let se=A[Q];return se===void 0&&(se=new Da,A[Q]=se),se.getHandSpace()};function Y(Q){const se=T.indexOf(Q.inputSource);if(se===-1)return;const ve=A[se];ve!==void 0&&(ve.update(Q.inputSource,Q.frame,c||a),ve.dispatchEvent({type:Q.type,data:Q.inputSource}))}function J(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",ie);for(let Q=0;Q<A.length;Q++){const se=T[Q];se!==null&&(T[Q]=null,A[Q].disconnect(se))}U=null,G=null,x.reset(),e.setRenderTarget(h),_=null,m=null,d=null,r=null,R=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",J),r.addEventListener("inputsourceschange",ie),g.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,_e=null,Le=null;g.depth&&(Le=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=g.stencil?_r:fr,_e=g.stencil?gr:Oi);const $e={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:s};d=new XRWebGLBinding(r,t),m=d.createProjectionLayer($e),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),R=new Fn(m.textureWidth,m.textureHeight,{format:An,type:ii,depthTexture:new jo(m.textureWidth,m.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}else{const ve={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),R=new Fn(_.framebufferWidth,_.framebufferHeight,{format:An,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Xe.setContext(r),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ie(Q){for(let se=0;se<Q.removed.length;se++){const ve=Q.removed[se],_e=T.indexOf(ve);_e>=0&&(T[_e]=null,A[_e].disconnect(ve))}for(let se=0;se<Q.added.length;se++){const ve=Q.added[se];let _e=T.indexOf(ve);if(_e===-1){for(let $e=0;$e<A.length;$e++)if($e>=T.length){T.push(ve),_e=$e;break}else if(T[$e]===null){T[$e]=ve,_e=$e;break}if(_e===-1)break}const Le=A[_e];Le&&Le.connect(ve)}}const K=new X,ae=new X;function $(Q,se,ve){K.setFromMatrixPosition(se.matrixWorld),ae.setFromMatrixPosition(ve.matrixWorld);const _e=K.distanceTo(ae),Le=se.projectionMatrix.elements,$e=ve.projectionMatrix.elements,Ne=Le[14]/(Le[10]-1),rt=Le[14]/(Le[10]+1),et=(Le[9]+1)/Le[5],Ve=(Le[9]-1)/Le[5],N=(Le[8]-1)/Le[0],Ot=($e[8]+1)/$e[0],tt=Ne*N,it=Ne*Ot,Fe=_e/(-N+Ot),pt=Fe*-N;if(se.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(pt),Q.translateZ(Fe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Le[10]===-1)Q.projectionMatrix.copy(se.projectionMatrix),Q.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Ue=Ne+Fe,w=rt+Fe,M=tt-pt,V=it+(_e-pt),oe=et*rt/w*Ue,ue=Ve*rt/w*Ue;Q.projectionMatrix.makePerspective(M,V,oe,ue,Ue,w),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function de(Q,se){se===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(se.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let se=Q.near,ve=Q.far;x.texture!==null&&(x.depthNear>0&&(se=x.depthNear),x.depthFar>0&&(ve=x.depthFar)),S.near=L.near=P.near=se,S.far=L.far=P.far=ve,(U!==S.near||G!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),U=S.near,G=S.far),P.layers.mask=Q.layers.mask|2,L.layers.mask=Q.layers.mask|4,S.layers.mask=P.layers.mask|L.layers.mask;const _e=Q.parent,Le=S.cameras;de(S,_e);for(let $e=0;$e<Le.length;$e++)de(Le[$e],_e);Le.length===2?$(S,P,L):S.projectionMatrix.copy(P.projectionMatrix),Ee(Q,S,_e)};function Ee(Q,se,ve){ve===null?Q.matrix.copy(se.matrixWorld):(Q.matrix.copy(ve.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(se.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(se.projectionMatrix),Q.projectionMatrixInverse.copy(se.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Po*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(m===null&&_===null))return l},this.setFoveation=function(Q){l=Q,m!==null&&(m.fixedFoveation=Q),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=Q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let we=null;function He(Q,se){if(u=se.getViewerPose(c||a),v=se,u!==null){const ve=u.views;_!==null&&(e.setRenderTargetFramebuffer(R,_.framebuffer),e.setRenderTarget(R));let _e=!1;ve.length!==S.cameras.length&&(S.cameras.length=0,_e=!0);for(let Ne=0;Ne<ve.length;Ne++){const rt=ve[Ne];let et=null;if(_!==null)et=_.getViewport(rt);else{const N=d.getViewSubImage(m,rt);et=N.viewport,Ne===0&&(e.setRenderTargetTextures(R,N.colorTexture,m.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(R))}let Ve=y[Ne];Ve===void 0&&(Ve=new Tn,Ve.layers.enable(Ne),Ve.viewport=new Dt,y[Ne]=Ve),Ve.matrix.fromArray(rt.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(rt.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(et.x,et.y,et.width,et.height),Ne===0&&(S.matrix.copy(Ve.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),_e===!0&&S.cameras.push(Ve)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const Ne=d.getDepthInformation(ve[0]);Ne&&Ne.isValid&&Ne.texture&&x.init(e,Ne,r.renderState)}}for(let ve=0;ve<A.length;ve++){const _e=T[ve],Le=A[ve];_e!==null&&Le!==void 0&&Le.update(_e,se,c||a)}we&&we(Q,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),v=null}const Xe=new ou;Xe.setAnimationLoop(He),this.setAnimationLoop=function(Q){we=Q},this.dispose=function(){}}}const Ci=new ri,Z_=new Et;function J_(i,e){function t(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function n(g,h){h.color.getRGB(g.fogColor.value,iu(i)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,R,A,T){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(g,h):h.isMeshToonMaterial?(s(g,h),d(g,h)):h.isMeshPhongMaterial?(s(g,h),u(g,h)):h.isMeshStandardMaterial?(s(g,h),m(g,h),h.isMeshPhysicalMaterial&&_(g,h,T)):h.isMeshMatcapMaterial?(s(g,h),v(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),x(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(a(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?l(g,h,R,A):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,t(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===rn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,t(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===rn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,t(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,t(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const R=e.get(h),A=R.envMap,T=R.envMapRotation;A&&(g.envMap.value=A,Ci.copy(T),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),g.envMapRotation.value.setFromMatrix4(Z_.makeRotationFromEuler(Ci)),g.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,g.aoMapTransform))}function a(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,R,A){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*R,g.scale.value=A*.5,h.map&&(g.map.value=h.map,t(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function m(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function _(g,h,R){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===rn&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=R.texture,g.transmissionSamplerSize.value.set(R.width,R.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,h){h.matcap&&(g.matcap.value=h.matcap)}function x(g,h){const R=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(R.matrixWorld),g.nearDistance.value=R.shadow.camera.near,g.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Q_(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,A){const T=A.program;n.uniformBlockBinding(R,T)}function c(R,A){let T=r[R.id];T===void 0&&(v(R),T=u(R),r[R.id]=T,R.addEventListener("dispose",g));const I=A.program;n.updateUBOMapping(R,I);const D=e.render.frame;s[R.id]!==D&&(m(R),s[R.id]=D)}function u(R){const A=d();R.__bindingPointIndex=A;const T=i.createBuffer(),I=R.__size,D=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,I,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,T),T}function d(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(R){const A=r[R.id],T=R.uniforms,I=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let D=0,P=T.length;D<P;D++){const L=Array.isArray(T[D])?T[D]:[T[D]];for(let y=0,S=L.length;y<S;y++){const U=L[y];if(_(U,D,y,I)===!0){const G=U.__offset,Y=Array.isArray(U.value)?U.value:[U.value];let J=0;for(let ie=0;ie<Y.length;ie++){const K=Y[ie],ae=x(K);typeof K=="number"||typeof K=="boolean"?(U.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,G+J,U.__data)):K.isMatrix3?(U.__data[0]=K.elements[0],U.__data[1]=K.elements[1],U.__data[2]=K.elements[2],U.__data[3]=0,U.__data[4]=K.elements[3],U.__data[5]=K.elements[4],U.__data[6]=K.elements[5],U.__data[7]=0,U.__data[8]=K.elements[6],U.__data[9]=K.elements[7],U.__data[10]=K.elements[8],U.__data[11]=0):(K.toArray(U.__data,J),J+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(R,A,T,I){const D=R.value,P=A+"_"+T;if(I[P]===void 0)return typeof D=="number"||typeof D=="boolean"?I[P]=D:I[P]=D.clone(),!0;{const L=I[P];if(typeof D=="number"||typeof D=="boolean"){if(L!==D)return I[P]=D,!0}else if(L.equals(D)===!1)return L.copy(D),!0}return!1}function v(R){const A=R.uniforms;let T=0;const I=16;for(let P=0,L=A.length;P<L;P++){const y=Array.isArray(A[P])?A[P]:[A[P]];for(let S=0,U=y.length;S<U;S++){const G=y[S],Y=Array.isArray(G.value)?G.value:[G.value];for(let J=0,ie=Y.length;J<ie;J++){const K=Y[J],ae=x(K),$=T%I,de=$%ae.boundary,Ee=$+de;T+=de,Ee!==0&&I-Ee<ae.storage&&(T+=I-Ee),G.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=T,T+=ae.storage}}}const D=T%I;return D>0&&(T+=I-D),R.__size=T,R.__cache={},this}function x(R){const A={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(A.boundary=4,A.storage=4):R.isVector2?(A.boundary=8,A.storage=8):R.isVector3||R.isColor?(A.boundary=16,A.storage=12):R.isVector4?(A.boundary=16,A.storage=16):R.isMatrix3?(A.boundary=48,A.storage=48):R.isMatrix4?(A.boundary=64,A.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),A}function g(R){const A=R.target;A.removeEventListener("dispose",g);const T=a.indexOf(A.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function h(){for(const R in r)i.deleteBuffer(r[R]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class ev{constructor(e={}){const{canvas:t=Oh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const v=new Uint32Array(4),x=new Int32Array(4);let g=null,h=null;const R=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this.toneMapping=_i,this.toneMappingExposure=1;const T=this;let I=!1,D=0,P=0,L=null,y=-1,S=null;const U=new Dt,G=new Dt;let Y=null;const J=new _t(0);let ie=0,K=t.width,ae=t.height,$=1,de=null,Ee=null;const we=new Dt(0,0,K,ae),He=new Dt(0,0,K,ae);let Xe=!1;const Q=new au;let se=!1,ve=!1;this.transmissionResolutionScale=1;const _e=new Et,Le=new Et,$e=new X,Ne=new Dt,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function Ve(){return L===null?$:1}let N=n;function Ot(E,B){return t.getContext(E,B)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ko}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",be,!1),N===null){const B="webgl2";if(N=Ot(B,E),N===null)throw Ot(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let tt,it,Fe,pt,Ue,w,M,V,oe,ue,ne,Ie,Me,Re,nt,pe,Ae,Oe,Ge,Ce,Ke,Ze,vt,O;function Se(){tt=new ug(N),tt.init(),Ze=new $_(N,tt),it=new rg(N,tt,e,Ze),Fe=new W_(N,tt),it.reverseDepthBuffer&&m&&Fe.buffers.depth.setReversed(!0),pt=new dg(N),Ue=new D_,w=new X_(N,tt,Fe,Ue,it,Ze,pt),M=new ag(T),V=new cg(T),oe=new Md(N),vt=new ng(N,oe),ue=new fg(N,oe,pt,vt),ne=new mg(N,ue,oe,pt),Ge=new pg(N,it,w),pe=new sg(Ue),Ie=new P_(T,M,V,tt,it,vt,pe),Me=new J_(T,Ue),Re=new U_,nt=new z_(tt),Oe=new tg(T,M,V,Fe,ne,_,l),Ae=new V_(T,ne,it),O=new Q_(N,pt,it,Fe),Ce=new ig(N,tt,pt),Ke=new hg(N,tt,pt),pt.programs=Ie.programs,T.capabilities=it,T.extensions=tt,T.properties=Ue,T.renderLists=Re,T.shadowMap=Ae,T.state=Fe,T.info=pt}Se();const j=new K_(T,N);this.xr=j,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=tt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=tt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(K,ae,!1))},this.getSize=function(E){return E.set(K,ae)},this.setSize=function(E,B,W=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=E,ae=B,t.width=Math.floor(E*$),t.height=Math.floor(B*$),W===!0&&(t.style.width=E+"px",t.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(K*$,ae*$).floor()},this.setDrawingBufferSize=function(E,B,W){K=E,ae=B,$=W,t.width=Math.floor(E*W),t.height=Math.floor(B*W),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(U)},this.getViewport=function(E){return E.copy(we)},this.setViewport=function(E,B,W,q){E.isVector4?we.set(E.x,E.y,E.z,E.w):we.set(E,B,W,q),Fe.viewport(U.copy(we).multiplyScalar($).round())},this.getScissor=function(E){return E.copy(He)},this.setScissor=function(E,B,W,q){E.isVector4?He.set(E.x,E.y,E.z,E.w):He.set(E,B,W,q),Fe.scissor(G.copy(He).multiplyScalar($).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(E){Fe.setScissorTest(Xe=E)},this.setOpaqueSort=function(E){de=E},this.setTransparentSort=function(E){Ee=E},this.getClearColor=function(E){return E.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(E=!0,B=!0,W=!0){let q=0;if(E){let z=!1;if(L!==null){const he=L.texture.format;z=he===$o||he===Xo||he===Wo}if(z){const he=L.texture.type,Te=he===ii||he===Oi||he===Wr||he===gr||he===Vo||he===Go,Pe=Oe.getClearColor(),De=Oe.getClearAlpha(),qe=Pe.r,We=Pe.g,Be=Pe.b;Te?(v[0]=qe,v[1]=We,v[2]=Be,v[3]=De,N.clearBufferuiv(N.COLOR,0,v)):(x[0]=qe,x[1]=We,x[2]=Be,x[3]=De,N.clearBufferiv(N.COLOR,0,x))}else q|=N.COLOR_BUFFER_BIT}B&&(q|=N.DEPTH_BUFFER_BIT),W&&(q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Oe.dispose(),Re.dispose(),nt.dispose(),Ue.dispose(),M.dispose(),V.dispose(),ne.dispose(),vt.dispose(),O.dispose(),Ie.dispose(),j.dispose(),j.removeEventListener("sessionstart",Rr),j.removeEventListener("sessionend",es),Pn.stop()};function re(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const E=pt.autoReset,B=Ae.enabled,W=Ae.autoUpdate,q=Ae.needsUpdate,z=Ae.type;Se(),pt.autoReset=E,Ae.enabled=B,Ae.autoUpdate=W,Ae.needsUpdate=q,Ae.type=z}function be(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ke(E){const B=E.target;B.removeEventListener("dispose",ke),ft(B)}function ft(E){Ht(E),Ue.remove(E)}function Ht(E){const B=Ue.get(E).programs;B!==void 0&&(B.forEach(function(W){Ie.releaseProgram(W)}),E.isShaderMaterial&&Ie.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,W,q,z,he){B===null&&(B=rt);const Te=z.isMesh&&z.matrixWorld.determinant()<0,Pe=Zs(E,B,W,q,z);Fe.setMaterial(q,Te);let De=W.index,qe=1;if(q.wireframe===!0){if(De=ue.getWireframeAttribute(W),De===void 0)return;qe=2}const We=W.drawRange,Be=W.attributes.position;let st=We.start*qe,ht=(We.start+We.count)*qe;he!==null&&(st=Math.max(st,he.start*qe),ht=Math.min(ht,(he.start+he.count)*qe)),De!==null?(st=Math.max(st,0),ht=Math.min(ht,De.count)):Be!=null&&(st=Math.max(st,0),ht=Math.min(ht,Be.count));const wt=ht-st;if(wt<0||wt===1/0)return;vt.setup(z,q,Pe,W,De);let Mt,at=Ce;if(De!==null&&(Mt=oe.get(De),at=Ke,at.setIndex(Mt)),z.isMesh)q.wireframe===!0?(Fe.setLineWidth(q.wireframeLinewidth*Ve()),at.setMode(N.LINES)):at.setMode(N.TRIANGLES);else if(z.isLine){let ze=q.linewidth;ze===void 0&&(ze=1),Fe.setLineWidth(ze*Ve()),z.isLineSegments?at.setMode(N.LINES):z.isLineLoop?at.setMode(N.LINE_LOOP):at.setMode(N.LINE_STRIP)}else z.isPoints?at.setMode(N.POINTS):z.isSprite&&at.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)at.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))at.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const ze=z._multiDrawStarts,bt=z._multiDrawCounts,ot=z._multiDrawCount,ln=De?oe.get(De).bytesPerElement:1,Bn=Ue.get(q).currentProgram.getUniforms();for(let yt=0;yt<ot;yt++)Bn.setValue(N,"_gl_DrawID",yt),at.render(ze[yt]/ln,bt[yt])}else if(z.isInstancedMesh)at.renderInstances(st,wt,z.count);else if(W.isInstancedBufferGeometry){const ze=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,bt=Math.min(W.instanceCount,ze);at.renderInstances(st,wt,bt)}else at.render(st,wt)};function mt(E,B,W){E.transparent===!0&&E.side===jn&&E.forceSinglePass===!1?(E.side=rn,E.needsUpdate=!0,oi(E,B,W),E.side=xi,E.needsUpdate=!0,oi(E,B,W),E.side=jn):oi(E,B,W)}this.compile=function(E,B,W=null){W===null&&(W=E),h=nt.get(W),h.init(B),A.push(h),W.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(h.pushLight(z),z.castShadow&&h.pushShadow(z))}),E!==W&&E.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(h.pushLight(z),z.castShadow&&h.pushShadow(z))}),h.setupLights();const q=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const he=z.material;if(he)if(Array.isArray(he))for(let Te=0;Te<he.length;Te++){const Pe=he[Te];mt(Pe,W,z),q.add(Pe)}else mt(he,W,z),q.add(he)}),A.pop(),h=null,q},this.compileAsync=function(E,B,W=null){const q=this.compile(E,B,W);return new Promise(z=>{function he(){if(q.forEach(function(Te){Ue.get(Te).currentProgram.isReady()&&q.delete(Te)}),q.size===0){z(E);return}setTimeout(he,10)}tt.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Zt=null;function on(E){Zt&&Zt(E)}function Rr(){Pn.stop()}function es(){Pn.start()}const Pn=new ou;Pn.setAnimationLoop(on),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(E){Zt=E,j.setAnimationLoop(E),E===null?Pn.stop():Pn.start()},j.addEventListener("sessionstart",Rr),j.addEventListener("sessionend",es),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(B),B=j.getCamera()),E.isScene===!0&&E.onBeforeRender(T,E,B,L),h=nt.get(E,A.length),h.init(B),A.push(h),Le.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Q.setFromProjectionMatrix(Le),ve=this.localClippingEnabled,se=pe.init(this.clippingPlanes,ve),g=Re.get(E,R.length),g.init(),R.push(g),j.enabled===!0&&j.isPresenting===!0){const he=T.xr.getDepthSensingMesh();he!==null&&Hi(he,B,-1/0,T.sortObjects)}Hi(E,B,0,T.sortObjects),g.finish(),T.sortObjects===!0&&g.sort(de,Ee),et=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,et&&Oe.addToRenderList(g,E),this.info.render.frame++,se===!0&&pe.beginShadows();const W=h.state.shadowsArray;Ae.render(W,E,B),se===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=g.opaque,z=g.transmissive;if(h.setupLights(),B.isArrayCamera){const he=B.cameras;if(z.length>0)for(let Te=0,Pe=he.length;Te<Pe;Te++){const De=he[Te];ts(q,z,E,De)}et&&Oe.render(E);for(let Te=0,Pe=he.length;Te<Pe;Te++){const De=he[Te];Cr(g,E,De,De.viewport)}}else z.length>0&&ts(q,z,E,B),et&&Oe.render(E),Cr(g,E,B);L!==null&&P===0&&(w.updateMultisampleRenderTarget(L),w.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(T,E,B),vt.resetDefaultState(),y=-1,S=null,A.pop(),A.length>0?(h=A[A.length-1],se===!0&&pe.setGlobalState(T.clippingPlanes,h.state.camera)):h=null,R.pop(),R.length>0?g=R[R.length-1]:g=null};function Hi(E,B,W,q){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Q.intersectsSprite(E)){q&&Ne.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Le);const Te=ne.update(E),Pe=E.material;Pe.visible&&g.push(E,Te,Pe,W,Ne.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Q.intersectsObject(E))){const Te=ne.update(E),Pe=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ne.copy(E.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ne.copy(Te.boundingSphere.center)),Ne.applyMatrix4(E.matrixWorld).applyMatrix4(Le)),Array.isArray(Pe)){const De=Te.groups;for(let qe=0,We=De.length;qe<We;qe++){const Be=De[qe],st=Pe[Be.materialIndex];st&&st.visible&&g.push(E,Te,st,W,Ne.z,Be)}}else Pe.visible&&g.push(E,Te,Pe,W,Ne.z,null)}}const he=E.children;for(let Te=0,Pe=he.length;Te<Pe;Te++)Hi(he[Te],B,W,q)}function Cr(E,B,W,q){const z=E.opaque,he=E.transmissive,Te=E.transparent;h.setupLightsView(W),se===!0&&pe.setGlobalState(T.clippingPlanes,W),q&&Fe.viewport(U.copy(q)),z.length>0&&Vi(z,B,W),he.length>0&&Vi(he,B,W),Te.length>0&&Vi(Te,B,W),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function ts(E,B,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[q.id]===void 0&&(h.state.transmissionRenderTarget[q.id]=new Fn(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?Mr:ii,minFilter:Fi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));const he=h.state.transmissionRenderTarget[q.id],Te=q.viewport||U;he.setSize(Te.z*T.transmissionResolutionScale,Te.w*T.transmissionResolutionScale);const Pe=T.getRenderTarget();T.setRenderTarget(he),T.getClearColor(J),ie=T.getClearAlpha(),ie<1&&T.setClearColor(16777215,.5),T.clear(),et&&Oe.render(W);const De=T.toneMapping;T.toneMapping=_i;const qe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),h.setupLightsView(q),se===!0&&pe.setGlobalState(T.clippingPlanes,q),Vi(E,W,q),w.updateMultisampleRenderTarget(he),w.updateRenderTargetMipmap(he),tt.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Be=0,st=B.length;Be<st;Be++){const ht=B[Be],wt=ht.object,Mt=ht.geometry,at=ht.material,ze=ht.group;if(at.side===jn&&wt.layers.test(q.layers)){const bt=at.side;at.side=rn,at.needsUpdate=!0,ai(wt,W,q,Mt,at,ze),at.side=bt,at.needsUpdate=!0,We=!0}}We===!0&&(w.updateMultisampleRenderTarget(he),w.updateRenderTargetMipmap(he))}T.setRenderTarget(Pe),T.setClearColor(J,ie),qe!==void 0&&(q.viewport=qe),T.toneMapping=De}function Vi(E,B,W){const q=B.isScene===!0?B.overrideMaterial:null;for(let z=0,he=E.length;z<he;z++){const Te=E[z],Pe=Te.object,De=Te.geometry,qe=q===null?Te.material:q,We=Te.group;Pe.layers.test(W.layers)&&ai(Pe,B,W,De,qe,We)}}function ai(E,B,W,q,z,he){E.onBeforeRender(T,B,W,q,z,he),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(T,B,W,q,E,he),z.transparent===!0&&z.side===jn&&z.forceSinglePass===!1?(z.side=rn,z.needsUpdate=!0,T.renderBufferDirect(W,B,q,z,E,he),z.side=xi,z.needsUpdate=!0,T.renderBufferDirect(W,B,q,z,E,he),z.side=jn):T.renderBufferDirect(W,B,q,z,E,he),E.onAfterRender(T,B,W,q,z,he)}function oi(E,B,W){B.isScene!==!0&&(B=rt);const q=Ue.get(E),z=h.state.lights,he=h.state.shadowsArray,Te=z.state.version,Pe=Ie.getParameters(E,z.state,he,B,W),De=Ie.getProgramCacheKey(Pe);let qe=q.programs;q.environment=E.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(E.isMeshStandardMaterial?V:M).get(E.envMap||q.environment),q.envMapRotation=q.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,qe===void 0&&(E.addEventListener("dispose",ke),qe=new Map,q.programs=qe);let We=qe.get(De);if(We!==void 0){if(q.currentProgram===We&&q.lightsStateVersion===Te)return ns(E,Pe),We}else Pe.uniforms=Ie.getUniforms(E),E.onBeforeCompile(Pe,T),We=Ie.acquireProgram(Pe,De),qe.set(De,We),q.uniforms=Pe.uniforms;const Be=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Be.clippingPlanes=pe.uniform),ns(E,Pe),q.needsLights=Js(E),q.lightsStateVersion=Te,q.needsLights&&(Be.ambientLightColor.value=z.state.ambient,Be.lightProbe.value=z.state.probe,Be.directionalLights.value=z.state.directional,Be.directionalLightShadows.value=z.state.directionalShadow,Be.spotLights.value=z.state.spot,Be.spotLightShadows.value=z.state.spotShadow,Be.rectAreaLights.value=z.state.rectArea,Be.ltc_1.value=z.state.rectAreaLTC1,Be.ltc_2.value=z.state.rectAreaLTC2,Be.pointLights.value=z.state.point,Be.pointLightShadows.value=z.state.pointShadow,Be.hemisphereLights.value=z.state.hemi,Be.directionalShadowMap.value=z.state.directionalShadowMap,Be.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Be.spotShadowMap.value=z.state.spotShadowMap,Be.spotLightMatrix.value=z.state.spotLightMatrix,Be.spotLightMap.value=z.state.spotLightMap,Be.pointShadowMap.value=z.state.pointShadowMap,Be.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=We,q.uniformsList=null,We}function li(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=Ns.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function ns(E,B){const W=Ue.get(E);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function Zs(E,B,W,q,z){B.isScene!==!0&&(B=rt),w.resetTextureUnits();const he=B.fog,Te=q.isMeshStandardMaterial?B.environment:null,Pe=L===null?T.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:vr,De=(q.isMeshStandardMaterial?V:M).get(q.envMap||Te),qe=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,We=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Be=!!W.morphAttributes.position,st=!!W.morphAttributes.normal,ht=!!W.morphAttributes.color;let wt=_i;q.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(wt=T.toneMapping);const Mt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,at=Mt!==void 0?Mt.length:0,ze=Ue.get(q),bt=h.state.lights;if(se===!0&&(ve===!0||E!==S)){const $t=E===S&&q.id===y;pe.setState(q,E,$t)}let ot=!1;q.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==bt.state.version||ze.outputColorSpace!==Pe||z.isBatchedMesh&&ze.batching===!1||!z.isBatchedMesh&&ze.batching===!0||z.isBatchedMesh&&ze.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&ze.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&ze.instancing===!1||!z.isInstancedMesh&&ze.instancing===!0||z.isSkinnedMesh&&ze.skinning===!1||!z.isSkinnedMesh&&ze.skinning===!0||z.isInstancedMesh&&ze.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ze.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&ze.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&ze.instancingMorph===!1&&z.morphTexture!==null||ze.envMap!==De||q.fog===!0&&ze.fog!==he||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==pe.numPlanes||ze.numIntersection!==pe.numIntersection)||ze.vertexAlphas!==qe||ze.vertexTangents!==We||ze.morphTargets!==Be||ze.morphNormals!==st||ze.morphColors!==ht||ze.toneMapping!==wt||ze.morphTargetsCount!==at)&&(ot=!0):(ot=!0,ze.__version=q.version);let ln=ze.currentProgram;ot===!0&&(ln=oi(q,B,z));let Bn=!1,yt=!1,yi=!1;const St=ln.getUniforms(),Jt=ze.uniforms;if(Fe.useProgram(ln.program)&&(Bn=!0,yt=!0,yi=!0),q.id!==y&&(y=q.id,yt=!0),Bn||S!==E){Fe.buffers.depth.getReversed()?(_e.copy(E.projectionMatrix),zh(_e),kh(_e),St.setValue(N,"projectionMatrix",_e)):St.setValue(N,"projectionMatrix",E.projectionMatrix),St.setValue(N,"viewMatrix",E.matrixWorldInverse);const Vt=St.map.cameraPosition;Vt!==void 0&&Vt.setValue(N,$e.setFromMatrixPosition(E.matrixWorld)),it.logarithmicDepthBuffer&&St.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&St.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,yt=!0,yi=!0)}if(z.isSkinnedMesh){St.setOptional(N,z,"bindMatrix"),St.setOptional(N,z,"bindMatrixInverse");const $t=z.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),St.setValue(N,"boneTexture",$t.boneTexture,w))}z.isBatchedMesh&&(St.setOptional(N,z,"batchingTexture"),St.setValue(N,"batchingTexture",z._matricesTexture,w),St.setOptional(N,z,"batchingIdTexture"),St.setValue(N,"batchingIdTexture",z._indirectTexture,w),St.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&St.setValue(N,"batchingColorTexture",z._colorsTexture,w));const Xt=W.morphAttributes;if((Xt.position!==void 0||Xt.normal!==void 0||Xt.color!==void 0)&&Ge.update(z,W,ln),(yt||ze.receiveShadow!==z.receiveShadow)&&(ze.receiveShadow=z.receiveShadow,St.setValue(N,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Jt.envMap.value=De,Jt.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(Jt.envMapIntensity.value=B.environmentIntensity),yt&&(St.setValue(N,"toneMappingExposure",T.toneMappingExposure),ze.needsLights&&Si(Jt,yi),he&&q.fog===!0&&Me.refreshFogUniforms(Jt,he),Me.refreshMaterialUniforms(Jt,q,$,ae,h.state.transmissionRenderTarget[E.id]),Ns.upload(N,li(ze),Jt,w)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ns.upload(N,li(ze),Jt,w),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&St.setValue(N,"center",z.center),St.setValue(N,"modelViewMatrix",z.modelViewMatrix),St.setValue(N,"normalMatrix",z.normalMatrix),St.setValue(N,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const $t=q.uniformsGroups;for(let Vt=0,Wi=$t.length;Vt<Wi;Vt++){const Dn=$t[Vt];O.update(Dn,ln),O.bind(Dn,ln)}}return ln}function Si(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function Js(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,B,W){Ue.get(E.texture).__webglTexture=B,Ue.get(E.depthTexture).__webglTexture=W;const q=Ue.get(E);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,B){const W=Ue.get(E);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0};const Qs=N.createFramebuffer();this.setRenderTarget=function(E,B=0,W=0){L=E,D=B,P=W;let q=!0,z=null,he=!1,Te=!1;if(E){const De=Ue.get(E);if(De.__useDefaultFramebuffer!==void 0)Fe.bindFramebuffer(N.FRAMEBUFFER,null),q=!1;else if(De.__webglFramebuffer===void 0)w.setupRenderTarget(E);else if(De.__hasExternalTextures)w.rebindTextures(E,Ue.get(E.texture).__webglTexture,Ue.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Be=E.depthTexture;if(De.__boundDepthTexture!==Be){if(Be!==null&&Ue.has(Be)&&(E.width!==Be.image.width||E.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(E)}}const qe=E.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Te=!0);const We=Ue.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(We[B])?z=We[B][W]:z=We[B],he=!0):E.samples>0&&w.useMultisampledRTT(E)===!1?z=Ue.get(E).__webglMultisampledFramebuffer:Array.isArray(We)?z=We[W]:z=We,U.copy(E.viewport),G.copy(E.scissor),Y=E.scissorTest}else U.copy(we).multiplyScalar($).floor(),G.copy(He).multiplyScalar($).floor(),Y=Xe;if(W!==0&&(z=Qs),Fe.bindFramebuffer(N.FRAMEBUFFER,z)&&q&&Fe.drawBuffers(E,z),Fe.viewport(U),Fe.scissor(G),Fe.setScissorTest(Y),he){const De=Ue.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+B,De.__webglTexture,W)}else if(Te){const De=Ue.get(E.texture),qe=B;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,De.__webglTexture,W,qe)}else if(E!==null&&W!==0){const De=Ue.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,De.__webglTexture,W)}y=-1},this.readRenderTargetPixels=function(E,B,W,q,z,he,Te){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Ue.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Te!==void 0&&(Pe=Pe[Te]),Pe){Fe.bindFramebuffer(N.FRAMEBUFFER,Pe);try{const De=E.texture,qe=De.format,We=De.type;if(!it.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-q&&W>=0&&W<=E.height-z&&N.readPixels(B,W,q,z,Ze.convert(qe),Ze.convert(We),he)}finally{const De=L!==null?Ue.get(L).__webglFramebuffer:null;Fe.bindFramebuffer(N.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(E,B,W,q,z,he,Te){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Ue.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Te!==void 0&&(Pe=Pe[Te]),Pe){const De=E.texture,qe=De.format,We=De.type;if(!it.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=E.width-q&&W>=0&&W<=E.height-z){Fe.bindFramebuffer(N.FRAMEBUFFER,Pe);const Be=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Be),N.bufferData(N.PIXEL_PACK_BUFFER,he.byteLength,N.STREAM_READ),N.readPixels(B,W,q,z,Ze.convert(qe),Ze.convert(We),0);const st=L!==null?Ue.get(L).__webglFramebuffer:null;Fe.bindFramebuffer(N.FRAMEBUFFER,st);const ht=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Bh(N,ht,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Be),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,he),N.deleteBuffer(Be),N.deleteSync(ht),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,B=null,W=0){E.isTexture!==!0&&(or("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1]);const q=Math.pow(2,-W),z=Math.floor(E.image.width*q),he=Math.floor(E.image.height*q),Te=B!==null?B.x:0,Pe=B!==null?B.y:0;w.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,Te,Pe,z,he),Fe.unbindTexture()};const Gi=N.createFramebuffer(),ea=N.createFramebuffer();this.copyTextureToTexture=function(E,B,W=null,q=null,z=0,he=null){E.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,E=arguments[1],B=arguments[2],he=arguments[3]||0,W=null),he===null&&(z!==0?(or("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=z,z=0):he=0);let Te,Pe,De,qe,We,Be,st,ht,wt;const Mt=E.isCompressedTexture?E.mipmaps[he]:E.image;if(W!==null)Te=W.max.x-W.min.x,Pe=W.max.y-W.min.y,De=W.isBox3?W.max.z-W.min.z:1,qe=W.min.x,We=W.min.y,Be=W.isBox3?W.min.z:0;else{const Xt=Math.pow(2,-z);Te=Math.floor(Mt.width*Xt),Pe=Math.floor(Mt.height*Xt),E.isDataArrayTexture?De=Mt.depth:E.isData3DTexture?De=Math.floor(Mt.depth*Xt):De=1,qe=0,We=0,Be=0}q!==null?(st=q.x,ht=q.y,wt=q.z):(st=0,ht=0,wt=0);const at=Ze.convert(B.format),ze=Ze.convert(B.type);let bt;B.isData3DTexture?(w.setTexture3D(B,0),bt=N.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(w.setTexture2DArray(B,0),bt=N.TEXTURE_2D_ARRAY):(w.setTexture2D(B,0),bt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);const ot=N.getParameter(N.UNPACK_ROW_LENGTH),ln=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Bn=N.getParameter(N.UNPACK_SKIP_PIXELS),yt=N.getParameter(N.UNPACK_SKIP_ROWS),yi=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Mt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Mt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,qe),N.pixelStorei(N.UNPACK_SKIP_ROWS,We),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Be);const St=E.isDataArrayTexture||E.isData3DTexture,Jt=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){const Xt=Ue.get(E),$t=Ue.get(B),Vt=Ue.get(Xt.__renderTarget),Wi=Ue.get($t.__renderTarget);Fe.bindFramebuffer(N.READ_FRAMEBUFFER,Vt.__webglFramebuffer),Fe.bindFramebuffer(N.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let Dn=0;Dn<De;Dn++)St&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ue.get(E).__webglTexture,z,Be+Dn),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ue.get(B).__webglTexture,he,wt+Dn)),N.blitFramebuffer(qe,We,Te,Pe,st,ht,Te,Pe,N.DEPTH_BUFFER_BIT,N.NEAREST);Fe.bindFramebuffer(N.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||Ue.has(E)){const Xt=Ue.get(E),$t=Ue.get(B);Fe.bindFramebuffer(N.READ_FRAMEBUFFER,Gi),Fe.bindFramebuffer(N.DRAW_FRAMEBUFFER,ea);for(let Vt=0;Vt<De;Vt++)St?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Xt.__webglTexture,z,Be+Vt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Xt.__webglTexture,z),Jt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,$t.__webglTexture,he,wt+Vt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,$t.__webglTexture,he),z!==0?N.blitFramebuffer(qe,We,Te,Pe,st,ht,Te,Pe,N.COLOR_BUFFER_BIT,N.NEAREST):Jt?N.copyTexSubImage3D(bt,he,st,ht,wt+Vt,qe,We,Te,Pe):N.copyTexSubImage2D(bt,he,st,ht,qe,We,Te,Pe);Fe.bindFramebuffer(N.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Jt?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(bt,he,st,ht,wt,Te,Pe,De,at,ze,Mt.data):B.isCompressedArrayTexture?N.compressedTexSubImage3D(bt,he,st,ht,wt,Te,Pe,De,at,Mt.data):N.texSubImage3D(bt,he,st,ht,wt,Te,Pe,De,at,ze,Mt):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,he,st,ht,Te,Pe,at,ze,Mt.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,he,st,ht,Mt.width,Mt.height,at,Mt.data):N.texSubImage2D(N.TEXTURE_2D,he,st,ht,Te,Pe,at,ze,Mt);N.pixelStorei(N.UNPACK_ROW_LENGTH,ot),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ln),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Bn),N.pixelStorei(N.UNPACK_SKIP_ROWS,yt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,yi),he===0&&B.generateMipmaps&&N.generateMipmap(bt),Fe.unbindTexture()},this.copyTextureToTexture3D=function(E,B,W=null,q=null,z=0){return E.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,q=arguments[1]||null,E=arguments[2],B=arguments[3],z=arguments[4]||0),or('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,B,W,q,z)},this.initRenderTarget=function(E){Ue.get(E).__webglFramebuffer===void 0&&w.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),Fe.unbindTexture()},this.resetState=function(){D=0,P=0,L=null,Fe.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}const tv={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class br{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const nv=new Ko(-1,1,1,-1,0,1);class iv extends si{constructor(){super(),this.setAttribute("position",new ni([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ni([0,2,0,0,2,0],2))}}const rv=new iv;class Ys{constructor(e){this._mesh=new dn(rv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,nv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class hu extends br{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof mn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Yo.clone(e.uniforms),this.material=new mn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ys(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class _c extends br{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class sv extends br{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class av{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ut);this._width=n.width,this._height=n.height,t=new Fn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Mr}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new hu(tv),this.copyPass.material.blending=ei,this.clock=new Zo}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}_c!==void 0&&(a instanceof _c?n=!0:a instanceof sv&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ut);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const ov=`varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,lv=`// Fragment shader that renders outlines, adapted from:
//   https://roystan.net/articles/outline-shader/

varying vec2 vUv; // (x,y) with x,y in [0,1]
uniform sampler2D tNormal;
uniform sampler2D tDepth;
uniform vec2 texelSize;

/* Both the depth & normal checks use a Sobel operator, which
   is composed of two 3x3 kernels. For exact structure, see:
        https://en.wikipedia.org/wiki/Sobel_operator
*/


float computeEdgeDepth() {

    // Horizontal comparison
    // [m] for minus (negative components and [p] for plus
    float xm0 = texture(tDepth, vUv + texelSize * vec2(-1., +1.)).x;
    float xm1 = texture(tDepth, vUv + texelSize * vec2(-1.,  0.)).x;
    float xm2 = texture(tDepth, vUv + texelSize * vec2(-1., -1.)).x;

    float xp0 = texture(tDepth, vUv + texelSize * vec2(+1., +1.)).x;
    float xp1 = texture(tDepth, vUv + texelSize * vec2(+1.,  0.)).x;
    float xp2 = texture(tDepth, vUv + texelSize * vec2(+1., -1.)).x;

    // Vertical comparison
    float ym0 = texture(tDepth, vUv + texelSize * vec2(-1., 1.)).x;
    float ym1 = texture(tDepth, vUv + texelSize * vec2( 0., 1.)).x;
    float ym2 = texture(tDepth, vUv + texelSize * vec2(+1., 1.)).x;

    float yp0 = texture(tDepth, vUv + texelSize * vec2(-1., -1.)).x;
    float yp1 = texture(tDepth, vUv + texelSize * vec2( 0., -1.)).x;
    float yp2 = texture(tDepth, vUv + texelSize * vec2(+1., -1.)).x;

    // Build the local operator and apply to samples
    vec3 v121 = vec3(1., 2., 1.);

    // Compute the magnitude
    float Gx = dot(v121, vec3(xp0, xp1, xp2)) - dot(v121, vec3(xm0, xm1, xm2));
    float Gy = dot(v121, vec3(yp0, yp1, yp2)) - dot(v121, vec3(ym0, ym1, ym2));
    return sqrt(pow(Gx, 2.) + pow(Gy, 2.));
}

float computeEdgeNormal() {
    // Similar to Depth check, but using all three values for the normals

    vec3 xm0 = texture(tNormal, vUv + texelSize * vec2(-1., +1.)).rgb;
    vec3 xm1 = texture(tNormal, vUv + texelSize * vec2(-1.,  0.)).rgb;
    vec3 xm2 = texture(tNormal, vUv + texelSize * vec2(-1., -1.)).rgb;

    vec3 xp0 = texture(tNormal, vUv + texelSize * vec2(+1., +1.)).rgb;
    vec3 xp1 = texture(tNormal, vUv + texelSize * vec2(+1.,  0.)).rgb;
    vec3 xp2 = texture(tNormal, vUv + texelSize * vec2(+1., -1.)).rgb;

    vec3 ym0 = texture(tNormal, vUv + texelSize * vec2(-1., 1.)).rgb;
    vec3 ym1 = texture(tNormal, vUv + texelSize * vec2( 0., 1.)).rgb;
    vec3 ym2 = texture(tNormal, vUv + texelSize * vec2(+1., 1.)).rgb;

    vec3 yp0 = texture(tNormal, vUv + texelSize * vec2(-1., -1.)).rgb;
    vec3 yp1 = texture(tNormal, vUv + texelSize * vec2( 0., -1.)).rgb;
    vec3 yp2 = texture(tNormal, vUv + texelSize * vec2(+1., -1.)).rgb;

    vec3 v121 = vec3(1., 2., 1.);
    vec3 Gx = vec3( dot(v121, xp0), dot(v121, xp1), dot(v121, xp2))
        - vec3(dot(v121, xm0), dot(v121, xm1), dot(v121, xm2)                 );

    vec3 Gy = vec3( dot(v121, yp0), dot(v121, yp1), dot(v121, yp2))
        - vec3(dot(v121, ym0), dot(v121, ym1), dot(v121, ym2)                 );

    return sqrt(dot(Gx, Gx) + dot(Gy, Gy));
}

void main() {
    float edgeDepth = computeEdgeDepth();
    float edgeNormal = computeEdgeNormal();

    float edge = step(.25, max(edgeDepth, edgeNormal));
    float depth = texture(tDepth, vUv).x;

    // Make alpha transparent if depth == 1 (hitting far plane) UNLESS
    // we are drawing an edge
    float alpha = 1.0 - step(1.0, depth) + edge;

    // Color which we premultiply with alpha
    gl_FragColor.rgb = (1.0 - vec3(edge)) * alpha;
    gl_FragColor.a = alpha;
}
`;class cv extends br{constructor(t,n,r,s){super();Nt(this,"normalMaterial");Nt(this,"fsQuad");Nt(this,"outlineMaterial");Nt(this,"normalRenderTarget",new Fn);this.scene=t,this.camera=n,this.normalMaterial=new md,this.fsQuad=new Ys,this.outlineMaterial=new mn({name:"outline shader",uniforms:{tDepth:{value:null},tNormal:{value:null},texelSize:{value:null}},vertexShader:ov,fragmentShader:lv}),this.fsQuad.material=this.outlineMaterial,this.setSize(r,s)}setSize(t,n){this.normalRenderTarget.depthTexture?.dispose();const r=new jo(t,n);this.normalRenderTarget.setSize(t,n),this.normalRenderTarget.depthTexture=r,this.outlineMaterial.uniforms.tDepth.value=r,this.outlineMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.outlineMaterial.uniforms.texelSize.value=new ut(1/t,1/n)}render(t,n){const r=this.scene.overrideMaterial;this.scene.overrideMaterial=this.normalMaterial,t.setRenderTarget(this.normalRenderTarget),t.render(this.scene,this.camera),this.scene.overrideMaterial=r,t.setRenderTarget(n),this.fsQuad.render(t)}dispose(){this.normalMaterial.dispose(),this.fsQuad.dispose(),this.outlineMaterial.dispose(),this.normalRenderTarget.dispose()}}const uv=`varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

`,fv=`varying vec2 vUv; // (x,y) with x,y in [0,1]
uniform sampler2D tInput;
uniform vec2 texelSize;

// Distance in pixels (more or less) to a black pixel for this pixel to turn black
uniform int thickness;

void main() {
    vec4 base = texture2D(tInput, vUv);
    vec4 black = vec4(vec3(0.), 1.);

    int thickness2 = thickness*thickness;

    // Becomes true if any pixel within a disc of radius "thickness" is black
    bool is_black = false;

    for (int i = -thickness/2; i < thickness/2; i++) {
        int i2 = i * i;
        for (int j = -thickness/2; j < thickness/2; j++) {
            vec4 smpl = texture2D(tInput, vUv + vec2(i,j) * texelSize);
            is_black = is_black || i2 + j * j < thickness2 && smpl == black;
        }
    }

    gl_FragColor.rgba = is_black ? black : base;
}
`;class hv extends br{constructor(t,n){super();Nt(this,"fsQuad");Nt(this,"thickenMaterial");this.fsQuad=new Ys,this.thickenMaterial=new mn({name:"thicken shader",uniforms:{tInput:{value:null},texelSize:{value:null},thickness:{value:0}},vertexShader:uv,fragmentShader:fv}),this.fsQuad.material=this.thickenMaterial,this.setSize(t,n)}setSize(t,n){this.thickenMaterial.uniforms.texelSize.value=new ut(1/t,1/n)}setThickness(t){this.thickenMaterial.uniforms.thickness.value=t}render(t,n,r){t.setRenderTarget(n),this.thickenMaterial.uniforms.tInput.value=r.texture,this.fsQuad.render(t)}dispose(){this.fsQuad.dispose(),this.thickenMaterial.dispose()}}const dv={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new ut(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		// FXAA algorithm from NVIDIA, C# implementation by Jasper Flick, GLSL port by Dave Hoskins
		// http://developer.download.nvidia.com/assets/gamedev/files/sdk/11/FXAA_WhitePaper.pdf
		// https://catlikecoding.com/unity/tutorials/advanced-rendering/fxaa/

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;
			
			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {
				
				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );
			
		}`};class pv extends hu{constructor(){super(dv)}setSize(e,t){this.material.uniforms.resolution.value.x=1/e,this.material.uniforms.resolution.value.y=1/t}}const mv={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class gv extends br{constructor(){super();const e=mv;this.uniforms=Yo.clone(e.uniforms),this.material=new pd({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ys(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ct.getTransfer(this._outputColorSpace)===gt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Cc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Pc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Dc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Lc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ic?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Nc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Uc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class _v{constructor(e,t){Nt(this,"camera");Nt(this,"mesh");Nt(this,"canvas");Nt(this,"scene",new fd);Nt(this,"renderer");Nt(this,"composer");Nt(this,"canvasWidth");Nt(this,"canvasHeight");Nt(this,"thickenPass");this.canvas=e,this.canvasWidth=0,this.canvasHeight=0,this.mesh=t,this.camera=new Ko,this.camera.position.x=0,this.camera.position.y=0,this.camera.position.z=230,this.camera.lookAt(300,300,0),this.scene.add(this.mesh),this.renderer=new ev({antialias:!0,canvas:e,preserveDrawingBuffer:!0});const n=new Fn;this.composer=new av(this.renderer,n);const r=new cv(this.scene,this.camera,e.clientWidth,e.clientHeight);this.composer.addPass(r);const s=new hv(e.clientWidth,e.clientHeight);this.thickenPass=s,this.composer.addPass(s);const a=new gv;this.composer.addPass(a);const o=new pv;this.composer.addPass(o)}getCanvasPixelColor(e){const t=this.composer.writeBuffer,[n,r]=[e[0]*window.devicePixelRatio,e[1]*window.devicePixelRatio],s=new Uint8Array(4);return this.renderer.readRenderTargetPixels(t,n,t.height-r,1,1,s),[s[0],s[1],s[2],s[3]]}resizeCanvas(){return this.canvas.clientWidth===this.canvasWidth&&this.canvas.clientHeight===this.canvasHeight?!1:(this.canvasWidth=this.canvas.clientWidth,this.canvasHeight=this.canvas.clientHeight,this.composer.setPixelRatio(window.devicePixelRatio),this.composer.setSize(this.canvasWidth,this.canvasHeight),this.composer.renderer.setPixelRatio(window.devicePixelRatio),this.composer.renderer.setSize(this.canvasWidth,this.canvasHeight,!1),!0)}centerCameraAround(e,t){const r=e.geometry.getAttribute("position"),s=this.canvas.parentElement,a=.5*(this.canvas.clientWidth-s.clientWidth)/s.clientWidth,o=.5*(this.canvas.clientHeight-s.clientHeight)/s.clientHeight,{left:l,right:c,top:u,bottom:d,far:m,near:_}=vv(this.camera,r,t),v=this.canvas.clientWidth/this.canvas.clientHeight,x=s.clientWidth/s.clientHeight,g=(c-l)/(u-d);if(g>x){const T=c-l;this.camera.left=l-T*a,this.camera.right=c+T*a;const I=T/x,D=T/g,P=I-D;this.camera.bottom=d-I*o-P/2,this.camera.top=u+I*o+P/2}else{const T=u-d;this.camera.top=u+T*o,this.camera.bottom=d-T*o;const I=T*v;this.camera.left=l-I*a,this.camera.right=l+I+I*a}this.camera.near=_,this.camera.far=m,this.camera.updateProjectionMatrix();const h=c-l,R=u-d,A=Math.sqrt(h*h+R*R);this.thickenPass.setThickness(150*window.devicePixelRatio/A)}render(){this.composer.render()}snapshot(){return this.render(),this.renderer.domElement.toDataURL("image/png")}}const vv=(i,e,t)=>{const n=new X;let[r,s]=[1/0,-1/0],[a,o]=[1/0,-1/0],[l,c]=[1/0,-1/0];const u=i.position,d=new X;i.getWorldDirection(d);const m=u.x*d.x+u.y*d.y+u.z*d.z,_=new X().crossVectors(d,i.up).normalize(),v=new X().crossVectors(_,d).normalize(),x=Math.sqrt(_.x*_.x+_.y*_.y),g=Math.sqrt(v.x*v.x+v.y*v.y);for(let h=0;h<e.count;h++){n.fromArray(e.array,h*e.itemSize),n.applyMatrix4(t);const R=Math.sqrt(n.x*n.x+n.y*n.y),A=-u.x*_.x-u.y*_.y+(n.z-u.z)*_.z,T=-u.x*v.x-u.y*v.y+(n.z-u.z)*v.z;r=Math.min(r,-R*x+A),s=Math.max(s,R*x+A),a=Math.min(a,-R*g+T),o=Math.max(o,R*g+T);const I=R*Math.sqrt(1-d.z*d.z),D=m-n.z*d.z+I,P=m-n.z*d.z-I;l=Math.min(l,-D,-P),c=Math.max(c,-D,-P)}return{left:r,right:s,top:o,bottom:a,near:l,far:c}};var xv=(()=>{var i=import.meta.url;return(async function(e={}){var t,n=e,r,s,a=new Promise((f,p)=>{r=f,s=p}),o=typeof window=="object",l=typeof importScripts=="function",c=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string";if(c){const{createRequire:f}=await Ac(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]);var u=f(import.meta.url)}var d=!1;n.setup=function(){if(d)return;d=!0,n.initTBB();function f(F,H,te=(ge=>ge)){if(H)for(let ge of H)F.push_back(te(ge));return F}function p(F,H=(te=>te)){const te=[],ge=F.size();for(let Ye=0;Ye<ge;Ye++)te.push(H(F.get(Ye)));return te}function b(F,H=(te=>te)){const te=[],ge=F.size();for(let Ye=0;Ye<ge;Ye++){const At=F.get(Ye),It=At.size(),en=[];for(let Ct=0;Ct<It;Ct++)en.push(H(At.get(Ct)));te.push(en)}return te}function C(F){return F[0].length<3&&(F=[F]),f(new n.Vector2_vec2,F,H=>f(new n.Vector_vec2,H,te=>te instanceof Array?{x:te[0],y:te[1]}:te))}function k(F){for(let H=0;H<F.size();H++)F.get(H).delete();F.delete()}function Z(F){return F[0]instanceof Array?{x:F[0][0],y:F[0][1]}:typeof F[0]=="number"?{x:F[0]||0,y:F[1]||0}:F[0]}function le(F){return F[0]instanceof Array?{x:F[0][0],y:F[0][1],z:F[0][2]}:typeof F[0]=="number"?{x:F[0]||0,y:F[1]||0,z:F[2]||0}:F[0]}function ee(F){return F=="EvenOdd"?0:F=="NonZero"?1:F=="Negative"?3:2}function fe(F){return F=="Round"?1:F=="Miter"?2:0}const me=n.CrossSection;function xe(F,H="Positive"){if(F instanceof me)return F;{const te=C(F),ge=new me(te,ee(H));return k(te),ge}}n.CrossSection.prototype.translate=function(...F){return this._Translate(Z(F))},n.CrossSection.prototype.scale=function(F){return typeof F=="number"?this._Scale({x:F,y:F}):this._Scale(Z([F]))},n.CrossSection.prototype.mirror=function(F){return this._Mirror(Z([F]))},n.CrossSection.prototype.warp=function(F){const H=Pr(function(ge){const Ye=M(ge,"double"),At=M(ge+8,"double"),It=[Ye,At];F(It),V(ge,It[0],"double"),V(ge+8,It[1],"double")},"vi"),te=this._Warp(H);return Dr(H),te},n.CrossSection.prototype.decompose=function(){const F=this._Decompose(),H=p(F);return F.delete(),H},n.CrossSection.prototype.bounds=function(){const F=this._Bounds();return{min:["x","y"].map(H=>F.min[H]),max:["x","y"].map(H=>F.max[H])}},n.CrossSection.prototype.offset=function(F,H="Square",te=2,ge=0){return this._Offset(F,fe(H),te,ge)},n.CrossSection.prototype.extrude=function(F,H=0,te=0,ge=[1,1],Ye=!1){ge=Z([ge]);const At=n._Extrude(this._ToPolygons(),F,H,te,ge);return Ye?At.translate([0,0,-F/2]):At},n.CrossSection.prototype.revolve=function(F=0,H=360){return n._Revolve(this._ToPolygons(),F,H)},n.CrossSection.prototype.add=function(F){return this._add(xe(F))},n.CrossSection.prototype.subtract=function(F){return this._subtract(xe(F))},n.CrossSection.prototype.intersect=function(F){return this._intersect(xe(F))},n.CrossSection.prototype.toPolygons=function(){const F=this._ToPolygons(),H=b(F,te=>[te.x,te.y]);return F.delete(),H},n.Manifold.prototype.smoothOut=function(F=60,H=0){return this._SmoothOut(F,H)},n.Manifold.prototype.warp=function(F){const H=Pr(function(Ye){const At=M(Ye,"double"),It=M(Ye+8,"double"),en=M(Ye+16,"double"),Ct=[At,It,en];F(Ct),V(Ye,Ct[0],"double"),V(Ye+8,Ct[1],"double"),V(Ye+16,Ct[2],"double")},"vi"),te=this._Warp(H);Dr(H);const ge=te.status();if(ge.value!==0)throw new n.ManifoldError(ge.value);return te},n.Manifold.prototype.calculateNormals=function(F,H=60){return this._CalculateNormals(F,H)},n.Manifold.prototype.setProperties=function(F,H){const te=this.numProp(),ge=Pr(function(At,It,en){const Ct=[];for(let Pt=0;Pt<F;++Pt)Ct[Pt]=M(At+8*Pt,"double");const Xi=[];for(let Pt=0;Pt<3;++Pt)Xi[Pt]=M(It+8*Pt,"double");const $i=[];for(let Pt=0;Pt<te;++Pt)$i[Pt]=M(en+8*Pt,"double");H(Ct,Xi,$i);for(let Pt=0;Pt<F;++Pt)V(At+8*Pt,Ct[Pt],"double")},"viii"),Ye=this._SetProperties(F,ge);return Dr(ge),Ye},n.Manifold.prototype.translate=function(...F){return this._Translate(le(F))},n.Manifold.prototype.rotate=function(F,H,te){return Array.isArray(F)?this._Rotate(...F):this._Rotate(F,H||0,te||0)},n.Manifold.prototype.scale=function(F){return typeof F=="number"?this._Scale({x:F,y:F,z:F}):this._Scale(le([F]))},n.Manifold.prototype.mirror=function(F){return this._Mirror(le([F]))},n.Manifold.prototype.trimByPlane=function(F,H=0){return this._TrimByPlane(le([F]),H)},n.Manifold.prototype.slice=function(F=0){const H=this._Slice(F),te=new me(H,ee("Positive"));return k(H),te},n.Manifold.prototype.project=function(){const F=this._Project(),H=new me(F,ee("Positive"));return k(F),H},n.Manifold.prototype.split=function(F){const H=this._Split(F),te=p(H);return H.delete(),te},n.Manifold.prototype.splitByPlane=function(F,H=0){const te=this._SplitByPlane(le([F]),H),ge=p(te);return te.delete(),ge},n.Manifold.prototype.decompose=function(){const F=this._Decompose(),H=p(F);return F.delete(),H},n.Manifold.prototype.boundingBox=function(){const F=this._boundingBox();return{min:["x","y","z"].map(H=>F.min[H]),max:["x","y","z"].map(H=>F.max[H])}};class je{constructor({numProp:H=3,triVerts:te=new Uint32Array,vertProperties:ge=new Float32Array,mergeFromVert:Ye,mergeToVert:At,runIndex:It,runOriginalID:en,faceID:Ct,halfedgeTangent:Xi,runTransform:$i}={}){this.numProp=H,this.triVerts=te,this.vertProperties=ge,this.mergeFromVert=Ye,this.mergeToVert=At,this.runIndex=It,this.runOriginalID=en,this.faceID=Ct,this.halfedgeTangent=Xi,this.runTransform=$i}get numTri(){return this.triVerts.length/3}get numVert(){return this.vertProperties.length/this.numProp}get numRun(){return this.runOriginalID.length}merge(){const{changed:H,mesh:te}=n._Merge(this);return Object.assign(this,{...te}),H}verts(H){return this.triVerts.subarray(3*H,3*(H+1))}position(H){return this.vertProperties.subarray(this.numProp*H,this.numProp*H+3)}extras(H){return this.vertProperties.subarray(this.numProp*H+3,this.numProp*(H+1))}tangent(H){return this.halfedgeTangent.subarray(4*H,4*(H+1))}transform(H){const te=new Array(16);for(const ge of[0,1,2,3])for(const Ye of[0,1,2])te[4*ge+Ye]=this.runTransform[12*H+3*ge+Ye];return te[15]=1,te}}n.Mesh=je,n.Manifold.prototype.getMesh=function(F=-1){return new je(this._GetMeshJS(F))},n.ManifoldError=function(H,...te){let ge="Unknown error";switch(H){case n.status.NonFiniteVertex.value:ge="Non-finite vertex";break;case n.status.NotManifold.value:ge="Not manifold";break;case n.status.VertexOutOfBounds.value:ge="Vertex index out of bounds";break;case n.status.PropertiesWrongLength.value:ge="Properties have wrong length";break;case n.status.MissingPositionProperties.value:ge="Less than three properties";break;case n.status.MergeVectorsDifferentLengths.value:ge="Merge vectors have different lengths";break;case n.status.MergeIndexOutOfBounds.value:ge="Merge index out of bounds";break;case n.status.TransformWrongLength.value:ge="Transform vector has wrong length";break;case n.status.RunIndexWrongLength.value:ge="Run index vector has wrong length";break;case n.status.FaceIDWrongLength.value:ge="Face ID vector has wrong length";case n.status.InvalidConstruction.value:ge="Manifold constructed with invalid parameters"}const Ye=Error.apply(this,[ge,...te]);Ye.name=this.name="ManifoldError",this.message=Ye.message,this.stack=Ye.stack,this.code=H},n.ManifoldError.prototype=Object.create(Error.prototype,{constructor:{value:n.ManifoldError,writable:!0,configurable:!0}}),n.CrossSection=function(F,H="Positive"){const te=C(F),ge=new me(te,ee(H));return k(te),ge},n.CrossSection.ofPolygons=function(F,H="Positive"){return new n.CrossSection(F,H)},n.CrossSection.square=function(...F){let H;F.length==0?H={x:1,y:1}:typeof F[0]=="number"?H={x:F[0],y:F[0]}:H=Z(F);const te=F[1]||!1;return n._Square(H,te)},n.CrossSection.circle=function(F,H=0){return n._Circle(F,H)};function dt(F){return function(...H){H.length==1&&(H=H[0]);const te=new n.Vector_crossSection;for(const Ye of H)te.push_back(xe(Ye));const ge=n["_crossSection"+F](te);return te.delete(),ge}}n.CrossSection.compose=dt("Compose"),n.CrossSection.union=dt("UnionN"),n.CrossSection.difference=dt("DifferenceN"),n.CrossSection.intersection=dt("IntersectionN");function Ut(F,H){f(F,H,te=>te instanceof Array?{x:te[0],y:te[1]}:te)}n.CrossSection.hull=function(...F){F.length==1&&(F=F[0]);let H=new n.Vector_vec2;for(const ge of F)if(ge instanceof me)n._crossSectionCollectVertices(H,ge);else if(ge instanceof Array&&ge.length==2&&typeof ge[0]=="number")H.push_back({x:ge[0],y:ge[1]});else if(ge.x)H.push_back(ge);else{const At=ge[0].length==2&&typeof ge[0][0]=="number"||ge[0].x?[ge]:ge;for(const It of At)Ut(H,It)}const te=n._crossSectionHullPoints(H);return H.delete(),te},n.CrossSection.prototype=Object.create(me.prototype),Object.defineProperty(n.CrossSection,Symbol.hasInstance,{get:()=>F=>F instanceof me});const Rt=n.Manifold;n.Manifold=function(F){const H=new Rt(F),te=H.status();if(te.value!==0)throw new n.ManifoldError(te.value);return H},n.Manifold.ofMesh=function(F){return new n.Manifold(F)},n.Manifold.tetrahedron=function(){return n._Tetrahedron()},n.Manifold.cube=function(...F){let H;F.length==0?H={x:1,y:1,z:1}:typeof F[0]=="number"?H={x:F[0],y:F[0],z:F[0]}:H=le(F);const te=F[1]||!1;return n._Cube(H,te)},n.Manifold.cylinder=function(F,H,te=-1,ge=0,Ye=!1){return n._Cylinder(F,H,te,ge,Ye)},n.Manifold.sphere=function(F,H=0){return n._Sphere(F,H)},n.Manifold.smooth=function(F,H=[]){const te=new n.Vector_smoothness;f(te,H);const ge=n._Smooth(F,te);return te.delete(),ge},n.Manifold.extrude=function(F,H,te=0,ge=0,Ye=[1,1],At=!1){return(F instanceof me?F:n.CrossSection(F,"Positive")).extrude(H,te,ge,Ye,At)},n.Manifold.revolve=function(F,H=0,te=360){return(F instanceof me?F:n.CrossSection(F,"Positive")).revolve(H,te)},n.Manifold.reserveIDs=function(F){return n._ReserveIDs(F)},n.Manifold.compose=function(F){const H=new n.Vector_manifold;f(H,F);const te=n._manifoldCompose(H);return H.delete(),te};function vn(F){return function(...H){H.length==1&&(H=H[0]);const te=new n.Vector_manifold;for(const Ye of H)te.push_back(Ye);const ge=n["_manifold"+F+"N"](te);return te.delete(),ge}}n.Manifold.union=vn("Union"),n.Manifold.difference=vn("Difference"),n.Manifold.intersection=vn("Intersection"),n.Manifold.levelSet=function(F,H,te,ge=0,Ye=-1){const At={min:{x:H.min[0],y:H.min[1],z:H.min[2]},max:{x:H.max[0],y:H.max[1],z:H.max[2]}},It=Pr(function(Ct){const Xi=M(Ct,"double"),$i=M(Ct+8,"double"),Pt=M(Ct+16,"double");return F([Xi,$i,Pt])},"di"),en=n._LevelSet(It,At,te,ge,Ye);return Dr(It),en};function xn(F,H){f(F,H,te=>te instanceof Array?{x:te[0],y:te[1],z:te[2]}:te)}n.Manifold.hull=function(...F){F.length==1&&(F=F[0]);let H=new n.Vector_vec3;for(const ge of F)ge instanceof Rt?n._manifoldCollectVertices(H,ge):ge instanceof Array&&ge.length==3&&typeof ge[0]=="number"?H.push_back({x:ge[0],y:ge[1],z:ge[2]}):ge.x?H.push_back(ge):xn(H,ge);const te=n._manifoldHullPoints(H);return H.delete(),te},n.Manifold.prototype=Object.create(Rt.prototype),Object.defineProperty(n.Manifold,Symbol.hasInstance,{get:()=>F=>F instanceof Rt}),n.triangulate=function(F,H=-1){const te=C(F),ge=p(n._Triangulate(te,H),Ye=>[Ye[0],Ye[1],Ye[2]]);return k(te),ge}};var m=Object.assign({},n),_="";function v(f){return n.locateFile?n.locateFile(f,_):_+f}var x,g;if(c){var h=u("fs"),R=u("path");_=u("url").fileURLToPath(new URL("/furniture-quotation/assets/manifold-BrJGmODQ.js",import.meta.url)),g=f=>{f=et(f)?new URL(f):R.normalize(f);var p=h.readFileSync(f);return p},x=(f,p=!0)=>(f=et(f)?new URL(f):R.normalize(f),new Promise((b,C)=>{h.readFile(f,p?void 0:"utf8",(k,Z)=>{k?C(k):b(p?Z.buffer:Z)})})),!n.thisProgram&&process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2)}else(o||l)&&(l?_=self.location.href:typeof document<"u"&&document.currentScript&&(_=document.currentScript.src),i&&(_=i),_.startsWith("blob:")?_="":_=_.substr(0,_.replace(/[?#].*/,"").lastIndexOf("/")+1),l&&(g=f=>{var p=new XMLHttpRequest;return p.open("GET",f,!1),p.responseType="arraybuffer",p.send(null),new Uint8Array(p.response)}),x=f=>et(f)?new Promise((p,b)=>{var C=new XMLHttpRequest;C.open("GET",f,!0),C.responseType="arraybuffer",C.onload=()=>{(C.status==200||C.status==0&&C.response)&&b(C.response),p(C.status)},C.onerror=p,C.send(null)}):fetch(f,{credentials:"same-origin"}).then(p=>p.ok?p.arrayBuffer():Promise.reject(new Error(p.status+" : "+p.url))));n.print||console.log.bind(console);var A=n.printErr||console.error.bind(console);Object.assign(n,m),m=null,n.arguments&&n.arguments,n.thisProgram&&n.thisProgram,n.quit&&n.quit;var T;n.wasmBinary&&(T=n.wasmBinary);var I,D=!1,P,L,y,S,U,G,Y,J;function ie(){var f=I.buffer;n.HEAP8=P=new Int8Array(f),n.HEAP16=y=new Int16Array(f),n.HEAPU8=L=new Uint8Array(f),n.HEAPU16=S=new Uint16Array(f),n.HEAP32=U=new Int32Array(f),n.HEAPU32=G=new Uint32Array(f),n.HEAPF32=Y=new Float32Array(f),n.HEAPF64=J=new Float64Array(f)}var K=[],ae=[],$=[];function de(){if(n.preRun)for(typeof n.preRun=="function"&&(n.preRun=[n.preRun]);n.preRun.length;)He(n.preRun.shift());w(K)}function Ee(){w(ae)}function we(){if(n.postRun)for(typeof n.postRun=="function"&&(n.postRun=[n.postRun]);n.postRun.length;)Q(n.postRun.shift());w($)}function He(f){K.unshift(f)}function Xe(f){ae.unshift(f)}function Q(f){$.unshift(f)}var se=0,ve=null;function _e(f){se++,n.monitorRunDependencies?.(se)}function Le(f){if(se--,n.monitorRunDependencies?.(se),se==0&&ve){var p=ve;ve=null,p()}}function $e(f){n.onAbort?.(f),f="Aborted("+f+")",A(f),D=!0,f+=". Build with -sASSERTIONS for more info.";var p=new WebAssembly.RuntimeError(f);throw s(p),p}var Ne="data:application/octet-stream;base64,",rt=f=>f.startsWith(Ne),et=f=>f.startsWith("file://");function Ve(){if(n.locateFile){var f="manifold.wasm";return rt(f)?f:v(f)}return new URL("/furniture-quotation/assets/manifold-CUOyaTWM.wasm",import.meta.url).href}var N;function Ot(f){if(f==N&&T)return new Uint8Array(T);if(g)return g(f);throw"both async and sync fetching of the wasm failed"}function tt(f){return T?Promise.resolve().then(()=>Ot(f)):x(f).then(p=>new Uint8Array(p),()=>Ot(f))}function it(f,p,b){return tt(f).then(C=>WebAssembly.instantiate(C,p)).then(b,C=>{A(`failed to asynchronously prepare wasm: ${C}`),$e(C)})}function Fe(f,p,b,C){return!f&&typeof WebAssembly.instantiateStreaming=="function"&&!rt(p)&&!et(p)&&!c&&typeof fetch=="function"?fetch(p,{credentials:"same-origin"}).then(k=>{var Z=WebAssembly.instantiateStreaming(k,b);return Z.then(C,function(le){return A(`wasm streaming compile failed: ${le}`),A("falling back to ArrayBuffer instantiation"),it(p,b,C)})}):it(p,b,C)}function pt(){return{a:Kf}}function Ue(){var f=pt();function p(C,k){return _n=C.exports,_n=Zf(_n),I=_n.J,ie(),bt=_n.M,Xe(_n.K),Le(),_n}_e();function b(C){p(C.instance)}if(n.instantiateWasm)try{return n.instantiateWasm(f,p)}catch(C){A(`Module.instantiateWasm callback failed with error: ${C}`),s(C)}return N||(N=Ve()),Fe(T,N,f,b).catch(s),{}}var w=f=>{for(;f.length>0;)f.shift()(n)};function M(f,p="i8"){switch(p.endsWith("*")&&(p="*"),p){case"i1":return P[f>>>0];case"i8":return P[f>>>0];case"i16":return y[f>>>1>>>0];case"i32":return U[f>>>2>>>0];case"i64":$e("to do getValue(i64) use WASM_BIGINT");case"float":return Y[f>>>2>>>0];case"double":return J[f>>>3>>>0];case"*":return G[f>>>2>>>0];default:$e(`invalid type for getValue: ${p}`)}}n.noExitRuntime;function V(f,p,b="i8"){switch(b.endsWith("*")&&(b="*"),b){case"i1":P[f>>>0]=p;break;case"i8":P[f>>>0]=p;break;case"i16":y[f>>>1>>>0]=p;break;case"i32":U[f>>>2>>>0]=p;break;case"i64":$e("to do setValue(i64) use WASM_BIGINT");case"float":Y[f>>>2>>>0]=p;break;case"double":J[f>>>3>>>0]=p;break;case"*":G[f>>>2>>>0]=p;break;default:$e(`invalid type for setValue: ${b}`)}}class oe{constructor(p){this.excPtr=p,this.ptr=p-24}set_type(p){G[this.ptr+4>>>2>>>0]=p}get_type(){return G[this.ptr+4>>>2>>>0]}set_destructor(p){G[this.ptr+8>>>2>>>0]=p}get_destructor(){return G[this.ptr+8>>>2>>>0]}set_caught(p){p=p?1:0,P[this.ptr+12>>>0]=p}get_caught(){return P[this.ptr+12>>>0]!=0}set_rethrown(p){p=p?1:0,P[this.ptr+13>>>0]=p}get_rethrown(){return P[this.ptr+13>>>0]!=0}init(p,b){this.set_adjusted_ptr(0),this.set_type(p),this.set_destructor(b)}set_adjusted_ptr(p){G[this.ptr+16>>>2>>>0]=p}get_adjusted_ptr(){return G[this.ptr+16>>>2>>>0]}get_exception_ptr(){var p=vl(this.get_type());if(p)return G[this.excPtr>>>2>>>0];var b=this.get_adjusted_ptr();return b!==0?b:this.excPtr}}var ue=0;function ne(f,p,b){f>>>=0,p>>>=0,b>>>=0;var C=new oe(f);throw C.init(p,b),ue=f,ue}var Ie=()=>{$e("")},Me={},Re=f=>{for(;f.length;){var p=f.pop(),b=f.pop();b(p)}};function nt(f){return this.fromWireType(G[f>>>2>>>0])}var pe={},Ae={},Oe={},Ge,Ce=f=>{throw new Ge(f)},Ke=(f,p,b)=>{f.forEach(function(ee){Oe[ee]=p});function C(ee){var fe=b(ee);fe.length!==f.length&&Ce("Mismatched type converter count");for(var me=0;me<f.length;++me)ke(f[me],fe[me])}var k=new Array(p.length),Z=[],le=0;p.forEach((ee,fe)=>{Ae.hasOwnProperty(ee)?k[fe]=Ae[ee]:(Z.push(ee),pe.hasOwnProperty(ee)||(pe[ee]=[]),pe[ee].push(()=>{k[fe]=Ae[ee],++le,le===Z.length&&C(k)}))}),Z.length===0&&C(k)},Ze=function(f){f>>>=0;var p=Me[f];delete Me[f];var b=p.rawConstructor,C=p.rawDestructor,k=p.fields,Z=k.map(le=>le.getterReturnType).concat(k.map(le=>le.setterArgumentType));Ke([f],Z,le=>{var ee={};return k.forEach((fe,me)=>{var xe=fe.fieldName,je=le[me],dt=fe.getter,Ut=fe.getterContext,Rt=le[me+k.length],vn=fe.setter,xn=fe.setterContext;ee[xe]={read:F=>je.fromWireType(dt(Ut,F)),write:(F,H)=>{var te=[];vn(xn,F,Rt.toWireType(te,H)),Re(te)}}}),[{name:p.name,fromWireType:fe=>{var me={};for(var xe in ee)me[xe]=ee[xe].read(fe);return C(fe),me},toWireType:(fe,me)=>{for(var xe in ee)if(!(xe in me))throw new TypeError(`Missing field: "${xe}"`);var je=b();for(xe in ee)ee[xe].write(je,me[xe]);return fe!==null&&fe.push(C,je),je},argPackAdvance:ft,readValueFromPointer:nt,destructorFunction:C}]})};function vt(f,p,b,C,k){}var O=()=>{for(var f=new Array(256),p=0;p<256;++p)f[p]=String.fromCharCode(p);Se=f},Se,j=f=>{for(var p="",b=f;L[b>>>0];)p+=Se[L[b++>>>0]];return p},re,ce=f=>{throw new re(f)};function be(f,p,b={}){var C=p.name;if(f||ce(`type "${C}" must have a positive integer typeid pointer`),Ae.hasOwnProperty(f)){if(b.ignoreDuplicateRegistrations)return;ce(`Cannot register type '${C}' twice`)}if(Ae[f]=p,delete Oe[f],pe.hasOwnProperty(f)){var k=pe[f];delete pe[f],k.forEach(Z=>Z())}}function ke(f,p,b={}){if(!("argPackAdvance"in p))throw new TypeError("registerType registeredInstance requires argPackAdvance");return be(f,p,b)}var ft=8;function Ht(f,p,b,C){f>>>=0,p>>>=0,p=j(p),ke(f,{name:p,fromWireType:function(k){return!!k},toWireType:function(k,Z){return Z?b:C},argPackAdvance:ft,readValueFromPointer:function(k){return this.fromWireType(L[k>>>0])},destructorFunction:null})}var mt=f=>({count:f.count,deleteScheduled:f.deleteScheduled,preservePointerOnDelete:f.preservePointerOnDelete,ptr:f.ptr,ptrType:f.ptrType,smartPtr:f.smartPtr,smartPtrType:f.smartPtrType}),Zt=f=>{function p(b){return b.$$.ptrType.registeredClass.name}ce(p(f)+" instance already deleted")},on=!1,Rr=f=>{},es=f=>{f.smartPtr?f.smartPtrType.rawDestructor(f.smartPtr):f.ptrType.registeredClass.rawDestructor(f.ptr)},Pn=f=>{f.count.value-=1;var p=f.count.value===0;p&&es(f)},Hi=(f,p,b)=>{if(p===b)return f;if(b.baseClass===void 0)return null;var C=Hi(f,p,b.baseClass);return C===null?null:b.downcast(C)},Cr={},ts=()=>Object.keys(Si).length,Vi=()=>{var f=[];for(var p in Si)Si.hasOwnProperty(p)&&f.push(Si[p]);return f},ai=[],oi=()=>{for(;ai.length;){var f=ai.pop();f.$$.deleteScheduled=!1,f.delete()}},li,ns=f=>{li=f,ai.length&&li&&li(oi)},Zs=()=>{n.getInheritedInstanceCount=ts,n.getLiveInheritedInstances=Vi,n.flushPendingDeletes=oi,n.setDelayFunction=ns},Si={},Js=(f,p)=>{for(p===void 0&&ce("ptr should not be undefined");f.baseClass;)p=f.upcast(p),f=f.baseClass;return p},Qs=(f,p)=>(p=Js(f,p),Si[p]),Gi=(f,p)=>{(!p.ptrType||!p.ptr)&&Ce("makeClassHandle requires ptr and ptrType");var b=!!p.smartPtrType,C=!!p.smartPtr;return b!==C&&Ce("Both smartPtrType and smartPtr must be specified"),p.count={value:1},E(Object.create(f,{$$:{value:p,writable:!0}}))};function ea(f){var p=this.getPointee(f);if(!p)return this.destructor(f),null;var b=Qs(this.registeredClass,p);if(b!==void 0){if(b.$$.count.value===0)return b.$$.ptr=p,b.$$.smartPtr=f,b.clone();var C=b.clone();return this.destructor(f),C}function k(){return this.isSmartPointer?Gi(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:p,smartPtrType:this,smartPtr:f}):Gi(this.registeredClass.instancePrototype,{ptrType:this,ptr:f})}var Z=this.registeredClass.getActualType(p),le=Cr[Z];if(!le)return k.call(this);var ee;this.isConst?ee=le.constPointerType:ee=le.pointerType;var fe=Hi(p,this.registeredClass,ee.registeredClass);return fe===null?k.call(this):this.isSmartPointer?Gi(ee.registeredClass.instancePrototype,{ptrType:ee,ptr:fe,smartPtrType:this,smartPtr:f}):Gi(ee.registeredClass.instancePrototype,{ptrType:ee,ptr:fe})}var E=f=>typeof FinalizationRegistry>"u"?(E=p=>p,f):(on=new FinalizationRegistry(p=>{Pn(p.$$)}),E=p=>{var b=p.$$,C=!!b.smartPtr;if(C){var k={$$:b};on.register(p,k,p)}return p},Rr=p=>on.unregister(p),E(f)),B=()=>{Object.assign(W.prototype,{isAliasOf(f){if(!(this instanceof W)||!(f instanceof W))return!1;var p=this.$$.ptrType.registeredClass,b=this.$$.ptr;f.$$=f.$$;for(var C=f.$$.ptrType.registeredClass,k=f.$$.ptr;p.baseClass;)b=p.upcast(b),p=p.baseClass;for(;C.baseClass;)k=C.upcast(k),C=C.baseClass;return p===C&&b===k},clone(){if(this.$$.ptr||Zt(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var f=E(Object.create(Object.getPrototypeOf(this),{$$:{value:mt(this.$$)}}));return f.$$.count.value+=1,f.$$.deleteScheduled=!1,f},delete(){this.$$.ptr||Zt(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&ce("Object already scheduled for deletion"),Rr(this),Pn(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||Zt(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&ce("Object already scheduled for deletion"),ai.push(this),ai.length===1&&li&&li(oi),this.$$.deleteScheduled=!0,this}})};function W(){}var q=(f,p)=>Object.defineProperty(p,"name",{value:f}),z=(f,p,b)=>{if(f[p].overloadTable===void 0){var C=f[p];f[p]=function(...k){return f[p].overloadTable.hasOwnProperty(k.length)||ce(`Function '${b}' called with an invalid number of arguments (${k.length}) - expects one of (${f[p].overloadTable})!`),f[p].overloadTable[k.length].apply(this,k)},f[p].overloadTable=[],f[p].overloadTable[C.argCount]=C}},he=(f,p,b)=>{n.hasOwnProperty(f)?((b===void 0||n[f].overloadTable!==void 0&&n[f].overloadTable[b]!==void 0)&&ce(`Cannot register public name '${f}' twice`),z(n,f,f),n.hasOwnProperty(b)&&ce(`Cannot register multiple overloads of a function with the same number of arguments (${b})!`),n[f].overloadTable[b]=p):(n[f]=p,b!==void 0&&(n[f].numArguments=b))},Te=48,Pe=57,De=f=>{if(f===void 0)return"_unknown";f=f.replace(/[^a-zA-Z0-9_]/g,"$");var p=f.charCodeAt(0);return p>=Te&&p<=Pe?`_${f}`:f};function qe(f,p,b,C,k,Z,le,ee){this.name=f,this.constructor=p,this.instancePrototype=b,this.rawDestructor=C,this.baseClass=k,this.getActualType=Z,this.upcast=le,this.downcast=ee,this.pureVirtualFunctions=[]}var We=(f,p,b)=>{for(;p!==b;)p.upcast||ce(`Expected null or instance of ${b.name}, got an instance of ${p.name}`),f=p.upcast(f),p=p.baseClass;return f};function Be(f,p){if(p===null)return this.isReference&&ce(`null is not a valid ${this.name}`),0;p.$$||ce(`Cannot pass "${ra(p)}" as a ${this.name}`),p.$$.ptr||ce(`Cannot pass deleted object as a pointer of type ${this.name}`);var b=p.$$.ptrType.registeredClass,C=We(p.$$.ptr,b,this.registeredClass);return C}function st(f,p){var b;if(p===null)return this.isReference&&ce(`null is not a valid ${this.name}`),this.isSmartPointer?(b=this.rawConstructor(),f!==null&&f.push(this.rawDestructor,b),b):0;(!p||!p.$$)&&ce(`Cannot pass "${ra(p)}" as a ${this.name}`),p.$$.ptr||ce(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&p.$$.ptrType.isConst&&ce(`Cannot convert argument of type ${p.$$.smartPtrType?p.$$.smartPtrType.name:p.$$.ptrType.name} to parameter type ${this.name}`);var C=p.$$.ptrType.registeredClass;if(b=We(p.$$.ptr,C,this.registeredClass),this.isSmartPointer)switch(p.$$.smartPtr===void 0&&ce("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:p.$$.smartPtrType===this?b=p.$$.smartPtr:ce(`Cannot convert argument of type ${p.$$.smartPtrType?p.$$.smartPtrType.name:p.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:b=p.$$.smartPtr;break;case 2:if(p.$$.smartPtrType===this)b=p.$$.smartPtr;else{var k=p.clone();b=this.rawShare(b,Gt.toHandle(()=>k.delete())),f!==null&&f.push(this.rawDestructor,b)}break;default:ce("Unsupporting sharing policy")}return b}function ht(f,p){if(p===null)return this.isReference&&ce(`null is not a valid ${this.name}`),0;p.$$||ce(`Cannot pass "${ra(p)}" as a ${this.name}`),p.$$.ptr||ce(`Cannot pass deleted object as a pointer of type ${this.name}`),p.$$.ptrType.isConst&&ce(`Cannot convert argument of type ${p.$$.ptrType.name} to parameter type ${this.name}`);var b=p.$$.ptrType.registeredClass,C=We(p.$$.ptr,b,this.registeredClass);return C}var wt=()=>{Object.assign(Mt.prototype,{getPointee(f){return this.rawGetPointee&&(f=this.rawGetPointee(f)),f},destructor(f){this.rawDestructor?.(f)},argPackAdvance:ft,readValueFromPointer:nt,fromWireType:ea})};function Mt(f,p,b,C,k,Z,le,ee,fe,me,xe){this.name=f,this.registeredClass=p,this.isReference=b,this.isConst=C,this.isSmartPointer=k,this.pointeeType=Z,this.sharingPolicy=le,this.rawGetPointee=ee,this.rawConstructor=fe,this.rawShare=me,this.rawDestructor=xe,!k&&p.baseClass===void 0?C?(this.toWireType=Be,this.destructorFunction=null):(this.toWireType=ht,this.destructorFunction=null):this.toWireType=st}var at=(f,p,b)=>{n.hasOwnProperty(f)||Ce("Replacing nonexistent public symbol"),n[f].overloadTable!==void 0&&b!==void 0?n[f].overloadTable[b]=p:(n[f]=p,n[f].argCount=b)},ze=(f,p,b)=>{f=f.replace(/p/g,"i");var C=n["dynCall_"+f];return C(p,...b)},bt,ot=f=>bt.get(f),ln=(f,p,b=[])=>{if(f.includes("j"))return ze(f,p,b);var C=ot(p)(...b);return f[0]=="p"?C>>>0:C},Bn=(f,p)=>(...b)=>ln(f,p,b),yt=(f,p)=>{f=j(f);function b(){return f.includes("j")||f.includes("p")?Bn(f,p):ot(p)}var C=b();return typeof C!="function"&&ce(`unknown function pointer with signature ${f}: ${p}`),C},yi=(f,p)=>{var b=q(p,function(C){this.name=p,this.message=C;var k=new Error(C).stack;k!==void 0&&(this.stack=this.toString()+`
`+k.replace(/^Error(:[^\n]*)?\n/,""))});return b.prototype=Object.create(f.prototype),b.prototype.constructor=b,b.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},b},St,Jt=f=>{var p=_l(f),b=j(p);return kn(p),b},Xt=(f,p)=>{var b=[],C={};function k(Z){if(!C[Z]&&!Ae[Z]){if(Oe[Z]){Oe[Z].forEach(k);return}b.push(Z),C[Z]=!0}}throw p.forEach(k),new St(`${f}: `+b.map(Jt).join([", "]))};function $t(f,p,b,C,k,Z,le,ee,fe,me,xe,je,dt){f>>>=0,p>>>=0,b>>>=0,C>>>=0,k>>>=0,Z>>>=0,le>>>=0,ee>>>=0,fe>>>=0,me>>>=0,xe>>>=0,je>>>=0,dt>>>=0,xe=j(xe),Z=yt(k,Z),ee&&(ee=yt(le,ee)),me&&(me=yt(fe,me)),dt=yt(je,dt);var Ut=De(xe);he(Ut,function(){Xt(`Cannot construct ${xe} due to unbound types`,[C])}),Ke([f,p,b],C?[C]:[],Rt=>{var It;Rt=Rt[0];var vn,xn;C?(vn=Rt.registeredClass,xn=vn.instancePrototype):xn=W.prototype;var F=q(xe,function(...en){if(Object.getPrototypeOf(this)!==H)throw new re("Use 'new' to construct "+xe);if(te.constructor_body===void 0)throw new re(xe+" has no accessible constructor");var Ct=te.constructor_body[en.length];if(Ct===void 0)throw new re(`Tried to invoke ctor of ${xe} with invalid number of parameters (${en.length}) - expected (${Object.keys(te.constructor_body).toString()}) parameters instead!`);return Ct.apply(this,en)}),H=Object.create(xn,{constructor:{value:F}});F.prototype=H;var te=new qe(xe,F,H,dt,vn,Z,ee,me);te.baseClass&&((It=te.baseClass).__derivedClasses??(It.__derivedClasses=[]),te.baseClass.__derivedClasses.push(te));var ge=new Mt(xe,te,!0,!1,!1),Ye=new Mt(xe+"*",te,!1,!1,!1),At=new Mt(xe+" const*",te,!1,!0,!1);return Cr[f]={pointerType:Ye,constPointerType:At},at(Ut,F),[ge,Ye,At]})}var Vt=(f,p)=>{for(var b=[],C=0;C<f;C++)b.push(G[p+C*4>>>2>>>0]);return b};function Wi(f){for(var p=1;p<f.length;++p)if(f[p]!==null&&f[p].destructorFunction===void 0)return!0;return!1}function Dn(f,p){if(!(f instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof f} which is not a function`);var b=q(f.name||"unknownFunctionName",function(){});b.prototype=f.prototype;var C=new b,k=f.apply(C,p);return k instanceof Object?k:C}function qu(f,p,b,C){for(var k=Wi(f),Z=f.length,le="",ee="",fe=0;fe<Z-2;++fe)le+=(fe!==0?", ":"")+"arg"+fe,ee+=(fe!==0?", ":"")+"arg"+fe+"Wired";var me=`
        return function (${le}) {
        if (arguments.length !== ${Z-2}) {
          throwBindingError('function ' + humanName + ' called with ' + arguments.length + ' arguments, expected ${Z-2}');
        }`;k&&(me+=`var destructors = [];
`);var xe=k?"destructors":"null",je=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];p&&(me+="var thisWired = classParam['toWireType']("+xe+`, this);
`);for(var fe=0;fe<Z-2;++fe)me+="var arg"+fe+"Wired = argType"+fe+"['toWireType']("+xe+", arg"+fe+`);
`,je.push("argType"+fe);if(p&&(ee="thisWired"+(ee.length>0?", ":"")+ee),me+=(b||C?"var rv = ":"")+"invoker(fn"+(ee.length>0?", ":"")+ee+`);
`,k)me+=`runDestructors(destructors);
`;else for(var fe=p?1:2;fe<f.length;++fe){var dt=fe===1?"thisWired":"arg"+(fe-2)+"Wired";f[fe].destructorFunction!==null&&(me+=`${dt}_dtor(${dt});
`,je.push(`${dt}_dtor`))}return b&&(me+=`var ret = retType['fromWireType'](rv);
return ret;
`),me+=`}
`,[je,me]}function ta(f,p,b,C,k,Z){var le=p.length;le<2&&ce("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var ee=p[1]!==null&&b!==null,fe=Wi(p),me=p[0].name!=="void",xe=[f,ce,C,k,Re,p[0],p[1]],je=0;je<le-2;++je)xe.push(p[je+2]);if(!fe)for(var je=ee?1:2;je<p.length;++je)p[je].destructorFunction!==null&&xe.push(p[je].destructorFunction);let[dt,Ut]=qu(p,ee,me,Z);dt.push(Ut);var Rt=Dn(Function,dt)(...xe);return q(f,Rt)}var Yu=function(f,p,b,C,k,Z){f>>>=0,b>>>=0,C>>>=0,k>>>=0,Z>>>=0;var le=Vt(p,b);k=yt(C,k),Ke([],[f],ee=>{ee=ee[0];var fe=`constructor ${ee.name}`;if(ee.registeredClass.constructor_body===void 0&&(ee.registeredClass.constructor_body=[]),ee.registeredClass.constructor_body[p-1]!==void 0)throw new re(`Cannot register multiple constructors with identical number of parameters (${p-1}) for class '${ee.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return ee.registeredClass.constructor_body[p-1]=()=>{Xt(`Cannot construct ${ee.name} due to unbound types`,le)},Ke([],le,me=>(me.splice(1,0,null),ee.registeredClass.constructor_body[p-1]=ta(fe,me,null,k,Z),[])),[]})},ul=f=>{f=f.trim();const p=f.indexOf("(");return p!==-1?f.substr(0,p):f},ju=function(f,p,b,C,k,Z,le,ee,fe){f>>>=0,p>>>=0,C>>>=0,k>>>=0,Z>>>=0,le>>>=0;var me=Vt(b,C);p=j(p),p=ul(p),Z=yt(k,Z),Ke([],[f],xe=>{xe=xe[0];var je=`${xe.name}.${p}`;p.startsWith("@@")&&(p=Symbol[p.substring(2)]),ee&&xe.registeredClass.pureVirtualFunctions.push(p);function dt(){Xt(`Cannot call ${je} due to unbound types`,me)}var Ut=xe.registeredClass.instancePrototype,Rt=Ut[p];return Rt===void 0||Rt.overloadTable===void 0&&Rt.className!==xe.name&&Rt.argCount===b-2?(dt.argCount=b-2,dt.className=xe.name,Ut[p]=dt):(z(Ut,p,je),Ut[p].overloadTable[b-2]=dt),Ke([],me,vn=>{var xn=ta(je,vn,xe,Z,le,fe);return Ut[p].overloadTable===void 0?(xn.argCount=b-2,Ut[p]=xn):Ut[p].overloadTable[b-2]=xn,[]}),[]})},na=[],zn=[];function ia(f){f>>>=0,f>9&&--zn[f+1]===0&&(zn[f]=void 0,na.push(f))}var Ku=()=>zn.length/2-5-na.length,Zu=()=>{zn.push(0,1,void 0,1,null,1,!0,1,!1,1),n.count_emval_handles=Ku},Gt={toValue:f=>(f||ce("Cannot use deleted val. handle = "+f),zn[f]),toHandle:f=>{switch(f){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const p=na.pop()||zn.length;return zn[p]=f,zn[p+1]=1,p}}}},Ju={name:"emscripten::val",fromWireType:f=>{var p=Gt.toValue(f);return ia(f),p},toWireType:(f,p)=>Gt.toHandle(p),argPackAdvance:ft,readValueFromPointer:nt,destructorFunction:null};function fl(f){return f>>>=0,ke(f,Ju)}var Qu=(f,p,b)=>{switch(p){case 1:return b?function(C){return this.fromWireType(P[C>>>0])}:function(C){return this.fromWireType(L[C>>>0])};case 2:return b?function(C){return this.fromWireType(y[C>>>1>>>0])}:function(C){return this.fromWireType(S[C>>>1>>>0])};case 4:return b?function(C){return this.fromWireType(U[C>>>2>>>0])}:function(C){return this.fromWireType(G[C>>>2>>>0])};default:throw new TypeError(`invalid integer width (${p}): ${f}`)}};function ef(f,p,b,C){f>>>=0,p>>>=0,b>>>=0,p=j(p);function k(){}k.values={},ke(f,{name:p,constructor:k,fromWireType:function(Z){return this.constructor.values[Z]},toWireType:(Z,le)=>le.value,argPackAdvance:ft,readValueFromPointer:Qu(p,b,C),destructorFunction:null}),he(p,k)}var is=(f,p)=>{var b=Ae[f];return b===void 0&&ce(`${p} has unknown type ${Jt(f)}`),b};function tf(f,p,b){f>>>=0,p>>>=0;var C=is(f,"enum");p=j(p);var k=C.constructor,Z=Object.create(C.constructor.prototype,{value:{value:b},constructor:{value:q(`${C.name}_${p}`,function(){})}});k.values[b]=Z,k[p]=Z}var ra=f=>{if(f===null)return"null";var p=typeof f;return p==="object"||p==="array"||p==="function"?f.toString():""+f},nf=(f,p)=>{switch(p){case 4:return function(b){return this.fromWireType(Y[b>>>2>>>0])};case 8:return function(b){return this.fromWireType(J[b>>>3>>>0])};default:throw new TypeError(`invalid float width (${p}): ${f}`)}},rf=function(f,p,b){f>>>=0,p>>>=0,b>>>=0,p=j(p),ke(f,{name:p,fromWireType:C=>C,toWireType:(C,k)=>k,argPackAdvance:ft,readValueFromPointer:nf(p,b),destructorFunction:null})};function sf(f,p,b,C,k,Z,le){f>>>=0,b>>>=0,C>>>=0,k>>>=0,Z>>>=0;var ee=Vt(p,b);f=j(f),f=ul(f),k=yt(C,k),he(f,function(){Xt(`Cannot call ${f} due to unbound types`,ee)},p-1),Ke([],ee,fe=>{var me=[fe[0],null].concat(fe.slice(1));return at(f,ta(f,me,null,k,Z,le),p-1),[]})}var af=(f,p,b)=>{switch(p){case 1:return b?C=>P[C>>>0]:C=>L[C>>>0];case 2:return b?C=>y[C>>>1>>>0]:C=>S[C>>>1>>>0];case 4:return b?C=>U[C>>>2>>>0]:C=>G[C>>>2>>>0];default:throw new TypeError(`invalid integer width (${p}): ${f}`)}};function of(f,p,b,C,k){f>>>=0,p>>>=0,b>>>=0,p=j(p);var Z=xe=>xe;if(C===0){var le=32-8*b;Z=xe=>xe<<le>>>le}var ee=p.includes("unsigned"),fe=(xe,je)=>{},me;ee?me=function(xe,je){return fe(je,this.name),je>>>0}:me=function(xe,je){return fe(je,this.name),je},ke(f,{name:p,fromWireType:Z,toWireType:me,argPackAdvance:ft,readValueFromPointer:af(p,b,C!==0),destructorFunction:null})}function lf(f,p,b){f>>>=0,b>>>=0;var C=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],k=C[p];function Z(le){var ee=G[le>>>2>>>0],fe=G[le+4>>>2>>>0];return new k(P.buffer,fe,ee)}b=j(b),ke(f,{name:b,fromWireType:Z,argPackAdvance:ft,readValueFromPointer:Z},{ignoreDuplicateRegistrations:!0})}function cf(f,p){f>>>=0,fl(f)}var uf=(f,p,b,C)=>{if(b>>>=0,!(C>0))return 0;for(var k=b,Z=b+C-1,le=0;le<f.length;++le){var ee=f.charCodeAt(le);if(ee>=55296&&ee<=57343){var fe=f.charCodeAt(++le);ee=65536+((ee&1023)<<10)|fe&1023}if(ee<=127){if(b>=Z)break;p[b++>>>0]=ee}else if(ee<=2047){if(b+1>=Z)break;p[b++>>>0]=192|ee>>6,p[b++>>>0]=128|ee&63}else if(ee<=65535){if(b+2>=Z)break;p[b++>>>0]=224|ee>>12,p[b++>>>0]=128|ee>>6&63,p[b++>>>0]=128|ee&63}else{if(b+3>=Z)break;p[b++>>>0]=240|ee>>18,p[b++>>>0]=128|ee>>12&63,p[b++>>>0]=128|ee>>6&63,p[b++>>>0]=128|ee&63}}return p[b>>>0]=0,b-k},ff=(f,p,b)=>uf(f,L,p,b),hf=f=>{for(var p=0,b=0;b<f.length;++b){var C=f.charCodeAt(b);C<=127?p++:C<=2047?p+=2:C>=55296&&C<=57343?(p+=4,++b):p+=3}return p},hl=typeof TextDecoder<"u"?new TextDecoder:void 0,df=(f,p,b)=>{p>>>=0;for(var C=p+b,k=p;f[k]&&!(k>=C);)++k;if(k-p>16&&f.buffer&&hl)return hl.decode(f.subarray(p,k));for(var Z="";p<k;){var le=f[p++];if(!(le&128)){Z+=String.fromCharCode(le);continue}var ee=f[p++]&63;if((le&224)==192){Z+=String.fromCharCode((le&31)<<6|ee);continue}var fe=f[p++]&63;if((le&240)==224?le=(le&15)<<12|ee<<6|fe:le=(le&7)<<18|ee<<12|fe<<6|f[p++]&63,le<65536)Z+=String.fromCharCode(le);else{var me=le-65536;Z+=String.fromCharCode(55296|me>>10,56320|me&1023)}}return Z},pf=(f,p)=>(f>>>=0,f?df(L,f,p):"");function mf(f,p){f>>>=0,p>>>=0,p=j(p);var b=p==="std::string";ke(f,{name:p,fromWireType(C){var k=G[C>>>2>>>0],Z=C+4,le;if(b)for(var ee=Z,fe=0;fe<=k;++fe){var me=Z+fe;if(fe==k||L[me>>>0]==0){var xe=me-ee,je=pf(ee,xe);le===void 0?le=je:(le+="\0",le+=je),ee=me+1}}else{for(var dt=new Array(k),fe=0;fe<k;++fe)dt[fe]=String.fromCharCode(L[Z+fe>>>0]);le=dt.join("")}return kn(C),le},toWireType(C,k){k instanceof ArrayBuffer&&(k=new Uint8Array(k));var Z,le=typeof k=="string";le||k instanceof Uint8Array||k instanceof Uint8ClampedArray||k instanceof Int8Array||ce("Cannot pass non-string to std::string"),b&&le?Z=hf(k):Z=k.length;var ee=la(4+Z+1),fe=ee+4;if(G[ee>>>2>>>0]=Z,b&&le)ff(k,fe,Z+1);else if(le)for(var me=0;me<Z;++me){var xe=k.charCodeAt(me);xe>255&&(kn(fe),ce("String has UTF-16 code units that do not fit in 8 bits")),L[fe+me>>>0]=xe}else for(var me=0;me<Z;++me)L[fe+me>>>0]=k[me];return C!==null&&C.push(kn,ee),ee},argPackAdvance:ft,readValueFromPointer:nt,destructorFunction(C){kn(C)}})}var dl=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,gf=(f,p)=>{for(var b=f,C=b>>1,k=C+p/2;!(C>=k)&&S[C>>>0];)++C;if(b=C<<1,b-f>32&&dl)return dl.decode(L.subarray(f>>>0,b>>>0));for(var Z="",le=0;!(le>=p/2);++le){var ee=y[f+le*2>>>1>>>0];if(ee==0)break;Z+=String.fromCharCode(ee)}return Z},_f=(f,p,b)=>{if(b??(b=2147483647),b<2)return 0;b-=2;for(var C=p,k=b<f.length*2?b/2:f.length,Z=0;Z<k;++Z){var le=f.charCodeAt(Z);y[p>>>1>>>0]=le,p+=2}return y[p>>>1>>>0]=0,p-C},vf=f=>f.length*2,xf=(f,p)=>{for(var b=0,C="";!(b>=p/4);){var k=U[f+b*4>>>2>>>0];if(k==0)break;if(++b,k>=65536){var Z=k-65536;C+=String.fromCharCode(55296|Z>>10,56320|Z&1023)}else C+=String.fromCharCode(k)}return C},Mf=(f,p,b)=>{if(p>>>=0,b??(b=2147483647),b<4)return 0;for(var C=p,k=C+b-4,Z=0;Z<f.length;++Z){var le=f.charCodeAt(Z);if(le>=55296&&le<=57343){var ee=f.charCodeAt(++Z);le=65536+((le&1023)<<10)|ee&1023}if(U[p>>>2>>>0]=le,p+=4,p+4>k)break}return U[p>>>2>>>0]=0,p-C},Sf=f=>{for(var p=0,b=0;b<f.length;++b){var C=f.charCodeAt(b);C>=55296&&C<=57343&&++b,p+=4}return p},yf=function(f,p,b){f>>>=0,p>>>=0,b>>>=0,b=j(b);var C,k,Z,le;p===2?(C=gf,k=_f,le=vf,Z=ee=>S[ee>>>1>>>0]):p===4&&(C=xf,k=Mf,le=Sf,Z=ee=>G[ee>>>2>>>0]),ke(f,{name:b,fromWireType:ee=>{for(var fe=G[ee>>>2>>>0],me,xe=ee+4,je=0;je<=fe;++je){var dt=ee+4+je*p;if(je==fe||Z(dt)==0){var Ut=dt-xe,Rt=C(xe,Ut);me===void 0?me=Rt:(me+="\0",me+=Rt),xe=dt+p}}return kn(ee),me},toWireType:(ee,fe)=>{typeof fe!="string"&&ce(`Cannot pass non-string to C++ string type ${b}`);var me=le(fe),xe=la(4+me+p);return G[xe>>>2>>>0]=me/p,k(fe,xe+4,me+p),ee!==null&&ee.push(kn,xe),xe},argPackAdvance:ft,readValueFromPointer:nt,destructorFunction(ee){kn(ee)}})};function Ef(f,p,b,C,k,Z){f>>>=0,p>>>=0,b>>>=0,C>>>=0,k>>>=0,Z>>>=0,Me[f]={name:j(p),rawConstructor:yt(b,C),rawDestructor:yt(k,Z),fields:[]}}function Tf(f,p,b,C,k,Z,le,ee,fe,me){f>>>=0,p>>>=0,b>>>=0,C>>>=0,k>>>=0,Z>>>=0,le>>>=0,ee>>>=0,fe>>>=0,me>>>=0,Me[f].fields.push({fieldName:j(p),getterReturnType:b,getter:yt(C,k),getterContext:Z,setterArgumentType:le,setter:yt(ee,fe),setterContext:me})}var bf=function(f,p){f>>>=0,p>>>=0,p=j(p),ke(f,{isVoid:!0,name:p,argPackAdvance:0,fromWireType:()=>{},toWireType:(b,C)=>{}})};function Af(f,p,b){return f>>>=0,p>>>=0,b>>>=0,L.copyWithin(f>>>0,p>>>0,p+b>>>0)}var pl=(f,p,b)=>{var C=[],k=f.toWireType(C,b);return C.length&&(G[p>>>2>>>0]=Gt.toHandle(C)),k};function wf(f,p,b){return f>>>=0,p>>>=0,b>>>=0,f=Gt.toValue(f),p=is(p,"emval::as"),pl(p,b,f)}var Rf={},ml=f=>{var p=Rf[f];return p===void 0?j(f):p},sa=[];function Cf(f,p,b,C,k){return f>>>=0,p>>>=0,b>>>=0,C>>>=0,k>>>=0,f=sa[f],p=Gt.toValue(p),b=ml(b),f(p,p[b],C,k)}function Pf(f,p){return f>>>=0,p>>>=0,f=Gt.toValue(f),p=Gt.toValue(p),f==p}var Df=f=>{var p=sa.length;return sa.push(f),p},Lf=(f,p)=>{for(var b=new Array(f),C=0;C<f;++C)b[C]=is(G[p+C*4>>>2>>>0],"parameter "+C);return b};function Uf(f,p,b){p>>>=0;var C=Lf(f,p),k=C.shift();f--;var Z=`return function (obj, func, destructorsRef, args) {
`,le=0,ee=[];b===0&&ee.push("obj");for(var fe=["retType"],me=[k],xe=0;xe<f;++xe)ee.push("arg"+xe),fe.push("argType"+xe),me.push(C[xe]),Z+=`  var arg${xe} = argType${xe}.readValueFromPointer(args${le?"+"+le:""});
`,le+=C[xe].argPackAdvance;var je=b===1?"new func":"func.call";Z+=`  var rv = ${je}(${ee.join(", ")});
`,k.isVoid||(fe.push("emval_returnValue"),me.push(pl),Z+=`  return emval_returnValue(retType, destructorsRef, rv);
`),Z+=`};
`,fe.push(Z);var dt=Dn(Function,fe)(...me),Ut=`methodCaller<(${C.map(Rt=>Rt.name).join(", ")}) => ${k.name}>`;return Df(q(Ut,dt))}function If(f,p){return f>>>=0,p>>>=0,f=Gt.toValue(f),p=Gt.toValue(p),Gt.toHandle(f[p])}function Nf(f){f>>>=0,f>9&&(zn[f+1]+=1)}function Ff(f){return f>>>=0,Gt.toHandle(ml(f))}function Of(){return Gt.toHandle({})}function Bf(f){f>>>=0;var p=Gt.toValue(f);Re(p),ia(f)}function zf(f,p,b){f>>>=0,p>>>=0,b>>>=0,f=Gt.toValue(f),p=Gt.toValue(p),b=Gt.toValue(b),f[p]=b}function kf(f,p){f>>>=0,p>>>=0,f=is(f,"_emval_take_value");var b=f.readValueFromPointer(p);return Gt.toHandle(b)}var Hf=()=>4294901760,Vf=f=>{var p=I.buffer,b=(f-p.byteLength+65535)/65536;try{return I.grow(b),ie(),1}catch{}};function Gf(f){f>>>=0;var p=L.length,b=Hf();if(f>b)return!1;for(var C=(fe,me)=>fe+(me-fe%me)%me,k=1;k<=4;k*=2){var Z=p*(1+.2/k);Z=Math.min(Z,f+100663296);var le=Math.min(b,C(Math.max(f,Z),65536)),ee=Vf(le);if(ee)return!0}return!1}var gl=(f,p)=>{f<128?p.push(f):p.push(f%128|128,f>>7)},Wf=f=>{for(var p={i:"i32",j:"i64",f:"f32",d:"f64",e:"externref",p:"i32"},b={parameters:[],results:f[0]=="v"?[]:[p[f[0]]]},C=1;C<f.length;++C)b.parameters.push(p[f[C]]);return b},Xf=(f,p)=>{var b=f.slice(0,1),C=f.slice(1),k={i:127,p:127,j:126,f:125,d:124,e:111};p.push(96),gl(C.length,p);for(var Z=0;Z<C.length;++Z)p.push(k[C[Z]]);b=="v"?p.push(0):p.push(1,k[b])},$f=(f,p)=>{if(typeof WebAssembly.Function=="function")return new WebAssembly.Function(Wf(p),f);var b=[1];Xf(p,b);var C=[0,97,115,109,1,0,0,0,1];gl(b.length,C),C.push(...b),C.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0);var k=new WebAssembly.Module(new Uint8Array(C)),Z=new WebAssembly.Instance(k,{e:{f}}),le=Z.exports.f;return le},qf=(f,p)=>{if(Ei)for(var b=f;b<f+p;b++){var C=ot(b);C&&Ei.set(C,b)}},Ei,Yf=f=>(Ei||(Ei=new WeakMap,qf(0,bt.length)),Ei.get(f)||0),aa=[],jf=()=>{if(aa.length)return aa.pop();try{bt.grow(1)}catch(f){throw f instanceof RangeError?"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.":f}return bt.length-1},oa=(f,p)=>bt.set(f,p),Pr=(f,p)=>{var b=Yf(f);if(b)return b;var C=jf();try{oa(C,f)}catch(Z){if(!(Z instanceof TypeError))throw Z;var k=$f(f,p);oa(C,k)}return Ei.set(f,C),C},Dr=f=>{Ei.delete(ot(f)),oa(f,null),aa.push(f)};Ge=n.InternalError=class extends Error{constructor(p){super(p),this.name="InternalError"}},O(),re=n.BindingError=class extends Error{constructor(p){super(p),this.name="BindingError"}},B(),Zs(),wt(),St=n.UnboundTypeError=yi(Error,"UnboundTypeError"),Zu();var Kf={i:ne,D:Ie,n:Ze,C:vt,H:Ht,h:$t,g:Yu,a:ju,G:fl,t:ef,f:tf,x:rf,c:sf,j:of,e:lf,k:cf,w:mf,s:yf,o:Ef,l:Tf,I:bf,F:Af,v:wf,z:Cf,b:ia,m:Pf,y:Uf,B:If,u:Nf,q:Ff,A:Of,p:Bf,r:zf,d:kf,E:Gf},_n=Ue(),_l=f=>(_l=_n.L)(f),kn=f=>(kn=_n.N)(f),la=f=>(la=_n.O)(f),vl=f=>(vl=_n.P)(f);function Zf(f){f=Object.assign({},f);var p=C=>k=>C(k)>>>0,b=C=>()=>C()>>>0;return f.L=p(f.L),f.O=p(f.O),f._emscripten_stack_alloc=p(f._emscripten_stack_alloc),f.emscripten_stack_get_current=b(f.emscripten_stack_get_current),f}n.addFunction=Pr,n.removeFunction=Dr;var rs;ve=function f(){rs||xl(),rs||(ve=f)};function xl(){if(se>0||(de(),se>0))return;function f(){rs||(rs=!0,n.calledRun=!0,!D&&(Ee(),r(n),n.onRuntimeInitialized?.(),we()))}n.setStatus?(n.setStatus("Running..."),setTimeout(function(){setTimeout(function(){n.setStatus("")},1),f()},1)):f()}if(n.preInit)for(typeof n.preInit=="function"&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return xl(),t=a,t})})();const Mv="/furniture-quotation/assets/manifold-CUOyaTWM.wasm";class du{static get(){return this.promise!==void 0?this.promise:(this.promise=xv({locateFile:()=>Mv}).then(async e=>(await e.setup(),e)),this.promise)}}Nt(du,"promise");function za(i,e,t){const r=[];for(let s=0;s<=8;s++){const a=s*Math.PI/16;r.push([i+t*Math.cos(a),e+t*Math.sin(a)])}return r}async function Xr(i,e,t){const{CrossSection:n}=await du.get(),r=Math.max(0,Math.min(t,i/2-.1,e/2-.1));if(r<=0)return new n([[i/2,e/2],[-i/2,e/2],[-i/2,-e/2],[i/2,-e/2]]);const s=za(i/2-r,e/2-r,r);za(-(i/2-r),e/2-r,r).reverse(),za(-(i/2-r),-(e/2-r),r).map(([c,u])=>[c,u]);const a=s.map(([c,u])=>[-c,u]).reverse(),o=s.map(([c,u])=>[-c,-u]),l=s.map(([c,u])=>[c,-u]).reverse();return new n([...s,...a,...o,...l])}async function $n(i,e,t){return(await Xr(i,e,0)).extrude(t)}async function pu(i){const{seatWidth:e,seatDepth:t,seatHeight:n,seatThickness:r,backrestHeight:s,backrestTilt:a,legThickness:o,armrestHeight:l,armrestThickness:c,radius:u}=i,d=o/2,m=-(e/2-d),_=e/2-d,v=t/2-d,x=-(t/2-d),g=o*2,h=o*.67,R=o*.7,A=o*.65,T=o*1,I=_-m-o,D=a*Math.PI/180,L=(await Xr(e,t,u)).extrude(r).translate([0,0,n-r]),y=n-g,[S,U,G,Y]=await Promise.all([$n(e,h,g),$n(e,h,g),$n(h,t,g),$n(h,t,g)]),J=S.translate([0,v,y]),ie=U.translate([0,x,y]),K=G.translate([m,(v+x)/2,y]),ae=Y.translate([_,(v+x)/2,y]),$=await Xr(o,o,u*.15),de=$.extrude(n).translate([m,v,0]),Ee=$.extrude(n).translate([_,v,0]),we=$.extrude(n).translate([m,x,0]),He=$.extrude(n).translate([_,x,0]),Xe=o*.5,Q=_-m+o,se=n*.25-Xe/2,[ve]=await Promise.all([$n(Q,Xe,Xe)]),_e=ve.translate([0,v,se]);let Le;if(s>0){const et=$.extrude(s).translate([m,0,0]),Ve=$.extrude(s).translate([_,0,0]),[N]=await Promise.all([$n(I,A,T)]),Ot=N.translate([0,0,s-T]),tt=[.15,.35,.55,.75],Fe=(await Promise.all(tt.map(()=>$n(I,A,R)))).map((w,M)=>w.translate([0,0,tt[M]*s]));let pt=et.add(Ve).add(Ot);for(const w of Fe)pt=pt.add(w);const Ue=o/2*Math.sin(D);Le=pt.rotate([a,0,0]).translate([0,x,n+Ue])}let $e,Ne;if(l>0){const et=v-x+o,Ve=n+l-c,[N,Ot]=await Promise.all([$n(o,et,c),$n(o,et,c)]);$e=N.translate([m,(v+x)/2,Ve]),Ne=Ot.translate([_,(v+x)/2,Ve])}let rt=L.add(J).add(ie).add(K).add(ae).add(de).add(Ee).add(we).add(He).add(_e);return Le!==void 0&&(rt=rt.add(Le)),$e!==void 0&&Ne!==void 0&&(rt=rt.add($e).add(Ne)),rt}async function mu(i){const e=(await Xr(i.topWidth,i.topDepth,i.topRadius)).extrude(i.topThickness).translate([0,0,i.legHeight]),t=i.legWidth*.15,r=(await Xr(i.legWidth,i.legWidth,t)).extrude(i.legHeight),s=i.topWidth/2-i.legInset-i.legWidth/2,a=i.topDepth/2-i.legInset-i.legWidth/2,o=[r.translate([+s,+a,0]),r.translate([+s,-a,0]),r.translate([-s,+a,0]),r.translate([-s,-a,0])].reduce((l,c)=>l.add(c));return e.add(o)}const gu=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],_u=i=>{let e="";for(let t=0;t<16;t++)t%4!=3&&(t>0&&(e+=" "),e+=i[t]||0);return e},Sv=(i=1,e=gu)=>`    <item objectid="${i}" transform="${_u(e)}" />
`,vc=i=>i?i.toISOString().substring(0,10):"";function yv(i,{unit:e="millimeter",title:t="jscad model",author:n="",description:r="",application:s="jscad",creationDate:a=new Date,license:o="",modificationDate:l}={}){i.push(`<?xml version="1.0" encoding="UTF-8"?>
<model unit="${e}" xml:lang="en-US" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02" xmlns:slic3rpe="http://schemas.slic3r.org/3mf/2017/06">
  <metadata name="slic3rpe:Version3mf">1</metadata>
  <metadata name="Title">${t}</metadata>
  <metadata name="Designer">${n}</metadata>
  <metadata name="Description">${r||t}</metadata>
  <metadata name="Copyright"></metadata>
  <metadata name="LicenseTerms">${o}</metadata>
  <metadata name="Rating"></metadata>
  <metadata name="CreationDate">${vc(a)}</metadata>
  <metadata name="ModificationDate">${vc(l||a)}</metadata>
  <metadata name="Application">${s}</metadata>
   `)}function Ev(i,e,t,n){i.push(`<object id="${e}" type="model"${n==null?"":' name="'+n+'"'}>
`),i.push(` <components>
`),t.forEach(({objectID:r,transform:s})=>{Tv(i,r,s)}),i.push(` </components>
`),i.push(`</object>
`)}const Tv=(i,e=1,t=gu)=>{i.push(`    <component objectid="${e}" transform="${_u(t)}" />
`)};function bv(i,e,t,n,r,s){i.push(`  <object id="${e}" type="model"${s?' name="'+s+'"':""}>
   <mesh>
    <vertices>
`);for(let a=0;a<t.length;a+=3)i.push(`     <vertex x="${t[a].toPrecision(r)}" y="${t[a+1].toPrecision(r)}" z="${t[a+2].toPrecision(r)}" />
`);i.push(`    </vertices>
    <triangles>
`);for(let a=0;a<n.length;a+=3)i.push(`     <triangle v1="${n[a]}" v2="${n[a+1]}" v3="${n[a+2]}" />
`);return i.push(`    </triangles>
   </mesh>
  </object>
`),i}const xc={name:"[Content_Types].xml",content:`<?xml version="1.0" encoding="UTF-8"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" />
<Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml" />
<Default Extension="png" ContentType="image/png" />
</Types>`};function Av({meshes:i=[],components:e=[],items:t=[],precision:n=17,header:r}){const s=[];return yv(s,r),s.push(`  <resources>
`),t.length==0&&console.error("3MF empty build! Include items or simple."),i.forEach(({id:a,vertices:o,indices:l,name:c})=>bv(s,a,o,l,n,c)),e.forEach(({id:a,children:o,name:l})=>{Ev(s,a,o,l)}),s.push(`  </resources>
`),s.push(`<build>
`),t.forEach(({objectID:a,transform:o})=>{s.push(Sv(a,o))}),s.push(`</build>
`),s.push(`</model>
`),s.join("")}class wv{constructor(){this.idSeq=0,this.lines=['<?xml version="1.0" encoding="UTF-8"?>','<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">']}get name(){return"_rels/.rels"}addRel(e,t){this.lines.push(`  <Relationship Target="${e}" Id="rel-${++this.idSeq}" Type="${t}" />`)}add3dModel(e){this.addRel(e,"http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel")}addThumbnail(e){this.addRel(e,"http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail")}get content(){return this.lines.join(`
`)+`
</Relationships>`}}class Rv{parse(e,t={}){t=Object.assign({binary:!1},t);const n=t.binary,r=[];let s=0;e.traverse(function(h){if(h.isMesh){const R=h.geometry,A=R.index,T=R.getAttribute("position");s+=A!==null?A.count/3:T.count/3,r.push({object3d:h,geometry:R})}});let a,o=80;if(n===!0){const h=s*2+s*3*4*4+80+4,R=new ArrayBuffer(h);a=new DataView(R),a.setUint32(o,s,!0),o+=4}else a="",a+=`solid exported
`;const l=new X,c=new X,u=new X,d=new X,m=new X,_=new X;for(let h=0,R=r.length;h<R;h++){const A=r[h].object3d,T=r[h].geometry,I=T.index,D=T.getAttribute("position");if(I!==null)for(let P=0;P<I.count;P+=3){const L=I.getX(P+0),y=I.getX(P+1),S=I.getX(P+2);v(L,y,S,D,A)}else for(let P=0;P<D.count;P+=3){const L=P+0,y=P+1,S=P+2;v(L,y,S,D,A)}}return n===!1&&(a+=`endsolid exported
`),a;function v(h,R,A,T,I){l.fromBufferAttribute(T,h),c.fromBufferAttribute(T,R),u.fromBufferAttribute(T,A),I.isSkinnedMesh===!0&&(I.applyBoneTransform(h,l),I.applyBoneTransform(R,c),I.applyBoneTransform(A,u)),l.applyMatrix4(I.matrixWorld),c.applyMatrix4(I.matrixWorld),u.applyMatrix4(I.matrixWorld),x(l,c,u),g(l),g(c),g(u),n===!0?(a.setUint16(o,0,!0),o+=2):(a+=`		endloop
`,a+=`	endfacet
`)}function x(h,R,A){d.subVectors(A,R),m.subVectors(h,R),d.cross(m).normalize(),_.copy(d).normalize(),n===!0?(a.setFloat32(o,_.x,!0),o+=4,a.setFloat32(o,_.y,!0),o+=4,a.setFloat32(o,_.z,!0),o+=4):(a+="	facet normal "+_.x+" "+_.y+" "+_.z+`
`,a+=`		outer loop
`)}function g(h){n===!0?(a.setFloat32(o,h.x,!0),o+=4,a.setFloat32(o,h.y,!0),o+=4,a.setFloat32(o,h.z,!0),o+=4):a+="			vertex "+h.x+" "+h.y+" "+h.z+`
`}}}class Cv{parse(e){let t="",n=0,r=0,s=0;const a=new X,o=new _t,l=new X,c=new ut,u=[];function d(v){let x=0,g=0,h=0;const R=v.geometry,A=new Je,T=R.getAttribute("position"),I=R.getAttribute("normal"),D=R.getAttribute("uv"),P=R.getIndex();if(t+="o "+v.name+`
`,v.material&&v.material.name&&(t+="usemtl "+v.material.name+`
`),T!==void 0)for(let L=0,y=T.count;L<y;L++,x++)a.fromBufferAttribute(T,L),a.applyMatrix4(v.matrixWorld),t+="v "+a.x+" "+a.y+" "+a.z+`
`;if(D!==void 0)for(let L=0,y=D.count;L<y;L++,h++)c.fromBufferAttribute(D,L),t+="vt "+c.x+" "+c.y+`
`;if(I!==void 0){A.getNormalMatrix(v.matrixWorld);for(let L=0,y=I.count;L<y;L++,g++)l.fromBufferAttribute(I,L),l.applyMatrix3(A).normalize(),t+="vn "+l.x+" "+l.y+" "+l.z+`
`}if(P!==null)for(let L=0,y=P.count;L<y;L+=3){for(let S=0;S<3;S++){const U=P.getX(L+S)+1;u[S]=n+U+(I||D?"/"+(D?r+U:"")+(I?"/"+(s+U):""):"")}t+="f "+u.join(" ")+`
`}else for(let L=0,y=T.count;L<y;L+=3){for(let S=0;S<3;S++){const U=L+S+1;u[S]=n+U+(I||D?"/"+(D?r+U:"")+(I?"/"+(s+U):""):"")}t+="f "+u.join(" ")+`
`}n+=x,r+=h,s+=g}function m(v){let x=0;const g=v.geometry,h=v.type,R=g.getAttribute("position");if(t+="o "+v.name+`
`,R!==void 0)for(let A=0,T=R.count;A<T;A++,x++)a.fromBufferAttribute(R,A),a.applyMatrix4(v.matrixWorld),t+="v "+a.x+" "+a.y+" "+a.z+`
`;if(h==="Line"){t+="l ";for(let A=1,T=R.count;A<=T;A++)t+=n+A+" ";t+=`
`}if(h==="LineSegments")for(let A=1,T=A+1,I=R.count;A<I;A+=2,T=A+1)t+="l "+(n+A)+" "+(n+T)+`
`;n+=x}function _(v){let x=0;const g=v.geometry,h=g.getAttribute("position"),R=g.getAttribute("color");if(t+="o "+v.name+`
`,h!==void 0){for(let A=0,T=h.count;A<T;A++,x++)a.fromBufferAttribute(h,A),a.applyMatrix4(v.matrixWorld),t+="v "+a.x+" "+a.y+" "+a.z,R!==void 0&&(o.fromBufferAttribute(R,A),ct.fromWorkingColorSpace(o,hn),t+=" "+o.r+" "+o.g+" "+o.b),t+=`
`;t+="p ";for(let A=1,T=h.count;A<=T;A++)t+=n+A+" ";t+=`
`}n+=x}return e.traverse(function(v){v.isMesh===!0&&d(v),v.isLine===!0&&m(v),v.isPoints===!0&&_(v)}),t}}var Lt=Uint8Array,pn=Uint16Array,Qo=Int32Array,js=new Lt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ks=new Lt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Lo=new Lt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),vu=function(i,e){for(var t=new pn(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new Qo(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return{b:t,r}},xu=vu(js,2),Mu=xu.b,Uo=xu.r;Mu[28]=258,Uo[258]=28;var Su=vu(Ks,0),Pv=Su.b,Mc=Su.r,Io=new pn(32768);for(var Tt=0;Tt<32768;++Tt){var mi=(Tt&43690)>>1|(Tt&21845)<<1;mi=(mi&52428)>>2|(mi&13107)<<2,mi=(mi&61680)>>4|(mi&3855)<<4,Io[Tt]=((mi&65280)>>8|(mi&255)<<8)>>1}var Nn=(function(i,e,t){for(var n=i.length,r=0,s=new pn(e);r<n;++r)i[r]&&++s[i[r]-1];var a=new pn(e);for(r=1;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var o;if(t){o=new pn(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=e-i[r],d=a[i[r]-1]++<<u,m=d|(1<<u)-1;d<=m;++d)o[Io[d]>>l]=c}else for(o=new pn(n),r=0;r<n;++r)i[r]&&(o[r]=Io[a[i[r]-1]++]>>15-i[r]);return o}),Mi=new Lt(288);for(var Tt=0;Tt<144;++Tt)Mi[Tt]=8;for(var Tt=144;Tt<256;++Tt)Mi[Tt]=9;for(var Tt=256;Tt<280;++Tt)Mi[Tt]=7;for(var Tt=280;Tt<288;++Tt)Mi[Tt]=8;var $r=new Lt(32);for(var Tt=0;Tt<32;++Tt)$r[Tt]=5;var Dv=Nn(Mi,9,0),Lv=Nn(Mi,9,1),Uv=Nn($r,5,0),Iv=Nn($r,5,1),ka=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},En=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Ha=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},el=function(i){return(i+7)/8|0},tl=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new Lt(i.subarray(e,t))},Nv=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],nn=function(i,e,t){var n=new Error(e||Nv[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,nn),!t)throw n;return n},Fv=function(i,e,t,n){var r=i.length,s=0;if(!r||e.f&&!e.l)return t||new Lt(0);var a=!t,o=a||e.i!=2,l=e.i;a&&(t=new Lt(r*3));var c=function(rt){var et=t.length;if(rt>et){var Ve=new Lt(Math.max(et*2,rt));Ve.set(t),t=Ve}},u=e.f||0,d=e.p||0,m=e.b||0,_=e.l,v=e.d,x=e.m,g=e.n,h=r*8;do{if(!_){u=En(i,d,1);var R=En(i,d+1,3);if(d+=3,R)if(R==1)_=Lv,v=Iv,x=9,g=5;else if(R==2){var D=En(i,d,31)+257,P=En(i,d+10,15)+4,L=D+En(i,d+5,31)+1;d+=14;for(var y=new Lt(L),S=new Lt(19),U=0;U<P;++U)S[Lo[U]]=En(i,d+U*3,7);d+=P*3;for(var G=ka(S),Y=(1<<G)-1,J=Nn(S,G,1),U=0;U<L;){var ie=J[En(i,d,Y)];d+=ie&15;var A=ie>>4;if(A<16)y[U++]=A;else{var K=0,ae=0;for(A==16?(ae=3+En(i,d,3),d+=2,K=y[U-1]):A==17?(ae=3+En(i,d,7),d+=3):A==18&&(ae=11+En(i,d,127),d+=7);ae--;)y[U++]=K}}var $=y.subarray(0,D),de=y.subarray(D);x=ka($),g=ka(de),_=Nn($,x,1),v=Nn(de,g,1)}else nn(1);else{var A=el(d)+4,T=i[A-4]|i[A-3]<<8,I=A+T;if(I>r){l&&nn(0);break}o&&c(m+T),t.set(i.subarray(A,I),m),e.b=m+=T,e.p=d=I*8,e.f=u;continue}if(d>h){l&&nn(0);break}}o&&c(m+131072);for(var Ee=(1<<x)-1,we=(1<<g)-1,He=d;;He=d){var K=_[Ha(i,d)&Ee],Xe=K>>4;if(d+=K&15,d>h){l&&nn(0);break}if(K||nn(2),Xe<256)t[m++]=Xe;else if(Xe==256){He=d,_=null;break}else{var Q=Xe-254;if(Xe>264){var U=Xe-257,se=js[U];Q=En(i,d,(1<<se)-1)+Mu[U],d+=se}var ve=v[Ha(i,d)&we],_e=ve>>4;ve||nn(3),d+=ve&15;var de=Pv[_e];if(_e>3){var se=Ks[_e];de+=Ha(i,d)&(1<<se)-1,d+=se}if(d>h){l&&nn(0);break}o&&c(m+131072);var Le=m+Q;if(m<de){var $e=s-de,Ne=Math.min(de,Le);for($e+m<0&&nn(3);m<Ne;++m)t[m]=n[$e+m]}for(;m<Le;++m)t[m]=t[m-de]}}e.l=_,e.p=He,e.b=m,e.f=u,_&&(u=1,e.m=x,e.d=v,e.n=g)}while(!u);return m!=t.length&&a?tl(t,0,m):t.subarray(0,m)},qn=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8},Or=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8,i[n+2]|=t>>16},Va=function(i,e){for(var t=[],n=0;n<i.length;++n)i[n]&&t.push({s:n,f:i[n]});var r=t.length,s=t.slice();if(!r)return{t:Eu,l:0};if(r==1){var a=new Lt(t[0].s+1);return a[t[0].s]=1,{t:a,l:1}}t.sort(function(I,D){return I.f-D.f}),t.push({s:-1,f:25001});var o=t[0],l=t[1],c=0,u=1,d=2;for(t[0]={s:-1,f:o.f+l.f,l:o,r:l};u!=r-1;)o=t[t[c].f<t[d].f?c++:d++],l=t[c!=u&&t[c].f<t[d].f?c++:d++],t[u++]={s:-1,f:o.f+l.f,l:o,r:l};for(var m=s[0].s,n=1;n<r;++n)s[n].s>m&&(m=s[n].s);var _=new pn(m+1),v=No(t[u-1],_,0);if(v>e){var n=0,x=0,g=v-e,h=1<<g;for(s.sort(function(D,P){return _[P.s]-_[D.s]||D.f-P.f});n<r;++n){var R=s[n].s;if(_[R]>e)x+=h-(1<<v-_[R]),_[R]=e;else break}for(x>>=g;x>0;){var A=s[n].s;_[A]<e?x-=1<<e-_[A]++-1:++n}for(;n>=0&&x;--n){var T=s[n].s;_[T]==e&&(--_[T],++x)}v=e}return{t:new Lt(_),l:v}},No=function(i,e,t){return i.s==-1?Math.max(No(i.l,e,t+1),No(i.r,e,t+1)):e[i.s]=t},Sc=function(i){for(var e=i.length;e&&!i[--e];);for(var t=new pn(++e),n=0,r=i[0],s=1,a=function(l){t[n++]=l},o=1;o<=e;++o)if(i[o]==r&&o!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)a(32754);s>2&&(a(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(a(r),--s;s>6;s-=6)a(8304);s>2&&(a(s-3<<5|8208),s=0)}for(;s--;)a(r);s=1,r=i[o]}return{c:t.subarray(0,n),n:e}},Br=function(i,e){for(var t=0,n=0;n<e.length;++n)t+=i[n]*e[n];return t},yu=function(i,e,t){var n=t.length,r=el(e+2);i[r]=n&255,i[r+1]=n>>8,i[r+2]=i[r]^255,i[r+3]=i[r+1]^255;for(var s=0;s<n;++s)i[r+s+4]=t[s];return(r+4+n)*8},yc=function(i,e,t,n,r,s,a,o,l,c,u){qn(e,u++,t),++r[256];for(var d=Va(r,15),m=d.t,_=d.l,v=Va(s,15),x=v.t,g=v.l,h=Sc(m),R=h.c,A=h.n,T=Sc(x),I=T.c,D=T.n,P=new pn(19),L=0;L<R.length;++L)++P[R[L]&31];for(var L=0;L<I.length;++L)++P[I[L]&31];for(var y=Va(P,7),S=y.t,U=y.l,G=19;G>4&&!S[Lo[G-1]];--G);var Y=c+5<<3,J=Br(r,Mi)+Br(s,$r)+a,ie=Br(r,m)+Br(s,x)+a+14+3*G+Br(P,S)+2*P[16]+3*P[17]+7*P[18];if(l>=0&&Y<=J&&Y<=ie)return yu(e,u,i.subarray(l,l+c));var K,ae,$,de;if(qn(e,u,1+(ie<J)),u+=2,ie<J){K=Nn(m,_,0),ae=m,$=Nn(x,g,0),de=x;var Ee=Nn(S,U,0);qn(e,u,A-257),qn(e,u+5,D-1),qn(e,u+10,G-4),u+=14;for(var L=0;L<G;++L)qn(e,u+3*L,S[Lo[L]]);u+=3*G;for(var we=[R,I],He=0;He<2;++He)for(var Xe=we[He],L=0;L<Xe.length;++L){var Q=Xe[L]&31;qn(e,u,Ee[Q]),u+=S[Q],Q>15&&(qn(e,u,Xe[L]>>5&127),u+=Xe[L]>>12)}}else K=Dv,ae=Mi,$=Uv,de=$r;for(var L=0;L<o;++L){var se=n[L];if(se>255){var Q=se>>18&31;Or(e,u,K[Q+257]),u+=ae[Q+257],Q>7&&(qn(e,u,se>>23&31),u+=js[Q]);var ve=se&31;Or(e,u,$[ve]),u+=de[ve],ve>3&&(Or(e,u,se>>5&8191),u+=Ks[ve])}else Or(e,u,K[se]),u+=ae[se]}return Or(e,u,K[256]),u+ae[256]},Ov=new Qo([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Eu=new Lt(0),Bv=function(i,e,t,n,r,s){var a=s.z||i.length,o=new Lt(n+a+5*(1+Math.ceil(a/7e3))+r),l=o.subarray(n,o.length-r),c=s.l,u=(s.r||0)&7;if(e){u&&(l[0]=s.r>>3);for(var d=Ov[e-1],m=d>>13,_=d&8191,v=(1<<t)-1,x=s.p||new pn(32768),g=s.h||new pn(v+1),h=Math.ceil(t/3),R=2*h,A=function(N){return(i[N]^i[N+1]<<h^i[N+2]<<R)&v},T=new Qo(25e3),I=new pn(288),D=new pn(32),P=0,L=0,y=s.i||0,S=0,U=s.w||0,G=0;y+2<a;++y){var Y=A(y),J=y&32767,ie=g[Y];if(x[J]=ie,g[Y]=J,U<=y){var K=a-y;if((P>7e3||S>24576)&&(K>423||!c)){u=yc(i,l,0,T,I,D,L,S,G,y-G,u),S=P=L=0,G=y;for(var ae=0;ae<286;++ae)I[ae]=0;for(var ae=0;ae<30;++ae)D[ae]=0}var $=2,de=0,Ee=_,we=J-ie&32767;if(K>2&&Y==A(y-we))for(var He=Math.min(m,K)-1,Xe=Math.min(32767,y),Q=Math.min(258,K);we<=Xe&&--Ee&&J!=ie;){if(i[y+$]==i[y+$-we]){for(var se=0;se<Q&&i[y+se]==i[y+se-we];++se);if(se>$){if($=se,de=we,se>He)break;for(var ve=Math.min(we,se-2),_e=0,ae=0;ae<ve;++ae){var Le=y-we+ae&32767,$e=x[Le],Ne=Le-$e&32767;Ne>_e&&(_e=Ne,ie=Le)}}}J=ie,ie=x[J],we+=J-ie&32767}if(de){T[S++]=268435456|Uo[$]<<18|Mc[de];var rt=Uo[$]&31,et=Mc[de]&31;L+=js[rt]+Ks[et],++I[257+rt],++D[et],U=y+$,++P}else T[S++]=i[y],++I[i[y]]}}for(y=Math.max(y,U);y<a;++y)T[S++]=i[y],++I[i[y]];u=yc(i,l,c,T,I,D,L,S,G,y-G,u),c||(s.r=u&7|l[u/8|0]<<3,u-=7,s.h=g,s.p=x,s.i=y,s.w=U)}else{for(var y=s.w||0;y<a+c;y+=65535){var Ve=y+65535;Ve>=a&&(l[u/8|0]=c,Ve=a),u=yu(l,u+1,i.subarray(y,Ve))}s.i=a}return tl(o,0,n+el(u)+r)},zv=(function(){for(var i=new Int32Array(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&-306674912)^t>>>1;i[e]=t}return i})(),kv=function(){var i=-1;return{p:function(e){for(var t=i,n=0;n<e.length;++n)t=zv[t&255^e[n]]^t>>>8;i=t},d:function(){return~i}}},Tu=function(){var i=1,e=0;return{p:function(t){for(var n=i,r=e,s=t.length|0,a=0;a!=s;){for(var o=Math.min(a+2655,s);a<o;++a)r+=n+=t[a];n=(n&65535)+15*(n>>16),r=(r&65535)+15*(r>>16)}i=n,e=r},d:function(){return i%=65521,e%=65521,(i&255)<<24|(i&65280)<<8|(e&255)<<8|e>>8}}},bu=function(i,e,t,n,r){if(!r&&(r={l:1},e.dictionary)){var s=e.dictionary.subarray(-32768),a=new Lt(s.length+i.length);a.set(s),a.set(i,s.length),i=a,r.w=s.length}return Bv(i,e.level==null?6:e.level,e.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):20:12+e.mem,t,n,r)},Au=function(i,e){var t={};for(var n in i)t[n]=i[n];for(var n in e)t[n]=e[n];return t},Bt=function(i,e,t){for(;t;++e)i[e]=t,t>>>=8},Hv=function(i,e){var t=e.level,n=t==0?0:t<6?1:t==9?3:2;if(i[0]=120,i[1]=n<<6|(e.dictionary&&32),i[1]|=31-(i[0]<<8|i[1])%31,e.dictionary){var r=Tu();r.p(e.dictionary),Bt(i,2,r.d())}},Vv=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&nn(6,"invalid zlib data"),(i[1]>>5&1)==1&&nn(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function Gv(i,e){return bu(i,e||{},0,0)}function V0(i,e){e||(e={});var t=Tu();t.p(i);var n=bu(i,e,e.dictionary?6:2,4);return Hv(n,e),Bt(n,n.length-4,t.d()),n}function G0(i,e){return Fv(i.subarray(Vv(i),-4),{i:2},e,e)}var wu=function(i,e,t,n){for(var r in i){var s=i[r],a=e+r,o=n;Array.isArray(s)&&(o=Au(n,s[1]),s=s[0]),s instanceof Lt?t[a]=[s,o]:(t[a+="/"]=[new Lt(0),o],wu(s,a,t,n))}},Ec=typeof TextEncoder<"u"&&new TextEncoder,Wv=typeof TextDecoder<"u"&&new TextDecoder,Xv=0;try{Wv.decode(Eu,{stream:!0}),Xv=1}catch{}function Vr(i,e){var t;if(Ec)return Ec.encode(i);for(var n=i.length,r=new Lt(i.length+(i.length>>1)),s=0,a=function(c){r[s++]=c},t=0;t<n;++t){if(s+5>r.length){var o=new Lt(s+8+(n-t<<1));o.set(r),r=o}var l=i.charCodeAt(t);l<128||e?a(l):l<2048?(a(192|l>>6),a(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|i.charCodeAt(++t)&1023,a(240|l>>18),a(128|l>>12&63),a(128|l>>6&63),a(128|l&63)):(a(224|l>>12),a(128|l>>6&63),a(128|l&63))}return tl(r,0,s)}var Fo=function(i){var e=0;if(i)for(var t in i){var n=i[t].length;n>65535&&nn(9),e+=n+4}return e},Tc=function(i,e,t,n,r,s,a,o){var l=n.length,c=t.extra,u=o&&o.length,d=Fo(c);Bt(i,e,a!=null?33639248:67324752),e+=4,a!=null&&(i[e++]=20,i[e++]=t.os),i[e]=20,e+=2,i[e++]=t.flag<<1|(s<0&&8),i[e++]=r&&8,i[e++]=t.compression&255,i[e++]=t.compression>>8;var m=new Date(t.mtime==null?Date.now():t.mtime),_=m.getFullYear()-1980;if((_<0||_>119)&&nn(10),Bt(i,e,_<<25|m.getMonth()+1<<21|m.getDate()<<16|m.getHours()<<11|m.getMinutes()<<5|m.getSeconds()>>1),e+=4,s!=-1&&(Bt(i,e,t.crc),Bt(i,e+4,s<0?-s-2:s),Bt(i,e+8,t.size)),Bt(i,e+12,l),Bt(i,e+14,d),e+=16,a!=null&&(Bt(i,e,u),Bt(i,e+6,t.attrs),Bt(i,e+10,a),e+=14),i.set(n,e),e+=l,d)for(var v in c){var x=c[v],g=x.length;Bt(i,e,+v),Bt(i,e+2,g),i.set(x,e+4),e+=4+g}return u&&(i.set(o,e),e+=u),e},$v=function(i,e,t,n,r){Bt(i,e,101010256),Bt(i,e+8,t),Bt(i,e+10,t),Bt(i,e+12,n),Bt(i,e+16,r)};function qv(i,e){e||(e={});var t={},n=[];wu(i,"",t,e);var r=0,s=0;for(var a in t){var o=t[a],l=o[0],c=o[1],u=c.level==0?0:8,d=Vr(a),m=d.length,_=c.comment,v=_&&Vr(_),x=v&&v.length,g=Fo(c.extra);m>65535&&nn(11);var h=u?Gv(l,c):l,R=h.length,A=kv();A.p(l),n.push(Au(c,{size:l.length,crc:A.d(),c:h,f:d,m:v,u:m!=a.length||v&&_.length!=x,o:r,compression:u})),r+=30+m+g+R,s+=76+2*(m+g)+(x||0)+R}for(var T=new Lt(s+22),I=r,D=s-r,P=0;P<n.length;++P){var d=n[P];Tc(T,d.o,d,d.f,d.u,d.c.length);var L=30+d.f.length+Fo(d.extra);T.set(d.c,d.o+L),Tc(T,r,d,d.f,d.u,d.c.length,d.o,d.m),r+=16+L+(d.m?d.m.length:0)}return $v(T,r,n.length,D,I),T}function Yv(i){const e=i.getMesh(),t=e.numProp===3?e.vertProperties:new Float32Array(e.numVert*3);if(e.numProp>3)for(let l=0;l<e.numVert;++l)for(let c=0;c<3;++c)t[l*3+c]=e.vertProperties[l*e.numProp+c];const n={meshes:[{vertices:t,indices:e.triVerts,id:"0"}],components:[],items:[{objectID:"0"}],precision:7,header:{unit:"millimeter",title:"skapa-chair",description:"",application:""}},r=Av(n),s={},a=new wv;a.add3dModel("3D/3dmodel.model"),s["3D/3dmodel.model"]=Vr(r),s[xc.name]=Vr(xc.content),s[a.name]=Vr(a.content);const o=qv(s);return new Blob([o],{type:"application/vnd.ms-package.3dmanufacturing-3dmodel+xml"})}function jv(i){const e=nl(i);e.computeVertexNormals();const t=new dn(e),n=new Rv().parse(t,{binary:!0});return new Blob([n.buffer],{type:"model/stl"})}function Kv(i){const e=nl(i);e.computeVertexNormals();const t=new dn(e),n=new Cv().parse(t);return new Blob([n],{type:"text/plain"})}function nl(i){const e=i.getMesh(),t=new si,n=new Float32Array(3*e.triVerts.length);return e.triVerts.forEach((r,s)=>{n[3*s+0]=e.vertProperties[3*r+0],n[3*s+1]=e.vertProperties[3*r+1],n[3*s+2]=e.vertProperties[3*r+2]}),t.setAttribute("position",new Rn(n,3)),t}class Zv{constructor(){Nt(this,"loading")}load(e,t){this.loading={};const n=this.loading;e.then(r=>{n.result={tmf:{blob:Yv(r),filename:t+".3mf"},stl:{blob:jv(r),filename:t+".stl"},obj:{blob:Kv(r),filename:t+".obj"}}})}take(){const e=this.loading?.result;return e!==void 0&&(this.loading=void 0),e}}const bc=.5,Jv=(i,e,t,n)=>(i/=n/2)<1?t/2*i*i*i+e:t/2*((i-=2)*i*i+2)+e,Ru=(i,e,t,n)=>e+t;class il{constructor(e){Nt(this,"current");Nt(this,"animation");this.current=e}startAnimationTo(e,t=Jv){if(this.current===e||this.animation!==void 0&&this.animation.target===e)return;const n=new Zo;n.start(),this.animation={clock:n,start:this.current,target:e,easingFunction:t}}update(){if(this.animation===void 0)return!1;const e=this.animation.clock.getElapsedTime();if(e<bc){const t=this.animation.easingFunction(e,0,1,bc),n=(this.animation.target-this.animation.start)*t;this.current=this.animation.start+n}else this.current=this.animation.target,this.animation=void 0;return!0}}var Qv=Object.defineProperty,e0=(i,e,t)=>e in i?Qv(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,Hs=(i,e,t)=>e0(i,typeof e!="symbol"?e+"":e,t);const Cu=class Fs{constructor(e,t){Hs(this,"latest"),Hs(this,"listeners",[]),t!==void 0&&(this.listeners=t),this.latest=e,this.send(e)}static sequence(e){const t=new Fs(e.map(n=>n.latest));return e.forEach((n,r)=>{n.addListener(s=>{const a=e.map(o=>o.latest);a[r]=s,t.send(a)})}),t}addListener(e){return this.listeners.push(e),e(this.latest)}block(e){const t=new Fs(this.latest);return e.addListener(()=>{t.send(this.latest)}),t}send(e){this.listeners.forEach(t=>t(e)),this.latest=e}update(e){this.send(e(this.latest))}map(e){const t=new Fs(e(this.latest));return this.addListener(n=>{t.send(e(n))}),t}};Hs(Cu,"unchanged",Symbol("unchanged"));let Cn=Cu;class Un{constructor(){Hs(this,"listeners",[])}static asyncTrigger(e){const t=new Un;return(async()=>{for(;;){const n=await e.next();if(n.done)return;t.send(n.value)}})(),t}static gen(e){return Un.asyncTrigger((async function*(){for(;;)yield await e()})())}static watch(e){const t=new Un;return t.addListener(n=>{e.send(n)}),t}static any(e,t){const n=new Un;return e.addListener(r=>n.send(r)),t.addListener(r=>n.send(r)),n}addListener(e){this.listeners.push(e)}send(e){this.listeners.forEach(t=>t(e))}set(e){const t=new Un;return this.addListener(()=>{t.send(e)}),t}map(e){const t=new Un;return this.addListener(n=>{t.send(e(n))}),t}track(e,t){const n=new Cn(t);return this.addListener(r=>{const s=n.latest,a=e(s,r);n.send(a)}),n}}function t0(i,e){const t=document.createElement(i);for(const n in e){const r=e[n];if(n==="on:input"){const s=n.substring(3);(r instanceof Un||r instanceof Cn)&&t.addEventListener(s,()=>{t instanceof HTMLInputElement&&r.send(t.value)});continue}if(n==="on:click"){const s=n.substring(3);(r instanceof Un||r instanceof Cn)&&t.addEventListener(s,()=>{t instanceof HTMLButtonElement&&r.send(null)});continue}if(typeof r=="string"||typeof r=="number"){n.includes("-")?t.setAttribute(n,String(r)):t[n]=r;continue}if(r instanceof Cn){const s=a=>{if(!["string","number"].includes(typeof a))throw new Error("Don't know how to handle value of type "+typeof r);try{t[n]=a}catch{console.error("Could not set value "+n,t)}};r.addListener(s);continue}throw new Error("Unknown attribute: "+n+", "+r)}return t}function Oo(i){if(typeof i=="string")return document.createTextNode(i);if(typeof i=="number")return document.createTextNode(String(i));if(i instanceof HTMLElement)return i;throw new Error("Unsupported value for child: "+i)}function n0(i){let e=Oo(i.latest);return i.addListener(t=>{var n;const r=e;e=Oo(t),(n=r.parentNode)==null||n.replaceChild(e,r)}),e}function i0(i,e,t){let n;if(typeof i=="string")n=t0(i,e);else{if(i instanceof Cn||i instanceof Un)throw new Error("not implemented");n=i(e)}for(const r of t){let s;r instanceof Cn?s=n0(r):s=Oo(r),n.appendChild(s)}return n}function xt(i,e){if(i===void 0){if(!e.children)throw new Error("Fragment does not have children");if(Array.isArray(e.children))throw new Error("Fragment does not support children: "+JSON.stringify(e.children));if(typeof e.children!="string")throw new Error("Fragment only supports strings, got: "+JSON.stringify(e));return new Text(e.children)}const{children:t,...n}=e,r=r0(t);return i0(i,n,r)}function r0(i){return i===void 0?[]:Array.isArray(i)?i:[i]}const qt=xt,Pu=(i,e)=>{const t=xt("input",{type:"range",id:`${i}-range`,min:e.min,max:e.max,"aria-label":`${e.name} slider`}),n=xt("input",{type:"number",id:i,name:i,min:e.sliderMin,max:e.sliderMax,"aria-label":e.name});return{wrapper:qt("div",{className:"range-input-wrapper",children:[xt("label",{htmlFor:i,children:e.name}),t,xt("div",{className:"range-input-value",children:n})]}),range:t,input:n}},s0=(i,e)=>{const t=xt("input",{type:"range",id:`${i}-range`,min:e.min,max:e.max,"aria-label":`${e.name} slider`}),n=xt("input",{type:"number",id:i,name:i,min:e.sliderMin,max:e.sliderMax,"aria-label":e.name});return{wrapper:qt("div",{className:"range-input-wrapper",children:[xt("label",{htmlFor:i,children:e.name}),t,xt("div",{className:"angle-input-value",children:n})]}),range:t,input:n}},Ga=(i,e)=>{const t=xt("select",{id:i,name:i,"aria-label":e.name,children:e.options.map(r=>xt("option",{value:r.value,children:r.label}))});return{wrapper:qt("div",{className:"select-input-wrapper",children:[xt("label",{htmlFor:i,children:e.name}),t]}),select:t}};function a0(i){const e=i.legThickness,t=e/2,n=-(i.seatWidth/2-t),r=i.seatWidth/2-t,s=i.seatDepth/2-t,a=-(i.seatDepth/2-t),o=e*2,l=e*.67,c=e*.7,u=e*.65,d=e*1,m=r-n-e,_=e*.5,v=r-n+e;let x=0;if(x+=i.seatWidth*i.seatDepth*i.seatThickness,x+=i.seatWidth*l*o,x+=i.seatWidth*l*o,x+=l*i.seatDepth*o,x+=l*i.seatDepth*o,x+=4*e*e*i.seatHeight,x+=v*_*_,i.backrestHeight>0&&(x+=2*e*e*i.backrestHeight,x+=m*u*d,x+=4*m*u*c),i.armrestHeight>0){const g=s-a+e;x+=2*e*g*i.armrestThickness}return x}function o0(i){const e=i.legThickness,t=e/2,n=-(i.seatWidth/2-t),r=i.seatWidth/2-t,s=i.seatDepth/2-t,a=-(i.seatDepth/2-t),o=e*2,l=e*.67,c=e*.7,u=e*.65,d=e*1,m=r-n-e,_=e*.5,v=r-n+e,x=(h,R,A)=>2*(h*R+h*A+R*A);let g=0;if(g+=x(i.seatWidth,i.seatDepth,i.seatThickness),g+=2*x(i.seatWidth,l,o),g+=2*x(l,i.seatDepth,o),g+=4*x(e,e,i.seatHeight),g+=x(v,_,_),i.backrestHeight>0&&(g+=2*x(e,e,i.backrestHeight),g+=x(m,u,d),g+=4*x(m,u,c)),i.armrestHeight>0){const h=s-a+e;g+=2*x(e,h,i.armrestThickness)}return g}function l0(i,e){let t=e.baseMinutes;return i.backrestHeight>0&&(t+=4*(e.perBackSlat??0),t+=i.backrestTilt*(e.complexityPerDegreeOfTilt??0)),i.armrestHeight>0&&(t+=2*(e.perArmrest??0)),t}function c0(i){let e=0;return e+=i.topWidth*i.topDepth*i.topThickness,e+=4*i.legWidth*i.legWidth*i.legHeight,e}function u0(i){const e=(n,r,s)=>2*(n*r+n*s+r*s);let t=0;return t+=e(i.topWidth,i.topDepth,i.topThickness),t+=4*e(i.legWidth,i.legWidth,i.legHeight),t}function f0(i,e){let t=e.baseMinutes*1.5;return t+=i.legInset*(e.perLegInsetComplexity??.5),t+=i.topRadius*(e.perRadiusComplexity??1),t}function Du(i,e,t){const n=t.materials[e.woodType],r=n.finishes[e.finish],s=t.upholstery[e.upholstery];let a,o,l,c;if(i.type==="chair"){const D=i.params;a=a0(D),o=o0(D),l=l0(D,t.labor),c=D.seatWidth*D.seatDepth/1e6*s.pricePerM2}else{const D=i.params;a=c0(D),o=u0(D),l=f0(D,t.labor),c=0}const u=a/1e3*t.wasteFactor,d=u*n.densityKgPerCm3,m=o/1e6,_=u*n.pricePerCm3,v=m*r.pricePerM2,x=l/60*t.laborRatePerHour,g=_+v+c+x,h=g*(t.overheadMultiplier-1),R=g+h,A=R*(t.profitMarginPercent/100),T=i.type==="table"?220:t.minimumPrice,I=Math.max(R+A,T);return{volumeCm3:u,weightKg:d,surfaceAreaM2:m,materialCost:_,finishCost:v,upholsteryCost:c,laborMinutes:l,laborCost:x,subtotal:g,overhead:h,profit:A,total:I,currency:t.currency}}const h0={woodType:"oak",finish:"natural",upholstery:"none"};function zr(i){return{label:xt("span",{className:"quote-row-label",children:i}),value:xt("span",{className:"quote-row-value",children:"--"})}}function d0(){const i=xt("span",{className:"quote-detail-value",children:"--"}),e=xt("span",{className:"quote-detail-value",children:"--"}),t=xt("span",{className:"quote-detail-value",children:"--"}),n=xt("span",{className:"quote-detail-value",children:"--"}),r=xt("span",{className:"quote-detail-value",children:"--"}),s=zr("Material"),a=zr("Finish"),o=zr("Upholstery"),l=zr("Labor"),c=zr("Overhead + Margin"),u=xt("span",{className:"quote-total-value",children:"--"}),d=xt("button",{type:"button",className:"quote-pdf-btn",children:"Export PDF Quote"});return{wrapper:qt("div",{className:"quote-panel",children:[xt("h3",{className:"quote-heading",children:"Quote Summary"}),qt("div",{className:"quote-details",children:[qt("div",{className:"quote-detail-row",children:[xt("span",{className:"quote-detail-label",children:"Wood"}),i]}),qt("div",{className:"quote-detail-row",children:[xt("span",{className:"quote-detail-label",children:"Finish"}),e]}),qt("div",{className:"quote-detail-row",children:[xt("span",{className:"quote-detail-label",children:"Upholstery"}),t]}),qt("div",{className:"quote-detail-row",children:[xt("span",{className:"quote-detail-label",children:"Volume"}),n]}),qt("div",{className:"quote-detail-row",children:[xt("span",{className:"quote-detail-label",children:"Weight"}),r]})]}),qt("div",{className:"quote-breakdown",children:[qt("div",{className:"quote-row",children:[s.label,s.value]}),qt("div",{className:"quote-row",children:[a.label,a.value]}),qt("div",{className:"quote-row",children:[o.label,o.value]}),qt("div",{className:"quote-row",children:[l.label,l.value]}),qt("div",{className:"quote-row",children:[c.label,c.value]})]}),qt("div",{className:"quote-total",children:[xt("span",{className:"quote-total-label",children:"Total"}),u]}),d]}),materialLabel:i,finishLabel:e,upholsteryLabel:t,rows:{material:s,finish:a,upholstery:o,labor:l,overhead:c},totalValue:u,volumeInfo:n,weightInfo:r,pdfButton:d}}function p0(i,e,t,n,r,s){const a=d=>d.toFixed(2),{currency:o}=e,l=o==="EUR"?"€":o;i.materialLabel.textContent=t,i.finishLabel.textContent=n,i.volumeInfo.textContent=`${e.volumeCm3.toFixed(0)} cm³`,i.weightInfo.textContent=`${e.weightKg.toFixed(1)} kg`;const c=i.upholsteryLabel.closest(".quote-detail-row"),u=i.rows.upholstery.label.closest(".quote-row");c&&(c.style.display=s?"":"none"),u&&(u.style.display=s?"":"none"),s&&(i.upholsteryLabel.textContent=r,i.rows.upholstery.value.textContent=`${l}${a(e.upholsteryCost)}`),i.rows.material.value.textContent=`${l}${a(e.materialCost)}`,i.rows.finish.value.textContent=`${l}${a(e.finishCost)}`,i.rows.labor.value.textContent=`${l}${a(e.laborCost)} (${e.laborMinutes} min)`,i.rows.overhead.value.textContent=`${l}${a(e.overhead+e.profit)}`,i.totalValue.textContent=`${l}${a(e.total)}`}const m0="EUR",g0=45,_0=1.15,v0=1.08,x0=25,M0=180,S0={oak:{displayName:"European Oak",pricePerCm3:.012,densityKgPerCm3:67e-5,finishes:{natural:{displayName:"Natural Oil",pricePerM2:8.5},lacquer:{displayName:"Clear Lacquer",pricePerM2:12},"stain-dark":{displayName:"Dark Stain + Lacquer",pricePerM2:18}}},walnut:{displayName:"American Walnut",pricePerCm3:.022,densityKgPerCm3:55e-5,finishes:{natural:{displayName:"Natural Oil",pricePerM2:8.5},lacquer:{displayName:"Clear Lacquer",pricePerM2:12},"stain-dark":{displayName:"Dark Stain + Lacquer",pricePerM2:18}}},beech:{displayName:"European Beech",pricePerCm3:.008,densityKgPerCm3:72e-5,finishes:{natural:{displayName:"Natural Oil",pricePerM2:8.5},whitewash:{displayName:"Whitewash",pricePerM2:15},lacquer:{displayName:"Clear Lacquer",pricePerM2:12}}},pine:{displayName:"Scandinavian Pine",pricePerCm3:.005,densityKgPerCm3:52e-5,finishes:{natural:{displayName:"Natural Oil",pricePerM2:8.5},whitewash:{displayName:"Whitewash",pricePerM2:15},lacquer:{displayName:"Clear Lacquer",pricePerM2:12}}}},y0={none:{displayName:"No Upholstery",pricePerM2:0},fabric:{displayName:"Standard Fabric",pricePerM2:45},leather:{displayName:"Full Grain Leather",pricePerM2:120}},E0={baseMinutes:120,perArmrest:30,perBackSlat:10,complexityPerDegreeOfTilt:2,perLegInsetComplexity:.5,perRadiusComplexity:1},T0={currency:m0,laborRatePerHour:g0,overheadMultiplier:_0,wasteFactor:v0,profitMarginPercent:x0,minimumPrice:M0,materials:S0,upholstery:y0,labor:E0};an.DEFAULT_UP=new X(0,0,1);const zi=["seatWidth","seatDepth","seatHeight","seatThickness","backrestHeight","backrestTilt","legThickness","armrestHeight","armrestThickness","radius"],Lu={seatWidth:440,seatDepth:360,seatHeight:450,seatThickness:20,backrestHeight:520,backrestTilt:8,legThickness:30,armrestHeight:0,armrestThickness:22,radius:3},b0={seatWidth:[300,600],seatDepth:[300,550],seatHeight:[380,520],seatThickness:[15,40],backrestHeight:[200,700],backrestTilt:[0,25],legThickness:[20,60],armrestHeight:[0,300],armrestThickness:[15,40],radius:[0,20]},A0=[{key:"seatWidth",section:"Seat",name:"Width"},{key:"seatDepth",section:"Seat",name:"Depth"},{key:"seatHeight",section:"Seat",name:"Height"},{key:"seatThickness",section:"Seat",name:"Thick"},{key:"backrestHeight",section:"Backrest",name:"Height"},{key:"backrestTilt",section:"Backrest",name:"Tilt",isAngle:!0},{key:"legThickness",section:"Legs",name:"Thick"},{key:"armrestHeight",section:"Armrests",name:"Height"},{key:"armrestThickness",section:"Armrests",name:"Thick"},{key:"radius",section:"Style",name:"Radius"}],ki=["topWidth","topDepth","topThickness","topRadius","legHeight","legWidth","legInset"],Uu={topWidth:1200,topDepth:800,topThickness:30,topRadius:20,legHeight:720,legWidth:60,legInset:40},w0={topWidth:[400,2400],topDepth:[300,1600],topThickness:[10,100],topRadius:[0,100],legHeight:[300,1200],legWidth:[20,200],legInset:[0,300]},R0=[{key:"topWidth",section:"Top",name:"Width"},{key:"topDepth",section:"Top",name:"Depth"},{key:"topThickness",section:"Top",name:"Thickness"},{key:"topRadius",section:"Top",name:"Corner R"},{key:"legHeight",section:"Legs",name:"Height"},{key:"legWidth",section:"Legs",name:"Width"},{key:"legInset",section:"Legs",name:"Inset"}],Kt=new Cn("chair"),Ar={};for(const i of zi)Ar[i]=new Cn(Lu[i]);const wr={};for(const i of ki)wr[i]=new Cn(Uu[i]);const fn=new Cn({...h0}),Kr=new Cn({tag:"static",position:0}),Iu=new Zv;function rl(){if(Kt.latest==="chair"){const i={};for(const e of zi)i[e]=Ar[e].latest;return{type:"chair",params:i}}else{const i={};for(const e of ki)i[e]=wr[e].latest;return{type:"table",params:i}}}function C0(){const i={};if(Kt.latest==="chair")for(const e of zi)i[e]=Vs[e].current;else for(const e of ki)i[e]=Gs[e].current;return i}async function P0(){const i=C0();let e;Kt.latest==="chair"?e=await pu(i):e=await mu(i);const t=nl(e);t.computeVertexNormals(),On.geometry=t,On.clear()}function sl(){const i=rl();let e,t;if(i.type==="chair"){const n=i.params;e=pu(n),t=`chair-${n.seatWidth}x${n.seatDepth}x${n.seatHeight}`}else{const n=i.params;e=mu(n),t=`table-${n.topWidth}x${n.topDepth}x${n.legHeight}`}Iu.load(e,t)}for(const i of zi)Ar[i].addListener(()=>{Kt.latest==="chair"&&sl()});for(const i of ki)wr[i].addListener(()=>{Kt.latest==="table"&&sl()});Kt.addListener(()=>sl());let cr=!0;const On=new dn(new Er(100,100,10),new yr),Bo=.3;On.rotation.x=-1.1;On.rotation.z=Bo;function D0(){const i=new Et;if(Kt.latest==="chair"){const e=new Et().makeRotationX(-1.1),t=new Et().makeRotationZ(.3);i.multiplyMatrices(t,e)}else{const e=new Et().makeRotationX(-1.1),t=new Et().makeRotationZ(.1);i.multiplyMatrices(t,e)}Bi.centerCameraAround(On,i)}const Nu=document.querySelector("canvas"),Bi=new _v(Nu,On);let Os=!0;const Jn=new il(0),Fu=(i,[e,t])=>(i-e)%(t-e)+e;Kr.addListener(i=>{if(i.tag==="static")Jn.startAnimationTo(i.position);else if(i.tag==="moving"){const e=2/Bi.canvasWidth,t=(i.x-i.startPos[0])*e-i.startRot;Jn.startAnimationTo(Fu(t,[-1,1]),Ru)}});const Vs={};for(const i of zi)Vs[i]=new il(Lu[i]),Ar[i].addListener(e=>Vs[i].startAnimationTo(e));const Gs={};for(const i of ki)Gs[i]=new il(Uu[i]),wr[i].addListener(e=>Gs[i].startAnimationTo(e));const ws=document.getElementById("download-3mf"),Rs=document.getElementById("download-stl"),Cs=document.getElementById("download-obj"),al=document.querySelector("#controls"),ol=i=>{const e=document.createElement("h3");return e.className="section-header",e.textContent=i,e},ll=document.createElement("div");ll.className="product-selector";const Zr=document.createElement("button");Zr.className="product-btn active";Zr.textContent="Chair";Zr.addEventListener("click",()=>Kt.send("chair"));const Jr=document.createElement("button");Jr.className="product-btn";Jr.textContent="Table";Jr.addEventListener("click",()=>Kt.send("table"));ll.append(Zr,Jr);al.append(ll);const vi=document.createElement("div");vi.id="dynamic-controls";al.append(vi);let Ws=0;function Ou(){vi.innerHTML="";const i=++Ws;let e="";for(const t of A0){t.section!==e&&(vi.append(ol(t.section)),e=t.section);const[n,r]=b0[t.key],s=t.isAngle?s0(t.key,{name:t.name,min:String(n),max:String(r),sliderMin:String(n),sliderMax:String(r)}):Pu(t.key,{name:t.name,min:String(n),max:String(r),sliderMin:String(n),sliderMax:String(r)});vi.append(s.wrapper);const a=Ar[t.key];s.input.value=`${a.latest}`,s.range.value=`${a.latest}`,a.addListener(o=>{Ws===i&&(s.input.value=`${Math.round(o)}`,s.range.value=`${Math.round(o)}`)}),s.input.addEventListener("change",()=>{const o=parseInt(s.input.value);Number.isNaN(o)||a.send(Math.max(n,Math.min(o,r)))}),s.range.addEventListener("input",()=>{const o=parseInt(s.range.value);Number.isNaN(o)||a.send(Math.max(n,Math.min(o,r)))}),s.input.addEventListener("focus",()=>s.input.select())}}function L0(){vi.innerHTML="";const i=++Ws;let e="";for(const t of R0){t.section!==e&&(vi.append(ol(t.section)),e=t.section);const[n,r]=w0[t.key],s=Pu(t.key,{name:t.name,min:String(n),max:String(r),sliderMin:String(n),sliderMax:String(r)});vi.append(s.wrapper);const a=wr[t.key];s.input.value=`${a.latest}`,s.range.value=`${a.latest}`,a.addListener(o=>{Ws===i&&(s.input.value=`${Math.round(o)}`,s.range.value=`${Math.round(o)}`)}),s.input.addEventListener("change",()=>{const o=parseInt(s.input.value);Number.isNaN(o)||a.send(Math.max(n,Math.min(o,r)))}),s.range.addEventListener("input",()=>{const o=parseInt(s.range.value);Number.isNaN(o)||a.send(Math.max(n,Math.min(o,r)))}),s.input.addEventListener("focus",()=>s.input.select())}}const Ii=document.createElement("div");Ii.id="material-controls";al.append(Ii);const Qn=T0;function Bu(){Ii.innerHTML="",Ii.append(ol("Material"));const i=Object.entries(Qn.materials).map(([r,s])=>({value:r,label:s.displayName})),e=Ga("woodType",{name:"Wood",options:i});Ii.append(e.wrapper),e.select.value=fn.latest.woodType;const t=Ga("finishType",{name:"Finish",options:Object.entries(Qn.materials[fn.latest.woodType].finishes).map(([r,s])=>({value:r,label:s.displayName}))});Ii.append(t.wrapper),t.select.value=fn.latest.finish;let n=null;if(Kt.latest==="chair"){const r=Object.entries(Qn.upholstery).map(([s,a])=>({value:s,label:a.displayName}));n=Ga("upholsteryType",{name:"Seat",options:r}),Ii.append(n.wrapper),n.select.value=fn.latest.upholstery,n.select.addEventListener("change",()=>{const s=fn.latest;fn.send({...s,upholstery:n.select.value})})}e.select.addEventListener("change",()=>{const r=fn.latest,s=e.select.value,a=Qn.materials[s].finishes;t.select.innerHTML="";for(const[l,c]of Object.entries(a)){const u=document.createElement("option");u.value=l,u.textContent=c.displayName,t.select.append(u)}const o=a[r.finish]?r.finish:Object.keys(a)[0];t.select.value=o,fn.send({...r,woodType:s,finish:o})}),t.select.addEventListener("change",()=>{const r=fn.latest;fn.send({...r,finish:t.select.value})})}const cl=d0(),U0=document.getElementById("quote");U0.append(cl.wrapper);function Qr(){const i=rl(),e=fn.latest,t=Du(i,e,Qn),n=Qn.materials[e.woodType],r=n.finishes[e.finish],s=Qn.upholstery[e.upholstery],a=i.type==="chair";p0(cl,t,n.displayName,r.displayName,s.displayName,a)}for(const i of zi)Ar[i].addListener(()=>{Kt.latest==="chair"&&Qr()});for(const i of ki)wr[i].addListener(()=>{Kt.latest==="table"&&Qr()});fn.addListener(()=>Qr());Kt.addListener(()=>Qr());Qr();cl.pdfButton.addEventListener("click",async()=>{const{downloadQuotePDF:i}=await Ac(async()=>{const{downloadQuotePDF:r}=await import("./pdf-export-BayvX167.js");return{downloadQuotePDF:r}},[]),e=rl(),t=fn.latest,n=Du(e,t,Qn);await i({productType:e.type,furnitureParams:e,selection:t,breakdown:n,config:Qn,snapshotDataUrl:Bi.snapshot()})});Kt.addListener(i=>{Zr.classList.toggle("active",i==="chair"),Jr.classList.toggle("active",i==="table"),i==="chair"?(Ou(),On.rotation.x=-1.1):(L0(),On.rotation.x=-1.1),Bu(),Os=!0,cr=!0});Ou();Bu();const zu=i=>{if(i instanceof MouseEvent)return[i.offsetX,i.offsetY];const e=i.target;if(!e||!(e instanceof HTMLElement))return[0,0];const t=e.getBoundingClientRect();return[i.targetTouches[0].clientX-t.x,i.targetTouches[0].clientY-t.y]},I0=Nu,N0=["mousedown","touchstart"],F0=i=>{Bi.render();const[e,t]=zu(i),[n,r,s,a]=Bi.getCanvasPixelColor([e,t]);n===0&&r===0&&s===0&&a===0||(i.preventDefault(),Kr.update(o=>{if(o.tag==="will-move"||o.tag==="moving")return o;const l=new Zo;return l.start(),{tag:"will-move",startRot:Jn.current,startPos:[e,t],clock:l,lastStatic:o}}),Hu.forEach(o=>ku.addEventListener(o,Vu,{passive:!1})),Wu.forEach(o=>Gu.addEventListener(o,Xu)))};N0.forEach(i=>I0.addEventListener(i,F0));const ku=window,Hu=["mousemove","touchmove"],Vu=i=>{const[e]=zu(i);Kr.update(t=>t.tag==="will-move"||t.tag==="moving"?{tag:"moving",x:e,startPos:t.startPos,startRot:t.startRot,lastStatic:t.lastStatic,clock:t.clock}:t)},Gu=window,Wu=["mouseup","touchend"],Xu=()=>{Hu.forEach(e=>ku.removeEventListener(e,Vu)),Wu.forEach(e=>Gu.removeEventListener(e,Xu));const i=e=>({[-1]:{tag:"static",position:0},0:{tag:"static",position:1},1:{tag:"static",position:0}})[e.position];Kr.update(e=>{if(e.tag==="will-move")return i(e.lastStatic);if(e.tag==="static")return i(e);const t=e.clock.getElapsedTime(),n=Math.abs(e.x-e.startPos[0]);if(t<.3&&n<15)return i(e.lastStatic);const r=Math.round(Fu(Jn.current,[-1,1]));return r<=-1?{tag:"static",position:-1}:1<=r?{tag:"static",position:1}:{tag:"static",position:0}})};let Gr=!1;const zo=document.getElementById("btn-rotate"),O0=document.getElementById("btn-reset-view");zo?.addEventListener("click",()=>{Gr=!Gr,zo.classList.toggle("active",Gr)});O0?.addEventListener("click",()=>{Gr=!1,zo?.classList.remove("active"),Jn.startAnimationTo(0,Ru),Kr.send({tag:"static",position:0}),cr=!0});let kr;function $u(i){requestAnimationFrame($u);const e=Iu.take();e!==void 0&&(ws.href.startsWith("blob:")&&URL.revokeObjectURL(ws.href),ws.href=URL.createObjectURL(e.tmf.blob),ws.download=e.tmf.filename,Rs.href.startsWith("blob:")&&URL.revokeObjectURL(Rs.href),Rs.href=URL.createObjectURL(e.stl.blob),Rs.download=e.stl.filename,Cs.href.startsWith("blob:")&&URL.revokeObjectURL(Cs.href),Cs.href=URL.createObjectURL(e.obj.blob),Cs.download=e.obj.filename);const t=Jn.update();Gr?(Jn.current+=.005,On.rotation.z=Jn.current*Math.PI+Bo):t&&(On.rotation.z=Jn.current*Math.PI+Bo);const n=Kt.latest==="chair"?zi:ki,r=Kt.latest==="chair"?Vs:Gs;n.reduce((o,l)=>r[l].update()||o,!1)&&(Os=!0),Os&&(kr===void 0||i-kr>100)&&(kr=i,Os=!1,P0().then(()=>{kr=void 0,cr=!0}).catch(o=>{console.error("reloadModel failed:",o),kr=void 0})),Bi.resizeCanvas()&&(cr=!0),cr&&(D0(),cr=!1),Bi.render()}$u(performance.now());export{Ac as _,G0 as u,V0 as z};
