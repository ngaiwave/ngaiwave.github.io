import{E as n,d as j,z as q,r as i,j as x,C as F,G,V as W,h as o,o as H,c as J,a as t,w as a,b as Q,P as X,i as v,t as h,M as Y,g as Z}from"./index-651853eb.js";import{g as ee}from"./algorithm-ae28a8c0.js";const te=[{colKey:"row-select",type:"multiple",width:64,fixed:"left"},{title:n("pages.algorithm.embedding.resourceNameAndId"),align:"left",width:220,colKey:"resourceId",fixed:"left"},{title:n("pages.algorithm.embedding.resourceNameAndId"),colKey:"resourceName",width:160},{title:n("pages.algorithm.embedding.category"),colKey:"category",width:160},{title:n("pages.algorithm.embedding.type"),width:160,ellipsis:!0,colKey:"type"},{title:n("pages.algorithm.embedding.address"),width:160,ellipsis:!0,colKey:"url"},{title:n("pages.algorithm.embedding.country"),width:160,ellipsis:!0,colKey:"country"},{title:n("pages.algorithm.embedding.language"),width:160,ellipsis:!0,colKey:"language"},{title:n("pages.algorithm.embedding.uploadTime"),width:160,ellipsis:!0,colKey:"uploadTime"},{title:n("pages.algorithm.embedding.updateTime"),width:160,ellipsis:!0,colKey:"updateTime"},{title:n("pages.algorithm.resources.operation"),align:"left",fixed:"right",width:80,colKey:"op"}],ae={name:"",no:"",type:""},le={class:"left-operation-container"},oe={name:"Resources"},ne=j({...oe,setup(se){const V=q(),K=i(te),d=i({...ae}),c=i([]),m=i({defaultPageSize:20,total:100,defaultCurrent:1}),f=i(!1),k=async()=>{f.value=!0;try{const{list:e}=await ee();c.value=e,m.value={...m.value,total:e.length}}catch(e){console.log(e)}finally{f.value=!1}},r=i(-1),N=x(()=>{if(r.value>-1){const{name:e}=c.value[r.value];return`删除后，${e}的所有合同信息将被清空，且无法恢复`}return""});F(()=>{k()});const p=i(!1),g=i([1,2]);G();const b=()=>{r.value=-1},T=()=>{c.value.splice(r.value,1),m.value.total=c.value.length;const e=g.value.indexOf(r.value);e>-1&&g.value.splice(e,1),p.value=!1,Y.success("删除成功"),b()},S=()=>{b()},$="index",I=e=>{g.value=e},U=(e,l)=>{console.log("分页变化",e,l)},D=(e,l)=>{console.log("统一Change",e,l)},L=e=>{r.value=e.rowIndex,p.value=!0},M=x(()=>({offsetTop:V.isUseTabsRouter?48:0,container:`.${W}-layout`}));return(e,l)=>{const w=o("t-select"),_=o("t-form-item"),u=o("t-col"),P=o("t-input"),y=o("t-row"),C=o("t-button"),R=o("t-form"),B=o("t-link"),O=o("t-space"),z=o("t-table"),A=o("t-card"),E=o("t-dialog");return H(),J("div",null,[t(A,{class:"list-card-container",bordered:!1},{default:a(()=>[t(y,{justify:"space-between"},{default:a(()=>[Q("div",le,[t(R,{ref:"form",data:d.value,"label-width":80,colon:""},{default:a(()=>[t(y,null,{default:a(()=>[t(u,{span:10},{default:a(()=>[t(y,{gutter:[24,24]},{default:a(()=>[t(u,{span:5},{default:a(()=>[t(_,{label:e.$t("pages.algorithm.embedding.type"),name:"type"},{default:a(()=>[t(w,{modelValue:d.value.type,"onUpdate:modelValue":l[0]||(l[0]=s=>d.value.type=s),style:{display:"inline-block"},class:"form-item-content",clearable:""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),t(u,{span:5},{default:a(()=>[t(_,{label:e.$t("pages.algorithm.embedding.resourceName"),name:"no"},{default:a(()=>[t(P,{modelValue:d.value.no,"onUpdate:modelValue":l[1]||(l[1]=s=>d.value.no=s),class:"form-item-content",style:{minWidth:"134px"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),t(u,{span:5},{default:a(()=>[t(_,{label:e.$t("pages.algorithm.embedding.category"),name:"type"},{default:a(()=>[t(w,{modelValue:d.value.type,"onUpdate:modelValue":l[2]||(l[2]=s=>d.value.type=s),style:{display:"inline-block"},class:"form-item-content",clearable:""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1}),t(u,{span:2,class:"operation-container"},{default:a(()=>[t(C,{theme:"primary",type:"submit",style:X({marginLeft:"var(--td-comp-margin-s)"})},{default:a(()=>[v(h(e.$t("components.commonTable.query")),1)]),_:1},8,["style"]),t(C,{type:"reset",variant:"base",theme:"default"},{default:a(()=>[v(h(e.$t("components.commonTable.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["data"])])]),_:1}),t(z,{data:c.value,columns:K.value,"row-key":$,"vertical-align":"top",hover:!0,pagination:m.value,"selected-row-keys":g.value,loading:f.value,"header-affixed-top":M.value,onPageChange:U,onChange:D,onSelectChange:I},{op:a(s=>[t(O,null,{default:a(()=>[t(B,{theme:"danger",onClick:ie=>L(s)},{default:a(()=>[v(h(e.$t("pages.algorithm.embedding.delete")),1)]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},8,["data","columns","pagination","selected-row-keys","loading","header-affixed-top"])]),_:1}),t(E,{visible:p.value,"onUpdate:visible":l[3]||(l[3]=s=>p.value=s),header:"确认删除当前所选合同？",body:N.value,"on-cancel":S,onConfirm:T},null,8,["visible","body"])])}}});const ce=Z(ne,[["__scopeId","data-v-2a53406a"]]);export{ce as default};