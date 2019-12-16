// grab the all the elements
const player = document.querySelector('.player');

const video = document.querySelector('.viewer');

const progress = player.querySelector('.progress');

const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');

const range = player.querySelectorAll('.player__slider');
console.log(range);

const skipButtons = player.querySelectorAll('[data-skip]');
console.log(skipButtons);

const fullScreen = player.querySelector('.fullscreen');

// creating the functions
const togglePlay = () => {
	const method = video.paused ? 'play' : 'pause'; // ternary if statement equivalent to the one below

	video[method]();
	// 	if (video.paused) {
	// 		video.play();
	// 	} else {
	// 		video.pause();
	// 	}
};

const playAndPause = () => {
	const icon = this.paused ? '►' : '❚❚';
	console.log('working');
	toggle.textContent = icon;
};

// attaching the addEventListener so that some functions fire on an event
video.addEventListener('click', togglePlay);

video.addEventListener('play', playAndPause);

video.addEventListener('pause', playAndPause);

video.addEventListener('timeupdate', handleProgressBar); // listen on the video and on thee timeupdate event, trigger the call-back function

toggle.addEventListener('click', togglePlay);

function rangeHandler() {
	video[this.name] = this.value;
	console.log(this.name);
	console.log(this.value);
}

function handleProgressBar() {
	const percentage = video.currentTime / video.duration * 100;
	progressBar.style.flexBasis = `${percentage}%`;
}

function skipFunction() {
	// console.log(skipFunction);
	console.log(this.dataset.skip);
	// let currentTime = HTMLMediaElement.currentTime;
	// need to define to make it fast....player
	video.currentTime += parseFloat(this.dataset.skip);
}

function scrub(e) {
	const scrubTime = e.offsetX / progress;
	console.log(e);
	// const progpercentage = video.currentTime
}
function makeFullScreen(e) {
	console.log(e);
}
skipButtons.forEach((clicker) => clicker.addEventListener('click', skipFunction));
range.forEach((button) => button.addEventListener('change', rangeHandler));
range.forEach((button) => button.addEventListener('mousemove', rangeHandler));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => (mousedown = true));
progress.addEventListener('mouseup', () => (mousedown = false));
fullScreen.addEventListener('click', makeFullScreen);
