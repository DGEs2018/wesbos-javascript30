const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

const handleCheck = (event) => {
	console.log(event);
	// check if the shiftKey is down
	// and check if boxes are being checked

	let inBetween = false;

	if (event.shiftKey && this.lastchecked) {
		// then if these both are fulfilled

		// loop through each box
		checkBoxes.forEach((checkbox) => {
			console.log(box);

			if (checkbox === this || checkbox === lastChecked) {
				// what's this line saying exactly ?
				inBetween = !inBetween;
				console.log('checking them inbetween!');
			}
			if (inBetween) {
				checkbox.checked = true;
			}
		});
	}
	lastChecked = this;
};

// checkBoxes.addEventListener('click', handleCheck);
checkBoxes.forEach((box) => box.addEventListener('click', handleCheck));
// if (document)
