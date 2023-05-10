(function(){"use strict";var t={6193:function(t,e,a){var s=a(9669),r=a.n(s);e["Z"]=r().create({baseURL:"/"})},4754:function(t,e,a){a.d(e,{SA:function(){return m},yj:function(){return o},k0:function(){return h},iC:function(){return y},dT:function(){return p},uJ:function(){return c},Xd:function(){return f},K_:function(){return g},wq:function(){return l},It:function(){return d},rC:function(){return u}});const s={createClient:"/u/api/clients/create-client",getClients:"/u/api/clients/",getAllUsers:"/u/api/users/",createUser:"/u/api/users/create-user",editUser:"/u/api/users/edit-user",createTask:"/u/api/tasks/create-task",createSubTask:"/u/api/tasks/create-sub-task",getSubTasks:"/u/api/tasks/get-sub-tasks",getTasks:"/u/api/tasks/",getTaskData:"/u/api/tasks/get-task-data",getRoles:"/u/api/roles",deleteUser:"/u/api/users/delete-user",getUserData:"/u/api/users/edit",editRole:"/u/api/roles/edit-role",deleteRole:"/u/api/roles/delete-role",createRole:"/u/api/roles/create-role",getAllRights:"/u/api/roles/get-rights",getUserRights:"/u/api/rights",getTasksMaster:"/u/api/tasks/get-tasks-master",getSubTasksMaster:"/u/api/tasks/get-sub-tasks-master",getClientsMasterTypes:"/u/api/clients/types",getMyTasks:"/u/api/myTasks/",editClient:"/u/api/clients/edit-client",editTask:"/u/api/tasks/edit-task",editTaskMaster:"/u/api/tasks/edit-task-master",deleteClient:"/u/api/clients/delete-client",deleteTask:"/u/api/tasks/delete-task",changeStatusMyTask:"/u/api/myTasks/change-status",changeTaskStatus:"/u/api/tasks/change-status",changeClientTag:"/u/api/clients/tag",admin:{createAdmin:"/u/api/orgs/admins/create-admin",createOrg:"/u/api/orgs/create-org"},settings:{get:"/u/api/settings/",waNotifications:{create:"/u/api/settings/notifications/wa/create",getOtp:"/u/api/settings/notifications/wa/otp",verifyOtp:"/u/api/settings/notifications/wa/otp",getHistory:"/u/api/settings/notifications/wa/history",consent:"/u/api/settings/notifications/wa/consent",getQr:"/u/api/settings/notifications/wa/qr"}},profile:{getSettings:"/u/api/settings/"}};var r=s,n=a(7802),i=a(4370);const o={get:t=>(0,n.Z)(r.getClients,t),create:t=>(0,n.Z)(r.createClient,t),getTypes:()=>(0,n.Z)(r.getClientsMasterTypes),edit:t=>(0,n.Z)(r.editClient,t),delete:t=>(0,i.Z)(r.deleteClient,t),tag:t=>(0,i.Z)(r.changeClientTag,t)},u={get:t=>(0,n.Z)(r.getAllUsers,t),getData:t=>(0,n.Z)(r.getUserData,t),create:t=>(0,i.Z)(r.createUser,t),edit:t=>(0,i.Z)(r.editUser,t),delete:t=>(0,i.Z)(r.deleteUser,t)},c={get:t=>(0,n.Z)(r.getRoles,t),getData:t=>(0,n.Z)(r.editRole,t),create:t=>(0,n.Z)(r.createRole,t),edit:t=>(0,i.Z)(r.editRole,t),delete:t=>(0,i.Z)(r.deleteRole,t)},l={get:t=>(0,n.Z)(r.getTasks,t),getData:t=>(0,n.Z)(r.getTaskData,t),create:t=>(0,n.Z)(r.createTask,t),edit:t=>(0,n.Z)(r.editTask,t),getSubTasks:t=>(0,n.Z)(r.getSubTasks,t),delete:t=>(0,i.Z)(r.deleteTask,t),changeStatus:t=>(0,i.Z)(r.changeTaskStatus,t)},d={get:()=>(0,n.Z)(r.getTasksMaster),edit:t=>(0,n.Z)(r.editTaskMaster,t)},g={get:t=>(0,n.Z)(r.getSubTasksMaster,t)},p={get:()=>(0,n.Z)(r.getMyTasks),changeStatus:t=>(0,n.Z)(r.changeStatusMyTask,t)},m={users:{create:t=>(0,i.Z)(r.admin.createAdmin,t)},orgs:{create:t=>(0,i.Z)(r.admin.createOrg,t)}},f={get:t=>(0,n.Z)(r.settings.get,t),notifications:{wa:{getQr:()=>(0,n.Z)(r.settings.waNotifications.getQr),create:t=>(0,i.Z)(r.settings.waNotifications.create,t),getOtp:t=>(0,n.Z)(r.settings.waNotifications.getOtp,t),verifyOtp:t=>(0,i.Z)(r.settings.waNotifications.verifyOtp,t),get:()=>(0,n.Z)(r.settings.waNotifications.getHistory),consent:t=>(0,i.Z)(r.settings.waNotifications.consent,t)}}},h=()=>(0,n.Z)(r.getAllRights),y=()=>(0,n.Z)(r.getUserRights)},7802:function(t,e,a){var s=a(6193);const r=(t,e)=>s.Z.get(t,{withCredentials:!0,params:e});e["Z"]=r},4370:function(t,e,a){var s=a(6193);const r=(t,e)=>s.Z.post(t,{params:e},{withCredentials:!0});e["Z"]=r},7508:function(t,e,a){var s=a(9963),r=a(6252);function n(t,e){const a=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(a)])}var i=a(3744);const o={},u=(0,i.Z)(o,[["render",n]]);var c=u,l=a(2201),d=a(2283),g=a(4754);let p={title:"settings"},m={title:"Organizations",action:!0,actionUrl:"/u/admin/orgs/create-org",path:[{text:"home",route:"/u/admin/orgs"}]},f={title:"Admin",path:[{text:"home",route:"/u/admin/orgs"}]},h={title:"Organizations",path:[{text:"home",route:"/u/admin/orgs"},{text:"create",route:"/u/admin/orgs/create-org"}]},y={title:"users",path:[{text:"list",route:"/u/users/list"},{text:"create",route:"/u/users/create-user"}]},b={title:"users",action:!0,actionUrl:"/u/users/create-user",path:[{text:"list",route:"/u/users/list"}]},k={title:"roles",action:!0,actionUrl:"/u/roles/create-role",path:[{text:"list",route:"/u/roles/list"}]},_={title:"roles",path:[{text:"list",route:"/u/roles/list"},{text:"create",route:"/u/roles/create-role"}]},T={title:"tasks",action:!0,actionUrl:"/u/tasks/create-task",path:[{text:"list",route:"/u/tasks/list"}]},v={title:"tasks",path:[{text:"list",route:"/u/tasks/list"},{text:"create",route:"/u/tasks/create-task"}]},P={title:"activity",path:[{text:"list",route:"/u/activity/"}]},C={title:"clients",action:!0,actionUrl:"/u/clients/create-client",path:[{text:"list",route:"/u/clients/list"}]},O={title:"clients",path:[{text:"list",route:"/u/clients/list"},{text:"create",route:"/u/clients/create-client"}]},$={title:"my tasks",path:[{text:"list",route:"/u/my-tasks/list"}]},S={title:"work diary",path:[{text:"list",route:"/u/work-diary"}]},D=[{path:"/",name:"main",component:()=>a.e(336).then(a.bind(a,1336)),children:[{path:"",alias:"login",name:"login",component:()=>Promise.all([a.e(737),a.e(824)]).then(a.bind(a,5824))}]},{path:"/u",name:"u",component:()=>a.e(169).then(a.bind(a,7476)),children:[{path:"profile",name:"profile",component:()=>Promise.all([a.e(737),a.e(398),a.e(419)]).then(a.bind(a,8314))},{path:"admin",name:"admin_panel",meta:{protected:!0},component:()=>a.e(646).then(a.bind(a,6646)),children:[{path:"orgs",component:()=>a.e(85).then(a.bind(a,6085)),children:[{path:"",alias:"/",name:"organizations_list",component:()=>a.e(62).then(a.bind(a,7062)),meta:{breadcrumb:m}},{path:"create-org",name:"organizations_create",component:()=>a.e(50).then(a.bind(a,1050)),meta:{breadcrumb:h}},{path:":orgId/create-admin",name:"organizations_create_admin",params:["orgId"],component:()=>a.e(885).then(a.bind(a,8885)),meta:{breadcrumb:f}},{path:":orgId/",name:"organizations_data",params:["orgId"],component:()=>Promise.all([a.e(737),a.e(501)]).then(a.bind(a,6501))}]}]},{path:"settings",name:"settings",component:()=>Promise.all([a.e(737),a.e(398),a.e(687)]).then(a.bind(a,7653)),meta:{breadcrumb:p}},{path:"users",component:()=>a.e(987).then(a.bind(a,987)),children:[{path:"",alias:"list",name:"users_list",component:()=>Promise.all([a.e(737),a.e(525)]).then(a.bind(a,8525)),meta:{breadcrumb:b}},{path:"create-user",name:"create_user",component:()=>a.e(885).then(a.bind(a,8885)),meta:{protected:!0,breadcrumb:y}}]},{path:"my-tasks",component:()=>a.e(738).then(a.bind(a,4738)),children:[{path:"",alias:"list",name:"my_tasks_list",component:()=>Promise.all([a.e(737),a.e(780)]).then(a.bind(a,6780)),meta:{breadcrumb:$}}]},{path:"roles",component:()=>a.e(995).then(a.bind(a,8227)),children:[{path:"",alias:"list",name:"roles_list",component:()=>Promise.all([a.e(737),a.e(541)]).then(a.bind(a,8541)),meta:{breadcrumb:k}},{path:"create-role",name:"create_role",component:()=>a.e(900).then(a.bind(a,2900)),meta:{protected:!0,breadcrumb:_}}]},{path:"tasks",component:()=>a.e(602).then(a.bind(a,7602)),children:[{path:"",alias:"list",name:"tasks_list",component:()=>Promise.all([a.e(737),a.e(444),a.e(113),a.e(227)]).then(a.bind(a,6442)),meta:{breadcrumb:T}},{path:"create-task",name:"create_task",component:()=>Promise.all([a.e(737),a.e(444),a.e(113),a.e(569)]).then(a.bind(a,4113)),meta:{breadcrumb:v,protected:!0}}]},{path:"activity",children:[{path:"",alias:"list",name:"activity",component:()=>a.e(927).then(a.bind(a,3927)),meta:{protected:!0,breadcrumb:P}}]},{path:"clients",component:()=>a.e(813).then(a.bind(a,2813)),children:[{path:"",alias:"list",name:"clients_list",component:()=>Promise.all([a.e(737),a.e(874)]).then(a.bind(a,1361)),meta:{breadcrumb:C}},{path:"create-client",name:"create_client",component:()=>a.e(230).then(a.bind(a,9230)),meta:{protected:!0,breadcrumb:O}}]},{path:"work-diary",children:[{path:"",alias:"list",name:"work_diary",component:()=>Promise.all([a.e(444),a.e(295)]).then(a.bind(a,4295)),meta:{protected:!0,breadcrumb:S}}]},{path:"/:pathMatch(.*)",name:"not-found",component:()=>a.e(429).then(a.bind(a,8429))},{path:"/no-access",name:"no_access",component:()=>a.e(978).then(a.bind(a,5978))}]},{path:"/:pathMatch(.*)",component:()=>a.e(429).then(a.bind(a,8429))}];const w=(0,l.p7)({history:(0,l.r5)("/"),routes:D});w.beforeEach((t=>{if(1!=t?.meta?.protected)return!0;{const e=d.Z.getters["rights/getUserRights"];if(e.length){const a=e?.some((e=>e?.code_name==t?.name));return 0!=a||{name:"no_access"}}(0,g.iC)().then((a=>{d.Z.commit("rights/setUserRights",a?.data?.userRights);const s=e.some((e=>e.code_name==t.name));return 0!=s||{name:"no_access"}}))}}));var K=w,L=a(6123),x=a.n(L),Z=a(7224),B=a(2892),R=a(3636),I=a(7810),A=a(9417),U=a(4288);R.vI.add(A.LEp,A.VPG,A.gr5,A.r6l,A.NdV,A.jMV,A.enB,A.fQK,A.uI9,A.hVn,A.Uwo,A.xiG,A.oTz,A.ILF,A.EQ8,A.$aW,A.TzT,A.r8p,A.Kl4,A.ifd,A.bDz,A.$GV,A.DlO,A.egO,A.u6k,A.ioV,A.hkK,A.wlW,U.u8Q,U.bam);let G=(0,s.ri)(c);G.use(x()).directive("debounce",(0,B.vue3Debounce)({lock:!0})).use(d.Z).use(K).use(Z.ZP,{position:"top-right"}).component("font-awesome-icon",I.GN).mount("#app")},2283:function(t,e,a){a.d(e,{Z:function(){return F}});var s=a(3907),r=a(5798),n=a(4754);const i={usersCount:"",users:{},allUsers:[],usersData:{},sortBy:"id",sortOrder:0,currentPage:"",paginationKey:0},o={allUsers(t){return t.allUsers},usersListGet:t=>(e,a,s,r)=>t.users[`${e}_${a}_${s}_${r[0]}_${r[1]}_${r[2]}`],usersCountGet(t){return t.usersCount},usersDataGet:t=>e=>t.usersData[e],sortGet(t){return{sortBy:t.sortBy,sortOrder:t.sortOrder}},getKey(t){return t.paginationKey},getCurrentPage(t){return t.currentPage}},u={RESET_STATE(t){t.usersCount="",t.users={},t.allUsers=[],t.usersData={}},deleteUser(t,{userId:e,filters:a}){const s=t.currentPage+"_"+t.sortBy+"_"+t.sortOrder+"_"+a[0]+"_"+a[1]+"_"+a[2];t.users[s].splice(t.users[s].findIndex((t=>t.id==e)),1)},usersList(t,{index:e,sortBy:a,sortOrder:s,filters:r,data:n}){Object.defineProperty(t.users,`${e}_${a}_${s}_${r[0]}_${r[1]}_${r[2]}`,{value:n,writable:!0,enumerable:!0})},usersCountSet(t,e){t.usersCount=e},usersAll(t,e){console.log(t.allUsers,e),t.allUsers=e},usersDataSet(t,{index:e,data:a}){Object.defineProperty(t.usersData,e,{value:a,writable:!0,enumerable:!0})},sortSet(t,{sortBy:e,sortOrder:a}){t.sortBy=e,t.sortOrder=a},currentPageSet(t,{index:e}){t.currentPage=e},refetch(t,{userId:e}){t.users={},t.usersCount="",t.allUsers=[],e?t.usersData[e]={}:t.userData=void 0,0==t.paginationKey?t.paginationKey=1:1==t.paginationKey&&(t.paginationKey=0)},paginate(t){0==t.paginationKey?t.paginationKey=1:1==t.paginationKey&&(t.paginationKey=0)}},c={usersAll({getters:t,commit:e}){return new Promise(((a,s)=>{0==t["allUsers"]?.length?n.rC.get({from:null,recordsPerPage:null,filters:["","",""]}).then((t=>{e("usersAll",t?.data?.usersList),a()})).catch((t=>{s(t)})):a()}))},usersDataSet({getters:t,commit:e},{userId:a,force:s}){const r=t["usersDataGet"]?.(a);return new Promise(((t,i)=>{void 0==r||""==r||1==s?n.rC.getData({editUserId:a}).then((s=>{e("usersDataSet",{index:a,data:s.data.userData}),t()})).catch((t=>{i(t)})):t()}))}};var l={namespaced:!0,state:i,getters:o,mutations:u,actions:c};let d={allRightsList:[],userRights:[]};const g={getAllRightsList(t){return t.allRightsList},getUserRights(t){return t.userRights},getComponenetsVisibility(t){return!!t.userRights?.length}},p={setAllRightsList(t,e){t.allRightsList=e},setUserRights(t,e){t.userRights=e}},m={setAllRightsList({getters:t,commit:e}){return new Promise(((a,s)=>{0==t["getAllRightsList"].length?(0,n.k0)().then((t=>{e("setAllRightsList",t.data.rightsMasterList),a()})).catch((t=>{s(t)})):a()}))}};var f={namespaced:!0,actions:m,state:d,getters:g,mutations:p};const h={clientTypes:[],clients:{},clientsCount:"",clientsConfirmed:[],sortBy:"id",sortOrder:0,currentPage:"",paginationKey:0,clientCreatingStatus:2},y={getClientStatus(t){return t.clientCreatingStatus},getAllTypesList(t){return t.clientTypes},clientsListGet:t=>(e,a,s,r)=>t.clients[`${e}_${a}_${s}_${r[0]}_${r[1]}_${r[2]}_${r[3]}_${r[4]}`],clientsCountGet(t){return t.clientsCount},clientsGetConfirmed(t){return t.clientsConfirmed},sortGet(t){return{sortBy:t.sortBy,sortOrder:t.sortOrder}},getKey(t){return t.paginationKey},getCurrentPage(t){return t.currentPage}},b={RESET_STATE(t){t.clients={},t.clientsCount="",t.clientsConfirmed=[]},setClientStatus(t,e){t.clientCreatingStatus=e},deleteClient(t,{clientId:e,filters:a}){const s=t.currentPage+"_"+t.sortBy+"_"+t.sortOrder+"_"+a[0]+"_"+a[1]+"_"+a[2]+"_"+a[3]+"_"+a[4];t.clients[s].splice(t.clients[s].findIndex((t=>t.id==e)),1)},setAllTypesList(t,e){t.clientTypes=e},clientsCountSet(t,e){t.clientsCount=e},clientsList(t,{index:e,sortBy:a,sortOrder:s,filters:r,data:n}){Object.defineProperty(t.clients,`${e}_${a}_${s}_${r[0]}_${r[1]}_${r[2]}_${r[3]}_${r[4]}`,{value:n,writable:!0,enumerable:!0})},clientsConfirmed(t,e){t.clientsConfirmed=e},sortSet(t,{sortBy:e,sortOrder:a}){t.sortBy=e,t.sortOrder=a},currentPageSet(t,{index:e}){t.currentPage=e},refetch(t){t.clientsCount=void 0,t.clients={},t.clientsConfirmed=[],0==t.paginationKey?t.paginationKey=1:1==t.paginationKey&&(t.paginationKey=0)},paginate(t){0==t.paginationKey?t.paginationKey=1:1==t.paginationKey&&(t.paginationKey=0)}},k={getTypes({commit:t,getters:e}){return new Promise(((a,s)=>{""==e["getAllTypesList"]?n.yj.getTypes().then((e=>{t("setAllTypesList",e?.data?.clientsMasterTypes),a()})).catch((t=>{s(t)})):a()}))},clientsGetConfirmed({commit:t,getters:e}){return new Promise(((a,s)=>{0==e["clientsGetConfirmed"]?.length?n.yj.get({from:null,recordsPerPage:null,filters:["","","","",1]}).then((e=>{t("clientsConfirmed",e?.data?.clientsList),a()})).catch((t=>{s(t)})):a()}))}};var _={namespaced:!0,state:h,getters:y,actions:k,mutations:b};const T={tasksCount:"",tasks:{},tasksData:{},subTasksData:{},tasksMaster:[],sortBy:"id",sortOrder:0,currentPage:"",paginationKey:0},v={taskData:t=>e=>t.tasksData[e],tasksListGet:t=>(e,a,s,r)=>t.tasks[`${e}_${a}_${s}_${r[0]}_${r[1]}_${r[2]}_${r[3]}_${r[4]}`],tasksCountGet(t){return t.tasksCount},tasksMasterListGet(t){return t.tasksMaster},subTasksData:t=>e=>t.subTasksData[e],sortGet(t){return{sortBy:t.sortBy,sortOrder:t.sortOrder}},getKey(t){return t.paginationKey},getCurrentPage(t){return t.currentPage}},P={RESET_STATE(t,{isMaster:e}){t.tasksCount="",t.tasks={},t.tasksData={},t.subTasksData={},e&&(t.tasksMaster=[])},deleteTask(t,{taskId:e,filters:a}){const s=t.currentPage+"_"+t.sortBy+"_"+t.sortOrder+"_"+a[0]+"_"+a[1]+"_"+a[2]+"_"+a[3]+"_"+a[4];t.tasks[s].splice(t.tasks[s].findIndex((t=>t.id==e)),1)},tasksDataSet(t,{taskId:e,taskData:a}){Object.defineProperty(t.tasksData,e,{value:a,writable:!0,enumerable:!0})},tasksCountSet(t,e){t.tasksCount=e},tasksList(t,{index:e,sortBy:a,sortOrder:s,filters:r,data:n}){Object.defineProperty(t.tasks,`${e}_${a}_${s}_${r[0]}_${r[1]}_${r[2]}_${r[3]}_${r[4]}`,{value:n,writable:!0,enumerable:!0})},tasksMasterListSet(t,e){t.tasksMaster=e},subTasksDataSet(t,{taskId:e,data:a}){Object.defineProperty(t.subTasksData,e,{value:a,writable:!0,enumerable:!0})},sortSet(t,{sortBy:e,sortOrder:a}){t.sortBy=e,t.sortOrder=a},currentPageSet(t,{index:e}){t.currentPage=e},refetch(t,{taskId:e,saved:a}){t.tasks={},e?(t.tasksData[e]=void 0,t.subTasksData[e]=void 0):(t.tasksCount=void 0,t.tasksData={},t.subTasksData={}),1==a&&(t.tasksMaster=[]),0==t.paginationKey?t.paginationKey=1:1==t.paginationKey&&(t.paginationKey=0)},paginate(t){0==t.paginationKey?t.paginationKey=1:1==t.paginationKey&&(t.paginationKey=0)}},C={tasksList({getters:t,commit:e},{index:a,from:s,filters:r}){const{sortBy:i,sortOrder:o}=t["sortGet"],u=t["tasksListGet"](a,i,o,r);u?.length&&n.wq.get({from:s,recordsPerPage:10,sortBy:i,sortOrder:o,filters:r}).then((t=>{e("tasksList",{index:a,sortBy:i,sortOrder:o,filters:r,data:t.data.tasksList})}))},tasksDataSet({getters:t,commit:e},{taskId:a,force:s}){const r=t["taskData"]?.(a);return new Promise(((t,i)=>{void 0==r||""==r||1==s?n.wq.getData({taskId:a}).then((s=>{e("tasksDataSet",{taskId:a,taskData:s?.data}),t()})).catch((()=>{i()})):t()}))},tasksMasterListSet({getters:t,commit:e}){return new Promise(((a,s)=>{0==t["tasksMasterListGet"]?.length?n.It.get().then((t=>{e("tasksMasterListSet",t?.data?.tasksMasterList),a()})).catch((()=>{s()})):a()}))},subTasksDataSet({getters:t,commit:e,dispatch:a},{taskId:s,force:r}){const i=t["subTasksData"]?.(s);return new Promise(((t,o)=>{void 0===i||""===i||1==r?n.wq.getSubTasks({taskId:s}).then((r=>{e("subTasksDataSet",{taskId:s,data:r.data.subTasksList});for(let t=0;t<r.data.subTasksList.length;t++)"string"===typeof r.data.subTasksList[t].assignedTo&&(r.data.subTasksList[t].assignedTo=JSON.parse(r.data.subTasksList[t].assignedTo),r.data.subTasksList[t].assignedTo?.map((t=>{a("images/fetchProfilePic",{userId:t,width:50,height:50},{root:!0})})));return t(),r})).catch((()=>{o()})):t()}))}};var O={namespaced:!0,state:T,getters:v,mutations:P,actions:C};const $={myTasksCount:"",myTasksData:{},sortBy:"id",sortOrder:0,currentPage:"",paginationKey:0},S={myTasksCountGet(t){return t.myTasksCount},myTasksListGet:t=>(e,a,s,r)=>t.myTasksData[`${e}_${a}_${s}_${r[0]}_${r[1]}_${r[2]}`],sortGet(t){return{sortBy:t.sortBy,sortOrder:t.sortOrder}},getKey(t){return t.paginationKey},getCurrentPage(t){return t.currentPage}},D={myTasksCountSet(t,e){t.myTasksCount=e},myTasksList(t,{index:e,sortBy:a,sortOrder:s,filters:r,data:n}){Object.defineProperty(t.myTasksData,`${e}_${a}_${s}_${r[0]}_${r[1]}_${r[2]}`,{value:n,writable:!0,enumerable:!0})},sortSet(t,{sortBy:e,sortOrder:a}){t.sortBy=e,t.sortOrder=a},currentPageSet(t,{index:e}){t.currentPage=e},refetch(t){t.myTasksCount=void 0,t.myTasksData={},0==t.paginationKey?t.paginationKey=1:1==t.paginationKey&&(t.paginationKey=0)},paginate(t){0==t.paginationKey?t.paginationKey=1:1==t.paginationKey&&(t.paginationKey=0)}};var w={namespaced:!0,state:$,getters:S,mutations:D};const K={rolesCount:"",roles:{},allRoles:[],rolesData:{},sortBy:"id",sortOrder:0,currentPage:"",paginationKey:0},L={allRoles(t){return t.allRoles},rolesCountGet(t){return t.rolesCount},rolesListGet:t=>(e,a,s,r)=>t.roles[`${e}_${a}_${s}_${r[0]}_${r[1]}`],rolesDataGet:t=>e=>t.rolesData[e],sortGet(t){return{sortBy:t.sortBy,sortOrder:t.sortOrder}},getKey(t){return t.paginationKey},getCurrentPage(t){return t.currentPage}},x={RESET_STATE(t){t.rolesCount="",t.roles={},t.allRoles=[],t.rolesData={}},rolesCountSet(t,e){t.rolesCount=e},rolesList(t,{index:e,sortBy:a,sortOrder:s,filters:r,data:n}){Object.defineProperty(t.roles,`${e}_${a}_${s}_${r[0]}_${r[1]}`,{value:n,writable:!0,enumerable:!0})},rolesAll(t,e){t.allRoles=e},rolesDataSet(t,{index:e,data:a}){Object.defineProperty(t.rolesData,e,{value:a,writable:!0,enumerable:!0})},sortSet(t,{sortBy:e,sortOrder:a}){t.sortBy=e,t.sortOrder=a},deleteRole(t,{roleId:e,filters:a}){const s=t.currentPage+"_"+t.sortBy+"_"+t.sortOrder+"_"+a[0]+"_"+a[1];t.roles[s].splice(t.roles[s].findIndex((t=>t.id==e)),1)},currentPageSet(t,{index:e}){t.currentPage=e},refetch(t,{roleId:e}){t.roles={},t.rolesCount=void 0,t.allRoles={},e?t.rolesData[e]=void 0:t.rolesData={},0==t.paginationKey?t.paginationKey=1:1==t.paginationKey&&(t.paginationKey=0)},paginate(t){0==t.paginationKey?t.paginationKey=1:1==t.paginationKey&&(t.paginationKey=0)}},Z={rolesAll({getters:t,commit:e}){return new Promise(((a,s)=>{0==t["allRoles"]?.length?n.uJ.get({from:null,recordsPerPage:null,filters:["",""]}).then((t=>{e("rolesAll",t?.data?.rolesList),a()})).catch((t=>{s(t)})):a()}))},rolesDataSet({getters:t,commit:e},{roleId:a,force:s}){const r=t["rolesDataGet"]?.(a);return new Promise(((t,i)=>{1==s||void 0==r||""==r?n.uJ.getData({roleId:a}).then((s=>{e("rolesDataSet",{index:a,data:s.data.roleData}),t()})).catch((t=>{i(t)})):t()}))}};var B={namespaced:!0,state:K,getters:L,mutations:x,actions:Z};const R={activityCount:"",activity:{},sortBy:"id",sortOrder:0,currentPage:""},I={activityCountGet(t){return t.activityCount},activityListGet:()=>()=>{},sortGet(t){return{sortBy:t.sortBy,sortOrder:t.sortOrder}},getCurrentPage(t){return t.currentPage}},A={RESET_STATE(t){t.activityCount="",t.activity={}},activityCountSet(t,e){t.activityCount=e},activityList(){},sortSet(t,{sortBy:e,sortOrder:a}){t.sortBy=e,t.sortOrder=a},currentPageSet(t,{index:e}){t.currentPage=e},paginate(t){0==t.paginationKey?t.paginationKey=1:1==t.paginationKey&&(t.paginationKey=0)}};var U={namespaced:!0,state:R,getters:I,mutations:A},G=a(7802);const M={images:{}},E={getProfilePic:t=>e=>t.images[e]},j={setProfilePic(t,{userId:e,data:a}){t.images[e]=a}},N={fetchProfilePic({commit:t,getters:e},{userId:a,width:s,height:r}){const n=e["getProfilePic"](`${a}_${s}x${r}`);return new Promise(((e,i)=>{void 0==a?i():void 0==n?(t("setProfilePic",{userId:`${a}_${s}x${r}`,data:""}),(0,G.Z)("/u/api/settings/profile-pic",{userId:a,width:s,height:r}).then((n=>{t("setProfilePic",{userId:`${a}_${s}x${r}`,data:n.data.data}),e()})).catch((t=>{console.log(t),i()}))):e()}))}};var z={namespaced:!0,state:M,getters:E,mutations:j,actions:N};let q={userType:""},V={getUserType(t){return t.userType}},Q={setUserType(t,e){t.userType=e}};var F=(0,r.M)(s.yh,{state:q,getters:V,mutations:Q,modules:{users:l,rights:f,clients:_,tasks:O,myTasks:w,roles:B,activity:U,images:z}})}},e={};function a(s){var r=e[s];if(void 0!==r)return r.exports;var n=e[s]={exports:{}};return t[s].call(n.exports,n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(e,s,r,n){if(!s){var i=1/0;for(l=0;l<t.length;l++){s=t[l][0],r=t[l][1],n=t[l][2];for(var o=!0,u=0;u<s.length;u++)(!1&n||i>=n)&&Object.keys(a.O).every((function(t){return a.O[t](s[u])}))?s.splice(u--,1):(o=!1,n<i&&(i=n));if(o){t.splice(l--,1);var c=r();void 0!==c&&(e=c)}}return e}n=n||0;for(var l=t.length;l>0&&t[l-1][2]>n;l--)t[l]=t[l-1];t[l]=[s,r,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,s){return a.f[s](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/"+t+"."+{50:"f13f3679",62:"7cc8b08f",85:"c8d5d97f",113:"0c7b4dba",169:"c68c8018",227:"28779559",230:"a3bdafdd",295:"9801bcef",336:"8e3428f4",398:"eda02c05",419:"17500827",429:"67c53237",444:"3ec29da4",501:"b404328e",525:"51591a28",541:"1946f030",569:"a3f27aae",602:"e3ffe447",646:"2113f43b",687:"e4096f0f",693:"2caa10cc",737:"568235e7",738:"42de1dd9",780:"1809cef1",813:"d4bed827",824:"f1804ebd",874:"baf63f95",885:"06bb29ad",900:"e99cb619",927:"d91f0127",978:"7c7d615f",987:"22448b9f",995:"929a1c9d"}[t]+".js"}}(),function(){a.miniCssF=function(t){return"css/"+t+"."+{50:"b3384a7c",62:"11422fdf",169:"cc4b02c2",227:"08946832",230:"a9b6b1aa",295:"b22f732b",419:"2484bf75",501:"e7d44f88",525:"41d6dcc4",541:"f8262a08",569:"a520eaed",687:"52a5742d",693:"29a9872c",780:"302acdb7",824:"50270f63",874:"edf804a2",885:"db441301",900:"bb7873b6",927:"d04a85bd"}[t]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="portal:";a.l=function(s,r,n,i){if(t[s])t[s].push(r);else{var o,u;if(void 0!==n)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==s||d.getAttribute("data-webpack")==e+n){o=d;break}}o||(u=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",e+n),o.src=s),t[s]=[r];var g=function(e,a){o.onerror=o.onload=null,clearTimeout(p);var r=t[s];if(delete t[s],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((function(t){return t(a)})),e)return e(a)},p=setTimeout(g.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=g.bind(null,o.onerror),o.onload=g.bind(null,o.onload),u&&document.head.appendChild(o)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,a,s,r){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var i=function(a){if(n.onerror=n.onload=null,"load"===a.type)s();else{var i=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=o,n.parentNode.removeChild(n),r(u)}};return n.onerror=n.onload=i,n.href=e,a?a.parentNode.insertBefore(n,a.nextSibling):document.head.appendChild(n),n},e=function(t,e){for(var a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var r=a[s],n=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(n===t||n===e))return r}var i=document.getElementsByTagName("style");for(s=0;s<i.length;s++){r=i[s],n=r.getAttribute("data-href");if(n===t||n===e)return r}},s=function(s){return new Promise((function(r,n){var i=a.miniCssF(s),o=a.p+i;if(e(i,o))return r();t(s,o,null,r,n)}))},r={143:0};a.f.miniCss=function(t,e){var a={50:1,62:1,169:1,227:1,230:1,295:1,419:1,501:1,525:1,541:1,569:1,687:1,693:1,780:1,824:1,874:1,885:1,900:1,927:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=s(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}}(),function(){var t={143:0};a.f.j=function(e,s){var r=a.o(t,e)?t[e]:void 0;if(0!==r)if(r)s.push(r[2]);else if(569!=e){var n=new Promise((function(a,s){r=t[e]=[a,s]}));s.push(r[2]=n);var i=a.p+a.u(e),o=new Error,u=function(s){if(a.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var n=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.src;o.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",o.name="ChunkLoadError",o.type=n,o.request=i,r[1](o)}};a.l(i,u,"chunk-"+e,e)}else t[e]=0},a.O.j=function(e){return 0===t[e]};var e=function(e,s){var r,n,i=s[0],o=s[1],u=s[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(r in o)a.o(o,r)&&(a.m[r]=o[r]);if(u)var l=u(a)}for(e&&e(s);c<i.length;c++)n=i[c],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(l)},s=self["webpackChunkportal"]=self["webpackChunkportal"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(7508)}));s=a.O(s)})();
//# sourceMappingURL=app.7eceec33.js.map