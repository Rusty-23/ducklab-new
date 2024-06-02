<?php
include_once "./config.php";
session_start();

$templateLayout = "default";
$title = "DuckLabs";
$path = "404";

$routes = [
    # PUBLIC
    "login" => [
        "title" => "DuckLabs",
        "scope" => "Public",
    ],
    "register" => [
        "title" => "DuckLabs | Register",
        "scope" => "Public",
    ],

    # PRIVATE
    "home" => [
        "title" => "DuckLabs",
        "scope" => "Private",
    ],
    "course" => [
        "title" => "DuckLabs | Course",
        "scope" => "Private",
    ],
    "certificate" => [
        "title" => "DuckLabs | Certificate",
        "scope" => "Private",
        "template" => "shell"
    ],

    # SYSTEM PAGE
    "404" => [
        "title" => "DuckLabs | Not Found",
        "scope" => "Public",
    ],
];
if (isset($_GET['slug'])) {
    $slug_param = $_GET['slug'];
    
    foreach ($routes as $route => $options) {
        if ($route == $slug_param) {
            if ($options['scope'] == "Private") {
                if (isset($_SESSION['current_user'])) {
                    $path = $route;

                    if(isset($options['template'])){
                        $templateLayout = $options['template'];
                    }
                } else {
                    $path = "login";
                }
            } else {
                $path = $route;
            }
        }
    }

    if (str_starts_with($_GET['slug'], "course/")) {
        if (isset($_SESSION['current_user'])) {
            $path = "course";
            $course_slug = str_replace("course/", "", $_GET['slug']);
        } else {
            $path = "login";
        }
    }

    $title = $routes[$path]['title'];

} else {
    if (isset($_SESSION['current_user'])) {
        $path = "home";
    } else {
        $path = "login";
    }
}

$view = "views/" . $path . ".php";
include_once "template/$templateLayout.php";
