import{d,j as a,v as y,x as O,y as g}from"./index-651853eb.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){g(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M0 3h24v18h-6v-7.6a8.42 8.42 0 00-1.35-1.05 8.64 8.64 0 00-9.3 0A8.42 8.42 0 006 13.4V21H0V3zm6 7.84l.28-.19a10.64 10.64 0 0111.44 0l.28.19V5H6v5.84zM20 5v14h2V5h-2zM4 5H2v14h2V5z"}}]},b=d({name:"Bridge5Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=y(t),p=a(()=>["t-icon","t-icon-bridge-5",o.value]),v=a(()=>s(s({},c.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>O(h,u.value)}});export{b as default};