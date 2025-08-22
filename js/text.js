// আপনার আগের gsap রেখেছেন — চলতে পারে; কিন্তু নিচের কোড ScrollTrigger ব্যবহার করে না,
// আমরা সরল, স্থির ও নির্ভরযোগ্য per-element viewport-based approach ব্যবহার করলাম.

document.addEventListener("DOMContentLoaded", () => {
  // সবগুলা টার্গেট এলিমেন্ট নিন (class ব্যবহার করুন)
  const els = Array.from(
    document.querySelectorAll(" .animated-textW, .animated-text")
  );
  if (!els.length) return;

  // প্রতিটি এলিমেন্টের জন্য span বানিয়ে সেট করুন এবং metadata রাখুন
  const items = els.map((el) => {
    // সাধারণ ক্ষেত্রে আমরা element.textContent নিয়ে কাজ করবো।
    // লক্ষ্য: যদি element এর ভিতরে নিজে থেকেই অন্য স্প্যান/ইমেজ/ট্যাগ থাকে,
    // তা হারাতে চাই না — তাই text-only কন্টেন্ট আলাদা করে রাখাটা ভালো।
    const original = el.textContent.replace(/\s+/g, " ").trim();
    let visibleIndex = 0;
    el.innerHTML = original
      .split("")
      .map((ch) => {
        if (ch === " ") return `<span data-visible-index="-1">${ch}</span>`;
        const html = `<span data-visible-index="${visibleIndex}">${ch}</span>`;
        visibleIndex += 1;
        return html;
      })
      .join("");

    const spans = Array.from(el.querySelectorAll("span"));
    const nonSpaceCount = Math.max(1, visibleIndex);

    return { el, spans, nonSpaceCount };
  });

  // এলিমেন্ট-রিলেটেড raw progress: 0 → না দেখার আগে, 1 → পুরোপুরি পাস হয়ে গেছে
  function computeRawProgressForElement(el) {
    const rect = el.getBoundingClientRect();
    const total = window.innerHeight + rect.height;
    const visible = window.innerHeight - rect.top; // কতটা ভিউপোর্টে প্রবেশ করেছে
    let raw = total > 0 ? visible / total : 0;
    if (!isFinite(raw)) raw = 0;
    return Math.max(0, Math.min(1, raw));
  }

  // update: প্রতিটি আইটেম আলাদাভাবে হ্যান্ডল করুন
  function update() {
    items.forEach((item) => {
      const rawProgress = computeRawProgressForElement(item.el);

      // এখানে আপনি start/end থ্রেশহোল্ড কাস্টমাইজ করতে পারবেন
      // (যখন element 10% ভিউপোর্টে এলে অ্যানিমেশন শুরু, 90% এ শেষ)
      const start = 0.2;
      const end = 0.5;
      let mapped = (rawProgress - start) / (end - start);
      mapped = Math.max(0, Math.min(1, mapped));

      const lettersToShow = Math.round(mapped * item.nonSpaceCount);

      item.spans.forEach((span) => {
        const idx = parseInt(span.dataset.visibleIndex, 10);
        if (idx >= 0 && idx < lettersToShow) {
          span.classList.add("visible");
        } else {
          span.classList.remove("visible");
        }
      });
    });
  }

  // performant scroll handler
  let ticking = false;
  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    }
  }

  // প্রথম অবস্থায় আপডেট চালান (page load এর জন্য)
  update();

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
});
