$(function(){


 //preloader
 $(window).on('load', function(){

  $('.preloader').delay(600).fadeOut(500);

});

// banner team-slider
$('.banner-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  dots:true,
 
}); 
// team-slider
$('.team-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  dots:false,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }
    ,
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }
     
  
 
  ]
 
});
// feedback-slider
$('.feedback-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  dots:true,
 
});


//venobox video
$('.venobox').venobox(); 












  //back to top
  
  

  $('.back-to').click(function(){
    $('html, body').animate({scrollTop:0}, '1000');
  });



  $(window).scroll(function(){

    var scrolling= $(this).scrollTop();
    if(scrolling > 200){
      $('.animation-nav').addClass('bg');
    }else{
      $('.animation-nav').removeClass('bg');
    }
    if(scrolling > 200){
        $('.back-to').fadeIn(500);
    }else{
      $('.back-to').fadeOut(500);
    }



  });
  
  //animation scrool js
  var html_body = $('html, body');
$('.animation-nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 77
            }, 1500);
            return false;
        }
    }
});

//banner background video
jQuery(".player").YTPlayer();  


      
  });
 