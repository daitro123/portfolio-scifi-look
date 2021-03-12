const tl = gsap.timeline({ ease: "power4.out" });

tl.from(".circle--blue", { opacity: 0, x: -80, duration: 2.5 })
	.from(".circle--golden", { opacity: 0, x: "1", duration: 1.2 }, "-=1.5")
	.from(".heading", { opacity: 0, x: -20, duration: 1 }, "-=1")
	.from(
		".subheading div",
		{ opacity: 0, x: 15, duration: 1, ease: "Power1.out", stagger: 0.1 },
		"-=0.6"
	);
