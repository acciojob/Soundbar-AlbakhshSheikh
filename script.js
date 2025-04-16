//your JS code here. If required.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
  const btn = document.querySelector(`button:contains(${sound})`);
  btn.addEventListener('click', () => {
    stopSounds();
    const audio = new Audio(`./sounds/${sound}.mp3`);
    audio.play();
  });
});

document.querySelector('.stop').addEventListener('click', stopSounds);

function stopSounds() {
  const audios = document.getElementsByTagName('audio');
  Array.from(audios).forEach(audio => audio.pause());

  // Also stop any newly created audio elements (playing sounds)
  const tempAudio = document.querySelectorAll('audio');
  tempAudio.forEach(el => el.remove());
}
