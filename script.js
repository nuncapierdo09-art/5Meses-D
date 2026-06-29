function startExperience() {
  document.querySelector(".heart-container").style.display = "none";
  document.getElementById("app").classList.remove("hidden");

  typeIntro();
  startCounter();
  typeFinal();
}

/* Intro */
function typeIntro() {
  const text = "Hola mi amor... esto lo hice pensando en ti ❤️";
  const el = document.getElementById("introText");

  let i = 0;
  function write() {
    if (i < text.length) {
      el.innerHTML += text[i];
      i++;
      setTimeout(write, 50);
    }
  }
  write();
}

/* contador */
function startCounter() {
  const startDate = new Date("2026-01-01");

  setInterval(() => {
    const now = new Date();
    const diff = now - startDate;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    document.getElementById("seconds").innerText = seconds;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("hours").innerText = hours;
    document.getElementById("days").innerText = days;
  }, 1000);
}

/* música */
function toggleMusic() {
  const music = document.getElementById("music");

  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

/* final */
function typeFinal() {
  const text = "Si pudiera volver a elegir, volvería a enamorarme de ti una y mil veces ❤️";
  const el = document.getElementById("finalText");

  let i = 0;
  function write() {
    if (i < text.length) {
      el.innerHTML += text[i];
      i++;
      setTimeout(write, 60);
    }
  }

  setTimeout(write, 2000);
}
