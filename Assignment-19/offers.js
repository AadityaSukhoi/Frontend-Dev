$(document).ready(function () {
  $('.banner').fadeIn();

  $('#hide').on('click', function () {
    $('.banner').hide();
  });

  $('#show').on('click', function () {
    $('.banner').show();
  });

  $('#slide').on('click', function () {
    $('.banner').slideToggle();
  });

  $('#fade').on('click', function () {
    $('.banner').fadeToggle();
  });

  let index = 0;
  setInterval(function () {
    const banners = $('.banner');
    banners.fadeOut();
    $(banners[index]).fadeIn();
    index = (index + 1) % banners.length;
  }, 5000);
});