const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

const handleOutputName = event => {
	if (event.target.value !== "") {
		spanEl.textContent = event.target.value;
	} else {
		spanEl.textContent = "Anonymous";
	}
};

inputEl.addEventListener("input", handleOutputName);
