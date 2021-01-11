$(function(){

    "use strict";
   


    $(".navbar-nav li").click(function(){
        $(this).addClass("active").siblings("li").removeClass("active");
    })
     $(".progress .progress-bar").each(function(){
     $(this).animate({
     width: $(this).attr("data-progress") + "%"
    } , 2800 , function(){
       $(this).text($(this).attr("data-progress") + "%")
                });
            });
                   

         
  });

