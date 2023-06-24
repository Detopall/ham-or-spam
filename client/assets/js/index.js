"use strict";

document.addEventListener("submit", handleSubmit);

async function handleSubmit(e) {
	e.preventDefault();
	const form = e.target;
	const formData = new FormData(form);
	const data = Object.fromEntries(formData);
	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	};

	const url = "http://localhost:5000/sms";

	const fetched = await fetch(url, options)
	const jsonFetched = await fetched.json();
	await handleResult(jsonFetched);
}

function handleResult(data) {
	const result = document.getElementById("result");
	console.log(data);
	
	//reset result
	result.innerHTML = "";
	result.removeAttribute("class");

	//add result
	result.innerHTML = data.prediction;
	result.classList.add(data.prediction);
}