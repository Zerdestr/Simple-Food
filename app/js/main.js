$(function () {
  $(document)
    .on('click', '.categories__btn', function (event) {
      event.preventDefault();
      if (!$(this).hasClass('categories__btn--active')) {
        let tabId = $(this).attr("rel");

        $(".categories__items").removeClass("categories__items--active");
        $('.categories__btn').removeClass("categories__btn--active");

        $(this).addClass("categories__btn--active");
        $("#" + tabId).addClass("categories__items--active");
      }
    })

    .on('click', '.menu__burger', function () {
      $('body').toggleClass('no-scroll');
      $('.mobile-header').toggleClass('mobile-menu--active');
    })

    .on('click', '.mobile-header__burger', function () {
      $('.menu__burger').trigger('click');
    })

    .on('click', '.product-catalog__btn', function () {
      $('body').toggleClass('no-scroll');
      $('.product-sorting').toggleClass('product-sorting--active');
    })

    .on('click', '.product-sorting__burger', function () {
      $('.product-catalog__btn').trigger('click');
    })

  $('.product-catalog__filter').styler();


  let reviewsSwiper = new Swiper('.reviews-swiper', {

    autoplay: {
      delay: 5000,
    },

    wrapperClass: 'reviews-swiper__wrapper',

    slideClass: 'reviews-swiper__slide',

    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swipers__pagination',
      type: 'bullets',
      bulletClass: 'swipers__pagination-bullet',
      bulletActiveClass: 'swipers__pagination-bullet--active',
      clickable: true
    },

    navigation: {
      nextEl: '.reviews-swiper__button--next',
      prevEl: '.reviews-swiper__button--prev',
    }
  });

  let restaurantsSlider = null;
  let mediaQuerySize = 992;

  function restaurantsSliderInit() {
    if (!restaurantsSlider) {
      restaurantsSlider = new Swiper('.swiper-for-mobile', {

        autoplay: {
          delay: 5000,
        },

        wrapperClass: 'swiper-for-mobile__wrapper',

        slideClass: 'swiper-for-mobile__slide',

        direction: 'horizontal',
        loop: true,

        pagination: {
          el: '.swipers__pagination',
          type: 'bullets',
          bulletClass: 'swipers__pagination-bullet',
          bulletActiveClass: 'swipers__pagination-bullet--active',
          clickable: true
        }
      });
    }
  }


  function restaurantsSliderDestroy() {
    if (restaurantsSlider) {
      restaurantsSlider.destroy();
      restaurantsSlider = null;
    }
  }

  $(window).on('load resize', function () {

    var windowWidth = $(this).innerWidth();


    if (windowWidth <= mediaQuerySize) {

      restaurantsSliderInit()
    } else {

      restaurantsSliderDestroy()
    }
  });

  var $range = $(".price-range__slider"),
    $inputFrom = $(".price-range__input--from"),
    $inputTo = $(".price-range__input--to"),
    instance,
    min = 0,
    max = 1200,
    from = 0,
    to = 0;

  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 100,
    to: 1000,
    onStart: updateInputs,
    onChange: updateInputs
  });
  
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });
  });

  $inputTo.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });
  });

});