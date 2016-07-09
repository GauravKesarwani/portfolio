$(document).ready(function(){
     
    /*  view details hover button on products  */ 
    var viewtipEl;
    var parentEl;

     $('.viewtip1').on('mouseover',function(e){
          $('.viewtip1').css('opacity' ,0.5);
         $('#viewtipEl1').css('opacity',1);
         
     });

     $('#viewtipEl1').on('mouseover',function(e){
         $('.viewtip1').css('opacity' ,0.5);
         $('#viewtipEl1').css('opacity',1);
       
     });
  
     $('.viewtip2').on('mouseover',function(e){
         $('.viewtip2').css('opacity' ,0.5);
         $('#viewtipEl2').css('opacity',1);
         
     });

     $('#viewtipEl2').on('mouseover',function(e){
         $('.viewtip2').css('opacity' ,0.5);
         $('#viewtipEl2').css('opacity',1);
       
     });
     
     
     $('.viewtip3').on('mouseover',function(e){
          $('.viewtip3').css('opacity' ,0.5);
         $('#viewtipEl3').css('opacity',1);
         
     });

     $('#viewtipEl3').on('mouseover',function(e){
         $('.viewtip3').css('opacity' ,0.5);
         $('#viewtipEl3').css('opacity',1);
       
     });
     
    $('.viewtip1').on('mouseleave',function(e){
        $('#viewtipEl1').css('opacity',0);
        $(this).css('opacity',1);
     });
     
      $('.viewtip2').on('mouseleave',function(e){
        $('#viewtipEl2').css('opacity',0);
        $(this).css('opacity',1);
     });
     
      $('.viewtip3').on('mouseleave',function(e){
         $('#viewtipEl3').css('opacity',0);
        $(this).css('opacity',1);
     });
    
    
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
});

