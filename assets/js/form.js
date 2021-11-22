import $ from "jquery";

// Get the form.
var form = $("#contact-form");

// Get the messages div.
var formMessages = $(".form__message");

// Set up an event listener for the contact form.
$(form).submit(function (e) {
	// Stop the browser from submitting the form.
	e.preventDefault();

	// check if any field is missing and apply fail class if it does
	const elementsInError = [];
	const elements = e.target.elements;

	[...elements].forEach((element) => {
		if (element.value.length < 1) {
			element.classList.add("fail");
			elementsInError.push(element);
		}
	});

	if (elementsInError.length != 0) {
		return false;
	} else {
		elementsInError.forEach((el) => {
			el.classList.remove("fail");
		});
	}

	// Serialize the form data.
	var formData = $(form).serialize();

	console.log(formData);

	// Submit the form using AJAX.
	$.ajax({
		type: "POST",
		url: $(form).attr("action"),
		data: formData,
	})
		.done(function (response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass("fail");
			$(formMessages).addClass("success");

			// Set the message text.
			$(formMessages).html(`<p>${response}</p>`);

			// Clear the form.
			$("#contact-form input,#contact-form textarea").val("");
		})
		.fail(function (data) {
			// Make sure that the formMessages div has the 'fail' class.
			$(formMessages).removeClass("success");
			$(formMessages).addClass("fail");

			console.log(data);
			// Set the message text.
			if (data.responseText !== "") {
				$(formMessages).html(`<p>${data.responseText}</p>`);
			} else {
				$(formMessages).html(`<p>Nastala chyba</p>`);
			}
		});
});

// const form = document.getElementById("contact-form");

// form.addEventListener("submit", (e) => {
// 	e.preventDefault();
// 	const data = new URLSearchParams(new FormData(e.target));
// 	const elementsInError = [];
// 	const elements = e.target.elements;

// 	[...elements].forEach((element) => {
// 		if (element.value.length < 1) {
// 			element.classList.add("fail");
// 			elementsInError.push(element);
// 		}
// 	});

// 	console.log(data);

// 	if (elementsInError.length == 0) {
// 		fetch("/contact-form.php", {
// 			method: "post",
// 			body: data,
// 		})
// 			.then((res) => {
// 				return res.json();
// 			})
// 			.then((res) => console.log(res));
// 	}
// });
