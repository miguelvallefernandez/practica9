<?php

$x = $_POST['Json'];

$user=$_POST['User'];

$fd=fopen($user.".json","w");

fwrite($fd,$x);

fclose($fd);


?>