gsap.registerPlugin(ScrollTrigger);

const items = document.querySelectorAll(".faq-item");

items.forEach((item) => {
  item.querySelector(".faq-question").addEventListener("click", () => {
    // close all others
    items.forEach((i) => {
      if (i !== item) {
        i.classList.remove("active");
        gsap.to(i.querySelector(".faq-answer"), { height: 0, duration: 0.3 });
        i.querySelector(".faq-toggle").textContent = "+";
      }
    });

    // toggle this one
    const answer = item.querySelector(".faq-answer");
    if (item.classList.contains("active")) {
      item.classList.remove("active");
      gsap.to(answer, { height: 0, duration: 0.3 });
      item.querySelector(".faq-toggle").textContent = "+";
    } else {
      item.classList.add("active");
      gsap.set(answer, { height: "auto" });
      gsap.from(answer, { height: 0, duration: 0.3 });
      item.querySelector(".faq-toggle").textContent = "✕";
    }
  });
});
