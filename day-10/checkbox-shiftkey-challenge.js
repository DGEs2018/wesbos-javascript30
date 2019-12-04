const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
	//check if they had the shift key pressed

	// and check that the checkboxes are being checked
	let inBetween = false;
	if (e.shiftKey && this.checked) {
		console.log(this);
		// proceed

		// loop over each and every of the checkbox
		checkBoxes.forEach((checkbox) => {
			console.log(checkbox);
			if (checkbox === this || checkbox === lastChecked) {
				console.log(this);
				inBetween = !inBetween;
				console.log("Checking what's inbetween!");
			}
			if (inBetween) {
				checkbox.checked = true;
			}
		});
	}

	lastChecked = this;
	// console.log(e);
}

checkBoxes.forEach((checkbox) => checkbox.addEventListener('click', handleCheck));
// let lastChecked;

// const handleCheck = (event) => {
// 	console.log(event);
// 	// check if the shiftKey is down
// 	// and check if boxes are being checked

// 	let inBetween = false;

// 	if (event.shiftKey && this.lastchecked) {
// 		// then if these both are fulfilled

// 		// loop through each box
// 		checkBoxes.forEach((checkbox) => {
// 			console.log(box);

// 			if (checkbox === this || checkbox === lastChecked) {
// 				// what's this line saying exactly ?
// 				inBetween = !inBetween;
// 				console.log('checking them inbetween!');
// 			}
// 			if (inBetween) {
// 				checkbox.checked = true;
// 			}
// 		});
// 	}
// 	lastChecked = this;
// };

// checkBoxes.addEventListener('click', handleCheck);
// checkBoxes.forEach((box) => box.addEventListener('click', handleCheck));
// if (document)
