const portfolioContent = gsap.timeline({
  scrollTrigger: {
    trigger: ".portfolio-content",
    scroller: "body",
    start: "top 75%",
    toggleActions: "play none none reverse",
    markers: true,
  },
});
portfolioContent.from(".portfolio-content h5, .portfolio-title", {
  y: 100,
  opacity: 0,
  stagger: 0,
  duration: 0.5,
});
const portfolioImg = gsap.timeline({
  scrollTrigger: {
    trigger: ".portfolio-img",
    scroller: "body",
    start: "top 80%",
    toggleActions: "play none none reverse",
    markers: true,
  },
});
portfolioImg.from(".portfolio-img img", {
  y: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 0.3,
});
const Challenge = gsap.timeline({
  scrollTrigger: {
    trigger: ".Challenge",
    scroller: "body",
    start: "top 80%",
    toggleActions: "play none none reverse",
    markers: true,
  },
});
Challenge.from(".Challenge p", {
  y: 100,
  stagger: 0.2,
  opacity: 0,
  duration: 0.6,
});
const FinalResult = gsap.timeline({
  scrollTrigger: {
    trigger: ".FinalResult",
    scroller: "body",
    start: "top 80%",
    toggleActions: "play none none reverse",
    markers: true,
  },
});
FinalResult.from(".FinalResult p", {
  y: 100,
  stagger: 0.2,
  opacity: 0,
  duration: 0.6,
});
const portfolioCard = gsap.timeline({
  scrollTrigger: {
    trigger: ".portfolio-card",
    scroller: "body",
    start: "top 70%",
    toggleActions: "play none none reverse",
    markers: true,
  },
});
portfolioCard.from(".portfolio-card", {
  y: 100,
  opacity: 0,
  stagger: 0,
  duration: 0.5,
});

const NeedHelp = gsap.timeline({
  scrollTrigger: {
    trigger: ".Need-Helps",
    scroller: "body",
    start: "top 70%",
    toggleActions: "play none none reverse",
    markers: true,
  },
});
NeedHelp.from(".Need-Helps", {
  y: 100,
  opacity: 0,
  stagger: 0,
  duration: 0.5,
});

const DownDiv = gsap.timeline({
  scrollTrigger: {
    trigger: ".Down-div",
    scroller: "body",
    start: "top 70%",
    toggleActions: "play none none reverse",
    markers: true,
  },
});
DownDiv.from(".Down-div", {
  y: 100,
  opacity: 0,
  stagger: 0,
  duration: 0.5,
});
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".success-img").forEach((section) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      scroller: "body",
      start: "top 80%",
      toggleActions: "play none none reverse",
      // markers: true,
    },
  });

  tl.from(section.querySelectorAll(".success-img-cont"), {
    y: 100,
    opacity: 0,
    duration: 0.9,
    stagger: 0.2, // ek ekta ekto gap diye animate hobe
  });
});
