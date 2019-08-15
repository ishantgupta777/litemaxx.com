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

//------------------contact form submission backend-------------------
$(document).ready(()=>{
    document.querySelector('#contact-form').addEventListener('submit',(e)=>{
      e.preventDefault()
  
      $.ajax({
          type: 'POST',
          url: $("#contact-form").attr("action"),
          data: $("#contact-form").serialize(), 
        });
        document.querySelector('#contact-form').reset()
        var footerHeight =  document.querySelector('.footer').offsetHeight;
        $('.footer').html(`<h1 class="thankyou centerFlex" data-aos="fade-left" style="color:white;text-align:center;width:75%;height:${footerHeight}px; transition: 200ms ease-in-out; ">Thank you for your message! We will contact you as soon as possible</h1>`)
        setTimeout(()=>{
          $('.footer').html(`  <div class="connect">
          <h1>connect with us</h1>
          <img src="./img/arrow-55-64.png" alt="">
          <div class="hrtag hrtag4"></div>
          <div class="social-div">
                  <div class="social">
                          <a> <img src="./img/insta.png" alt=""> </a>
                          <a> <img src="./img/mail-64.png" alt=""> </a>
                          <a> <img src="./img/PNGIX.com_logo-whatsapp-png_494364.png" alt=""> </a>
                      </div>
          </div>
      </div>
      <div class="contact">
          <form id="contact-form" action="/contact">
              <div>
                      <input type="text" class="name" name="name" placeholder="">
                      <label for="name" id="name" class="label">Your Name</label>
              </div>
              <div>
                      <input type="email" class="email" name="email" required placeholder="">
                      <label id="email" for="email">Email</label>
              </div>
              <div>
                      <input type="text" class="phone" name="phone">
                      <label id="phone" for="phone">Phone Number</label>
              </div>
              <div>
                      <textarea name="message" class="message" required cols="30" rows="10" placeholder=""></textarea>
                      <label id="message" for="message">Your Message</label>
              </div>
              <button type="submit">SUBMIT</button>
          </form>
      </div>`)
        },3000)
  })
  })