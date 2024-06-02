<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_REQUEST['name'];
    $slug = $_REQUEST['slug'];
    $description = $_REQUEST['description'];
    $image_source = $_REQUEST['image_source'];
    $prof = $_REQUEST['prof'];
    $preview_image = $_REQUEST['preview_image'];
    $duration = $_REQUEST['duration'];
    $year_level = $_REQUEST['year_level'];

    $query = "INSERT INTO subjects (name, slug, description, image_source, prof, preview_image, duration, year_level) VALUES ('$name', '$slug', '$description', '$image_source', '$prof', '$preview_image', '$duration', '$year_level')";
    $response = $db->exec($query);
    

    if ($response) {
        echo json_encode(array('message' => 'Success'));
    } else {
        http_response_code(400);
        echo json_encode(array('message' => 'Failed'));
    }
}
