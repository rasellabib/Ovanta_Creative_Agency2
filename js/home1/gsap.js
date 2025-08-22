gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();
var heroContent1 = new SplitText("#hero-content", { type: "lines"});
var heroContent2 = new SplitText("#hero-content2", { type: "lines"});

var chars = heroContent1.lines;
var heroContent2 = heroContent2.lines;

tl.from("nav, nav div", {    
    duration: 0.5,
    y: -100,
    opacity: 0,
    ease: "power2.out",
    stagger: 0.2,
    scale: 0.9
},'-=0.3')


tl.from(chars, {
    rotationX: -100,
    transformOrigin: "50% 50% -160px",
    opacity: 0,
    duration: 0.5, 
    ease: "power3",
    stagger: 0.25
},'-=0.3');
tl.from(heroContent2, {
    rotationX: -100,
    transformOrigin: "50% 50% -160px",
    opacity: 0,
    duration: 0.2, 
    ease: "power3",
    stagger: 0.25
},'-=0.3');
tl.from(".hero-button", {
    duration: 0.2,
    y: 40,
    opacity: 0,
    ease: "power2.out",
    stagger: 0.2,
},'-=1');

const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#scroll1",   
      scroller: "body",      
      start: "top 65%", 
      toggleActions: "play none none reverse",  
      // markers: true,          
    }
  });
  tl1.from("#LogoImage div", { 
    y: 100, 
    opacity: 0, 
    stagger: 0.2 
});

const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#hero-down",   
      scroller: "body",      
      start: "top 65%", 
      toggleActions: "play none none reverse",  
      // markers: true,          
    }
  });
  tl2.from(".hero-down-left div,.hero-down-left p, .hero-down-left, .hero-down-right div", { 
    y: 100, 
    opacity: 0, 
    stagger: 0.1,
    duration: 0.2
});


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