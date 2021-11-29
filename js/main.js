$(document).ready(function(){
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        appendArrows: $('.custom__arrow_1'),
        nextArrow: '<button id="next" type="button" class="next__button_1"><img src="img/arrow.png" alt="arrow"></button>',
        prevArrow: '<button id="prev" type="button" class="prev__button_1"><img src="img/arrow.png" alt="arrow"></button>',
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
    })



    $(".mini__slider").on("init reInit afterChange", function(event, slick) {
      $(".mini__slider_counter").html(
        slick.slickCurrentSlide() + 1 + "/" + slick.slideCount
      );
    });

    var $slider = $('.mini__slider');
    var $progressBar = $('.progress');
    
    $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
      var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
      
      $progressBar
        .css('background-size', calc + '% 100%')
        .attr('aria-valuenow', calc );
    });

    $('.mini__slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      appendArrows: $('.custom__arrow'),
      nextArrow: '<button id="next" type="button" class="next__button"><img src="img/right__button.png" alt="next"></button>',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  });
});

$(document).ready(function () {
    $('#cart__link').click(function () {
      $('.cart__popup').css('display', 'block');
    });
    $('#cart__popup_wrapper').click(function () {
      $('.cart__popup').css('display', 'none');
    });
    $('#close__button').click(function () {
      $('.cart__popup').css('display', 'none');
    });
    $('#cart__link').click(function () {
      $('.burger__menu').css('display', 'none');
    });
    $('#cart__popup_wrapper').click(function () {
      $('.burger__menu').css('display', 'block');
    });
    $('#close__button').click(function () {
      $('.burger__menu').css('display', 'block');
    });
  });
 
  $(document).ready(function () {
    $(".burger__menu, .burger_link").click(function (event) {
      $(".burger__menu, nav").toggleClass("active");
      $("body").toggleClass("lock");
    });
  });