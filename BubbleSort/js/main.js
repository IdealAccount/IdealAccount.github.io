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

// Сгенерировать массив случайных чисел заданной длиной в input
function generateArray() {
	let array = [];
	for (let i = 0; i < range.value; i++) {
		array.push(Math.floor(Math.random() * range.value) + 1)
	}
	unsorted = array;
	return unsorted;
};


// Создание элемента на основе длинны массива
const createGraph = () => {
	let graph = createElement('ul', {id:'graph'})
	
	if (!unsorted.length) return alert('Массив должен содержать элементы');
	
	unsorted.forEach((num, i) => {
		let graphItem = createElement('li', {
			'data-id': i
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
//	[current.style.height, next.style.height] = [next.offsetHeight, current.offsetHeight]
	let offset = current.offsetWidth;
	current.style.transform = `translateX(${offset}px)`;
	next.style.transform = `translateX(${offset}px)`;
};

function graphSort() {
	let graph = [...document.querySelector('#graph').children];
	
	for (let i = 0, endI = graph.length - 1;  i < endI; i++) {
		let swapped = false;
		for (let j = 0, endJ = endI - i; j < endJ; j++ ) {
			let currHeight, nextHeight;
			currHeight = graph[j].offsetHeight;
			nextHeight = graph[j + 1].offsetHeight;
			if (currHeight > nextHeight) {
				swap(graph[j], graph[j+1]);
				swapped = true;
			}
		}
		if (!swapped) break;
	}
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
		bubbleSort(unsorted);
		graphSort();
		console.log(unsorted);
	}
	if (target == btnGenerate) {
		generateArray();
		renderGraph();
	}
});

