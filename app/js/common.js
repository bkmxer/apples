/*NAVIGATION BAR HIDE START */
$(window).scroll(function() {
  if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {}
  else{
    if ($(this).scrollTop() > 10){
        $('.fixed_head').addClass("sticky");
      }
      else{
        $('.fixed_head').removeClass("sticky");
      }
  }

});

$(document).scroll(function(){
  if ($(window).width() < 750) {
    $('#fixed_head').addClass('hidden');
  }
  else{
    if ($(this).scrollTop() > 10){
        $('.fixed_head').addClass("sticky");
      }
      else{
        $('.fixed_head').removeClass("sticky");
      }
  }
})

var sections = $('section')  , nav = $('.fixed_head')  , nav_height = nav.outerHeight();
var pos_true; // position OK for starting counter
$(document).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  sections.each(function() {
  var top = $(this).offset().top - nav_height,
  bottom = top + $(this).outerHeight();
  if (cur_pos >= top-10 && cur_pos <= bottom)
  {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
			nav.find('a[href="#home"]').removeClass('active');
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
    });
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');

  $('html, body').animate({ scrollTop: $(id).offset().top-nav_height }, 700);

  return false;
});

$('.order_box').hover(function(){
    $('.order_box .button').removeClass("main_button");
    $(this).find('a').addClass("main_button");
})
/*NAVIGATION BAR HIDE END */

/*normilized the nav panel width start*/
$(document).ready(function(){
  var normalizedWidth = $('body').css("width");

  $('#fixed_head').width(normalizedWidth+10);
})
/*normilized the nav panel width end*/

/*COUNTER PART START */
//Get element for the counter
var counter = $('#years_counter');
var vitals = $('#vitals_counter');
var food = $('#food_counter');
var percent = $('#percent_counter');
pos_true = 0;
//Run count function
$(document).scroll(function(){

  var cur_pos = $(this).scrollTop();

  if (cur_pos >= $('.result').offset().top-450 && pos_true == 0)
  {
         pos_true = 1;
         count(counter, 0, 90, 3000);
         count(vitals, 0, 125, 3000);
         count(food, 0, 10, 3000);
         count(percent, 0, 50, 3000);
    }
    else if(cur_pos < $('.result').offset().top-2000) {pos_true = 0;}

    if (cur_pos >= $('#Statistics').offset().top-450)
    {$('#Statistics .front-block').addClass("zoomIn");
  $('#Statistics .front-block').removeClass("hidden")}

})
/*count(counter, 0, 90, 3000);
count(vitals, 0, 125, 3000);
count(food, 0, 10, 3000);
count(percent, 0, 50, 3000);*/

//Count function declaration- element for counter, starting count number, ending count number, time in milliseconds
function count(elem, startnum, endnum, time){
  //Create a variable to store the current counter number and add it to the counter
  var curnum = startnum;
  elem.text(curnum);
  var speed = time / (endnum - startnum);  //Work out the speed of the counter
  var timer = window.setInterval(function(){   //Create the counter animation
    if(curnum < endnum){ curnum++; elem.text(curnum);}    //Test if counter has finished
    else{clearInterval(timer);} //Stop the animation
  },speed);
}
/*COUNTER PART END */



/*HIDE THE COCKTAIL PIC START */
$(document).ready(function() {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $('.wrap_to_hide_on_mobile').addClass('hidden');
    $('.wrap_when_hidden_on_mobile').parent().removeClass('col-sm-6');

  }
})
/*HIDE THE COCKTAIL PIC END */
