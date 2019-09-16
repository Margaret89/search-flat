$(document).ready(function () {
	var windowWidth = $( window ).width();

	// Определение позиции дополнительного меню на десктопе
	if (windowWidth >767) {
		posSubMenu();
	}

	function posSubMenu() {
		var menuWidth = $('.js-top-menu').outerWidth();

		$('.js-top-menu__sub').each(function(indx, element){
			var elemWidth = $(element).outerWidth();
			var posElem = $(element).parent('.js-top-menu-item').position().left;

			if (menuWidth < elemWidth + posElem) {
				$(element).addClass('turn');
			}
		});
	}

	$(window).resize(function(){
		if (windowWidth >767) {
			posSubMenu();
		}
	});

	// Маска для телефона 
	$.mask.definitions['~'] = "[+-]";
	$(".js-phone").mask("+7 (999) 999-9999");

	// Вывод сообщения об успешной отправке в попапе
	$('.js-valid-form').each(function(){
		$(this).on('submit',function(e){
			$.fancybox.close();
			$.fancybox.open({
				src  : '#msg-success',
				type : 'inline',
				opts : {
					
				}
			});
			$(this)[0].reset();
			e.preventDefault();
		});
	});

	// Стилизация выпадающего списка
	$('.js-select').chosen({
		disable_search: true,
	});

	// Табуляция
	if ($('.js-tabs-page').length) {
		$('.js-tabs-page-list').each(function(){
			$(this).find('.js-tabs-page-item:first').addClass("active");
		});

		$('.js-tabs-page-content').each(function(){
			$(this).find('.js-tabs-page-content-item:first').fadeIn();
		});

		$('.js-tabs-page-item').click(function(e) {
			e.preventDefault();
			var $parent = $(this).parents('.js-tabs-page');

			$parent.find('.js-tabs-page-content-item').hide();
			$parent.find('.js-tabs-page-item').removeClass('active');

			$(this).addClass("active");
			$parent.find('#' + $(this).attr('data-item')).fadeIn();
		});
	}

	// Слайдер партнеров
	if ($('.js-partner').length) {
		$('.js-partner').slick({
			infinite: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 620,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
					}
				},
			]
		});
	}

	// Слайдер отзывов
	if ($('.js-review-slider').length) {
		$('.js-review-slider').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 767,
					settings: {
						arrows: false,
						dots: true,
					}
				},
			]
		});
	}

	// Раскрытие параметров фильтра
	if ($('.js-filter-param').length) {
		$(".js-filter-param").on('click','.js-filter-head',function(event){
			event.preventDefault();
			$(this).parent().toggleClass("opened");
			if($(this).parent().hasClass("opened")){
				$(this).parent().children(".js-filter-list").slideDown(300);
			}
			else{
				$(this).parent().children(".js-filter-list").slideUp(300);
			}
		});
	}

	// Слайдер для продукции
	if ($('.js-product-slider-thumb').length) {
		$('.js-product-slider-thumb').slick({
			autoplay: false,
			infinite: true,
			slidesPerRow: 1,
			slidesToShow: 5,
			asNavFor: '.js-product-slider-preview',
			focusOnSelect: true,
			prevArrow: '<button type="button" class="slick-prev"></button>',
			nextArrow: '<button type="button" class="slick-next"></button>',
			responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 3,
					}
				},
			]
		});

		$('.js-product-slider-preview').slick({
			autoplay: false,
			infinite: true,
			slidesPerRow: 1,
			slidesToShow: 1,
			asNavFor: '.js-product-slider-thumb',
			arrows: false,
			draggable: false,
			fade: true,
			responsive: [
				{
					breakpoint: 991,
					settings: {
						arrows: true,
					}
				},
			]
		});
	}

	// range слайдер
	$('.js-range').each(function(indx, element){
		var minVal = $(element).data('min');
		var maxVal = $(element).data('max');
		var curVal = $(element).data('cur');
		var step = $(element).data('step');
		var $parentElem = $(element).parents('.js-range-block');

		$(element).slider({
			min: minVal,
			max: maxVal,
			value: curVal,
			step: step,
			range: 'min',
			slide: function(event, ui) {
				$parentElem.find('.js-range-cur').text(ui.value);
			}
		});

		$parentElem.find('.js-range-cur').text(curVal);
		$parentElem.find('.js-range-min').text(minVal);
		$parentElem.find('.js-range-max').text(maxVal);
	});

	// Фотогаллерея
	if ($('.js-photogallery-thumb').length) {
		$('.js-photogallery-thumb').slick({
			autoplay: false,
			infinite: true,
			slidesPerRow: 1,
			slidesToShow: 1,
			// responsive: [
			// 	{
			// 		breakpoint: 767,
			// 		settings: {
			// 			vertical: false,
			// 		}
			// 	},
			// 	{
			// 		breakpoint: 479,
			// 		settings: {
			// 			vertical: false,
			// 			slidesPerRow: 3,
			// 			slidesToShow: 3,
			// 		}
			// 	},
			// ]
		});
		$('.js-photogallery-preview').slick({
			autoplay: false,
			infinite: true,
			slidesPerRow: 1,
			slidesToShow: 1,
			arrows: false,
			draggable: false,
			fade: true,
			// responsive: [
			// 	{
			// 		breakpoint: 767,
			// 		settings: {
			// 			vertical: false,
			// 			fade: true,
			// 		}
			// 	},
			// ]
		});

		$('.js-photo-thumb-img').click(function(){
			var numCurElem = $(this).data('num');

			$('.js-photogallery-preview').slick('slickGoTo', numCurElem, true);
		});
	}

	// Открыть/Закрыть мобильное меню и контакты
	$('.js-btn-mobile-menu').click(function(){
		$('.js-shadow').addClass('is-visible');
		$('.js-header-top').addClass('open');
		$('.js-body').addClass('no-scroll');
	});

	$('.js-btn-mobile-contacts').click(function(){
		$('.js-shadow').addClass('is-visible');
		$('.js-header-bottom').addClass('open');
		$('.js-body').addClass('no-scroll');
	});

	$('.js-close-mobile-menu').click(function(){
		closeTopMenu();
	});

	$('.js-close-mobile-contacts').click(function(){
		closeContacts();
	});

	$('.js-shadow').click(function(){
		closeTopMenu();
		closeContacts();
	});

	function closeTopMenu() {
		$('.js-shadow').removeClass('is-visible');
		$('.js-header-top').removeClass('open');
		$('.js-body').removeClass('no-scroll');
	}

	function closeContacts() {
		$('.js-shadow').removeClass('is-visible');
		$('.js-header-bottom').removeClass('open');
		$('.js-body').removeClass('no-scroll');
	}

	// Раскрыть подменю
	$('.js-top-menu-arr').click(function(e){
		e.preventDefault();

		$(this).parent('.js-top-menu-link').siblings('.js-top-menu__sub').slideToggle();
	});
});