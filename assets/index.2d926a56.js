import{t as o,d as e,c as n,a as t,i as s,s as l,b as i,e as r,r as a}from"./vendor.b8bbe8d2.js";var c="_App_9g4xh_1",d="_logo_9g4xh_5",_="_header_9g4xh_11",v="_link_9g4xh_22";const g=o("<div>COUNTER = <br><button>Count </button><br>CALCCOUNT = </div>"),b=()=>{const[o,e]=n(0);console.log("Main:count = "+o()),t((()=>{console.log("createEffect:count = "+o())}));const l=()=>(console.log("calcCount:count = "+o()),o()+1-2);return(()=>{const n=g.cloneNode(!0),t=n.firstChild.nextSibling,i=t.nextSibling;i.firstChild;return i.nextSibling.nextSibling,s(n,o,t),i.$$click=()=>e((o=>o+1)),s(i,o,null),s(n,l,null),n})()};e(["click"]);const u=o('<div><header><img alt="logo"><p>Edit <code>src/App.jsx</code> and save to reload.</p><a href="https://github.com/ryansolid/solid" target="_blank" rel="noopener noreferrer">Learn Solid</a></header></div>');a((function(){return(()=>{const o=u.cloneNode(!0),e=o.firstChild,n=e.firstChild,t=n.nextSibling.nextSibling;return l(n,"src","/web_accurate/assets/logo.123b04bc.svg"),s(e,i(b,{}),null),r((s=>{const l=c,i=_,r=d,a=v;return l!==s._v$&&(o.className=s._v$=l),i!==s._v$2&&(e.className=s._v$2=i),r!==s._v$3&&(n.className=s._v$3=r),a!==s._v$4&&(t.className=s._v$4=a),s}),{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),o})()}),document.getElementById("root"));