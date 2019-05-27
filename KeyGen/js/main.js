let range = document.querySelector('#param-1'),
	passLengths = document.querySelector('#password-length'),
	numbs = document.querySelector('#param-2'),
	str = document.querySelector('#param-3'),
	letters = document.querySelector('#param-4'),
	char = document.querySelector('#param-5'),
	out = document.querySelector('#out');

let btn = document.querySelector('#generator');


//let checkbox = document.querySelectorAll('input[type="checkbox"]');
let inputs = document.querySelectorAll('input');


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
	arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
	arr3 = ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
	arr4 = ['!', '@', '#', '&', '$'];


range.oninput = function () {
	passLengths.innerHTML = this.value;
}
btn.onclick = generate;

function random(arr) {
	return Math.floor(Math.random() * arr.length);
}

function compareRandom(a, b) {
	return Math.random() - 0.5;
}

function generate() {
	let result = [];
	let pass = '';

	if (numbs.checked) {
		result = result.concat(arr);
	}
	if (str.checked) {
		result = result.concat(arr2);
	}
	if (letters.checked) {
		result = result.concat(arr3);
	}
	if (char.checked) {
		result = result.concat(arr4);
	}

	result.sort(compareRandom);


	for (let i = 0; i < range.value; i++) {
		pass += result[random(result)];
		out.innerHTML = pass;
		//		out.innerHTML = result[random(result)];
	}
	return result;
}
