const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress-filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('.player__slider');

// FUNCTIONS

function togglePlay() {
	const action = video.paused ? 'play' : 'pause';
	video[action]();
}

function upDate() {
	const icon = this.paused ? '►' : '||';
	toggle.textContent = icon;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', upDate);
video.addEventListener('pause', upDate);

toggle.addEventListener('click', togglePlay);