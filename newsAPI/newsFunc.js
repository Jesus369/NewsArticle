let postsUL = document.getElementById('postsUL')
let pullNews = news.articles

function postNews(media) {
// for loop. index = 0, as long as index is eating news.length then index will take in all of its contents.
  for(let index = 0; index < pullNews.length; index++) {

    let newsPosts = `
    <div class="childPost">
      <a href="${pullNews[index].url}"> <p class="titlePost">${pullNews[index].title}</p> </a>
      <a href="${pullNews[index].url}"> <img src="${pullNews[index].urlToImage}"/> </a>
      <li class="datePost">${pullNews[index].publishedAt}</li>
      <p class="descriptionPost">${pullNews[index].description}</p>
      <li class="authorPost">${pullNews[index].author}</li>
    </div>`

    postsUL.innerHTML += newsPosts
  }
}

postNews()
