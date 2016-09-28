$(window).scroll(function() {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {}
  else{
    if ($(this).scrollTop() > 10){
        $('.fixed_head').addClass("sticky");
      }
      else{
        $('.fixed_head').removeClass("sticky");
      }
  }

});



var sections = $('section')  , nav = $('.fixed_head')  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

    if (cur_pos >= top-10 && cur_pos <= bottom) {
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

//Get element for the counter
var counter = $('#counter');
//Run count function
count(counter, 0, 90, 3000);

//Count function - element for counter, starting count number, ending count number, time in milliseconds
function count(elem, startnum, endnum, time){
  //Create a variable to store the current counter number and add it to the counter
  var curnum = startnum;
  elem.text(curnum);
  //Work out the speed of the counter
  var speed = time / (endnum - startnum);
  //Create the counter animation
  var timer = window.setInterval(function(){
    //Test if counter has finished
    if(curnum < endnum){
      //Increase the counter by 1 and add it to the counter
      curnum++;
      elem.text(curnum);
    }else{
      //Stop the animation
      clearInterval(timer);
    }

  },speed);

}
