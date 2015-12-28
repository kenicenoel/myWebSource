$(document).ready(function()
{

  /*
      using chrome.storage.sync.get versus chrome.storage.local.get
      will allow to saved webnumber to be synced across devices
      */


      // Check if the account info is stored and if it is, then redirect to the menu page
      chrome.storage.sync.get(null, function(data)
            {
                  console.log(data);
                  if(data.accountnumber && data.password)
                  {
                      console.log(data.accountnumber+" and "+data.password);
                      var url = "menu.html";
                      window.location.replace(url);

                 }

            });



    $('.save').click(function()
    {
      var accountnumber = $('#accountNumber').val();
      var password = $('#password').val();


      // Use Ajax to submit form data
                $.ajax(
                  {
                    url: 'http://localhost/packagehero/login.php',
                    type: 'POST',
                    data: 'login='+accountnumber+'&password='+password,
                    success: function(response)
                    {

                      if(response == 'success')
                      {
                        $('.errorMessage').text('Login successful.');
                        $('.errorMessage').css('background-color', '#8BC34A');
                        console.log('success');

                        // Save the entered account number and password to the system
                        chrome.storage.sync.set({'accountnumber': accountnumber});
                        chrome.storage.sync.set({'password': password});
                        var url = "menu.html";
                        window.location.replace(url);

                      }

                      else if(response == 'failure')
                      {
                        $('.errorMessage').text('Check your account info and try again.');
                        $('.errorMessage').css('background-color', '#F44336');
                        console.log('failure');
                      }
                    }
                });
    });

    // when the search button is clicked
    $(".reset").click(function()
    {
      $("#accountNumber").val("");
      $("#password").val("");
    });










});
