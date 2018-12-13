"use strict";
document.addEventListener("DOMContentLoaded", function() {
  // Handler when the DOM is fully loaded
  console.log("Document ready!");

});

// featch the photographers page

  fetch('http://karolineshus.dk/wp-json/wp/v2/posts?slug=efteraarsudstilling-22-09-2018-21-10-2018')
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
          <article class="exhbition-post" >
            <h3>${post.title.rendered}</h3>
            <p>${post.content.rendered}</p>
          </article>
        `;
      }
    document.querySelector("#exhbition-post").innerHTML = html;    
    }


  function getFeaturedImageUrl(post) {
    let imageUrl = "";
    if (post._embedded['wp:featuredmedia']) {
      imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
    }
    return imageUrl;
  }
