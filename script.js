const sections = document.querySelectorAll(".section");
const timeline = document.querySelector(".timeline");
const line = document.querySelector(".line");

line.style.bottom = `calc(100% - 20px)`;
let prevScrollY = window.scrollY;
let up, down;
let full = false;
let set = 0;
const targetY = window.innerHeight * 0.8;

function scrollHandler(e) {
  const { scrollY } = window;
  up = scrollY < prevScrollY;
  down = !up;
  const timelineRect = timeline.getBoundingClientRect();

  const dist = targetY - timelineRect.top;

  if (down && !full) {
    set = Math.max(set, dist);
    line.style.bottom = `calc(100% - ${set}px)`;
  }

  if (dist > timeline.offsetHeight + 50 && !full) {
    full = true;
    line.style.bottom = `-50px`;
  }

  sections.forEach((item) => {
    const rect = item.getBoundingClientRect();

    if (rect.top + item.offsetHeight / 5 < targetY) {
      item.classList.add("show-me");
    } else {
      item.classList.remove("show-me");
    }
  });

  prevScrollY = window.scrollY;
}

scrollHandler();
line.style.display = "block";
window.addEventListener("scroll", scrollHandler);

/////////////To the top///////////////////////

const toTheTop = document.querySelector(".to-the-top");

document.addEventListener("scroll", () => {
  btnVisibility();
});

const btnVisibility = () => {
  if (window.scrollY > 1000) {
    toTheTop.style.display = "block";
  } else {
    toTheTop.style.display = "none";
  }
};

toTheTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//////////////Background //////////////////

const back = document.querySelector(".background");

const img1 = (back.style.background =
  "url('img/back/ReBack5.jpg') no-repeat center");
const img2 = (back.style.background =
  "url('img/back/ReBack3.jpg') no-repeat center");
const img3 = (back.style.background =
  "url('img/back/ReBack2.jpg') no-repeat center");
const img4 = (back.style.background =
  "url('img/back/ReBack4.jpg') no-repeat center");

let i = 0;
function change() {
  let images = [img1, img2, img3, img4];
  back.style.background = images[i];
  i = (i + 1) % images.length;
  back.style.backgroundSize = "cover";
}
setInterval(change, 12000);

////////////////modal/////////////////

const modal = document.querySelectorAll(".modal");
const content = document.querySelectorAll(".content");
const mute = document.querySelectorAll(".soundIcon");
const modalClose = document.querySelectorAll(".close");

const res0 = document.querySelector(".res0");
const res1 = document.querySelector(".res1");
const res2 = document.querySelector(".res2");
const res3 = document.querySelector(".res3");
const rescv = document.querySelector(".rescv");
const res4 = document.querySelector(".res4");
const res5 = document.querySelector(".res5");
const res6 = document.querySelector(".res6");
const res7 = document.querySelector(".res7");
const res8 = document.querySelector(".res8");

let reAudio = new Audio();

function reSound() {
  content.forEach((el) => {
    el.addEventListener("click", () => {
      mute.forEach((m) => {
        m.classList.remove("sound-icon-off");
      });
    });

    el.addEventListener("click", () => {
      if (el.classList.contains("re0-content")) {
        reAudio.src = "sound/RE0-SAVEROOM.mp3";
        reAudio.autoplay = true;
        res0.classList.toggle("show");
      } else if (el.classList.contains("re1-content")) {
        reAudio.src = "sound/RE1-SAVEROOM.mp3";
        reAudio.autoplay = true;
        res1.classList.toggle("show");
      } else if (el.classList.contains("re2-content")) {
        reAudio.src = "sound/RE2-SAVEROOM.mp3";
        reAudio.autoplay = true;
        res2.classList.toggle("show");
      } else if (el.classList.contains("re3-content")) {
        reAudio.src = "sound/RE3-SAVEROOM.mp3";
        reAudio.autoplay = true;
        res3.classList.toggle("show");
      } else if (el.classList.contains("recv-content")) {
        reAudio.src = "sound/RECV-SAVEROOM.mp3";
        reAudio.autoplay = true;
        rescv.classList.toggle("show");
      } else if (el.classList.contains("re4-content")) {
        reAudio.src = "sound/RE4-SAVEROOM.mp3";
        reAudio.autoplay = true;
        res4.classList.toggle("show");
      } else if (el.classList.contains("re5-content")) {
        reAudio.src = "sound/RE5-SAVEROOM.mp3";
        reAudio.autoplay = true;
        res5.classList.toggle("show");
      } else if (el.classList.contains("re6-content")) {
        reAudio.src = "sound/RE6-SAVEROOM.mp3";
        reAudio.autoplay = true;
        res6.classList.toggle("show");
      } else if (el.classList.contains("re7-content")) {
        reAudio.src = "sound/RE7-SAVEROOM.mp3";
        reAudio.autoplay = true;
        res7.classList.toggle("show");
      } else if (el.classList.contains("re8-content")) {
        reAudio.src = "sound/RE8-SAVEROOM.mp3";
        reAudio.autoplay = true;
        res8.classList.toggle("show");
      }
    });
  });
}
reSound();

function soundMute() {
  mute.forEach((m) => {
    m.addEventListener("click", () => {
      m.classList.toggle("sound-icon-off");
      if (reAudio.paused) {
        reAudio.play();
      } else {
        reAudio.pause();
      }
    });
  });
}
soundMute();

back.addEventListener("click", function (e) {
  if (e.target !== modal) {
    modal.forEach((e) => {
      e.classList.remove("show");
    });
    reAudio.pause();
  }
});

modalClose.forEach((e) => {
  e.addEventListener("click", () => {
    modal.forEach((m) => {
      m.classList.remove("show");
      reAudio.pause();
    });
  });
});
