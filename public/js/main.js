$(document).ready(function () {
	var windowWidth = $( window ).width();

	// Определение позиции дополнительного меню на десктопе
	if (windowWidth >767) {
		posSubMenu();
	}

	function posSubMenu() {
		var menuWidth = $('.js-top-menu').outerWidth();
		console.log(menuWidth);

		$('.js-top-menu__sub').each(function(indx, element){
			var elemWidth = $(element).outerWidth();
			var posElem = $(element).parent('.js-top-menu-item').position().left;

			console.log(elemWidth);
			console.log(posElem);

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
	$('.js-partner').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1
	});

	// Слайдер отзывов
	$('.js-review').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});
});