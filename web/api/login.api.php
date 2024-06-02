<?php
include_once "../config.php";
include_once "../conn.php";

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include "./utils/database.php";


if(isset($_POST['submit'])){
    $db = new Database($conn);

    $username = $_POST['user'];
    $password = $_POST['pass'];
    $sql = "select * from login where username ='$username' and password = '$password'";
    $count = $db->get_count($sql);
    
    if($count==1){
        $current_user = $db->get_one($sql);

        session_start();
        $_SESSION['current_user']= $current_user;
        // echo json_encode($_SESSION);
        header("Location: ../");
    } else {
        header("Location: ../login?invalid=true");
    }
} else {
    header("Location: ../login");
}