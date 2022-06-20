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

    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
});