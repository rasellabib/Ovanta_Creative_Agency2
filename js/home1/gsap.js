gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();


tl.from("nav", {
  duration: 0.3,
  y: -100,
  opacity: 0,
  ease: "power2.out",
  //   scale: 0.4,
});

tl.from("#hero-content", {
  y: 100,
  opacity: 0,
  duration: 0.3,
  ease: "power3",
});
tl.from("#hero-content2 ", {
  y: 100,
  opacity: 0,
  duration: 0.2,
  ease: "power3",
});
tl.from(".hero-button", {
  duration: 0.2,
  y: 40,
  opacity: 0,
  ease: "power2.out",
});

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#hero-down",
    scroller: "body",
    start: "top 65%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});
tl2.from(".hero-down", {
  y: 100,
  opacity: 0,
  stagger: 0.1,
  duration: 0.6,
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

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#our-services",
    scroller: "body",
    start: "top 65%",
    toggleActions: "play none none reverse",
    markers: true,
  },
});
tl3.from(".services-div #services1, .services-items", {
  y: 100,
  opacity: 0,
  stagger: 0.2,
});
