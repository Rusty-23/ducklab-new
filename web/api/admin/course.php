<?php
    include_once "../../conn.php";
    include "../utils/database.php";
    
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    $db = new Database($conn);

    include_once "./course/get.php";

    $jsonData = file_get_contents('php://input');
    $data = json_decode($jsonData, true);
    $_REQUEST = $data;

    include_once "./course/post.php";
    include_once "./course/put.php";
    include_once "./course/delete.php";