$(document).ready(function()
{
    $('.save').click(function()
    {
      var accountnumber = $('#accountNumber').val();
      var password = $('#password').val();
      console.log(accountnumber+"/////////"+ password);

      // Use Ajax to submit form data
                $.ajax(
                  {
                    url: 'http://localhost/packagehero/login.php',
                    type: 'POST',
                    data: 'login='+accountnumber+'&password='+password,
                    success: function(response)
                    {
                      console.log(response);
                      if(response == 'success')
                      {
                        $('.errorMessage').text('You are now logged in');
                        $('.errorMessage').css('background-color', 'rgb(45, 167, 39)');
                        console.log('success');

                      }

                      else if(response == 'failure')
                      {
                        $('.errorMessage').text('Log in failed.');
                        $('.errorMessage').css('background-color', 'rgb(167, 39, 39)');
                        console.log('failure');
                      }
                    }
                });
    });

});
