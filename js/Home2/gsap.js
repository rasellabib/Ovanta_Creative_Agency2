const nav = gsap.timeline();
nav.from(".custom-navbar1", {
  y: -100,
  opacity: 0,
  duration: 0.8,
});
const HeroHeading = gsap.timeline();
HeroHeading.from(".hero-heading h1", {
  x: 80,
  opacity: 0,
  stagger: 0.1,
  duration: 0.8,
});

const HeroContent = gsap.timeline();
HeroContent.from(".hero-content", {
  x: -80,
  y: 50,
  opacity: 0,
  stagger: 0.1,
  duration: 0.8,
});
const HeroClient = gsap.timeline();
HeroClient.from(".client-img-div", {
  x: 80,
  y: 100,
  opacity: 0,
  stagger: 0.1,
  duration: 0.8,
});

const Business = gsap.timeline({
  scrollTrigger: {
    trigger: ".Business",
    scroller: "body",
    start: "top 58%",
    toggleActions: "play none none reverse",
    markers: true,
  },
});

Business.from(".business-top", {
  y: 80,
  opacity: 0,
  duration: 0.8,
});
const BusinessContent = gsap.timeline({
  scrollTrigger: {
    trigger: ".business-content",
    scroller: "body",
    start: "top 85%",
    toggleActions: "play none none reverse",
    markers: true,
  },
});

BusinessContent.from(".business-content", {
  y: 80,
  opacity: 0,
  duration: 0.8,
});
const BusinessImgR = gsap.timeline({
  scrollTrigger: {
    trigger: ".business-right",
    scroller: "body",
    start: "top 58%",
    toggleActions: "play none none reverse",
    markers: true,
  },
});

BusinessImgR.from(".business-right img", {
  x: -80,
  opacity: 0,
  duration: 0.8,
});
const BusinessImgL = gsap.timeline({
  scrollTrigger: {
    trigger: ".business-left",
    scroller: "body",
    start: "top 58%",
    toggleActions: "play none none reverse",
    markers: true,
  },
});

BusinessImgL.from(".businesses-left-bottom img", {
  x: 80,
  opacity: 0,
  duration: 0.8,
});

// const Expert = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".Expert",
//     scroller: "body",
//     start: "top 70%",
//     toggleActions: "play none none reverse",
//     markers: true,
//   },
// });

// Expert.from(".Expert-bg ", {
//   y: 15,
//   scale: 0.9
//   opacity: 0.4,
//   duration: 0.5,
// });

const ExpertTitle = gsap.timeline({
  scrollTrigger: {
    trigger: ".Expert",
    scroller: "body",
    start: "top 70%",
    toggleActions: "play none none reverse",
    markers: true,
  },
});

ExpertTitle.from(".ExpertTitle ", {
  y: 100,
  opacity: 0,
  duration: 0.5,
});

const ExpertR = gsap.timeline({
  scrollTrigger: {
    trigger: ".Expert",
    scroller: "body",
    start: "top 70%",
    toggleActions: "play none none reverse",
    markers: true,
  },
});

ExpertR.from(".expert-right-div ", {
  x: 20,
  opacity: 0,
  duration: 0.8,
});
