function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const btnChangeColorEl = document.querySelector(".change-color");
const bodyEl = document.body;
const outputColorEl = document.querySelector(".color");

const handleChangeColor = () => {
	let color = getRandomHexColor();

	bodyEl.style.backgroundColor = color;
	outputColorEl.textContent = `- ${color}`;
};

btnChangeColorEl.addEventListener("click", handleChangeColor);
