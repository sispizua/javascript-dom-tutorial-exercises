let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

// Your code here
let select = document.getElementById("mySelect");

for (let i = 0; i < countries.length; i++) {
    let option = document.createElement("option");
    option.value=countries[i];
    option.textContent=countries[i];
    select.appendChild(option);
    
}
select.addEventListener("change", function () {
    alert("Selected country: " + this.value);
});