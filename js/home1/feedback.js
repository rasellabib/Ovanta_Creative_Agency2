const testimonials = [
  {
    name: "Jenny Bennett",
    role: "Senior Marketing Manager",
    quote:
      '"Craincy exceeded our expectations, delivering a stunning design that truly reflects our brand’s essence. Their creativity and professionalism made a lasting impact. They create stunning architectural concepts that capture the essence of the community and its surroundings, blending aesthetics with functionality."',
  },
  {
    name: "Liam Parker",
    role: "Product Designer",
    quote:
      '"Working with this team was a pleasure. They translated our vague idea into a clean, scalable design system. Communication was clear and timely, and final delivery surpassed expectations."',
  },
  {
    name: "Sofia Turner",
    role: "CEO, BrightCo",
    quote:
      '"A highly professional studio — they drove the project with care, delivered on time, and brought smart design decisions that improved our conversion metrics significantly."',
  },
];

const avatars = Array.from(document.querySelectorAll(".avatar"));
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const roleEl = document.getElementById("role");
const arrow = document.getElementById("arrow");
const pill = document.getElementById("pill");

let active = 0;

function setActive(i, animate = true) {
  active = i;
  avatars.forEach((a) => {
    a.classList.remove("active");
    a.classList.remove("inactive");
  });
  avatars.forEach((a, idx) => {
    if (idx !== i) a.classList.add("inactive");
  });
  avatars[i].classList.add("active");

  // update content
  quoteEl.textContent = testimonials[i].quote;
  authorEl.textContent = testimonials[i].name;
  roleEl.textContent = testimonials[i].role;

  // position arrow vertically near active avatar
  const avatarRect = avatars[i].getBoundingClientRect();
  const pillRect = pill.getBoundingClientRect();
  const top =
    avatarRect.top -
    pillRect.top +
    avatarRect.height / 2 -
    arrow.offsetHeight / 2;
  arrow.style.top = `${top - 10}px`;
}

avatars.forEach((av) => {
  av.addEventListener("click", (e) => {
    const i = Number(av.getAttribute("data-index"));
    setActive(i);
  });
});

// initial
window.addEventListener("load", () => {
  setActive(0);
  // ensure arrow repositions on resize
  window.addEventListener("resize", () => setActive(active));
});
