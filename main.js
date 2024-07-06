

document.addEventListener('DOMContentLoaded', (event) => {
    const fetchButton = document.querySelector("#fetchPokemon");
    fetchButton.addEventListener("click", getPokemon);
});

async function getPokemon() {
    try {
        const front = document.querySelector("#front").checked
        const back = document.querySelector("#back").checked

        const pokemonName = document.querySelector("#Pokemonname").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        
        if(!response.ok) {
            throw new Error ("Could not fetch resource")
        }
      
        const data = await response.json()
 

        let pokemonSprite;
        
        if (front) {
            console.log("front")
            pokemonSprite = data.sprites.front_default
        }
        else if (back){
            console.log("back")
            pokemonSprite = data.sprites.back_default
        }
        else {
            console.log("front")
            pokemonSprite = data.sprites.front_default
        }

        const frontSprite = data.sprites.front_default
        const backSprite = data.sprites.back_default    

        //const pokemonSprite = data.sprites.front_default
        const imgElement = document.querySelector("#pokemonImg")

        imgElement.src = pokemonSprite
        imgElement.style.display = "block"

    }
    catch(error) {
        console.error(error)

    }
}

