$(document).ready(function () {
  $('.product').on('click', function () {
    const stock = $(this).attr('data-stock');
    if (stock === 'out') alert('This product is out of stock');
    $(this).toggleClass('highlight');
  });

  $('.product').hover(
    function () {
      $(this).find('.extra').fadeIn(150);
    },
    function () {
      $(this).find('.extra').fadeOut(150);
    }
  );

  $('.fav').on('click', function (e) {
    e.stopPropagation();
    $(this).toggleClass('selected');
  });
});