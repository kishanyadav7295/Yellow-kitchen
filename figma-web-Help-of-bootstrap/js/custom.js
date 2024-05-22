const menu = document.querySelector("#menu");
const btn = document.querySelector("#btn");


btn.addEventListener(
    "click",function demo(){
      menu.classList.toggle("open-menu")
      btn.classList.toggle("fa-times")
    }
);


 
$('.testi-slider').slick({
   infinite: true,
   dots: true,
   autoplay: true,
   autoplaySpeed: 1000,
   slidesToShow: 4,
   slidesToScroll: 4,

   responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});











 