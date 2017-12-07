
$(document).ready(function(){
    $(function () {

	/***********************************************************************************/
	jQuery('form .submit').click(function () {
		//Get the data from all the fields
		var name = jQuery(this).parent().parent().find('input[name=name]');
		var email = jQuery(this).parent().parent().find('input[name=email]');
		var phone = jQuery(this).parent().parent().find('input[name=phone]');
		var referer = jQuery(this).parent().parent().find('input[name=referer]');
		var phrase = jQuery(this).parent().parent().find('input[name=phrase]');

		//Simple validation to make sure user entered something
		//If error found, add hightlight class to the text field
		if (name.val()=='') {
			name.css('border','1px solid red');
			jQuery('#pop_up').hide();
			jQuery('#pop_up_shell').fadeIn(500);
			jQuery('#mistake').fadeIn(500);
            
			return false;
		} else { 
			name.css('border','1px solid #E5E5E5')
		};
		
		
		if (phone.val()=='') {
			phone.css('border','1px solid red');
			jQuery('#pop_up').hide();
			jQuery('#pop_up_shell').fadeIn(500);
			jQuery('#mistake').fadeIn(500);
			return false;
		} else {
			phone.css('border','1px solid #E5E5E5')
		};
		
		
		if (email.val()=='') {
			email.css('border','1px solid red');
			jQuery('#pop_up').hide();
			jQuery('#pop_up_shell').fadeIn(500);
			jQuery('#mistake').fadeIn(500);
			return false;
		} else {
			email.css('border','1px solid #E5E5E5')
		};
		
		
		
		
		//organize the data properly
		var data = 'name=' + name.val() + '&email=' + email.val() + '&phone=' + 
		phone.val(); //+ '&comment='  + encodeURIComponent(comment.val());
		
		//disabled all the text fields
		//jQuery('.text').attr('disabled','true');
		
		//show the loading sign
		//jQuery('.loading').show();
		//start the ajax
		jQuery.ajax({
			//this is the php file that processes the data and send mail
			url: "process.php",
			
			//GET method is used
			type: "POST",

			//pass the data			
			data: data,
			
			//Do not cache the page
			cache: false,
			
            error: function(html){alert('Ваше сообщение неотправленно');},
			//success
			success: function (html) {				
				//if process.php returned 1/true (send mail success)
				if (html==1) {						
					//hide the form
					
					jQuery('#pop_up').fadeOut();
					jQuery('#contactForm input[type=text]').val("").css('border','1px solid #E5E5E5');
					jQuery('.contactForm input[type=text]').val("").css('border','1px solid #E5E5E5');
					jQuery('#contactForm1 input[type=text]').val("").css('border','1px solid #E5E5E5');
					jQuery('#contactForm2 input[type=text]').val("").css('border','1px solid #E5E5E5');				
					
					//show the success message
					
					
					
				//if process.php returned 0/false (send mail failed)
				} else {
                    jQuery('#pop_up_shell').fadeOut(500);
                    jQuery('.form_cell input[type=text').val("");
                    jQuery('#thanks').fadeIn(500);
                    setTimeout('jQuery("#thanks_shell").hide();',3000)
                }				
			}		
		});
		
		//cancel the submit button default behaviours
		return false;
	});	
	/***********************************************************************************/

	
	jQuery('input[data-placeholder], textarea[data-placeholder]').each(function() {
		var placeholder = jQuery(this).attr('data-placeholder');
		if (((jQuery(this).val() !== undefined) && (jQuery(this).val().length > 0)) && (jQuery(this).val() != placeholder)) {
			jQuery(this).removeClass('placeholder');
		} else {
			jQuery(this).val(placeholder);
			jQuery(this).addClass('placeholder');
		}
		jQuery(this).focusin(function() {
			jQuery(this).removeClass('placeholder');
			if ((jQuery(this).val() === undefined) || (jQuery(this).val() == placeholder)) {
				jQuery(this).val('');
			}
		});
		jQuery(this).focusout(function() {
			if ((jQuery(this).val() === undefined) || (jQuery(this).val() == '') || (jQuery(this).val() == placeholder)) {
				jQuery(this).val(placeholder);
				jQuery(this).addClass('placeholder');		
			}
		});		
	});
	
	jQuery('form').submit(function() {
		jQuery(this).find('input[data-placeholder], textarea[data-placeholder]').each(function() {
			var placeholder = jQuery(this).attr('data-placeholder');
			jQuery(this).removeClass('placeholder');
			if ((jQuery(this).val() === undefined) || (jQuery(this).val() == placeholder)) {
				jQuery(this).val('');
			}	
		});
	});
    
	});
});