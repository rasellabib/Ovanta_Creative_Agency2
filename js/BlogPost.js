document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".col-lg-4");
  const perPage = 9;
  const numBtns = document.querySelectorAll(".numBtn");
  const blogSection = document.querySelector(".NewsBlogs"); // তোমার Blog Section
  let currentPage = 1;

  function showPage(page) {
    // সব hide
    cards.forEach((card, index) => {
      card.classList.remove("show");
      card.style.display = "none";
    });

    // visible cards
    cards.forEach((card, index) => {
      if (index >= (page - 1) * perPage && index < page * perPage) {
        card.style.display = "block";
        setTimeout(() => card.classList.add("show"), 50);
      }
    });

    // active button
    numBtns.forEach((btn) => btn.classList.remove("active"));
    if (numBtns[page - 1]) {
      numBtns[page - 1].classList.add("active");
    }

    // 👉 Auto Scroll to Blog Section
    blogSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // pagination click
  numBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      if (!isNaN(btn.textContent)) {
        currentPage = index + 1;
        showPage(currentPage);
      }
    });
  });

  showPage(currentPage);
});
