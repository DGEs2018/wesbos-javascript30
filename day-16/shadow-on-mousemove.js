const hero = document.querySelector('.hero');

const text = hero.querySelector('h1');
const walk = 100; // l00px

function shadow(e) {
	// console.log(e);
	const { offsetWidth: width, offsetHeight: height } = hero;
	let { offsetX: x, offsetY: y } = e;

	if (this !== e.target) {
		x = x + e.target.offsetLeft; // dealing with x and y, is something to look into
		x = y + e.target.offsetTop; // this here is the best fix we could get
	}

	const xWalk = Math.round(x / width * walk - walk / 2);
	// console.log(xWalk);
	const yWalk = Math.round(y / width * walk - walk / 2);
	// console.log(x, y); // now there shouldn't be much of an offset between the this & e.target

	// console.log(this, e.target); // targe is the thing it's triggered on whereas 'this' is the event you listen on

	text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7), 
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7), 
    ${yWalk * -1}px ${xWalk}px 0 rgba(0, 0, 255, 0.7)
    `;
}

hero.addEventListener('mousemove', shadow);
