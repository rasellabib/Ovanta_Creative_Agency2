const cursor = document.getElementById("cursor");
let mouseX = 0,
  mouseY = 0;
let cursorX = 0,
  cursorY = 0;

const offsetX = 8; // small circle niche-right
const offsetY = 8;
let hovering = true;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  cursorX += (mouseX - cursorX) * 0.15;
  cursorY += (mouseY - cursorY) * 0.15;

  let x = cursorX;
  let y = cursorY;

  if (!hovering) {
    // small circle slightly below-right
    x += offsetX;
    y += offsetY;
    cursor.style.width = "18px";
    cursor.style.height = "18px";
    cursor.style.opacity = "1";
  } else {
    // large circle at cursor center
    cursor.style.width = "80px";
    cursor.style.height = "80px";
    cursor.style.opacity = "0.2";
  }

  cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;

  requestAnimationFrame(animate);
}
animate();

// hover effect for pointer/hoverable elements
document.querySelectorAll("a, button, [role='button']").forEach((el) => {
  el.addEventListener("mouseenter", () => (hovering = true));
  el.addEventListener("mouseleave", () => (hovering = false));
});

// click spark effect on ALL clicks
document.addEventListener("click", (e) => {
  createSparks(e.clientX, e.clientY);
});

// spark function
function createSparks(x, y) {
  for (let i = 0; i < 8; i++) {
    const spark = document.createElement("div");
    spark.className = "spark";
    const angle = Math.random() * Math.PI * 2;
    const distance = 40 + Math.random() * 30;
    const dx = Math.cos(angle) * distance + "px";
    const dy = Math.sin(angle) * distance + "px";
    spark.style.left = x + "px";
    spark.style.top = y + "px";
    spark.style.setProperty("--dx", dx);
    spark.style.setProperty("--dy", dy);
    document.body.appendChild(spark);
    spark.addEventListener("animationend", () => spark.remove());
  }
}
