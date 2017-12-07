jQuery(document).ready(function() {
    jQuery("a.scrollto").click(function () {
        var elementClick = jQuery(this).attr("href")
        var destination = jQuery(elementClick).offset().top-100;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
        
		jQuery('#header_right').click(function () {
			jQuery('#parent_popup').show();
			return false;
		});
		jQuery('#popup').click(function () {
			jQuery('#parent_popup').show();
			return false;
		});
		jQuery('body').click(function () {
			jQuery('#parent_popup').hide();
			return false;
		});
    jQuery(window).scroll(function () {
        if(jQuery(window).scrollTop() >0){
            jQuery("header").addClass('bg');
        } else {
            jQuery("header").removeClass('bg');            
        }
        var hw =jQuery(window).height();
        var hei =jQuery(window).scrollTop()+hw;
        if(hei > 1384&& hei<1484&&jQuery("#corp_site img").hasClass('hide')){
            jQuery("#corp_site img").removeClass('hide');
            jQuery("#corp_site img").addClass('animated');
            jQuery("#corp_site img").addClass('bounceIn');
        }
        if(hei > 1972&&hei < 2072&&jQuery("#mod1").hasClass('hide')){
            jQuery("#mod1").removeClass('hide');
            jQuery("#mod1").addClass('animated');
            jQuery("#mod1").addClass('fadeInLeft');
            jQuery("#mod2").removeClass('hide');
            jQuery("#mod2").addClass('animated');
            jQuery("#mod2").addClass('bounceInDown');
            jQuery("#mod3").removeClass('hide');
            jQuery("#mod3").addClass('animated');
            jQuery("#mod3").addClass('fadeInRight');
        }
        if(hei > 2560&&hei < 2660&&jQuery("#mod4").hasClass('hide')){
            jQuery("#mod4").removeClass('hide');
            jQuery("#mod4").addClass('animated');
            jQuery("#mod4").addClass('fadeInLeft');
            jQuery("#mod5").removeClass('hide');
            jQuery("#mod5").addClass('animated');
            jQuery("#mod5").addClass('bounceInUp');
            jQuery("#mod6").removeClass('hide');
            jQuery("#mod6").addClass('animated');
            jQuery("#mod6").addClass('fadeInRight');
        }
        if(hei > 3072&&hei < 3172&&jQuery("#exm1").hasClass('hide')){
            jQuery("#exm1").removeClass('hide');
            jQuery("#exm1").addClass('animated');
            jQuery("#exm1").addClass('fadeInLeft');
            jQuery("#exm2").removeClass('hide');
            jQuery("#exm2").addClass('animated');
            jQuery("#exm2").addClass('bounceInDown');
            jQuery("#exm3").removeClass('hide');
            jQuery("#exm3").addClass('animated');
            jQuery("#exm3").addClass('fadeInRight');
        }
        if(hei > 3480&&hei < 3580&&jQuery("#exm4").hasClass('hide')){
            jQuery("#exm4").removeClass('hide');
            jQuery("#exm4").addClass('animated');
            jQuery("#exm4").addClass('fadeInLeft');
            jQuery("#exm5").removeClass('hide');
            jQuery("#exm5").addClass('animated');
            jQuery("#exm5").addClass('bounceInUp');
            jQuery("#exm6").removeClass('hide');
            jQuery("#exm6").addClass('animated');
            jQuery("#exm6").addClass('fadeInRight');
        }
        if(hei > 3997&& hei<4075&&jQuery("#form1 img").hasClass('hide')){
            jQuery("#form1 img").removeClass('hide');
            jQuery("#form1 img").addClass('animated');
            jQuery("#form1 img").addClass('flipInY');
        }
        if(hei > 5099&& hei<5199&&jQuery(".right_img").hasClass('hide')){
            jQuery(".right_img").removeClass('hide');
            jQuery(".right_img").addClass('animated');
            jQuery(".right_img").addClass('fadeInRight');
        }
        if(hei > 5299&& hei<5399&&jQuery(".excel").hasClass('hide')){
            jQuery(".excel").removeClass('hide');
            jQuery(".excel").addClass('animated');
            jQuery(".excel").addClass('pulse');
        }
        if(hei > 5587&& hei<5687&&jQuery(".left_img").hasClass('hide')){
            jQuery(".left_img").removeClass('hide');
            jQuery(".left_img").addClass('animated');
            jQuery(".left_img").addClass('slideInLeft');
        }
        if(hei > 6256&&hei < 6356&&jQuery("#em1").hasClass('hide')){
            jQuery("#em1").removeClass('hide');
            jQuery("#em1").addClass('animated');
            jQuery("#em1").addClass('fadeInLeft');
            jQuery("#em2").removeClass('hide');
            jQuery("#em2").addClass('animated');
            jQuery("#em2").addClass('bounceInDown');
            jQuery("#em3").removeClass('hide');
            jQuery("#em3").addClass('animated');
            jQuery("#em3").addClass('fadeInRight');
        }
        if(hei > 6600&&hei < 6700&&jQuery("#em4").hasClass('hide')){
            jQuery("#em4").removeClass('hide');
            jQuery("#em4").addClass('animated');
            jQuery("#em4").addClass('fadeInLeft');
            jQuery("#em5").removeClass('hide');
            jQuery("#em5").addClass('animated');
            jQuery("#em5").addClass('bounceInUp');
            jQuery("#em6").removeClass('hide');
            jQuery("#em6").addClass('animated');
            jQuery("#em6").addClass('fadeInRight');
        }
        if(hei > 7420&&hei < 7520&&jQuery("#port1").hasClass('hide')){
            jQuery("#port1").removeClass('hide');
            jQuery("#port1").addClass('animated');
            jQuery("#port1").addClass('fadeInLeft');
            jQuery("#port2").removeClass('hide');
            jQuery("#port2").addClass('animated');
            jQuery("#port2").addClass('bounceInDown');
            jQuery("#port3").removeClass('hide');
            jQuery("#port3").addClass('animated');
            jQuery("#port3").addClass('fadeInRight');
        }
        if(hei > 7850&&hei < 7950&&jQuery("#port4").hasClass('hide')){
            jQuery("#port4").removeClass('hide');
            jQuery("#port4").addClass('animated');
            jQuery("#port4").addClass('fadeInLeft');
            jQuery("#port5").removeClass('hide');
            jQuery("#port5").addClass('animated');
            jQuery("#port5").addClass('bounceInUp');
            jQuery("#port6").removeClass('hide');
            jQuery("#port6").addClass('animated');
            jQuery("#port6").addClass('fadeInRight');
        }
        if(hei > 8212&& hei<8312&&jQuery("#minus").hasClass('hide')){
            jQuery("#minus").removeClass('hide');
            jQuery("#minus").addClass('animated');
            jQuery("#minus").addClass('rotateInDownLeft');
            jQuery("#plus").removeClass('hide');
            jQuery("#plus").addClass('animated');
            jQuery("#plus").addClass('rotateInDownRight');
        }
        if(hei > 8550&& hei<8650&&jQuery("#form2 img").hasClass('hide')){
            jQuery("#form2 img").removeClass('hide');
            jQuery("#form2 img").addClass('animated');
            jQuery("#form2 img").addClass('flipInY');
        }
        if(hei > 9150&& hei<9250&&jQuery("#about .column").hasClass('hide')){
            jQuery("#about .column").removeClass('hide');
            jQuery("#about .column").addClass('animated');
            jQuery("#about .column").addClass('rubberBand');
        }
        if(hei > 9788&& hei<9888&&jQuery("#lic img").hasClass('hide')){
            jQuery("#lic img").removeClass('hide');
            jQuery("#lic img").addClass('animated');
            jQuery("#lic img").addClass('pulse');
        }
        if(hei > 10120&& hei<10220&&jQuery("#why_we article").hasClass('hide')){
            jQuery("#why_we article").removeClass('hide');
            jQuery("#why_we article").addClass('animated');
            jQuery("#why_we article").addClass('rotateIn');
        }
        if(hei > 10524&&hei < 10624&&jQuery("#we_do1").hasClass('hide')){
            jQuery("#we_do1").removeClass('hide');
            jQuery("#we_do1").addClass('animated');
            jQuery("#we_do1").addClass('fadeInLeft');
            jQuery("#we_do2").removeClass('hide');
            jQuery("#we_do2").addClass('animated');
            jQuery("#we_do2").addClass('bounceInDown');
            jQuery("#we_do3").removeClass('hide');
            jQuery("#we_do3").addClass('animated');
            jQuery("#we_do3").addClass('fadeInRight');
        }
        if(hei > 10644&&hei < 10744&&jQuery("#we_do4").hasClass('hide')){
            jQuery("#we_do4").removeClass('hide');
            jQuery("#we_do4").addClass('animated');
            jQuery("#we_do4").addClass('fadeInLeft');
            jQuery("#we_do5").removeClass('hide');
            jQuery("#we_do5").addClass('animated');
            jQuery("#we_do5").addClass('pulse');
            jQuery("#we_do6").removeClass('hide');
            jQuery("#we_do6").addClass('animated');
            jQuery("#we_do6").addClass('fadeInRight');
        }
        if(hei > 10666&&hei < 10766&&jQuery("#we_do7").hasClass('hide')){
            jQuery("#we_do7").removeClass('hide');
            jQuery("#we_do7").addClass('animated');
            jQuery("#we_do7").addClass('fadeInLeft');
            jQuery("#we_do8").removeClass('hide');
            jQuery("#we_do8").addClass('animated');
            jQuery("#we_do8").addClass('bounceInUp');
            jQuery("#we_do9").removeClass('hide');
            jQuery("#we_do9").addClass('animated');
            jQuery("#we_do9").addClass('fadeInRight');
        }
        if(hei > 11100&& hei<11200&&jQuery("#skhema_shell").hasClass('hide')){
            jQuery("#skhema_shell").removeClass('hide');
            jQuery("#skhema_shell").addClass('animated');
            jQuery("#skhema_shell").addClass('rollIn');
        }
        if(hei > 11396&&hei < 11496&&jQuery("#op1").hasClass('hide')){
            jQuery("#op1").removeClass('hide');
            jQuery("#op1").addClass('animated');
            jQuery("#op1").addClass('fadeInLeft');
            jQuery("#op2").removeClass('hide');
            jQuery("#op2").addClass('animated');
            jQuery("#op2").addClass('bounceInDown');
            jQuery("#op3").removeClass('hide');
            jQuery("#op3").addClass('animated');
            jQuery("#op3").addClass('fadeInRight');
        }
        if(hei > 11564&&hei < 11664&&jQuery("#op4").hasClass('hide')){
            jQuery("#op4").removeClass('hide');
            jQuery("#op4").addClass('animated');
            jQuery("#op4").addClass('fadeInLeft');
            jQuery("#op5").removeClass('hide');
            jQuery("#op5").addClass('animated');
            jQuery("#op5").addClass('bounceInUp');
            jQuery("#op6").removeClass('hide');
            jQuery("#op6").addClass('animated');
            jQuery("#op6").addClass('fadeInRight');
        }
        if(hei > 12464&& hei<12564&&jQuery("#form3 img").hasClass('hide')){
            jQuery("#form3 img").removeClass('hide');
            jQuery("#form3 img").addClass('animated');
            jQuery("#form3 img").addClass('flipInY');
        }
    });
});