let id = 0;

function addItem(){
	id++;

	let item = document.getElementById("todoInput").value;
	let text = document.createTextNode(item);
	let newItem = document.createElement("li");
	newItem.appendChild(text);
	newItem.classList.add("list-group-item")
	newItem.id = "item" + id;
	document.getElementById("todoList").appendChild(newItem);
	deleteButton();



}


function deleteButton(){
// Create a "close" button and append it to each list item
	let btn = document.createElement("BUTTON");
	btn.innerHTML = "remove";
	btn.classList.add("btn");
	btn.classList.add("btn-danger");
	btn.id = id;
	document.getElementById("item" + id).appendChild(btn);
}

document.getElementById("btn-danger").addEventListener('click', (event) => {
	document.getElementById("item")

})


