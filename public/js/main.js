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

	// // Вызов функции подгрузки изображений
	// loadBigImg();
	// loadBigBacground();

	// // Вызов функции прижатия футера к низу экрана
	// footerBind('.js-main','.js-header,.js-footer');
	// $(window).on('resize',function(){footerBind('.js-main','.js-header,.js-footer')});
});

// // Загрузка больших изображений
// function loadBigImg() {
// 	var $imgDefer = $('[data-src]');

// 	$imgDefer.each(function(indx, element){
// 		var urlImgBig = $(this).attr("data-src");
// 		$(this).attr("src", urlImgBig);
// 	});
// }

// function loadBigBacground() {
// 	var $imgDefer = $('[data-background]');

// 	$imgDefer.each(function(indx, element){
// 		var urlBackgroundBig = $(this).attr("data-background");
// 		$(this).css("background-image", "url("+ urlBackgroundBig +")");
// 	});
// }