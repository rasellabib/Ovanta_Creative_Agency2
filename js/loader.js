// simulated progress updater (visual only)
(function () {
  const prog = document.getElementById("prog");
  let pct = 0;
  const inc = () => {
    pct += Math.random() * 10; // random increment
    if (pct > 99) pct = 99;
    prog.style.width = pct + "%";
  };
  const timer = setInterval(inc, 300);

  // When the entire window has loaded (images, fonts, etc.)
  window.addEventListener("load", () => {
    clearInterval(timer);
    // quickly fill to 100%
    prog.style.width = "100%";

    // small delay so user sees the final state, then fade out
    setTimeout(() => {
      const loader = document.getElementById("loader");
      loader.classList.add("hidden"); // fades via css

      // reveal app
      const app = document.getElementById("app");
      app.classList.add("visible");
      app.setAttribute("aria-hidden", "false");

      // accessibility: loader not busy
      loader.setAttribute("aria-busy", "false");
      loader.setAttribute("aria-hidden", "true");
    }, 50); // adjust as you like
  });

  // Safety: if load takes too long, still hide after 10s (optional)
  setTimeout(() => {
    if (!document.getElementById("loader").classList.contains("hidden")) {
      document.getElementById("prog").style.width = "100%";
      document.getElementById("loader").classList.add("hidden");
      document.getElementById("app").classList.add("visible");
    }
  }, 10000);
})();
