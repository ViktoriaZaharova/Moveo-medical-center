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

  var target = document.querySelector($(this).attr('href'));
  if (!target) return;

  // закрываем меню
  if ($(window).width() <= 1370) {
    $('.nav-menu').removeClass('is-open');
    $('.btn-burger').removeClass('is-active');
    $('body').removeClass('no-scroll');
  }

  setTimeout(function () {

    var headerHeight = document.querySelector('header').offsetHeight;

    var rect = target.getBoundingClientRect();
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    var scrollTo = rect.top + scrollTop - headerHeight - 10;

    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth'
    });

  }, 200);
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