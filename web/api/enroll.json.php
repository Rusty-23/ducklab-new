<?php
    include_once "../conn.php";
    include "./utils/database.php";

    header('Content-type: application/json');


    if (isset($_POST['user_id']) && isset($_POST['subject_id'])){
        $user_id = $_POST['user_id'];
        $subject_id = $_POST['subject_id'];

        $db = new Database($conn);
        $query = "INSERT INTO enrolled_subjects(user_id,subject_id,progress) VALUES ($user_id,$subject_id,1)";
        $response = $db->exec($query);

        if ($response) {
            echo json_encode(array('message' => 'Success'));
        }else {
            http_response_code(400);
            echo json_encode(array('message' => 'Failed'));
        }
    
    } else {
        http_response_code(400);
        echo json_encode(array('message' => 'Invalid Request'));
    }