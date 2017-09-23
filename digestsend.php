<?php
include('config.php');
$client = new Nexmo\Client($credentials);

$message = $client->message()->send([
  'from' => 'Testmo',
  'to' => '447871778000',
  'text' => 'A text message sent using the Nexmo SMS API'
]);
 ?>
