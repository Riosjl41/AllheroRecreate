/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
var x = document.getElementById("myTopnav");

function openNav() {
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
