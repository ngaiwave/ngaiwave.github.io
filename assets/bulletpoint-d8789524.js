import{d as m,j as a,v as y,x as O,y as h}from"./index-651853eb.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){h(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M3 6H2V4h2v2H3zm0 7H2v-2h2v2H3zm-1 7h2v-2H2v2zM8 4H7v2h15V4H8zm-1 7h15v2H7v-2zm1 7H7v2h15v-2H8z"}}]},g=m({name:"BulletpointIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:v}=y(r),p=a(()=>["t-icon","t-icon-bulletpoint",l.value]),c=a(()=>s(s({},v.value),t.style)),u=a(()=>({class:p.value,style:c.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(d,u.value)}});export{g as default};