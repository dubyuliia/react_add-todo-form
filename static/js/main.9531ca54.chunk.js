(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(2),c=a(7),s=a(4),o=a(1),l=(a(13),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]);function d(e){return l.find((function(t){return t.id===e}))||null}var u=a(0),m=function(e){var t=e.onSubmit,a=Object(o.useState)(""),n=Object(r.a)(a,2),i=n[0],c=n[1],s=Object(o.useState)(!1),m=Object(r.a)(s,2),j=m[0],b=m[1],h=Object(o.useState)(0),O=Object(r.a)(h,2),f=O[0],p=O[1],x=Object(o.useState)(!1),v=Object(r.a)(x,2),S=v[0],y=v[1],N=!i.trim()||!f;return Object(u.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){e.preventDefault(),b(!i.trim()),y(!f),N||(t({id:0,title:i,completed:!1,userId:f,user:d(f)}),c(""),p(0))},children:[Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("label",{className:"label",htmlFor:"todo-title",children:"Title: "}),Object(u.jsx)("input",{id:"todo-title",type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:i,onChange:function(e){c(e.target.value),b(!1)}}),j&&Object(u.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("label",{className:"label",htmlFor:"todo-user-id",children:"User: "}),Object(u.jsxs)("select",{id:"todo-user-id","data-cy":"userSelect",value:f,onChange:function(e){p(+e.target.value),y(!1)},children:[Object(u.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),l.map((function(e){var t=e.id,a=e.name;return Object(u.jsx)("option",{value:t,children:a},t)}))]}),S&&Object(u.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]})},j=function(e){var t=e.user;return Object(u.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email?t.email:""),children:t.name})},b=function(e){var t=e.title,a=e.completed,n=void 0!==a&&a,i=e.user;return Object(u.jsxs)("article",{"data-id":"1",className:"TodoInfo ".concat(n?"TodoInfo--completed":""),children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:t}),i&&Object(u.jsx)(j,{user:i})]})},h=function(e){var t=e.todos;return Object(u.jsx)("section",{className:"TodoList",children:t.map((function(e){var t=e.id,a=e.user,n=e.completed,i=e.title;return Object(u.jsx)(b,{user:a,completed:n,title:i},t)}))})},O=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:d(e.userId)})}));function f(e){return Math.max.apply(Math,Object(c.a)(e.map((function(e){return e.id}))))+1}var p=function(){var e=Object(o.useState)(O),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Add todo form"}),Object(u.jsx)(m,{onSubmit:function(e){var t=Object(s.a)(Object(s.a)({},e),{},{id:f(a)});n((function(e){return[].concat(Object(c.a)(e),[t])}))}}),Object(u.jsx)(h,{todos:a})]})};i.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.9531ca54.chunk.js.map