<script src="https://www.gstatic.com/firebasejs/4.3.1/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };
  firebase.initializeApp(config);
  var user = {};
</script>

<?php
require("vendor/autoload.php");
$credentials = new Nexmo\Client\Credentials\Basic('', '');
?>

<script>
//Define NewsArticles and NewsSources queries here through URL params
var newsurl = '';
var newsapikey = '';
</script>
