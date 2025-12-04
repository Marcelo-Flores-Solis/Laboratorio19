//Paso 4: 

function obtenerDatosPikachu() {
    const url = "https://pokeapi.co/api/v2/pokemon/pikachu";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("Nombre:", data.name);
            console.log("Altura:", data.height);
            console.log("Peso:", data.weight);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}


obtenerDatosPikachu();