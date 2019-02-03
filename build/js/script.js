$(document).ready(function(){

	if ($(this).width() < 1600) {
		$('.navbar').hide();
		$('.links').hide();	
		$('menu-btn').show()
	} else {
		$('.navbar').show();
		$('.links').show();
		$('.menu-btn').hide()
	}

	$('.menu-btn').on('click',function(e){
		e.preventDefault();
		$(this).toggleClass('menu-btn_active');
		$('.navbar').slideToggle(400)
		$('.links').slideToggle(400)
	});

    $('.down').on('click',function(event) {
    	event.preventDefault();
    	var id = $(this).attr('href'),
    	top = $(id).offset().top;
    	$('body,html').animate({scrollTop: top}, 1500);
    });
});
