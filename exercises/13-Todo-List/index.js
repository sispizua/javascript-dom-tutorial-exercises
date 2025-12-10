// Your code here
let lista = document.querySelector("ul");

lista.addEventListener("click", function (event) {
    //si el click se hizo en un elemnto con la clase de "fa-trash"
    if(event.target.classList.contains("fa-trash")){
        //buscamos el li mas cercano al elemento con la clse trash y lo borramos 
        const li = event.target.closest("li");
        if(li)li.remove();
        

    }
})

// ahora para agregar mas elementos a la lista

const input = document.getElementById("addToDo")

//ahora hacemos el evento que agrege

input.addEventListener("keypress", function (event){
    if(event.key === "Enter"){
        
        const value = input.value.trim();
        // si el velor es cero no devuleve nada
        if(value === ""){
            return;
        }
        //creo el li para agregarlo
        const li =document.createElement("li");
        li.innerHTML =  `<span><i class="fa fa-trash"></i></span> ${value}`;
        lista.appendChild(li);
        //esto limpia el valor de la variable una vez que termino para asi poder seguir agregnado elementos a la lista
        input.value="";
    }
})