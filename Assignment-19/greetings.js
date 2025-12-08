$(document).ready(function () {
  function loadGreeting() {
    const h = new Date().getHours();
    if (h < 12) $('#greeting').text('Good Morning');
    else if (h < 18) $('#greeting').text('Good Afternoon');
    else $('#greeting').text('Good Evening');
    $('#time').text(new Date().toLocaleTimeString());
  }

  loadGreeting();

  $('#change').on('click', function () {
    $('#greeting').text('Keep going, you’re doing great!');
    $('#quote').fadeIn();
  });

  $('#toggle').on('click', function () {
    $('#box').toggle();
  });

  $('#reset').on('click', function () {
    $('#quote').hide();
    $('#box').show();
    loadGreeting();
  });

  $('#greeting').on('click', function () {
    alert($(this).text());
  });
});