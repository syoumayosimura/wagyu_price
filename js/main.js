$(function() {
  $('#page-top a').on('click', function(event) {
    event.preventDefault();
    if($(this).hasClass('animate') || $(window).scrollTop() == 0) return;
    $(this).addClass('animate');
    $('html').animate({
      scrollTop: 0
    }, 1000, 'swing', function() {
      $('#page-top a').removeClass('animate');
    });
  });
});