$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.gallery-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  centeredMode: true,
  prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
});

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});


$(document).ready(function () {

  // --- БУРГЕР ---
  $('.btn-burger').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
    $('.nav-menu').toggleClass('is-open');
    $('body').toggleClass('no-scroll'); // чтобы не скроллился фон (по желанию)
  });


  // --- ПЛАВНЫЙ СКРОЛЛ ---
  $('.go_to').on('click', function (e) {
    e.preventDefault();

    var target = $(this).attr('href');
    var offset = $('header').outerHeight(); // отступ сверху (например под фиксированный хедер)

    if ($(target).length) {
      $('html, body').animate({
        scrollTop: $(target).offset().top - offset
      });
    }

    // --- ЗАКРЫТИЕ МЕНЮ НА МОБИЛКЕ ---
    if ($(window).width() <= 1370) {
      $('.nav-menu').removeClass('is-open');
      $('.btn-burger').removeClass('is-active');
      $('body').removeClass('no-scroll');
    }
  });

});

$(window).on('scroll', function () {
  var scrollTop = $(this).scrollTop();

  if (scrollTop > 50) { // порог — можно изменить
    $('.header-logo').addClass('scrolled');
  } else {
    $('.header-logo').removeClass('scrolled');
  }
});