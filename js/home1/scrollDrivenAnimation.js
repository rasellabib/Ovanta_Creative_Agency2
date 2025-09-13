const texts = ["LATEST PROJECTS ", "Scroll Down"];
const rows = document.querySelectorAll(".parallax-row");

rows.forEach((row, i) => {
  const scroller = row.querySelector(".scroller");
  const copies = parseInt(row.dataset.copies) || 6;

  for (let j = 0; j < copies; j++) {
    const span = document.createElement("span");
    span.textContent = texts[i % texts.length];
    scroller.appendChild(span);
  }
});

let lastScrollY = window.scrollY;
let offset = new Array(rows.length).fill(0);

function animate() {
  const currentScrollY = window.scrollY;
  const delta = currentScrollY - lastScrollY; // scroll velocity
  lastScrollY = currentScrollY;

  rows.forEach((row, i) => {
    const speed = parseFloat(row.dataset.velocity);
    offset[i] += delta * speed;

    // wrap effect
    const scroller = row.querySelector(".scroller");
    const totalWidth =
      scroller.scrollWidth / (parseInt(row.dataset.copies) || 6);
    if (offset[i] > totalWidth) offset[i] -= totalWidth;
    if (offset[i] < -totalWidth) offset[i] += totalWidth;

    scroller.style.transform = `translateX(${offset[i]}px)`;
  });

  requestAnimationFrame(animate);
}

animate();
