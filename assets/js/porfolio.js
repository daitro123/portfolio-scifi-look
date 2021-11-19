import gsap from "gsap";

const items = document.querySelectorAll(".portfolio__item");

items.forEach((item) => {
	// const direction = item.dataset.animDirection;

	const tl = gsap.timeline({
		defaults: {
			ease: "Power2.out",
		},
	});

	fromTop(item, tl);
});

function fromTop(item, tl) {
	const overview = item.querySelector(".overview");
	const cover = item.querySelector(".cover");

	if (!overview || !cover) {
		return false;
	}

	gsap.set([overview, cover], { yPercent: -100 });

	item.addEventListener("mouseenter", (e) => {
		tl.fromTo(cover, { yPercent: -100 }, { yPercent: 0 }).fromTo(
			overview,
			{ yPercent: -100 },
			{ yPercent: 0 },
			"-=0.2"
		);
	});

	item.addEventListener("mouseleave", (e) => {
		tl.to(overview, { yPercent: 100 }).to(cover, { yPercent: 100 }, "-=0.2");
	});
}
