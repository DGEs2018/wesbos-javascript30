// grab all the elements with the class panel
const panels = document.querySelectorAll('.panel');

function onToggleOpen() {
	console.log('Hello');
	this.classList.toggle('open');
	console.log(this);
}

function toggleActive(event) {
	console.log(event.propertyName);
	// this.classList.toggle(open-active);
	if (event.propertyName.includes('flex')) {
		this.classList.toggle('open-active');
	}
}
panels.forEach((panel) => panel.addEventListener('click', onToggleOpen));
panels.forEach((panel) => panel.addEventListener('transitionend', toggleActive));
