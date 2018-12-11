"use strict";
document.addEventListener("DOMContentLoaded", function() {
  // Handler when the DOM is fully loaded
  console.log("Document ready!");

});

// Initialize and add the map
function initMap() {
  // The location of Uluru
  let uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  let map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  let marker = new google.maps.Marker({position: uluru, map: map});
}

// drop down menue for the mobile virsion.
let burger = document.querySelector("#burger-menu");
let nav = document.querySelector("#mobile-nav");


burger.addEventListener("click", () => {
    nav.classList.add("visible");    
     console.log("Nav appered");
      });
   