"use strict";(self["webpackChunkportal"]=self["webpackChunkportal"]||[]).push([[634],{9634:function(e,t,s){s.r(t),s.d(t,{default:function(){return Ze}});var i=s(6252),l=s(9963),a=s(3577);const o=e=>((0,i.dD)("data-v-5974b940"),e=e(),(0,i.Cn)(),e),n={class:"card"},r={class:"table-tabs"},u={class:"fg pl16"},d={class:"mb16"},c={class:"row"},h=["for"],p=["id"],m={class:"row mt8"},b=["for"],g={class:"row mt8"},k=["for"],f=["value","id"],v={class:"row mt8"},y=["for"],w=["value","id"],_={class:"row mt8"},S=["for"],V=["id"],$=o((()=>(0,i._)("option",{value:"1"},"InProgress",-1))),L=o((()=>(0,i._)("option",{value:"2"},"Unbilled",-1))),T=o((()=>(0,i._)("option",{value:"3"},"Billed",-1))),x=[$,L,T],O={class:"row mt8"},D=["for"],C={class:"row mt8"},M=["for"],I={class:"row mt8"},W=["for"],B=["id"],U={class:"row mt8"},F=["for"],P=["id"],E={class:"flex mt16"},K=["id"],A=["for"],H=["id"],N=o((()=>(0,i._)("option",{value:"year"},"every year",-1))),z=o((()=>(0,i._)("option",{value:"month"},"every month",-1))),G=o((()=>(0,i._)("option",{value:"day"},"every day",-1))),q=[N,z,G],R=["id"],j={class:"flex mt16"},Y=["id"],Z=["for"],J=["disabled"],Q=["disabled"],X=o((()=>(0,i._)("div",{class:"vr"},null,-1))),ee={class:"fg pr16 sub-tasks-scroll"},te={class:"row mt8"},se=["for"],ie={style:{width:"80%",display:"flex","align-items":"center"}},le=["id"],ae={key:0,class:"grid-wrapper"},oe={class:"grid"},ne=["onKeyup","onClick"],re={class:"ml16"},ue=["onUpdate:modelValue"],de=["value"],ce={class:"ml16"},he={class:"ml16"},pe=["onUpdate:modelValue","id"],me={class:"ml16"},be=["onUpdate:modelValue"],ge={class:"mr16 ml16 mt16"},ke=o((()=>(0,i._)("tr",null,[(0,i._)("th",null,"user"),(0,i._)("th",null,"action"),(0,i._)("th",null,"sub-task"),(0,i._)("th",null,"date")],-1))),fe={key:0},ve={key:1};function ye(e,t,s,o,$,L){const T=(0,i.up)("vue-multiselect"),N=(0,i.up)("font-awesome-icon");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",n,[(0,i._)("div",r,[(0,i._)("button",{onClick:t[0]||(t[0]=e=>L.openTab(e,"details")),ref:"defaultTab"+s.uk,class:"button neutral tab"},"details",512),(0,i._)("button",{onClick:t[1]||(t[1]=e=>L.openTab(e,"logs")),class:"button neutral tab"},"logs")]),(0,i._)("div",{class:"fg-wrapper mt16 pb16 pr16 pl16 hide",ref:"details"+s.uk},[(0,i._)("div",u,[(0,i._)("form",d,[(0,i._)("div",null,[(0,i._)("div",c,[(0,i._)("label",{ref:"details"+s.uk+"focus",for:"task-title"+s.uk,class:"labels c1"},"title",8,h),(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>$.taskTitle=e),type:"text",id:"task-title"+s.uk},null,8,p),[[l.nr,$.taskTitle]])]),(0,i._)("div",m,[(0,i._)("label",{for:"task-client"+s.uk,class:"labels c1"},"client",8,b),(0,i.Wm)(T,{id:"task-client"+s.uk,modelValue:$.taskClient,"onUpdate:modelValue":t[3]||(t[3]=e=>$.taskClient=e),options:e.allClients,"custom-label":L.labelForClient,"track-by":"id",placeholder:"Select Client"},{noResult:(0,i.w5)((()=>[(0,i.Uk)(" Oops! No client found. Consider creating new client ")])),_:1},8,["id","modelValue","options","custom-label"])]),$.editing?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i._)("div",g,[(0,i._)("label",{for:"contactEmail"+s.uk,class:"labels c1"},"Contact Email: ",8,k),(0,i._)("input",{value:$.clientContact?.conEmail,id:"contactEmail"+s.uk},null,8,f)]),(0,i._)("div",v,[(0,i._)("label",{for:"contactPhone"+s.uk,class:"labels c1"},"Contact Phone: ",8,y),(0,i._)("input",{value:$.clientContact?.conPhone,id:"contactPhone"+s.uk,type:"text"},null,8,w)]),(0,i._)("div",_,[(0,i._)("label",{for:"task-status"+s.uk,class:"labels c1"},"status",8,S),(0,i.wy)((0,i._)("select",{"onUpdate:modelValue":t[4]||(t[4]=e=>$.taskStatus=e),id:"task-status"+s.uk},x,8,V),[[l.bM,$.taskStatus]])])],64)):(0,i.kq)("",!0),(0,i._)("div",O,[(0,i._)("label",{for:"task-coordinator"+s.uk,class:"labels c1"},"co-ordinator",8,D),(0,i.Wm)(T,{id:"task-coordinator"+s.uk,modelValue:$.taskCoordinator,"onUpdate:modelValue":t[5]||(t[5]=e=>$.taskCoordinator=e),placeholder:"Select Coordinator",options:e.allUsers,"custom-label":L.labelForCoordinator,"track-by":"id"},{noResult:(0,i.w5)((()=>[(0,i.Uk)(" Oops! No user found. Consider creating new user ")])),_:1},8,["id","modelValue","options","custom-label"])]),(0,i._)("div",C,[(0,i._)("label",{for:"task-tasks"+s.uk,class:"labels c1"},"task",8,M),(0,i.Wm)(T,{id:"task-tasks"+s.uk,modelValue:$.taskMasterId,"onUpdate:modelValue":t[6]||(t[6]=e=>$.taskMasterId=e),onChange:L.taskMasterSelected,placeholder:"Select Task-Master",options:e.tasksMasterListGet,"custom-label":L.labelForTaskMaster,"track-by":"id"},{noResult:(0,i.w5)((()=>[(0,i.Uk)(" Oops! No task-master found. Consider creating new task-master ")])),_:1},8,["id","modelValue","onChange","options","custom-label"])]),(0,i._)("div",I,[(0,i._)("label",{for:"task-cost"+s.uk,class:"labels c1"},"fees",8,W),(0,i.wy)((0,i._)("input",{type:"number","onUpdate:modelValue":t[7]||(t[7]=e=>$.taskCost=e),id:"task-cost"+s.uk},null,8,B),[[l.nr,$.taskCost]])]),(0,i._)("div",U,[(0,i._)("label",{for:"task-description"+s.uk,class:"labels c1"},"description",8,F),(0,i.wy)((0,i._)("textarea",{"onUpdate:modelValue":t[8]||(t[8]=e=>$.taskDescription=e),name:"task-description",id:"task-description"+s.uk,cols:"30",rows:"5",placeholder:"Description"},null,8,P),[[l.nr,$.taskDescription]])])]),(0,i._)("div",E,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[9]||(t[9]=e=>$.repeat=e),type:"checkbox",id:"recurring"+s.uk,class:"recurring"},null,8,K),[[l.e8,$.repeat]]),(0,i._)("label",{for:"recurring"+s.uk},"recurring",8,A),$.repeat?(0,i.wy)(((0,i.wg)(),(0,i.iD)("select",{key:0,"onUpdate:modelValue":t[10]||(t[10]=e=>$.taskRepeat=e),id:"task-repeat"+s.uk,class:"task-repeat p0 ml8"},q,8,H)),[[l.bM,$.taskRepeat]]):(0,i.kq)("",!0),$.repeat?(0,i.wy)(((0,i.wg)(),(0,i.iD)("input",{key:1,"onUpdate:modelValue":t[11]||(t[11]=e=>$.taskRepeatOn=e),type:"date",id:"task-repeat-on"+s.uk,class:"task-repeat p0 pl8 ml8"},null,8,R)),[[l.nr,$.taskRepeatOn]]):(0,i.kq)("",!0)]),(0,i._)("div",j,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[12]||(t[12]=e=>$.save=e),type:"checkbox",id:"save-task-template"+s.uk,class:"save-task-template"},null,8,Y),[[l.e8,$.save]]),(0,i._)("label",{for:"save-task-template"+s.uk},"save task template for future use ",8,Z)]),(0,i._)("button",{disabled:!0===$.disabled,onClick:t[13]||(t[13]=(0,l.iM)((e=>L.proceed()),["prevent"])),class:"green mt16 button"},"save",8,J),(0,i._)("button",{disabled:!0===$.disabled,onClick:t[14]||(t[14]=(0,l.iM)((e=>L.canceled()),["prevent"])),class:"neutral ml8 mt16 button"},"cancel",8,Q)])]),X,(0,i._)("div",ee,[(0,i._)("div",null,[(0,i._)("div",te,[(0,i._)("label",{for:"task-sub-task"+s.uk,class:"labels c1"},"sub task",8,se),(0,i._)("div",ie,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[15]||(t[15]=e=>$.newSubTask=e),style:{width:"100%"},type:"text",id:"task-sub-task"+s.uk},null,8,le),[[l.nr,$.newSubTask]]),(0,i.Wm)(N,{tabindex:"0",class:"icon pointer add-st ml8",onKeyup:t[16]||(t[16]=(0,l.D2)((e=>L.addSubTask()),["enter"])),onClick:t[17]||(t[17]=(0,l.iM)((e=>L.addSubTask()),["prevent"])),icon:"fa-solid fa-plus"})])])]),$.subTasks?((0,i.wg)(),(0,i.iD)("div",ae,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)($.subTasks,((t,o)=>((0,i.wg)(),(0,i.iD)("div",{key:o,class:"mb8"},[(0,i._)("div",oe,[(0,i._)("div",null,(0,a.zw)(o+1)+")",1),(0,i._)("div",{class:"pointer",tabindex:"0",onKeyup:(0,l.D2)((e=>L.toggleDisplaySubTask(o)),["enter"]),onClick:(0,l.iM)((e=>L.toggleDisplaySubTask(o)),["prevent"])},(0,a.zw)(t.description),41,ne),(0,i.Wm)(N,{tabindex:"0",icon:"fa-solid fa-minus",onKeyup:(0,l.D2)((e=>L.removeSubTask(o)),["enter"]),onClick:(0,l.iM)((e=>L.removeSubTask(o)),["prevent"]),class:"pointer icon rmst"},null,8,["onKeyup","onClick"])]),(0,i._)("div",{ref_for:!0,ref:"sub-task"+o,class:"hide ml24"},[(0,i._)("div",re,[(0,i.wy)((0,i._)("select",{"onUpdate:modelValue":e=>t.statusId=e,class:"sub-task-extra"},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)($.subTaskStatuses,((e,t)=>((0,i.wg)(),(0,i.iD)("option",{value:e.id,key:t.toString()+s.uk},(0,a.zw)(e.status),9,de)))),128))],8,ue),[[l.bM,t.statusId]])]),(0,i._)("div",ce,[(0,i.Wm)(T,{modelValue:t.assignedTo,"onUpdate:modelValue":e=>t.assignedTo=e,options:e.allUsers,"custom-label":L.labelForCoordinator,"track-by":"id",placeholder:"Assigend To",class:"sub-task-extra"},{noResult:(0,i.w5)((()=>[(0,i.Uk)(" Oops! No user found. Consider creating new user ")])),_:2},1032,["modelValue","onUpdate:modelValue","options","custom-label"])]),(0,i._)("div",he,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":e=>t.cost=e,type:"number",id:"sub-task-cost"+s.uk,placeholder:"Cost",class:"sub-task-extra"},null,8,pe),[[l.nr,t.cost]])]),(0,i._)("div",me,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":e=>t.comments=e,class:"sub-task-extra",type:"text",placeholder:"Comments"},null,8,be),[[l.nr,t.comments]])])],512)])))),128))])):(0,i.kq)("",!0)])],512)]),(0,i._)("div",{class:"card hide",ref:"logs"+s.uk},[(0,i._)("div",ge,[(0,i._)("table",null,[ke,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.taskData(s.editTaskId)?.tasksLogs,((e,t)=>((0,i.wg)(),(0,i.iD)("tr",{key:t,class:"tr"},[(0,i._)("td",null,(0,a.zw)(e.user),1),(0,i._)("td",null,[(0,i.Uk)((0,a.zw)(e.action+" "+e.key)+" ",1),null!=e.after?((0,i.wg)(),(0,i.iD)("span",fe," to "+(0,a.zw)(e.after),1)):(0,i.kq)("",!0),null!=e.before?((0,i.wg)(),(0,i.iD)("span",ve," from "+(0,a.zw)(e.before),1)):(0,i.kq)("",!0)]),(0,i._)("td",null,(0,a.zw)(e.subTask?e.subTask:"Not Available"),1),(0,i._)("td",null,(0,a.zw)(new Date(e.timestamp).toLocaleString()),1)])))),128))])])],512)])}var we=s(3907),_e=s(9235),Se=s(4802),Ve=s(3262);function $e(e){return 0!==e&&(!(!Array.isArray(e)||0!==e.length)||!e)}function Le(e){return(...t)=>!e(...t)}function Te(e,t){void 0===e&&(e="undefined"),null===e&&(e="null"),!1===e&&(e="false");const s=e.toString().toLowerCase();return-1!==s.indexOf(t.trim())}function xe(e,t,s,i){return t?e.filter((e=>Te(i(e,s),t))).sort(((e,t)=>i(e,s).length-i(t,s).length)):e}function Oe(e){return e.filter((e=>!e.$isLabel))}function De(e,t){return s=>s.reduce(((s,i)=>i[e]&&i[e].length?(s.push({$groupLabel:i[t],$isLabel:!0}),s.concat(i[e])):s),[])}function Ce(e,t,s,i,l){return a=>a.map((a=>{if(!a[s])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];const o=xe(a[s],e,t,l);return o.length?{[i]:a[i],[s]:o}:[]}))}const Me=(...e)=>t=>e.reduce(((e,t)=>t(e)),t);var Ie={data(){return{search:"",isOpen:!1,preferredOpenDirection:"below",optimizedHeight:this.maxHeight}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default(e,t){return $e(e)?"":t?e[t]:e}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},tagPosition:{type:String,default:"top"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},groupSelect:{type:Boolean,default:!1},blockKeys:{type:Array,default(){return[]}},preserveSearch:{type:Boolean,default:!1},preselectFirst:{type:Boolean,default:!1}},mounted(){!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."),this.preselectFirst&&!this.internalValue.length&&this.options.length&&this.select(this.filteredOptions[0])},computed:{internalValue(){return this.modelValue||0===this.modelValue?Array.isArray(this.modelValue)?this.modelValue:[this.modelValue]:[]},filteredOptions(){const e=this.search||"",t=e.toLowerCase().trim();let s=this.options.concat();return s=this.internalSearch?this.groupValues?this.filterAndFlat(s,t,this.label):xe(s,t,this.label,this.customLabel):this.groupValues?De(this.groupValues,this.groupLabel)(s):s,s=this.hideSelected?s.filter(Le(this.isSelected)):s,this.taggable&&t.length&&!this.isExistingOption(t)&&("bottom"===this.tagPosition?s.push({isTag:!0,label:e}):s.unshift({isTag:!0,label:e})),s.slice(0,this.optionsLimit)},valueKeys(){return this.trackBy?this.internalValue.map((e=>e[this.trackBy])):this.internalValue},optionKeys(){const e=this.groupValues?this.flatAndStrip(this.options):this.options;return e.map((e=>this.customLabel(e,this.label).toString().toLowerCase()))},currentOptionLabel(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue.length?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue(){this.resetAfter&&this.internalValue.length&&(this.search="",this.$emit("update:modelValue",this.multiple?[]:null))},search(){this.$emit("search-change",this.search)}},emits:["open","search-change","close","select","update:modelValue","remove","tag"],methods:{getValue(){return this.multiple?this.internalValue:0===this.internalValue.length?null:this.internalValue[0]},filterAndFlat(e,t,s){return Me(Ce(t,s,this.groupValues,this.groupLabel,this.customLabel),De(this.groupValues,this.groupLabel))(e)},flatAndStrip(e){return Me(De(this.groupValues,this.groupLabel),Oe)(e)},updateSearch(e){this.search=e},isExistingOption(e){return!!this.options&&this.optionKeys.indexOf(e)>-1},isSelected(e){const t=this.trackBy?e[this.trackBy]:e;return this.valueKeys.indexOf(t)>-1},isOptionDisabled(e){return!!e.$isDisabled},getOptionLabel(e){if($e(e))return"";if(e.isTag)return e.label;if(e.$isLabel)return e.$groupLabel;const t=this.customLabel(e,this.label);return $e(t)?"":t},select(e,t){if(e.$isLabel&&this.groupSelect)this.selectGroup(e);else if(!(-1!==this.blockKeys.indexOf(t)||this.disabled||e.$isDisabled||e.$isLabel)&&(!this.max||!this.multiple||this.internalValue.length!==this.max)&&("Tab"!==t||this.pointerDirty)){if(e.isTag)this.$emit("tag",e.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{const s=this.isSelected(e);if(s)return void("Tab"!==t&&this.removeElement(e));this.$emit("select",e,this.id),this.multiple?this.$emit("update:modelValue",this.internalValue.concat([e])):this.$emit("update:modelValue",e),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},selectGroup(e){const t=this.options.find((t=>t[this.groupLabel]===e.$groupLabel));if(t){if(this.wholeGroupSelected(t)){this.$emit("remove",t[this.groupValues],this.id);const e=this.internalValue.filter((e=>-1===t[this.groupValues].indexOf(e)));this.$emit("update:modelValue",e)}else{const e=t[this.groupValues].filter((e=>!(this.isOptionDisabled(e)||this.isSelected(e))));this.$emit("select",e,this.id),this.$emit("update:modelValue",this.internalValue.concat(e))}this.closeOnSelect&&this.deactivate()}},wholeGroupSelected(e){return e[this.groupValues].every((e=>this.isSelected(e)||this.isOptionDisabled(e)))},wholeGroupDisabled(e){return e[this.groupValues].every(this.isOptionDisabled)},removeElement(e,t=!0){if(this.disabled)return;if(e.$isDisabled)return;if(!this.allowEmpty&&this.internalValue.length<=1)return void this.deactivate();const s="object"===typeof e?this.valueKeys.indexOf(e[this.trackBy]):this.valueKeys.indexOf(e);if(this.$emit("remove",e,this.id),this.multiple){const e=this.internalValue.slice(0,s).concat(this.internalValue.slice(s+1));this.$emit("update:modelValue",e)}else this.$emit("update:modelValue",null);this.closeOnSelect&&t&&this.deactivate()},removeLastElement(){-1===this.blockKeys.indexOf("Delete")&&0===this.search.length&&Array.isArray(this.internalValue)&&this.internalValue.length&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate(){this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&0===this.pointer&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.$nextTick((()=>this.$refs.search&&this.$refs.search.focus()))):this.$el.focus(),this.$emit("open",this.id))},deactivate(){this.isOpen&&(this.isOpen=!1,this.searchable?this.$refs.search&&this.$refs.search.blur():this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle(){this.isOpen?this.deactivate():this.activate()},adjustPosition(){if("undefined"===typeof window)return;const e=this.$el.getBoundingClientRect().top,t=window.innerHeight-this.$el.getBoundingClientRect().bottom,s=t>this.maxHeight;s||t>e||"below"===this.openDirection||"bottom"===this.openDirection?(this.preferredOpenDirection="below",this.optimizedHeight=Math.min(t-40,this.maxHeight)):(this.preferredOpenDirection="above",this.optimizedHeight=Math.min(e-40,this.maxHeight))}}},We={data(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition(){return this.pointer*this.optionHeight},visibleElements(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions(){this.pointerAdjust()},isOpen(){this.pointerDirty=!1},pointer(){this.$refs.search&&this.$refs.search.setAttribute("aria-activedescendant",this.id+"-"+this.pointer.toString())}},methods:{optionHighlight(e,t){return{"multiselect__option--highlight":e===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(t)}},groupHighlight(e,t){if(!this.groupSelect)return["multiselect__option--disabled",{"multiselect__option--group":t.$isLabel}];const s=this.options.find((e=>e[this.groupLabel]===t.$groupLabel));return s&&!this.wholeGroupDisabled(s)?["multiselect__option--group",{"multiselect__option--highlight":e===this.pointer&&this.showPointer},{"multiselect__option--group-selected":this.wholeGroupSelected(s)}]:"multiselect__option--disabled"},addPointerElement({key:e}="Enter"){this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],e),this.pointerReset()},pointerForward(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()),this.pointerDirty=!0},pointerBackward(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerBackward()):this.filteredOptions[this.pointer]&&this.filteredOptions[0].$isLabel&&!this.groupSelect&&this.pointerForward(),this.pointerDirty=!0},pointerReset(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0),this.filteredOptions.length>0&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()},pointerSet(e){this.pointer=e,this.pointerDirty=!0}}},Be={name:"vue-multiselect",mixins:[Ie,We],props:{name:{type:String,default:""},modelValue:{type:null,default(){return[]}},selectLabel:{type:String,default:"Press enter to select"},selectGroupLabel:{type:String,default:"Press enter to select group"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},deselectGroupLabel:{type:String,default:"Press enter to deselect group"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:e=>`and ${e} more`},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoOptions:{type:Boolean,default:!0},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{isSingleLabelVisible(){return(this.singleValue||0===this.singleValue)&&(!this.isOpen||!this.searchable)&&!this.visibleValues.length},isPlaceholderVisible(){return!this.internalValue.length&&(!this.searchable||!this.isOpen)},visibleValues(){return this.multiple?this.internalValue.slice(0,this.limit):[]},singleValue(){return this.internalValue[0]},deselectLabelText(){return this.showLabels?this.deselectLabel:""},deselectGroupLabelText(){return this.showLabels?this.deselectGroupLabel:""},selectLabelText(){return this.showLabels?this.selectLabel:""},selectGroupLabelText(){return this.showLabels?this.selectGroupLabel:""},selectedLabelText(){return this.showLabels?this.selectedLabel:""},inputStyle(){return this.searchable||this.multiple&&this.modelValue&&this.modelValue.length?this.isOpen?{width:"100%"}:{width:"0",position:"absolute",padding:"0"}:""},contentStyle(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove(){return"above"===this.openDirection||"top"===this.openDirection||"below"!==this.openDirection&&"bottom"!==this.openDirection&&"above"===this.preferredOpenDirection},showSearchInput(){return this.searchable&&(!this.hasSingleSelectedSlot||!this.visibleSingleValue&&0!==this.visibleSingleValue||this.isOpen)}}};const Ue={ref:"tags",class:"multiselect__tags"},Fe={class:"multiselect__tags-wrap"},Pe={class:"multiselect__spinner"},Ee={key:0},Ke={class:"multiselect__option"},Ae={class:"multiselect__option"},He=(0,i.Uk)("No elements found. Consider changing the search query."),Ne={class:"multiselect__option"},ze=(0,i.Uk)("List is empty.");function Ge(e,t,s,o,n,r){return(0,i.wg)(),(0,i.j4)("div",{tabindex:e.searchable?-1:s.tabindex,class:[{"multiselect--active":e.isOpen,"multiselect--disabled":s.disabled,"multiselect--above":r.isAbove},"multiselect"],onFocus:t[14]||(t[14]=t=>e.activate()),onBlur:t[15]||(t[15]=t=>!e.searchable&&e.deactivate()),onKeydown:[t[16]||(t[16]=(0,l.D2)((0,l.iM)((t=>e.pointerForward()),["self","prevent"]),["down"])),t[17]||(t[17]=(0,l.D2)((0,l.iM)((t=>e.pointerBackward()),["self","prevent"]),["up"]))],onKeypress:t[18]||(t[18]=(0,l.D2)((0,l.iM)((t=>e.addPointerElement(t)),["stop","self"]),["enter","tab"])),onKeyup:t[19]||(t[19]=(0,l.D2)((t=>e.deactivate()),["esc"])),role:"combobox","aria-owns":"listbox-"+e.id},[(0,i.WI)(e.$slots,"caret",{toggle:e.toggle},(()=>[(0,i.Wm)("div",{onMousedown:t[1]||(t[1]=(0,l.iM)((t=>e.toggle()),["prevent","stop"])),class:"multiselect__select"},null,32)])),(0,i.WI)(e.$slots,"clear",{search:e.search}),(0,i.Wm)("div",Ue,[(0,i.WI)(e.$slots,"selection",{search:e.search,remove:e.removeElement,values:r.visibleValues,isOpen:e.isOpen},(()=>[(0,i.wy)((0,i.Wm)("div",Fe,[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(r.visibleValues,((t,s)=>(0,i.WI)(e.$slots,"tag",{option:t,search:e.search,remove:e.removeElement},(()=>[((0,i.wg)(),(0,i.j4)("span",{class:"multiselect__tag",key:s},[(0,i.Wm)("span",{textContent:(0,a.zw)(e.getOptionLabel(t))},null,8,["textContent"]),(0,i.Wm)("i",{tabindex:"1",onKeypress:(0,l.D2)((0,l.iM)((s=>e.removeElement(t)),["prevent"]),["enter"]),onMousedown:(0,l.iM)((s=>e.removeElement(t)),["prevent"]),class:"multiselect__tag-icon"},null,40,["onKeypress","onMousedown"])]))])))),256))],512),[[l.F8,r.visibleValues.length>0]]),e.internalValue&&e.internalValue.length>s.limit?(0,i.WI)(e.$slots,"limit",{key:0},(()=>[(0,i.Wm)("strong",{class:"multiselect__strong",textContent:(0,a.zw)(s.limitText(e.internalValue.length-s.limit))},null,8,["textContent"])])):(0,i.kq)("v-if",!0)])),(0,i.Wm)(l.uT,{name:"multiselect__loading"},{default:(0,i.w5)((()=>[(0,i.WI)(e.$slots,"loading",{},(()=>[(0,i.wy)((0,i.Wm)("div",Pe,null,512),[[l.F8,s.loading]])]))])),_:3}),e.searchable?((0,i.wg)(),(0,i.j4)("input",{key:0,ref:"search",name:s.name,id:e.id,type:"text",autocomplete:"off",spellcheck:"false",placeholder:e.placeholder,style:r.inputStyle,value:e.search,disabled:s.disabled,tabindex:s.tabindex,onInput:t[2]||(t[2]=t=>e.updateSearch(t.target.value)),onFocus:t[3]||(t[3]=(0,l.iM)((t=>e.activate()),["prevent"])),onBlur:t[4]||(t[4]=(0,l.iM)((t=>e.deactivate()),["prevent"])),onKeyup:t[5]||(t[5]=(0,l.D2)((t=>e.deactivate()),["esc"])),onKeydown:[t[6]||(t[6]=(0,l.D2)((0,l.iM)((t=>e.pointerForward()),["prevent"]),["down"])),t[7]||(t[7]=(0,l.D2)((0,l.iM)((t=>e.pointerBackward()),["prevent"]),["up"])),t[9]||(t[9]=(0,l.D2)((0,l.iM)((t=>e.removeLastElement()),["stop"]),["delete"]))],onKeypress:t[8]||(t[8]=(0,l.D2)((0,l.iM)((t=>e.addPointerElement(t)),["prevent","stop","self"]),["enter"])),class:"multiselect__input","aria-controls":"listbox-"+e.id},null,44,["name","id","placeholder","value","disabled","tabindex","aria-controls"])):(0,i.kq)("v-if",!0),r.isSingleLabelVisible?((0,i.wg)(),(0,i.j4)("span",{key:1,class:"multiselect__single",onMousedown:t[10]||(t[10]=(0,l.iM)(((...t)=>e.toggle&&e.toggle(...t)),["prevent"]))},[(0,i.WI)(e.$slots,"singleLabel",{option:r.singleValue},(()=>[(0,i.Uk)((0,a.zw)(e.currentOptionLabel),1)]))],32)):(0,i.kq)("v-if",!0),r.isPlaceholderVisible?((0,i.wg)(),(0,i.j4)("span",{key:2,class:"multiselect__placeholder",onMousedown:t[11]||(t[11]=(0,l.iM)(((...t)=>e.toggle&&e.toggle(...t)),["prevent"]))},[(0,i.WI)(e.$slots,"placeholder",{},(()=>[(0,i.Uk)((0,a.zw)(e.placeholder),1)]))],32)):(0,i.kq)("v-if",!0)],512),(0,i.Wm)(l.uT,{name:"multiselect"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)("div",{class:"multiselect__content-wrapper",onFocus:t[12]||(t[12]=(...t)=>e.activate&&e.activate(...t)),tabindex:"-1",onMousedown:t[13]||(t[13]=(0,l.iM)((()=>{}),["prevent"])),style:{maxHeight:e.optimizedHeight+"px"},ref:"list"},[(0,i.Wm)("ul",{class:"multiselect__content",style:r.contentStyle,role:"listbox",id:"listbox-"+e.id},[(0,i.WI)(e.$slots,"beforeList"),e.multiple&&e.max===e.internalValue.length?((0,i.wg)(),(0,i.j4)("li",Ee,[(0,i.Wm)("span",Ke,[(0,i.WI)(e.$slots,"maxElements",{},(()=>[(0,i.Uk)("Maximum of "+(0,a.zw)(e.max)+" options selected. First remove a selected option to select another.",1)]))])])):(0,i.kq)("v-if",!0),!e.max||e.internalValue.length<e.max?((0,i.wg)(!0),(0,i.j4)(i.HY,{key:1},(0,i.Ko)(e.filteredOptions,((t,s)=>((0,i.wg)(),(0,i.j4)("li",{class:"multiselect__element",key:s,id:e.id+"-"+s,role:t&&(t.$isLabel||t.$isDisabled)?null:"option"},[t&&(t.$isLabel||t.$isDisabled)?(0,i.kq)("v-if",!0):((0,i.wg)(),(0,i.j4)("span",{key:0,class:[e.optionHighlight(s,t),"multiselect__option"],onClick:(0,l.iM)((s=>e.select(t)),["stop"]),onMouseenter:(0,l.iM)((t=>e.pointerSet(s)),["self"]),"data-select":t&&t.isTag?e.tagPlaceholder:r.selectLabelText,"data-selected":r.selectedLabelText,"data-deselect":r.deselectLabelText},[(0,i.WI)(e.$slots,"option",{option:t,search:e.search,index:s},(()=>[(0,i.Wm)("span",null,(0,a.zw)(e.getOptionLabel(t)),1)]))],42,["onClick","onMouseenter","data-select","data-selected","data-deselect"])),t&&(t.$isLabel||t.$isDisabled)?((0,i.wg)(),(0,i.j4)("span",{key:1,"data-select":e.groupSelect&&r.selectGroupLabelText,"data-deselect":e.groupSelect&&r.deselectGroupLabelText,class:[e.groupHighlight(s,t),"multiselect__option"],onMouseenter:(0,l.iM)((t=>e.groupSelect&&e.pointerSet(s)),["self"]),onMousedown:(0,l.iM)((s=>e.selectGroup(t)),["prevent"])},[(0,i.WI)(e.$slots,"option",{option:t,search:e.search,index:s},(()=>[(0,i.Wm)("span",null,(0,a.zw)(e.getOptionLabel(t)),1)]))],42,["data-select","data-deselect","onMouseenter","onMousedown"])):(0,i.kq)("v-if",!0)],8,["id","role"])))),128)):(0,i.kq)("v-if",!0),(0,i.wy)((0,i.Wm)("li",null,[(0,i.Wm)("span",Ae,[(0,i.WI)(e.$slots,"noResult",{search:e.search},(()=>[He]))])],512),[[l.F8,s.showNoResults&&0===e.filteredOptions.length&&e.search&&!s.loading]]),(0,i.wy)((0,i.Wm)("li",null,[(0,i.Wm)("span",Ne,[(0,i.WI)(e.$slots,"noOptions",{},(()=>[ze]))])],512),[[l.F8,s.showNoOptions&&0===e.options.length&&!e.search&&!s.loading]]),(0,i.WI)(e.$slots,"afterList")],12,["id"])],36),[[l.F8,e.isOpen]])])),_:3})],42,["tabindex","aria-owns"])}Be.render=Ge;var qe=Be,Re={name:"TasksCreate",props:["editTaskId","uk"],components:{VueMultiselect:qe},data(){return{editing:!1,subTaskStatuses:[{id:1,status:"hold"},{id:2,status:"to do"},{id:3,status:"in progress"},{id:4,status:"pending for approval"},{id:5,status:"done"},{id:6,status:"cancel"},{id:7,status:"pending with client"},{id:8,status:"pending with signed documents"},{id:9,status:"pending with DSC"}],subTasks:[],removedSubTasksId:[],taskMasterId:"",repeat:!1,newSubTask:"",taskStatus:"",taskTitle:"",taskDescription:"",taskClient:"",taskCost:"",taskCoordinator:"",save:!1,taskRepeat:"",taskRepeatOn:"",clientContact:"",taskLogs:[],disabled:!1}},computed:{...(0,we.Se)("tasks",["taskData","subTasksData","tasksMasterListGet"]),...(0,we.Se)("users",["allUsers"]),...(0,we.Se)("clients",["allClients"])},methods:{labelForCoordinator({firstName:e,lastName:t,id:s}){return`${e} ${t} (${s})`},labelForClient({name:e,id:t}){return`${e} (${t})`},labelForTaskMaster({title:e,id:t}){return`${e} (${t})`},taskMasterSelected(){const e=this["tasksMasterListGet"].find((e=>e.id==this.taskMasterId));_e.K_.get({taskMasterId:this.taskMasterId}).then((t=>{this.subTasks=t.data.subTasksMasterList,this.taskCost=e.cost}))},openTab(e,t){var s=e.target.parentElement.getElementsByClassName("tab");let i=[...s].find((e=>1==e?.classList?.contains("tab-open")));i?.classList?.remove("tab-open"),e?.target?.classList?.add("tab-open"),this.$refs["details"+this.uk]?.classList?.add("hide"),this.$refs["logs"+this.uk]?.classList?.add("hide"),this.$refs[t+this.uk]?.classList?.remove("hide"),this.$refs["details"+this.uk+"focus"].focus()},addSubTask(){this.subTasks.push({description:this.newSubTask,statusId:2,assignedTo:"",comments:"",cost:""}),document.getElementById("task-sub-task"+this.uk).focus(),this.newSubTask=""},removeSubTask(e){const t=this.subTasks.splice(e,1);t[0]?.id&&this.removedSubTasksId.push(t[0]?.id)},toggleDisplaySubTask(e){this.$refs["sub-task"+e][0].classList.value.includes("show")?this.$refs["sub-task"+e][0].classList.remove("show"):this.$refs["sub-task"+e][0].classList.add("show")},populateDataProperties(e){const{taskMasterId:t,title:s,description:i,cost:l,coordinatorId:a,clientId:o,status:n}=e,r=this.allClients.find((e=>e.id==o));this.taskTitle=s,this.taskDescription=i,this.taskCost=l,this.taskCoordinator=this.allUsers.find((e=>e.id==a)),this.taskClient=r,this.taskMasterId=this.tasksMasterListGet.find((e=>e.id==t)),this.clientContact=r,this.taskStatus=n},proceed(){this.disabled=!0,this.subTasks?.map((e=>{e.assignedTo=e.assignedTo?.id}));const e={saved:new Number(this.save),taskId:this.editTaskId,taskMasterId:this.taskMasterId,title:this.taskTitle,description:this.taskDescription,cost:this.taskCost,clientId:this.taskClient,coordinatorId:this.taskCoordinator,subTasks:JSON.stringify(this.subTasks),removedSubTasks:JSON.stringify(this.removedSubTasksId)};e.coordinatorId?.id&&(e.coordinatorId=e.coordinatorId?.id),e.clientId?.id&&(e.clientId=e.clientId?.id),e.taskMasterId?.id&&(e.taskMasterId=e.taskMasterId.id),1==this.editing?(0,Se.Z)({text:e.title,mutationFnName:"tasks/refetch",mutationArgs:{saved:e.saved,taskId:e.taskId},promise:_e.wq.edit(e),context:this}):(0,Ve.Z)({text:e.title,mutationFnName:"tasks/refetch",mutationArgs:{saved:e.saved},url:"/u/tasks/list",promise:_e.wq.create(e),context:this})},canceled(){1==this.editing?this.$emit("editingCompleted",{force:!0}):this.$router.push("/u/tasks/list")}},created(){this.$store.dispatch("clients/clientsAll"),this.$store.dispatch("tasks/tasksMasterListSet"),this.$store.dispatch("users/usersAll"),(void 0!=window.history.state.taskId||void 0!=this.editTaskId)&&(this.editing=!0)},mounted(){if(1==this.editing){console.log(this["taskData"](this.editTaskId)?.taskData,"as task data");const e=this["taskData"](this.editTaskId)?.taskData?.[0],t=this["taskData"](this.editTaskId)?.taskLogs,s=this["subTasksData"](this.editTaskId);if(void 0!=e&&""!=e&&(this.populateDataProperties(e),this.taskLogs=t),void 0!=s&&""!=s){for(let e=0;e<s.length;e++)s[e].assignedTo=this.allUsers.find((t=>t.id==s[e].assignedTo));this.subTasks=s}}this.$refs["defaultTab"+this.uk].click()}},je=s(3744);const Ye=(0,je.Z)(Re,[["render",ye],["__scopeId","data-v-5974b940"]]);var Ze=Ye},3262:function(e,t,s){s.d(t,{Z:function(){return a}});var i=s(6737),l=s.n(i);function a({text:e,url:t,mutationFnName:s,mutationArgs:i,promise:a,context:o}){let n=i;void 0==n&&(n={}),a.then((()=>l()({title:"Success",text:`Created "${e}"`,icon:"success",button:"ok"}))).then((()=>{o.$store.commit(s,n),setTimeout((()=>o.$router.push(t)),1)})).catch((e=>{null!=e&&l()("Oops!",`We can't perform this action right now please try again\n\n details: ${e}`)})).finally((()=>{o.disabled=!1}))}},4802:function(e,t,s){s.d(t,{Z:function(){return o}});var i=s(4907),l=s(6737),a=s.n(l);function o({text:e,mutationFnName:t,mutationArgs:s,promise:l,context:o}){l.then((()=>(t&&i.Z.commit(t,s),o.$emit("editingCompleted",{}),a()({title:"Success",text:`Edited "${e}"`,icon:"success",button:"Ok"})))).catch((e=>{if(null!=e)return a()("Oops!",`We can't perform this action right now please try again\n\n details: ${e}`)})).finally((()=>{o.disabled=!1}))}}}]);
//# sourceMappingURL=634.bbacd8a8.js.map