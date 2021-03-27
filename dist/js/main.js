

// Detect iOS
	if(navigator.userAgent.indexOf('Mac') > 0)
		$('body').addClass('isIos');

// Burger Menu

$('.burgerBlock').on('click', function(){
	$('.headerMiddle').addClass('isActive')
	$('.drawerBackdrop').addClass('isActive')
$('body').addClass('noScroll')
})

$('.drawerBackdrop').on('click', function(){
	$(this).removeClass('isActive')
	$('.headerMiddle').removeClass('isActive')
$('body').removeClass('noScroll')
})