(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),s=n(3),l=n(4),i=n(6),u=n(5),m=n(7),h=(n(13),n(14),function(e){var t=e.monster;return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(t.id,"?set=set2&size=180x180")}),r.a.createElement("h2",null,t.name),r.a.createElement("p",null,t.email))}),d=(n(15),function(e){var t=e.monsters;return r.a.createElement("div",{className:"card-list"},t.map(function(e){return r.a.createElement(h,{key:e.id,monster:e})}))}),p=(n(16),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),f=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={monsters:[],searchField:""},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({monsters:t})})}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,a=t.searchField,c=n.filter(function(e){return e.name.toLowerCase().includes(a.toLowerCase())});return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monsters Rolodex"),r.a.createElement(p,{placeholder:"Search monsters",handleChange:function(t){return e.setState({searchField:t.target.value})}}),r.a.createElement(d,{monsters:c}))}}]),t}(r.a.Component),v=document.getElementById("root");o.a.render(r.a.createElement(f,null),v)}],[[8,1,2]]]);
//# sourceMappingURL=main.f7815f09.chunk.js.map