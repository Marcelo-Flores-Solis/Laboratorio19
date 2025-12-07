// Paso 10:

const contenedor = document.getElementById("lista-pokemones");

const pokemones = []; 

function crearTarjeta(pokemon) {
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta-pokemon");

  const img = document.createElement("img");
  img.src = pokemon.sprites.front_default;
  img.alt = pokemon.name;

  const nombre = document.createElement("h3");
  nombre.textContent = pokemon.name;

  const id = document.createElement("p");
  id.textContent = `ID: ${pokemon.id}`;

  tarjeta.appendChild(img);
  tarjeta.appendChild(nombre);
  tarjeta.appendChild(id);

  contenedor.appendChild(tarjeta);
}

async function cargarPokemones() {
  for (let i = 1; i <= 10; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error al obtener el Pokemon ${i}`);
      }
      const data = await response.json();
      pokemones.push(data);      
      crearTarjeta(data);        
    } catch (error) {
      console.error(error);
    }
  }
}

cargarPokemones();
