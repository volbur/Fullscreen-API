"use strict";

function getFullscreenElement() {
  return (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullscreenElement ||
    document.msFullscreenElement
  );
}

function toggleFullscreen() {
  if (getFullscreenElement()) {
    document.exitFullscreen();
  } else {
    document
      .getElementById('myBox')
      .requestFullscreen()
      .catch();
  }
}

document.addEventListener('dblclick', () => {
  toggleFullscreen();
});

document.addEventListener("fullscreenchange", () => {
  console.log("full screen changed!");
})