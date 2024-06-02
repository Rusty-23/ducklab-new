<?php
	include_once 'conn.php';
	include_once 'api/utils/database.php';
	

    class Model {
        private $db;
        protected $table;

        public function __construct(){
          	$conn = $GLOBALS['DB_CON'];
            $this->db = new Database($conn);
        }

        public function get_one($columns = "*", $condition = ""){
            $query = "SELECT $columns FROM $this->table";
            if ($condition) {
                $query = $query . " WHERE " . $condition;
            }
            return $this->db->get_one($query);
        }

        public function get($columns = "*", $condition = ""){
            $query = "SELECT $columns FROM $this->table";
            if ($condition) {
                $query = $query . " WHERE " . $condition;
            }
            return $this->db->get_all($query);
        }


        public function count($columns = "*", $condition = ""){
            $query = "SELECT $columns FROM $this->table";
            if ($condition) {
                $query = $query . " WHERE " . $condition;
            }
            return $this->db->get_count($query);
        }

        public function insert($columns, $values){
            $query = "INSERT INTO $table($columns) VALUES($values)";
            return $this->db->exec($query);
        }
    }