const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const setListItemEls = ingredients.map(element => {
	const listItemEl = document.createElement("li");
	listItemEl.classList.add("item");
	listItemEl.textContent = element;

	return listItemEl;
});

const ingredientsEl = document.querySelector("#ingredients");

ingredientsEl.append(...setListItemEls);
