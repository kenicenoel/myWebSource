<?php

function getPackages()
{
      echo
      "
      <script>
        var accountnumber;
        chrome.storage.sync.get('accountnumber', function(data)
              {

                    if(data)
                    {
                        accountnumber = data.accountnumber;

                    }




                   var packages = 0;
                   var badgetext = packages.toString();
                   chrome.browserAction.setBadgeText({text: badgetext});

              });
      </script>


      ";
        // set the username and password from form values
        $a = $_POST['accountnumber'];
        $p = md5($_POST['password']);


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

}












?>
