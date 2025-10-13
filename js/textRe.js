gsap.registerPlugin(ScrollTrigger);

function updateAllTexts() {
  const elements = document.querySelectorAll(".responsiveText");
  const width = window.innerWidth;

  elements.forEach((el) => {
    const fullText = el.dataset.full || el.textContent.trim();

    if (!el.dataset.full) el.dataset.full = fullText; // প্রথমবারে মূল টেক্সট সংরক্ষণ

    if (width <= 1440 && width >= 992) {
      el.textContent = fullText.slice(0, 14) + "...";
    } else {
      el.textContent = fullText;
    }
  });
}

window.addEventListener("resize", updateAllTexts);
window.addEventListener("load", updateAllTexts);
