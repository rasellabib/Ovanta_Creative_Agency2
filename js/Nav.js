// const outer = document.getElementById("outer");
// const toggleBtn = document.getElementById("toggleBtn");

// const menuItems = document.querySelectorAll("#menuItems li");

// const COLLAPSED_W = 320;
// function getExpandedWidth() {
//   const pad = 32;
//   const available = Math.max(520, window.innerWidth - pad);
//   return available;
// }

// gsap.set(menuItems, { x: 36, opacity: 0 });
// gsap.set(outer, { width: COLLAPSED_W + "px" });

// const tl = gsap.timeline({ paused: true, reversed: true });

// /* Expand Nav */
// tl.to(
//   outer,
//   {
//     duration: 0.5,
//     width: () => getExpandedWidth() + "px",
//     ease: "expo.out",
//   },
//   0
// );

// /* Rotate Plus Icon */
// tl.to(
//   ".plus",
//   {
//     rotation: 45,
//     transformOrigin: "center center",
//     duration: 0.22,
//     ease: "power2.out",
//   },
//   0.05
// );

// /* Menu Items Animation */
// tl.to(
//   menuItems,
//   {
//     duration: 0.44,
//     x: 0,
//     opacity: 1,
//     stagger: { from: "end", each: 0.06 },
//     ease: "back.out(1.0)",
//   },
//   0.12
// );

// function toggleMenu() {
//   if (tl.reversed()) {
//     tl.play();
//   } else {
//     tl.reverse();
//   }
// }

// /* Toggle on Plus or Let's Talk */
// toggleBtn.addEventListener("click", toggleMenu);

// /* Resize Update */
// window.addEventListener("resize", () => {
//   if (!tl.reversed()) {
//     gsap.to(outer, {
//       duration: 0.32,
//       width: getExpandedWidth() + "px",
//       ease: "expo.out",
//     });
//   } else {
//     gsap.set(outer, { width: COLLAPSED_W + "px" });
//   }
// });
gsap.registerPlugin(ScrollTrigger);
window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});
const nav = document.getElementById("mainNav");
const toggle = document.getElementById("toggleBtn");

toggle.addEventListener("click", () => {
  nav.classList.toggle("expanded");
  const expanded = nav.classList.contains("expanded");
  toggle.setAttribute("aria-expanded", expanded);
});
