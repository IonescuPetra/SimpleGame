

var re=document.querySelector("#b")
var cell=document.querySelectorAll("td")
// restart
function restart(){
  for (var i = 0; i < cell.length; i++) {
    cell[i].textContent="";
  }
}
re.addEventListener("click",restart)
// schimba parametru
function schimba(){
  if (this.textContent==="") {
    this.textContent="x";}
    else if (this.textContent==="x") {
      this.textContent="0"}
      else {
        this.textContent=""
      }
}
for (var i = 0; i < cell.length; i++) {
  cell[i].addEventListener("click",schimba)
}
