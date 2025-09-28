// script.js
gsap.registerPlugin(ScrollTrigger);

// basic fade/slide in for each card
const cards = gsap.utils.toArray(".project-card");

cards.forEach((card, i) => {
  // slight alternate rotation/offset for natural look
  const rotateFrom = i % 2 === 0 ? 3 : -3;
  const xFrom = i % 2 === 0 ? 20 : -20;

  // image parallax inside card
  const img = card.querySelector("img");
  if (img) {
    gsap.to(img, {
      ease: "none",

      scrollTrigger: {
        trigger: card,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }
});

// optional: animate the big-text opacity/scale a bit while scrolling section
const section = document.querySelector("#projects-section");
const bigText = document.querySelector(".big-text");

gsap.fromTo(
  bigText,
  { scale: 1.02, x: -50 },
  {
    scale: 1,
    ease: "none",
    y: 100,
    x: 700,
    scrollTrigger: {
      trigger: section,
      start: "center",
      end: "bottom center",
      scrub: true,
    },
  }
);

const card_gsap = gsap.timeline({
  scrollTrigger: {
    trigger: ".project-card",
    scroller: "body",
    start: "top 65%",
    toggleActions: "play none none reverse",
    markers: true,
  },
});
card_gsap.from(".project-card", {
  y: 100,
  stagger: 1,
  opacity: 0,
  direction: 0.8,
});
