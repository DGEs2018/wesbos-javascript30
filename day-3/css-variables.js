const allInputs = document.querySelectorAll('.controls input');

function handleUpdate() {
	// console.log(this.value);
	const suffix = this.dataset.sizing || '';
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
	console.log(this.name);
	console.log(document.documentElement);
	console.log(document);
	console.log(this.dataset);
}

allInputs.forEach((input) => input.addEventListener('change', handleUpdate));
allInputs.forEach((input) => input.addEventListener('mousemove', handleUpdate));
