$(function() {

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	//function animated

	$('.logo h1').animated('swing');
	$('.logo h4').animated('zoomIn');
	$('.tel').animated('lightSpeedIn');
	$('.mail').animated('lightSpeedIn');

	var answer= [];
	var flagImg = ['img/buttonFlNO.png', 'img/buttonFlYES.png'];

	$('#flowers ul li .choose ').click(function(){
		$('#flowers ul li .choose img').attr('src', flagImg[0]);
		$(this).children("img").attr('src', flagImg[1]);
		answer[0] = $(this).children('#flowers ul li span').html();
	});

	$('#occasion ul li .choose ').click(function(){
		$('#occasion ul li .choose img').attr('src', flagImg[0]);
		$(this).children("img").attr('src', flagImg[1]);
		answer[1] = $(this).children('#occasion ul li span').html();
	});

	$('#bouquetOption ul li .choose ').click(function(){
		$('#bouquetOption ul li .choose img').attr('src', flagImg[0]);
		$(this).children("img").attr('src', flagImg[1]);
		answer[2] = $(this).children('#bouquetOption ul li span').html();
	});

// навигация
	$('#flowers .prevNext .right img').click(function(){
		$('#flowers').hide(500);
		$('#occasion').show(500);
	});

	$('#occasion .prevNext .left img').click(function(){
		$('#occasion').hide(500);
		$('#flowers').show(500);
	});

	$('#occasion .prevNext .right img').click(function(){
		$('#occasion').hide(500);
		$('#bouquetOption').show(500);
	});

	$('#bouquetOption .prevNext .left img').click(function(){
		$('#bouquetOption').hide(500);
		$('#occasion').show(500);
	});

	$('#bouquetOption .prevNext .right img').click(function(){
		$('#bouquetOption').hide(500);
		$('.fullAnswer').show(500);
		var answerAll = ('Вы выбрали букет ' + answer[2] + ' из ' + answer[0] +' '+ answer[1]+'.');
		$('.textAnswer p').html(answerAll);
	});

	$('.fullAnswer .prevNext .left img').click(function(){
		$('.fullAnswer').hide(500);
		$('#bouquetOption').show(500);
	});

});
