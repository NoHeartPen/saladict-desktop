(window.saladictEntry=window.saladictEntry||[]).push([[64],{1353:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),r=n.n(a),c="undefined"!=typeof window?a.useLayoutEffect:a.useEffect;const l=e=>{const{tag:t="div",html:n,...l}=e,i=Object(a.useMemo)(()=>{try{const e=document.createDocumentFragment(),t=(new DOMParser).parseFromString(n,"text/html");return Array.from(t.body.childNodes).forEach(t=>{e.appendChild(t)}),e}catch(e){!1}return null},[n]),[s,o]=Object(a.useState)(null);return c(()=>{if(i&&s){for(;s.childNodes.length>0;)s.childNodes[0].remove();s.appendChild(i)}},[i,s]),r.a.createElement(t,{...l,ref:o})}},1355:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=e=>{const{title:t,className:n,children:a,...c}=e;return r.a.createElement("div",{className:"entryBox-Wrap"+(n?" "+n:""),...c},r.a.createElement("section",{className:"entryBox"},r.a.createElement("h1",{className:"entryBox-Title"},t),r.a.createElement("div",null,a)))}},684:function(e,t,n){"use strict";n.r(t),n.d(t,"DictZdic",(function(){return i}));var a=n(0),r=n.n(a),c=n(1355),l=n(1353);const i=({result:e})=>r.a.createElement("div",null,e.map(e=>r.a.createElement(c.a,{title:e.title,key:e.title},r.a.createElement(l.a,{html:e.content}))));t.default=i}}]);