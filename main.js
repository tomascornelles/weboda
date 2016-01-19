var componer = function() {
	if ($(window).height() > $(window).width()) {
		$('.ver').addClass('hor').removeClass('ver');
	} else {
		$('.hor').addClass('ver').removeClass('hor');
	}
}

var siguiente = function() {
	$('html, body').animate({
		scrollTop: $(window).scrollTop() + $(window).height()
	}, 500);
}

$(window).on('resize', function(){
    componer();
});

$('.siguiente').on('click', function() {
	siguiente();
});

componer();