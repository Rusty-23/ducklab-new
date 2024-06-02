<?php
if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    $id = $_REQUEST['id'];

    $query = "DELETE FROM subjects  WHERE id = $id";
    $response = $db->exec($query);
    

    if ($response) {
        echo json_encode(array('message' => 'Success'));
    } else {
        http_response_code(400);
        echo json_encode(array('message' => 'Failed'));
    }
}
