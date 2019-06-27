const container = document.querySelector('#container');
const btns = document.querySelector('.btn-group');
const menu = document.querySelector('#menu');
const range = document.querySelector('#range');

let unsorted = [];

// Создать элемент с присвоенными атрибутами
function createElement(tag, props) {
	let element = document.createElement(tag);

	Object.keys(props).forEach(key => {
		element.setAttribute(key, props[key]);
		if (element.getAttribute(key) == props[key]);
	});
	return element;
};

// отслеживание изменений input
range.oninput = function () {
	const counter = document.querySelector('#counter');

	let count = this.value;

	counter.innerHTML = count;
	if (count > 0 && count <= 6) {
		counter.style.color = 'rgb(247, 63, 63)';
	} else if (count > 6 && count <= 14) {
		counter.style.color = 'rgb(172, 0, 0)';
	} else if (count > 14) counter.style.color = 'rgb(94, 211, 148)';
	else counter.style.color = 'rgba(50,50,50,.3)';
}

function compare(a, b) {
	return a - b;
};
// Сгенерировать массив случайных чисел заданной длиной в input
function generateArray() {
	let generateArray = [];
	let random = Math.floor(Math.random() * range.value);
	for (let i = 0; i < range.value; i++) {
		generateArray.push(Math.floor(Math.random() * range.value) + 1)
	}
	generateArray.sort(compareRandom)
	unsorted = generateArray;

	return unsorted;
};

// область значений от -0.5 до 0.5
function compareRandom(a, b) {
	return Math.random() - 0.5;
}

// Создание элемента на основе длинны массива
const createGraph = () => {
	let graph = createElement('ul', {
		id: 'graph'
	})

	if (!unsorted.length) return alert('Массив должен содержать элементы');

	unsorted.forEach((num, i) => {
		let graphItem = createElement('li', {
			'data-value': num
		});

		graphItem.textContent = num;
		graphItem.style.height = num * 10 + 'px';

		graph.appendChild(graphItem);
	});
	return graph;
};

// Добавление созданного Элемента 
const renderGraph = () => {
	const box = document.querySelector('#box');
	// если элемент уже создан, заменяем его на заного сгенерированный, в противном случае создаем.
	box.firstElementChild ? box.replaceChild(createGraph(), box.firstElementChild) : box.appendChild(createGraph());
};

function swap(current, next) {
	let count = 32;
	let currentClone = current.cloneNode(true);
	let nextClone = current.nextElementSibling.cloneNode(true);
	current.classList.add('swapped');
	next.classList.add('swapped');

	console.log(current, next);
	current.parentElement.replaceChild(current, next);
	current.before(nextClone);
	console.log(current, next);
	//	current.style.transform = `translateX(${count}px)`;
	//	next.style.transform = `translateX(-32px)`;
	//	[current, next] = [next, current];
	//	current.classList.remove('swapped');
	//	next.classList.remove('swapped');
};


function graphSort() {
	let graph = [...document.querySelector('#graph').children];
	let swapped;
	let endI = graph.length - 1;

	let bubbleSort = () => {
		swapped = false;
		for (let i = 0, j = 1; i < endI; i++, j++) {
			let current = graph[i];
			let next = graph[j];
			let currVal = +current.dataset.value;
			let nextVal = +next.dataset.value;

			if (currVal > nextVal) {
				swapped = true;
				setTimeout(() => swap(current, next), 0);
			}
			endI--;
		}
	};
	do {
		bubbleSort();
	} while (swapped);
};
// Сортировка массива.
//const bubbleSort = arr => {
//	let endI = arr.length - 1;
//	for (let i = 0; i < endI; i++) {
//		let swapped = false;
//
//		for (let j = 0, endJ = endI - i; j < endJ; j++) {
//			if (arr[j] > arr[j + 1]) {
//				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//				swapped = true;
//			}
//		}
//		if (!swapped) break;
//	}
//	return arr;
//}

btns.addEventListener('click', (e) => {
	e.preventDefault;
	const btnSort = document.querySelector('#btn-sort');
	const btnGenerate = document.querySelector('#btn-generate');

	let target = e.target;
	if (target == btnSort) {
		//		bubbleSort(unsorted);
		graphSort();
	}
	if (target == btnGenerate) {
		generateArray();
		renderGraph();
	}
});

///
let fade = {
	fade_in_from: 0,
	fade_out_from: 10
}

function hide(elem) {
	let target = elem;
	let newSetting = fade.fade_out_from / 10;
	target.style.opacity = newSetting;
	fade.fade_out_from--;

	if (fade.fade_out_from == 0) {
		target.style.opacity = 0;
		target.style.display = 'none';

		clearTimeout(loopTimer);

		fade.fade_out_from = 10;
		return false;
	}
	console.log(target.style);
	let loopTimer = setTimeout(hide(target), 50);
};

function show(elem) {
	let target = elem;

	target.style.display = 'block';
	let newSettings = fade.fade_in_from / 10;
	target.style.opacity = newSettings;
	fade.fade_in_from++;

	if (fade.fade_in_from == 10) {
		target.style.opacity = 1;

		clearTimeout(loopTimer);

		fade.fade_in_from = 0;
		return false;
	}
	let loopTimer = setTimeout(show(target), 50);
};
