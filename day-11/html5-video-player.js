// grab the all the elements
const player = document.querySelector('.player');

const video = document.querySelector('.viewer');

const progress = player.querySelector('.progress');

const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');

const range = player.querySelectorAll('.player__slider');

const skipButton = player.querySelectorAll('[data-skip]');

// creating the functions
const togglePlay = () => {
	const method = video.paused ? 'play' : 'pause';

	video[method]();
	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}
};

const updateButton = () => {
	const icon = this.paused ? '>' : '!!';
	console.log("See what's happening?");
};

// attaching the addEventListener so that some functions fire on an event
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
