// Для MVVM, реактивности и анимаций я использовал Vue - https://vuejs.org/
// Инструкции на https://introjs.com
// Вёрстка на UIKit https://getuikit.com
// И, для вспомогательных функций, Lodash https://lodash.com/ 

const app = new Vue({
	el: '#container',
	data: {
		unsorted: [],
		counter: 0,
		swapped: false,
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
			let compareTwo = bubbleSort(this.unsorted);

			let timerID = setTimeout(function recursiveCompare() {
				// генератор проверяет следующую пару чисел и возвращает статус
				let status = compareTwo.next()
				if (status.done) {
					// останавливаем процесс, если итераций больше не осталось
					clearInterval(timerID)
					console.log('Сортировка закончена')
				} else {
					timerID = setTimeout(recursiveCompare, 210)
				}
			}, 210)

		},
	}
})

function* bubbleSort(array) {
	let swapped;
	// цикл проходов, количество проходов уменьшается с каждой итерацией
	for (let iterations = array.length; iterations > 0; iterations--) {
		swapped = false;
		for (let i = 0; i < iterations - 1; i++) {

			let current = array[i];
			let next = array[i + 1];

			if (current.value == next.value || current.value < next.value) {
				current.status = false;
				//				next.status = false;
			}
			// если первое число больше второго, меняем их местами
			if (current.value > next.value) {
				swapped = true;
				current.status = true;
				next.status = true;
				// используем Vue.set, иначе замена не реактивная
				Vue.set(array, i, next);
				Vue.set(array, i + 1, current);
			}

			yield current + " " + next;
		}
		//		if (!swapped) break;
	}
}
