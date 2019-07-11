let more = document.querySelectorAll('.more');
let acc = document.querySelectorAll('.article');


for (let i = 0; i < more.length; i++) {
	more[i].onclick = function(e) {
		if (!more[i].classList.contains("disabled")) acc[i].classList.toggle("active")
	}
}
