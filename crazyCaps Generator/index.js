const form = document.querySelector(".form-control");
const button = document.querySelector(".btn-primary");

button.addEventListener("click", function () {
	let input = form.value;
	form.value = crazyCaps(input);
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
