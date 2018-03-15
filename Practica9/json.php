<?php

$x = $_POST['Json'];

$fd=fopen("backup.json","w");

fwrite($fd,$x);

fclose($fd);


?>