<script src="https://www.gstatic.com/firebasejs/4.3.1/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCgb98gvq7LsLeSmzNWOnu9Sg2SAWy41EY",
    authDomain: "newspush-5ae5e.firebaseapp.com",
    databaseURL: "https://newspush-5ae5e.firebaseio.com/",
    projectId: "newspush-5ae5e",
    storageBucket: "",
    messagingSenderId: "918366645049"
  };
  firebase.initializeApp(config);
</script>

<?php
require("vendor/autoload.php");
$credentials = new Nexmo\Client\Credentials\Basic('a5213d56', 'f92BZFJldC6EJ1t');
?>

<script>
//Define NewsArticles and NewsSources queries here through URL params
var news-url = 'https://newsapi.org/v1/articles?source=';
var news-apikey = '&apiKey=b348f8cb6e91416fa512d1d00cf5d98c';
</script>
