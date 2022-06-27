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
      $('.mobile-menu').toggleClass('mobile-menu--active');
    })
    .on('click', '.mobile-menu__burger', function () { 
      $('.menu__burger').trigger('click');
     })


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

  let catalogSlider = null;
  let mediaQuerySize = 992;

  function catalogSliderInit() {
    if (!catalogSlider) {
      catalogSlider = new Swiper('.restaurants-swiper', {

        autoplay: {
          delay: 5000,
        },

        wrapperClass: 'restaurants-swiper__wrapper',

        slideClass: 'restaurants-swiper__slide',

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

  function catalogSliderDestroy() {
    if (catalogSlider) {
      catalogSlider.destroy();
      catalogSlider = null;
    }
  }

  $(window).on('load resize', function () {

    var windowWidth = $(this).innerWidth();


    if (windowWidth <= mediaQuerySize) {

      catalogSliderInit()
    } else {

      catalogSliderDestroy()
    }
  });

});