<?php

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
    "exam" => [
        "title" => "DuckLabs | Exam",
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
