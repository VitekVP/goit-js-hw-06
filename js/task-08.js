const formEl = document.querySelector(".login-form");

const handleSubmitForm = event => {
	event.preventDefault();

	const {
		elements: { email, password },
	} = event.target;

	if (email.value === "" || password.value === "") {
		alert("All fields must be filled !!!");

		return;
	}

	console.log(`Login: ${email.value}`);
	console.log(`Password: ${password.value}`);

	event.target.reset();
};

formEl.addEventListener("submit", handleSubmitForm);
