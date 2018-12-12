"use strict";
document.addEventListener("DOMContentLoaded", function() {
  // Handler when the DOM is fully loaded
  console.log("Document ready!");


/* artists pages individual */

let urlString = window.location.href;
    console.log(urlString);
let url = new URL(urlString);
let artistSlug = url.searchParams.get("artist");
console.log(artistSlug);

fetch(`http://karolineshus.dk/wp-json/wp/v2/posts?_embed&slug=${artistSlug}`)
.then(function(response){
    return response.json();
})
.then(function(json){
    console.log(json);
    appendPosts(json);
});

function appendPosts(posts) {
    for (let i = 0; i < posts.length; i++) {
      let post = posts[i];
      console.log(post);
 document.querySelector('#gridPosts').innerHTML += `
  <article class="gridItem">
 <h3>${post.title.rendered}</h3>            <p>${post.excerpt.rendered}</p>
<img src="${getFeaturedImageUrl(post)}" alt="${post.title.rendered}">
</article>`;
    }
  }
    
     function getFeaturedImageUrl(post) {
    let imageUrl = "";
    if (post._embedded['wp:featuredmedia']) {
      imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
    }
    return imageUrl;
  }
    
});