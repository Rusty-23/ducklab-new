<?php
if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
    $id = $_REQUEST['id'];    
    $name = $_REQUEST['name'];
    $slug = $_REQUEST['slug'];
    $description = $_REQUEST['description'];
    $image_source = $_REQUEST['image_source'];
    $prof = $_REQUEST['prof'];
    $preview_image = $_REQUEST['preview_image'];
    $duration = $_REQUEST['duration'];
    $year_level = $_REQUEST['year_level'];

    $query = "UPDATE subjects SET name='$name', slug='$slug', description='$description', image_source='$image_source', prof='$prof', preview_image='$preview_image', duration='$duration', year_level='$year_level' WHERE id = $id";
    $response = $db->exec($query);
    

    if ($response) {
        echo json_encode(array('message' => 'Success'));
    } else {
        http_response_code(400);
        echo json_encode(array('message' => 'Failed'));
    }
}
