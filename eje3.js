// Paso 3: 

function obtenerNombrePokemon() {
    const id = prompt("Ingresa el ID para buscar al pokemon:");

    if (!id) {
        console.warn("No ingresaste ningún ID");
        return;
    }

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`; 

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Pokémon no encontrado (Status: ${response.status})`);
            }
            return response.json(); 
        })
        .then(data => {
            
            console.log(`%c El nombre del Pokemon con ID ${id} es: ${data.name}`);
        })
        .catch(error => {
            
            console.error("Ocurrió un error:", error.message);
        });
}

obtenerNombrePokemon();