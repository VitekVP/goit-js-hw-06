const inputEl = document.querySelector('[data-length="6"]');

const correctLength = Number(inputEl.dataset.length);

const handleValidationInput = event => {
	const inputValue = event.target.value.length;

	if (inputValue === correctLength) {
		inputEl.classList.add("valid");
		inputEl.classList.remove("invalid");
	} else if (inputValue === 0) {
		inputEl.classList.remove("invalid");
		inputEl.classList.remove("valid");
	} else {
		inputEl.classList.add("invalid");
		inputEl.classList.remove("valid");
	}
};

inputEl.addEventListener("blur", handleValidationInput);
