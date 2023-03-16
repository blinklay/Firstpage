(function(){
  document.addEventListener("DOMContentLoaded", (e) => {
    document.getElementById('open-contact-form').addEventListener('click', (e) => {
      document.getElementById('contact-form').classList.add('contact-form__show')
    });
    document.getElementById('close__btn').addEventListener('click', (e) => {
      document.getElementById('contact-form').classList.remove('contact-form__show')
    })

    document.getElementById('contact-form').addEventListener('submit', (e) => {
      e.preventDefault()
    })

  });
}());
$(function(){
  
  $(".articles__slider").slick({
    slidesToShow: 3,
    
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1182,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
  
  $(".menu__btn").on('click', function(){
    $(".menu__list").toggleClass('menu__list--show')
  });

});