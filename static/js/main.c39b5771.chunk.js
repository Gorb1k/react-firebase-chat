(this["webpackJsonpreact-firebase-chat"]=this["webpackJsonpreact-firebase-chat"]||[]).push([[0],{79:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t),n.d(t,"Context",(function(){return D}));var a=n(1),c=n.n(a),r=n(15),i=n.n(r),o=n(25),s=(n(79),n(42)),u=n(117),j=n(120),l=n(121),d=n(126),h="/login",b="/chat",O=n(30),p=n(8),x=function(){var e=Object(a.useContext)(D).auth,t=Object(O.a)(e),n=Object(o.a)(t,1)[0];return Object(p.jsx)(u.a,{color:"secondary",position:"static",children:Object(p.jsx)(j.a,{variant:"dense",children:Object(p.jsx)(l.a,{container:!0,justify:"flex-end",children:n?Object(p.jsx)(d.a,{onClick:function(){return e.signOut()},variant:"outlined",children:"\u0412\u044b\u0439\u0442\u0438"}):Object(p.jsx)(s.b,{to:h,children:Object(p.jsx)(d.a,{variant:"outlined",children:"Login"})})})})})},f=n(17),m=n(40),g=n.n(m),v=n(50),w=n(122),y=n(125),C=n(29),I=function(){var e=Object(a.useContext)(D).auth,t=function(){var t=Object(v.a)(g.a.mark((function t(){var n,a,c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new C.a.auth.GoogleAuthProvider,t.next=3,e.signInWithPopup(n);case 3:a=t.sent,c=a.user,console.log(c);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(p.jsx)(w.a,{children:Object(p.jsx)(l.a,{container:!0,style:{height:window.innerHeight-50},alignItems:"center",justify:"center",children:Object(p.jsx)(l.a,{style:{width:400,background:"lightgray"},container:!0,alignItems:"center",justify:"center",children:Object(p.jsx)(y.a,{p:5,children:Object(p.jsx)(d.a,{onClick:t,variant:"outlined",children:"\u0412\u043e\u0439\u0442\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Google"})})})})})},k=n(127),H=n(123),A=n(65),N=function(){return Object(p.jsx)(w.a,{children:Object(p.jsx)(l.a,{container:!0,style:{height:window.innerHeight-50},alignItems:"center",justify:"center",children:Object(p.jsx)(l.a,{container:!0,alignItems:"center",justify:"center",children:Object(p.jsx)("div",{className:"lds-hourglass"})})})})},S=[{path:h,Component:I}],T=[{path:b,Component:c.a.memo((function(){var e=Object(a.useContext)(D),t=e.auth,n=e.firestore,c=Object(O.a)(t),r=Object(o.a)(c,1)[0],i=Object(a.useState)(""),s=Object(o.a)(i,2),u=s[0],j=s[1],h=Object(A.a)(n.collection("messages").orderBy("createdAt")),b=Object(o.a)(h,2),x=b[0],f=b[1],m=Object(a.useState)("initial"),y=Object(o.a)(m,2),I=y[0],S=y[1],T=Object(a.useRef)(null),G=function(){var e=Object(v.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n.collection("messages").add({uid:r.uid,displayName:r.displayName,photoURL:r.photoURL,text:u,createdAt:C.a.firestore.FieldValue.serverTimestamp()}),j("");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e;(console.log(I),T.current&&"initial"===I&&(T.current.scrollIntoView(),S("auto")),"auto"===I)&&(null===(e=T.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}))}),[x]),f?Object(p.jsx)(N,{}):Object(p.jsx)(w.a,{children:Object(p.jsxs)(l.a,{container:!0,style:{height:window.innerHeight-50,paddingTop:20},justify:"center",children:[Object(p.jsxs)("div",{onScroll:function(e){var t=e.currentTarget;Math.abs(t.scrollHeight-t.scrollTop-t.clientHeight)>20?"manual"!==I&&S("manual"):"manual"===I&&S("auto")},style:{width:"80%",height:"70%",border:"1px solid black",overflowY:"auto"},children:[x.map((function(e){return Object(p.jsxs)("div",{style:{margin:10,border:r.uid===e.uid?"1px solid green":"1px solid red",marginLeft:r.uid===e.uid?"auto":"10px",width:"fit-content",padding:5},children:[Object(p.jsxs)(l.a,{container:!0,children:[Object(p.jsx)(k.a,{src:e.photoURL}),Object(p.jsx)("div",{children:e.displayName})]}),Object(p.jsx)("div",{children:e.text})]},e.createdAt)})),Object(p.jsx)("div",{ref:T})]}),Object(p.jsxs)(l.a,{container:!0,direction:"column",alignItems:"flex-end",style:{width:"80%"},children:[Object(p.jsx)(H.a,{variant:"outlined",fullWidth:!0,rowsMax:2,value:u,onChange:function(e){return j(e.currentTarget.value)}}),Object(p.jsx)(d.a,{onClick:G,variant:"outlined",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})]})})}))}],G=function(){var e=Object(a.useContext)(D).auth,t=Object(O.a)(e);return Object(o.a)(t,1)[0]?Object(p.jsxs)(f.d,{children:[T.map((function(e){var t=e.path,n=e.Component;return Object(p.jsx)(f.b,{path:t,component:n,exact:!0},t)})),Object(p.jsx)(f.a,{to:b})]}):Object(p.jsxs)(f.d,{children:[S.map((function(e){var t=e.path,n=e.Component;return Object(p.jsx)(f.b,{path:t,component:n,exact:!0},t)})),Object(p.jsx)(f.a,{to:h})]})};var L=function(){var e=Object(a.useContext)(D).auth,t=Object(O.a)(e),n=Object(o.a)(t,3),c=(n[0],n[1]);return n[2],c?Object(p.jsx)(N,{}):Object(p.jsxs)(s.a,{children:[Object(p.jsx)(x,{}),Object(p.jsx)(G,{})]})};n(89),n(90);C.a.initializeApp({apiKey:"AIzaSyDFuGG1kSqUgmNeIYOHxzwokpZoCWwaooc",authDomain:"chat-react-test-e535c.firebaseapp.com",projectId:"chat-react-test-e535c",storageBucket:"chat-react-test-e535c.appspot.com",messagingSenderId:"490175842437",appId:"1:490175842437:web:7b457a166c5ed76a2e41ec",measurementId:"G-DHHY2NCKT9"});var D=Object(a.createContext)(null),R=C.a.auth(),U=C.a.firestore();i.a.render(Object(p.jsx)(D.Provider,{value:{firebase:C.a,auth:R,firestore:U},children:Object(p.jsx)(L,{})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.c39b5771.chunk.js.map