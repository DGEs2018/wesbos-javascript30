const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition(
	(d) => {
		console.log(d);
		speed.textContent = Math.round(d.coords.speed);
		// arrow.style.transform = `rotate(20deg)`;
		arrow.style.transform = `rotate(${d.coords.heading}deg)`;
	},
	(err) => {
		console.err(msg);
		alert('Hey, you need to allow the device to pick the location your area !');
	}
);
