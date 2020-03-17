/*! (c) Andrea Giammarchi - ISC */
var neverland=function(e){"use strict";function t(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var n={};try{n.WeakMap=WeakMap}catch(e){n.WeakMap=function(e,t){var n=t.defineProperty,r=t.hasOwnProperty,a=o.prototype;return a.delete=function(e){return this.has(e)&&delete e[this._]},a.get=function(e){return this.has(e)?e[this._]:void 0},a.has=function(e){return r.call(e,this._)},a.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},o;function o(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(u,this)}function u(e){this.set(e[0],e[1])}}(Math.random(),Object)}var r=n.WeakMap,a="object"!=("undefined"==typeof document?"undefined":typeof document),o=function(e){var t,n=(t=(document.defaultView.navigator||{}).userAgent,/(Firefox|Safari)\/(\d+)/.test(t)&&!/(Chrom[eium]+|Android)\/(\d+)/.test(t)),i=!("raw"in e)||e.propertyIsEnumerable("raw")||!Object.isFrozen(e.raw);if(n||i){var c={},l=function(e){for(var t=".",n=0;n<e.length;n++)t+=e[n].length+"."+e[n];return c[t]||(c[t]=e)};if(i)o=l;else{var f=new r;o=function(e){return f.get(e)||function(e,t){return f.set(e,t),t}(e,l(e))}}}else a=!0;return u(e)};function u(e){return a?e:o(e)}function i(e){for(var t=arguments.length,n=[u(e)],r=1;r<t;)n.push(arguments[r++]);return n}var c={};c.CustomEvent="function"==typeof CustomEvent?CustomEvent:function(e){return t.prototype=new t("").constructor.prototype,t;function t(e,t){t||(t={});var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail),n}}();var l=c.CustomEvent,f={};try{f.WeakSet=WeakSet}catch(e){!function(e){var t=new e,n=r.prototype;function r(n){t.set(this,new e),n&&n.forEach(this.add,this)}n.add=function(e){return t.get(this).set(e,1),this},n.delete=function(e){return t.get(this).delete(e)},n.has=function(e){return t.get(this).has(e)},f.WeakSet=r}(WeakMap)}var s=f.WeakSet;var v="function"==typeof cancelAnimationFrame,h=v?cancelAnimationFrame:clearTimeout,p=v?requestAnimationFrame:setTimeout;function d(e){var t,n,r,a,o;return i(),function(e,i,l){return r=e,a=i,o=l,n||(n=p(u)),--t<0&&c(!0),c};function u(){i(),r.apply(a,o||[])}function i(){t=e||1/0,n=v?0:null}function c(e){var t=!!n;return t&&(h(n),e&&u()),t}}var g=function(e){return{get:function(t){return e.get(t)},set:function(t,n){return e.set(t,n),n}}},y=null,m=function(e){var t=[];return function n(){var r=y,a=[];y={hook:n,args:arguments,stack:t,i:0,length:t.length,after:a};try{return e.apply(null,arguments)}finally{y=r;for(var o=0,u=a.length;o<u;o++)a[o]()}}},b=g(new WeakMap),w=function(e,t,n){e.apply(t,n)},k={async:!1,always:!1},N=function(e,t){var n=y.i++,r=y,a=r.hook,o=r.args,u=r.stack,i=r.length,c=t||k,l=c.async,f=c.always;n===i&&(y.length=u.push({$:"function"==typeof e?e():e,_:l?b.get(a)||b.set(a,d()):w}));var s=u[n];return[s.$,function(e){var t="function"==typeof e?e(s.$):e;(f||s.$!==t)&&(s.$=t,s._(a,null,o))}]},x=new WeakMap,E=function(e){var t=e.hook,n=e.args;t.apply(null,n)};function C(e){this.value!==e&&(this.value=e,x.get(this).forEach(E))}function A(e){return e.hook===this.hook}var S=new WeakMap,T=g(S),O=function(){},j=function(e){return function(t,n){var r=y.i++,a=y,o=a.hook,u=a.after,i=a.stack;if(r<a.length){var c=i[r],l=c.update,f=c.values,s=c.stop;if(!n||n.some(W,f)){c.values=n,e&&s(e);var v=c.clean;v&&(c.clean=null,v());var h=function(){c.clean=t()};e?l(h):u.push(h)}}else{var p=e?d():O,g={clean:null,update:p,values:n,stop:O};y.length=i.push(g),(T.get(o)||T.set(o,[])).push(g);var m=function(){g.clean=t()};e?g.stop=p(m):u.push(m)}}},M=S.has.bind(S),L=j(!0),$=j(!1),_=function(e,t){var n=y.i++,r=y,a=r.stack;return n===r.length?y.length=a.push({$:e(),_:t}):t&&!t.some(W,a[n]._)||(a[n]={$:e(),_:t}),a[n].$};function W(e,t){return e!==this[t]}var R,D=function(e){var t=e.Event,n=e.WeakSet,r=!0,a=null;return function(e){return r&&(r=!r,a=new n,function(e){var r=new n,o=new n;try{new MutationObserver(l).observe(e,{subtree:!0,childList:!0})}catch(t){var u=0,i=[],c=function(e){i.push(e),clearTimeout(u),u=setTimeout(function(){l(i.splice(u=0,i.length))},0)};e.addEventListener("DOMNodeRemoved",function(e){c({addedNodes:[],removedNodes:[e.target]})},!0),e.addEventListener("DOMNodeInserted",function(e){c({addedNodes:[e.target],removedNodes:[]})},!0)}function l(e){for(var t,n=e.length,a=0;a<n;a++)f((t=e[a]).removedNodes,"disconnected",o,r),f(t.addedNodes,"connected",r,o)}function f(e,n,r,a){for(var o,u=new t(n),i=e.length,c=0;c<i;1===(o=e[c++]).nodeType&&s(o,u,n,r,a));}function s(e,t,n,r,o){a.has(e)&&!r.has(e)&&(o.delete(e),r.add(e),e.dispatchEvent(t));for(var u=e.children||[],i=u.length,c=0;c<i;s(u[c++],t,n,r,o));}}(e.ownerDocument)),a.add(e),e}}({Event:l,WeakSet:s}),F=function(e){var t=null,n=m(e);return function(){var e=n.apply(this,arguments);return M(n)&&function e(t,n){var r=t.nodeType;if(r){var a=1===r?t:function(e){for(var t=e.firstChild;t&&1!==t.nodeType;)t=t.nextSibling;if(t)return t;throw"unobservable"}(t);D(a),a.addEventListener("disconnected",n,!1)}else{var o=t.valueOf();o!==t&&e(o,n)}}(e,t||(t=function(e){(S.get(e)||[]).forEach(function(e){var t=e.clean;(0,e.stop)(),t&&(e.clean=null,t())})}.bind(null,n))),e}},I=Array.isArray,z=[],H=z.indexOf,Z=z.slice,q="-"+Math.random().toFixed(6)+"%",P=!1;try{"content"in(R=document.createElement("template"))&&(R.innerHTML='<p tabindex="'+q+'"></p>',R.content.childNodes[0].getAttribute("tabindex")==q)||(q="_dt: "+q.slice(1,-1)+";",P=!0)}catch(e){}var V="\x3c!--"+q+"--\x3e",G=8,B=1,J=3,K=/^(?:style|textarea)$/i,Q=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;var U=" \\f\\n\\r\\t",X="[^"+U+"\\/>\"'=]+",Y="["+U+"]+"+X,ee="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",te="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+X.replace("\\/","")+"))?)",ne=new RegExp(ee+Y+te+"+)(["+U+"]*/?>)","g"),re=new RegExp(ee+Y+te+"*)(["+U+"]*/>)","g"),ae=new RegExp("("+Y+"\\s*=\\s*)(['\"]?)"+V+"\\2","gi");function oe(e,t,n,r){return"<"+t+n.replace(ae,ue)+r}function ue(e,t,n){return t+(n||'"')+q+(n||'"')}function ie(e,t,n){return Q.test(t)?e:"<"+t+n+"></"+t+">"}var ce=function(e,t){return 111===e.nodeType?1/t<0?t?(r=(n=e).firstChild,a=n.lastChild,(o=document.createRange()).setStartAfter(r),o.setEndAfter(a),o.deleteContents(),r):e.lastChild:t?e.valueOf():e.firstChild:e;var n,r,a,o},le=function(e){var t="fragment",n="content"in a("template")?function(e){var t=a("template");return t.innerHTML=e,t.content}:function(e){var n=a(t),o=a("template"),u=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var i=RegExp.$1;o.innerHTML="<table>"+e+"</table>",u=o.querySelectorAll(i)}else o.innerHTML=e,u=o.childNodes;return r(n,u),n};return function(e,o){return("svg"===o?function(e){var n=a(t),o=a("div");return o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",r(n,o.firstChild.childNodes),n}:n)(e)};function r(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function a(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}}(document),fe=function(e,t,n,r,a,o){for(var u=("selectedIndex"in t),i=u;r<a;){var c=e(n[r],1);if(t.insertBefore(c,o),u&&i&&c.selected){i=!i;var l=t.selectedIndex;t.selectedIndex=l<0?r:H.call(t.querySelectorAll("option"),c)}r++}},se=function(e,t){return e==t},ve=function(e){return e},he=function(e,t,n,r,a,o,u){var i=o-a;if(i<1)return-1;for(;n-t>=i;){for(var c=t,l=a;c<n&&l<o&&u(e[c],r[l]);)c++,l++;if(l===o)return t;t=c+1}return-1},pe=function(e,t,n,r,a){return n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:a},de=function(e,t,n,r){for(;n<r;)me(e(t[n++],-1))},ge=function(e,t,n){for(var r=1,a=t;r<a;){var o=(r+a)/2>>>0;n<e[o]?a=o:r=o+1}return r},ye=function(e,t,n,r,a,o,u,i,c,l,f,s,v){!function(e,t,n,r,a,o,u,i,c){for(var l=[],f=e.length,s=u,v=0;v<f;)switch(e[v++]){case 0:a++,s++;break;case 1:l.push(r[a]),fe(t,n,r,a++,a,s<i?t(o[s],0):c);break;case-1:s++}for(v=0;v<f;)switch(e[v++]){case 0:u++;break;case-1:-1<l.indexOf(o[u])?u++:de(t,o,u++,u)}}(function(e,t,n,r,a,o,u){var i,c,l,f,s,v,h,p=n+o,d=[];e:for(i=0;i<=p;i++){if(i>50)return null;for(h=i-1,s=i?d[i-1]:[0,0],v=d[i]=[],c=-i;c<=i;c+=2){for(l=(f=c===-i||c!==i&&s[h+c-1]<s[h+c+1]?s[h+c+1]:s[h+c-1]+1)-c;f<o&&l<n&&u(r[a+f],e[t+l]);)f++,l++;if(f===o&&l===n)break e;v[i+c]=f}}var g=Array(i/2+p/2),y=g.length-1;for(i=d.length-1;i>=0;i--){for(;f>0&&l>0&&u(r[a+f-1],e[t+l-1]);)g[y--]=0,f--,l--;if(!i)break;h=i-1,s=i?d[i-1]:[0,0],(c=f-l)==-i||c!==i&&s[h+c-1]<s[h+c+1]?(l--,g[y--]=1):(f--,g[y--]=-1)}return g}(n,r,o,u,i,l,s)||function(e,t,n,r,a,o,u,i){var c=0,l=r<i?r:i,f=Array(l++),s=Array(l);s[0]=-1;for(var v=1;v<l;v++)s[v]=u;for(var h=a.slice(o,u),p=t;p<n;p++){var d=h.indexOf(e[p]);if(-1<d){var g=d+o;-1<(c=ge(s,l,g))&&(s[c]=g,f[c]={newi:p,oldi:g,prev:f[c-1]})}}for(c=--l,--u;s[c]>u;)--c;l=i+r-c;var y=Array(l),m=f[c];for(--n;m;){for(var b=m,w=b.newi,k=b.oldi;n>w;)y[--l]=1,--n;for(;u>k;)y[--l]=-1,--u;y[--l]=0,--n,--u,m=m.prev}for(;n>=t;)y[--l]=1,--n;for(;u>=o;)y[--l]=-1,--u;return y}(n,r,a,o,u,i,c,l),e,t,n,r,u,i,f,v)},me=function(e){return(e.remove||function(){var e=this.parentNode;e&&e.removeChild(this)}).call(e)};var be=function(e,t,n,r){r||(r={});for(var a=r.compare||se,o=r.node||ve,u=null==r.before?null:o(r.before,0),i=t.length,c=i,l=0,f=n.length,s=0;l<c&&s<f&&a(t[l],n[s]);)l++,s++;for(;l<c&&s<f&&a(t[c-1],n[f-1]);)c--,f--;var v=l===c,h=s===f;if(v&&h)return n;if(v&&s<f)return fe(o,e,n,s,f,pe(o,t,l,i,u)),n;if(h&&l<c)return de(o,t,l,c),n;var p=c-l,d=f-s,g=-1;if(p<d){if(-1<(g=he(n,s,f,t,l,c,a)))return fe(o,e,n,s,g,o(t[l],0)),fe(o,e,n,g+p,f,pe(o,t,c,i,u)),n}else if(d<p&&-1<(g=he(t,l,c,n,s,f,a)))return de(o,t,l,g),de(o,t,g+d,c),n;return p<2||d<2?(fe(o,e,n,s,f,o(t[l],0)),de(o,t,l,c),n):p===d&&function(e,t,n,r,a,o){for(;r<a&&o(n[r],e[t-1]);)r++,t--;return 0===t}(n,f,t,l,c,a)?(fe(o,e,n,s,f,pe(o,t,c,i,u)),n):(ye(o,e,n,s,f,d,t,l,c,p,i,a,u),n)},we=function(e,t,n,r,a){var o="importNode"in e,u=e.createDocumentFragment();return u.appendChild(e.createTextNode("g")),u.appendChild(e.createTextNode("")),(o?e.importNode(u,!0):u.cloneNode(!0)).childNodes.length<2?function e(t,n){for(var r=t.cloneNode(),a=t.childNodes||[],o=a.length,u=0;n&&u<o;u++)r.appendChild(e(a[u],n));return r}:o?e.importNode:function(e,t){return e.cloneNode(!!t)}}(document),ke="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},Ne=P?function(e,t){var n=t.join(" ");return t.slice.call(e,0).sort(function(e,t){return n.indexOf(e.name)<=n.indexOf(t.name)?-1:1})}:function(e,t){return t.slice.call(e,0)};function xe(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function Ee(e,t,n,r){for(var a=e.attributes,o=[],u=[],i=Ne(a,n),c=i.length,l=0;l<c;){var f,s=i[l++],v=s.value===q;if(v||1<(f=s.value.split(V)).length){var h=s.name;if(o.indexOf(h)<0){o.push(h);var p=n.shift().replace(v?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+h+")\\s*=\\s*('|\")[\\S\\s]*","i"),"$1"),d=a[p]||a[p.toLowerCase()];if(v)t.push(Ae(d,r,p,null));else{for(var g=f.length-2;g--;)n.shift();t.push(Ae(d,r,p,f))}}u.push(s)}}l=0;for(var y=(0<(c=u.length)&&P&&!("ownerSVGElement"in e));l<c;){var m=u[l++];y&&(m.value=""),e.removeAttribute(m.name)}var b=e.nodeName;if(/^script$/i.test(b)){var w=document.createElement(b);for(c=a.length,l=0;l<c;)w.setAttributeNode(a[l++].cloneNode(!0));w.textContent=e.textContent,e.parentNode.replaceChild(w,e)}}function Ce(e,t){return{type:"any",node:e,path:t}}function Ae(e,t,n,r){return{type:"attr",node:e,path:t,name:n,sparse:r}}function Se(e,t){return{type:"text",node:e,path:t}}var Te=g(new r);function Oe(e,t){var n=(e.convert||function(e){return e.join(V).replace(re,ie).replace(ne,oe)})(t),r=e.transform;r&&(n=r(n));var a=le(n,e.type);Le(a);var o=[];return function e(t,n,r,a){for(var o=t.childNodes,u=o.length,i=0;i<u;){var c=o[i];switch(c.nodeType){case B:var l=a.concat(i);Ee(c,n,r,l),e(c,n,r,l);break;case G:var f=c.textContent;if(f===q)r.shift(),n.push(K.test(t.nodeName)?Se(t,a):Ce(c,a.concat(i)));else switch(f.slice(0,2)){case"/*":if("*/"!==f.slice(-2))break;case"👻":t.removeChild(c),i--,u--}break;case J:K.test(t.nodeName)&&ke.call(c.textContent)===V&&(r.shift(),n.push(Se(t,a)))}i++}}(a,o,t.slice(0),[]),{content:a,updates:function(n){for(var r=[],a=o.length,u=0,i=0;u<a;){var c=o[u++],l=xe(n,c.path);switch(c.type){case"any":r.push({fn:e.any(l,[]),sparse:!1});break;case"attr":var f=c.sparse,s=e.attribute(l,c.name,c.node);null===f?r.push({fn:s,sparse:!1}):(i+=f.length-2,r.push({fn:s,sparse:!0,values:f}));break;case"text":r.push({fn:e.text(l),sparse:!1}),l.textContent=""}}return a+=i,function(){var e=arguments.length;if(a!==e-1)throw new Error(e-1+" values instead of "+a+"\n"+t.join("${value}"));for(var o=1,u=1;o<e;){var i=r[o-u];if(i.sparse){var c=i.values,l=c[0],f=1,s=c.length;for(u+=s-2;f<s;)l+=arguments[o++]+c[f++];i.fn(l)}else i.fn(arguments[o++])}return n}}}}var je=[];function Me(e){var t=je,n=Le;return function(r){return t!==r&&(n=function(e,t){var n=Te.get(t)||Te.set(t,Oe(e,t));return n.updates(we.call(document,n.content,!0))}(e,t=r)),n.apply(null,arguments)}}function Le(e){for(var t=e.childNodes,n=t.length;n--;){var r=t[n];1!==r.nodeType&&0===ke.call(r.textContent).length&&e.removeChild(r)}}var $e=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,a){var o,u;return function(i){var c,l,f,s;switch(typeof i){case"object":if(i){if("object"===o){if(!a&&u!==i)for(l in u)l in i||(r[l]="")}else a?r.value="":r.cssText="";for(l in c=a?{}:r,i)f="number"!=typeof(s=i[l])||e.test(l)?s:s+"px",!a&&/^--/.test(l)?c.setProperty(l,f):c[l]=f;o="object",a?r.value=function(e){var r,a=[];for(r in e)a.push(r.replace(t,n),":",e[r],";");return a.join("")}(u=c):u=i;break}default:u!=i&&(o="string",u=i,a?r.value=i||"":r.cssText=i||"")}}}}(),_e=function(e,t){var n,r=!1,a=t.cloneNode(!0);return function(t){n!==t&&(n=t,a.value!==t&&(null==t?(r&&(r=!1,e.removeAttributeNode(a)),a.value=t):(a.value=t,r||(r=!0,e.setAttributeNode(a)))))}},We=function(e,t){var n;return function(r){n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}},Re=/^(?:form|list)$/i;function De(e){return this.type=e,Me(this)}function Fe(e){return e(this)}De.prototype={attribute:function(e,t,n){var r="svg"===this.type;switch(t){case"class":if(r)return _e(e,n);t="className";case"data":case"props":return We(e,t);case"style":return $e(e,n,r);case"ref":return function(e){return function(t){"function"==typeof t?t(e):t.current=e}}(e);default:return"."===t.slice(0,1)?function(e,t,n){return n?function(n){try{e[t]=n}catch(r){e.setAttribute(t,n)}}:function(n){e[t]=n}}(e,t.slice(1),r):"on"===t.slice(0,2)?function(e,t){var n,r=t.slice(2);return t.toLowerCase()in e&&(r=r.toLowerCase()),function(t){var a=I(t)?t:[t,!1];n!==a[0]&&(n&&e.removeEventListener(r,n,a[1]),(n=a[0])&&e.addEventListener(r,n,a[1]))}}(e,t):t in e&&!r&&!Re.test(t)?We(e,t):_e(e,n)}},any:function(e,t){var n,r={node:ce,before:e},a=this.type,o=!1;return function u(i){switch(typeof i){case"string":case"number":case"boolean":o?n!==i&&(n=i,t[0].textContent=i):(o=!0,n=i,t=be(e.parentNode,t,[function(e,t){return e.ownerDocument.createTextNode(t)}(e,i)],r));break;case"function":u(i(e));break;case"object":case"undefined":if(null==i){o=!1,t=be(e.parentNode,t,[],r);break}default:if(o=!1,n=i,I(i))if(0===i.length)t.length&&(t=be(e.parentNode,t,[],r));else switch(typeof i[0]){case"string":case"number":case"boolean":u(String(i));break;case"function":u(i.map(Fe,e));break;case"object":I(i[0])&&(i=i.concat.apply([],i));default:t=be(e.parentNode,t,i,r)}else"ELEMENT_NODE"in i?t=be(e.parentNode,t,11===i.nodeType?Z.call(i.childNodes):[i],r):"text"in i?u(String(i.text)):"any"in i?u(i.any):"html"in i?t=be(e.parentNode,t,Z.call(le([].concat(i.html).join(""),a).childNodes),r):"length"in i&&u(Z.call(i))}}},text:function(e){var t;return function n(r){if(t!==r){t=r;var a=typeof r;"object"===a&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(Z.call(r).join("")):"function"===a?n(r(e)):e.textContent=null==r?"":r}}}};var Ie=Object.create,ze=Object.freeze,He=g(new r),Ze=function(){return{stack:[],entry:null,wire:null}},qe=function(e,t){var n=g(new r);return a.for=function(e,r){var o,u=n.get(e)||n.set(e,Ie(null));return u[r]||(u[r]=(o=Ze(),function(){return Pe(t,o,a.apply(null,arguments))}))},a.node=function(){return Pe(t,Ze(),a.apply(null,arguments)).valueOf()},a;function a(){return new Ge(e,i.apply(null,arguments))}},Pe=function(e,n,r){var a,o=r.type,u=r.template,i=r.values,c=i.length;Ve(e,n,i,c);var l=n.entry;if(l&&l.template===u&&l.type===o)(a=l).tag.apply(a,[u].concat(t(i)));else{var f=new e(o);n.entry=l={type:o,template:u,tag:f,wire:function(e){var t=e.childNodes,n=t.length;if(n<2)return t[0];var r=Z.call(t,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:r[0],lastChild:r[n-1],valueOf:function(){if(t.length!==n)for(var a=0;a<n;)e.appendChild(r[a++]);return e}}}(f.apply(void 0,[u].concat(t(i))))}}return l.wire},Ve=function e(t,n,r,a){for(var o=n.stack,u=0;u<a;u++){var i=r[u];i instanceof Be?r[u]=Pe(t,o[u]||(o[u]=Ze()),i):I(i)?e(t,o[u]||(o[u]=Ze()),i,i.length):o[u]=null}a<o.length&&o.splice(a)};function Ge(e,t){this.type=e,this.template=t.shift(),this.values=t}ze(Ge);var Be=Ge,Je=function(e){return{html:qe("html",e),svg:qe("svg",e),render:function(t,n){var r="function"==typeof n?n():n,a=He.get(t)||He.set(t,Ze()),o=r instanceof Ge?Pe(e,a,r):r;return o!==a.wire&&(a.wire=o,t.textContent="",t.appendChild(o.valueOf())),t}}}(De),Ke=Je.render,Qe=Je.html,Ue=Je.svg,Xe=Object.create;function Ye(){return new Be("html",i.apply(null,arguments))}function et(){return new Be("svg",i.apply(null,arguments))}Ye.for=ct(Qe),et.for=ct(Ue);var tt=g(new r),nt=function(){return{stack:[],entry:null}},rt=function(e,n){var r,a=n.fn,o=n.template,u=n.values,i=e.entry;return i&&i.fn===a||(e.entry=i={fn:a,hook:null},i.hook=function(e,t){return F(function(){var n=t.fn.apply(null,arguments);return n instanceof Be?(at(e,n),ut(t,n)):n})}(nt(),i)),(r=i).hook.apply(r,[o].concat(t(u)))},at=function(e,t){var n=t.values;ot(e,n,n.length)},ot=function e(t,n,r){for(var a=t.stack,o=0;o<r;o++){var u=n[o];u instanceof it?n[o]=rt(a[o]||(a[o]=nt()),u):u instanceof Be?at(a[o]||(a[o]=nt()),u):I(u)?e(a[o]||(a[o]=nt()),u,u.length):a[o]=null}r<a.length&&a.splice(r)},ut=function(e,n){var r=n.type,a=n.template,o=n.values;return("svg"===r?Ue:Qe).for(e,r).apply(void 0,[a].concat(t(o)))};function it(e,t){this.fn=e,this.template=t.shift(),this.values=t}function ct(e){var t=g(new r);return function(n,r){var a=t.get(n)||t.set(n,Xe(null)),o=a[r]||(a[r]=nt());return function(t){for(var a=arguments.length,u=new Array(a>1?a-1:0),i=1;i<a;i++)u[i-1]=arguments[i];return ot(o,u),e.for(n,r).apply(void 0,[t].concat(u))}}}return e.contextual=function(e){var t=!0,n=null,r=m(function(){return e.apply(n,arguments)});return function e(){var a=r.apply(n=this,arguments);return t&&(t=!t,M(r)&&S.set(e,S.get(r))),a}},e.createContext=function(e){var t={value:e,provide:C};return x.set(t,[]),t},e.html=Ye,e.neverland=function(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return new it(e,n)}},e.render=function(e,t){var n="function"==typeof t?t():t,r=tt.get(e)||tt.set(e,nt());return Ke(e,n instanceof it?rt(r,n):(at(r,n),n))},e.svg=et,e.useCallback=function(e,t){return _(function(){return e},t)},e.useContext=function(e){var t=y,n=t.hook,r=t.args,a=x.get(e),o={hook:n,args:r};return a.some(A,o)||a.push(o),e.value},e.useEffect=L,e.useLayoutEffect=$,e.useMemo=_,e.useReducer=function(e,t,n,r){var a="function"==typeof n,o=N(a?n(t):t,a?r:n);return[o[0],function(t){o[1](e(o[0],t))}]},e.useRef=function(e){var t=y.i++,n=y,r=n.stack;return t===n.length&&(y.length=r.push({current:e})),r[t]},e.useState=N,e}({});
