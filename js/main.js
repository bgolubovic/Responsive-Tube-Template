$(function() {
	FastClick.attach(document.body);
	footerBottom();
	$(window).on('resize', function() {
		footerBottom();
	});
	$('.collapse-category.collapse').collapse({
		'toggle': false
	});
	$('#navbar').on('hidden.bs.collapse', function() {
		$('.collapse-category.collapse').collapse('hide');
	})
	$('.swipe').on('shown.bs.collapse', function() {
		var $this = $(this);
		$("body").swipe("enable");
	});
	$("body").swipe({
		swipeUp: function(event, direction, distance, duration, fingerCount) {
			var $this = $(this);
			$('.swipe.in').collapse('hide');
			$("body").swipe("disable");
		},
		allowPageScroll: 'none',
		excludedElements: ''
	});
	$("body").swipe("disable");
	function footerBottom() {
		var footerHeiht = $('.footer').outerHeight();
		$('.main').css('padding-bottom', footerHeiht + 10);
	}
});