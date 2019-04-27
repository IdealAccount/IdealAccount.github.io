let burger = document.querySelector('#burger');
let slide_menu = document.querySelector('#menu');
let slide_menu_item = document.querySelectorAll('.menu__item');

burger.addEventListener('click', function() {
	this.classList.toggle('is-active');
	this.classList.contains('is-active') ? slide_menu.style.transform = 'translateY(0)' :
																				 slide_menu.style.transform = 'translateY(-100%)';
																				 console.log(slide_menu_item);

	// for (let i = 0; i < slide_menu_item.length; i++) {
	// 	if(this.classList.contains('is-active')) {
	// 		slide_menu_item[0].style.opacity = 1
	// 	} else {
	// 		slide_menu_item[0].style.opacity = 0;
	// 	}
	// }
});