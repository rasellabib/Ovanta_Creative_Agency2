const testimonials = [
    {
      text: "Ovanta team quickly understood our requirements and were proactive and flexible with support and ongoing complex developments. You definitely trust them for complex project requirements as they are top-notch in their field and recommend it.",
      name: "Menny Bennett",
      title: "Senior Marketing Manager",
      img: "https://i.pravatar.cc/40?img=12"
    },
    {
      text: "Working with Ovanta was seamless and productive. They delivered ahead of time and with high precision.",
      name: "Sarah Clark",
      title: "Product Owner",
      img: "https://i.pravatar.cc/40?img=32"
    },
    {
      text: "The Ovanta team brings creativity, professionalism, and strong communication to the table. Highly recommended!",
      name: "John Doe",
      title: "CEO, CreativeHub",
      img: "https://i.pravatar.cc/40?img=48"
    }
  ];

  const testimonialContent = document.getElementById("testimonialContent");
  const dots = document.querySelectorAll(".dot");

  function loadTestimonial(index) {
    const t = testimonials[index];
    testimonialContent.innerHTML = `
      <p class="fs-5">“${t.text}”</p>
      <div class="d-flex align-items-center mt-4">
        <img src="${t.img}" alt="${t.name}" class="rounded-circle me-3">
        <div>
          <h6 class="mb-0 fw-bold">${t.name}</h6>
          <small class="text-muted">${t.title}</small>
        </div>
      </div>
    `;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  // Initial load
  loadTestimonial(0);

  // Click event for dots
  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.getAttribute("data-index"));
      loadTestimonial(index);
    });
  });