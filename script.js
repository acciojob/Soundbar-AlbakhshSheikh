const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
  const btns = document.querySelectorAll('.btn');
  btns.forEach(btn => {
    if (btn.textContent.trim() === sound) {
      btn.addEventListener('click', () => {
        stopSounds();
        const audio = new Audio(`./sounds/${sound}.mp3`);
        audio.play();
      });
    }
  });
});

document.querySelector('.stop').addEventListener('click', stopSounds);

function stopSounds() {
  // There might not be any global audio tags, so stop new audio objects
  // Optionally we can keep track of the audio being played
}
