(this.webpackJsonpflybooking=this.webpackJsonpflybooking||[]).push([[0],{31:function(e,t,a){e.exports=a(65)},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),s=a.n(r),i=(a(36),a(1)),c=(a(37),a(12)),o=a(7),u=a(8),m=a(10),h=a(9),d=(a(38),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("header",{className:"navbar"},l.a.createElement("div",{className:"logo"},"FlightBooking"),l.a.createElement("div",{className:"navbar_item"},l.a.createElement("a",{href:"/"},"Home")),l.a.createElement("div",{className:"navbar_item"},l.a.createElement("a",{href:"/Signin"},"Sign In")),l.a.createElement("div",{className:"navbar_item"},l.a.createElement("a",{href:"/Signup"},"Sign Up")))}}]),a}(l.a.Component)),g=(a(39),a(40)),p=a(15),f=[];g.map((function(e){var t=[e.city,e.name,e.iata].join(" ");return f.push(t)}));var v=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onTextChanged=function(e){var t=e.target.value,a=[];if(t.length>0){var l=new RegExp("^".concat(t),"i");a=n.items.sort().filter((function(e){return l.test(e)}))}n.setState((function(){return{suggestions:a,departure:t}}))},n.handleChange=function(e){n.setState(Object(c.a)({},e.target.name,e.target.value))},n.onTextChanged2=function(e){var t=e.target.value,a=[];if(t.length>0){var l=new RegExp("^".concat(t),"i");a=n.items.sort().filter((function(e){return l.test(e)}))}n.setState((function(){return{suggestions2:a,arrival:t}}))},n.submit=function(){var e=n.state.departure.slice(n.state.departure.length-3),t=n.state.arrival.slice(n.state.arrival.length-3);console.log(n.state.depDate),p({method:"GET",url:"https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/".concat(e,"/").concat(t,"/").concat(n.state.depDate),headers:{"content-type":"application/octet-stream","x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com","x-rapidapi-key":"c8d544a811mshc700b88f27c3a80p18b95bjsnd6e8e3db1374",useQueryString:!0},params:{inboundpartialdate:n.state.arrDate}}).then((function(e){n.state.dataTicket.push(e.data),console.log(n.state.dataTicket)})).catch((function(e){console.log(e)}))},n.items=f,n.state={suggestions:[],suggestions2:[],departure:"",arrival:"",depDate:"",arrDate:"",dataTicket:[]},n}return Object(u.a)(a,[{key:"suggestionSelected",value:function(e){this.setState((function(){return{departure:e,suggestions:[]}}));var t=e.slice(e.length-3);this.setState({depCode:t}),console.log(this.state)}},{key:"renderSuggestions",value:function(){var e=this,t=this.state.suggestions;return 0===t.length?null:l.a.createElement("ul",null,t.slice(0,5).map((function(t,a){return l.a.createElement("li",{key:a,onClick:function(){return e.suggestionSelected(t)}},t)})))}},{key:"suggestionSelected2",value:function(e){this.setState((function(){return{arrival:e,suggestions2:[]}}))}},{key:"renderSuggestions2",value:function(){var e=this,t=this.state.suggestions2;return 0===t.length?null:l.a.createElement("ul",{className:"list"},t.slice(0,5).map((function(t,a){return l.a.createElement("li",{className:"item-list",key:a,onClick:function(){return e.suggestionSelected2(t)}},t)})))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement("div",{className:"main"},l.a.createElement("label",null,"From"),l.a.createElement("input",{className:"from",value:this.state.departure,onChange:this.onTextChanged,type:"text",name:"departure"}),this.renderSuggestions(),l.a.createElement("label",null,"Depart"),l.a.createElement("input",{className:"depart",type:"date",value:this.state.depDate,onChange:this.handleChange,name:"depDate"}),l.a.createElement("label",null,"To"),l.a.createElement("input",{className:"to",value:this.state.arrival,onChange:this.onTextChanged2,type:"text",name:"arrival"}),this.renderSuggestions2(),l.a.createElement("label",null,"Return"),l.a.createElement("input",{className:"return",type:"date",value:this.state.arrDate,onChange:this.handleChange,name:"arrDate"}),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){return e.submit()}},"Check")))}}]),a}(l.a.Component),b=(a(58),a(15)),E=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={email:"",password:""},n}return Object(u.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(c.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),b.get("http://127.0.0.1:3800/signin/".concat(this.state.email)).then((function(e){console.log("password ",e.data),e.data==t.state.password?(console.log("welcome"),alert("you have been sucessfully signed up!")):(console.log("wrong password"),alert("wrong password"))})).catch((function(e){console.log("err signing in!"+e)}))}},{key:"render",value:function(){return l.a.createElement("form",{className:"login_form"},l.a.createElement(d,null),l.a.createElement("div",{className:"login"},l.a.createElement("h1",{className:"header"},"Login"),l.a.createElement("label",{className:"email_lab"},"Email"),l.a.createElement("input",{className:"email_input",type:"email",name:"email",value:this.state.email,placeholder:"Please Enter your email",onChange:this.handleChange.bind(this)}),l.a.createElement("br",null),l.a.createElement("label",{className:"Password_lab"},"Password"),l.a.createElement("input",{className:"password_input",type:"password",name:"password",value:this.state.password,placeholder:"Please Enter your Password",onChange:this.handleChange.bind(this)}),l.a.createElement("br",null),l.a.createElement("button",{className:"button_signin",onClick:this.handleSubmit.bind(this)},"Sign In")))}}]),a}(n.Component),y=(a(59),a(15)),w=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(c.a)({},e.target.id,e.target.value)),console.log(n.state)},n.handleSubmit=function(e){e.preventDefault(),y.post("http://localhost:3800/api/users",{name:n.state.name,email:n.state.email,password:n.state.password}).then((function(e){console.log("result   ",e)})).catch((function(e){console.log("ERROR FROM AXIOS ",e)}))},n.state={name:"",password:"",email:"",isExist:!0},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t={name:e.name,password:e.password,email:e.email};return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement("form",{id:"signup"},l.a.createElement("h1",{className:"header"}," sign up "),l.a.createElement("label",{id:"label"},"User Name"),l.a.createElement("input",{className:"user_input",type:"text",placeholder:"Enter You UserName ",defaultValue:t.name,id:"name",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{id:"label"},"Email"),l.a.createElement("input",{className:"email_input",type:"email",placeholder:"Enter Your email ",defaultValue:t.email,id:"email",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{id:"label"}," Password"),l.a.createElement("input",{className:"password_input",type:"password",placeholder:"Enter Your Password ",defaultValue:t.password,id:"password",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("button",{className:"sigup_button",onClick:this.handleSubmit.bind(this)},"signUp")))}}]),a}(l.a.Component);var C=function(){return l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:v}),l.a.createElement(i.a,{path:"/Signin",component:E}),l.a.createElement(i.a,{path:"/Signup",component:w}))},k=a(17);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(k.a,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.4542c79d.chunk.js.map