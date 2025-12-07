// Paso 9:
const form = document.getElementById("form-busqueda");
const inputId = document.getElementById("pokemon-id");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // evita recargar la página
  const id = inputId.value.trim();

  if (!id) {
    resultado.textContent = "Ingresa un ID válido.";
    return;
  }

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Pokémon no encontrado");
      }
      return response.json();
    })
    .then((data) => {
      const habilidades = data.abilities
        .map((hab) => hab.ability.name)
        .join(", ");

      resultado.innerHTML = `
        <h2>${data.name} (ID: ${data.id})</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p>Peso: ${data.weight}</p>
        <p>Altura: ${data.height}</p>
        <p>Habilidades: ${habilidades}</p>
      `;
    })
    .catch((error) => {
      resultado.textContent = error.message;
      console.error(error);
    });
});
