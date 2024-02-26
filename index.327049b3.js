function e(e,n){// write your code here
var t="It was ".concat(n," ");return t+="on the element: ".concat(e.nodeName,", ")+"id: ".concat(e.id,"."),new Promise(function(c){e.addEventListener(n,function(){c(t)})})}var n=function(e){// write your code here
var n=document.createElement("DIV");n.className="message",n.innerHTML=e,document.body.append(n)},t=document.getElementById("login"),c=document.getElementById("password"),o=document.getElementById("submit");e(t,"click").then(n),e(c,"click").then(n),e(o,"click").then(n),e(t,"input").then(n),e(c,"input").then(n),e(t,"blur").then(n),e(c,"blur").then(n),e(o,"blur").then(n);//# sourceMappingURL=index.327049b3.js.map

//# sourceMappingURL=index.327049b3.js.map
