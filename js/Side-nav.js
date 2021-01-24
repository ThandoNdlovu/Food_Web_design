

//Variables
var menubtn = document.getElementById('menu-btn')
var toggle = document.getElementById("toggle")
var menu = document.getElementById('menu')

toggle.style.right = "-250px";


menubtn.onclick  = function(){
  if (toggle.style.right == "-250px") {
    toggle.style.right = "0";
  }else {
    toggle.style.right = "-250px";

  }
}
