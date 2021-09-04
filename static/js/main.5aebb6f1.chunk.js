(this["webpackJsonphangman-react"]=this["webpackJsonphangman-react"]||[]).push([[0],{44:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(15),r=a.n(c),s=(a(42),a(43),a(44),a(11)),i=a(68),o=a(14),j=a(6),l=a(31),b=a.n(l),u=a(71),d=a(69),m=a(19),O=a(12),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(s.a)(t,2),c=a[0],r=a[1],i=function(){r(e)},o=function(e){var t=e.target;r(Object(O.a)(Object(O.a)({},c),{},Object(m.a)({},t.name,t.value)))};return[c,o,i]},x=Object(n.createContext)(),p="set_word",f="count_error",v=a(2),g=function(e){var t=e.history,a=Object(n.useContext)(x),c=a.game.word,r=a.dispatch,o=Object(j.h)(),l=b.a.parse(o.search).q,m=h({wordSet:void 0===l?c:l}),O=Object(s.a)(m,2),f=O[0],g=O[1],_=f.wordSet;return Object(v.jsx)(i.a,{className:"justify-content-center animate__animated animate__backInUp",children:Object(v.jsxs)("div",{className:"col-6 bg-success p-3",children:[Object(v.jsx)("h1",{className:"text-white",children:"Menu"}),Object(v.jsxs)(u.a,{onSubmit:function(e){e.preventDefault(),r({type:p,payload:{word:_,count:0}}),t.replace("/hangman-react/play")},children:[Object(v.jsxs)(u.a.Group,{className:"mt-3",children:[Object(v.jsx)(u.a.Label,{className:"text-white",children:"Enter a word"}),Object(v.jsx)(u.a.Control,{type:"text",name:"wordSet",value:_,autoComplete:"off",onChange:g})]}),Object(v.jsx)(d.a,{className:"mt-3",type:"submit",children:"Star game"})]})]})})},_=a(34),y=function(e,t){var a=function(t,a,n,c){e.beginPath(),e.moveTo(t,a),e.lineTo(n,c),e.stroke()};switch(t){case 0:e.strokeStyle="#000000",e.lineWidth=8,a(20,400,200,400),a(100,400,100,50),a(100,50,350,50);break;case 1:e.strokeStyle="#FFC433",a(350,50,350,80);break;case 2:e.strokeStyle="#000000",e.beginPath(),e.arc(350,120,40,0,2*Math.PI),e.stroke();break;case 3:a(350,160,350,300);break;case 4:a(350,300,300,370);break;case 5:a(350,230,300,200);break;case 6:a(350,230,400,200);break;case 7:a(350,300,400,370);break;default:return}},N=function(){var e=Object(n.useContext)(x).game.count,t=function(e,t){var a=Object(n.useRef)(null);return Object(n.useEffect)((function(){var n=a.current.getContext("2d");e(n,t)}),[e,t]),a}(y,e);return Object(v.jsx)(_.a,{className:"p-0",children:Object(v.jsx)("canvas",{width:"600",height:"450",ref:t})})},w=a(27),C=function(e){var t=e.letter;return Object(v.jsxs)(_.a,{sm:1,className:"animate__animated animate__bounce",children:[Object(v.jsx)(_.a,{children:Object(v.jsx)("p",{className:"".concat(t===t.toUpperCase()?"text-dark":"text-white"," text-center letter-bold"),children:t===t.toUpperCase()?t:"__"})}),Object(v.jsx)(_.a,{className:"text-center letter-bold",children:"__"})]})},k=a(70),S=function(e){var t=e.letters;return Object(v.jsx)(k.a,{className:"my-5 animate__animated animate__bounce text-center",variant:"danger",children:t})},E=function(){var e=Object(j.g)(),t=Object(n.useContext)(x),a=t.game.word,c=t.dispatch,r=Object(n.useState)(Object(w.a)(a.toLowerCase().split(""))),o=Object(s.a)(r,2),l=o[0],b=o[1],m=Object(n.useState)([]),O=Object(s.a)(m,2),p=O[0],g=O[1],y=Object(n.useState)(!1),N=Object(s.a)(y,2),k=N[0],E=N[1],I=Object(n.useState)(!1),U=Object(s.a)(I,2),T=U[0],J=U[1],L=h({letter:""}),P=Object(s.a)(L,3),B=P[0],D=P[1],F=P[2],G=B.letter,M=function(){e.replace("/hangman-react/")};return Object(n.useEffect)((function(){7===p.length&&(alert("You lose!"),E(!0)),l.toString()===l.toString().toUpperCase()&&(alert("You won!"),E(!0),J(!0))}),[l,p]),Object(v.jsxs)(_.a,{className:"p-3",children:[Object(v.jsx)(i.a,{className:"justify-content-center my-4",children:l.map((function(e,t){return Object(v.jsx)(C,{letter:e},"".concat(e,"-").concat(t))}))}),Object(v.jsx)(u.a,{onSubmit:function(e){e.preventDefault(),l.find((function(e){return e===G.toLowerCase()}))?b((function(e){return e.map((function(e){return e===G?G.toUpperCase():e}))})):(g((function(e){return[].concat(Object(w.a)(e),[G])})),c({type:f,payload:1})),F()},children:Object(v.jsxs)(u.a.Group,{children:[Object(v.jsx)(u.a.Label,{children:"Enter a letter"}),Object(v.jsx)(u.a.Control,{type:"text",name:"letter",value:G,onChange:D,autoComplete:"off",disabled:k}),Object(v.jsx)(d.a,{className:"mt-3",variant:"primary",type:"submit",disabled:k,children:"Confirm"})]})}),Object(v.jsx)(S,{letters:p}),Object(v.jsxs)(i.a,{className:"justify-content-center",children:[7===p.length&&Object(v.jsx)(d.a,{variant:"warning",onClick:M,className:"col-7 animate__animated animate__rubberBand",children:"Sorry, try again!"}),T&&Object(v.jsx)(d.a,{variant:"success",onClick:M,className:"col-7 animate__animated animate__rubberBand",children:"Congratulations! Keep it up!"})]})]})},I=function(){return Object(v.jsxs)("div",{className:"container animate__animated animate__bounceInUp",children:[Object(v.jsx)("h1",{className:"text-center",children:"The hangman"}),Object(v.jsxs)(i.a,{className:"justify-content-between",children:[Object(v.jsx)(N,{}),Object(v.jsx)(E,{})]})]})},U=function(){return Object(v.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(v.jsx)(o.b,{className:"navbar-brand mx-3",to:"/",children:"The hangman, give it a hang"}),Object(v.jsx)("div",{className:"navbar-collapse",children:Object(v.jsx)("div",{className:"navbar-nav"})}),Object(v.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(v.jsx)("ul",{className:"navbar-nav ml-auto"})})]})},T=function(){return Object(v.jsxs)(o.a,{children:[Object(v.jsx)(U,{}),Object(v.jsx)(i.a,{className:"justify-content-center my-3 mx-0",children:Object(v.jsx)("div",{children:Object(v.jsxs)(j.d,{children:[Object(v.jsx)(j.b,{exact:!0,path:"/hangman-react/",component:g}),Object(v.jsx)(j.b,{exact:!0,path:"/hangman-react/play",component:I}),Object(v.jsx)(j.a,{to:"/"})]})})})]})},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(O.a)({},t.payload);case f:return Object(O.a)(Object(O.a)({},e),{},{count:e.count+1});default:return e}},L=function(){return JSON.parse(localStorage.getItem("game"))||{word:"Taco",count:0}},P=function(){var e=Object(n.useReducer)(J,{},L),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){localStorage.setItem("game",JSON.stringify(a))}),[a]),Object(v.jsx)(x.Provider,{value:{game:a,dispatch:c},children:Object(v.jsx)(T,{})})};r.a.render(Object(v.jsx)(P,{}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.5aebb6f1.chunk.js.map