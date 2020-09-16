$(function() {



  $(".rate-star").rateYo({
    rating: 3.6,
    starWidth: "12px",
    readOnly: true
  });

  // $(".weekly__title-sliderbtn").slick({
  //     arrows: false,
  //     dots: true
  // });

  $(".weekly__products-slider-inner").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class = "slick-arrow slick-prev"> <span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button class = "slick-arrow slick-next"> <span class="lnr lnr-chevron-right"></span></button>'

  });



});