<?php
    include_once "models/model.php";

    class EnrolledSubjectModel extends Model{
        public function __construct(){
            parent::__construct();

            $this->table = "enrolled_subjects";
        }
    }