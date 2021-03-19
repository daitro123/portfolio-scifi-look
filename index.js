gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);

// parallax on portfolio cards
const animations = () => {
	if (window.innerWidth > 600) {
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
	} else {
		const initialTimeline = gsap.timeline({ ease: "power4.out" });
		initialTimeline
			.to(".circle--blue", { opacity: 1, x: 0, duration: 1.5 })
			.to(".circle--pinkish", { opacity: 1, x: 0, duration: 1 }, "-=0.5")
			.from(".hero__heading", { opacity: 0, y: -10, duration: 0.8 }, "-=0.5")
			.from(".hero__subheading div", { opacity: 0, y: 10, duration: 0.5 }, "-=0.3");
	}
};

animations();

// clear inline styles on resize and set values to finished state (hero section circles)
window.addEventListener("resize", () => {
	gsap.set(
		".portfolio__card, .portfolio__card img, .circle, .hero__heading, .hero__subheading div",
		{ clearProps: "all" }
	);

	if (window.innerWidth > 600) {
		gsap.set(".circle--blue", { xPercent: -30, opacity: 1 });
		gsap.set(".circle--pinkish", { xPercent: 30, opacity: 1 });
	}
});

ScrollTrigger.matchMedia({
	"(min-width: 600px)": function () {
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
	},
});

gsap.from(".side-dot-nav", {
	xPercent: -100,
	scrollTrigger: {
		trigger: ".portfolio",
		start: "top center", // the default values
		toggleActions: "play none none reverse",
	},
});
