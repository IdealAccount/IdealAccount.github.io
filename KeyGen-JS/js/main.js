let range = document.querySelector('#param-1'),
	passLengths = document.querySelector('#password-length'),
	numbs = document.querySelector('#param-2'),
	str = document.querySelector('#param-3'),
	letters = document.querySelector('#param-4'),
	char = document.querySelector('#param-5'),
	out = document.querySelector('#out');

let btn = document.querySelector('#generator');


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
	arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
	arr3 = ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
	arr4 = ['!', '@', '#', '&', '$', '*', '/', '-', '_', ')', '^', '%', '№'];


range.oninput = function () {
	passLengths.innerHTML = this.value;
}

generate();

btn.onclick = generate;


// генерируем рандомное число относительно длины массива.
function random(arr) {
	return Math.floor(Math.random() * arr.length);
}

// область значений от -0.5 до 0.5
function compareRandom(a, b) {
	return Math.random() - 0.5;
}

// функция генерации пароля
function generate() {
	let result = [];
	let rand;

	// включены ли цифры
	if (numbs.checked) {
		result = result.concat(arr);
	}
	//	включены ли строчные
	if (str.checked) {
		result = result.concat(arr2);
	}
	//	включены ли прописные
	if (letters.checked) {
		result = result.concat(arr3);
	}
	//	включены ли символы
	if (char.checked) {
		result = result.concat(arr4);
	}

	// сортируем массив в разнобой
	result.sort(compareRandom);

	// генерируем код длиной равный значению ползунка
	// каждую итерацию rand равен рандомному числу в диапозоне от 0 до значения длины переданного в функцию массива
	// в переменной pass формируется строка из массива, где rand(рандомное число этого же массива) используется как индекс
	out.innerHTML = '';

	for (let j = 0; j < 6; j++) {
		let pass = '';
		for (let i = 0; i < range.value; i++) {
			rand = random(result);
			pass += result[rand];
		}
		out.innerHTML += '<p>' + pass + '</p>';

	}

	//	вывод генерированного пароля
	//	return pass;

}
