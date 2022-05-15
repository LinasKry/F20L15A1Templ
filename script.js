var tabai = document.getElementsByClassName("tab");

for (var visiems of tabai) {
  visiems.style.display = "none";
}

function changes(event, id) {
  for (var visiems of tabai) {
    visiems.style.display = "none";
    visiems.classList.remove("animacija");
  }
  document.getElementById(id).style.display = "block";

  setTimeout(function () {
    document.getElementById(id).classList.add("animacija");
  }, 100);
}

//////
// var pics = document.getElementsByClassName("pic");
// var tabai = document.getElementsByClassName("tab");

// for (var visiems of pics) {
//   visiems.style.display = "none";
// }
// for (var visiems of tabai) {
//   visiems.style.display = "none";
// }

// function changes(event, id) {
//   for (var visiems of pics) {
//     visiems.style.display = "none";
//     visiems.classList.remove("animacija");
//   }
//   document.getElementById(id).style.display = "block";

//   function changes(event, id) {
//     for (var visiems of tabai) {
//       visiems.style.display = "none";
//       visiems.classList.remove("animacija");
//     }
//     document.getElementById(id).style.display = "block";
//   }

//   setTimeout(function () {
//     document.getElementById(id).classList.add("animacija");
//   }, 100);
// }
