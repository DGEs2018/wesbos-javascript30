const allInputs = document.querySelectorAll('.controls input');

function handleUpdate() {
	console.log(this.value);

	const suffix = this.dataset;
}

allInputs.forEach((input) => input.addEventListener('change', handleUpdate));
