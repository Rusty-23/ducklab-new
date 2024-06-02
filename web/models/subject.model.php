<?php
    include_once "models/model.php";

    class SubjectModel extends Model{
        public function __construct(){
            parent::__construct();

            $this->table = "subjects";
        }
    }