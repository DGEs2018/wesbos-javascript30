// grab the second-hand element
const secondHand = document.querySelector('second-hand');

// grab the minute-hand element
const minuteHand = document.querySelector('minute-hand');

// grab the hour-hand element
const hourHand = document.querySelector('hour-hand');

function setDate() {
	// console.log('check to see if this works ?!');

	const now = new Date();

	const seconds = now.getSeconds(); // returns the seconds for the specified date, according to local time
	console.log(seconds);
	const secondsDegrees = seconds / 60 * 360; // converts seconds to degrees
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

	const mins = now.getMinutes(); // returns the minute in  the specified date according to local time
	const minsDegrees = mins / 60 * 360; // converts minutes to degrees
	minuteHand.style.transform = `rotate(${minsDegrees}deg)`;

	const hours = now.getHours(); // returns the hour for the specified date, according to local time
	const hourDegrees = hours / 12 * 360; // converts hours to degrees
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
