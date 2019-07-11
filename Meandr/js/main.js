function validate() {
	let userName = document.querySelector('#userName'),
		  userMail = document.querySelector('#userMail'),
		  userTel = document.querySelector('#userTel'),
		  comments = document.querySelector('#comments');


	if (!userName.value) {
		userName.style.border = "2px solid red";
		return false;
	}
	if (!userMail.value) {
		userMail.style.border = "2px solid red";
		return false;
	}
	if (!userTel.value) {
		userTel.style.border = "2px solid red";
		return false;
	}
	return true;
}

validate();
