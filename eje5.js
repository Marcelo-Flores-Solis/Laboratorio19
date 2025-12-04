// Paso 5: 

async function obtenerDatosPikachu() {
    const url = "https://pokeapi.co/api/v2/pokemon/pikachu";

    try {
        const response = await fetch(url);
        
        const data = await response.json();

        console.log("Nombre:", data.name);
        console.log("Altura:", data.height);
        console.log("Peso:", data.weight);

    } catch (error) {
        console.error("Error:", error);
    }
}

obtenerDatosPikachu();