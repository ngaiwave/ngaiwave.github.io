import{d as y,j as a,v as O,x as m,y as d}from"./index-651853eb.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 3a8.98 8.98 0 00-6.6 15.07l.68.73-1.47 1.36-.68-.73a10.98 10.98 0 1116.14 0l-.68.73-1.47-1.36.68-.73A8.98 8.98 0 0012 3zm0 4.5a4.5 4.5 0 00-3.3 7.55l.67.74-1.47 1.35-.68-.73a6.5 6.5 0 119.56 0l-.68.73-1.47-1.35.68-.74A4.5 4.5 0 0012 7.5zM10 12a2 2 0 114 0 2 2 0 01-4 0zm1.95 3.97L16.94 23H6.96l4.99-7.03zm0 3.45L10.83 21h2.23l-1.11-1.58z"}}]},j=y({name:"GpsIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:p}=O(t),c=a(()=>["t-icon","t-icon-gps",l.value]),u=a(()=>s(s({},p.value),r.style)),v=a(()=>({class:c.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>m(g,v.value)}});export{j as default};