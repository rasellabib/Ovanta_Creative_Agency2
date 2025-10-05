gsap.registerPlugin(ScrollTrigger);

var nav = gsap.timeline();
var pageTitle = gsap.timeline();
var Groho = gsap.timeline();
nav.from(".custom-navbar1", {
  y: -100,
  opacity: 0,
  duration: 0.8,
});
pageTitle.from(".all-page h1, .all-page .link-btn", {
  y: 100,
  opacity: 0,
  duration: 0.8,
});
Groho.from(" .groho", {
  x: -100,
  opacity: 0,
  duration: 0.8,
});

// const upBg = gsap.timeline();

// upBg.from(".all-page", {
//   y: 100,
//   opacity: 0,
//   duration: 1,
// });

// const groho = gsap.timeline();
// groho.from(".all-page", {
//   y: 100,
//   opacity: 0,
//   duration: 0.8,
// });

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
    // markers: true,
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
    // markers: true,
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
    // markers: true,
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
    // markers: true,
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
// markers: true,
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
    // markers: true,
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
    // markers: true,
  },
});

ExpertR.from(".expert-right-div ", {
  x: 50,
  opacity: 0,
  duration: 0.8,
});
const chose = gsap.timeline({
  scrollTrigger: {
    trigger: ".chose",
    scroller: "body",
    start: "top 70%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});

chose.from(".chose .title-section", {
  x: 50,
  opacity: 0,
  duration: 0.8,
});
const choseDiv = gsap.timeline({
  scrollTrigger: {
    trigger: ".chose-div",
    scroller: "body",
    start: "top 70%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});

choseDiv.from(".chose-div, .chose-div .chose-content-div", {
  x: 50,
  stagger: 0.3,
  opacity: 0,
  duration: 0.8,
});
const choseDivImg = gsap.timeline({
  scrollTrigger: {
    trigger: ".chose-div",
    scroller: "body",
    start: "top 70%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});

choseDivImg.from(".chose-img-div .chose-img, .chose-img-div .position-imgs ", {
  x: 50,
  y: 50,
  stagger: 0.3,
  opacity: 0,
  duration: 0.8,
});
const success = gsap.timeline({
  scrollTrigger: {
    trigger: ".success",
    scroller: "body",
    start: "top 70%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});

success.from(".success-bg", {
  x: 50,
  y: 100,
  stagger: 0.3,
  opacity: 0,
  duration: 0.8,
});

const successTitle = gsap.timeline({
  scrollTrigger: {
    trigger: ".success-bg",
    scroller: "body",
    start: "top 75%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});

successTitle.from(".success-title-sec", {
  y: 100,
  stagger: 0.3,
  opacity: 0,
  duration: 0.8,
});
// const successImg = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".success-img-div",
//     scroller: "body",
//     start: "top 65%",
//     toggleActions: "play none none reverse",
//     // markers: true,
//   },
// });

// successImg.from(".success-img", {
//   x: -100,
//   opacity: 0,
//   duration: 0.8,
// });

const successImg1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".success-img1",
    scroller: "body",
    start: "top 75%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});

successImg1.from(".success-img1", {
  x: -100,
  opacity: 0,
  duration: 0.8,
});

const successImg2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".success-img1",
    scroller: "body",
    start: "top 75%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});

successImg2.from(".success-img2", {
  x: 100,
  opacity: 0,
  duration: 0.8,
});
const successImg3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".success-img3",
    scroller: "body",
    start: "top 75%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});

successImg3.from(".success-img3", {
  y: 100,
  opacity: 0,
  duration: 0.8,
});

const reviewSec = gsap.timeline({
  scrollTrigger: {
    trigger: ".review-sec",
    scroller: "body",
    start: "top 75%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});

reviewSec.from(".review-title .title", {
  y: 100,
  opacity: 0,
  // stagger: 0.1,
  duration: 0.8,
});
const reviewSecArrow = gsap.timeline({
  scrollTrigger: {
    trigger: ".review-title",
    scroller: "body",
    start: "top 75%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});

reviewSecArrow.from(".left-right-arrow", {
  y: 100,
  opacity: 0,
  duration: 0.8,
});

const reviewCard = gsap.timeline({
  scrollTrigger: {
    trigger: ".review-cards-sec",
    scroller: "body",
    start: "top 80%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});

reviewCard.from(".total-rate-card-up", {
  x: -100,
  y: 50,
  opacity: 0,
  duration: 0.9,
});

const reviewCards = gsap.timeline({
  scrollTrigger: {
    trigger: ".testimonial",
    scroller: "body",
    start: "top 80%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});

reviewCards.from(".testimonial-card", {
  x: 100,
  y: 50,
  opacity: 0,
  duration: 0.9,
});

const NewsBlogs = gsap.timeline({
  scrollTrigger: {
    trigger: ".NewsBlogs",
    scroller: "body",
    start: "top 60%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});

reviewCards.from(".NewsBlogs .NewsBlogs-title", {
  x: 100,
  opacity: 0,
  duration: 0.9,
});

const NewsBlogsCard0 = gsap.timeline({
  scrollTrigger: {
    trigger: ".card-div",
    scroller: "body",
    start: "top 70%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});

NewsBlogsCard0.from(".card-div .blogs-card0", {
  x: -100,
  opacity: 0,
  duration: 0.9,
});

const NewsBlogsCard1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".card-div",
    scroller: "body",
    start: "top 70%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});

NewsBlogsCard1.from(".card-div .blogs-card1", {
  y: 100,
  opacity: 0,
  duration: 0.9,
});

const NewsBlogsCard2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".blogs-card2",
    scroller: "body",
    start: "top 70%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});

NewsBlogsCard2.from(".card-div .blogs-card2", {
  x: 100,
  opacity: 0,
  duration: 0.9,
});

const team = gsap.timeline({
  scrollTrigger: {
    trigger: ".team",
    scroller: "body",
    start: "top 60%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});
team.from(".title-section", {
  y: 100,
  x: 40,
  opacity: 0,
  stagger: 0.2,
  duration: 0.8,
});

const teamCard = gsap.timeline({
  scrollTrigger: {
    trigger: ".team",
    scroller: "body",
    start: "top 58%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});
teamCard.from(".card-section", {
  y: 100,
  x: -40,
  opacity: 0,
  stagger: 0.2,
  duration: 0.8,
});

gsap.utils.toArray(".row .col-lg-4").forEach((row) => {
  let NewsBlogsCard = gsap.timeline({
    scrollTrigger: {
      trigger: row,
      scroller: "body",
      start: "top 70%",
      toggleActions: "play none none reverse",
      // markers: true,
    },
  });

  NewsBlogsCard.from(row.querySelectorAll(".blogs-card"), {
    y: 60,
    opacity: 0,
    duration: 0.5,
  });
});
