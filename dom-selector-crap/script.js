var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li");

listItems.forEach(item => {
	addToggleClass(item);
	addDeleteFunction(item);
})

function inputLength() {
	return input.value.length;
}

function addToggleClass(item) {
	item.addEventListener("click", () => item.className = item.className === "done" ? null : "done");
}

function addDeleteFunction(li) {
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("Delete"))

	li.insertAdjacentElement("afterend", button);
	button.addEventListener("click", () => {
		button.remove();
		li.remove();
	})
}

function createListElement() {
	var li = document.createElement("li");

	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);

	addToggleClass(li);
	addDeleteFunction(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);