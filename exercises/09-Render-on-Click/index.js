//const { createElement } = require("react");

let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
	//creo el div
	let element = document.createElement('div');
	//le agrego estilo 
	element.style.background ='yellow';
	// agrego lo que quiero que este dentro de ese div
	element.innerHTML='Hello World';
	//llevo el elemento al body
	document.body.appendChild(element);

});
