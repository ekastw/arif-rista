
var btn = $('#scroll-to-top-button');

$(window).scroll(function() {
	if ($(window).scrollTop() > 300) {
		btn.addClass('show');
	} else {
		btn.removeClass('show');
	}
});

btn.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, '300');
});


$(this).scrollTop(0);
document.addEventListener('DOMContentLoaded', function() {
	var win_height = $(window).innerHeight(),
		win_width = $(window).innerWidth(),
		navbar_height = $('.navbar-menu').innerHeight();
	if ($(window).scrollTop()>=win_height) {
		floating_navbar();
	}else{
		static_navbar();
	}
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
		if (scroll >= 50) {
			floating_navbar();
		}else{
			static_navbar();
		}
	});
	function floating_navbar(){
		if (win_width>1024) {
			$('.navbar-brand img').css({'height':'40px','transition':'all .4s ease'})
			$(".navbar-expand-lg").css({"background":"white",'transition':'all .9s ease'})
		}else{
			$('.navbar-brand img').css({'height':'40px','transition':'all .4s ease'})
			$(".navbar-expand-lg").css({"background":"white",'transition':'all .9s ease'})
		}
		$('#navbarNav ul').css({'margin': '0px 0px','transition':'all .9s ease','transition':'all .4s ease'})
	}
	function static_navbar(){
		if (win_width>1024) {
			$('.navbar-brand img').css({'height':'100px','transition':'all .4s ease'})
			$(".navbar-expand-lg").css({"background":'rgb(200,200,200,.1)','transition':'all .9s ease'})
		}else{
			$('.navbar-brand img').css({'height':'40px','transition':'all .4s ease'})					
			$(".navbar-expand-lg").css({"background":'rgb(200,200,200,.4)','transition':'all .9s ease'})
		}
		$('#navbarNav ul').css({'margin': '30px 0px','transition':'all .9s ease','transition':'all .4s ease'})
	}
	$(document).on('click','.owl-carousel .a',function(event){
		event.preventDefault();
		var link_url = $(this).attr('href');
		if (link_url!=undefined && link_url!='' && link_url!='#') {
			location.href = link_url;
		}
	})
	if ($('.owl-carousel').length>0) {
		open_script('https://cdn.statically.io/gh/ekastw/arif-rista/0795593a/owl.carousel.min.js',1);
	}if ($('[data-aos]').length>0) {
		open_script('https://cdn.statically.io/gh/ekastw/arif-rista/0795593a/aos.min.js',2);
	}
	function open_script(file_url,do_after){
		$.getScript( file_url ).done(
			function( script, textStatus ) {
				if (do_after==1) {
					owlcar();
				}if (do_after==2) {
					AOS.init();
				}
			}
		).fail(function( jqxhr, settings, exception ) {
		});
	}
	function owlcar(){
		var owl = $('.standard-carousel'),
			owl_1 = $('.responsive-owl-carousel'),
			owl_2 = $('.parpol-owl-carousel');
		if (owl.length>0) {
			$( ".standard-carousel" ).each(function( index ) {
				var dot_conf = false,
					nav_conf = false,
					autoHeight_conf = true,
					margin_conf = 0;
				if ($(this).attr("dots")=="true") {
					dot_conf = true;
				}if ($(this).attr("nav")=="true") {
					nav_conf = true;
				}if ($(this).attr("margin")!=undefined) {
					margin_conf = parseInt($(this).attr("margin"));
				}if ($(this).attr("auto-height")=="false") {
					autoHeight_conf = false;
				}
				$(this).owlCarousel({
					autoWidth: false,
					autoHeight: autoHeight_conf,
					items: 1,
					margin:margin_conf,
					loop:true,
					autoplay:true,
					dots:dot_conf,
					lazyLoad: true,
					nav:nav_conf,
					autoplayHoverPause:true,
					smartSpeed:2500,
					responsive:{
						0:{
							items:1,
						},
						600:{
							items:1,
						},
						1000:{
							items:1,
						}
					}
				})
			})
		}if (owl_1.length>0) {
			$( ".responsive-owl-carousel" ).each(function( index ) {
				var min_item = 3,
					autoHeight_conf = true;
				if ($(this).attr("min-item")) {
					min_item = parseInt($(this).attr("min-item"));
				}if ($(this).attr("auto-height")=="false") {
					autoHeight_conf = false;
				}
				$(this).each(function( index ) {
					$(this).owlCarousel({
						autoWidth: false,
						autoHeight: autoHeight_conf,
						items: 4,
						margin:0,
						loop:true,
						autoplay:true,
						lazyLoad: true,
						dots:false,
						nav:false,
						autoplayHoverPause:false,
						smartSpeed:2000,
					    margin:10,
					    responsiveClass:true,
					    responsive:{
					        0:{
					            items:1
					        },
					        1000:{
					            items:min_item
					        }
					    }
					})
				})			
			})
		}if (owl_2.length>0) {
			$( ".parpol-owl-carousel" ).each(function( index ) {
				var min_item = 3;
				if ($(this).attr("min-item")) {
					min_item = parseInt($(this).attr("min-item"));
				}
				$(this).each(function( index ) {
					$(this).owlCarousel({
						autoWidth: false,
						autoHeight: false,
						items: 4,
						margin:0,
						loop:true,
						autoplay:true,
						lazyLoad: true,
						dots:false,
						nav:false,
						autoplayHoverPause:false,
						smartSpeed:2000,
					    margin:10,
					    responsiveClass:true,
					    responsive:{
					        768:{
					            items:5
					        },
					        1000:{
					            items:min_item
					        }
					    }
					})
				})			
			})
		}

		owl.trigger('play.owl.autoplay',[4500]);
		owl_1.trigger('play.owl.autoplay',[4500]);
		owl_2.trigger('play.owl.autoplay',[4500]);
	}
})
