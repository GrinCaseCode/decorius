$(".input-phone").mask("+7 (999) 999-99-99");

$(".change-color li").click(function(e) {
	e.preventDefault();
	$(this).addClass("active");
	$(this).siblings("li").removeClass("active");
});


	//плавный скролл
	$(".link-simple_features").mPageScroll2id();

$('select').styler();

		//кнопка sandwich
		$(".btn_nav").click(function() {
			$(".sandwich").toggleClass("active");
			if ($(".menu-mobile").is(":hidden")) {
				$(".menu-mobile").slideDown(200);
			} else {
				$(".menu-mobile").slideUp(200);
			}
		});

		$(".btn-view_list").click(function(e) {
			e.preventDefault();
			$(this).addClass("active");
			$(".btn-view_grid").removeClass("active");
			$(".row_products > div").removeClass("col-lg-4 col-6");
			$(".row_products > div").addClass("col-12");
			$(".item-card").addClass("row");
			$(".item-card > div").addClass("col-md-4");
		});

		$(".btn-view_grid").click(function(e) {
			e.preventDefault();
			$(this).addClass("active");
			$(".btn-view_list").removeClass("active");
			$(".row_products > div").addClass("col-lg-4 col-6");
			$(".row_products > div").removeClass("col-12");
			$(".item-card").removeClass("row");
			$(".item-card > div").removeClass("col-md-4");
			
		});

		  {
    if ($(window).width() < 992) { 
$(".title-filter").click(function() {
			$(this).parent().toggleClass("active");
			$(".sidebar-filter__content").slideToggle(200);
		});


    }
  }



		$(".unit-checkbox .link-simple").click(function(e) {
			e.preventDefault();
			if ($(this).siblings(".checkbox_hidden").is(":hidden")) {
				$(this).siblings(".checkbox_hidden").slideDown(200);
				$(this).html("Скрыть");
			} else {
				$(this).siblings(".checkbox_hidden").slideUp(200);
				$(this).html("Показать все");
			}
		});

		$(".billbord").waypoint(function(direction) {
			if (direction === "down") {
				$(".scoll-top").addClass("active");
			} else if (direction === "up") {
				$(".scoll-top").removeClass("active");
			};
		}, {offset: '-100%'}); 
		/*высота блока по экрану*/
		function heightDetect() {
			$('.menu-mobile').css("height", $(window).height() -$(".header").height() + 60);
		};
		heightDetect();
		$(window).resize(function() {
			heightDetect();
		});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();



//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	$('.tabs li a').click(function(e) {
		e.preventDefault();
		$('.tabs li').removeClass('active');
		$(this).parent().addClass('active');
		$('.tab-pane').removeClass("active");

		var selectTab = $(this).attr("href");

		$(selectTab).addClass("active");
	});


// slider



var helpers = {
	addZeros: function (n) {
		return (n < 10) ? '0' + n : '' + n;
	}
};

$('.slider-billboard').each(function(){
	var $slider = $(this);

	if ($slider.length) {
		var currentSlide;
		var slidesCount;
		var sliderCounter = document.createElement('div');
		sliderCounter.classList.add('slider__counter');

		var updateSliderCounter = function(slick, currentIndex) {
			currentSlide = slick.slickCurrentSlide() + 1;
			slidesCount = slick.slideCount;
			$(sliderCounter).html('<span>0'+currentSlide + '</span> ' +'0'+slidesCount+ '')
		};

		$slider.on('init', function(event, slick) {
			$(this).siblings(".billbord__bottom").find(".container").append(sliderCounter);
			updateSliderCounter(slick);
		});

		$slider.on('afterChange', function(event, slick, currentSlide) {
			updateSliderCounter(slick, currentSlide);
		});

		$('.slider-billboard').on('init', function(e, slick) {
			var $firstAnimatingElements = $('.slider-billboard__item:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);    
		});
		$('.slider-billboard').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.slider-billboard__item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);    
		});

		$slider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			fade: true,
			arrow: true,
			prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-angle-left"></i>назад<div/>',
			nextArrow: '<div class="slick-next slick-arrow">Вперёд<i class="far fa-angle-right"></i><div/>',
			appendArrows: $('.arrows-wrap'),
			infinite: false,
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function() {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function() {
					$this.removeClass($animationType);
				});
			});
		}
	}

});

const animateCSS = (element, animation, delay = '', prefix = 'animate__') =>
// We create a Promise and return it
new Promise((resolve, reject) => {
	const delayTime = `${delay}`;
	const animationName = `${prefix}${animation}`;
	const node = document.querySelector(element);
	if (delay){
		node.classList.add(`${prefix}animated`, animationName, `${prefix}delay-${delayTime}`);
	}else{
		node.classList.add(`${prefix}animated`, animationName);
	}
  // When the animation ends, we clean the classes and resolve the Promise
  function handleAnimationEnd(event) {
  	event.stopPropagation();
  	node.classList.remove(`${prefix}animated`, animationName, `hide`, `${prefix}delay-${delayTime}`);
  	resolve('Animation ended');
  }
  node.addEventListener('animationend', handleAnimationEnd, {once: true});
});


 // Slick slider
 $('.slider-billboard').on('init', function(event, slick){
 	let bg = $('.slide-1').attr('data-bg');
 	$('.slide-1').parents('.promo').attr('data-bg', bg);
 	animateCSS('.big-title', 'fadeInDown');
 	animateCSS('.slider-billboard__descr', 'fadeInUp');
 	animateCSS('.slider-billboard__btn', 'fadeIn', '1s');
 });

 $('.slider-billboard').on('afterChange', function(event, slick, currentSlide){
 	let slideClass = ".slide-"+(currentSlide + 1);
 	animateCSS(slideClass+' .big-title', 'fadeInDown');
 	animateCSS(slideClass+' .slider-billboard__descr', 'fadeInUp');
 	animateCSS(slideClass+' .slider-billboard__btn', 'fadeIn', '1s');
 });

 $('.slider-catalog').slick({
 	arrows: true,
 	dots: false,
 	infinite: true,
 	slidesToShow:4,
 	prevArrow: '<div class="slick-prev slick-arrow"><div/>',
 	nextArrow: '<div class="slick-next slick-arrow"><div/>',
 	slidesToScroll: 1,
 	responsive: [
 	{
 		breakpoint: 992,
 		settings: {
 			slidesToShow:2,
 		}
 	},
 	{
 		breakpoint: 480,
 		settings: {
 			slidesToShow:1,
 			variableWidth: true,
 			arrows: false,
 		}
 	}
 	]
 });

 $('.tab-pane .row_catalog').slick({
 	dots: false,
 	arrows: false,
 	slidesToShow:1,
 	variableWidth: true,
 	infinite: true,
 	arrows: false,
 	slidesToScroll: 1,
 	mobileFirst: true,
 	responsive: [
 	{
 		breakpoint: 480,
 		settings: 'unslick'
 	}
 	]
 });

 $('.tabs').slick({
 	dots: false,
 	arrows: false,
 	slidesToShow:1,
 	variableWidth: true,
 	infinite: false,
 	arrows: false,
 	slidesToScroll: 1,
 	mobileFirst: true,
 	responsive: [
 	{
 		breakpoint: 768,
 		settings: 'unslick'
 	}
 	]
 });

  $('.row_reviews').slick({
 	dots: false,
 	arrows: false,
 	slidesToShow:1,
 	variableWidth: true,
 	infinite: false,
 	arrows: false,
 	slidesToScroll: 1,
 	mobileFirst: true,
 	responsive: [
 	{
 		breakpoint: 480,
 		settings: 'unslick'
 	}
 	]
 });

 $('.blogs .row_blogs').slick({
 	dots: false,
 	arrows: false,
 	slidesToShow:1,
 	variableWidth: true,
 	infinite: true,
 	arrows: false,
 	slidesToScroll: 1,
 	mobileFirst: true,
 	responsive: [
 	{
 		breakpoint: 480,
 		settings: 'unslick'
 	}
 	]
 });

 $('.brands-items').slick({
 	arrows: true,
 	dots: false,
 	infinite: true,
 	slidesToShow:6,
 	prevArrow: '<div class="slick-prev slick-arrow"><div/>',
 	nextArrow: '<div class="slick-next slick-arrow"><div/>',
 	slidesToScroll: 1,
 	responsive: [
 	{
 		breakpoint: 480,
 		settings: {
 			slidesToShow:1,
 			variableWidth: true,
 			arrows: false,
 		}
 	}
 	]
 });

 $('.slider-products').slick({
 	arrows: true,
 	dots: true,
 	infinite: true,
 	slidesToShow:4,
 	prevArrow: '<div class="slick-prev slick-arrow"><div/>',
 	nextArrow: '<div class="slick-next slick-arrow"><div/>',
 	slidesToScroll: 1,
 	responsive: [
 	{
 		breakpoint: 768,
 		settings: {
 			slidesToShow:3,
 		}
 	},
 	{
 		breakpoint: 480,
 		settings: {
 			slidesToShow:1,
 			variableWidth: true,
 			arrows: false,
 			dots: false,
 		}
 	}
 	]

 });

 $('.slider-products-page').slick({
 	arrows: true,
 	dots: true,
 	infinite: true,
 	slidesToShow:6,
 	prevArrow: '<div class="slick-prev slick-arrow"><div/>',
 	nextArrow: '<div class="slick-next slick-arrow"><div/>',
 	slidesToScroll: 1,
 	responsive: [
 	{
 		breakpoint: 992,
 		settings: {
 			slidesToShow:4,
 		}
 	},
 	{
 		breakpoint: 768,
 		settings: {
 			slidesToShow:3,
 		}
 	},
 	{
 		breakpoint: 480,
 		settings: {
 			slidesToShow:1,
 			variableWidth: true,
 			arrows: false,
 			dots: false,
 		}
 	}
 	]

 });

 $('.slider-nav-products').slick({
 	arrows: true,
 	dots: false,
 	infinite: true,
 	focusOnSelect: true,
 	vertical: true,
 	asNavFor: '.slider-for-products',
 	verticalSwiping: true,
 	slidesToShow:4,
 	prevArrow: '<div class="slick-prev slick-arrow"><div/>',
 	nextArrow: '<div class="slick-next slick-arrow"><div/>',
 	slidesToScroll: 1,
 	responsive: [{
 		breakpoint: 992,
 		settings: {
 			vertical: false,
 			verticalSwiping: false,
 		}
 	}]
 });

 $('.slider-for-products').slick({
 	arrows: false,
 	dots: false,
 	infinite: true,
 	focusOnSelect: true,
 	fade: true,
 	swipe: false,
 	slidesToShow:1,
 	asNavFor: '.slider-nav-products',
 	prevArrow: '<div class="slick-prev slick-arrow"><div/>',
 	nextArrow: '<div class="slick-next slick-arrow"><div/>',
 	slidesToScroll: 1,

 });

 $('.slider-nav').slick({
 	arrows: true,
 	dots: false,
 	infinite: true,
 	focusOnSelect: true,
 	vertical: true,
 	asNavFor: '.slider-for',
 	verticalSwiping: true,
 	slidesToShow:4,
 	prevArrow: '<div class="slick-prev slick-arrow"><div/>',
 	nextArrow: '<div class="slick-next slick-arrow"><div/>',
 	slidesToScroll: 1,
 	responsive: [
 	{
 		breakpoint: 992,
 		settings: {
 			vertical: false,
 			verticalSwiping: false,
 		}
 	},
 	{
 		breakpoint: 480,
 		settings: {
 			slidesToShow:3,
 			vertical: false,
 			verticalSwiping: false,
 		}
 	}
 	]
 });

 $('.slider-for').slick({
 	arrows: false,
 	dots: false,
 	infinite: true,
 	focusOnSelect: true,
 	fade: true,
 	slidesToShow:1,
 	asNavFor: '.slider-nav',
 	prevArrow: '<div class="slick-prev slick-arrow"><div/>',
 	nextArrow: '<div class="slick-next slick-arrow"><div/>',
 	slidesToScroll: 1,

 });



 $(document).on('mouseenter', '.slider-card-image .slick-dots li', function() {
 	if ($(this).hasClass('slick-active')){}else{
 		$(this).siblings().removeClass('slick-active');
 		$(this).addClass('slick-active');
 		var slider = $(this).parents('.slider-card-image'),
 		num = $(this).index();
 		setTimeout(function() {
 			slider.slick('slickGoTo', num, true).slick('setPosition');
 		}, 10);
 	}
 });
 $('.slider-card-image').on('init reInit', function(event, slick){
 	if(slick.slideCount>1){
 		let dotWidth = 100 / slick.slideCount;
 		$(event.currentTarget).find('.slick-dots li').css({"width": dotWidth+"%"});
 	}else {
 		$(event.currentTarget).find('.slick-dots').hide();
 	}
 });

 $('.slider-card-image').slick({
 	arrows: false,
 	dots: true,
 	infinite: true,
 	slidesToShow:1,
 	prevArrow: '<div class="slick-prev slick-arrow"><div/>',
 	nextArrow: '<div class="slick-next slick-arrow"><div/>',
 	slidesToScroll: 1,

 });

 $(".footer__title").click(function() {
 	$(this).toggleClass("active");
 	$(this).siblings(".footer__content").slideToggle(200);
 });


 $(".scoll-top").click(function () {
 	$("body, html").animate({
 		scrollTop: 0
 	}, 800);
 	return false;
 });

 
 var $range = $(".range-catalog__input"),
 $from = $(".control-input__from"),
 $to = $(".control-input__to"),
 min = 0,
 max = 40000;
 $range.ionRangeSlider({
 	type: "double",
 	min: min,
 	max: max,
 	from: 1000,
 	to: 18000,
 	prettify_enabled: true,
 	onChange: function(data) {
 		updateValues()
 	}
 });
 
 function number_format(num, format) {
 	num = (num + "").replace(/(\s)+/g, "");
 	return format ? num.replace(/(\d{1,3})(?=(?:\d{3})+$)/g, "$1 ") : num
 }
 $range = $range.data("ionRangeSlider");
 var updateValues = function() {
 	var res = $range.result;
 	$from.val(number_format(res.from, true) + " ₽");
 	$to.val(number_format(res.to,true) + " ₽")
 };
 $from.on("focus", function() {
 	this.value = number_format(this.value);
 	this.focus();
 	this.selectionStart = this.value.length
 }).on("input", function() {
 	$range.update({
 		from: this.value
 	})
 }).on("blur", updateValues);
 $to.on("focus", function() {
 	this.value = number_format(this.value);
 	this.focus();
 	this.selectionStart = this.value.length
 }).on("input", function() {
 	$range.update({
 		to: this.value
 	})
 }).on("blur", updateValues)
 

 var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();





