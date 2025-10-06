const footerHeading = gsap.timeline({
  scrollTrigger: {
    trigger: "footer ",
    scroller: "body",
    start: "top 60%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});
footerHeading.from(".footer-bg .left-content, .line-white", {
  y: 100,
  opacity: 0,
  stagger: 0,
  duration: 0.91,
});

document.fonts.ready.then(() => {
  // সব .split element এর জন্য loop
  document.querySelectorAll(".split").forEach((el) => {
    const split = SplitText.create(el, {
      type: "lines",
      autoSplit: true,
    });

    gsap.from(split.lines, {
      duration: 1,
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 72%",
        toggleActions: "play none none reverse",
      },
    });
  });
});

const footerDown = gsap.timeline({
  scrollTrigger: {
    trigger: ".border-secondary ",
    scroller: "body",
    start: "top 75%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});
footerDown.from(".border-secondary .footer-brand, .footer-down-content", {
  y: 100,
  opacity: 0,
  stagger: 0,
  duration: 0.91,
});
const QuickLinks = gsap.timeline({
  scrollTrigger: {
    trigger: ".border-secondary ",
    scroller: "body",
    start: "top 70%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});
QuickLinks.from(".QuickLinks h4, .QuickLinks li", {
  y: 100,
  opacity: 0,
  stagger: 0,
  duration: 0.91,
});
