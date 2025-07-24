const track = document.querySelector('.project-track');
const items = document.querySelectorAll('.project-img-div');
const prev = document.getElementById('prevArrow');
const next = document.getElementById('nextArrow');

let currentIndex = 0;
const visibleCount = 2;

function updateSlider() {
  items.forEach((item, index) => {
    item.classList.remove('active');
    if (index >= currentIndex && index < currentIndex + visibleCount) {
      item.classList.add('active');
    }
  });

  const translateX = -(currentIndex * (100 / visibleCount));
  track.style.transform = `translateX(${translateX}%)`;
}

prev.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex -= visibleCount;
    updateSlider();
  }
});

next.addEventListener('click', () => {
  if (currentIndex + visibleCount < items.length) {
    currentIndex += visibleCount;
    updateSlider();
  }
});

// Initialize on load
updateSlider();