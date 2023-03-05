function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const inputEl = document.querySelector("input");
const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

const handleCreateBoxes = () => {
	const amount = inputEl.value;

	if ((amount > 0) & (amount <= 100)) {
		boxesEl.classList.add("decor-list");

		let width = 30;
		let heigth = 30;
		let setBoxes = [];

		for (let i = 1; i <= amount; i += 1) {
			const box = document.createElement("div");
			box.style.width = width + "px";
			box.style.height = heigth + "px";
			box.style.backgroundColor = getRandomHexColor();
			box.classList.add("decor-list-item");

			width += 10;
			heigth += 10;

			setBoxes.push(box);
		}
		boxesEl.append(...setBoxes);
	} else {
		alert(`number must be >0 and <=100`);
	}
};

const handleDestroyBoxes = () => {
	boxesEl.innerHTML = "";
};

btnCreateEl.addEventListener("click", handleCreateBoxes);
btnDestroyEl.addEventListener("click", handleDestroyBoxes);
