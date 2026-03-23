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
    if (!$(target).length) return;

    // закрываем меню СНАЧАЛА
    if ($(window).width() <= 1370) {
      $('.nav-menu').removeClass('is-open');
      $('.btn-burger').removeClass('is-active');
      $('body').removeClass('no-scroll');
    }

    // даём время хедеру/меню обновиться
    setTimeout(function () {

      var $header = $('header');

      // высота хедера
      var headerHeight = $header.outerHeight();

      // если sticky уже "прилип" — учитываем это
      var headerTop = $header.offset().top;
      var isStickyActive = headerTop <= $(window).scrollTop();

      var offset = isStickyActive ? headerHeight : 0;

      var scrollTo = $(target).offset().top - offset - 10; // 10px запас

      $('html, body').animate({
        scrollTop: scrollTo
      });

    });
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