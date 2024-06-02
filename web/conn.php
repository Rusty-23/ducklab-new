<?php
    $servername = getenv("DB_HOST");
    $username = getenv("DB_USERNAME");
    $password = getenv("DB_PASSWORD");
    $db_name = getenv("DB_DATABASE");
    
    $conn = new mysqli($servername,$username,$password,$db_name);

    if($conn->connect_error){
        die("Connection failed".$conn->connect_error);
    }

    $GLOBALS['DB_CON'] = $conn;
?>