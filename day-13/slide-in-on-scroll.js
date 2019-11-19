function debounce(func, wait = 20, immediate = true) {
	let timeout;
	return function() {
		let context = this,
			args = arguments;
		let later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		let callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
	console.count(e); // shows how much of a performance issue, the user could have
	sliderImages.forEach((slideImage) => {
		const slideInAt = window.scrollY + window.innerHeight - slideImage.height;
		// half way through the image
		slideImage.height / 2;
		// console.log(slideInAt);

		// bottom of the image
		const imageBottom = slideImage.offsetTop + slideImage.height; // slideImage.offsetTop tells us how far the top of the image from the top edge of the browser

		const isHalfShown = slideInAt > slideImage.offsetTop;
		const isNotScrollPast = window.scrollY < imageBottom;

		if (isHalfShown && isNotScrollPast) {
			slideImage.classList.add('active');
		} else {
			slideImage.classList.remove('active');
		}
	});
}

window.addEventListener('scroll', debounce(checkSlide));
