gsap.registerPlugin(SplitText);

var timeline = gsap.timeline({});

document.fonts.ready.then(() => {
  gsap.set(".hero-text-ani", { opacity: 1 });

  // সব .animate-me element সিলেক্ট করো
  document.querySelectorAll(".animate-me").forEach((el) => {
    // প্রতিটি এলিমেন্টের জন্য SplitText বানাও
    let split = SplitText.create(el, { type: "words", aria: "hidden" });

    // Animate করো
    gsap.from(split.words, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "sine.out",
      stagger: 0.0001,
    });
  });
});

document.fonts.ready.then(() => {
  gsap.set(".hero-text-ani", { opacity: 1 });

  // সব .animate-me element সিলেক্ট করো
  document.querySelectorAll(".split1").forEach((el) => {
    // প্রতিটি এলিমেন্টের জন্য SplitText বানাও
    let split = SplitText.create(el, { type: "lines", aria: "hidden" });

    // Animate করো
    gsap.from(split.lines, {
      opacity: 0,
      y: 100,
      duration: 2,
      ease: "sine.out",
      stagger: 2,
    });
  });
});

const heroLogo = document.getElementById("#hero-logo");
gsap.from(".moving-img", {
  opacity: 0,
  y: 200,
  duration: 1.5,
  ease: "power2.out",
});

document.fonts.ready.then(() => {
  let tll = gsap.timeline({
    // yes, we can add it to an entire timeline!
    // scrollTrigger: {
    //   trigger: ".hero-image",
    //   scroller: "body",
    //   start: "top 90%",
    //   toggleActions: "play none none reverse",
      // markers: true,
    // },
  });
  tll.from(".hero-image", {
    y: 90,
    x: -200,
    duration: 0.7,
    scale: 0.9,
    opacity: 0.4,
  });
});

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#hero-down",
    scroller: "body",
    start: "top 75%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});
tl2.from(
  ".title1 div, .title1 p, .experience-image-div, .aboutCompanyImg, .company-text",
  {
    y: 100,
    opacity: 0,
    stagger: 0,
    duration: 0.5,
  }
);

// const tl1 = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#logoTrack",
//     scroller: "body",
//     start: "top 85%",
//     toggleActions: "play none none reverse",
//     // markers: true,
//   },
// });
// tl1.from("#logoTrackDiv, .logoTrackDiv", {
//   opacity: 0,
//   stagger: 0.2,
// });
// tl1.from(".logoTrackDiv", {
//   y: -100,
//   opacity: 0,
//   stagger: 0.2,
// });

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".services-sec-gsap",
    scroller: "body",
    start: "top 85%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});

tl3.from(".title2 div, .title2 p, .services-h2, .services-p, .services-btn", {
  y: 70,
  opacity: 0,
  stagger: 0.1,
  duration: 0.5,
});

const tl3_0 = gsap.timeline({
  scrollTrigger: {
    trigger: ".left-image",
    scroller: "body",
    start: "top 95%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});
tl3_0.from(".left-image", {
  y: 200,
  opacity: 0,
  stagger: 0.1,
  duration: 0.8,
});
const tl3_1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#service-right-content",
    scroller: "body",
    start: "top 75%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});
tl3_1.from(".service-right-text, .service-right-text a", {
  y: 200,
  opacity: 0,
  stagger: 0.1,
  duration: 0.8,
});




const process = gsap.timeline({
  scrollTrigger: {
    trigger: ".process-main",
    scroller: "body",
    start: "top 75%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});
process.from(".process, .process-img", {
  x: -70,
  opacity: 0,
  stagger: 0,
  duration: 0.5,
});

// Pricing===============
const Pricing = gsap.timeline({
  scrollTrigger: {
    trigger: ".pricing-content",
    scroller: "body",
    start: "top 75%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});
Pricing.from(".pricing-content div, .pricing-content h5", {
  y: 70,
  opacity: 0,
  stagger: 0.1,
  duration: 0.5,
});

const PricingCard = gsap.timeline({
  scrollTrigger: {
    trigger: ".pricing-card",
    scroller: "body",
    start: "top 80%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});
PricingCard.from(" .pricing-card", {
  y: 100,
  opacity: 0,
  stagger: 0.1,
  duration: 0.5,
});
// Review==============================

const review = gsap.timeline({
  scrollTrigger: {
    trigger: ".review1",
    scroller: "body",
    start: "top 60%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});
review.from(" .circle-div", {
  x: -100,
  opacity: 0,
  stagger: 0,
  duration: 0.8,
});
const review1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".review1",
    scroller: "body",
    start: "top 60%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});
review1.from(" .review1-content-div", {
  x: 100,
  opacity: 0,
  stagger: 0,
  duration: 0.8,
});
