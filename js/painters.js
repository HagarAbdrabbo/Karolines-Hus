// featch the sculptor page

  fetch('http://karolineshus.dk/wp-json/wp/v2/posts?categories=9&_embed')
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
          <article class="mutual-Artist-page" >
            <h3>${post.title.rendered}</h3>
<img src="${getFeaturedImageUrl(post)}" alt="${post.title.rendered}">
          </article>
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
