var cont1 = document.getElementById("cont1");
var cont2 = document.getElementById("cont2");
var objeto = document.getElementById("objeto");

objeto.addEventListener("ondragstart",drag);

cont1.addEventListener("ondrop", drop);
cont1.addEventListener("ondragover", allowDrop);

cont2.addEventListener("ondrop", drop);
cont2.addEventListener("ondragover", allowDrop);

function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}  