import{_ as A}from"./index.vue_vue_type_script_setup_true_lang-d251c293.js";import{_ as F}from"./DialogForm.vue_vue_type_script_setup_true_lang-fd77574d.js";import j from"./IQTestCard-5e313e9c.js";import{d as q,r as n,j as E,C as Y,h as s,o as u,c,b as p,a as l,w as v,i as G,t as H,e as b,u as J,Y as K,I as h,F as x,q as O,M as Q,g as R}from"./index-651853eb.js";import"./more-1d61723b.js";const W={class:"list-card-operation"},X={class:"search-input"},Z={class:"list-card-items"},ee={class:"list-card-pagination"},te={key:1,class:"list-card-loading"},ae={name:"ListCard"},oe=q({...ae,setup(le){const g={name:"",status:"",description:"",type:"0",mark:"",amount:0,mainImg:[],dollImgs:[]},t=n({current:1,pageSize:24,total:0}),i=n(void 0),f=n([]),m=n(!0),y=async()=>{try{}catch(e){console.log(e)}finally{m.value=!1}},z=E(()=>i.value?`确认删除后${i.value.name}的所有产品信息将被清空, 且无法恢复`:"");Y(()=>{y()});const d=n(!1),_=n(""),r=n(!1),C=n({...g}),V=e=>{t.value.pageSize=e,t.value.current=1},S=e=>{t.value.current=e},k=e=>{r.value=!0,i.value=e},I=e=>{r.value=!0,i.value=e},D=()=>{const{index:e}=i.value;f.value.splice(e-1,1),r.value=!1,Q.success("删除成功")},$=()=>{i.value=void 0,C.value={...g}},M=e=>{d.value=!0};return(e,o)=>{const N=s("t-button"),w=s("t-input"),B=s("t-col"),L=s("t-row"),P=s("t-pagination"),T=s("t-loading"),U=s("t-dialog");return u(),c("div",null,[p("div",W,[l(N,{onClick:o[0]||(o[0]=a=>d.value=!0)},{default:v(()=>[G(H(e.$t("pages.train.test.createNewTest")),1)]),_:1}),p("div",X,[l(A),l(w,{modelValue:_.value,"onUpdate:modelValue":o[1]||(o[1]=a=>_.value=a),placeholder:e.$t("pages.train.test.placeholder"),clearable:""},{"suffix-icon":v(()=>[_.value===""?(u(),b(J(K),{key:0,size:"var(--td-comp-size-xxxs)"})):h("",!0)]),_:1},8,["modelValue","placeholder"])])]),l(F,{visible:d.value,"onUpdate:visible":o[2]||(o[2]=a=>d.value=a),data:C.value},null,8,["visible","data"]),t.value.total>0&&!m.value?(u(),c(x,{key:0},[p("div",Z,[l(L,{gutter:[16,16]},{default:v(()=>[(u(!0),c(x,null,O(f.value.slice(t.value.pageSize*(t.value.current-1),t.value.pageSize*t.value.current),a=>(u(),b(B,{key:a.index,lg:4,xs:6,xl:3},{default:v(()=>[l(j,{class:"list-card-item",product:a,onDeleteItem:k,onManageProduct:M,onChangeStatus:I},null,8,["product"])]),_:2},1024))),128))]),_:1})]),p("div",ee,[l(P,{modelValue:t.value.current,"onUpdate:modelValue":o[3]||(o[3]=a=>t.value.current=a),"page-size":t.value.pageSize,"onUpdate:pageSize":o[4]||(o[4]=a=>t.value.pageSize=a),total:t.value.total,"page-size-options":[12,24,36],onPageSizeChange:V,onCurrentChange:S},null,8,["modelValue","page-size","total"])])],64)):m.value?(u(),c("div",te,[l(T,{size:"large",text:e.$t("pages.dollModel.placeholder")},null,8,["text"])])):h("",!0),l(U,{visible:r.value,"onUpdate:visible":o[5]||(o[5]=a=>r.value=a),header:e.$t("pages.dollModel.deleteConfirm"),body:z.value,"on-cancel":$,onConfirm:D},null,8,["visible","header","body"])])}}});const de=R(oe,[["__scopeId","data-v-33c5da77"]]);export{de as default};