(function () {
  const slidesEl = document.getElementById("slides");
  const carousel = document.getElementById("carousel");
  const indicator = document.getElementById("pillIndicator");
  const pillTrack = document.getElementById("pillTrack");
  const dotsContainer = document.getElementById("dots");

  const slides = Array.from(slidesEl.children);
  let current = 0;
  const count = slides.length;

  // Create dot nav
  function createDots() {
    dotsContainer.innerHTML = "";
    for (let i = 0; i < count; i++) {
      const dot = document.createElement("span");
      dot.className = "dot";
      dot.style.background = i === current ? "#111" : "#d1d1d1";
      dot.style.cursor = "pointer";
      dot.addEventListener("click", () => {
        current = i;
        update(false);
      });
      dotsContainer.appendChild(dot);
    }
  }

  function updateDots() {
    Array.from(dotsContainer.children).forEach((d, i) => {
      d.style.background = i === current ? "#111" : "#d1d1d1";
    });
  }

  // Update slide translate and pill indicator
  function update(animate = true) {
    if (!animate) slidesEl.style.transition = "none";
    else slidesEl.style.transition = "";
    slidesEl.style.transform = `translateX(${-current * 100}%)`;

    // pill indicator math
    const trackWidth = pillTrack.clientWidth;
    const segment = trackWidth / count;
    const indWidth = Math.max(18, segment * 0.6);
    indicator.style.width = indWidth + "px";
    const offset = current * segment + (segment - indWidth) / 2;
    indicator.style.transform = `translateX(${offset}px)`;

    updateDots();

    if (!animate) {
      // force reflow then re-enable transition
      void slidesEl.offsetWidth;
      slidesEl.style.transition = "";
    }
  }

  // Pill click to select segment
  pillTrack.addEventListener("click", (e) => {
    const rect = pillTrack.getBoundingClientRect();
    const x = (e.clientX ?? (e.touches && e.touches[0].clientX)) - rect.left;
    const idx = Math.floor(x / (rect.width / count));
    current = Math.max(0, Math.min(count - 1, idx));
    update();
  });

  // Drag/swipe support (mouse + touch)
  let startX = 0,
    deltaX = 0,
    dragging = false;

  function start(ev) {
    dragging = true;
    slidesEl.style.transition = "none";
    startX = ev.type.startsWith("touch") ? ev.touches[0].clientX : ev.clientX;
  }
  function move(ev) {
    if (!dragging) return;
    const clientX = ev.type.startsWith("touch")
      ? ev.touches[0].clientX
      : ev.clientX;
    deltaX = clientX - startX;
    const w = carousel.clientWidth;
    const percent = (deltaX / w) * 100;
    slidesEl.style.transform = `translateX(${-current * 100 + percent}%)`;
  }
  function end() {
    if (!dragging) return;
    dragging = false;
    const w = carousel.clientWidth;
    // threshold: either 12% of width or 40px
    if (Math.abs(deltaX) > Math.max(40, w * 0.12)) {
      if (deltaX < 0 && current < count - 1) current++;
      if (deltaX > 0 && current > 0) current--;
    }
    deltaX = 0;
    update();
  }

  // attach events
  carousel.addEventListener("mousedown", start);
  window.addEventListener("mousemove", move);
  window.addEventListener("mouseup", end);

  carousel.addEventListener("touchstart", start, { passive: true });
  carousel.addEventListener("touchmove", move, { passive: true });
  carousel.addEventListener("touchend", end);

  // keyboard left/right
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" && current > 0) {
      current--;
      update();
    }
    if (e.key === "ArrowRight" && current < count - 1) {
      current++;
      update();
    }
  });

  // on resize recalc (no animation)
  window.addEventListener("resize", () => update(false));

  // init
  createDots();
  update(false);
})();
