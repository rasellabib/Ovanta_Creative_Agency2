// magnet.js
(function () {
  // Config defaults (used when data- attributes missing)
  const DEFAULTS = {
    padding: 100, // pixels
    strength: 8, // divisor for offset — larger = smaller offset in px
    activeDuration: 0.3,
    inactiveDuration: 0.5,
    disabled: false,
  };

  // Find all magnets
  const magnets = Array.from(document.querySelectorAll(".magnet"));

  if (magnets.length === 0) return;

  // Helper to read dataset values with fallback
  function readConfig(el) {
    const ds = el.dataset;
    return {
      padding: ds.padding ? parseFloat(ds.padding) : DEFAULTS.padding,
      strength: ds.strength ? parseFloat(ds.strength) : DEFAULTS.strength,
      activeDuration: ds.activeDuration
        ? parseFloat(ds.activeDuration)
        : ds["active-duration"]
        ? parseFloat(ds["active-duration"])
        : DEFAULTS.activeDuration,
      inactiveDuration: ds.inactiveDuration
        ? parseFloat(ds.inactiveDuration)
        : ds["inactive-duration"]
        ? parseFloat(ds["inactive-duration"])
        : DEFAULTS.inactiveDuration,
      disabled:
        typeof ds.disabled !== "undefined"
          ? ds.disabled === "true" || ds.disabled === true
          : DEFAULTS.disabled,
    };
  }

  // For performance, track bounding rects and inner elements
  const items = magnets.map((mg) => {
    const inner = mg.querySelector(".magnet-inner") || mg.firstElementChild;
    const cfg = readConfig(mg);
    return {
      wrapper: mg,
      inner,
      cfg,
      rect: null,
    };
  });

  // Update rects (call on resize)
  function updateRects() {
    items.forEach((it) => {
      it.rect = it.wrapper.getBoundingClientRect();
    });
  }
  updateRects();
  window.addEventListener("resize", updateRects);

  // Mouse move handler
  function handleMove(e) {
    const x = e.clientX,
      y = e.clientY;

    items.forEach((it) => {
      // re-read config in case attributes changed dynamically
      it.cfg = readConfig(it.wrapper);
      if (it.cfg.disabled) {
        // reset to origin if disabled
        gsap.to(it.inner, {
          x: 0,
          y: 0,
          duration: it.cfg.inactiveDuration,
          ease: "power3.inOut",
        });
        it.wrapper.classList.remove("is-active");
        return;
      }

      const { left, top, width, height } =
        it.rect || it.wrapper.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const distX = Math.abs(centerX - x);
      const distY = Math.abs(centerY - y);

      if (
        distX < width / 2 + it.cfg.padding &&
        distY < height / 2 + it.cfg.padding
      ) {
        // active
        it.wrapper.classList.add("is-active");

        // compute offset — smaller when strength is larger
        const offsetX = (x - centerX) / it.cfg.strength;
        const offsetY = (y - centerY) / it.cfg.strength;

        gsap.to(it.inner, {
          x: offsetX,
          y: offsetY,
          duration: it.cfg.activeDuration,
          ease: "power3.out",
        });
      } else {
        // inactive — return to origin
        it.wrapper.classList.remove("is-active");
        gsap.to(it.inner, {
          x: 0,
          y: 0,
          duration: it.cfg.inactiveDuration,
          ease: "power3.inOut",
        });
      }
    });
  }

  // Throttle mousemove using requestAnimationFrame for smoother perf
  let rafId = null;
  function onMouseMove(e) {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      handleMove(e);
      rafId = null;
    });
  }

  window.addEventListener("mousemove", onMouseMove);

  // Also reset positions when pointer leaves window (optional)
  window.addEventListener("mouseleave", () => {
    items.forEach((it) => {
      gsap.to(it.inner, {
        x: 0,
        y: 0,
        duration: it.cfg.inactiveDuration,
        ease: "power3.inOut",
      });
      it.wrapper.classList.remove("is-active");
    });
  });
})();
