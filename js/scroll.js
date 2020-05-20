$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();
 
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top-($('.header-container').height()+ 100)
  }, 500, 'linear');
 
});
$('#s1').on('click', function (e) {
  e.preventDefault();
 
   $("html, body").animate({
            scrollTop: 0
        }, 500);
 
});
