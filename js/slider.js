gsap.registerPlugin(ScrollTrigger);
window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});
const track = document.querySelector(".project-track");
const slides = Array.from(document.querySelectorAll(".project-img-div"));
const prevArrow = document.getElementById("prevArrow");
const nextArrow = document.getElementById("nextArrow");

let currentIndex = 0;
const visibleSlides = 2; // একসাথে ২টা কার্ড show হবে

function updateSlider() {
  const slideWidth = slides[0].offsetWidth + 20; // card width + gap
  const offset = -(currentIndex * slideWidth);
  track.style.transform = `translateX(${offset}px)`;

  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i >= currentIndex && i < currentIndex + visibleSlides) {
      slide.classList.add("active");
    }
  });
}

// Next Button
nextArrow.addEventListener("click", () => {
  if (currentIndex < slides.length - visibleSlides) {
    currentIndex++;
    updateSlider();
  }
});

// Prev Button
prevArrow.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

// Drag / Swipe
let startX = 0;
let isDown = false;

track.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX;
});
track.addEventListener("mouseup", (e) => {
  if (!isDown) return;
  isDown = false;
  let endX = e.pageX;
  if (startX - endX > 50 && currentIndex < slides.length - visibleSlides) {
    currentIndex++;
  } else if (endX - startX > 50 && currentIndex > 0) {
    currentIndex--;
  }
  updateSlider();
});
track.addEventListener("mouseleave", () => (isDown = false));

// Mobile swipe
track.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});
track.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50 && currentIndex < slides.length - visibleSlides) {
    currentIndex++;
  } else if (endX - startX > 50 && currentIndex > 0) {
    currentIndex--;
  }
  updateSlider();
});

// Initialize
updateSlider();
