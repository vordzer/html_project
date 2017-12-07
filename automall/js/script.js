 $(document).ready(function() {
     var $ = jQuery;
     $('#button1').click(function(e) {
         e.preventDefault();
         var error1 = true;
         var error2 = true;
         var error3 = true;
         var name = $('#name1').val();
         var telephone = $('#telephone1').val();
         var mail = $('#mail1').val();

         var nameValid = /^[a-zA-Zа-яА-ЯёЁіІїЇ]+$/;
         var telephoneValid = /^[0-9()-+. ]+$/;
         var mailValid = /^[a-zA-Zа-яА-ЯёЁіІїЇ@0-9()-+. _-]+$/;

         if (nameValid.test(name)) {
             var error1 = false;
             $('.name1').css({
                 color: '#000',
                 background: '#fff'
             });
         } else {
             $('.name1').css({
                 color: '#fff',
                 background: '#900000'
             });
         }
         if (telephoneValid.test(telephone)) {
             var error2 = false;
             $('.telephone1').css({
                 color: '#000',
                 background: '#fff'
             });
         } else {
             $('.telephone1').css({
                 color: '#fff',
                 background: '#900000'
             });
         }
         if (mailValid.test(mail)) {
             var error3 = false;
             $('.mail1').css({
                 color: '#000',
                 background: '#fff'
             });
         } else {
             $('.mail1').css({
                 color: '#fff',
                 background: '#900000'
             });
         }
         if (error1 == false && error2 == false && error3 == false) {
             $.post("send.php", $("#form1").serialize(), function(result) {
                 if (result == 'sent') {
                     alert('Отправка удалась')
                     $('#name1,#telephone1,#mail1').val('');
                 } else {
                     alert('Отправка не удалас')
                 }
             });
         }
     });
 })
$(document).ready(
	function (){
		$("#pikame").PikaChoose({carousel:true,carouselOptions:{wrap:'circular'}});
	});
 $(document).ready(function() {
     var $ = jQuery;
     $('#button2').click(function(e) {
         e.preventDefault();
         var error1 = true;
         var mail = $('#mail2').val();
         var mailValid = /^[a-zA-Zа-яА-ЯёЁіІїЇ@0-9()-+. _-]+$/;
         if (mailValid.test(mail)) {
             var error1 = false;
             $('.mail2').css({
                 color: '#000',
                 background: '#fff'
             });
         } else {
             $('.mail2').css({
                 color: '#fff',
                 background: '#900000'
             });
         }
         if (error1 == false) {
             $.post("send.php", $("#form2").serialize(), function(result) {
                 if (result == 'sent') {
                     alert('Отправка удалась')
                     $('#mail2').val('');
                 } else {
                     alert('Отправка не удалас')
                 }
             });
         }
     });
 })
 $(document).ready(function() {
     var $ = jQuery;
     $('#button3').click(function(e) {
         e.preventDefault();
         var error1 = true;
         var error2 = true;
         var name = $('#name3').val();
         var telephone = $('#telephone3').val();
         var nameValid = /^[a-zA-Zа-яА-ЯёЁіІїЇ]+$/;
         var telephoneValid = /^[0-9()-+. ]+$/;
         if (nameValid.test(name)) {
             var error1 = false;
             $('.name3').css({
                 color: '#000',
                 background: '#fff'
             });
         } else {
             $('.name3').css({
                 color: '#fff',
                 background: '#900000'
             });
         }
         if (telephoneValid.test(telephone)) {
             var error2 = false;
             $('.telephone3').css({
                 color: '#000',
                 background: '#fff'
             });
         } else {
             $('.telephone3').css({
                 color: '#fff',
                 background: '#900000'
             });
         }

         if (error1 == false && error2 == false) {
             $.post("send.php", $("#form3").serialize(), function(result) {
                 if (result == 'sent') {
                     alert('Отправка удалась')
                     $('#name3,#telephone3').val('');
                 } else {
                     alert('Отправка не удалас')
                 }
             });
         }
     });
 })
 $(document).ready(function() {
     var $ = jQuery;
     $('#button4').click(function(e) {
         e.preventDefault();
         var error1 = true;
         var error2 = true;
         var error3 = true;
         var name = $('#name4').val();
         var telephone = $('#telephone4').val();
         var mail = $('#mail4').val();
         var nameValid = /^[a-zA-Zа-яА-ЯёЁіІїЇ]+$/;
         var telephoneValid = /^[0-9()-+. ]+$/;
         var mailValid = /^[a-zA-Zа-яА-ЯёЁіІїЇ@0-9()-+. _-]+$/;
         if (nameValid.test(name)) {
             var error1 = false;
             $('.name4').css({
                 color: '#000',
                 background: '#fff'
             });
         } else {
             $('.name4').css({
                 color: '#fff',
                 background: '#900000'
             });
         }
         if (telephoneValid.test(telephone)) {
             var error2 = false;
             $('.telephone4').css({
                 color: '#000',
                 background: '#fff'
             });
         } else {
             $('.telephone4').css({
                 color: '#fff',
                 background: '#900000'
             });
         }
         if (mailValid.test(mail)) {
             var error3 = false;
             $('.mail4').css({
                 color: '#000',
                 background: '#fff'
             });
         } else {
             $('.mail4').css({
                 color: '#fff',
                 background: '#900000'
             });
         }
         if (error1 == false && error2 == false && error3 == false) {
             $.post("send.php", $("#form4").serialize(), function(result) {
                 if (result == 'sent') {
                     alert('Отправка удалась')
                     $('#name4,#telephone4,#mail4').val('');
                 } else {
                     alert('Отправка не удалас')
                 }
             });
         }
     });
 })
 $(document).ready(function() {
     var $ = jQuery;
     $('#button5').click(function(e) {
         e.preventDefault();
         var error1 = true;
         var error2 = true;
         var name = $('#name5').val();
         var mail = $('#mail5').val();
         var nameValid = /^[a-zA-Zа-яА-ЯёЁіІїЇ]+$/;
         var mailValid = /^[a-zA-Zа-яА-ЯёЁіІїЇ@0-9()-+. _-]+$/;
         if (nameValid.test(name)) {
             var error1 = false;
             $('.name5').css({
                 color: '#000',
                 background: '#fff'
             });
         } else {
             $('.name5').css({
                 color: '#fff',
                 background: '#900000'
             });
         }
         if (mailValid.test(mail)) {
             var error2 = false;
             $('.mail5').css({
                 color: '#000',
                 background: '#fff'
             });
         } else {
             $('.mail5').css({
                 color: '#fff',
                 background: '#900000'
             });
         }
         if (error1 == false && error2 == false) {
             $.post("send.php", $("#form5").serialize(), function(result) {
                 if (result == 'sent') {
                     alert('Отправка удалась')
                     $('#name5,#mail5').val('');
                 } else {
                     alert('Отправка не удалас')
                 }
             });
         }
     });
 })
 $(document).ready(function() {
     $('.button-smol,.button1').click(function() {
         $.fancybox({
             padding: 0,
             margin: 0,
             width: 444,
             height: 287,
             type: 'inline',
             href: '#form3',
             showCloseButton: false,
             hideOnContentClick: true,
             centerOnScroll: true,
             overlayColor: '#000',
             autoDimensions: true,
         })
         return false;
     })
 });
 $(document).ready(function() {
     $('.button3').click(function() {
         $.fancybox({
             padding: 0,
             margin: 0,
             width: 444,
             height: 287,
             type: 'inline',
             href: '#form4',
             showCloseButton: false,
             hideOnContentClick: true,
             centerOnScroll: true,
             overlayColor: '#000',
             autoDimensions: true,
         })
         return false;
     })
 });

 $(document).ready(function() {
     $('.button2').click(function() {
         $.fancybox({
             padding: 0,
             margin: 0,
             width: 444,
             height: 287,
             type: 'inline',
             href: '#form5',
             showCloseButton: false,
             hideOnContentClick: true,
             centerOnScroll: true,
             overlayColor: '#000',
             autoDimensions: true,
         })
         return false;
     });
 });
        jQuery('.usluga h2').click(function () {
            if($(this).parent().find('p').css('display')=='none'){
			jQuery(this).parent().find('p').show(500);
            jQuery(this).addClass('nobg');
            }else{
			jQuery(this).parent().find('p').hide(500);
            jQuery(this).removeClass('nobg');
            }
		});
        jQuery('.corp_type label, .corp_type input').click(function () {
            if($(this).parent().find('input').prop('checked')==true){
            jQuery(this).parent().addClass('active');
            }else{
            jQuery(this).parent().removeClass('active');
            }
		});
        jQuery('#osn_char').click(function () {
            jQuery('#osn_char').addClass('active');
            jQuery('#all_char').removeClass('active');
            jQuery('#all_char_ul').hide();;
            jQuery('#osn_char_ul').show();
            return false;
		});
        jQuery('#all_char').click(function () {
            jQuery('#all_char').addClass('active');
            jQuery('#osn_char').removeClass('active');
            jQuery('#osn_char_ul').hide();;
            jQuery('#all_char_ul').show();
            return false;
		});

 $(function() {
     $("#slider-range").slider({
         range: true,
         step: 100,
         min: 15000,
         max: 25000,
         values: [15000, 25000],
         slide: function(event, ui) {
             $("#amount").val("$" + ui.values[0]);
             $("#amount1").val("$" + ui.values[1]);
         }

     });

 });
