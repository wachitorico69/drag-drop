const target = document.getElementById("cont1");
const target2 = document.getElementById("cont2");

document.getElementById("cont1").addEventListener("drop", drop);
document.getElementById("cont2").addEventListener("drop", drop);

document.getElementById("cont1").addEventListener("dragover", allowDrop);
document.getElementById("cont2").addEventListener("dragover", allowDrop);

document.getElementById("objeto").addEventListener("dragstart", drag);

document.addEventListener("dragenter", function(event) {
    if (event.target.className == "droptarget") {
      document.getElementById("info").innerHTML = "LeBron entró a la zona";
    }
});

document.addEventListener("dragleave", function(event) {
    if (event.target.className == "droptarget") {
      document.getElementById("info").innerHTML = "LeBron dejó la zona";
    }
});

document.addEventListener("dragend", function(event) {
    document.getElementById("info").innerHTML = "LeBron dejo de moverse";
  });

function allowDrop(event) {
    event.preventDefault();
}
  
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
    document.getElementById("info").innerHTML = "LeBron se está moviendo";
}
  
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}  