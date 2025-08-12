
function findClosestEdge(mouseX, mouseY, width, height) {
    const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
    const bottomEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  }
  
  document.querySelectorAll('.menu-item').forEach(item => {
    const marquee = item.querySelector('.marquee-wrapper');
    const animDefaults = { duration: 0.8, ease: "power3.out" };
  
    item.addEventListener('mouseenter', ev => {
      const rect = item.getBoundingClientRect();
      const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);
      gsap.set(marquee, { y: edge === "top" ? "-101%" : "101%" });
      gsap.to(marquee, { y: "0%", ...animDefaults });
    });
  
    item.addEventListener('mouseleave', ev => {
      const rect = item.getBoundingClientRect();
      const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);
      gsap.to(marquee, { y: edge === "top" ? "-101%" : "101%", ...animDefaults });
    });
  });
  

  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#team-section",   
      scroller: "body",      
      start: "top 65%", 
      toggleActions: "play none none reverse",  
      // markers: true,          
    }
  });
  tl3.from("#team-section, #team-section #imagediv, #team-section #imagediv #inimagediv1", { 
    y: 100, 
    opacity: 0, 
    stagger: 0.2 
});