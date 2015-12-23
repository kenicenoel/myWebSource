/// <reference path="../typings/jquery/jquery.d.ts"/>
$(function()
{



                 $("#continue").click(function()
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

                 


   });
