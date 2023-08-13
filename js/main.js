$(document).ready(function () {
  $('.slider').slick({
    centerMode: true,
    centerPadding: '25.5vw',
    slidesToShow: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
    
    
  });

  $('[data-fancybox]').fancybox({
    youtube : {
        controls : 0,
        showinfo : 0
    }
    
});

$('.burger').on('click', function () {
  $('.menu').toggleClass('menu__active');
  $('body').toggleClass('lock');
});

$('.menu__list-link').on('click', function () {
  $('.menu').removeClass('menu__active');
});

$('.menu__list-link').on('click', function () {
  $('.burger').removeClass('burger__active');
  $('body').removeClass('lock');
});

(function () {

  const burger = document.querySelector('.burger');
  burger.addEventListener('click', () => {
      burger.classList.toggle('burger__active')
  });

}());

  
});

