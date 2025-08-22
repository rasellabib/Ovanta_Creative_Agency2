const userImages = document.querySelectorAll(".user-img");
    const feedbackCards = document.querySelectorAll(".feedback-card");

    userImages.forEach((img, index) => {
      img.addEventListener("click", () => {
        if (img.classList.contains("active")) return;

        userImages.forEach(u => u.classList.remove("active"));
        img.classList.add("active");

        const current = document.querySelector(".feedback-card.active");
        const next = document.querySelector(`.feedback-card[data-index='${index}']`);

        // Animate current card out
        gsap.to(current, {
          opacity: 0,
          scale: 0.9,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            current.classList.remove("active");

            // Animate next card in
            next.classList.add("active");
            gsap.fromTo(next, {
              opacity: 0,
              scale: 0.8,
              rotateX: -360,
              transformOrigin: "bottom center"
            }, {
              opacity: 1,
              scale: 1,
              rotateX: 0,
              duration: 0.1,
              ease: "power4.out"
            });
          }
        });
      });
    });