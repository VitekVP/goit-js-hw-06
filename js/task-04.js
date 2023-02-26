const btnDecrementEl = document.querySelector('[data-action="decrement"]');
const btnIncrementEl = document.querySelector('[data-action="increment"]');
const spanEl = document.querySelector("#value");

let counterValue = 0;

const stepCounter = 1;

const handleDecrementCounter = () => {
	counterValue -= stepCounter;
	spanEl.textContent = counterValue;
};

const handleIncrementCounter = () => {
	counterValue += stepCounter;
	spanEl.textContent = counterValue;
};

btnDecrementEl.addEventListener("click", handleDecrementCounter);
btnIncrementEl.addEventListener("click", handleIncrementCounter);
