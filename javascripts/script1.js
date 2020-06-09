document.addEventListener("DOMContentLoaded",
function(event){
  document.getElementById("div2").textContent = "Document DOMCcontentLoaded event happened";
});

window.onload = function(){
  document.getElementById("div1").textContent = "Window.onload event happened";
}
