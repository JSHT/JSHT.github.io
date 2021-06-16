$(document).ready(function () {
    $('.down').click(function (e) {
      e.preventDefault();
      $('.down_show').slideToggle(500);
    })

    $('.go_top').click(function (e) {
      e.preventDefault();
      $('html, body').animate({scrollTop: 0}, 800)
    });
  })

  var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 3000,
      },

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })

  lightbox.option({
    'resizeDuration': 1000,
    'wrapAround': true
  });