<?php
    include_once "models/model.php";

    class LectureModel extends Model{
        public function __construct(){
            parent::__construct();

            $this->table = "lectures";
        }
    }