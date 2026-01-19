document.addEventListener("DOMContentLoaded", () => {
  const pads = document.querySelectorAll(".drum-pad");
  const display = document.getElementById("display");

  // Play sound on click
  pads.forEach((pad) => {
    pad.addEventListener("click", () => {
      const audio = pad.querySelector("audio");
      audio.currentTime = 0;
      audio.play();
      display.innerText = pad.id;
    });
  });

  // Play sound on key press
  document.addEventListener("keydown", (e) => {
    const key = e.key.toUpperCase();
    const audio = document.getElementById(key);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      display.innerText = audio.parentElement.id;
    }
  });
});
