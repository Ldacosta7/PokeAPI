let button = document.getElementById("button");

const changePokemon = () => {
    let randomNumber = Math.ceil(Math.random() * 150) + 1; 
    //Math.random renvoi un nombre entre O et 1 qu'on multiplie par le nomnbre de pokemon souhaité ici la 1e generation
    //Math.ceil permet de plafonner le nombre obtenu pour l'arrondir à un entier 
    //pour ne pas obtenir 0, plutot que de faire * 151 (taille du dex de la 1st gen) on fait * 150 + 1 par avoir au minimum 1

    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
    // ici on inject le numero generer aleatoirement par randomNumber dans l'url de PokeAPI pour faire la requete 

    let data = fetch(requestString) ;
    //fetch permet de faire une requete en Javascript, on rentre la valeur de requestString dans le fetch pour faire la requete sur l'url génerer
}

button.addEventListener("click", changePokemon);