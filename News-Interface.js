// var header = document.querySelector('header');
// var section = document.querySelector('section');

//Define NewsAPI query here through URL params
var reqURL = 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=b348f8cb6e91416fa512d1d00cf5d98c';

// Call to getJSON method takes above URL as argument
// will not be needed when called from PHP
getJSON(reqURL);

function getJSON (requestURL) {
  var req = new XMLHttpRequest();
  req.open('GET', requestURL, true);
  req.responseType = 'json';
  req.send();

  req.onload = function () {
    var res = req.response;
    unpackArticles(res);
  }
}

function unpackArticles(jsonObj) {
  var results = jsonObj['articles']
  var ArticlesArray = [];
  for (var i = 0; i < results.length; i++) {
    var Article = {};
    Article["heading"] = results[i].title;
    Article["url"] = results[i].url;
    ArticlesArray.push(Article)
  }
  // console.log(ArticlesArray);
}

// function showArticles(jsonObj) {
//   var articles = jsonObj['articles'];
//
//   for (var i = 0; i < articles.length; i++) {
//     var myArticle = document.createElement('article');
//     var myH2 = document.createElement('h2');
//     var myPara1 = document.createElement('p');
//     var myPara2 = document.createElement('p');
//     var myPara3 = document.createElement('p');
//
//     myH2.textContent = articles[i].title;
//     myPara1.textContent = 'Written by: ' + articles[i].author;
//     myPara2.textContent = articles[i].description;
//     myPara3.textContent = 'Link to article: ' + articles[i].url;
//
//     myArticle.appendChild(myH2);
//     myArticle.appendChild(myPara1);
//     myArticle.appendChild(myPara2);
//     myArticle.appendChild(myPara3);
//
//     section.appendChild(myArticle);
//   }
// }
