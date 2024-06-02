<?php
    include_once "models/model.php";

    class LoginModel extends Model{
        public function __construct(){
            parent::__construct();

            $this->table = "login";
        }
    }