function getUser(requestURL) {
  var req = new XMLHttpRequest();
  req.open('GET', requestURL, true);
  req.responseType = 'json';
  req.send();

  req.onload = function () {
    var results = req.response;
    var UserArray = [];
    for (var i = 0; i < results.length; i++) {
    var User = {};
    User["id"] = results[i].id;
    User["Forename"] = results[i].forename;
    User["Surname"] = results[i].surname;
    User["PhoneNumber"] = results[i].phone;
    User["Subscriptions"] = results[i].subscriptions;
    UserArray.push(User);
  }
}

function createUser(requestURL, data) {
  var req = new XMLHttpRequest();
  req.open('POST', requestURL, true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(data);
};
