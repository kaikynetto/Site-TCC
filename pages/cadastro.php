<?php
    $host = 'localhost';
    $password = "";
    $username = "root";
    $database = "artemis";

    $mysqli = new mysqli($host, $username, $password, $database) or die(mysqli_error());

    if($mysqli->connect_errno){

    }

    $data = json_decode(file_get_contents('php://input'), true);

    $name = $mysqli->real_escape_string($data['name']);

    echo $name;
?>