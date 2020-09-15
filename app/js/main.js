$(function() {



    $(".rate-star").rateYo({
        rating: 3.6,
        starWidth: "12px",
        readOnly: true
    });

    $(".weekly__title-sliderbtn").slick({
        arrows: false,
        dots: true
    });

    $(".weekly__products-slider-inner").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,

    });



});