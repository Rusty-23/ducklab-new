<?php
    if ($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['username'])) {
        $username = $_GET['username'];
        $sql = "SELECT * FROM login WHERE username = '$username'";
        $data = $db->get_all($sql);

        echo json_encode($data);
    }