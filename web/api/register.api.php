<?php
include("../conn.php");
include_once "../config.php";

if(isset($_POST['submit'])){
    $username = $_POST['user'];
    $password = $_POST['pass'];

    $sql = "INSERT INTO login (username, password) VALUES ('$username', '$password')";
    $result = mysqli_query($conn, $sql);

    if($result){
        header("Location: " . BASE_URL . "login");
    } else {
        echo "Error: " . mysqli_error($conn);
    }
}
?>