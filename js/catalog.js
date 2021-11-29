$(document).ready(function(){
    $('.options__accordeon_triger').click(function () {
      $(this).next('.options__accordeon_content').slideToggle(200);
    });
});

$(document).ready(function(){
    $(".size__area_item").click(function(){
      $(this).toggleClass("back");
    });
  });
