const staticWord = "Creative"; // স্থায়ী শব্দ
const texts = ["Design", "Arts", "!"]; // পরিবর্তনশীল অংশ

const container = document.querySelector(".rotating-text");

let currentIndex1 = 0;
let rotationInterval = 2000; // ms
let staggerDuration = 0.03; // sec per character

function splitText(staticPart, dynamicPart) {
  container.innerHTML = "";

  // --- স্থায়ী অংশ (Creative) ---
  const staticSpan = document.createElement("span");
  staticSpan.classList.add("static-word");
  staticSpan.textContent = staticPart + " "; // শেষে space
  container.appendChild(staticSpan);

  // --- পরিবর্তনশীল অংশ (যেমন Design) ---
  const dynamicSpan = document.createElement("span");
  dynamicSpan.classList.add("dynamic-word");

  dynamicPart.split("").forEach((char) => {
    const charSpan = document.createElement("span");
    charSpan.textContent = char;
    charSpan.classList.add("char");
    dynamicSpan.appendChild(charSpan);
  });

  container.appendChild(dynamicSpan);
}

function animateIn() {
  const chars = container.querySelectorAll(".dynamic-word .char");
  gsap.fromTo(
    chars,
    { y: "100%", opacity: 0 },
    {
      y: "0%",
      opacity: 1,
      duration: 0.6,
      ease: "power3.out",
      stagger: staggerDuration,
    }
  );
}

function animateOut(callback) {
  const chars = container.querySelectorAll(".dynamic-word .char");
  gsap.to(chars, {
    y: "-120%",
    opacity: 0,
    duration: 0.6,
    ease: "power3.in",
    stagger: staggerDuration,
    onComplete: callback,
  });
}

function showNextText() {
  animateOut(() => {
    currentIndex1 = (currentIndex1 + 1) % texts.length;
    splitText(staticWord, texts[currentIndex1]);
    animateIn();
  });
}

// Init first text
splitText(staticWord, texts[currentIndex1]);
animateIn();
setInterval(showNextText, rotationInterval);
