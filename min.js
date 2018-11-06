var neverland=function(e){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n=document.defaultView,r=1,i=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,o="http://www.w3.org/2000/svg",a="connected",u="dis"+a,c=/^(?:style|textarea)$/i,l="_hyper: "+(Math.random()*new Date|0)+";",f="\x3c!--"+l+"--\x3e",s=n.Event;try{new s("Event")}catch(e){s=function(e){var t=document.createEvent("Event");return t.initEvent(e,!1,!1),t}}var d,h=n.Map||function(){var e=[],t=[];return{get:function(n){return t[e.indexOf(n)]},set:function(n,r){t[e.push(n)-1]=r}}},v=0,p=n.WeakMap||function(){var e=l+v++;return{get:function(t){return t[e]},set:function(t,n){Object.defineProperty(t,e,{configurable:!0,value:n})}}},m=n.WeakSet||function(){var e=new p;return{add:function(t){e.set(t,!0)},has:function(t){return!0===e.get(t)}}},g=Array.isArray||(d={}.toString,function(e){return"[object Array]"===d.call(e)}),b=l.trim||function(){return this.replace(/^\s+|\s+$/g,"")};function y(){return this}var w=function(e,t){var n="_"+e+"$";return{get:function(){return this[n]||N(this,n,t.call(this,e))},set:function(e){N(this,n,e)}}},N=function(e,t,n){return Object.defineProperty(e,t,{configurable:!0,value:"function"==typeof n?function(){return e._wire$=n.apply(this,arguments)}:n})[t]},x={},E={},k=[],C=E.hasOwnProperty,A=0,S={attributes:x,define:function(e,t){e.indexOf("-")<0?(e in E||(A=k.push(e)),E[e]=t):x[e]=t},invoke:function(e,t){for(var n=0;n<A;n++){var r=k[n];if(C.call(e,r))return E[r](e[r],t)}}},O=function(e,t){return j(e).createElement(t)},j=function(e){return e.ownerDocument||e},T=function(e){return j(e).createDocumentFragment()},M=function(e,t){return j(e).createTextNode(t)},L=" \\f\\n\\r\\t",_="[ "+L+"]+[^  \\f\\n\\r\\t\\/>\"'=]+",$="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",D="(?:=(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|[^  \\f\\n\\r\\t\\/>\"'=]+))?)",P=new RegExp($+_+D+"+)([ "+L+"]*/?>)","g"),R=new RegExp($+_+D+"*)([ "+L+"]*/>)","g"),F=T(document),z="append"in F,H="content"in O(document,"template");F.appendChild(M(F,"g")),F.appendChild(M(F,""));var W=1===F.cloneNode(!0).childNodes.length,B="importNode"in document,Z=z?function(e,t){e.append.apply(e,t)}:function(e,t){for(var n=t.length,r=0;r<n;r++)e.appendChild(t[r])},V=new RegExp("("+_+"=)(['\"]?)"+f+"\\2","gi"),q=function(e,t,n,r){return"<"+t+n.replace(V,G)+r},G=function(e,t,n){return t+(n||'"')+l+(n||'"')},I=function(e,t){return("ownerSVGElement"in e?te:ee)(e,t.replace(P,q))},J=W?function(e){for(var t=e.cloneNode(),n=e.childNodes||[],r=n.length,i=0;i<r;i++)t.appendChild(J(n[i]));return t}:function(e){return e.cloneNode(!0)},K=function(e){for(var t=[],n=e.childNodes,i=n.length,o=0;o<i;o++)n[o].nodeType===r&&t.push(n[o]);return t},Q=B?function(e,t){return e.importNode(t,!0)}:function(e,t){return J(t)},U=[].slice,X=function(e){return Y(e)},Y=function(e){if(e.propertyIsEnumerable("raw")||!Object.isFrozen(e.raw)||/Firefox\/(\d+)/.test((n.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){var t={};Y=function(e){var n="^"+e.join("^");return t[n]||(t[n]=e)}}else Y=function(e){return e};return Y(e)},ee=H?function(e,t){var n=O(e,"template");return n.innerHTML=t,n.content}:function(e,t){var n=O(e,"template"),r=T(e);if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){var i=RegExp.$1;n.innerHTML="<table>"+t+"</table>",Z(r,U.call(n.querySelectorAll(i)))}else n.innerHTML=t,Z(r,U.call(n.childNodes));return r},te=H?function(e,t){var n=T(e),r=j(e).createElementNS(o,"svg");return r.innerHTML=t,Z(n,U.call(r.childNodes)),n}:function(e,t){var n=T(e),r=O(e,"div");return r.innerHTML='<svg xmlns="'+o+'">'+t+"</svg>",Z(n,U.call(r.firstChild.childNodes)),n};function ne(e){this.childNodes=e,this.length=e.length,this.first=e[0],this.last=e[this.length-1],this._=null}ne.prototype.valueOf=function(e){var t=null==this._;return t&&(this._=T(this.first)),(t||e)&&Z(this._,this.childNodes),this._},ne.prototype.remove=function(){this._=null;var e=this.first,t=this.last;if(2===this.length)t.parentNode.removeChild(t);else{var n=j(e).createRange();n.setStartBefore(this.childNodes[1]),n.setEndAfter(t),n.deleteContents()}return e};var re=function(e,t,n){e.unshift(e.indexOf.call(t.childNodes,n))},ie=function(e,t,n){return{type:e,name:n,node:t,path:function(e){var t,n=[];switch(e.nodeType){case r:case 11:t=e;break;case 8:t=e.parentNode,re(n,t,e);break;default:t=e.ownerElement}for(e=t;t=t.parentNode;e=t)re(n,t,e);return n}(t)}},oe=function(e,t){for(var n=t.length,r=0;r<n;r++)e=e.childNodes[t[r]];return e},ae=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,ue=function(e,n){var r,i;return function(o){switch(t(o)){case"object":if(o){if("object"===r){if(!n&&i!==o)for(var a in i)a in o||(e[a]="")}else n?e.value="":e.cssText="";var u=n?{}:e;for(var c in o){var l=o[c],f="number"!=typeof l||ae.test(c)?l:l+"px";/^--/.test(c)?u.setProperty(c,f):u[c]=f}r="object",n?e.value=fe(i=u):i=o;break}default:i!=o&&(r="string",i=o,n?e.value=o||"":e.cssText=o||"")}}},ce=/([^A-Z])([A-Z]+)/g,le=function(e,t,n){return t+"-"+n.toLowerCase()},fe=function(e){var t=[];for(var n in e)t.push(n.replace(ce,le),":",e[n],";");return t.join("")},se=function(e,t,n,r,i,o){if(i-r<2)t.insertBefore(e(n[r],1),o);else{for(var a=t.ownerDocument.createDocumentFragment();r<i;)a.appendChild(e(n[r++],1));t.insertBefore(a,o)}},de=function(e,t){return e==t},he=function(e){return e},ve=function(e,t,n,r,i,o,a){var u=o-i;if(u<1)return-1;for(;n-t>=u;){for(var c=t,l=i;c<n&&l<o&&a(e[c],r[l]);)c++,l++;if(l===o)return t;t=c+1}return-1},pe=function(e,t,n,r,i){return n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:i},me=function(e,t,n,r,i){if(i-r<2)t.removeChild(e(n[r],-1));else{var o=t.ownerDocument.createRange();o.setStartBefore(e(n[r],-1)),o.setEndAfter(e(n[i-1],-1)),o.deleteContents()}},ge="undefined"==typeof Map?function(){var e=[],t=[];return{has:function(t){return-1<e.indexOf(t)},get:function(n){return t[e.indexOf(n)]},set:function(n){var r=e.indexOf(n);t[r<0?e.push(n)-1:r]=n}}}:Map,be=function(e,t,n){for(var r=1,i=t;r<i;){var o=(r+i)/2>>>0;n<e[o]?i=o:r=o+1}return r},ye=function(e,t,n,r,i,o,a,u,c,l,f,s,d){!function(e,t,n,r,i,o,a,u,c){for(var l=new ge,f=e.length,s=a,d=0;d<f;)switch(e[d++]){case 0:i++,s++;break;case 1:l.set(r[i],1),se(t,n,r,i++,i,s<u?t(o[s],1):c);break;case-1:s++}for(d=0;d<f;)switch(e[d++]){case 0:a++;break;case-1:l.has(o[a])?a++:me(t,n,o,a++,a)}}(function(e,t,n,r,i,o,a){var u,c,l,f,s,d,h,v=n+o,p=[];e:for(u=0;u<=v;u++){if(u>50)return null;for(h=u-1,s=u?p[u-1]:[0,0],d=p[u]=[],c=-u;c<=u;c+=2){for(l=(f=c===-u||c!==u&&s[h+c-1]<s[h+c+1]?s[h+c+1]:s[h+c-1]+1)-c;f<o&&l<n&&a(r[i+f],e[t+l]);)f++,l++;if(f===o&&l===n)break e;d[u+c]=f}}var m=Array(u/2+v/2),g=m.length-1;for(u=p.length-1;u>=0;u--){for(;f>0&&l>0&&a(r[i+f-1],e[t+l-1]);)m[g--]=0,f--,l--;if(!u)break;h=u-1,s=u?p[u-1]:[0,0],(c=f-l)==-u||c!==u&&s[h+c-1]<s[h+c+1]?(l--,m[g--]=1):(f--,m[g--]=-1)}return m}(n,r,o,a,u,l,s)||function(e,t,n,r,i,o,a,u){var c=0,l=r<u?r:u,f=Array(l++),s=Array(l);s[0]=-1;for(var d=1;d<l;d++)s[d]=a;for(var h=new ge,v=o;v<a;v++)h.set(i[v],v);for(var p=t;p<n;p++){var m=h.get(e[p]);null!=m&&-1<(c=be(s,l,m))&&(s[c]=m,f[c]={newi:p,oldi:m,prev:f[c-1]})}for(c=--l,--a;s[c]>a;)--c;l=u+r-c;var g=Array(l),b=f[c];for(--n;b;){for(var y=b,w=y.newi,N=y.oldi;n>w;)g[--l]=1,--n;for(;a>N;)g[--l]=-1,--a;g[--l]=0,--n,--a,b=b.prev}for(;n>=t;)g[--l]=1,--n;for(;a>=o;)g[--l]=-1,--a;return g}(n,r,i,o,a,u,c,l),e,t,n,r,a,u,f,d)},we=function(e,t,n,r){r||(r={});for(var i=r.compare||de,o=r.node||he,a=null==r.before?null:o(r.before,0),u=t.length,c=u,l=0,f=n.length,s=0;l<c&&s<f&&i(t[l],n[s]);)l++,s++;for(;l<c&&s<f&&i(t[c-1],n[f-1]);)c--,f--;var d=l===c,h=s===f;if(d&&h)return n;if(d&&s<f)return se(o,e,n,s,f,pe(o,t,l,u,a)),n;if(h&&l<c)return me(o,e,t,l,c),n;var v=c-l,p=f-s,m=-1;if(v<p){if(-1<(m=ve(n,s,f,t,l,c,i)))return se(o,e,n,s,m,o(t[l],0)),se(o,e,n,m+v,f,pe(o,t,c,u,a)),n}else if(p<v&&-1<(m=ve(t,l,c,n,s,f,i)))return me(o,e,t,l,m),me(o,e,t,m+p,c),n;return v<2||p<2?(se(o,e,n,s,f,o(t[l],0)),me(o,e,t,l,c),n):v===p&&function(e,t,n,r,i,o){for(;r<i&&o(n[r],e[t-1]);)r++,t--;return 0===t}(n,f,t,l,c,i)?(se(o,e,n,s,f,pe(o,t,c,u,a)),n):(ye(o,e,n,s,f,p,t,l,c,v,u,i,a),n)},Ne=new m;function xe(){}xe.prototype=Object.create(null);var Ee=function(e){return{html:e}},ke=function e(t,n){return"ELEMENT_NODE"in t?t:t.constructor===ne?1/n<0?n?t.remove():t.last:n?t.valueOf(!0):t.first:e(t.render(),n)},Ce=function(e,t,n){for(var r=new xe,i=e.attributes,o=U.call(i),a=[],u=o.length,c=0;c<u;c++){var f=o[c];if(f.value===l){var s=f.name;if(!(s in r)){var d=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/,"$1");r[s]=i[d]||i[d.toLowerCase()],t.push(ie("attr",r[s],d))}a.push(f)}}for(var h=a.length,v=0;v<h;v++){var p=a[v];/^id$/i.test(p.name)?e.removeAttribute(p.name):e.removeAttributeNode(a[v])}var m=e.nodeName;if(/^script$/i.test(m)){for(var g=document.createElement(m),b=0;b<i.length;b++)g.setAttributeNode(i[b].cloneNode(!0));g.textContent=e.textContent,e.parentNode.replaceChild(g,e)}},Ae=function(e,t){t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then(Ee).then(t):Promise.resolve(S.invoke(e,t)).then(t)},Se=function(e){return null!=e&&"then"in e},Oe=/^(?:form|list)$/i,je=function(e,n){var r,i={node:ke,before:e},o=!1;return function a(u){switch(t(u)){case"string":case"number":case"boolean":o?r!==u&&(r=u,n[0].textContent=u):(o=!0,r=u,n=we(e.parentNode,n,[M(e,u)],i));break;case"function":a(u(e));break;case"object":case"undefined":if(null==u){o=!1,n=we(e.parentNode,n,[],i);break}default:if(o=!1,r=u,g(u))if(0===u.length)n.length&&(n=we(e.parentNode,n,[],i));else switch(t(u[0])){case"string":case"number":case"boolean":a({html:u});break;case"object":if(g(u[0])&&(u=u.concat.apply([],u)),Se(u[0])){Promise.all(u).then(a);break}default:n=we(e.parentNode,n,u,i)}else!function(e){return"ELEMENT_NODE"in e||e instanceof ne||e instanceof y}(u)?Se(u)?u.then(a):"placeholder"in u?Ae(u,a):"text"in u?a(String(u.text)):"any"in u?a(u.any):"html"in u?n=we(e.parentNode,n,U.call(I(e,[].concat(u.html).join("")).childNodes),i):a("length"in u?U.call(u):S.invoke(u,a)):n=we(e.parentNode,n,11===u.nodeType?U.call(u.childNodes):[u],i)}}},Te=function(e,t,n){var i,o="ownerSVGElement"in e;if("style"===t)return function(e,t,n){if(n){var r=t.cloneNode(!0);return r.value="",e.setAttributeNode(r),ue(r,n)}return ue(e.style,n)}(e,n,o);if(/^on/.test(t)){var c=t.slice(2);return c===a||c===u?(_e&&(_e=!1,function(){var e=function(e,n){for(var i=new s(n),o=e.length,a=0;a<o;a++){var u=e[a];u.nodeType===r&&t(u,i)}},t=function e(t,n){Ne.has(t)&&t.dispatchEvent(n);for(var r=t.children||K(t),i=r.length,o=0;o<i;o++)e(r[o],n)};try{new MutationObserver(function(t){for(var n=t.length,r=0;r<n;r++){var i=t[r];e(i.removedNodes,u),e(i.addedNodes,a)}}).observe(document,{subtree:!0,childList:!0})}catch(t){document.addEventListener("DOMNodeRemoved",function(t){e([t.target],u)},!1),document.addEventListener("DOMNodeInserted",function(t){e([t.target],a)},!1)}}()),Ne.add(e)):t.toLowerCase()in e&&(c=c.toLowerCase()),function(t){i!==t&&(i&&e.removeEventListener(c,i,!1),i=t,t&&e.addEventListener(c,t,!1))}}if("data"===t||!o&&t in e&&!Oe.test(t))return function(n){i!==n&&(i=n,e[t]!==n&&(e[t]=n,null==n&&e.removeAttribute(t)))};if(t in S.attributes)return function(n){i=S.attributes[t](e,n),e.setAttribute(t,null==i?"":i)};var l=!1,f=n.cloneNode(!0);return function(t){i!==t&&(i=t,f.value!==t&&(null==t?(l&&(l=!1,e.removeAttributeNode(f)),f.value=t):(f.value=t,l||(l=!0,e.setAttributeNode(f)))))}},Me=function(e){var n;return function r(i){if(n!==i){n=i;var o=t(i);"object"===o&&i?Se(i)?i.then(r):"placeholder"in i?Ae(i,r):r("text"in i?String(i.text):"any"in i?i.any:"html"in i?[].concat(i.html).join(""):"length"in i?U.call(i).join(""):S.invoke(i,r)):"function"===o?r(i(e)):e.textContent=null==i?"":i}}},Le={create:function(e,t){for(var n=[],r=t.length,i=0;i<r;i++){var o=t[i],a=oe(e,o.path);switch(o.type){case"any":n.push(je(a,[]));break;case"attr":n.push(Te(a,o.name,o.node));break;case"text":n.push(Me(a)),a.textContent=""}}return n},find:function e(t,n,i){for(var o=t.childNodes,a=o.length,u=0;u<a;u++){var s=o[u];switch(s.nodeType){case r:Ce(s,n,i),e(s,n,i);break;case 8:s.textContent===l&&(i.shift(),n.push(c.test(t.nodeName)?ie("text",t):ie("any",s)));break;case 3:c.test(t.nodeName)&&b.call(s.textContent)===f&&(i.shift(),n.push(ie("text",t)))}}}},_e=!0;var $e=new p,De=function(){try{var e=new p,t=Object.freeze([]);if(e.set(t,!0),!e.get(t))throw t;return e}catch(t){return new h}}();function Pe(e){var t=$e.get(this);return t&&t.template===X(e)?Re.apply(t.updates,arguments):function(e){e=X(e);var t=De.get(e)||function(e){var t=[],n=e.join(f).replace(Fe,ze),r=I(this,n);Le.find(r,t,e.slice());var i={fragment:r,paths:t};return De.set(e,i),i}.call(this,e),n=Q(this.ownerDocument,t.fragment),r=Le.create(n,t.paths);$e.set(this,{template:e,updates:r}),Re.apply(r,arguments),this.textContent="",this.appendChild(n)}.apply(this,arguments),this}function Re(){for(var e=arguments.length,t=1;t<e;t++)this[t-1](arguments[t])}var Fe=R,ze=function(e,t,n){return i.test(t)?e:"<"+t+n+"></"+t+">"},He=new p,We=function(e,t){return null==e?Be(t||"html"):Ze(e,t||"html")},Be=function(e){var t,n,r,i,a;return function(u){u=X(u);var c=i!==u;return c&&(i=u,r=T(document),n="svg"===e?document.createElementNS(o,"svg"):r,a=Pe.bind(n)),a.apply(null,arguments),c&&("svg"===e&&Z(r,U.call(n.childNodes)),t=Ve(r)),t}},Ze=function(e,t){var n=t.indexOf(":"),r=He.get(e),i=t;return-1<n&&(i=t.slice(n+1),t=t.slice(0,n)||"html"),r||He.set(e,r={}),r[i]||(r[i]=Be(t))},Ve=function(e){for(var t=e.childNodes,n=t.length,i=[],o=0;o<n;o++){var a=t[o];a.nodeType!==r&&0===b.call(a.textContent).length||i.push(a)}return 1===i.length?i[0]:new ne(i)},qe=function(e){return Pe.bind(e)},Ge=S.define;function Ie(e){return arguments.length<2?null==e?Be("html"):"string"==typeof e?Ie.wire(null,e):"raw"in e?Be("html")(e):"nodeType"in e?Ie.bind(e):Ze(e,"html"):("raw"in e?Be("html"):Ie.wire).apply(null,arguments)}Ie.Component=y,Ie.bind=qe,Ie.define=Ge,Ie.diff=we,Ie.hyper=Ie,Ie.wire=We,Ie._={WeakMap:p,WeakSet:m},function(e){var n=new p,r=Object.create,i=function(e,t){var n={w:null,p:null};return t.set(e,n),n};Object.defineProperties(y,{for:{configurable:!0,value:function(e,o){return function(e,n,o,a){var u=n.get(e)||i(e,n);switch(t(a)){case"object":case"function":var c=u.w||(u.w=new p);return c.get(a)||function(e,t,n){return e.set(t,n),n}(c,a,new e(o));default:var l=u.p||(u.p=r(null));return l[a]||(l[a]=new e(o))}}(this,n.get(e)||function(e){var t=new h;return n.set(e,t),t}(e),e,null==o?"default":o)}}}),Object.defineProperties(y.prototype,{handleEvent:{value:function(e){var t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e)}},html:w("html",e),svg:w("svg",e),state:w("state",function(){return this.defaultState}),defaultState:{get:function(){return{}}},dispatch:{value:function(e,t){var n=this._wire$;if(n){var r=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:t});return r.component=this,(n.dispatchEvent?n:n.childNodes[0]).dispatchEvent(r)}return!1}},setState:{value:function(e,t){var n=this.state,r="function"==typeof e?e.call(this,n):e;for(var i in r)n[i]=r[i];return!1!==t&&this.render(),this}}})}(Be);var Je=0,Ke=null,Qe=null,Ue=new Ie._.WeakMap,Xe=function(e,t,n){Je=0,Qe=e,Ke=t,n&&Ue.set(Ke,{clock:0});var r=e(t).valueOf(!1),i=Ue.get(Ke);return i.fairy&&(cancelAnimationFrame(i.clock),i.clock=requestAnimationFrame(i.fairy)),Qe=null,Ke=null,r},Ye=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Xe(e,t,!0)}};return e.default=Ye,e.Component=y,e.bind=qe,e.define=Ge,e.wire=We,e.neverland=Ye,e.html=function(){return We(Ke,"html").apply(void 0,arguments)},e.svg=function(){return We(Ke,"svg").apply(void 0,arguments)},e.useEffect=function(e){Ue.get(Ke).fairy=e},e.useReducer=function(e,t){var n=Ue.get(Ke);return n.burp||function(e,t,n){var r=Qe,i=Ke;return e.burp=[n,function(o){n=t(n,o),e.burp[0]=n,Xe(r,i,!1)}]}(n,e,t)},e.useRef=function(e){var t=Ue.get(Ke);return t.watch||(t.watch={current:e})},e.useState=function(e){var t=Je++,n=Ue.get(Ke);return n[t]||function(e,t,n){var r=Qe,i=Ke;return e[t]=[n,function(n){e[t][0]=n,Xe(r,i,!1)}]}(n,t,e)},e}({});