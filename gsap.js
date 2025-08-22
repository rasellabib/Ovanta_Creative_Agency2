gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger) 



let tll = gsap.timeline({
	// yes, we can add it to an entire timeline!
	scrollTrigger: {
		trigger: '.hero-image',
		pin: true, // pin the trigger element while active
		start: 'top top', // when the top of the trigger hits the top of the viewport
		end: '+=500', // end after scrolling 500px beyond the start
		scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    markers: true, // enable markers for debugging
		snap: {
			snapTo: 'labels', // snap to the closest label in the timeline
			duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
			delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
			ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
		}
	}
});









































// gsap.registerPlugin(ScrollTrigger);

// var tl = gsap.timeline();
// var heroContent1 = new SplitText("#hero-content", { type: "lines"});
// var heroContent2 = new SplitText("#hero-content2", { type: "lines"});

// var chars = heroContent1.lines;
// var heroContent2 = heroContent2.lines;
// document.fonts.ready.then(() => {
//   gsap.set(".container", { opacity: 1 });
//   let split = SplitText.create(".animate-me", { type: "words", aria: "hidden" });

//   tl.from(split.words, {
//     opacity: 0,
//     duration: 2,
//     ease: "sine.out",
//     stagger: 0.1,
//   });
// });

// const tl1 = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#hero-image",   
//       scroller: "body",      
//       start: "top 65%", 
//       toggleActions: "play none none reverse",  
//       markers: true,          
//     }
//   });
//   tl1.from("#LogoImage div", { 
//     y: 100, 
//     opacity: 0, 
//     stagger: 0.2 
// });

// // const tl2 = gsap.timeline({
// //     scrollTrigger: {
// //       trigger: "#hero-down",   
// //       scroller: "body",      
// //       start: "top 65%", 
// //       toggleActions: "play none none reverse",  
// //       // markers: true,          
// //     }
// //   });
// //   tl2.from(".hero-down-left div,.hero-down-left p, .hero-down-left, .hero-down-right div", { 
// //     y: 100, 
// //     opacity: 0, 
// //     stagger: 0.1,
// //     duration: 0.2
// // });


// // function findClosestEdge(mouseX, mouseY, width, height) {
// //     const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
// //     const bottomEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
// //     return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
// //   }
  
// //   document.querySelectorAll('.menu-item').forEach(item => {
// //     const marquee = item.querySelector('.marquee-wrapper');
// //     const animDefaults = { duration: 0.8, ease: "power3.out" };
  
// //     item.addEventListener('mouseenter', ev => {
// //       const rect = item.getBoundingClientRect();
// //       const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);
// //       gsap.set(marquee, { y: edge === "top" ? "-101%" : "101%" });
// //       gsap.to(marquee, { y: "0%", ...animDefaults });
// //     });
  
// //     item.addEventListener('mouseleave', ev => {
// //       const rect = item.getBoundingClientRect();
// //       const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);
// //       gsap.to(marquee, { y: edge === "top" ? "-101%" : "101%", ...animDefaults });
// //     });
// //   });
  

// //   const tl3 = gsap.timeline({
// //     scrollTrigger: {
// //       trigger: "#team-section",   
// //       scroller: "body",      
// //       start: "top 65%", 
// //       toggleActions: "play none none reverse",  
// //       // markers: true,          
// //     }
// //   });
// //   tl3.from("#team-section, #team-section #imagediv, #team-section #imagediv #inimagediv1", { 
// //     y: 100, 
// //     opacity: 0, 
// //     stagger: 0.2 
// // });