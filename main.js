$(document).ready( function(){


  //when the mouse hovers over block,
  //change background background color of block to RAINBOW


  $(document).on("mouseover", ".block", function(){
    $(this).css("background-color", "lightblue");

  }).on('mouseout', '.block', function(){
    $(this).css("background-color", "white");
  });

$(".block").on("click", function(){
  $(this).remove();
});

var counter = 0
var frequency = 2000;

setInterval(function(){
    if(counter == 0){
      $("body").append('<div class="row"><div class="block"></div></div>');
      counter++;
    } else if (counter > 0 && counter < 3) {
      $('.row').last().append('<div class="block"></div>');
      counter++;
    }else{
      $('.row').last().append('<div class="block"></div>');
      counter = 0;
    }
}, frequency);









});
