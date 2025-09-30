function animateCountUp(el, duration = 2000) {
  let text = el.textContent.trim();
  let suffix = text.replace(/[0-9]/g, ""); // suffix (k, +)
  let target = parseInt(text.replace(/\D/g, "")); // number
  let start = 0;
  let increment = target / (duration / 16);
  let current = start;

  function update() {
    current += increment;
    if (current < target) {
      el.textContent = Math.floor(current) + suffix;
      requestAnimationFrame(update);
    } else {
      el.textContent = target + suffix;
    }
  }
  update();
}

// Observer
const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCountUp(entry.target, 2000);
        obs.unobserve(entry.target); // ekbar chalbe, repeat hobe na
      }
    });
  },
  { threshold: 0.5 } // 50% visible holei trigger hobe
);

// Apply on all .h-90
document.querySelectorAll(".h-90").forEach((el) => {
  observer.observe(el);
});
