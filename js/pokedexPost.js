function previous() {
    let pokemonId = document.pokemonKeySend.pokemonId.value
    pokemonId = (Number(pokemonId)-1 <= 1) ? 1 : Number(pokemonId)-1;
    getPokemon(pokemonId)
}

function next() {
    let pokemonId = document.pokemonKeySend.pokemonId.value
    pokemonId = (Number(pokemonId)+1 >= 898) ? 898 : Number(pokemonId)+1;
    getPokemon(pokemonId)
}

function pokemonKeyId() {
    let pokemonId = document.pokemonKeySend.pokemonId.value
    pokemonId = (pokemonId <= 1) ? 1 : pokemonId;
    pokemonId = (pokemonId >= 898) ? 898 : pokemonId;
    getPokemon(pokemonId)
}

function getPokemon(id = 1) {
    let pokemonApi = "https://pokeapi.co/api/v2/pokemon/"+id
    let pokemonreq = new XMLHttpRequest();
    let typesreq = new XMLHttpRequest();
    pokemonreq.open("GET", pokemonApi, false)
    pokemonreq.send()
    let pokemonData = JSON.parse(pokemonreq.responseText)
    document.getElementById("pokemonId").value = pokemonData.id
    document.getElementById("name-display").innerHTML = pokemonData.name
    document.getElementById("imgPokemon").src = pokemonData.sprites.front_default
    document.getElementById("pokemonType").innerHTML = ""
    pokemonData.types.map(item => 
        fetch("./assets/PokemonTypes.json")
        .then(response => response.json())
        .then(response => document.getElementById("pokemonType").innerHTML += "<img src="+response[item.type.name]+"  height=50>")    
    )
}