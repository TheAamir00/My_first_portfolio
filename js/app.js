$(document).ready(function(){
    $('.slider').slick({
      arrows:false,
      dots:true,
      appendDots:'.slider-dots',
      dotClass:'dots'
    });


    

  });
$(document.ready(function(){

    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');

    hamberger.addEventListener('click',function(){
      mobileNav.classList.add('open');
    });

    times.addEventListener('click',function(){
      times.classList.remove('open');
    });

}));
