AOS.init({
  easing: "ease-in-out",
  delay: 10,
  once: false,
});

window.addEventListener("load", function () {
  const loader = document.querySelector(".preloader");
  loader.style.display = "none";
});

function playAudio() {
  var audio = document.getElementById("Audio");
  audio.play();
}
