$(document).ready(function() {
	
	function scrollbarWidth() {
    	var block = $('<div>').css({'height':'50px','width':'50px'}),
        	indicator = $('<div>').css({'height':'200px'});

    	$('body').append(block.append(indicator));
    	var w1 = $('div', block).innerWidth();    
    	block.css('overflow-y', 'scroll');
    	var w2 = $('div', block).innerWidth();
    	$(block).remove();
    	return (w1 - w2);
	}

	var centerBlockW = function () {

		var leftBlock = $('.block1').width(),
			centerBlock = $('.block2').width(),
			rightBlock = $('.block3').width(),
			centerBlockWidth = $(window).width() - leftBlock - rightBlock - 20;

			$('.block2').css('width', centerBlockWidth);
	};

	var adaptMenuWith = function () {
		$('.main_menu').css('width', '150');
	};

	var headerCentred = function() {
		var cord = $('.help_btn').width(),
		logoBlock = $('.logo').width(),
		mainMenuWidth = $(window).width() - cord - logoBlock - 30;
		$('.main_menu').css('width', mainMenuWidth);			
	};

	var resizeTransit = function() {
		$('.main_menu').css('transition', 'none');
	};

	$('.toggle_mnu').click(function() {
		$('.main_menu').css('transition', '');
		$('.sandwich').toggleClass("active");
		$('.main_menu').toggleClass('open_mnu');
		$('.wrapper').toggleClass('open_wrapper');
	});

	$('.box').click(function(event) {
		$(this).toggleClass('box_color');
	});

	$(window).resize(function(event) {
		
		resizeTransit();
		
		if($(window).width() >= 733) {
			headerCentred();
			centerBlockW();
		} else {
			if($(window).width() < 733){
				adaptMenuWith();
				$('.block2').css('width', '100%');
			}
		}
	});

	if ($(window).width() < 733) {
		adaptMenuWith();
	} else if ($(window).width() === 733) {
		headerCentred();
		centerBlockW();
	} else {
		headerCentred();
		centerBlockW();
	}
});

$(window).load(function() {
	var bheight = function() {
	    var block3Height = $('.block2').height();
		$('.block3').css('min-height', block3Height);
	};
	$(window).resize(function() {
		if ($(window).width() > 733){
			bheight();
		} else {
			if($(window).width() < 733) {
				$('.block3').css('min-height', '');
			}
		};
	});
	if ($(window).width() > 733){
		bheight();
	} 
});

