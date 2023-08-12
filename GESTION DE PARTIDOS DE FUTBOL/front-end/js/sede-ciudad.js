const ciudadPorSede = {
  pichincha: [
    "Camyambe",
    "Mejía",
    "Pedro Moncayo",
    "Pedro Vicente Maldonado",
    "Puerto Quito",
    "Distrito Metropolitano de Quito",
    "Rumiñahui",
    "San Miguel de Los Bancos",
  ],
  guayas: [
    "Guayaquil",
    "Milagro",
    "Durán",
    "Jujan",
    "Naranjal",
    "Naranjito",
    "Samborondón",
  ],
  eloro: [
    "Machala",
    "Arenillas",
    "Zaruma",
    "Atahualpa",
    "Santa Rosa",
    "Balsas",
    "Portovelo",
    "Piñas",
    "El Guabo",
    "Pasaje",
    "Huaquillas",
  ],
  esmeraldas: [
    "Atacames",
    "San Lorenzo",
    "Eloy Alfaro",
    "Rioverde",
    "Esmeraldas",
    "Quinindé",
    "Muisne",
  ],
  manabi: [
    "Portovelo",
    "24 de Mayo",
    "Bolívar",
    "Chone",
    "El Carme",
    "Jipijapa",
    "Jaramijó",
    "Manta",
    "Montecristi",
    "Pedernales",
    "Rocafuerte",
    "Puerto Lopez",
    "San Vicentte",
    "Santa Ana",
    "Sucre",
  ],
};

const sedeSelect = document.getElementById("id-sede");
const ciudadSelect = document.getElementById("id-ciudad");

sedeSelect.addEventListener("change", function () {
  const sede = sedeSelect.value;
  ciudadSelect.innerHTML = "";

  if (sede && ciudadPorSede[sede]) {
    ciudadPorSede[sede].forEach(function (ciudad) {
      const opcionCiudad = document.createElement("option");
      opcionCiudad.value = ciudad;
      opcionCiudad.textContent = ciudad;
      ciudadSelect.appendChild(opcionCiudad);
    });
  }
});
