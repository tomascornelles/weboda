var componer = function() {
	if ($(window).height() > $(window).width()) {
		$('.ver').addClass('hor').removeClass('ver');
	} else {
		$('.hor').addClass('ver').removeClass('hor');
	}
}


$(window).on('resize', function(){
    componer();
  });

componer();