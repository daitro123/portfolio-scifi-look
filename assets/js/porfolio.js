import gsap from "gsap";

const items = document.querySelectorAll(".portfolio__item");

items.forEach((item) => {
	const direction = item.dataset.animDirection;
	console.log(direction);
	const tl = gsap.timeline({
		defaults: {
			ease: "Power2.out",
		},
	});

	if (direction) {
		if (direction === "fromTop") {
			fromTop(item, tl);
		} else if (direction === "fromBottom") {
			fromBottom(item, tl);
		} else if (direction === "fromLeft") {
			fromLeft(item, tl);
		} else {
			fromRight(item, tl);
		}
	}
});

function fromTop(item, tl) {
	const overview = item.querySelector(".overview");
	const cover = item.querySelector(".cover");

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

function fromRight(item, tl) {
	const overview = item.querySelector(".overview");
	const cover = item.querySelector(".cover");

	gsap.set([overview, cover], { xPercent: 100 });

	item.addEventListener("mouseenter", (e) => {
		tl.fromTo(cover, { xPercent: 100 }, { xPercent: 0 }).fromTo(
			overview,
			{ xPercent: 100 },
			{ xPercent: 0 },
			"-=0.2"
		);
	});

	item.addEventListener("mouseleave", (e) => {
		tl.to(overview, { xPercent: -100 }).to(cover, { xPercent: -100 }, "-=0.2");
	});
}

function fromLeft(item, tl) {
	const overview = item.querySelector(".overview");
	const cover = item.querySelector(".cover");

	gsap.set([overview, cover], { xPercent: -100 });

	item.addEventListener("mouseenter", (e) => {
		tl.fromTo(cover, { xPercent: -100 }, { xPercent: 0 }).fromTo(
			overview,
			{ xPercent: -100 },
			{ xPercent: 0 },
			"-=0.2"
		);
	});

	item.addEventListener("mouseleave", (e) => {
		tl.to(overview, { xPercent: 100 }).to(cover, { xPercent: 100 }, "-=0.2");
	});
}

function fromBottom(item, tl) {
	const overview = item.querySelector(".overview");
	const cover = item.querySelector(".cover");

	gsap.set([overview, cover], { yPercent: 100 });

	item.addEventListener("mouseenter", (e) => {
		tl.fromTo(cover, { yPercent: 100 }, { yPercent: 0 }).fromTo(
			overview,
			{ yPercent: -100 },
			{ yPercent: 0 },
			"-=0.2"
		);
	});

	item.addEventListener("mouseleave", (e) => {
		tl.to(overview, { yPercent: -100 }).to(cover, { yPercent: -100 }, "-=0.2");
	});
}
