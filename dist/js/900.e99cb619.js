"use strict";(self["webpackChunkportal"]=self["webpackChunkportal"]||[]).push([[900],{2900:function(e,t,l){l.r(t),l.d(t,{default:function(){return C}});var s=l(6252),o=l(9963),i=l(3577);const r=e=>((0,s.dD)("data-v-5b0ef01d"),e=e(),(0,s.Cn)(),e),a={class:"card pr16 pl16 pb16"},n={class:"pr16 pl16 pt16 pb16"},d={class:"row mt8"},c={ref:"focus",for:"role-name",class:"labels c1"},u=r((()=>(0,s._)("div",{class:"hr"},null,-1))),m={class:"row mt8"},h=r((()=>(0,s._)("label",{class:"labels c1"},"rights",-1))),p=["id","value","name","title"],g=["for"],f=r((()=>(0,s._)("div",{class:"hr"},null,-1))),b=["disabled"],v=["disabled"];function R(e,t,l,r,R,N){return(0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("form",n,[(0,s._)("div",d,[(0,s._)("label",c,"name",512),(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>R.roleName=e),type:"text",id:"role-name",class:"role-name"},null,512),[[o.nr,R.roleName]])]),u,(0,s._)("div",m,[h,(0,s._)("div",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.getAllRightsList,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"mt16 flex",key:e},[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>R.roleRights=e),id:e.id,value:e.id,class:"m0 mr16",type:"checkbox",name:e.name,title:e?.description},null,8,p),[[o.e8,R.roleRights]]),(0,s._)("label",{for:e.id},(0,i.zw)(e.name),9,g)])))),128))])]),f,(0,s._)("button",{disabled:!0===R.disabled,onClick:t[2]||(t[2]=(0,o.iM)((e=>void 0==l.editRoleId||""==l.editRoleId?N.createRole({roleName:R.roleName,roleRights:R.roleRights}):N.editRole()),["prevent"])),class:"green button mt8"},"save",8,b),(0,s._)("button",{disabled:!0===R.disabled,onClick:t[3]||(t[3]=(0,o.iM)((e=>N.canceled()),["prevent"])),class:"neutral ml8 button mt8"},"cancel",8,v)])])}var N=l(4754),_=l(3262),$=l(4802),w=l(3907),x={name:"CreateRole",props:["editRoleId","uk"],data(){return{roleName:"",roleRights:[],rightsList:[],disabled:!1}},computed:{...(0,w.Se)("rights",["getAllRightsList"]),...(0,w.Se)("roles",["rolesDataGet"])},methods:{createRole({roleName:e,roleRights:t}){this.disabled=!0,(0,_.Z)({text:e,mutationFnName:"roles/RESET_STATE",promise:N.uJ.create({roleName:e,roleRights:t}),context:this,url:"/u/roles/list"})},editRole(){this.disabled=!0;const e={roleId:this.editRoleId,roleName:this.roleName,roleRights:this.roleRights};(0,$.Z)({text:e.roleName,mutationFnName:"roles/refetch",mutationArgs:{roleId:e.roleId},promise:N.uJ.edit(e),context:this})},canceled(){void 0!=this.editRoleId?this.$emit("editingCompleted",{force:!0}):this.$router.push("/u/roles/list")}},created(){this.rightsList=this.$store.getters["rights/getAllRightsList"];const e=this.$store.getters["roles/rolesDataGet"](this.editRoleId);void 0!=e&&""!=e&&(this.roleName=e[0].roleName,this.roleRights=e.map((e=>e.rightId)))},mounted(){this.$refs["focus"].focus()}},I=l(3744);const k=(0,I.Z)(x,[["render",R],["__scopeId","data-v-5b0ef01d"]]);var C=k},3262:function(e,t,l){function s({text:e,url:t,mutationFnName:l,mutationArgs:s,promise:o,context:i}){let r=s;void 0==r&&(r={}),o.then((()=>i.$toast.success(`saved ${e}`))).then((()=>{l&&i.$store.commit(l,r),setTimeout((()=>i.$router.push(t)),1)})).catch((e=>{null!=e&&i.$toast.error("Oops! We can't perform this action right now")})).finally((()=>{i.disabled=!1}))}l.d(t,{Z:function(){return s}})},4802:function(e,t,l){l.d(t,{Z:function(){return o}});var s=l(2283);function o({text:e,mutationFnName:t,mutationArgs:l,promise:o,context:i}){o.then((()=>{t&&s.Z.commit(t,l),i.$emit("editingCompleted",{}),i.$toast.success(`Saved ${e}`)})).catch((e=>{if(null!=e)return i.$toast.error("Oops! We can't perform this action right now")})).finally((()=>{i.disabled=!1,void 0!=i?.polling&&(i.polling=!0)}))}}}]);
//# sourceMappingURL=900.e99cb619.js.map