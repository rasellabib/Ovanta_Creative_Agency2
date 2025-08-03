const track = document.querySelector(".slider-track");
const items = document.querySelectorAll(".slider");
const prev = document.getElementById("prevArrow");
const next = document.getElementById("nextArrow");

let currentIndex1 = 0;

// Function to get visible count based on window size
function getVisibleCount() {
  return window.innerWidth <= 768 ? 1 : 2;
}

function updateSlider() {
  const visibleCount = getVisibleCount();

  items.forEach((item, index) => {
    item.classList.remove("active");
    if (index >= currentIndex1 && index < currentIndex1 + visibleCount) {
      item.classList.add("active");
    }
  });

  const translateX = -(currentIndex1 * (100 / visibleCount));
  track.style.transform = `translateX(${translateX}%)`;
}

prev.addEventListener("click", () => {
  const visibleCount = getVisibleCount();
  if (currentIndex1 > 0) {
    currentIndex1 -= visibleCount;
    updateSlider();
  }
  console.log("sad");
});

next.addEventListener("click", () => {
  const visibleCount = getVisibleCount();
  if (currentIndex1 + visibleCount < items.length) {
    currentIndex1 += visibleCount;
    updateSlider();
  }
});

// Handle window resize
window.addEventListener("resize", () => {
  // Optional: reset currentIndex1 to 0 on resize
  currentIndex1 = 0;
  updateSlider();
});

// Initialize on load
updateSlider();
