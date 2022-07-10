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

    .on('click', '.info-tabs__btn', function (event) {
      event.preventDefault();
      if (!$(this).hasClass('info-tabs__btn--active')) {
        let tabId = $(this).attr("rel");

        $(".info-tabs__content").removeClass("info-tabs__content--active");
        $('.info-tabs__btn').removeClass("info-tabs__btn--active");

        $(this).addClass("info-tabs__btn--active");
        $("#" + tabId).addClass("info-tabs__content--active");
      }
    })

    .on('click', '.menu__burger', function () {
      $('body').addClass('no-scroll');
      $('.mobile-header').addClass('mobile-menu--active');
      $('header').addClass('mobile-acive')
      $('.menu').addClass('mobile-acive')
    })

    .on('click', '.mobile-header__burger', function () {
      $('.mobile-header').removeClass('mobile-menu--active');
      $('header').removeClass('mobile-acive')
      $('.menu').removeClass('mobile-acive')
      $('body').removeClass('no-scroll');
    })

    .on('click', '.product-catalog__btn', function () {
      $('body').addClass('no-scroll');
      $('.product-sorting').addClass('product-sorting--active');
      $('header').addClass('mobile-acive')
      $('.menu').addClass('mobile-acive')
    })

    .on('click', '.product-sorting__burger', function () {
      $('.product-sorting').removeClass('product-sorting--active');
      $('header').removeClass('mobile-acive')
      $('.menu').removeClass('mobile-acive')
      $('body').removeClass('no-scroll');
    })

    .on('click', '.product-swiper__slide', function () {
      $('body').addClass('no-scroll');
      $('.product-swiper-big').addClass('product-swiper-big--active');
      $('header').addClass('mobile-acive')
      $('.menu').addClass('mobile-acive')
    })

    .on('click', '.product-swiper-big__btn', function () {
      $('.product-swiper-big').removeClass('product-swiper-big--active');
      $('header').removeClass('mobile-acive')
      $('.menu').removeClass('mobile-acive')
      $('body').removeClass('no-scroll');

    })


  $(".raiting").rateYo({
    starSvg: '<svg width = "16" height = "16" viewBox = "0 0 16 16" fill = "none" xmlns = "http://www.w3.org/2000/svg" >' +
      '<path d="M0.022973 6.16432C0.0780978 5.9946 0.224753 5.87091 0.401315 5.84529L5.36139 5.12451L7.57966 0.629933C7.6586 0.469933 7.82157 0.368652 7.99997 0.368652C8.17841 0.368652 8.34135 0.469933 8.42032 0.629933L10.6387 5.12451L15.5987 5.84529C15.7752 5.87091 15.9219 5.9946 15.977 6.16429C16.0322 6.334 15.9862 6.52028 15.8584 6.64482L12.2694 10.1434L13.1165 15.0834C13.1467 15.2593 13.0744 15.437 12.9301 15.5419C12.8484 15.6012 12.7517 15.6314 12.6545 15.6314C12.5799 15.6314 12.505 15.6136 12.4365 15.5776L8 13.2451L3.56374 15.5775C3.40577 15.6606 3.21443 15.6467 3.07009 15.5419C2.92574 15.437 2.8534 15.2593 2.88356 15.0834L3.73096 10.1434L0.141567 6.64478C0.0138172 6.52028 -0.0322143 6.334 0.022973 6.16432Z"</path>' +
      '</svg >',
    starWidth: "16px",
    normalFill: "#c1c1c1",
    ratedFill: "#FFB800",
    spacing: "6px"

  });




  $(document).mouseup(function (hideMobileMenu) {
    let mobileMenu = $(".mobile-menu");
    let productSorting = $(".product-sorting");
    let productSwiperBig = $(".product-swiper-big");
    let body = $("body");
    let header = $(".header");
    let menu = $(".menu");

    if
      (mobileMenu.hasClass("mobile-menu--active")
      && !mobileMenu.is(hideMobileMenu.target)
      && mobileMenu.has(hideMobileMenu.target)
        .length === 0) {

      mobileMenu.removeClass('mobile-menu--active')
      body.removeClass('no-scroll');
      header.removeClass('mobile-acive');
      menu.removeClass('mobile-acive');
    }
    if
      (productSorting.hasClass("product-sorting--active")
      && !productSorting.is(hideMobileMenu.target)
      && productSorting.has(hideMobileMenu.target)
        .length === 0) {

      productSorting.removeClass('product-sorting--active')
      body.removeClass('no-scroll');
      header.removeClass('mobile-acive');
      menu.removeClass('mobile-acive');
    }
    if
      (productSwiperBig.hasClass("product-swiper-big--active")
      && !productSwiperBig.is(hideMobileMenu.target)
      && productSwiperBig.has(hideMobileMenu.target)
        .length === 0) {

      productSwiperBig.removeClass('product-swiper-big--active')
      body.removeClass('no-scroll');
      header.removeClass('mobile-acive');
      menu.removeClass('mobile-acive');
    }
  });


  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
      $(".header").addClass("header--fixed");
      $(".breadcrumbs").addClass("breadcrumbs--header-fixed");

    } else {
      $(".header").removeClass("header--fixed");
      $(".breadcrumbs").removeClass("breadcrumbs--header-fixed");
    }
  });

  $('.product-catalog__filter, .product__amount').styler();


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
      nextEl: '.swipers__buttons--next',
      prevEl: '.swipers__buttons--prev',
    }
  });


  let interestedSwiper = new Swiper('.interested-swiper', {

    autoplay: {
      delay: 5000,
    },

    wrapperClass: 'interested-swiper__wrapper',

    slideClass: 'interested-swiper__slide',

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
      nextEl: '.swipers__buttons--next',
      prevEl: '.swipers__buttons--prev',
    },

    breakpoints: {

      992: {
        slidesPerView: 5,
        spaceBetween: 30
      },

      768: {
        slidesPerView: 4,
        spaceBetween: 20
      },

      576: {
        slidesPerView: 3,
        spaceBetween: 10
      },

      321: {
        slidesPerView: 2,
        spaceBetween: 5
      }
    }
  });

  let productSwiper = new Swiper('.product-swiper', {

    autoplay: {
      delay: 5000,
    },

    wrapperClass: 'product-swiper__wrapper',

    slideClass: 'product-swiper__slide',

    direction: 'horizontal',
    loop: true,

    navigation: {
      nextEl: '.product-swiper__buttons--next',
      prevEl: '.product-swiper__buttons--prev',
    },

  });

  let productBigSwiper = new Swiper('.product-swiper-big', {

    autoplay: {
      delay: 5000,
    },

    wrapperClass: 'product-swiper-big__wrapper',

    slideClass: 'product-swiper-big__slide',

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
      nextEl: '.product-swiper__buttons--next',
      prevEl: '.product-swiper__buttons--prev',
    },
  });

  const swipeAllSliders = (index) => {
    productSwiper.slideTo(index);
    productBigSwiper.slideTo(index);
  }

  productSwiper.on('slideChange', () => swipeAllSliders(productSwiper.activeIndex));
  productBigSwiper.on('slideChange', () => swipeAllSliders(productBigSwiper.activeIndex));

  let restaurantsSlider = null;
  let numSlide = 0;
  let mediaQuerySize = 992;
  let mediaQuerySize2 = 768;

  $(window).on('load resize', function () {

    var windowWidth = $(this).innerWidth();


    if (windowWidth <= mediaQuerySize) {
      numSlide = 2

    }
    if (windowWidth <= mediaQuerySize2) {
      numSlide = 1
    }
  });



  function restaurantsSliderInit() {
    if (!restaurantsSlider) {
      restaurantsSlider = new Swiper('.swiper-for-mobile', {

        autoplay: {
          delay: 5000,
        },

        slidesPerView: numSlide,

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