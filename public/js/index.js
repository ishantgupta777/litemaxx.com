//-------------types.js-------------------------------

var typed = new Typed('.type', {
    stringsElement: '#typed-strings',
    typeSpeed : 50,
    backSpeed : 50,
    loop : true,
    backDelay : 1000
});

//--------------nav colour change------------------
$(document).scroll(function() {
   if($(document).scrollTop() >  50){
       $('nav').css({
           'background':'#202123',
           'transition' : 'all 300ms ease-in-out'
        });
   }else{
    $('nav').css({
        'background':'transparent',
        'transition' : 'all 300ms ease-in'
     });
   }
})

//------------prices slider----------------------------
var swiper = new Swiper('.pricing-grid', {
   slidesPerView: 4,
   loop: true,
   paginationClickable: true,
   pagination: '.swiper-pagination',
   paginationType: 'fraction',
   speed: 1000,
   roundLengths: true,
   parallax: true,
   keyboardControl: true,
   observer : true,
   observeParents : true,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
   breakpoints: {
       0: {
           slidesPerView: 1,
       },
       580: {
           slidesPerView: 1,
       },
       768: {
           slidesPerView: 1,
       },
       900: {
           slidesPerView: 2,
       },
       1100: {
           slidesPerView: 2,
       },
       1600: {
           slidesPerView: 3,
       },
       1800: {
           slidesPerView: 4,
       }
   }
});


//----------------------FOOTER ANIMATION---------------------

AOS.init({
    easing : 'ease-in-out'
});




//--------------autofill contact form problem solved---------------------
$('form').on('change',()=>{
    if($('.name').val()==''){
        $('#name').removeClass('inputClass')
    }else{
        $('#name').addClass('inputClass')
    }
    if($('.email').val()==''){
        $('#email').removeClass('inputClass')
    }else{
        $('#email').addClass('inputClass')
    }
    if($('.phone').val()==''){
        $('#phone').removeClass('inputClass')
    }else{
        $('#phone').addClass('inputClass')
    }
    if($('.message').val()==''){
        $('#message').removeClass('inputClass')
    }else{
        $('#message').addClass('inputClass')
    }
})

//----------------------putting main heading in next line-------------------
if($(window).width()<700){
    $('<br>').insertBefore('#dynamic-text');
}