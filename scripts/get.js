/// <reference path="../typings/jquery/jquery.d.ts"/>
$(function()
{
       /*
           using chrome.storage.sync.get versus chrome.storage.local.get
           will allow to saved webnumber to be synced across devices
           */
           var accountnumber;
           chrome.storage.sync.get('accountnumber', function(data)
                 {

                       if(data)
                       {
                           accountnumber = data.accountnumber;

                      }



                      $(".loggedInUser").html(accountnumber);
                      var packages = 0;
                      var badgetext = packages.toString();
                      chrome.browserAction.setBadgeText({text: badgetext});

                 });



          $('.log-out').click(function()
            {
                chrome.storage.sync.clear();
                var url = "start.html";
                window.location.replace(url);
            }
          );



   });
