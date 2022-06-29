$(function(){

  "use strict";

  $('.title_box').on('click', function(){
    $(this).toggleClass('open');
    $(this).next('.list_link').toggleClass('open');
  });

})
