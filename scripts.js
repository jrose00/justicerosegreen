

// // Get the dropdown toggle button element
// var toggleButton = document.querySelector("#myTopnav [data-action=toggleMenu]");

// // Add an on-click event listener to the toggle button
// toggleButton.addEventListener("click", function() {
//   // Get the navigation menu element
//   var nav = document.getElementById("myTopnav");

//   // Toggle the "topnav" class on the navigation menu element
//   nav.classList.toggle("topnav");
// });

// // Get the dropdown toggle button element
// var toggleButton = document.querySelector("#myTopnav [data-action=toggleMenu]");

// // Add an on-click event listener to the toggle button
// toggleButton.addEventListener("click", function() {
//   // Get the navigation menu element
//   var nav = document.getElementById("myTopnav");

//   // Toggle the "topnav-show" class on the navigation menu element
//   nav.classList.toggle("responsive");
// });

function myFunction() {
    document.getElementById("myTopnav").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

