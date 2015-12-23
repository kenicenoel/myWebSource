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

                           var url = "start.html";
                           window.location.replace(url);

                      }




                 });


                 /*

                   Functions to be run when the SAVE or CLEAR buttons are clicked

                 */

                 $("#save").click(function()
                 {
                   var num = $("#webnumber").val();
                   if(num == "" || num == " ")
                   {
                         alert("Please enter a valid web number e.g WEB12345");

                   }

                   else
                   {
                      var webnumber = $("#webnumber").val();
                      chrome.storage.sync.set({'number': webnumber});
                      var url = "start.html";
                      window.location.replace(url);

                   }

                 });

                 // These functions are run when the items on the startpage are clicked

                 $("#clear").click(function() // when the search button is clicked
                 {
                   $("#webnumber").val("");
                 });



   });
