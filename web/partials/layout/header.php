<?php
    if ($path == "home") {
        include_once "./partials/headers/home_header.php";
    }
    elseif ($path == "login" || $path == "register") {
        include_once "./partials/headers/public_header.php";
    }
    else {
        include_once "./partials/headers/default_header.php";
    }