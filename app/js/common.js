$(window).scroll(function() {

if ($(this).scrollTop() > 10){
    $('.fixed_head').addClass("sticky");
  }
  else{
    $('.fixed_head').removeClass("sticky");
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
