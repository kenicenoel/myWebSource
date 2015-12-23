<?php
// Connect to the local mySQL server
$host = "localhost";
$user = "admin";
$pass = "admin";
$database = "websource_package_data";

// Create connection
$connection = new mysqli($host, $user, $pass, $database);

// Check connection
if ($connection->connect_error)
{
    die("Whoops! Could not connect to the Package Hero database. Here's the error -> " . $connection->connect_error);
}




      // set the username and password from form values
      $u = $_POST['login'];
      $p = md5($_POST['password']);

      // $u = "Miami";
      // $p = md5("test");


    // Check the username, password and select the information from the database
    $sql = "SELECT userId FROM users WHERE Username = ? AND Password = ?";
    $stmt = $connection->prepare($sql);
    $stmt->bind_param('ss', $u, $p);

    //echo $sql;
    $stmt->execute();
    $stmt->bind_result($id);
    $stmt->store_result();
    if($stmt->num_rows == 1)  //To check if the row exists
    {
      if($stmt->fetch())
      {

          echo 'success';

      }
    }


      else
      {
        echo 'failure';
      }


?>
