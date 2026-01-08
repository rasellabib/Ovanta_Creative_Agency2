gsap.registerPlugin(ScrollTrigger);

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});

function findClosestEdge(mouseX, mouseY, width, height) {
  const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
  const bottomEdgeDist =
    Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
  return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
}

document.querySelectorAll(".menu-item").forEach((item) => {
  const marquee = item.querySelector(".marquee-wrapper");
  const animDefaults = { duration: 0.8, ease: "power3.out" };

  item.addEventListener("mouseenter", (ev) => {
    const rect = item.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );
    gsap.set(marquee, { y: edge === "top" ? "-101%" : "101%" });
    gsap.to(marquee, { y: "0%", ...animDefaults });
  });

  item.addEventListener("mouseleave", (ev) => {
    const rect = item.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );
    gsap.to(marquee, { y: edge === "top" ? "-101%" : "101%", ...animDefaults });
  });
});
