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
   

// featch the painter page

  fetch('http://karolineshus.dk/wp-json/wp/v2/posts?categories=9&_embed')
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);
      appendPainters(json);
    });


    function appendPainters(painters) {
        let html = "";
        for (let i = 0; i < painters.length; i++) {
        let painter = painters[i];
        console.log(painter);
        document.querySelector('#painter-page').innerHTML += `
          <article  class="mutual-Artist-page">
            <h3>${painter.title.rendered}</h3>
<img src="${getFeaturedImageUrl(painter)}" alt="${painter.title.rendered}">
          </article>
        `;
      }
    }

document.querySelector("#painter-page").innerHTML += html;
  

  function getFeaturedImageUrl(painter) {
    let imageUrl = "";
    if (painter._embedded['wp:featuredmedia']) {
      imageUrl = painter._embedded['wp:featuredmedia'][0].source_url;
    }
    return imageUrl;
  }


// featch the sculptor page

  fetch('http://karolineshus.dk/wp-json/wp/v2/posts?categories=10&_embed')
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);
      appendPosts(json);
    });


    function appendPosts(posts) {
        let html = "";
        for (let i = 0; i < posts.length; i++) {
        let post = posts[i];
        console.log(post);
        document.querySelector('#sculptor-page').innerHTML += `
          <article class="mutual-Artist-page" >
            <h3>${post.title.rendered}</h3>
<img src="${getFeaturedImageUrl(post)}" alt="${post.title.rendered}">
          </article>
        `;
      }
    }

document.querySelector("#sculptor-page").innerHTML += html;
  

  function getFeaturedImageUrl(post) {
    let imageUrl = "";
    if (post._embedded['wp:featuredmedia']) {
      imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
    }
    return imageUrl;
  }


/* carasel */
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

