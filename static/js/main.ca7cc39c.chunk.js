(this["webpackJsonpuser-management"]=this["webpackJsonpuser-management"]||[]).push([[0],[,,,,,,,,function(e,t,s){e.exports=s(16)},,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),r=s(5),i=s.n(r);s(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=s(7),c=s(1),o=s(2),u=s(4),d=s(3),h=(s(14),0);var m=function(){return setInterval((function(){h>99&&(h=0),h++}),200),a.a.createElement("div",null,a.a.createElement("div",{id:"countDisplay"}),a.a.createElement("img",{src:"loader.gif",id:"loader"}))},p=(s(15),function(e){Object(u.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(c.a)(this,s),t.call(this,e)}return Object(o.a)(s,[{key:"render",value:function(){var e=this;return a.a.createElement("tr",{key:this.props.user.id,id:this.props.user.id}," ",this.props.user.id,a.a.createElement("td",{onClick:function(){e.props.selectUser(e.props.user.id)}},this.props.user.name," "),a.a.createElement("td",null," ",a.a.createElement("img",{src:"delete.png",className:"btn-del",onClick:function(){window.confirm("Are you sure to delete this user?")&&e.props.deleteUser(e.props.user.id)}})),a.a.createElement("td",null))}}]),s}(a.a.Component)),f=function(e){Object(u.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(c.a)(this,s),t.call(this,e)}return Object(o.a)(s,[{key:"render",value:function(){return a.a.createElement("ul",null," Selected User Details :",a.a.createElement("li",null,"Name: ",this.props.selectedUser.name),a.a.createElement("li",null,"Email Id: ",this.props.selectedUser.email),a.a.createElement("li",null,"Website: ",this.props.selectedUser.website),a.a.createElement("li",null,"Contact: ",this.props.selectedUser.phone),a.a.createElement("li",null,"City: ",this.props.selectedUser.address.city),a.a.createElement("li",null,"Compny Name: ",this.props.selectedUser.company.name))}}]),s}(a.a.Component),y=function(e){Object(u.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(c.a)(this,s),(e=t.call(this)).userDetails=null,e.state={userList:null,isData:!1,displayDetails:!1},e}return Object(o.a)(s,[{key:"getUsers",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users",{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({userList:t,isData:!0})}))}},{key:"deleteUser",value:function(e){fetch("https://jsonplaceholder.typicode.com/users/"+e,{method:"DELETE"});this.newList=this.state.userList.filter((function(t){return t.id!==e})),this.setState({userList:this.newList})}},{key:"selectUser",value:function(e){this.selectedUser&&(document.getElementById(this.selectedUser.id).style.background="none"),this.selectedUser=this.state.userList.find((function(t){return t.id===e})),document.getElementById(e).style.background="#91a9ec",this.setState({displayDetails:!0})}},{key:"addUser",value:function(){var e=this;console.log("add user"+document.querySelector(".user-list"));var t=window.prompt("Please enter name"),s=this.state.userList.length+1;console.log(this.state.userList.length),fetch("https://jsonplaceholder.typicode.com/users",{method:"POST",body:JSON.stringify({id:s,name:t,username:"Harshada",email:"harsh@april.biz",address:{street:"Boisar tarapur",suite:"Apt. Nh",city:"Mumbai",zipcode:"401504-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"55865-881125-255",website:"hahhahye.org",company:{name:"Radheya-Foundation",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({userList:[].concat(Object(l.a)(e.state.userList),[t])}),console.log(e.state.userList)}))}},{key:"componentDidMount",value:function(){this.getUsers()}},{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement("div",{className:"user-list"},this.state.isData?this.state.userList.map((function(t){return a.a.createElement(p,{user:t,selectUser:e.selectUser.bind(e),deleteUser:e.deleteUser.bind(e)})})):a.a.createElement(m,null),a.a.createElement("button",{onClick:this.addUser.bind(this)}," Add User ")),a.a.createElement("div",{className:"user-details"},this.state.displayDetails?a.a.createElement(f,{selectedUser:this.selectedUser}):a.a.createElement("div",null,"Select any user to see details")))}}]),s}(a.a.Component);var v=function(){return a.a.createElement("div",{class:"user-container"},a.a.createElement(y,null))};i.a.render(a.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.ca7cc39c.chunk.js.map