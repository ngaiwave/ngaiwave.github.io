import{bL as h,bM as c}from"./charts-bdc98a47.js";import{S as l,E as o}from"./index-651853eb.js";function b(t){const a={xAxis:{type:"category",show:!1,data:["周一","周二","周三","周四","周五","周六","周日"]},yAxis:{show:!1,type:"value"},grid:{top:0,left:0,right:0,bottom:0}};return t==="line"?{...a,color:["#fff"],series:[{data:[150,230,224,218,135,147,260],type:t,showSymbol:!0,symbol:"circle",symbolSize:0,markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},lineStyle:{width:2}}]}:{...a,color:l(),series:[{data:[100,130,184,218,{value:135,itemStyle:{opacity:.2}},{value:118,itemStyle:{opacity:.2}},{value:60,itemStyle:{opacity:.2}}],type:t,barWidth:9}]}}function f({dateTime:t=[],placeholderColor:e,borderColor:a}){const s=[],r=[],n=[];for(let i=0;i<10;i++){if(t.length>0){const m=(new Date(t[1]).getTime()-new Date(t[0]).getTime())/10,y=new Date(t[0]).getTime()+m*i;s.push(h(y).format("YYYY-MM-DD"))}else s.push(h().subtract(10-i,"day").format("YYYY-MM-DD"));r.push(c().toString()),n.push(c().toString())}return{color:l(),tooltip:{trigger:"item"},xAxis:{type:"category",data:s,axisLabel:{color:e},axisLine:{lineStyle:{color:l()[1],width:1}}},yAxis:{type:"value",axisLabel:{color:e},splitLine:{lineStyle:{color:a}}},grid:{top:"5%",left:"25px",right:0,bottom:"60px"},legend:{icon:"rect",itemWidth:12,itemHeight:4,itemGap:48,textStyle:{fontSize:12,color:e},left:"center",bottom:"0",orient:"horizontal",data:[o("pages.dashboardBase.chart.thisMonth"),o("pages.dashboardBase.chart.lastMonth")]},series:[{name:o("pages.dashboardBase.chart.thisMonth"),data:n,type:"bar"},{name:o("pages.dashboardBase.chart.lastMonth"),data:r,type:"bar"}]}}function S({dateTime:t=[],placeholderColor:e,borderColor:a}){const s=[],r=[],n=[];for(let i=0;i<10;i++){if(t.length>0){const m=(new Date(t[1]).getTime()-new Date(t[0]).getTime())/10,y=new Date(t[0]).getTime()+m*i;s.push(h(y).format("MM-DD"))}else s.push(h().subtract(10-i,"day").format("MM-DD"));r.push(c().toString()),n.push(c().toString())}return{color:l(),tooltip:{trigger:"item"},grid:{left:"0",right:"20px",top:"5px",bottom:"36px",containLabel:!0},legend:{left:"center",bottom:"0",orient:"horizontal",data:[o("pages.dashboardBase.chart.thisMonth"),o("pages.dashboardBase.chart.lastMonth")],textStyle:{fontSize:12,color:e}},xAxis:{type:"category",data:s,boundaryGap:!1,axisLabel:{color:e},axisLine:{lineStyle:{width:1}}},yAxis:{type:"value",axisLabel:{color:e},splitLine:{lineStyle:{color:a}}},series:[{name:o("pages.dashboardBase.chart.thisMonth"),data:n,type:"line",smooth:!1,showSymbol:!0,symbol:"circle",symbolSize:8,itemStyle:{borderColor:a,borderWidth:1},areaStyle:{opacity:.1}},{name:o("pages.dashboardBase.chart.lastMonth"),data:r,type:"line",smooth:!1,showSymbol:!0,symbol:"circle",symbolSize:8,itemStyle:{borderColor:a,borderWidth:1}}]}}function x({radius:t=42,textColor:e,placeholderColor:a,containerColor:d}){return{color:l(),tooltip:{show:!1,trigger:"axis",position:null},grid:{top:"0",right:"0"},legend:{selectedMode:!1,itemWidth:12,itemHeight:4,textStyle:{fontSize:12,color:a},left:"center",bottom:"0",orient:"horizontal"},series:[{name:"销售渠道",type:"pie",radius:["48%","60%"],avoidLabelOverlap:!0,selectedMode:!0,silent:!0,itemStyle:{borderColor:d,borderWidth:1},label:{show:!0,position:"center",formatter:["{value|{d}%}","{name|{b}}"].join(`
`),rich:{value:{color:e,fontSize:28,fontWeight:"normal",lineHeight:46},name:{color:"#909399",fontSize:12,lineHeight:14}}},emphasis:{scale:!0,label:{show:!0,formatter:["{value|{d}%}","{name|{b}渠道占比}"].join(`
`),rich:{value:{color:e,fontSize:28,fontWeight:"normal",lineHeight:46},name:{color:"#909399",fontSize:14,lineHeight:14}}}},labelLine:{show:!1},data:[{value:1048,name:o("pages.dashboardBase.topPanel.analysis.channel1")},{value:t*7,name:o("pages.dashboardBase.topPanel.analysis.channel2")}]}]}}export{x as a,b,f as c,S as g};