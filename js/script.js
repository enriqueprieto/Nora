$(document).ready(function(){
	var main = $('.page-main').offset().top;
	if($(window).scrollTop() >= main){
		$('.page-map-links').css({'position' : 'fixed', 'top' : '40px'});
	}else{
		$('.page-map-links').css({'position' : 'initial', 'top' : 'initial'});
	}
	$(window).on('scroll', function(){
		if($(window).scrollTop() >= main){
			$('.page-map-links').css({'position' : 'fixed', 'top' : '40px'});
		}else{
			$('.page-map-links').css({'position' : 'initial', 'top' : 'initial'});
		}
	});
});