const timeNodes = document.querySelectorAll('.data-time');

const timeNodesInArray = [ ...timeNodes ]; // either this or the one below return the same value

const timeNodesAlternative = Array.from(document.querySelectorAll('.data-time'));

const secondsSeparately = timeNodesInArray.map((node) => node.dataset.time).map((time) => {
	const [ minutes, seconds ] = time.split(':');
	return mins * 60 + seconds;
	console.log(minutes, seconds);
});
