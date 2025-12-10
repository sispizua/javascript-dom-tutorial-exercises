let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
	//creo el elemnte
	let elment = document.createElement('li');
	elment.innerHTML='forth element';
	//lo agrego a codigo
	document.getElementById("myList").appendChild(elment);



});
