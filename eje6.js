// Paso 6: 
function mostrarSpriteCharizard() {
  const url = "https://pokeapi.co/api/v2/pokemon/charizard";

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log("URL del sprite de Charizard:", data.sprites.front_default);
    })
    .catch(error => {
      console.error("Error:", error);
    });
}

mostrarSpriteCharizard();
