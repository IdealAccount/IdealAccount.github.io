$(document).ready(function() {

	$('#nav').click(function() {
		let gamburger = $('#gamburger');
		gamburger.toggleClass('open');
	});

	$('#contact-nav').click(function() {
		let gamburger = $('#contact-gamburger');
		gamburger.toggleClass('open');
	});


	$('#btn-up').click(function() {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top + 'px'
		}, {
			duration: 500,
			easing: 'swing'
		})
	
	});
	$('#nav .nav-menu__item .nav-menu__link').click(function() {
		event.preventDefault();
		let selected = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(selected).offset().top + 'px'
		}, {
			duration: 500,
			easing: 'swing'
		})
	});

	//category tabs

	let category = $('.category-list__item');

	category.on('click', function() {
		$(this).addClass('open');
		if($(this).hasClass('open')) {
			category.not(this).removeClass('open');
		}
	});




});