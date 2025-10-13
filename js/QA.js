gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".accordion-button").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".accordion-item");
    const body = item.querySelector(".accordion-body");

    // Close all
    document.querySelectorAll(".accordion-item").forEach((i) => {
      if (i !== item) {
        i.classList.remove("active");
        gsap.to(i.querySelector(".accordion-body"), {
          height: 0,
          duration: 0.3,
          ease: "power1.out",
        });
      }
    });

    // Toggle current
    const isOpen = item.classList.contains("active");
    if (isOpen) {
      item.classList.remove("active");
      gsap.to(body, { height: 0, duration: 0.3 });
    } else {
      item.classList.add("active");
      gsap.set(body, { height: "auto" });
      gsap.from(body, { height: 0, duration: 0.3 });
    }
  });
});
