document.documentElement.classList.add("has-js");

const mobileNavigation = window.matchMedia("(max-width: 36rem)");

document.querySelectorAll(".nav-toggle").forEach((button) => {
	const navigation = document.getElementById(button.getAttribute("aria-controls"));
	if (!navigation) return;

	const closeNavigation = () => {
		button.setAttribute("aria-expanded", "false");
		button.setAttribute("aria-label", "Abrir navegação");
		navigation.removeAttribute("data-open");
	};

	button.addEventListener("click", () => {
		const isExpanded = button.getAttribute("aria-expanded") === "true";
		button.setAttribute("aria-expanded", String(!isExpanded));
		button.setAttribute("aria-label", isExpanded ? "Abrir navegação" : "Fechar navegação");
		if (isExpanded) navigation.removeAttribute("data-open");
		else navigation.setAttribute("data-open", "");
	});

	navigation.addEventListener("click", (event) => {
		if (mobileNavigation.matches && event.target.closest("a")) closeNavigation();
	});

	 mobileNavigation.addEventListener("change", () => {
		closeNavigation();
	});

	window.addEventListener("keydown", (event) => {
		if (event.key !== "Escape") return;
		if (button.getAttribute("aria-expanded") !== "true") return;
		closeNavigation();
		button.focus();
	});
});

document.querySelectorAll(".nav-dropdown").forEach((dropdown) => {
	dropdown.addEventListener("toggle", () => {
		if (!dropdown.open) return;
		document.querySelectorAll(".nav-dropdown[open]").forEach((otherDropdown) => {
			if (otherDropdown !== dropdown) otherDropdown.open = false;
		});
	});

	dropdown.addEventListener("keydown", (event) => {
		if (event.key !== "Escape" || !dropdown.open) return;
		dropdown.open = false;
		dropdown.querySelector("summary").focus();
	});
});

document.querySelectorAll("[data-dialog-open]").forEach((trigger) => {
	const dialog = document.getElementById(trigger.dataset.dialogOpen);
	if (!dialog || typeof dialog.showModal !== "function") return;

	trigger.addEventListener("click", () => dialog.showModal());
	dialog.addEventListener("click", (event) => {
		if (event.target === dialog) dialog.close();
	});
});

const registrationForm = document.querySelector(".registration-form");

if (registrationForm) {
	const feedback = document.getElementById("form-feedback");

	const showFeedback = (message, state) => {
		feedback.textContent = message;
		feedback.dataset.state = state;
		feedback.hidden = false;
	};

	registrationForm.addEventListener("invalid", (event) => {
		event.target.setAttribute("aria-invalid", "true");
		showFeedback("Revise os campos indicados antes de continuar.", "error");
	}, true);

	const clearValidFieldState = (event) => {
		if (event.target.validity?.valid) event.target.removeAttribute("aria-invalid");
		if (registrationForm.checkValidity()) feedback.hidden = true;
	};

	registrationForm.addEventListener("input", clearValidFieldState);
	registrationForm.addEventListener("change", clearValidFieldState);
	registrationForm.addEventListener("submit", (event) => {
		event.preventDefault();
		showFeedback("Demonstração: seus dados não foram enviados nem armazenados.", "notice");
	});
}