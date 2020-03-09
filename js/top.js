// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){
//			this.slider();
			this.Customscroll();
      this.clickbox();
		},
		
		slider : function(){
			$('.aaaa').slick({
				dots: false,
				autoplay: true,
				arrows: true,
				slidesToShow: 1,
        slidesToScroll: 1,
				pauseOnHover: false,
				autoplaySpeed: 5000,
				infinite: true,
				speed: 800,
				touchMove: true,
				responsive: [
					{
						breakpoint: 641,
						settings: {
							dots: true,
							slidesToShow: 3,
							slidesToScroll: 3
						}
					},
					{
						breakpoint: 426,
						settings: {
							dots: true,
							slidesToShow: 2,
							slidesToScroll: 2
						}
					}
				]
			});
		},
		
		Customscroll : function(){
			$('.b05-ctn').mCustomScrollbar({
				theme:"dark"
			});
		},
    
		clickbox : function(){
			$(".js-click").click(function(){
        window.location= $(this).find("a").attr("href");
        return false;
      });
		},
		
		
	};
	
	obj.init();
	
});