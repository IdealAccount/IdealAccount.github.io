let gamburger = document.getElementsByClassName('header-menu__gamburger')[0],
		menu = document.getElementsByClassName('header-menu__gmenu-text')[0],
		gmenu = document.getElementsByClassName('header-menu__gmenu-icon')[0],
		slide_menu = document.getElementsByClassName('slide-menu')[0];

menu.addEventListener('click', function() {
	gamburger.classList.toggle('open');
	if(gamburger.classList.contains('open')) {
		gamburger.classList.remove('close');
		slide_menu.style.transform = 'translateX(0)';
		menu.style.opacity = 1;
	} else {
		gamburger.classList.add('close');
		menu.style.opacity = .5;
		slide_menu.style.transform = 'translateX(-100%)';
	}
});

gamburger.addEventListener('click', function() {
	this.classList.toggle('open');
	if(this.classList.contains('open')) {
		this.classList.remove('close');
		slide_menu.style.transform = 'translateX(0)';
	} else {
		this.classList.add('close');
		slide_menu.style.transform = 'translateX(-100%)';
	}
});