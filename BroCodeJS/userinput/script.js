let username
document.getElementById("MySubmit").onclick = function(){
  username = document.getElementById("myText").value
  document.getElementById("h1").textContent = `Hello ${username}`
}