<?php
    if ($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['prof'])) {
        $prof = $_GET['prof'];
        $sql = "SELECT * FROM subjects WHERE prof = '$prof'";
        $data = $db->get_all($sql);

        echo json_encode($data);
    }