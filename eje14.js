// Paso 14:
const contenedor = document.getElementById("contenedor-tarjetas");
const btnAnterior = document.getElementById("btn-anterior");
const btnSiguiente = document.getElementById("btn-siguiente");

const pokemones = [];      
let indiceInicio = 0;      
const TAMANO_PAGINA = 3;   

function crearTarjeta(pokemon) {
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta");

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

  return tarjeta;
}

function renderizar() {
  contenedor.innerHTML = ""; 

  const fin = indiceInicio + TAMANO_PAGINA;
  const grupo = pokemones.slice(indiceInicio, fin);

  grupo.forEach((pkm) => {
    const tarjeta = crearTarjeta(pkm);
    contenedor.appendChild(tarjeta);
  });

  
  btnAnterior.disabled = indiceInicio === 0;
  btnSiguiente.disabled = fin >= pokemones.length;
}

async function cargarPokemones() {
  for (let id = 1; id <= 12; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error al obtener el Pokemon ${id}`);
      }
      const data = await response.json();
      pokemones.push(data); 
    } catch (error) {
      console.error(error);
    }
  }

  renderizar(); 
}

btnSiguiente.addEventListener("click", () => {
  const maxInicio = pokemones.length - TAMANO_PAGINA; 
  if (indiceInicio < maxInicio) {
    indiceInicio += TAMANO_PAGINA;
    renderizar();
  }
});

btnAnterior.addEventListener("click", () => {
  if (indiceInicio > 0) {
    indiceInicio -= TAMANO_PAGINA;
    renderizar();
  }
});

cargarPokemones();
