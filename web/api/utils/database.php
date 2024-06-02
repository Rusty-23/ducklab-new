<?php

class Database
{
    private $conn;

    public function __construct($conn)
    {
        $this->conn = $conn;
    }

    public function get_one($query)
    {
        $result = mysqli_query($this->conn, $query);
        return mysqli_fetch_assoc($result);
    }


    public function get_all($query)
    {
        $result = mysqli_query($this->conn, $query);
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public function get_count($query) {
        $result = mysqli_query($this->conn, $query);
        return $result->num_rows;
    }

    public function exec($query) {
        return mysqli_query($this->conn, $query);
    }
}
