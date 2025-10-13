gsap.registerPlugin(ScrollTrigger);
window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});
document.addEventListener("DOMContentLoaded", () => {
  const els = Array.from(
    document.querySelectorAll(".animated-textW, .animated-text")
  );
  if (!els.length) return;

  const items = els.map((el) => {
    const original = el.textContent.replace(/\s+/g, " ").trim();
    let visibleIndex = 0;

    // word ভিত্তিক ভাঙা
    el.innerHTML = original
      .split(" ")
      .map((word) => {
        let wordHtml = word
          .split("")
          .map((ch) => {
            const html = `<span data-visible-index="${visibleIndex}">${ch}</span>`;
            visibleIndex += 1;
            return html;
          })
          .join("");
        return `<span class="word">${wordHtml}</span>`;
      })
      .join(`<span data-visible-index="-1"> </span>`); // space as span

    const spans = Array.from(el.querySelectorAll("span[data-visible-index]"));
    const nonSpaceCount = Math.max(1, visibleIndex);

    return { el, spans, nonSpaceCount };
  });

  function computeRawProgressForElement(el) {
    const rect = el.getBoundingClientRect();
    const total = window.innerHeight + rect.height;
    const visible = window.innerHeight - rect.top;
    let raw = total > 0 ? visible / total : 0;
    if (!isFinite(raw)) raw = 0;
    return Math.max(0, Math.min(1, raw));
  }

  function update() {
    items.forEach((item) => {
      const rawProgress = computeRawProgressForElement(item.el);

      const start = 0.2;
      const end = 0.5;
      let mapped = (rawProgress - start) / (end - start);
      mapped = Math.max(0, Math.min(1, mapped));

      const lettersToShow = Math.round(mapped * item.nonSpaceCount);

      item.spans.forEach((span) => {
        const idx = parseInt(span.dataset.visibleIndex, 10);
        if (idx >= 0 && idx < lettersToShow) {
          span.classList.add("visible");
        } else {
          span.classList.remove("visible");
        }
      });
    });
  }

  let ticking = false;
  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    }
  }

  update();

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
});
