gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);

const animations = () => {
	if (window.innerWidth > 600) {
		const initialTimeline = gsap.timeline({ ease: "power4.out" });
		initialTimeline
			.to(".circle--blue", { autoAlpha: 1, xPercent: -30, duration: 2.5 })
			.to(".circle--pinkish", { autoAlpha: 1, xPercent: 30, duration: 2 }, "-=2")
			.from(".hero__heading", { autoAlpha: 0, x: -20, duration: 1 }, "-=1")
			.from(
				".hero__subheading div",
				{ autoAlpha: 0, x: 15, duration: 1, ease: "Power1.out", stagger: 0.1 },
				"-=0.6"
			);
	} else {
		const initialTimeline = gsap.timeline({ ease: "power4.out" });
		initialTimeline
			.to(".circle--blue", { autoAlpha: 1, x: 0, duration: 1.5 })
			.to(".circle--pinkish", { autoAlpha: 1, x: 0, duration: 1 }, "-=0.5")
			.from(".hero__heading", { autoAlpha: 0, y: -10, duration: 0.8 }, "-=0.5")
			.from(".hero__subheading div", { autoAlpha: 0, y: 10, duration: 0.5 }, "-=0.3");
	}
};

animations();

// clear inline styles on resize and set values to finished state (hero section circles)
window.addEventListener("resize", () => {
	gsap.set(
		".portfolio__card, .portfolio__card img, .circle, .hero__heading, .hero__subheading div",
		{ autoAlpha: 1, clearProps: "transform" }
	);

	if (window.innerWidth > 600) {
		gsap.set(".circle--blue", { xPercent: -30, autoAlpha: 1 });
		gsap.set(".circle--pinkish", { xPercent: 30, autoAlpha: 1 });
	}
});

// parallax on portfolio cards
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

// side dot nav animations and logic
const sideNavDotPortfolio = document.querySelector(".side-dot-nav__item--portfolio");
const sideNavDotContact = document.querySelector(".side-dot-nav__item--contact");

gsap.from(".side-dot-nav", {
	xPercent: -100,
	scrollTrigger: {
		trigger: ".portfolio",
		start: "top center", // the default values
		end: "bottom center",
		toggleActions: "play none none reverse",
		onEnter: () => {
			sideNavDotPortfolio.classList.add("side-dot-nav__item--active");
		},
		onLeave: () => {
			sideNavDotPortfolio.classList.remove("side-dot-nav__item--active");
			sideNavDotContact.classList.add("side-dot-nav__item--active");
		},
		onEnterBack: () => {
			sideNavDotPortfolio.classList.add("side-dot-nav__item--active");
			sideNavDotContact.classList.remove("side-dot-nav__item--active");
		},
		onLeaveBack: () => {
			sideNavDotPortfolio.classList.remove("side-dot-nav__item--active");
		},
	},
});
