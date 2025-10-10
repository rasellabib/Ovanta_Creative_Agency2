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
gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();

tl.from("nav", {
  y: -100,
  opacity: 0,
  ease: "power2.out",
  //   scale: 0.4,
  duration: 0.8,
});

tl.from("#hero-content, #hero-content2, .hero-button", {
  y: 100,
  opacity: 0,
  duration: 0.3,
  ease: "power3",
  stagger: 0,
  duration: 0.8,
});

var logo = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero-logo",
    scroller: "body",
    start: "top 60%",
    toggleActions: "play none none reverse",
    markers: true,
  },
});

logo.from(".hero-logo", {
  y: -100,
  opacity: 0,
  ease: "power2.out",
  //   scale: 0.4,
  duration: 0.8,
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
  duration: 1,
});

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#our-services",
    scroller: "body",
    start: "top 65%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});
tl3.from(".services-div #services1, .services-items", {
  y: 100,
  opacity: 0,
  stagger: 0.2,
});

const testimonialDiv = gsap.timeline({
  scrollTrigger: {
    trigger: ".testimonial-div",
    scroller: "body",
    start: "top 58%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});
testimonialDiv.from(".testimonial-div .clients, .testimonial-div  .content", {
  opacity: 0,
});

const testimonialContent = gsap.timeline({
  scrollTrigger: {
    trigger: ".testimonial",
    scroller: "body",
    start: "top 58%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});
testimonialContent.from(".content .testimonialTitle, .content .blockquote", {
  y: 100,
  x: 40,
  opacity: 0,
  stagger: 0.2,
});

const OurBlogs = gsap.timeline({
  scrollTrigger: {
    trigger: ".OurBlogs",
    scroller: "body",
    start: "top 58%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});
OurBlogs.from(".OurBlogs .OurBlogsTittle, .OurBlogs .btn-bg-none", {
  y: 100,
  x: 40,
  opacity: 0,
  stagger: 0.2,
});

const OurBlogsRow = gsap.timeline({
  scrollTrigger: {
    trigger: ".blog-entry",
    scroller: "body",
    start: "top 58%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});

OurBlogsRow.from(".blog-entry", {
  y: 100,
  opacity: 0,
  stagger: 0.4,
  duration: 1,
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
Pricing.from(".pricing-content", {
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
