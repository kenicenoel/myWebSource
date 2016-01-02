/// <reference path="../typings/jquery/jquery.d.ts"/>
$(function()
{



                 $(".switch").click(function()
                 {
                   $(this).find('i').toggleClass('fa-toggle-off fa-toggle-on');
                   
                 });

                 $('.save').click(function()
                  {
                    var state = $('span.switch').find('i').attr('class');
                    var interval = $('select').val();
                    chrome.storage.sync.set({'notifications': state});
                    chrome.storage.sync.set({'syncInterval': interval});

                    window.location.replace('menu.html');

                  }
                  );




   });
