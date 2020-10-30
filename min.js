/*! (c) Andrea Giammarchi - ISC */
var neverland=function(e){"use strict";function t(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var r={};try{r.WeakMap=WeakMap}catch(e){r.WeakMap=function(e,t){var n=t.defineProperty,r=t.hasOwnProperty,a=o.prototype;return a.delete=function(e){return this.has(e)&&delete e[this._]},a.get=function(e){return this.has(e)?e[this._]:void 0},a.has=function(e){return r.call(e,this._)},a.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},o;function o(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(i,this)}function i(e){this.set(e[0],e[1])}}(Math.random(),Object)}var a=r.WeakMap,o={};o.CustomEvent="function"==typeof CustomEvent?CustomEvent:function(e){return t.prototype=new t("").constructor.prototype,t;function t(e,t){t||(t={});var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail),n}}();var i=o.CustomEvent,u={};try{u.WeakSet=WeakSet}catch(e){!function(e){var t=new e,n=r.prototype;function r(n){t.set(this,new e),n&&n.forEach(this.add,this)}n.add=function(e){return t.get(this).set(e,1),this},n.delete=function(e){return t.get(this).delete(e)},n.has=function(e){return t.get(this).has(e)},u.WeakSet=r}(WeakMap)}var c=u.WeakSet;var l="function"==typeof cancelAnimationFrame,s=l?cancelAnimationFrame:clearTimeout,f=l?requestAnimationFrame:setTimeout;function v(e){var t,n,r,a,o;return u(),function(e,u,l){return r=e,a=u,o=l,n||(n=f(i)),--t<0&&c(!0),c};function i(){u(),r.apply(a,o||[])}function u(){t=e||1/0,n=l?0:null}function c(e){var t=!!n;return t&&(s(n),e&&i()),t}}var p=function(e){return{get:function(t){return e.get(t)},set:function(t,n){return e.set(t,n),n}}},h=null,d=function(e){var t=[];return function n(){var r=h,a=[];h={hook:n,args:arguments,stack:t,i:0,length:t.length,after:a};try{return e.apply(null,arguments)}finally{h=r;for(var o=0,i=a.length;o<i;o++)a[o]()}}},g=p(new WeakMap),m=function(e,t,n){e.apply(t,n)},y={async:!1,always:!1},b=function(e,t){return"function"==typeof t?t(e):t},w=function(e,t,n,r){var a=h.i++,o=h,i=o.hook,u=o.args,c=o.stack,l=o.length;a===l&&(h.length=c.push({}));var s=c[a];if(s.args=u,a===l){var f="function"==typeof n,p=(f?r:n)||r||y,d=p.async,w=p.always;s.$=f?n(t):b(void 0,t),s._=d?g.get(i)||g.set(i,v()):m,s.f=function(t){var n=e(s.$,t);(w||s.$!==n)&&(s.$=n,s._(i,null,s.args))}}return[s.$,s.f]},N=new WeakMap,k=function(e){var t=e.hook,n=e.args;t.apply(null,n)};function x(e){this.value!==e&&(this.value=e,N.get(this).forEach(k))}function C(e){return e.hook===this.hook}var E=new WeakMap,A=p(E),S=function(){},T=function(e){return function(t,n){var r=h.i++,a=h,o=a.hook,i=a.after,u=a.stack;if(r<a.length){var c=u[r],l=c.update,s=c.values,f=c.stop;if(!n||n.some($,s)){c.values=n,e&&f(e);var p=c.clean;p&&(c.clean=null,p());var d=function(){c.clean=t()};e?l(d):i.push(d)}}else{var g=e?v():S,m={clean:null,update:g,values:n,stop:S};h.length=u.push(m),(A.get(o)||A.set(o,[])).push(m);var y=function(){m.clean=t()};e?m.stop=g(y):i.push(y)}}},M=E.has.bind(E),j=T(!0),O=T(!1),L=function(e,t){var n=h.i++,r=h,a=r.stack;return n===r.length?h.length=a.push({$:e(),_:t}):t&&!t.some($,a[n]._)||(a[n]={$:e(),_:t}),a[n].$};function $(e,t){return e!==this[t]}var _,W=function(e){var t=e.Event,n=e.WeakSet,r=!0,a=null;return function(e){return r&&(r=!r,a=new n,function(e){var r=new n,o=new n;try{new MutationObserver(l).observe(e,{subtree:!0,childList:!0})}catch(t){var i=0,u=[],c=function(e){u.push(e),clearTimeout(i),i=setTimeout(function(){l(u.splice(i=0,u.length))},0)};e.addEventListener("DOMNodeRemoved",function(e){c({addedNodes:[],removedNodes:[e.target]})},!0),e.addEventListener("DOMNodeInserted",function(e){c({addedNodes:[e.target],removedNodes:[]})},!0)}function l(e){for(var t,n=e.length,a=0;a<n;a++)s((t=e[a]).removedNodes,"disconnected",o,r),s(t.addedNodes,"connected",r,o)}function s(e,n,r,a){for(var o,i=new t(n),u=e.length,c=0;c<u;1===(o=e[c++]).nodeType&&f(o,i,n,r,a));}function f(e,t,n,r,o){a.has(e)&&!r.has(e)&&(o.delete(e),r.add(e),e.dispatchEvent(t));for(var i=e.children||[],u=i.length,c=0;c<u;f(i[c++],t,n,r,o));}}(e.ownerDocument)),a.add(e),e}}({Event:i,WeakSet:c}),R=function(e){var t=null,n=d(e);return function(){var e=n.apply(this,arguments);return M(n)&&function e(t,n){var r=t.nodeType;if(r){var a=1===r?t:function(e){for(var t=e.firstChild;t&&1!==t.nodeType;)t=t.nextSibling;if(t)return t;throw"unobservable"}(t);W(a),a.addEventListener("disconnected",n,!1)}else{var o=t.valueOf();o!==t&&e(o,n)}}(e,t||(t=function(e){(E.get(e)||[]).forEach(function(e){var t=e.clean;(0,e.stop)(),t&&(e.clean=null,t())})}.bind(null,n))),e}},D=Array.isArray,F=[].slice,H="-"+Math.random().toFixed(6)+"%",z=!1;try{"content"in(_=document.createElement("template"))&&(_.innerHTML='<p tabindex="'+H+'"></p>',_.content.childNodes[0].getAttribute("tabindex")==H)||(H="_dt: "+H.slice(1,-1)+";",z=!0)}catch(e){}var B="\x3c!--"+H+"--\x3e",I=8,P=1,Z=3,q=/^(?:style|textarea)$/i,G=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;var V=" \\f\\n\\r\\t",U="[^"+V+"\\/>\"'=]+",J="["+V+"]+"+U,K="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",Q="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+U.replace("\\/","")+"))?)",X=new RegExp(K+J+Q+"+)(["+V+"]*/?>)","g"),Y=new RegExp(K+J+Q+"*)(["+V+"]*/>)","g"),ee=new RegExp("("+J+"\\s*=\\s*)(['\"]?)"+B+"\\2","gi");function te(e,t,n,r){return"<"+t+n.replace(ee,ne)+r}function ne(e,t,n){return t+(n||'"')+H+(n||'"')}function re(e,t,n){return G.test(t)?e:"<"+t+n+"></"+t+">"}var ae=function(e,t){return 111===e.nodeType?1/t<0?t?(r=(n=e).firstChild,a=n.lastChild,(o=document.createRange()).setStartAfter(r),o.setEndAfter(a),o.deleteContents(),r):e.lastChild:t?e.valueOf():e.firstChild:e;var n,r,a,o},oe=function(e){var t="fragment",n="content"in a("template")?function(e){var t=a("template");return t.innerHTML=e,t.content}:function(e){var n=a(t),o=a("template"),i=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var u=RegExp.$1;o.innerHTML="<table>"+e+"</table>",i=o.querySelectorAll(u)}else o.innerHTML=e,i=o.childNodes;return r(n,i),n};return function(e,o){return("svg"===o?function(e){var n=a(t),o=a("div");return o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",r(n,o.firstChild.childNodes),n}:n)(e)};function r(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function a(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}}(document),ie=function(e,t,n,r,a){for(var o=n.length,i=t.length,u=o,c=0,l=0,s=null;c<i||l<u;)if(i===c)for(var f=u<o?l?r(n[l-1],-0).nextSibling:r(n[u-l],0):a;l<u;)e.insertBefore(r(n[l++],1),f);else if(u===l)for(;c<i;)s&&s.has(t[c])||e.removeChild(r(t[c],-1)),c++;else if(t[c]===n[l])c++,l++;else if(t[i-1]===n[u-1])i--,u--;else if(t[c]===n[u-1]&&n[l]===t[i-1]){var v=r(t[--i],-1).nextSibling;e.insertBefore(r(n[l++],1),r(t[c++],-1).nextSibling),e.insertBefore(r(n[--u],1),v),t[i]=n[u]}else{if(!s){s=new Map;for(var p=l;p<u;)s.set(n[p],p++)}if(s.has(t[c])){var h=s.get(t[c]);if(l<h&&h<u){for(var d=c,g=1;++d<i&&d<u&&s.get(t[d])===h+g;)g++;if(g>h-l)for(var m=r(t[c],0);l<h;)e.insertBefore(r(n[l++],1),m);else e.replaceChild(r(n[l++],1),r(t[c++],-1))}else c++}else e.removeChild(r(t[c++],-1))}return n},ue=function(e,t,n,r,a){var o="importNode"in e,i=e.createDocumentFragment();return i.appendChild(e.createTextNode("g")),i.appendChild(e.createTextNode("")),(o?e.importNode(i,!0):i.cloneNode(!0)).childNodes.length<2?function e(t,n){for(var r=t.cloneNode(),a=t.childNodes||[],o=a.length,i=0;n&&i<o;i++)r.appendChild(e(a[i],n));return r}:o?e.importNode:function(e,t){return e.cloneNode(!!t)}}(document),ce="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},le=z?function(e,t){var n=t.join(" ");return t.slice.call(e,0).sort(function(e,t){return n.indexOf(e.name)<=n.indexOf(t.name)?-1:1})}:function(e,t){return t.slice.call(e,0)};function se(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function fe(e,t,n,r){for(var a=e.attributes,o=[],i=[],u=le(a,n),c=u.length,l=0;l<c;){var s,f=u[l++],v=f.value===H;if(v||1<(s=f.value.split(B)).length){var p=f.name;if(o.indexOf(p)<0){o.push(p);var h=n.shift().replace(v?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+p+")\\s*=\\s*('|\")[\\S\\s]*","i"),"$1"),d=a[h]||a[h.toLowerCase()];if(v)t.push(pe(d,r,h,null));else{for(var g=s.length-2;g--;)n.shift();t.push(pe(d,r,h,s))}}i.push(f)}}l=0;for(var m=(0<(c=i.length)&&z&&!("ownerSVGElement"in e));l<c;){var y=i[l++];m&&(y.value=""),e.removeAttribute(y.name)}var b=e.nodeName;if(/^script$/i.test(b)){var w=document.createElement(b);for(c=a.length,l=0;l<c;)w.setAttributeNode(a[l++].cloneNode(!0));w.textContent=e.textContent,e.parentNode.replaceChild(w,e)}}function ve(e,t){return{type:"any",node:e,path:t}}function pe(e,t,n,r){return{type:"attr",node:e,path:t,name:n,sparse:r}}function he(e,t){return{type:"text",node:e,path:t}}var de=p(new a);function ge(e,t){var n=(e.convert||function(e){return e.join(B).replace(Y,re).replace(X,te)})(t),r=e.transform;r&&(n=r(n));var a=oe(n,e.type);be(a);var o=[];return function e(t,n,r,a){for(var o=t.childNodes,i=o.length,u=0;u<i;){var c=o[u];switch(c.nodeType){case P:var l=a.concat(u);fe(c,n,r,l),e(c,n,r,l);break;case I:var s=c.textContent;if(s===H)r.shift(),n.push(q.test(t.nodeName)?he(t,a):ve(c,a.concat(u)));else switch(s.slice(0,2)){case"/*":if("*/"!==s.slice(-2))break;case"👻":t.removeChild(c),u--,i--}break;case Z:q.test(t.nodeName)&&ce.call(c.textContent)===B&&(r.shift(),n.push(he(t,a)))}u++}}(a,o,t.slice(0),[]),{content:a,updates:function(n){for(var r=[],a=o.length,i=0,u=0;i<a;){var c=o[i++],l=se(n,c.path);switch(c.type){case"any":r.push({fn:e.any(l,[]),sparse:!1});break;case"attr":var s=c.sparse,f=e.attribute(l,c.name,c.node);null===s?r.push({fn:f,sparse:!1}):(u+=s.length-2,r.push({fn:f,sparse:!0,values:s}));break;case"text":r.push({fn:e.text(l),sparse:!1}),l.textContent=""}}return a+=u,function(){var e=arguments.length;if(a!==e-1)throw new Error(e-1+" values instead of "+a+"\n"+t.join("${value}"));for(var o=1,i=1;o<e;){var u=r[o-i];if(u.sparse){var c=u.values,l=c[0],s=1,f=c.length;for(i+=f-2;s<f;)l+=arguments[o++]+c[s++];u.fn(l)}else u.fn(arguments[o++])}return n}}}}var me=[];function ye(e){var t=me,n=be;return function(r){return t!==r&&(n=function(e,t){var n=de.get(t)||de.set(t,ge(e,t));return n.updates(ue.call(document,n.content,!0))}(e,t=r)),n.apply(null,arguments)}}function be(e){for(var t=e.childNodes,n=t.length;n--;){var r=t[n];1!==r.nodeType&&0===ce.call(r.textContent).length&&e.removeChild(r)}}var we=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,a){var o,i;return function(u){var c,l,s,f;switch(typeof u){case"object":if(u){if("object"===o){if(!a&&i!==u)for(l in i)l in u||(r[l]="")}else a?r.value="":r.cssText="";for(l in c=a?{}:r,u)s="number"!=typeof(f=u[l])||e.test(l)?f:f+"px",!a&&/^--/.test(l)?c.setProperty(l,s):c[l]=s;o="object",a?r.value=function(e){var r,a=[];for(r in e)a.push(r.replace(t,n),":",e[r],";");return a.join("")}(i=c):i=u;break}default:i!=u&&(o="string",i=u,a?r.value=u||"":r.cssText=u||"")}}}}(),Ne=function(e,t){var n,r=!0,a=document.createAttributeNS(null,t);return function(t){n!==t&&(null==(n=t)?r||(e.removeAttributeNode(a),r=!0):(a.value=t,r&&(e.setAttributeNodeNS(a),r=!1)))}},ke=function(e,t){return function(n){e[t]=n}},xe=/^(?:form|list)$/i;function Ce(e){return this.type=e,ye(this)}function Ee(e){return e(this)}Ce.prototype={attribute:function(e,t,n){var r,a="svg"===this.type;switch(t){case"class":if(a)return Ne(e,t);t="className";case"props":return ke(e,t);case"aria":return function(e){return function(t){for(var n in t){var r="role"===n?n:"aria-".concat(n),a=t[n];null==a?e.removeAttribute(r):e.setAttribute(r,a)}}}(e);case"style":return we(e,n,a);case"ref":return function(e){return function(t){"function"==typeof t?t(e):t.current=e}}(e);case".dataset":return r=e.dataset,function(e){for(var t in e){var n=e[t];null==n?delete r[t]:r[t]=n}};default:return"."===t.slice(0,1)?ke(e,t.slice(1)):"on"===t.slice(0,2)?function(e,t){var n,r=t.slice(2);return!(t in e)&&t.toLowerCase()in e&&(r=r.toLowerCase()),function(t){var a=D(t)?t:[t,!1];n!==a[0]&&(n&&e.removeEventListener(r,n,a[1]),(n=a[0])&&e.addEventListener(r,n,a[1]))}}(e,t):t in e&&!a&&!xe.test(t)?function(e,t){var n;return function(r){n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}}(e,t):Ne(e,t)}},any:function(e,t){var n,r=this.type,a=!1;return function o(i){switch(typeof i){case"string":case"number":case"boolean":a?n!==i&&(n=i,t[0].textContent=i):(a=!0,n=i,t=ie(e.parentNode,t,[function(e,t){return e.ownerDocument.createTextNode(t)}(e,i)],ae,e));break;case"function":o(i(e));break;case"object":case"undefined":if(null==i){a=!1,t=ie(e.parentNode,t,[],ae,e);break}default:if(a=!1,n=i,D(i))if(0===i.length)t.length&&(t=ie(e.parentNode,t,[],ae,e));else switch(typeof i[0]){case"string":case"number":case"boolean":o(String(i));break;case"function":o(i.map(Ee,e));break;case"object":D(i[0])&&(i=i.concat.apply([],i));default:t=ie(e.parentNode,t,i,ae,e)}else"ELEMENT_NODE"in i?t=ie(e.parentNode,t,11===i.nodeType?F.call(i.childNodes):[i],ae,e):"text"in i?o(String(i.text)):"any"in i?o(i.any):"html"in i?t=ie(e.parentNode,t,F.call(oe([].concat(i.html).join(""),r).childNodes),ae,e):"length"in i&&o(F.call(i))}}},text:function(e){var t;return function n(r){if(t!==r){t=r;var a=typeof r;"object"===a&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(F.call(r).join("")):"function"===a?n(r(e)):e.textContent=null==r?"":r}}}};var Ae=Object.create,Se=Object.freeze,Te=p(new a),Me=function(){return{stack:[],entry:null,wire:null}},je=function(e,t){var n=p(new a);return r.for=function(e,a){var o,i=n.get(e)||n.set(e,Ae(null));return i[a]||(i[a]=(o=Me(),function(){return Oe(t,o,r.apply(null,arguments))}))},r.node=function(){return Oe(t,Me(),r.apply(null,arguments)).valueOf()},r;function r(){return new $e(e,function(){var e=[],t=0,n=arguments.length;for(;t<n;)e.push(arguments[t++]);return e}.apply(null,arguments))}},Oe=function(e,n,r){var a,o=r.type,i=r.template,u=r.values,c=u.length;Le(e,n,u,c);var l=n.entry;if(l&&l.template===i&&l.type===o)(a=l).tag.apply(a,[i].concat(t(u)));else{var s=new e(o);n.entry=l={type:o,template:i,tag:s,wire:function(e){var t=e.childNodes,n=t.length;if(n<2)return n?t[0]:e;var r=F.call(t,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:r[0],lastChild:r[n-1],valueOf:function(){if(t.length!==n)for(var a=0;a<n;)e.appendChild(r[a++]);return e}}}(s.apply(void 0,[i].concat(t(u))))}}return l.wire},Le=function e(t,n,r,a){for(var o=n.stack,i=0;i<a;i++){var u=r[i];u instanceof _e?r[i]=Oe(t,o[i]||(o[i]=Me()),u):D(u)?e(t,o[i]||(o[i]=Me()),u,u.length):o[i]=null}a<o.length&&o.splice(a)};function $e(e,t){this.type=e,this.template=t.shift(),this.values=t}Se($e);var _e=$e,We=function(e){return{html:je("html",e),svg:je("svg",e),render:function(t,n){var r="function"==typeof n?n():n,a=Te.get(t)||Te.set(t,Me()),o=r instanceof $e?Oe(e,a,r):r;return o!==a.wire&&(a.wire=o,t.textContent="",t.appendChild(o.valueOf())),t}}}(Ce),Re=We.render,De=We.html,Fe=We.svg;var He=Object.create,ze=function(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return new Ye(e,n)}},Be=ze;function Ie(){return new _e("html",tt.apply(null,arguments))}function Pe(){return new _e("svg",tt.apply(null,arguments))}Ie.for=et(De),Pe.for=et(Fe);var Ze=p(new a),qe=function(e,t){var n="function"==typeof t?t():t,r=Ze.get(e)||Ze.set(e,Ue(null));return r.w=e,r.W=t,Re(e,n instanceof Ye?Je(r,n):(Ke(r,n),n))},Ge=!1,Ve=function(e,t){t!==e.node&&(e.node&&(Ge=!0),e.node=t)},Ue=function(e){return{p:e,stack:[],entry:null}},Je=function(e,n){var r,a=n.fn,o=n.template,i=n.values,u=e.entry;return u&&u.fn===a||(e.entry=u={fn:a,hook:null},u.hook=function(e,t){return R(function(){var n=t.fn.apply(null,arguments);n instanceof _e?(Ke(e,n),Ve(t,Xe(t,n))):Ve(t,n);try{return t.node}finally{if(Ge){Ge=!1;for(var r=e;r.p;)r=r.p;qe(r.w,r.W)}}})}(Ue(e),u)),(r=u).hook.apply(r,[o].concat(t(i)))},Ke=function(e,t){var n=t.values;Qe(e,n,n.length)},Qe=function e(t,n,r){for(var a=t.stack,o=0;o<r;o++){var i=n[o];i instanceof Ye?n[o]=Je(a[o]||(a[o]=Ue(t)),i):i instanceof _e?Ke(a[o]||(a[o]=Ue(t)),i):D(i)?e(a[o]||(a[o]=Ue(t)),i,i.length):a[o]=null}r<a.length&&a.splice(r)},Xe=function(e,n){var r=n.type,a=n.template,o=n.values;return("svg"===r?Fe:De).for(e,r).apply(void 0,[a].concat(t(o)))};function Ye(e,t){this.fn=e,this.template=t.shift(),this.values=t}function et(e){var t=p(new a);return function(n,r){var a=t.get(n)||t.set(n,He(null)),o=a[r]||(a[r]=Ue(null));return function(t){for(var a=arguments.length,i=new Array(a>1?a-1:0),u=1;u<a;u++)i[u-1]=arguments[u];return Qe(o,i),e.for(n,r).apply(void 0,[t].concat(i))}}}function tt(){for(var e=[],t=0,n=arguments.length;t<n;)e.push(arguments[t++]);return e}return e.Component=ze,e.contextual=function(e){var t=!0,n=null,r=d(function(){return e.apply(n,arguments)});return function e(){var a=r.apply(n=this,arguments);return t&&(t=!t,M(r)&&E.set(e,E.get(r))),a}},e.createContext=function(e){var t={value:e,provide:x};return N.set(t,[]),t},e.html=Ie,e.neverland=Be,e.render=qe,e.svg=Pe,e.useCallback=function(e,t){return L(function(){return e},t)},e.useContext=function(e){var t=h,n=t.hook,r=t.args,a=N.get(e),o={hook:n,args:r};return a.some(C,o)||a.push(o),e.value},e.useEffect=j,e.useLayoutEffect=O,e.useMemo=L,e.useReducer=w,e.useRef=function(e){var t=h.i++,n=h,r=n.stack;return t===n.length&&(h.length=r.push({current:e})),r[t]},e.useState=function(e,t){return w(b,e,void 0,t)},Object.defineProperty(e,"__esModule",{value:!0}),e}({});
