import{d as y,j as a,v as O,x as d,y as h}from"./index-651853eb.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 4a3 3 0 100 6 3 3 0 000-6zM7 7a5 5 0 1110 0A5 5 0 017 7zM3.5 19a5 5 0 015-5h7a5 5 0 015 5v2h-2v-2a3 3 0 00-3-3h-7a3 3 0 00-3 3v2h-2v-2z"}}]},b=y({name:"User1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=O(t),p=a(()=>["t-icon","t-icon-user-1",o.value]),v=a(()=>s(s({},c.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>d(m,u.value)}});export{b as default};