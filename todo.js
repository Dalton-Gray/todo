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
	
	// Create a "close" button and append it to each list item
	let btn = document.createElement("BUTTON");
	btn.innerHTML = "remove";
	btn.classList.add("btn");
	btn.classList.add("btn-danger");
	btn.id = id;
	document.getElementById("item" + id).appendChild(btn);

	btn.onclick = function() {
		window.alert("test");
	};
}

/*
function deleteButton(){


}

*/


document.getElementById("1").addEventListener('click', (event) => {
	window.alert("test");

})
