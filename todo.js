function addItem(){
	let item = document.getElementById("todoInput").value;
	let text = document.createTextNode(item);
	let newItem = document.createElement("li");
	newItem.appendChild(text);
	newItem.classList.add("list-group-item")
	document.getElementById("todoList").appendChild(newItem);
}
