const sliderView = document.querySelector('#slider-viewport');
const sliderImgList = sliderView.querySelectorAll('li img');


let btnPrev = document.querySelector('.btn-prev');
let btnNext = document.querySelector('.btn-next');


// отключаем стандартное поведение для всех картинок слайдера 
//при выделении и захвате мышью
let imgOff = function () {
	let sliderContainer = document.querySelector('.container');
	let sliderImg = sliderContainer.querySelectorAll('img');

	for (let i = 0; i < sliderImg.length; i++) {
		sliderImg[i].onmousedown = function () {
			return false;
		}
	}
}

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

const navList = document.querySelector('.navigation-list');

// генерация элементов навигации слайдера
function generateNavList() {

	// получаем коллекцию изображений слайдера

	// перебор всех изображений слайдера
	// получаем src каждой картинки
	// создаем элемент навигационного меню слайдера
	for (let i = 0; i < sliderImgList.length; i++) {
		let sliderImgSrc = sliderImgList[i].src;
		const createListItem = createNavItem('li', sliderImgSrc);

		navList.appendChild(createListItem);
	}
	imgOff();
};
generateNavList();

// 
function bindNavWithSlider() {
	const sliderItem = sliderView.querySelectorAll('li');
	const navListLi = navList.querySelectorAll('li');
	//	const navImg = navList.querySelectorAll('li img');

	for (let li of navListLi) {
		li.classList.remove('active');
	}
	this.classList.add('active');

	// перебор каждого элемента слайдера и навигационного бара
	// проверка совпадений по атрибуту data-id и src картинки в основном слайдере
	// применение стилей
	for (let i = 0; i < navListLi.length; i++) {
		if (this.dataset.id == sliderImgList[i].src) {
			sliderItem[i].style.display = 'block';
			setTimeout(function () {
				sliderItem[i].style.opacity = 1;
			}, 400)
		} else {
			sliderItem[i].style.opacity = 0;
			setTimeout(function () {
				sliderItem[i].style.display = 'none';

			}, 400)

		}
	}

};

// TODO: отменить событие если есть класс active;

function click() {
	const li = navList.querySelectorAll('li');

	for (let item of li) {
		if (item.classList.contains('active')) {
			item.removeEventListener('click', bindNavWithSlider);
		} else {
			item.addEventListener('click', bindNavWithSlider);
		}
	}

};
click();

btnPrev.onclick = prev;

function prev(e) {
	e.preventDefault();

}
