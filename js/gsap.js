const logoTrack = document.getElementById("logoTrack");
const logoWrapper = document.getElementById("logoWrapper");

// Clone for infinite scroll
const clone = logoTrack.cloneNode(true);
logoWrapper.appendChild(clone);

// Animate both tracks
let animation = gsap.to(".logo-track", {
  xPercent: -50,
  repeat: -1,
  ease: "linear",
  duration: 20,
});

// Pause on hover
logoWrapper.addEventListener("mouseenter", () => animation.pause());
logoWrapper.addEventListener("mouseleave", () => animation.resume());


