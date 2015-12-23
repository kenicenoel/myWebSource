/// <reference path="../typings/jquery/jquery.d.ts"/>
$(function()
{
       /*
           using chrome.storage.sync.get versus chrome.storage.local.get
           will allow to saved webnumber to be synced across devices
           */
           var webnumber;
           chrome.storage.sync.get('number', function(storedWebNumbers)
                 {

                       if(storedWebNumbers)
                       {
                           webnumber = storedWebNumbers.number;



                      }


                      var url = "start.html";
                      $("#title").html("Hello there, "+webnumber);
                      chrome.browserAction.setBadgeText({'number': webnumber});

                 });

                 $("#cog").click(function() // when the search button is clicked
                 {
                   var url="options.html";
                   window.location.replace(url);
                 });

                 $("#send").click(function() // when the search button is clicked
                 {
                   $("#options").html("<header> <i class='fa fa-send-o'></i> Pre-alert sent!</header><br><button id='continue'>Continue</button>");

                 });



   });
