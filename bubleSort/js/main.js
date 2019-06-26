const container = document.querySelector('#container');
const btnSort = document.querySelector('#btn-sort');
const btnGenerate = document.querySelector('#btn-generate');
const menu = document.querySelector('#menu');
const range = document.querySelector('#range');
const counter = document.querySelector('#counter');

let unsorted = [];


function createElement(tag, props) {
	let element = document.createElement(tag);

	Object.keys(props).forEach(key => {
		element.setAttribute(key, props[key]);
		if (element.getAttribute(key) == props[key]);
	});

	return element;
};

range.oninput = function () {
	let count = this.value;

	counter.innerHTML = count;
	if (count > 0 && count <= 8) {
		counter.style.color = 'rgb(247, 63, 63)';
	} else if (count > 8 && count <= 16) {
		counter.style.color = 'rgb(94, 211, 148)';
	} else counter.style.color = 'rgb(0, 255, 157)';
}

function generateArray() {
	let array = [];
	for (let i = 0; i < range.value; i++) {
		array.push(Math.floor(Math.random() * range.value) + 1)
	}
	unsorted = array;
	return unsorted;
};
console.log(unsorted);
//const renderArr = arr => {
//	let menu = createElement('ul', {
//		'id': 'menu'
//	});
//	if (!arr.length) alert('Массив должен содержать элементы');
//	arr.forEach((num, i) => {
//
//		let menuItem = createElement('li', {
//			'data-id': i
//		});
//
//		menuItem.textContent = num;
//		menuItem.style.height = num * 10 + 'px';
//
//		if (num <= 0) menuItem.className = 'reverse';
//
//		menu.appendChild(menuItem);
//	});
//	container.appendChild(menu);
//
//
//	//	return menu;
//};
function renderArr() {
	let menu = createElement('ul', {
		'id': 'menu'
	});
	if (!unsorted.length) alert('Массив должен содержать элементы');
	unsorted.forEach((num, i) => {

		let menuItem = createElement('li', {
			'data-id': i
		});

		menuItem.textContent = num;
		menuItem.style.height = num * 10 + 'px';

		if (num <= 0) menuItem.className = 'reverse';

		menu.appendChild(menuItem);
	});
	container.appendChild(menu);
	//	return menu;
};

btnGenerate.addEventListener('click', generateArray);
btnGenerate.addEventListener('click', renderArr);

const bubbleSort = arr => {
	let endI = arr.length - 1;
	for (let i = 0; i < endI; i++) {
		let swapped = false;

		for (let j = 0, endJ = endI - i; j < endJ; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				swapped = true;
			}
		}
		if (!swapped) break;
	}
	return arr;
}

btnSort.addEventListener('click', (e) => {
	e.preventDefault();

	bubbleSort(unsorted);
	console.log(unsorted);
	//	console.log(unsorted);
	//	for (let i = 0; i < )
})
