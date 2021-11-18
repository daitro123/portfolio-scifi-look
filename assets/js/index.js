import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Scrollbar from "smooth-scrollbar";
import "./porfolio.js";

const bodyScrollBar = Scrollbar.init(document.querySelector("#smooth-scrollbar"), {
	damping: 0.06,
	renderByPixels: false,
});

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
			duration: 1.5,
			scrollTrigger: {
				trigger: ".portfolio__header",
				ease: "Power2.out",
				start: "center bottom", // the default values
			},
		});
	},
});

/*
 * SIDE NAVIGATION
 */
const sideNavDotHome = document.querySelector(".side-dot-nav__item--home");
const sideNavDotPortfolio = document.querySelector(".side-dot-nav__item--portfolio");
const sideNavDotContact = document.querySelector(".side-dot-nav__item--contact");

sideNavDotContact.addEventListener("click", () => {
	gsap.to(window, { duration: 1.2, scrollTo: "#contact" });
});

sideNavDotPortfolio.addEventListener("click", () => {
	gsap.to(window, { duration: 1.2, scrollTo: "#portfolio" });
});

sideNavDotHome.addEventListener("click", () => {
	gsap.to(window, { duration: 1.2, scrollTo: 0 });
});

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

/* Top Links */
const menuLinks = document.querySelectorAll(".nav__link");

menuLinks.forEach((link) => {
	const target = link.getAttribute("href");

	link.addEventListener("click", (e) => {
		e.preventDefault();
		bodyScrollBar.scrollIntoView(document.querySelector(target), {
			damping: 0.06,
		});
	});
});

// const cursor = document.getElementById("cursor");
// const cursorBg = document.getElementById("cursor-bg");
// let yAxis = 0;
// let xAxis = 0;
// let cursorSizeClass;

// window.addEventListener("mousemove", (e) => {
// 	yAxis = e.clientY;
// 	xAxis = e.clientX;
// 	cursorSizeClass = e.target.dataset.cursor;

// 	if (cursorSizeClass) {
// 		cursorBg.classList.add(cursorSizeClass);
// 	} else {
// 		cursorBg.classList = "";
// 	}

// 	cursor.style.transform = `translate(${xAxis}px, ${yAxis}px) translate(-50%, -50%)`;
// });
