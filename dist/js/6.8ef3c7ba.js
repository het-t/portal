"use strict";(self["webpackChunkportal"]=self["webpackChunkportal"]||[]).push([[6],{3006:function(s,a,t){t.r(a),t.d(a,{default:function(){return p}});var e=t(6252),l=t(3577),i=t(754);const c=s=>((0,e.dD)("data-v-1da148c5"),s=s(),(0,e.Cn)(),s),n={class:"card"},r={class:"card-head m0 pb16 pt16 pr16 pl16"},w=c((()=>(0,e._)("h5",{class:"table-head m0"},"Tasks",-1))),o=(0,e.Uk)(" create task "),A={class:"mr16 ml16 mt16"},d=c((()=>(0,e._)("tr",null,[(0,e._)("th"),(0,e._)("th",null,"title"),(0,e._)("th",null,"client"),(0,e._)("th",null,"progress"),(0,e._)("th",null,"status")],-1))),C={class:"dots"},M=c((()=>(0,e._)("img",{src:i,alt:"",class:"dots"},null,-1)));function h(s,a,t,i,c,h){const D=(0,e.up)("router-link"),k=(0,e.up)("tasks-progress");return(0,e.wg)(),(0,e.iD)("div",null,[(0,e._)("div",n,[(0,e._)("div",r,[w,(0,e.Wm)(D,{to:"/u/tasks/create-task",class:"table-action"},{default:(0,e.w5)((()=>[o])),_:1})]),(0,e._)("div",A,[(0,e._)("table",null,[d,((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(c.tasksList,((s,a)=>((0,e.wg)(),(0,e.iD)("tr",{class:"tr",key:a},[(0,e._)("td",C,[(0,e.Wm)(D,{to:{name:"edit_task",state:{taskId:s.taskId}}},{default:(0,e.w5)((()=>[M])),_:2},1032,["to"])]),(0,e._)("td",null,(0,l.zw)(s.taskTitle),1),(0,e._)("td",null,(0,l.zw)(s.taskClient),1),(0,e._)("td",null,[(0,e.Wm)(k)]),(0,e._)("td",null,(0,l.zw)(s.taskStatus),1)])))),128))])])])])}const D=s=>((0,e.dD)("data-v-1f4ce2f0"),s=s(),(0,e.Cn)(),s),k={class:"flex"},u={class:"base-timer"},g={class:"base-timer__svg",viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg"},B={class:"base-timer__circle"},E=D((()=>(0,e._)("circle",{class:"base-timer__path-elapsed",cx:"32",cy:"32",r:"25"},null,-1))),G=["stroke-dasharray"],Q=D((()=>(0,e._)("p",{class:"m0 ml16"}," 1/2 ",-1)));function J(s,a,t,l,i,c){return(0,e.wg)(),(0,e.iD)("div",k,[(0,e._)("div",null,[(0,e._)("div",u,[((0,e.wg)(),(0,e.iD)("svg",g,[(0,e._)("g",B,[E,(0,e._)("path",{"stroke-dasharray":i.length,class:"base-timer__path-remaining",d:"\r\n                            M 32, 32\r\n                                m -25, 0\r\n                                a 25,25 0 1,0 50,0\r\n                                a 25,25 0 1,0 -50,0\r\n                        "},null,8,G)])]))])]),Q])}var v={name:"TasksProgress",data(){return{length:78.5}},computed:{circleDasharray(){return 5}}},m=t(3744);const O=(0,m.Z)(v,[["render",J],["__scopeId","data-v-1f4ce2f0"]]);var T=O,N={name:"TasksList",data(){return{tasksList:[]}},created(){this.tasksList=[{taskId:1,taskTitle:"Incorporation of Company",taskClient:"TechAvidus",taskStatus:"pending"},{taskId:2,taskTitle:"Income Tax return",taskClient:"TechSome",taskStatus:"done"}]},components:{TasksProgress:T}};const H=(0,m.Z)(N,[["render",h],["__scopeId","data-v-1da148c5"]]);var p=H},754:function(s){s.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=6.8ef3c7ba.js.map