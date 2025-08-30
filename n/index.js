// script.js
gsap.registerPlugin(ScrollTrigger);

// basic fade/slide in for each card
const cards = gsap.utils.toArray('.card');

cards.forEach((card, i) => {
  // slight alternate rotation/offset for natural look
  const rotateFrom = (i % 2 === 0) ? 3 : -3;
  const xFrom = (i % 2 === 0) ? 20 : -20;

  gsap.fromTo(card,
    {y:80, opacity:0, scale:0.98, rotation:rotateFrom, x:xFrom},
    {
      y:0, opacity:1, scale:1, rotation:0, x:0,
      duration:1,
      ease:"power3.out",
      scrollTrigger:{
        trigger: card,
        start: "top 85%",
        end: "top 40%",
        toggleActions: "play none none reverse",
        // markers:true
      }
    }
  );

  // image parallax inside card
  const img = card.querySelector('img');
  if(img){
    gsap.to(img, {
      y: -40,
      ease: "none",
      scrollTrigger: {
        trigger: card,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    // subtle scale on hover for polish
    card.addEventListener('mouseenter', () => {
      gsap.to(img, {scale:1.04, duration:0.5, ease:"power3.out"});
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(img, {scale:1, duration:0.6, ease:"power3.out"});
    });
  }
});

// optional: animate the big-text opacity/scale a bit while scrolling section
const section = document.querySelector('#projects-section');
const bigText = document.querySelector('.big-text');

gsap.fromTo(bigText, 
  {scale:1.02, opacity:0.08}, 
  {scale:1, opacity:0.06, ease:"none",
    scrollTrigger:{
      trigger: section,
      start: "top center",
      end: "bottom center",
      scrub: true
    }
  }
);
