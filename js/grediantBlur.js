const CURVE_FUNCTIONS = {
    linear: (p) => p,
    bezier: (p) => p * p * (3 - 2 * p),
    "ease-in": (p) => p * p,
    "ease-out": (p) => 1 - Math.pow(1 - p, 2),
    "ease-in-out": (p) => (p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2),
  };
  
  function createGradualBlur({
    targetSelector = ".gradual-section",
    position = "bottom",
    height = "6rem",
    strength = 2,
    divCount = 5,
    exponential = true,
    opacity = 1,
    curve = "bezier",
  } = {}) {
    const target = document.querySelector(targetSelector);
    const blurContainer = document.getElementById("gradual-blur");
  
    blurContainer.style.height = height;
    blurContainer.classList.add("gradual-blur");
  
    const inner = document.createElement("div");
    inner.classList.add("gradual-blur-inner");
    blurContainer.appendChild(inner);
  
    const increment = 100 / divCount;
    const curveFunc = CURVE_FUNCTIONS[curve] || CURVE_FUNCTIONS.linear;
  
    for (let i = 1; i <= divCount; i++) {
      let progress = i / divCount;
      progress = curveFunc(progress);
  
      let blurValue;
      if (exponential) {
        blurValue = math.pow(2, progress * 4) * 0.0625 * strength;
      } else {
        blurValue = 0.0625 * (progress * divCount + 1) * strength;
      }
  
      const p1 = Math.round((increment * i - increment) * 10) / 10;
      const p2 = Math.round(increment * i * 10) / 10;
      const p3 = Math.round((increment * i + increment) * 10) / 10;
      const p4 = Math.round((increment * i + increment * 2) * 10) / 10;
  
      let gradient = `transparent ${p1}%, black ${p2}%`;
      if (p3 <= 100) gradient += `, black ${p3}%`;
      if (p4 <= 100) gradient += `, transparent ${p4}%`;
  
      const direction = position === "top" ? "to top" : "to bottom";
  
      const layer = document.createElement("div");
      layer.classList.add("blur-layer");
      layer.style.maskImage = `linear-gradient(${direction}, ${gradient})`;
      layer.style.webkitMaskImage = `linear-gradient(${direction}, ${gradient})`;
      layer.style.backdropFilter = `blur(${blurValue.toFixed(3)}rem)`;
      layer.style.WebkitBackdropFilter = `blur(${blurValue.toFixed(3)}rem)`;
      layer.style.opacity = opacity;
  
      inner.appendChild(layer);
    }
  }
  
  // Initialize
  createGradualBlur({
    targetSelector: ".gradual-section",
    position: "bottom",
    height: "6rem",
    strength: 2,
    divCount: 5,
    exponential: true,
    opacity: 1,
    curve: "bezier",
  });
  