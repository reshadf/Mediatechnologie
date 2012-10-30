$(document).ready(function() {

	/* This is basic - uses default settings */
	
	/* Using custom settings */
	
	$("a.frame").fancybox({
		'type' : 'iframe',
		'width'  : 9000,
		'height' : 9000,
		'scrolling' : 'yes',
		'overlayOpacity' : 0.6,
		'overlayColor' : '#000'
	});

	$("a.frame").trigger('click');

	$('#fancybox-wrap').width(auto);

	//$('#fancybox-wrap').css("top", "70px");
	
	//$('#fancybox-wrap').css('left','350' +'px'); 

});