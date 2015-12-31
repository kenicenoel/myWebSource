<?php


// Connect to the local mySQL server
$host = "kjnoel.5gbfree.com";
$user = "kjnoel_admin";
$pass = "knj271990";
$database = "kjnoel_mywebsource";

// Create connection
$connection = new mysqli($host, $user, $pass, $database);

// Check connection
if ($connection->connect_error)
{
    die("Whoops! Could not connect to the myWeb Source database. Here's the error -> " . $connection->connect_error);
}



?>
