const inputRangeEl = document.querySelector("#font-size-control");
const outputEl = document.querySelector("#text");

outputEl.style.fontSize = inputRangeEl.value + "px";

inputRangeEl.addEventListener("input", event => {
	outputEl.style.fontSize = event.target.value + "px";
});
