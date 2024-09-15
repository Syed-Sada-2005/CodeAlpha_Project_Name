// script.js
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const currentTimeDisplay = document.getElementById('currentTime');
const totalTimeDisplay = document.getElementById('totalTime');
const playlist = document.getElementById('playlist');
const playlistItems = playlist.getElementsByTagName('li');

let currentIndex = 0;

function loadTrack(index) {
    audio.src = playlistItems[index].getAttribute('data-src');
    audio.play();
    playPauseBtn.textContent = 'Pause';
}

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseBtn.textContent = 'Play';
    }
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + playlistItems.length) % playlistItems.length;
    loadTrack(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % playlistItems.length;
    loadTrack(currentIndex);
});

audio.addEventListener('loadedmetadata', () => {
    progressBar.max = audio.duration;
    totalTimeDisplay.textContent = formatTime(audio.duration);
});

audio.addEventListener('timeupdate', () => {
    progressBar.value = audio.currentTime;
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
});

progressBar.addEventListener('input', () => {
    audio.currentTime = progressBar.value;
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

for (let i = 0; i < playlistItems.length; i++) {
    playlistItems[i].addEventListener('click', () => {
        currentIndex = i;
        loadTrack(currentIndex);
    });
}

// Initialize with the first track
loadTrack(currentIndex);
