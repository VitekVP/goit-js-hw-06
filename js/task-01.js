const setItemEls = document.querySelectorAll(".item");

const quantityCategories = setItemEls.length;

console.log(`Number of categories: ${quantityCategories}`);

const setCategories = setItemEls.forEach(element => {
	console.log("Category:", element.firstElementChild.textContent);
	console.log("Elements:", element.lastElementChild.children.length);
});
