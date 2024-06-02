<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];
    $login = $_REQUEST['login'];

    if ($login) {
        $sql = "SELECT id, name FROM instructor WHERE username = '$username' AND password = '$password'";
        $data = $db->get_all($sql);
        if ($db->get_count($sql) > 0) {
            $row = $db->get_one($sql);
            echo json_encode($row);
        } else {
            http_response_code(400);
            echo json_encode(array('message' => 'Invalid Request'));
        }
    } 
}
