"use strict";(self["webpackChunkportal"]=self["webpackChunkportal"]||[]).push([[398],{692:function(t,e,s){s.d(e,{Z:function(){return d}});var n=s(6252);const i={class:"card"},l={class:"mr16 ml16 mt16"},o={class:"table-main-head ml16 mb16"};function a(t,e,s,a,r,c){return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",l,[(0,n._)("div",o,[(0,n.WI)(t.$slots,"tableHeader")]),(0,n._)("table",null,[(0,n._)("thead",null,[(0,n.WI)(t.$slots,"thead")]),(0,n._)("tbody",null,[(0,n.WI)(t.$slots,"tbody")])]),(0,n.WI)(t.$slots,"default")])])}var r={name:"TableMain"},c=s(3744);const u=(0,c.Z)(r,[["render",a]]);var d=u},7398:function(t,e,s){s.d(e,{Z:function(){return kt}});var n=s(6252),i=s(3577),l=s(9963);const o={class:"setting-container"},a={class:"card"},r={id:"setting-form",class:"pr24 pl24 pt16 pb16"},c={key:0,class:"hr"},u={key:2,class:"grid mt16"},d=["title","for"],p=["size","onUpdate:modelValue","name","id","type"],g={class:"flex ml8"},h={key:2,style:{display:"flex",gap:"8px","align-items":"center"},class:"mt16"},m={key:3,style:{"border-left":"solid 6px #e5e5e5"}};function f(t,e,s,f,w,y){const v=(0,n.up)("toggle-switch"),k=(0,n.up)("font-awesome-icon");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",a,[(0,n.WI)(t.$slots,"table-head",{},void 0,!0),(0,n._)("form",r,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(w.settingsForm,((t,s)=>((0,n.wg)(),(0,n.iD)(n.HY,{key:s},[1==t.displayOrder?((0,n.wg)(),(0,n.iD)("div",c)):(0,n.kq)("",!0),"toggle"==t.type?((0,n.wg)(),(0,n.j4)(v,{key:1,class:"grid",onSwitchToggled:e[0]||(e[0]=t=>y.save(t)),name:new String(t.setting),value:t.value},{label:(0,n.w5)((()=>[(0,n.Uk)((0,i.zw)(t.meta?.label),1)])),_:2},1032,["name","value"])):(0,n.kq)("",!0),"toggle"!=t.type?((0,n.wg)(),(0,n.iD)("div",u,[t.meta.label?((0,n.wg)(),(0,n.iD)("label",{key:0,style:{width:"150px"},title:t.meta?.tooltip,for:t.setting},(0,i.zw)(t.meta?.label),9,d)):(0,n.kq)("",!0),"input"==t.type?(0,n.wy)(((0,n.wg)(),(0,n.iD)("input",{key:1,size:t.value.length,"onUpdate:modelValue":e=>w.values[t.setting]=e,name:t.setting,id:t.setting,type:t.meta?.type},null,8,p)),[[l.YZ,w.values[t.setting]]]):(0,n.kq)("",!0),(0,n._)("div",g,[1==t?.meta?.requireAuth?((0,n.wg)(),(0,n.j4)(k,{key:0,title:"send OTP",onClick:(0,l.iM)((e=>y.getOtp({key:t.setting,value:w.values[t.setting]},t.meta.getOtp)),["prevent"]),icon:["solid","save"],class:"save-btn"},null,8,["onClick"])):((0,n.wg)(),(0,n.j4)(k,{key:1,onClick:(0,l.iM)((e=>y.save({key:t.setting,value:w.values[t.setting]})),["prevent"]),class:"save-btn",icon:["solid","save"]},null,8,["onClick"]))]),1==t.meta.requireAuth&&w.otpFor==t.setting?((0,n.wg)(),(0,n.iD)("div",h,[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>w.otp=t),type:"text",placeholder:"OTP"},null,512),[[l.nr,w.otp]]),(0,n.Wm)(k,{onClick:(0,l.iM)((e=>y.verifyOtp({otp:w.otp},t.meta.verify)),["prevent"]),class:"save-btn",icon:["fas","arrow-up-right-from-square"]},null,8,["onClick"])])):(0,n.kq)("",!0)])):(0,n.kq)("",!0),t.meta.component?((0,n.wg)(),(0,n.iD)("div",m,[((0,n.wg)(),(0,n.j4)((0,n.LL)(t.meta.component),{settingObj:t},null,8,["settingObj"]))])):(0,n.kq)("",!0)],64)))),128))])])])}var w=s(4754),y=s(4370);const v={class:"switch"},k=["title","id","name","value"],b=(0,n._)("div",{class:"slider round"},null,-1);function x(t,e,s,i,o,a){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.WI)(t.$slots,"label"),(0,n._)("label",v,[(0,n.wy)((0,n._)("input",{title:s.name,id:s.name,name:s.name,value:o.currentState,type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=t=>o.currentState=t),onClick:e[1]||(e[1]=(...t)=>a.toggleCheckbox&&a.toggleCheckbox(...t))},null,8,k),[[l.e8,o.currentState]]),b])])}var _={name:"ToggleSwitch",data(){return{currentState:!0}},props:{value:{type:String,required:!0},name:{type:String,required:!0}},methods:{toggleCheckbox(){1==this.currentState?this.currentState=!1:this.currentState=!0,this.$emit("switchToggled",{key:this.name,value:this.currentState})}},mounted(){"true"==this.value?this.currentState=!0:this.currentState=!1}},C=s(3744);const S=(0,C.Z)(_,[["render",x]]);var D=S;const W=t=>((0,n.dD)("data-v-3c3e1bca"),t=t(),(0,n.Cn)(),t),q={key:0,style:{height:"fit-content"},class:"ml16"},I={key:0,class:"mt16"},U=W((()=>(0,n._)("span",{class:"ml8"},"authenticate",-1))),$=W((()=>(0,n._)("span",{class:"ml8"},"new notification",-1))),O={key:2},N={style:{display:"flex"},class:"mt8"},T=W((()=>(0,n._)("label",{for:"custom-rule-check"},"Custom rule",-1))),V={key:0,class:"ntf-grid"},H=W((()=>(0,n._)("label",{for:"user"},"User",-1))),F=W((()=>(0,n._)("option",{value:"all"},"All",-1))),R=W((()=>(0,n._)("option",{value:"None"},"None",-1))),P=[F,R],j={key:1,class:"ntf-grid"},A=W((()=>(0,n._)("label",{for:"client"},"Client",-1))),Q=W((()=>(0,n._)("option",{value:"all"},"All",-1))),z=W((()=>(0,n._)("option",{value:"None"},"None",-1))),M=[Q,z],Y={key:2,class:"autocomplete mt16"},Z=W((()=>(0,n._)("label",{for:"ntf-rule-user-wa"},"User Rule",-1))),X={key:0,class:"suggestions"},E=["onClick"],L={key:3,class:"autocomplete mt16"},K=W((()=>(0,n._)("label",{for:"ntf-rule-client-wa"},"Client Rule",-1))),G={key:0,class:"suggestions"},B=["onClick"],J=W((()=>(0,n._)("span",{style:{display:"flex","justify-content":"center","text-align":"center",margin:"8px 0",width:"100%","max-width":"500px"},class:"mt8 mb8"},"OR",-1))),tt={class:"mt8 mb8"},et={class:"mt32",style:{display:"flex","flex-direction":"column"}},st=W((()=>(0,n._)("label",{for:"ntf-content"},"message",-1))),nt={class:"mt16",style:{display:"flex"}},it=W((()=>(0,n._)("label",{for:"consent"},"Send without asking for consent",-1))),lt={class:"mt16"},ot={key:1,class:"ntf-history-table mt12"},at=W((()=>(0,n._)("tr",null,[(0,n._)("th",null,"id"),(0,n._)("th",null,"to"),(0,n._)("th",null,"contact"),(0,n._)("th",null,"content"),(0,n._)("th",null,"status"),(0,n._)("th",null,"action")],-1))),rt={style:{display:"flex",gap:"12px"}};function ct(t,e,s,o,a,r){const c=(0,n.up)("font-awesome-icon"),u=(0,n.up)("table-main");return 2==s.settingObj.setting?((0,n.wg)(),(0,n.iD)("div",q,["true"==s.settingObj.value?((0,n.wg)(),(0,n.iD)("div",I,[0==a.ntfPopupVisible?((0,n.wg)(),(0,n.iD)("button",{key:0,class:"button neutral mr8",onClick:e[0]||(e[0]=(...t)=>r.getQr&&r.getQr(...t))},[(0,n.Wm)(c,{icon:["fas","plus"]}),U])):(0,n.kq)("",!0),0==a.ntfPopupVisible?((0,n.wg)(),(0,n.iD)("button",{key:1,class:"button neutral",onClick:e[1]||(e[1]=t=>a.ntfPopupVisible=!0)},[(0,n.Wm)(c,{icon:["fas","plus"]}),$])):((0,n.wg)(),(0,n.iD)("div",O,[(0,n._)("div",N,[(0,n.wy)((0,n._)("input",{onInput:e[2]||(e[2]=t=>{a.text.user="",a.text.client=""}),"onUpdate:modelValue":e[3]||(e[3]=t=>a.custom=t),style:{cursor:"pointer",width:"auto",margin:"0 8px 0 0"},type:"checkbox",name:"custom-rule",id:"custom-rule-check"},null,544),[[l.e8,a.custom]]),T]),a.custom?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",V,[H,(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":e[4]||(e[4]=t=>a.text.user=t),name:"user",id:"user"},P,512),[[l.bM,a.text.user]])])),a.custom?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",j,[A,(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":e[5]||(e[5]=t=>a.text.client=t),name:"client",id:"client"},M,512),[[l.bM,a.text.client]])])),a.custom?((0,n.wg)(),(0,n.iD)("div",Y,[Z,(0,n.wy)((0,n._)("textarea",{class:"mt8",placeholder:"'\\' for suggestions","onUpdate:modelValue":e[6]||(e[6]=t=>a.text.user=t),onInput:e[7]||(e[7]=t=>r.handleInput(t,"user")),name:"ntf-rule-user-wa",id:"ntf-rule-user-wa",cols:"30",rows:"2"},null,544),[[l.nr,a.text.user]]),a.showSuggestions.user?((0,n.wg)(),(0,n.iD)("div",X,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.suggestions.user,((t,e)=>((0,n.wg)(),(0,n.iD)("div",{key:e,onClick:e=>r.selectSuggestion(t,"user")},(0,i.zw)(t),9,E)))),128))])):(0,n.kq)("",!0)])):(0,n.kq)("",!0),a.custom?((0,n.wg)(),(0,n.iD)("div",L,[K,(0,n.wy)((0,n._)("textarea",{class:"mt8",placeholder:"'\\' for suggestions","onUpdate:modelValue":e[8]||(e[8]=t=>a.text.client=t),onInput:e[9]||(e[9]=t=>r.handleInput(t,"client")),name:"ntf-rule-client-wa",id:"ntf-rule-client-wa",cols:"30",rows:"2"},null,544),[[l.nr,a.text.client]]),a.showSuggestions.client?((0,n.wg)(),(0,n.iD)("div",G,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.suggestions.client,((t,e)=>((0,n.wg)(),(0,n.iD)("div",{key:e,onClick:e=>r.selectSuggestion(t,"client")},(0,i.zw)(t),9,B)))),128))])):(0,n.kq)("",!0)])):(0,n.kq)("",!0),J,(0,n._)("div",tt,[(0,n._)("input",{onChange:e[10]||(e[10]=t=>a.ntfFile=t.target.files[0]),type:"file",accept:".xlsx, .xls, .xlsm",name:"ntf-file",id:"ntf-file"},null,32)]),(0,n._)("div",et,[st,(0,n.wy)((0,n._)("textarea",{class:"mt8",placeholder:"Include your organization's name","onUpdate:modelValue":e[11]||(e[11]=t=>a.ntfContent=t),name:"ntf-content",id:"ntf-content",cols:"60",rows:"10"},null,512),[[l.nr,a.ntfContent]])]),(0,n._)("div",nt,[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":e[12]||(e[12]=t=>a.consent=t),style:{width:"auto","margin-right":"8px",cursor:"pointer"},type:"checkbox",name:"consent",id:"consent"},null,512),[[l.e8,a.consent]]),it]),(0,n._)("div",lt,[(0,n._)("button",{class:"button green",onClick:e[13]||(e[13]=(0,l.iM)(((...t)=>r.sendWaNtf&&r.sendWaNtf(...t)),["prevent"]))},"send"),(0,n._)("button",{class:"button neutral ml8",onClick:e[14]||(e[14]=(0,l.iM)((t=>{a.ntfPopupVisible=!1,a.ntfContent="",a.ntfRule.userrole="none",a.ntfRule.clientType="none"}),["prevent"]))},"cancel")])]))])):(0,n.kq)("",!0),a.ntfPopupVisible?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",ot,[(0,n.Wm)(u,{class:"tr",style:{"max-height":"250px",overflow:"auto"}},{thead:(0,n.w5)((()=>[at])),tbody:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.ntfHistory,(t=>((0,n.wg)(),(0,n.iD)("tr",{key:t.id,class:"tr"},[(0,n._)("td",null,(0,i.zw)(t.id),1),(0,n._)("td",null,(0,i.zw)(t.toName),1),(0,n._)("td",null,(0,i.zw)(t.toContact),1),(0,n._)("td",null,(0,i.zw)(t.content),1),(0,n._)("td",null,[1==t.failed?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n.Uk)("Failed")],64)):1==t.approved&&1==t.sent?((0,n.wg)(),(0,n.iD)(n.HY,{key:1},[(0,n.Uk)("Sent")],64)):0==t.approved?((0,n.wg)(),(0,n.iD)(n.HY,{key:2},[(0,n.Uk)("Waiting")],64)):2==t.approved?((0,n.wg)(),(0,n.iD)(n.HY,{key:3},[(0,n.Uk)("Disapproved")],64)):(0,n.kq)("",!0)]),(0,n._)("td",rt,[0==t.approved?((0,n.wg)(),(0,n.j4)(c,{key:0,title:"approve",onClick:(0,l.iM)((e=>r.setConsent(t.id,1)),["prevent"]),icon:["far","thumbs-up"],class:"consent-btn approve"},null,8,["onClick"])):(0,n.kq)("",!0),0==t.approved?((0,n.wg)(),(0,n.j4)(c,{key:1,title:"disapprove",onClick:(0,l.iM)((e=>r.setConsent(t.id,2)),["prevent"]),icon:["far","thumbs-down"],class:"consent-btn disapprove"},null,8,["onClick"])):(0,n.kq)("",!0)])])))),128))])),_:1})]))])):(0,n.kq)("",!0)}var ut=s(692),dt=s(9669),pt=s.n(dt),gt=s(6737),ht=s.n(gt),mt={name:"SettingsWaNotification",components:{TableMain:ut.Z},props:["settingObj"],data(){return{waQr:"",ntfPopupVisible:!1,ntfContent:"",consent:!1,ntfRule:{userrole:"none",user:[],clientType:"none"},custom:!1,ntfFile:"",options:{user:["UserName","UserRole"],client:["ClientName","ClientType","ClientStatus"]},text:{user:"",client:""},showSuggestions:{user:!1,client:!1},suggestionPosX:"",suggestionPosY:"",suggestions:{user:[],client:[]},ntfHistory:[]}},computed:{ClientType(){return this.$store.getters["clients/getAllTypesList"].map((t=>t.type))},UserRole(){return this.$store.getters["roles/allRoles"].map((t=>t.name))},UserName(){return this.$store.getters["users/allUsers"].filter((t=>1==t.isActive)).map((t=>t.email))},ClientName(){return this.$store.getters["clients/clientsGetConfirmed"].map((t=>t.name))},ClientStatus(){return["Confirmed","Lead"]}},methods:{getQr(t){"SPAN"===t.target.tagName?t.target.parentElement.disabled=!0:t.target.disabled=!0;const e=document.createElement("canvas"),s=e.getContext("2d");e.width=300,e.height=300,s.fillStyle="#000",s.font="18px Open Sans",s.textAlign="center",s.fillText("Wait while QR code is loading",e.width/2,e.height/2),this.waQr=e,ht()({content:this.waQr}),w.Xd.notifications.wa.getQr().then((t=>{console.log(this.waQr);let e=new Image;return e.src=t.data,this.waQr=e,ht()({content:this.waQr})})).catch((()=>{this.$toast.error("Oops! We can't perform this action right now"),this.waQr=""})).finally((()=>{"SPAN"===t.target.tagName?t.target.parentElement.disabled=!1:t.target.disabled=!1}))},sendWaNtf(){let t=new FormData;t.append("userRule",""==this.text.user.trim()?" 1 = 0 ":this.text.user),t.append("clientRule",""==this.text.client.trim()?" 1 = 0 ":this.text.client),t.append("content",this.ntfContent),t.append("custom",this.custom),t.append("consent",this.consent),t.append("file",this.ntfFile),pt().post("/u/api/settings/notifications/wa/create",t,{withCredentials:!0,headers:{"Content-Type":"multipart/form-data"}}).then((()=>{this.ntfContent="",this.ntfRule.userrole="none",this.ntfRule.clientType="none",this.text.user="",this.text.client="",this.custom=!1,this.consent=!1,this.ntfFile="",this.$toast.success("notifications will be sent soon")})).catch((t=>{this.$toast.error("Oops! We can't perform this action right now"),console.log(t)})).finally((()=>this.getHistory()))},handleInput(t,e){const s=t.target.value;let n=t.target.value.trim().split(" ").pop();n.startsWith("\\")?(this.showSuggestions[e]=!0,this.suggestions[e]=this.options[e].filter((t=>t.startsWith(n.slice(1))))):n.endsWith("=")?this.showSuggestions[e]=!0:this.showSuggestions[e]=!1,this.text[e]=s},selectSuggestion(t,e){this.suggestions[e]=this[t];let s=this.text[e].trim().lastIndexOf(" ")+1,n=this.text[e].slice(0,s+1);"="==this.text[e][s]?n=n+'"'+t+'"':n+=t,n=n+" "+this.text[e].slice(this.text[e].length),this.text[e]=n,this.showSuggestions[e]=!1},getHistory(){w.Xd.notifications.wa.get().then((t=>this.ntfHistory=t.data)).catch((t=>console.log(t)))},setConsent(t,e){w.Xd.notifications.wa.consent({ntfId:t,consent:e}).then((()=>this.$toast.success("Success"))).catch((()=>{this.$toast.error("Oops! We can't perform this action right now")})).finally((()=>this.getHistory()))}},created(){this.$store.dispatch("users/usersAll"),this.$store.dispatch("clients/clientsGetConfirmed"),this.$store.dispatch("clients/clientsGetLead"),this.getHistory()}};const ft=(0,C.Z)(mt,[["render",ct],["__scopeId","data-v-3c3e1bca"]]);var wt=ft,yt={components:{ToggleSwitch:D,SettingsWaNotification:wt},props:["pageId"],name:"TheSetting",data(){return{disabled:!1,settingsForm:[],originalFormData:[],values:{},otpFor:"",otp:""}},computed:{formCount(){let t=0,e=-1;for(let s of this.settingsForm)s.formId!=e&&(t++,e=s.formId);return t}},methods:{btnVisibility(t){let e=0;for(let s of this.settingsForm)s.formId==t&&e++;return e},save(t){(0,y.Z)("/u/api/settings/",t).catch((t=>{console.log(t)})).finally((()=>{this.getSettings()}))},getOtp(t,e){this.otpFor=t.key;let s=w.Xd;e.split(".").forEach((t=>{s=s[t]})),s(t).then((()=>{this.$toast.success("OTP will be sent to your WhatsApp in around 60sec")})).catch((t=>{this.$toast.error("Oops! We can't perform this action right now"),console.log(t)}))},verifyOtp(t,e){let s=w.Xd;e.split(".").forEach((t=>{s=s[t]})),s(t).then((()=>{this.$toast.success("WhatsApp number updated")})).catch((t=>{this.$toast.error("Oops! We can't perform this action right now"),console.log(t)})).finally((()=>{this.otpFor="",this.otp="",this.getSettings()}))},cancel(){this.email="",this.password=""},getSettings(){w.Xd.get({pageId:this.pageId}).then((t=>{this.settingsForm=t.data;let e={};for(let s of t.data)e[s.setting]=null==s.value?"":s.value;this.values=e})).catch((t=>{console.log(t)}))}},mounted(){this.getSettings()}};const vt=(0,C.Z)(yt,[["render",f],["__scopeId","data-v-7dddad92"]]);var kt=vt}}]);
//# sourceMappingURL=398.eda02c05.js.map