const sliderView = document.querySelector('#slider-viewport');
const sliderItemList = [...sliderView.querySelectorAll('li')];
const sliderImgList = [...sliderView.querySelectorAll('li img')];
const nav = document.querySelector('.navigation-list');

let btnPrev = document.querySelector('.btn-prev');
let btnNext = document.querySelector('.btn-next');



//click();


// отключаем стандартное поведение для всех картинок слайдера 
//при выделении и захвате мышью
function imgOff() {
	let sliderImg = [...document.querySelectorAll('.container img')];
	sliderImg.forEach(item => item.onmousedown = () => false)
};
// создать элемент в навигации меню с картинкой 
//	соответствующей изображению слайдера
function createNavItem(tag, src) {
	const navElementLi = document.createElement(tag);
	const navElementImg = document.createElement('img');

	navElementLi.setAttribute('data-id', src);

	navElementLi.className = 'navigation-item';

	navElementImg.src = src;

	navElementLi.appendChild(navElementImg);

	return navElementLi;
};


// генерация элементов навигации слайдера
function generateNavList() {
	// перебор всех изображений слайдера
	// получаем src каждой картинки
	// создаем элемент навигационного меню слайдера
	sliderImgList.forEach(img => {
		const createListItem = createNavItem('li', img.src);
		nav.appendChild(createListItem);
	})
	// отключаем действия по умолчанию для картинок слайдера
	imgOff();

};
generateNavList();
const navItemList = nav.querySelectorAll('.navigation-item');

let current = 0;

function slide(num) {
	let offset = navItemList[0].offsetWidth;

	let target = event.target;
	let isDisabled = true;
	console.log(offset);

	// получение и изменение ширины при изменении размера окна браузера
	window.onresize = () => offset;

	if (num) {
		if (current === -1216) target.disabled = isDisabled;
		current -= offset;
		nav.style.transform = 'translateX(' + current + 'px)';

		btnPrev.disabled = !isDisabled;
	} else {
		if (current >= 0) target.disabled = isDisabled;
		current += offset;
		nav.style.transform = 'translateX(' + current + 'px)';


		btnNext.disabled = !isDisabled;
	}
}

//const sliderView = document.querySelector('#slider-viewport');
//const sliderItemList = [...sliderView.querySelectorAll('li')];
//const sliderImgList = [...sliderView.querySelectorAll('li img')];
//const nav = document.querySelector('.navigation-list');
//const navItemList = nav.querySelectorAll('.navigation-item');
//
//
//let btnPrev = document.querySelector('.btn-prev');
//let btnNext = document.querySelector('.btn-next');


//let current = 0;
//
//function slide(num) {
//	let offset = navItemList[0].offsetWidth;
//
//	let target = event.target;
//	let isDisabled = true;
//	console.log(offset);
//
//	// получение и изменение ширины при изменении размера окна браузера
//	window.onresize = () => offset;
//
//	if (num) {
//		if (current === -1216) target.disabled = isDisabled;
//		current -= offset;
//		nav.style.transform = 'translateX(' + current + 'px)';
//
//		btnPrev.disabled = !isDisabled;
//	} else {
//		if (current >= 0) target.disabled = isDisabled;
//		current += offset;
//		nav.style.transform = 'translateX(' + current + 'px)';
//
//
//		btnNext.disabled = !isDisabled;
//	}
//}





function bindNavWithSlider() {
	for (let navItem of navItemList) {
		navItem.classList.remove('active');
	}
	this.classList.add('active');

	// перебор каждого элемента слайдера и навигационного бара
	// проверка совпадений по атрибуту data-id и src картинки в основном слайдере
	// применение стилей
	sliderItemList.forEach((sliderItem, i) => {
		let imgSrc = sliderImgList[i].src;
		if (this.dataset.id === imgSrc) {
			setTimeout(() => sliderItem.style.opacity = 1, 200)
			sliderItem.style.display = 'block';

		} else {
			sliderItem.style.opacity = 0;
			setTimeout(() => sliderItem.style.display = 'none', 400)
		}
	})
};

// TODO: отменить событие если есть класс active;

function click() {
	for (let item of navItemList) {
		item.classList.remove('active');
		this.classList.add('active');
	}
	sliderItemList.forEach((sliderItem, i) => {
		let imgSrc = sliderImgList[i].src;
		if (this.dataset.id === imgSrc) {
			setTimeout(() => sliderItem.style.opacity = 1, 200)
			sliderItem.style.display = 'block';

		} else {
			sliderItem.style.opacity = 0;
			setTimeout(() => sliderItem.style.display = 'none', 400)
		}
	})
};

function add() {
	for (let navItem of navItemList) {
		navItem.addEventListener('click', click);
	}
};
add();
