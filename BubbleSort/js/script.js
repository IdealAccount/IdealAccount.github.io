// Для MVVM, реактивности и анимаций я использовал Vue - https://vuejs.org/
// Инструкции на https://introjs.com
// Вёрстка на UIKit https://getuikit.com
// И, для вспомогательных функций, Lodash https://lodash.com/ 

const app = new Vue({
	el: '#container',
	data: {
		unsorted: [],
		counter: 0,
		swapped: undefined,
		sortingSpeed: 500
	},
	methods: {
		createNumbers() {
			let range = document.querySelector('#range');
			let counter = document.querySelector('#counter');

			this.counter = range.value;

			if (this.counter >= 1 && this.counter <= 6) {
				counter.style.color = 'rgb(247, 63, 63)';
			} else if (this.counter > 6 && this.counter <= 14) {
				counter.style.color = 'rgb(172, 0, 0)';
			} else if (this.counter > 14) counter.style.color = 'rgb(94, 211, 148)';
			else counter.style.color = 'rgba(50,50,50,.3)';
		},
		shuffleArray() {
			let shuffledArr = [];
			// функция для перемешивания чисел на Lodash, чтобы их потом сортировать
			for (let i = 0; i < this.counter; i++) {
				let random = Math.floor(Math.random() * this.counter) + 1;

				shuffledArr.push({
					data: `height: ${random * 10}px`,
					value: random,
					status: false
				});

				this.unsorted = shuffledArr;
			}
		},
		startSort() {
			let compare = bubbleSort(this.unsorted);

			let timer = setTimeout(function recursiveCompare() {
				// генератор проверяет следующую пару чисел и возвращает статус
				let status = compare.next();

				if (status.done) {
					// останавливаем процесс, если итераций больше не осталось
					clearInterval(timer)
					console.log('Сортировка закончена')
				} else {
					timer = setTimeout(recursiveCompare, app.sortingSpeed)
				}
			}, app.sortingSpeed)

		},
	}
})

function* bubbleSort(arr) {
	// цикл проходов, количество проходов уменьшается с каждой итерацией
	for (let iterations = arr.length; iterations > 0; iterations--) {
		app.swapped = false;
		for (let i = 0; i < iterations - 1; i++) {
			arr.forEach((item) => {
				if (item.status) Vue.set(item, 'status', false);
			})
			let current = arr[i];
			let next = arr[i + 1];

			// если первое число больше второго, меняем их местами
			if (current.value > next.value) {
				app.swapped = true;
				current.status = true;
				next.status = true;
				// используем Vue.set, иначе замена не реактивная
				Vue.set(arr, i, next);
				Vue.set(arr, i + 1, current);
			}

			yield current + " " + next;
		}
		//		if (!swapped) break;
	}
}
