var componer = function() {
	if ($(window).height() > $(window).width()) {
		$('.izq').addClass('top').removeClass('izq');
		$('.der').addClass('bottom').removeClass('der');
	} else {
		$('.top').addClass('izq').removeClass('top');
		$('.bottom').addClass('der').removeClass('bottom');
	}
}


$(window).on('resize', function(){
    componer();
  });

componer();