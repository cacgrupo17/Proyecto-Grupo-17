/* este bloque corre en pagina CONTACTO*/
function calcularEstadia() {
  const nombre = document.getElementById("nombre").value;
  const fechaLlegadaInput = document.getElementById("fecha_llegada");
  const fechaSalidaInput = document.getElementById("fecha_salida");
  const fechaLlegada = new Date(fechaLlegadaInput.value);
  const fechaSalida = new Date(fechaSalidaInput.value);
  const requiereCuidadosEspeciales = document.getElementById("cuidados_especiales").checked;
  const tamanioPerro = document.querySelector('input[name="tamano"]:checked')?.value;
  const mensajeError = document.getElementById("mensaje-error");

  /* Validar si se ingresó el nombre de la mascota */
  if (nombre.trim() === "") {
    mensajeError.textContent = "Por favor, agrega el nombre de tu mascota.";
    return;
  }

  /* Validar si la fecha de llegada es anterior al día actual*/
  const fechaActual = new Date();
  if (fechaLlegada < fechaActual) {
    mensajeError.textContent = "La fecha de llegada no puede ser anterior al día actual.";
    return;
  }

  /* Validar si la fecha de salida es anterior a la fecha de llegada*/
  if (fechaSalida < fechaLlegada) {
    mensajeError.textContent = "La fecha de salida no puede ser anterior a la fecha de llegada.";
    return;
  }

  /* Validar si se seleccionó el tamaño del perro */
  if (!tamanioPerro) {
    mensajeError.textContent = "Por favor, selecciona el tamaño de tu mascota.";
    return;
  }

  let precioDiario;
  switch (tamanioPerro) {
    case "chico":
      precioDiario = 7500;
      break;
    case "mediano":
      precioDiario = 7900;
      break;
    case "grande":
      precioDiario = 8000;
      break;
  }

  const diasReserva = Math.round((fechaSalida - fechaLlegada) / (1000 * 60 * 60 * 24)) + 1;
  let precioTotal = diasReserva * precioDiario;

  if (requiereCuidadosEspeciales) {
    precioTotal += precioTotal * 0.1; // Aumenta el 10% del precio unitario diario
  }

  document.getElementById("total_dias").value = diasReserva;
  document.getElementById("total_monto").value = "$" + precioTotal;
  mensajeError.textContent = ""; // Limpiar el mensaje de error
}

// Validación del formulario con JavaScript
const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  validarFormulario();
});

/*----------------------------------------------------------------------------------*/
const chico = document.getElementById('chico');
const mediano = document.getElementById('mediano');
const grande = document.getElementById('grande');
const peso = document.getElementById('peso');

chico.addEventListener('change', () => {
  peso.disabled = false;
  peso.value = '0-10';
  mediano.checked = false;
  grande.checked = false;
  peso.disabled = true;
});

mediano.addEventListener('change', () => {
  peso.disabled = false;
  peso.value = '14-27';
  chico.checked = false;
  grande.checked = false;
  peso.disabled = true;
});

grande.addEventListener('change', () => {
  peso.disabled = false;
  peso.value = '25-50';
  chico.checked = false;
  mediano.checked = false;
  peso.disabled = true;
});


