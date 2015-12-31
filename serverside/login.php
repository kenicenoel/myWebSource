<?php
  include_once ('config.php');



      // set the username and password from form values
      $a = $_POST['accountnumber'];
      $p = $_POST['password'];


    // Check the username, password and select the information from the database
    $sql = "SELECT id FROM Users WHERE accountnumber = ? AND password = ?";
    $stmt = $connection->prepare($sql);
    $stmt->bind_param('ss', $a, $p);

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
