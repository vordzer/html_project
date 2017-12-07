
jQuery(document).ready(function(){
            $("a.gallery").fancybox();
			jQuery('#slider1').tinycarousel();
			jQuery('#slider2').tinycarousel();
			jQuery('#slider3').tinycarousel();
			jQuery('#slider4').tinycarousel();
			jQuery('#slider5').tinycarousel();
			jQuery('#slider6').tinycarousel();
            jQuery('.hide_ex').hide();
    		jQuery('.popup').click(function () {
			jQuery('#pop_up_shell').fadeIn(500);
			jQuery('#pop_up').fadeIn(500);
			return false;
		});	
		jQuery('.popular_most_gallery_item img').click(function () {
		    jQuery(this).parent().parent().parent().parent().parent().parent().parent().find('.popular_most_image img').attr("src", jQuery(this).attr("src"));
            return false;
		});		
    		jQuery('#pop_up form').click(function () {
			return false;
		});				
    		jQuery('.show_ex').click(function () {
    		  jQuery(this).parent().parent().parent().find('.hide_ex').show();
			return false;
		});			
    		jQuery('.close').click(function () {
			jQuery('#pop_up_shell').fadeOut(500);
			jQuery('#pop_up').fadeOut(500);
			return false;
		});				
    		jQuery('html').click(function () {
			jQuery('#pop_up_shell').fadeOut(500);
			jQuery('#pop_up').fadeOut(500);
		});			
        jQuery('#pop_up_shell').click(function () {
			jQuery('#pop_up_shell').fadeOut(500);
			jQuery('#pop_up').fadeOut(500);
		});
$('.scroll').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 2000);
      e.preventDefault();
   return false;
   });



});