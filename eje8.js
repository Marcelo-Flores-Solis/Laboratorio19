// Paso 8: 

function obtenerPokemonAleatorio() {
  const min = 1;
  const max = 898;
  const idAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

  const url = `https://pokeapi.co/api/v2/pokemon/${idAleatorio}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(`ID aleatorio: ${idAleatorio}`);
      console.log("Nombre:", data.name);
    })
    .catch(error => {
      console.error("Error al obtener el Pokémon:", error);
    });
}

obtenerPokemonAleatorio();
