$(document).ready(function () {
  $('.manager').on('click', function () {
    $(this).siblings('.employee').toggleClass('highlight');
  });

  $('.employee').hover(
    function () {
      $(this).next('.contact').fadeIn(150);
    },
    function () {
      $(this).next('.contact').fadeOut(150);
    }
  );

  $('.department').on('click', function (e) {
    if ($(e.target).hasClass('department')) {
      $(this).children().addClass('highlight');
    }
  });

  $('#random').on('click', function () {
    const all = $('.employee');
    const random = all.eq(Math.floor(Math.random() * all.length));
    const siblings = random.siblings('.employee');
    all.removeClass('highlight');
    siblings.addClass('highlight');
  });

  $('#toggle-team').on('click', function () {
    $('.department').each(function () {
      $(this).find('.employee, .contact').slideToggle();
    });
  });
});