gsap.registerPlugin(ScrollTrigger);

const track = document.querySelector(".project-track");
const slides = document.querySelectorAll(".project-img-div");
const prevArrow = document.getElementById("prevArrow");
const nextArrow = document.getElementById("nextArrow");

let currentIndex = 0;
const slidesToShow = 2; // প্রতি বার ২টি কার্ড দেখাবে

function updateSlider() {
  const slideWidth = slides[0].offsetWidth + 20; // gap 20px
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  // active class handle
  slides.forEach((slide, index) => {
    if (index >= currentIndex && index < currentIndex + slidesToShow) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

nextArrow.addEventListener("click", () => {
  if (currentIndex < slides.length - slidesToShow) {
    currentIndex += slidesToShow;
    updateSlider();
  }
});

prevArrow.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= slidesToShow;
    updateSlider();
  }
});

// Initial load
updateSlider();
