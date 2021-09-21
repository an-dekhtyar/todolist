(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{100:function(t,e,a){t.exports=a(129)},105:function(t,e,a){},106:function(t,e,a){},129:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),i=a(8),l=a.n(i);a(105),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(106);var r,c,s=a(173),d=a(174),u=a(175),m=a(166),f=a(131),p=a(169),b=a(177),g=a(178),v=a(176),k=a(15),h=a(27),E=a(81),C=a.n(E).a.create(Object(h.a)({baseURL:"https://social-network.samuraijs.com/api/1.1/"},{withCredentials:!0,headers:{"API-KEY":"05d9bcdd-f837-4b7d-a2a0-c9d433328199"}})),j=function(){return C.get("todo-lists")},O=function(t){return C.post("todo-lists",{title:t})},y=function(t){return C.delete("todo-lists/".concat(t))},T=function(t,e){return C.put("todo-lists/".concat(t),{title:e})},I=function(t){return C.get("todo-lists/".concat(t,"/tasks"))},A=function(t,e){return C.delete("todo-lists/".concat(t,"/tasks/").concat(e))},w=function(t,e){return C.post("todo-lists/".concat(t,"/tasks"),{title:e})},S=function(t,e,a){return C.put("todo-lists/".concat(t,"/tasks/").concat(e),a)},x=function(t){return C.post("auth/login",t)},F=function(){return C.delete("auth/login")},L=function(){return C.get("auth/me")};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(r||(r={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(c||(c={}));var P,z=a(28),N=function(t,e){t.messages.length?e(J({error:t.messages[0]})):e(J({error:"Some error occurred"})),e(K({status:"failed"}))},D=function(t,e){e(J({error:t.message?t.message:"Some error occurred"})),e(K({status:"failed"}))},M=Object(z.b)({name:"auth",initialState:{isLoggedIn:!1},reducers:{setIsLoggedInAC:function(t,e){t.isLoggedIn=e.payload.value}}}),q=M.reducer,B=M.actions.setIsLoggedInAC,H=Object(z.b)({name:"app",initialState:{status:"idle",error:null,isInitialized:!1},reducers:{setAppErrorAC:function(t,e){t.error=e.payload.error},setAppStatusAC:function(t,e){t.status=e.payload.status},setAppInitializedAC:function(t,e){t.isInitialized=e.payload.isInitialized}}}),R=H.reducer,U=H.actions,J=U.setAppErrorAC,K=U.setAppStatusAC,W=U.setAppInitializedAC,V=Object(z.b)({name:"todolists",initialState:[],reducers:{removeTodolistAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));a>-1&&t.splice(a,1)},addTodolistAC:function(t,e){t.unshift(Object(h.a)(Object(h.a)({},e.payload.todolist),{},{filter:"all",entityStatus:"idle"}))},changeTodolistTitleAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));a>-1&&(t[a].title=e.payload.title)},changeTodolistFilterAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));a>-1&&(t[a].filter=e.payload.filter)},changeTodolistEntityStatusAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));a>-1&&(t[a].entityStatus=e.payload.status)},setTodolistsAC:function(t,e){return e.payload.todolists.map((function(t){return Object(h.a)(Object(h.a)({},t),{},{filter:"all",entityStatus:"idle"})}))}}}),Y=V.reducer,$=V.actions,_=$.removeTodolistAC,G=$.addTodolistAC,Q=$.changeTodolistTitleAC,X=$.changeTodolistFilterAC,Z=$.changeTodolistEntityStatusAC,tt=$.setTodolistsAC,et=a(42),at=Object(z.b)({name:"tasks",initialState:{},reducers:{removeTaskAC:function(t,e){t[e.payload.todolistId]=t[e.payload.todolistId].filter((function(t){return t.id!=e.payload.taskId}))},addTaskAC:function(t,e){t[e.payload.task.todoListId].unshift(e.payload.task)},updateTaskAC:function(t,e){var a=t[e.payload.todolistId].findIndex((function(t){return t.id===e.payload.taskId}));t[e.payload.todolistId][a]=Object(h.a)(Object(h.a)({},t[e.payload.todolistId][a]),e.payload.model)},setTasksAC:function(t,e){t[e.payload.todolistId]=e.payload.tasks}},extraReducers:(P={},Object(et.a)(P,G.type,(function(t,e){t[e.payload.todolist.id]=[]})),Object(et.a)(P,_.type,(function(t,e){delete t[e.payload.id]})),Object(et.a)(P,tt.type,(function(t,e){e.payload.todolists.forEach((function(e){t[e.id]=[]}))})),P)}),nt=at.reducer,ot=at.actions,it=ot.addTaskAC,lt=ot.removeTaskAC,rt=ot.setTasksAC,ct=ot.updateTaskAC,st=function(t,e,a){return function(n,o){var i=o().tasks[a].find((function(e){return e.id===t}));if(i){var l=Object(h.a)({deadline:i.deadline,description:i.description,priority:i.priority,startDate:i.startDate,title:i.title,status:i.status},e);S(a,t,l).then((function(o){if(0===o.data.resultCode){var i=ct({taskId:t,model:e,todolistId:a});n(i)}else N(o.data,n)})).catch((function(t){D(t,n)}))}else console.warn("task not found in the state")}},dt=a(170),ut=a(130),mt=a(45),ft=a(179),pt=a(167),bt=o.a.memo((function(t){var e=t.addItem,a=t.disabled,i=void 0!==a&&a;console.log("AddItemForm called");var l=Object(n.useState)(""),r=Object(mt.a)(l,2),c=r[0],s=r[1],d=Object(n.useState)(null),u=Object(mt.a)(d,2),f=u[0],p=u[1],b=function(){""!==c.trim()?(e(c),s("")):p("Title is required")};return o.a.createElement("div",null,o.a.createElement(ft.a,{variant:"outlined",disabled:i,error:!!f,value:c,onChange:function(t){s(t.currentTarget.value)},onKeyPress:function(t){null!==f&&p(null),13===t.charCode&&b()},label:"Title",helperText:f}),o.a.createElement(m.a,{color:"primary",onClick:b,disabled:i},o.a.createElement(pt.a,null)))})),gt=a(89),vt=o.a.memo((function(t){console.log("EditableSpan called");var e=Object(n.useState)(!1),a=Object(mt.a)(e,2),i=a[0],l=a[1],r=Object(n.useState)(t.value),c=Object(mt.a)(r,2),s=c[0],d=c[1];return i?o.a.createElement(ft.a,{value:s,onChange:function(t){d(t.currentTarget.value)},autoFocus:!0,onBlur:function(){l(!1),t.onChange(s)}}):o.a.createElement("span",{onDoubleClick:function(){l(!0),d(t.value)}},t.value)})),kt=a(168),ht=a(181),Et=o.a.memo((function(t){var e=Object(n.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),a=Object(n.useCallback)((function(e){var a=e.currentTarget.checked;t.changeTaskStatus(t.task.id,a?r.Completed:r.New,t.todolistId)}),[t.task.id,t.todolistId]),i=Object(n.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return o.a.createElement("div",{key:t.task.id,className:t.task.status===r.Completed?"is-done":""},o.a.createElement(ht.a,{checked:t.task.status===r.Completed,color:"primary",onChange:a}),o.a.createElement(vt,{value:t.task.title,onChange:i}),o.a.createElement(m.a,{onClick:e},o.a.createElement(kt.a,null)))})),Ct=["demo"],jt=o.a.memo((function(t){var e=t.demo,a=void 0!==e&&e,i=Object(gt.a)(t,Ct);console.log("Todolist called");var l=Object(k.b)();Object(n.useEffect)((function(){if(!a){var t,e=(t=i.todolist.id,function(e){e(K({status:"loading"})),I(t).then((function(a){var n=a.data.items;e(rt({tasks:n,todolistId:t})),e(K({status:"succeeded"}))}))});l(e)}}),[]);var c=Object(n.useCallback)((function(t){i.addTask(t,i.todolist.id)}),[i.addTask,i.todolist.id]),s=Object(n.useCallback)((function(t){i.changeTodolistTitle(i.todolist.id,t)}),[i.todolist.id,i.changeTodolistTitle]),d=Object(n.useCallback)((function(){return i.changeFilter("all",i.todolist.id)}),[i.todolist.id,i.changeFilter]),u=Object(n.useCallback)((function(){return i.changeFilter("active",i.todolist.id)}),[i.todolist.id,i.changeFilter]),f=Object(n.useCallback)((function(){return i.changeFilter("completed",i.todolist.id)}),[i.todolist.id,i.changeFilter]),b=i.tasks;return"active"===i.todolist.filter&&(b=i.tasks.filter((function(t){return t.status===r.New}))),"completed"===i.todolist.filter&&(b=i.tasks.filter((function(t){return t.status===r.Completed}))),o.a.createElement("div",null,o.a.createElement("h3",null,o.a.createElement(vt,{value:i.todolist.title,onChange:s}),o.a.createElement(m.a,{onClick:function(){i.removeTodolist(i.todolist.id)},disabled:"loading"===i.todolist.entityStatus},o.a.createElement(kt.a,null))),o.a.createElement(bt,{addItem:c,disabled:"loading"===i.todolist.entityStatus}),o.a.createElement("div",null,b.map((function(t){return o.a.createElement(Et,{key:t.id,task:t,todolistId:i.todolist.id,removeTask:i.removeTask,changeTaskTitle:i.changeTaskTitle,changeTaskStatus:i.changeTaskStatus})}))),o.a.createElement("div",{style:{paddingTop:"10px"}},o.a.createElement(p.a,{variant:"all"===i.todolist.filter?"outlined":"text",onClick:d,color:"default"},"All"),o.a.createElement(p.a,{variant:"active"===i.todolist.filter?"outlined":"text",onClick:u,color:"primary"},"Active"),o.a.createElement(p.a,{variant:"completed"===i.todolist.filter?"outlined":"text",onClick:f,color:"secondary"},"Completed")))})),Ot=a(12),yt=function(t){var e=t.demo,a=void 0!==e&&e,i=Object(k.c)((function(t){return t.todolists})),l=Object(k.c)((function(t){return t.tasks})),r=Object(k.c)((function(t){return t.auth.isLoggedIn})),c=Object(k.b)();Object(n.useEffect)((function(){if(!a&&r){var t=function(t){t(K({status:"loading"})),j().then((function(e){t(tt({todolists:e.data})),t(K({status:"succeeded"}))})).catch((function(e){D(e,t)}))};c(t)}}),[]);var s=Object(n.useCallback)((function(t,e){var a=function(t,e){return function(a){A(e,t).then((function(n){var o=lt({taskId:t,todolistId:e});a(o)}))}}(t,e);c(a)}),[]),d=Object(n.useCallback)((function(t,e){var a=function(t,e){return function(a){a(K({status:"loading"})),w(e,t).then((function(t){if(0===t.data.resultCode){var e=t.data.data.item,n=it({task:e});a(n),a(K({status:"succeeded"}))}else N(t.data,a)})).catch((function(t){D(t,a)}))}}(t,e);c(a)}),[]),u=Object(n.useCallback)((function(t,e,a){var n=st(t,{status:e},a);c(n)}),[]),m=Object(n.useCallback)((function(t,e,a){var n=st(t,{title:e},a);c(n)}),[]),f=Object(n.useCallback)((function(t,e){var a=X({id:e,filter:t});c(a)}),[]),p=Object(n.useCallback)((function(t){var e,a=(e=t,function(t){t(K({status:"loading"})),t(Z({id:e,status:"loading"})),y(e).then((function(a){t(_({id:e})),t(K({status:"succeeded"}))}))});c(a)}),[]),b=Object(n.useCallback)((function(t,e){var a=function(t,e){return function(a){T(t,e).then((function(n){a(Q({id:t,title:e}))}))}}(t,e);c(a)}),[]),g=Object(n.useCallback)((function(t){var e=function(t){return function(e){e(K({status:"loading"})),O(t).then((function(t){e(G({todolist:t.data.data.item})),e(K({status:"succeeded"}))}))}}(t);c(e)}),[c]);return r?o.a.createElement(o.a.Fragment,null,o.a.createElement(dt.a,{container:!0,style:{padding:"20px"}},o.a.createElement(bt,{addItem:g})),o.a.createElement(dt.a,{container:!0,spacing:3},i.map((function(t){var e=l[t.id];return o.a.createElement(dt.a,{item:!0,key:t.id},o.a.createElement(ut.a,{style:{padding:"10px"}},o.a.createElement(jt,{todolist:t,tasks:e,removeTask:s,changeFilter:f,addTask:d,changeTaskStatus:u,removeTodolist:p,changeTaskTitle:m,changeTodolistTitle:b,demo:a})))})))):o.a.createElement(Ot.a,{to:"/login"})},Tt=a(183),It=a(180);function At(t){return o.a.createElement(It.a,Object.assign({elevation:6,variant:"filled"},t))}function wt(){var t=Object(k.c)((function(t){return t.app.error})),e=Object(k.b)(),a=function(t,a){"clickaway"!==a&&e(J({error:null}))},n=null!==t;return o.a.createElement(Tt.a,{open:n,autoHideDuration:6e3,onClose:a},o.a.createElement(At,{onClose:a,severity:"error"},t))}var St=a(51),xt=a(184),Ft=a(165),Lt=a(171),Pt=a(172),zt=a(88),Nt=function(){var t=Object(k.b)(),e=Object(k.c)((function(t){return t.auth.isLoggedIn})),a=Object(zt.a)({validate:function(t){return t.email?t.password?void 0:{password:"Password is required"}:{email:"Email is required"}},initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(e){var a;t((a=e,function(t){t(K({status:"loading"})),x(a).then((function(e){0===e.data.resultCode?(t(B({value:!0})),t(K({status:"succeeded"}))):N(e.data,t)})).catch((function(e){D(e,t)}))}))}});return e?o.a.createElement(Ot.a,{to:"/"}):o.a.createElement(dt.a,{container:!0,justify:"center"},o.a.createElement(dt.a,{item:!0,xs:4},o.a.createElement("form",{onSubmit:a.handleSubmit},o.a.createElement(xt.a,null,o.a.createElement(Ft.a,null,o.a.createElement("p",null,"To log in get registered ",o.a.createElement("a",{href:"https://social-network.samuraijs.com/",target:"_blank"},"here")),o.a.createElement("p",null,"or use common test account credentials:"),o.a.createElement("p",null," Email: free@samuraijs.com"),o.a.createElement("p",null,"Password: free")),o.a.createElement(Lt.a,null,o.a.createElement(ft.a,Object.assign({label:"Email",margin:"normal"},a.getFieldProps("email"))),a.errors.email?o.a.createElement("div",null,a.errors.email):null,o.a.createElement(ft.a,Object.assign({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"))),a.errors.password?o.a.createElement("div",null,a.errors.password):null,o.a.createElement(Pt.a,{label:"Remember me",control:o.a.createElement(ht.a,Object.assign({},a.getFieldProps("rememberMe"),{checked:a.values.rememberMe}))}),o.a.createElement(p.a,{type:"submit",variant:"contained",color:"primary"},"Login"))))))};var Dt=function(t){var e=t.demo,a=void 0!==e&&e,i=Object(k.c)((function(t){return t.app.status})),l=Object(k.c)((function(t){return t.app.isInitialized})),r=Object(k.c)((function(t){return t.auth.isLoggedIn})),c=Object(k.b)();Object(n.useEffect)((function(){c((function(t){L().then((function(e){0===e.data.resultCode&&t(B({value:!0})),t(W({isInitialized:!0}))}))}))}),[]);var h=Object(n.useCallback)((function(){c((function(t){t(K({status:"loading"})),F().then((function(e){0===e.data.resultCode?(t(B({value:!1})),t(K({status:"succeeded"}))):N(e.data,t)})).catch((function(e){D(e,t)}))}))}),[]);return l?o.a.createElement(St.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(wt,null),o.a.createElement(d.a,{position:"static"},o.a.createElement(u.a,null,o.a.createElement(m.a,{edge:"start",color:"inherit","aria-label":"menu"},o.a.createElement(v.a,null)),o.a.createElement(f.a,{variant:"h6"},"News"),r&&o.a.createElement(p.a,{color:"inherit",onClick:h},"Log out")),"loading"===i&&o.a.createElement(b.a,null)),o.a.createElement(g.a,{fixed:!0},o.a.createElement(Ot.b,{exact:!0,path:"/",render:function(){return o.a.createElement(yt,{demo:a})}}),o.a.createElement(Ot.b,{exact:!0,path:"/todolist/",render:function(){return o.a.createElement(yt,{demo:a})}}),o.a.createElement(Ot.b,{path:"/login",render:function(){return o.a.createElement(Nt,null)}})))):o.a.createElement("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"}},o.a.createElement(s.a,null))},Mt=a(24),qt=a(47),Bt=Object(Mt.b)({tasks:nt,todolists:Y,app:R,auth:q}),Ht=Object(z.a)({reducer:Bt,middleware:function(t){return t().prepend(qt.a)}});window.store=Ht,l.a.render(o.a.createElement(k.a,{store:Ht},o.a.createElement(Dt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[100,1,2]]]);
//# sourceMappingURL=main.5fcb2c5c.chunk.js.map