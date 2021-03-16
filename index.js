gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);

const initialTimeline = gsap.timeline({ ease: "power4.out" });

initialTimeline
	.to(".circle--blue", { opacity: 1, xPercent: -30, duration: 2.5 })
	.to(".circle--pinkish", { opacity: 1, xPercent: 30, duration: 2 }, "-=2")
	.from(".hero__heading", { opacity: 0, x: -20, duration: 1 }, "-=1")
	.from(
		".hero__subheading div",
		{ opacity: 0, x: 15, duration: 1, ease: "Power1.out", stagger: 0.1 },
		"-=0.6"
	);

// parallax on portfolio cards

gsap.utils.toArray(".portfolio__card").forEach((element) => {
	gsap.from(element.querySelector("img"), {
		yPercent: 50,
		ease: "none",
		scrollTrigger: {
			trigger: element,
			start: "top bottom", // the default values
			end: "center+=" + window.innerHeight / 4 + " center",
			scrub: true,
		},
	});
	gsap.from(element, {
		yPercent: 50,
		ease: "none",
		scrollTrigger: {
			trigger: element,
			start: "top bottom", // the default values
			end: "center center",
			scrub: true,
		},
	});
});

gsap.from(".side-dot-nav", {
	xPercent: -100,
	scrollTrigger: {
		trigger: ".portfolio",
		start: "top center", // the default values
		markers: true,
		toggleActions: "play none none reverse",
	},
});

//animate circles

gsap.to(".circle--blueish", {
	repeat: -1,
	motionPath: {
		path: [
			{ x: 0, y: 0 },
			{ x: 1200, y: -500 },
			{ x: 400, y: 200 },
		],
		curviness: 2,
	},
	duration: 120,
	rotate: 200,
	yoyo: true,
	ease: "power1.inOut",
});

gsap.to(".circle--greenish", {
	repeat: -1,
	motionPath: {
		path: [
			{ x: 0, y: 0 },
			{ x: -1200, y: -200 },
			{ x: -1400, y: 0 },
			{ x: 100, y: 200 },
		],
		curviness: 2,
	},
	duration: 90,
	rotate: 360,
	yoyo: true,
	ease: "power1.inOut",
});
