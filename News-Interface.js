var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=b348f8cb6e91416fa512d1d00cf5d98c';

var req = new XMLHttpRequest();
req.open('GET', requestURL, true);
req.responseType = 'json';
req.send();

req.onload = function () {
  var res = req.response;
  showArticles(res);
}

function showArticles(jsonObj) {
  var articles = jsonObj['articles'];

  for (var i = 0; i < articles.length; i++) {
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');

    myH2.textContent = articles[i].title;
    myPara1.textContent = 'Written by: ' + articles[i].author;
    myPara2.textContent = articles[i].description;
    myPara3.textContent = 'Link to article: ' + articles[i].url;

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);

    section.appendChild(myArticle);
  }
}
