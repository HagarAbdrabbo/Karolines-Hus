"use strict";
document.addEventListener("DOMContentLoaded", function() {
  // Handler when the DOM is fully loaded
  console.log("Document ready!");

});

// featch the painter page

  fetch('http://karolineshus.dk/wp-json/wp/v2/posts?categories=12&_embed')
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
        html += `
          <a href="artist.html?artist=${post.slug}">
          <article class="mutual-Artist-page" >
            <h3>${post.title.rendered}</h3>
<img src="${getFeaturedImageUrl(post)}" alt="${post.title.rendered}">
          </article></a>
        `;
      }
    document.querySelector("#painter-page").innerHTML = html;    
    }


  function getFeaturedImageUrl(post) {
    let imageUrl = "";
    if (post._embedded['wp:featuredmedia']) {
      imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
    }
    return imageUrl;
  }

