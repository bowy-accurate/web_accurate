const e={};function t(t){e.context=t}const n={equals:(e,t)=>e===t};let o=S;const s={},r={owned:null,cleanups:null,context:null,owner:null};var l=null;let i=null,u=null,c=null,f=null,a=0;function d(e,t){t=t?Object.assign({},n,t):n;const o={value:e,observers:null,observerSlots:null,pending:s,comparator:t.equals||void 0};return[v.bind(o),e=>("function"==typeof e&&(e=e(o.pending!==s?o.pending:o.value)),b(o,e))]}function h(e,t,n){y(x(e,t,!1))}function p(e,t,o){o=o?Object.assign({},n,o):n;const r=x(e,t,!0);return r.pending=s,r.observers=null,r.observerSlots=null,r.state=0,r.comparator=o.equals||void 0,y(r),v.bind(r)}function g(e){let t,n=i;return i=null,t=e(),i=n,t}function v(){if(this.state&&this.sources){const e=c;c=null,1===this.state?y(this):A(this),c=e}if(i){const e=this.observers?this.observers.length:0;i.sources?(i.sources.push(this),i.sourceSlots.push(e)):(i.sources=[this],i.sourceSlots=[e]),this.observers?(this.observers.push(i),this.observerSlots.push(i.sources.length-1)):(this.observers=[i],this.observerSlots=[i.sources.length-1])}return this.value}function b(e,t,n){return e.comparator&&e.comparator(e.value,t)?t:u?(e.pending===s&&u.push(e),e.pending=t,t):(e.value=t,!e.observers||c&&!e.observers.length||m((()=>{for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];null,n.observers&&2!==n.state&&C(n),n.state=1,n.pure?c.push(n):f.push(n)}if(c.length>1e6)throw c=[],new Error}),!1),t)}function y(e){if(!e.fn)return;N(e);const t=l,n=i,o=a;i=l=e,function(e,t,n){let o;try{o=e.fn(t)}catch(s){E(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?b(e,o):e.value=o,e.updatedAt=n)}(e,e.value,o),i=n,l=t}function x(e,t,n,o){const s={fn:e,state:1,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:l,context:null,pure:n};return null===l||l!==r&&(l.owned?l.owned.push(s):l.owned=[s]),s}function w(e){let t,n=1===e.state&&e;if(e.suspense&&g(e.suspense.inFallback))return e.suspense.effects.push(e);for(;e=e.owner;)2===e.state?t=e:1===e.state&&(n=e,t=void 0);if(t){const e=c;if(c=null,A(t),c=e,!n||1!==n.state)return}n&&y(n)}function m(e,t){if(c)return e();let n=!1;t||(c=[]),f?n=!0:f=[],a++;try{e()}catch(r){E(r)}finally{!function(e){c&&(S(c),c=null);if(e)return;f.length?function(e){if(u)return e();let t;const n=u=[];try{t=e()}finally{u=null}m((()=>{for(let e=0;e<n.length;e+=1){const t=n[e];if(t.pending!==s){const e=t.pending;t.pending=s,b(t,e)}}}),!1)}((()=>{o(f),f=null})):f=null}(n)}}function S(e){for(let t=0;t<e.length;t++)w(e[t])}function A(e){e.state=0;for(let t=0;t<e.sources.length;t+=1){const n=e.sources[t];n.sources&&(1===n.state?w(n):2===n.state&&A(n))}}function C(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=2,n.observers&&C(n))}}function N(e){let t;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),o=t.observers;if(o&&o.length){const e=o.pop(),s=t.observerSlots.pop();n<o.length&&(e.sourceSlots[s]=n,o[n]=e,t.observerSlots[n]=s)}}if(e.owned){for(t=0;t<e.owned.length;t++)N(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function E(e){throw e}function T(n,o){if(e.context){const s=e.context;t({...e.context,id:`${e.context.id}${e.context.count++}.`,count:0});const r=g((()=>n(o)));return t(s),r}return g((()=>n(o)))}function B(e){let t=!1;const n=p((()=>e.when),void 0,{equals:(e,n)=>t?e===n:!e==!n});return p((()=>{const o=n();if(o){const n=e.children;return(t="function"==typeof n&&n.length>0)?g((()=>n(o))):n}return e.fallback}))}function $(e,t,n){let o=n.length,s=t.length,r=o,l=0,i=0,u=t[s-1].nextSibling,c=null;for(;l<s||i<r;)if(t[l]!==n[i]){for(;t[s-1]===n[r-1];)s--,r--;if(s===l){const t=r<o?i?n[i-1].nextSibling:n[r-i]:u;for(;i<r;)e.insertBefore(n[i++],t)}else if(r===i)for(;l<s;)c&&c.has(t[l])||e.removeChild(t[l]),l++;else if(t[l]===n[r-1]&&n[i]===t[s-1]){const o=t[--s].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--r],o),t[s]=n[r]}else{if(!c){c=new Map;let e=i;for(;e<r;)c.set(n[e],e++)}const o=c.get(t[l]);if(null!=o)if(i<o&&o<r){let u,f=l,a=1;for(;++f<s&&f<r&&null!=(u=c.get(t[f]))&&u===o+a;)a++;if(a>o-i){const s=t[l];for(;i<o;)e.insertBefore(n[i++],s)}else e.replaceChild(n[i++],t[l++])}else l++;else e.removeChild(t[l++])}}else l++,i++}function D(e,t,n){let o;return function(e,t){t&&(l=t);const n=i,o=l,s=0===e.length?r:{owned:null,cleanups:null,context:null,owner:o};let u;l=s,i=null;try{m((()=>u=e((()=>N(s)))),!0)}finally{i=n,l=o}}((s=>{o=s,O(t,e(),t.firstChild?null:void 0,n)})),()=>{o(),t.textContent=""}}function j(e,t,n){const o=document.createElement("template");o.innerHTML=e;let s=o.content.firstChild;return n&&(s=s.firstChild),s}function q(e,t=window.document){const n=t._$DX_DELEGATE||(t._$DX_DELEGATE=new Set);for(let o=0,s=e.length;o<s;o++){const s=e[o];n.has(s)||(n.add(s),t.addEventListener(s,P))}}function L(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function O(e,t,n,o){if(void 0===n||o||(o=[]),"function"!=typeof t)return _(e,t,o,n);h((o=>_(e,t(),o,n)),o)}function P(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get:()=>n});null!==n;){const o=n[t];if(o&&!n.disabled){const s=n[`${t}Data`];if(void 0!==s?o(s,e):o(e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function _(t,n,o,s,r){for(;"function"==typeof o;)o=o();if(n===o)return o;const l=typeof n,i=void 0!==s;if(t=i&&o[0]&&o[0].parentNode||t,"string"===l||"number"===l)if("number"===l&&(n=n.toString()),i){let e=o[0];e&&3===e.nodeType?e.data=n:e=document.createTextNode(n),o=M(t,o,s,e)}else o=""!==o&&"string"==typeof o?t.firstChild.data=n:t.textContent=n;else if(null==n||"boolean"===l){if(e.context)return o;o=M(t,o,s)}else{if("function"===l)return h((()=>{let e=n();for(;"function"==typeof e;)e=e();o=_(t,e,o,s)})),()=>o;if(Array.isArray(n)){const l=[];if(k(l,n,r))return h((()=>o=_(t,l,o,s,!0))),()=>o;if(e.context&&o.length)return o;if(0===l.length){if(o=M(t,o,s),i)return o}else Array.isArray(o)?0===o.length?G(t,l,s):$(t,o,l):null==o||""===o?G(t,l):$(t,i&&o||[t.firstChild],l);o=l}else if(n instanceof Node){if(Array.isArray(o)){if(i)return o=M(t,o,s,n);M(t,o,null,n)}else null!=o&&""!==o&&t.firstChild?t.replaceChild(n,t.firstChild):t.appendChild(n);o=n}}return o}function k(e,t,n){let o=!1;for(let s=0,r=t.length;s<r;s++){let r,l=t[s];if(l instanceof Node)e.push(l);else if(null==l||!0===l||!1===l);else if(Array.isArray(l))o=k(e,l)||o;else if("string"==(r=typeof l))e.push(document.createTextNode(l));else if("function"===r)if(n){for(;"function"==typeof l;)l=l();o=k(e,Array.isArray(l)?l:[l])||o}else e.push(l),o=!0;else e.push(document.createTextNode(l.toString()))}return o}function G(e,t,n){for(let o=0,s=t.length;o<s;o++)e.insertBefore(t[o],n)}function M(e,t,n,o){if(void 0===n)return e.textContent="";const s=o||document.createTextNode("");if(t.length){let o=!1;for(let r=t.length-1;r>=0;r--){const l=t[r];if(s!==l){const t=l.parentNode===e;o||r?t&&e.removeChild(l):t?e.replaceChild(s,l):e.insertBefore(s,n)}else o=!0}}else e.insertBefore(s,n);return[s]}export{B as S,p as a,T as b,d as c,q as d,h as e,O as i,D as r,L as s,j as t};
