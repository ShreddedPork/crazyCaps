const form = document.querySelector(".form-control");
const transformButton = document.querySelector(".btn-primary");
const copyButton = document.querySelector(".btn-danger");

transformButton.addEventListener("click", function () {
	let input = form.value;
	form.value = crazyCaps(input);
});

copyButton.addEventListener("click", function () {
	myFunction();
});

function crazyCaps(input) {
	let output = "";
	for (let i = 0; i < input.length; i++) {
		if (i % 2 !== 0) {
			output += input[i].toUpperCase();
		} else {
			output += input[i].toLowerCase();
		}
	}
	return output;
}

function myFunction() {
	var copyText = document.querySelector(".form-control");
	copyText.select();
	document.execCommand("copy");
}
