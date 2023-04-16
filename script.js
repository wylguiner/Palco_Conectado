$(window).on('resize', function() {
    if ($(window).width() < 576) {
      // If screen size is less than 576px (small devices), show one card
      $('.carousel-item .card').removeClass('d-none');
      $('.carousel-item .card:not(:first-child)').addClass('d-none');
    } else {
      // If screen size is greater than 576px (medium and large devices), show all cards
      $('.carousel-item .card').removeClass('d-none');
    }
  });