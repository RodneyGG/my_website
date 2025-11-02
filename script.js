const button = document.getElementById('scareBtn');
const video = document.getElementById('scareVideo');
let clicks = 0;

function randomPosition() {
  const x = Math.random() * (window.innerWidth - button.offsetWidth);
  const y = Math.random() * (window.innerHeight - button.offsetHeight);
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
}

// Handle button clicks
button.addEventListener('click', () => {
  clicks++;
  randomPosition();

  if (clicks === 3) {
    triggerScare();
  }
});

// Automatically trigger on mobile after 5 seconds
if (/Mobi|Android/i.test(navigator.userAgent)) {
  setTimeout(triggerScare, 5000);
}

function triggerScare() {
  video.style.display = 'block';
  video.muted = false;
  video.play().then(() => {
    video.requestFullscreen().catch(() => {});
  }).catch(() => {
    // If autoplay blocked, show a hint
    alert("Tap the screen to start the video!");
  });
}
