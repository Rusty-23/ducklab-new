<?php
    include_once "../conn.php";
    include "./utils/database.php";

    header('Content-type: application/json');


    if (isset($_POST['id'])){
        $id = $_POST['id'];

        $db = new Database($conn);
        $currentDate = date("F d, Y");
        $query = "UPDATE enrolled_subjects SET completion_date = '$currentDate' WHERE id = $id";
        $response = $db->exec($query);

        if ($response) {
            $query = "SELECT 
                    enrolled_subjects.id,
                    enrolled_subjects.user_id, 
                    enrolled_subjects.subject_id, 
                    subjects.name AS 'title',
                    subjects.description,
                    subjects.image_source,
                    subjects.prof,
                    enrolled_subjects.progress,
                    enrolled_subjects.completion_date
                  FROM `enrolled_subjects`
                  LEFT JOIN subjects ON subjects.id = enrolled_subjects.subject_id
                  LEFT JOIN login ON login.id = enrolled_subjects.user_id
                  WHERE enrolled_subjects.id = $id";
            $enrolled_subject = $db->get_one($query);
            $subject_id = $enrolled_subject['subject_id'];
            $lectures = $db->get_all("SELECT *  FROM lectures WHERE subject_id = $subject_id");
    
            $data = [
                "subject" => $enrolled_subject,
                "lectures"=>$lectures,
            ];
    
            echo json_encode($data);
        }else {
            http_response_code(400);
            echo json_encode(array('message' => 'Failed'));
        }
    
    } else {
        http_response_code(400);
        echo json_encode(array('message' => 'Invalid Request'));
    }