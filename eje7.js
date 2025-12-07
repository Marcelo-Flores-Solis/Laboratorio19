function listarPrimeros20Pokemon() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=20";

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const resultados = data.results; 
      resultados.forEach((pokemon, indice) => {
        console.log(`${indice + 1}. ${pokemon.name}`);
      });
    })
    .catch(error => {
      console.error("Error al obtener los Pokemon:", error);
    });
}

listarPrimeros20Pokemon();
