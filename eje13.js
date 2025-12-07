// Paso 13: 
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
      const filas = data.stats
        .map(
          (stat) =>
            `<tr><td>${stat.stat.name}</td><td>${stat.base_stat}</td></tr>`
        )
        .join("");

      resultado.innerHTML = `
        <h2>${data.name} (ID: ${data.id})</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <table>
          <thead>
            <tr>
              <th>Stat</th>
              <th>Valor base</th>
            </tr>
          </thead>
          <tbody>
            ${filas}
          </tbody>
        </table>
      `;
    })
    .catch((error) => {
      resultado.textContent = error.message;
      console.error(error);
    });
});
