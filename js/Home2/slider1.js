gsap.registerPlugin(ScrollTrigger);
window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});
const track1 = document.querySelector(".slider-track1");
const items1 = document.querySelectorAll(".slider1");
const prev1 = document.getElementById("prevArrow1");
const next1 = document.getElementById("nextArrow1");

let currentIndex = 0;

// Calculate total width to slide
function getTranslateX() {
  let translateX = 0;
  for (let i = 0; i < currentIndex; i++) {
    translateX += items1[i].offsetWidth + 20; // include margin-right
  }
  return translateX;
}

function updateSlider1() {
  const x = getTranslateX();
  track1.style.transform = `translateX(-${x}px)`;
}

next1.addEventListener("click", () => {
  if (currentIndex < items1.length - 1) {
    currentIndex++;
    updateSlider1();
  }
});

prev1.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider1();
  }
});

window.addEventListener("resize", () => {
  updateSlider1(); // adjust on resize
});

updateSlider1();
