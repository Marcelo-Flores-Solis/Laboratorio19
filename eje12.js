//Paso 12:
function mostrarStatsPokemon() {
  const url = "https://pokeapi.co/api/v2/pokemon/pikachu";

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // data.stats es un arreglo de stats base
      data.stats.forEach(stat => {
        console.log(stat.stat.name + ": " + stat.base_stat);
      });
    })
    .catch(error => {
      console.error("Error:", error);
    });
}

mostrarStatsPokemon();
