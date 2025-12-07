// Paso 11: 
const form = document.getElementById("form-busqueda");
const input = document.getElementById("pokemon-input");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const valor = input.value.trim().toLowerCase();
  if (!valor) {
    resultado.textContent = "Ingresa un nombre o ID.";
    return;
  }

  const url = `https://pokeapi.co/api/v2/pokemon/${valor}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Pokemon no encontrado");
      }
      return response.json();
    })
    .then((data) => {
      
      const tipos = data.types
        .map((t) => t.type.name)
        .join(", ");

      resultado.innerHTML = `
        <h2>${data.name} (ID: ${data.id})</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p>Tipos: ${tipos}</p>
      `;
    })
    .catch((error) => {
      resultado.textContent = error.message;
      console.error(error);
    });
});
