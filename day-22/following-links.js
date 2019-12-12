// Grab all the elements where we want the highlighting to be applied, in this case just the anchor elements
const targets = document.querySelectorAll('a');

// let's create a span element
const highlightsOnHover = document.createElement('span');
// then add a class called 'highlighted' to the target elements
highlightOnHover.classList.add('highlighted');

// and then append the span elements created above to the body (plug it into the DOM)
document.body.appendChild(highlightsOnHover);

//I wonder if document.body.append(highlightsOnHover) achieves the same;

function highlightLink() {
	console.log('highlight working ey ?');
	// now we need to figure out how wide and how high the anchor is

	// const coordinatesOfLinks = this.getBoundingClientRect();
	// console.log(coordinatesOfLinks);
	// highlightsOnHover.style.width = `${coordinatesOfLinks.width}px`;
	// highlightsOnHover.style.height = `${coordinatesOfLinks.height}px`;
	// highlightLink.style.tranform = `translate(${coordinatesOfLinks.left}px, ${coordinatesOfLinks.top}px)`;
}
targets.forEach((anchor) => anchor.addEventListener('mouseenter', highlightLink));
