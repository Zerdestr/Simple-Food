$(function () {
  $(document).on('click', '.categories__btn', function (event) {
    event.preventDefault();
    if (!$(this).hasClass('categories__btn--active')) {
      let tabId = $(this).attr("rel");

      $(".categories__items").removeClass("categories__items--active");
      $('.categories__btn').removeClass("categories__btn--active");

      $(this).addClass("categories__btn--active");
      $("#" + tabId).addClass("categories__items--active");
    }
  })

  const swiper = new Swiper('.swiper', {

    autoplay: {
      delay: 5000,
    },

    wrapperClass: 'swiper__wrapper',

    slideClass: 'swiper__slide',

    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper__pagination',
      type: 'bullets',
      bulletClass: 'swiper__pagination-bullet',
      bulletActiveClass: 'swiper__pagination-bullet--active',
      clickable: true
    },

    navigation: {
      nextEl: '.swiper__button--next',
      prevEl: '.swiper__button--prev',
    }
  });
});