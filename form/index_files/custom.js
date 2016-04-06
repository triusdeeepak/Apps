$(function() {
    $(".men").hover(
	
        function() {
            $('.dropdown-menu', this).stop(true, true).fadeIn("fast");
            $(this).toggleClass('open');
            $('b', this).toggleClass("caret caret-up");
        },
        function() {
            $('.dropdown-menu', this).stop(true, true).fadeOut("fast");
            $(this).toggleClass('open');
            $('b', this).toggleClass("caret caret-up");
        });
		
    $("#care_date").datepicker({
        dateFormat: 'yy-mm-dd'
    });
    $(function() {
        $('.bxslider-in').bxSlider({
            minSlides: 4,
            maxSlides: 4,
            slideWidth: 1170,
            slideMargin: 20,
            ticker: false,
            speed: 1000,
            pager: false,
            controls: true
        })
        $('.bxslider-in-2').bxSlider({
            minSlides: 1,
            maxSlides: 1,
            slideWidth: 300,
            slideMargin: 20,
            ticker: false,
            speed: 2000,
            pager: false,
            controls: true
        })
        $('.bxslider-in-1').bxSlider({
            minSlides: 2,
            maxSlides: 2,
            slideWidth: 600,
            slideMargin: 20,
            ticker: false,
            speed: 2000,
            pager: false,
            controls: true
        })
    });
    $('.medial-icons a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var screenwidth = $(window).width();
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                var reduceH = $(window).width() == 700 ? $('.mainmenu').height() : 10;
                if (screenwidth <= 767) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - reduceH - 00
                    }, 1000);
                } else {
                    $('html,body').animate({
                        scrollTop: target.offset().top - reduceH + 10
                    }, 1000);
                }
                $("#bs-example-navbar-collapse-1").removeClass("in");
                return false;
            }
        }
    });
    $('input[type="radio"]').click(function() {
        jQuery("#signupform-subscription_type").val(jQuery(this).val());
    })
});

$(function() {
	
	$('#add-follow').click(function(e){
	 	e.preventDefault();
	 	var l = Ladda.create(this);
	 	l.start();
		subscription_type = '';
		subscription_type = $('input[name="optradio"]:checked').val();
		
	 	$.ajax({
			type:'post',
			url:SiteUrl+'/patients/add-follow',
			data:{ date : $('#next-follow').val(),id : $('#next-id').val()},
			success:function(data){
				if(data=='yes'){
					window.location.reload();
				}
				else{
					alert('invalid');
				}
				l.stop();
			}
		})
	});
	
	
	$('#reg-pop-submit').click(function(e){
	 	e.preventDefault();
	 	var l = Ladda.create(this);
	 	l.start();
		subscription_type = '';
		subscription_type = $('input[name="optradio"]:checked').val();
		
	 	$.ajax({
			type:'post',
			url:SiteUrl+'/site/signup',
			data:{username:$('#username').val(),email:$('#fn').val(),password:$('#password').val(),subscription_type:subscription_type},
			success:function(data){
				if(data=='yes'){
					$('#myModal #error-msg').hide();
					$('#myModal #success-msg').show();
				}
				else{
					$('#myModal #error-msg div').html(data);
					$('#myModal #success-msg').hide();
					$('#myModal #error-msg').show();
				}
				l.stop();
			}
		})
	});
	
	$('#myModal2 #login-form').submit(function(e){
	 	e.preventDefault();
		
	 	var l = Ladda.create(document.querySelector('#login-form-submit'));
	 	l.start();
		
	 	$.ajax({
			type:'post',
			url:SiteUrl+'/site/login',
			data:{email:$('#login_pop_uname').val(),password:$('#login_pop_pass').val()},
			success:function(data){
				if(data=='yes'){
					$('input').val('');
					$('#myModal2 #error-msg2').hide();
					$('#myModal2 #success-msg2').show();
				}
				else{
					$('#myModal2 #error-msg2 div').html(data);
					$('#myModal2 #success-msg2').hide();
					$('#myModal2 #error-msg2').show();
				}
				l.stop();
			}
		})
	});
	
	
	
    /* var pgurl = window.location.pathname;
    console.log(pgurl)
    $("#navbar li").each(function(){
        if($(this).find('a').attr("href") == pgurl || $(this).find('a').attr("href") == '' )
        $(this).addClass("active");
    }) */    
});

$('#success-msg a , #error-msg a').click(function(e){
	e.preventDefault();$(this).parent().hide();
});
