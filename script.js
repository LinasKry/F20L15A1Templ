var tabai = document.getElementsByClassName("tab");
var buttons = document.getElementsByTagName("button");

for (var visiems of tabai) {
  visiems.style.display = "none";
}

function changes(event, id) {
  for (var visiems of tabai) {
    visiems.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}
