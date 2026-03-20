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

