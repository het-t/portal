"use strict";(self["webpackChunkportal"]=self["webpackChunkportal"]||[]).push([[885],{8885:function(e,s,t){t.r(s),t.d(s,{default:function(){return z}});var r=t(6252),a=t(9963),i=t(3577);const l=e=>((0,r.dD)("data-v-3f09db75"),e=e(),(0,r.Cn)(),e),d={class:"card"},o={class:"table-tabs"},u={class:"mt16 pb16 pr16 pl16"},n={class:"pl16 pb16"},c=["id"],m=["for"],h=["id"],p=["id"],f=["for"],b=["id"],g=["id"],k=["for"],v=["id"],w=l((()=>(0,r._)("option",{value:"male"},"Male",-1))),_=l((()=>(0,r._)("option",{value:"female"},"Female",-1))),N=l((()=>(0,r._)("option",{value:"others"},"Others",-1))),I=[w,_,N],$=["id"],y=["for"],x=["id"],C=["id"],U=["for"],L=["id"],F=["id"],D=["for"],R=["id"],E=["value"],P=["id"],V=["for"],Z=["disabled","id"],B=["disabled"],G=["disabled"];function T(e,s,t,l,w,_){return(0,r.wg)(),(0,r.iD)("div",d,[(0,r._)("div",o,[(0,r._)("button",{onClick:s[0]||(s[0]=e=>_.openTab(e,"general")),ref:"defaultTab"+t.uk,class:"button nutral tab"},"general",512),(0,r._)("button",{onClick:s[1]||(s[1]=e=>_.openTab(e,"credentials")),class:"button nutral tab"},"credentials")]),(0,r._)("div",null,[(0,r._)("form",u,[(0,r._)("div",n,[(0,r._)("div",{class:"fg hide",ref:"general"+t.uk},[(0,r._)("div",{id:"i1"+t.uk,class:"row mt8"},[(0,r._)("label",{for:"user-firstname"+t.uk,class:"labels c1"},"firstname",8,m),(0,r.wy)((0,r._)("input",{ref:"general"+t.uk+"focus","onUpdate:modelValue":s[2]||(s[2]=e=>w.userFirstName=e),id:"user-firstname"+t.uk,type:"text"},null,8,h),[[a.nr,w.userFirstName]])],8,c),(0,r._)("div",{id:"i2"+t.uk,class:"row mt8"},[(0,r._)("label",{for:"user-lastname"+t.uk,class:"labels c1"},"lastname",8,f),(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":s[3]||(s[3]=e=>w.userLastName=e),type:"text",id:"user-lastname"+t.uk},null,8,b),[[a.nr,w.userLastName]])],8,p),(0,r._)("div",{id:"i3"+t.uk,class:"row mt8"},[(0,r._)("label",{for:"user-gender"+t.uk,class:"labels c1"},"gender",8,k),(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":s[4]||(s[4]=e=>w.userGender=e),id:"user-gender"+t.uk},I,8,v),[[a.bM,w.userGender]])],8,g),(0,r._)("div",{id:"i4"+t.uk,class:"row mt8"},[(0,r._)("label",{for:"user-birthdate"+t.uk,class:"labels c1"},"birthdate",8,y),(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":s[5]||(s[5]=e=>w.userBirthdate=e),type:"date",id:"user-birthdate"+t.uk},null,8,x),[[a.nr,w.userBirthdate]])],8,$)],512),(0,r._)("div",{class:"fg hide",ref:"credentials"+t.uk},[(0,r._)("div",{id:"i5"+t.uk,class:"row mt8"},[(0,r._)("label",{for:"user-email"+t.uk,class:"labels c1"},"username",8,U),(0,r.wy)((0,r._)("input",{ref:"credentials"+t.uk+"focus","onUpdate:modelValue":s[6]||(s[6]=e=>w.userEmail=e),type:"text",id:"user-email"+t.uk},null,8,L),[[a.nr,w.userEmail]])],8,C),""==w.orgId?((0,r.wg)(),(0,r.iD)("div",{key:0,id:"i6"+t.uk,class:"row mt8"},[(0,r._)("label",{for:"user-role"+t.uk,class:"labels c1"},"role",8,D),(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":s[7]||(s[7]=e=>w.userRole=e),id:"user-role"+t.uk},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(w.dbRoles,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e.id,value:e.name},(0,i.zw)(e.name),9,E)))),128))],8,R),[[a.bM,w.userRole]])],8,F)):(0,r.kq)("",!0),(0,r._)("div",{id:"i7"+t.uk,class:"row mt8"},[(0,r._)("label",{for:"user-pwd"+t.uk,class:"labels c1"},"password",8,V),(0,r.wy)((0,r._)("input",{disabled:void 0!=t.editUserId,"onUpdate:modelValue":s[8]||(s[8]=e=>w.userPassword=e),type:"password",id:"user-pwd"+t.uk},null,8,Z),[[a.nr,w.userPassword]])],8,P)],512),(0,r._)("button",{disabled:!0===w.disabled,onClick:s[9]||(s[9]=(0,a.iM)((e=>_.proceed()),["prevent"])),class:"green mt16 button"},"save",8,B),(0,r._)("button",{disabled:!0===w.disabled,onClick:s[10]||(s[10]=(0,a.iM)((e=>_.canceled()),["prevent"])),class:"neutral ml8 mt16 button"},"cancel",8,G)])])])])}var M=t(4754),A=t(3262),O=t(4802),S={name:"CreateUser",props:["editUserId","uk"],data(){return{userFirstName:"",userLastName:"",userGender:"",userBirthdate:"",userEmail:"",userRole:"",userPassword:"",dbRoles:[],userId:"",disabled:!1,orgId:""}},mounted(){if(void 0!=this.editUserId){const e=this.$store.getters["users/usersDataGet"](this.editUserId);void 0!=e&&""!=e&&this.populateDataProperties(e)}if(""==this.orgId){const e=this.$store.getters["roles/allRoles"];void 0!=e&&""!=e&&(this.dbRoles=e)}else this.orgId=void 0!=this.$route.params?.orgId?this.$route.params.orgId:"";this.$refs["defaultTab"+this.uk].click()},methods:{openTab(e,s){var t=e.target.parentElement.getElementsByClassName("tab");let r=[...t].find((e=>1==e?.classList?.contains("tab-open")));r?.classList?.remove("tab-open"),e?.target?.classList?.add("tab-open"),this.$refs["general"+this.uk]?.classList?.add("hide"),this.$refs["credentials"+this.uk]?.classList?.add("hide"),this.$refs[s+this.uk]?.classList?.remove("hide"),this.$refs[s+this.uk+"focus"].focus()},canceled(){void 0!=this.editUserId?this.$emit("editingCompleted",{force:!0}):""!=this.orgId?this.$router.push("/u/admin/orgs"):this.$router.push("/u/users/list")},proceed(){this.disabled=!0;const e={userId:this.userId,firstName:this.userFirstName,lastName:this.userLastName,gender:this.userGender,birthdate:this.userBirthdate,email:this.userEmail,role:this.userRole,password:this.userPassword,orgId:this.orgId};""!=this.orgId?(0,A.Z)({text:e.firstName+""+e.lastName,url:`/u/admin/orgs/${e.orgId}`,promise:M.SA.users.create(e),context:this}):e.userId?(0,O.Z)({text:e.firstName+" "+e.lastName,mutationFnName:"users/refetch",mutationArgs:{userId:e.userId},promise:M.rC.edit(e),context:this}):(0,A.Z)({text:e.firstName+" "+e.lastName,url:"/u/users/list",promise:M.rC.create(e),mutationFnName:"users/refetch",context:this})},populateDataProperties(e){const{firstName:s,lastName:t,gender:r,birthdate:a,email:i,role:l,password:d,id:o}=e;this.userFirstName=s,this.userLastName=t,this.userGender=r,this.userBirthdate=new Date(a),this.userEmail=i,this.userRole=l,this.userPassword=d,this.userId=o}}},W=t(3744);const q=(0,W.Z)(S,[["render",T],["__scopeId","data-v-3f09db75"]]);var z=q},3262:function(e,s,t){function r({text:e,url:s,mutationFnName:t,mutationArgs:r,promise:a,context:i}){let l=r;void 0==l&&(l={}),a.then((()=>i.$toast.success(`saved ${e}`))).then((()=>{t&&i.$store.commit(t,l),setTimeout((()=>i.$router.push(s)),1)})).catch((e=>{null!=e&&i.$toast.error("Oops! We can't perform this action right now")})).finally((()=>{i.disabled=!1}))}t.d(s,{Z:function(){return r}})},4802:function(e,s,t){t.d(s,{Z:function(){return a}});var r=t(2283);function a({text:e,mutationFnName:s,mutationArgs:t,promise:a,context:i}){a.then((()=>{s&&r.Z.commit(s,t),i.$emit("editingCompleted",{}),i.$toast.success(`Saved ${e}`)})).catch((e=>{if(null!=e)return i.$toast.error("Oops! We can't perform this action right now")})).finally((()=>{i.disabled=!1,void 0!=i?.polling&&(i.polling=!0)}))}}}]);
//# sourceMappingURL=885.06bb29ad.js.map