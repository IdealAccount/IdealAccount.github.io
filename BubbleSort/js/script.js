const app = new Vue({
	el: '#container',
	data: {
		unsorted: [],
		counter: 10,
		howFast: '',
		sortingSpeed: 250,
		hidden: true,
		isShow: false,
		time: 0,
	},

	mounted() {
		this.createNumbers();
		this.shuffleArray();
		this.setSpeed();
	},
	computed: {
		show_hidden() {
			return {
				active: this.isShow,
				hidden: !this.isShow
			}
		},
	},
	methods: {
		close({
			target
		}) {
			let popup = document.querySelector('#popup');

			if (target == popup.firstElementChild || target !== popup) {
				this.isShow = false;
			}
		},
		// Указываем длину элементов
		createNumbers() {
			let graphSize = document.querySelector('#graph-size');
			let countBox = document.querySelector('#counter');

			this.counter = graphSize.value;
			let count = this.counter;

			if (count >= 2 && count <= 6) {
				countBox.style.color = 'rgb(247, 63, 63)';
			} else if (count > 6 && count <= 14) {
				countBox.style.color = 'rgb(172, 0, 0)';
			} else if (count > 14) countBox.style.color = 'rgb(94, 211, 148)';
			else countBox.style.color = 'rgba(50,50,50,.3)';
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
		// Устанавить скорость выполнения сортировки
		setSpeed() {
			let speedInput = document.querySelector('#speed-input');
			let speedCount = speedInput.previousElementSibling;
			this.sortingSpeed = Math.round(speedInput.value / 10) * 10;
			let speed = this.sortingSpeed;

			if (speed <= 200) {
				speedCount.style.color = 'rgb(7, 255, 245)';
				this.howFast = 'Very fast';
			}
			if (speed > 200 && speed <= 400) {
				speedCount.style.color = 'rgb(88, 234, 23)';
				this.howFast = 'Quickly';
			}

			if (speed > 400 && speed <= 700) {
				speedCount.style.color = 'rgba(255, 165, 0, 0.88)';
				this.howFast = 'Normal speed';
			}
			if (speed > 700) {
				speedCount.style.color = 'rgb(222, 20, 27)';
				this.howFast = 'Slowly';
			}
		},
		startSort() {
			let start, finish;
			start = Date.now();
			// для удобного управления функцией поместим ее в переменную
			let compare = bubbleSort(this.unsorted);

			let timer = setTimeout(function recursiveCompare() {

				// генератор проверяет следующую пару чисел и возвращает статус
				let status = compare.next();

				if (status.done) {
					// показываем высплывающее окно
					app.isShow = true;
					// остановить процесс, если итераций больше не осталось
					clearTimeout(timer);

					// время остановки сортировки в миллисекундах
					finish = Date.now();

					// переводим в секунды разницу в миллисекундах с момента начала сортировки и завершением
					app.time = Math.floor((finish - start) / 1000);
				} else {
					timer = setTimeout(recursiveCompare, app.sortingSpeed);
				}
			}, app.sortingSpeed);
		},
	}
})

function* bubbleSort(arr) {
	// цикл проходов, количество проходов уменьшается с каждой итерацией
	for (let iterations = arr.length; iterations > 0; iterations--) {
		// убираем класс active у всех элементов
		for (let i = 0; i < iterations - 1; i++) {
			arr.forEach(item => {
				if (item.status) Vue.set(item, 'status', false);
			})
			let current = arr[i];
			let next = arr[i + 1];

			// если current.value > next.value, меняем их местами
			if (current.value > next.value) {
				current.status = true;
				next.status = true;
				// используем Vue.set, для реактивной замены
				Vue.set(arr, i, next);
				Vue.set(arr, i + 1, current);
			}
			yield `${current} ${next}`;
		}
	}
}
