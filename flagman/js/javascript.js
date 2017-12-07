$(document).ready(function(){
	$('.li_one').click(function(){				   
	var link = $(this); 
	$('.globalSlots').show(0, function(){
		if($(this).css('display') == 'block'){
			$('.globalSlots').css({'display':'block'});
			$('.winwin').css({'display':'none'});
			$('.chempion').css({'display':'none'});
			$('.li_one').addClass('active_tab_one li_onee');
			$('.li_two').removeClass('active_tab_two');
			$('.li_two').css('left','36%');
			$('.li_three').removeClass('active_tab_three');
			$('.li_three').css('left','69%');
		} 
		else {
			$('.globalSlots').css({'display':'block'});
		}    
	});
	return false;    
});	


$('.li_two').click(function(){				   
	var link = $(this); 
	$('.winwin').show(0, function(){
		if($(this).css('display') == 'block'){
			$('.winwin').css({'display':'block'});
			$('.globalSlots').css({'display':'none'});
			$('.chempion').css({'display':'none'});
			$('.li_two').addClass('active_tab_two li_two');
			$('.li_two').css('left','32%');
			$('.li_one').removeClass('active_tab_one');
			$('.li_three').removeClass('active_tab_three');
			$('.li_three').css('left','69%');
		} 
		else {
			$('.winwin').css({'display':'block'});
		}    
	});
	return false;    
});

$('.li_three').click(function(){				   
	var link = $(this); 
	$('.chempion').show(0, function(){
		if($(this).css('display') == 'block'){
			$('.chempion').css({'display':'block'});
			$('.globalSlots').css({'display':'none'});
			$('.winwin').css({'display':'none'});
			$('.li_three').addClass('active_tab_three li_three');
			$('.li_one').removeClass('active_tab_one');
			$('.li_two').css('left','32%');
			$('.li_two').removeClass('active_tab_two');
			$('.li_three').css('left','65%');
		} 
		else {
			$('.chempion').css({'display':'block'});
		}    
	});
	return false;    
});


});