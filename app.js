let button = document.getElementById("button");
let image = document.getElementById("image");
let pokeNumber = document.getElementById("number");
let pokeName = document.getElementById("name");
let shiny = document.getElementById("shiny");
let normal = document.getElementById("normal")
let response = null;

console.log("app.js loaded");

const changePokemon = async () => {
    let randomNumber = Math.ceil(Math.random() * 1009) + 1;

    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

    let data = await fetch(requestString);
    response = await data.json();
    console.log(response);

    image.src = response.sprites.front_default;
    pokeNumber.textContent = `#${response.id}`;
    pokeName.textContent = response.name;
}

changePokemon();
button.addEventListener("click", changePokemon);

const shinyPokemon = () => {
    console.log("Shiny button clicked");
    if (response) {
        image.src = response.sprites.front_shiny;
    } 
    console.log(response.sprites.front_shiny);
}

const normalPokemon = () => {
    console.log("Shiny button clicked");
    if (response) {
        image.src = response.sprites.front_default;
    } 
    
}

shiny.addEventListener("click", shinyPokemon);
normal.addEventListener("click", normalPokemon);
