let id = 0;

function addItem(){
	id++;

	// Takes text in text input and turns it into a new li 
	let item = document.getElementById("todoInput").value;
	let text = document.createTextNode(item);
	let newItem = document.createElement("li");
	newItem.appendChild(text);
	newItem.classList.add("list-group-item")
	newItem.id = "item" + id;
	document.getElementById("todoList").appendChild(newItem);
	
	// Create a "close" button and append it to each list item
	let btn = document.createElement("BUTTON");
	btn.innerHTML = "remove";
	btn.classList.add("btn");
	btn.classList.add("btn-danger");
	document.getElementById("item" + id).appendChild(btn);

	// Function that removes the item when close button clicked
	btn.onclick = function() {
		var div = this.parentElement;
		div.style.display = "none";
	};
}
