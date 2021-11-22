import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Scrollbar from "smooth-scrollbar";
import "./porfolio.js";
import "./form.js";

const bodyScrollBar = Scrollbar.init(document.querySelector("#smooth-scrollbar"), {
	damping: 0.06,
	// renderByPixels: false,
});

bodyScrollBar.setPosition(0, 0);
bodyScrollBar.track.xAxis.element.remove();

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

ScrollTrigger.scrollerProxy(document.body, {
	scrollTop(value) {
		if (arguments.length) {
			bodyScrollBar.scrollTop = value;
		}

		return bodyScrollBar.scrollTop;
	},
});

ScrollTrigger.matchMedia({
	"(min-width: 600px)": function () {
		gsap.from(".portfolio__header", {
			xPercent: -25,
			autoAlpha: 0,
			scrollTrigger: {
				trigger: ".portfolio__header",
				ease: "Power2.out",
				start: "center bottom", // the default values
				scrub: 1.5,
			},
		});

		gsap.from(".contact__header", {
			xPercent: 25,
			autoAlpha: 0,
			scrollTrigger: {
				trigger: ".contact__header",
				ease: "Power2.out",
				start: "top-=500 bottom", // the default values
				end: "bottom center",
				scrub: 1.5,
			},
		});
	},
	"min-width: 1200px": function () {
		gsap.to(".side-dot-nav", {
			xPercent: 100,
			autoAlpha: 1,
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
	},
});

gsap.to(".lines circle", {
	scale: 1.1,
	// yPercent: 25,
	scrollTrigger: {
		trigger: ".lines",
		start: "top top",
		scrub: 1,
		// markers: true,
	},
});

/*
 * SIDE NAVIGATION
 */
const sideNavDotHome = document.querySelector(".side-dot-nav__item--home");
const sideNavDotPortfolio = document.querySelector(".side-dot-nav__item--portfolio");
const sideNavDotContact = document.querySelector(".side-dot-nav__item--contact");

sideNavDotContact.addEventListener("click", () => {
	bodyScrollBar.scrollIntoView(document.querySelector("#contact"), {
		damping: 0.06,
	});
});

sideNavDotPortfolio.addEventListener("click", () => {
	bodyScrollBar.scrollIntoView(document.querySelector("#portfolio"), {
		damping: 0.06,
	});
});

sideNavDotHome.addEventListener("click", () => {
	bodyScrollBar.scrollIntoView(document.querySelector("#top-header"), {
		damping: 0.06,
	});
});

// ScrollTrigger.matchMedia({});

/* Top Links */
const menuLinks = document.querySelectorAll(".nav__link, .link-to-contact");

menuLinks.forEach((link) => {
	const target = link.getAttribute("href");

	link.addEventListener("click", (e) => {
		e.preventDefault();
		bodyScrollBar.scrollIntoView(document.querySelector(target), {
			damping: 0.06,
		});
	});
});
