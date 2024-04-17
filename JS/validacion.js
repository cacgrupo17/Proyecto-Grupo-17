/* este bloque corre en pagina CONTACTO*/ 

function calcularEstadia() {
  var nombre = document.getElementById("nombre").value;

  var fechaLlegadaInput = document.getElementById("fecha_llegada");
  var fechaSalidaInput = document.getElementById("fecha_salida");

  var fechaLlegada = new Date(fechaLlegadaInput.value);
  var fechaSalida = new Date(fechaSalidaInput.value);

/* Validar si se ingresó el nombre de la mascota */
    if (nombre.trim() === "") {
      alert("Por favor, agrega el nombre de tu mascota.");
      return;
    }

/* Validar si la fecha de llegada es anterior al día actual*/
    var fechaActual = new Date();
    if (fechaLlegada < fechaActual) {
      alert("La fecha de llegada no puede ser anterior al día actual.");
      return;
    }

/* Validar si la fecha de salida es anterior a la fecha de llegada*/
    if (fechaSalida < fechaLlegada) {
      alert("La fecha de salida no puede ser anterior a la fecha de llegada.");
      return;
    }
    
  var precioDiario = 7500;
  var diasReserva = Math.round((fechaSalida - fechaLlegada) / (1000 * 60 * 60 * 24)) + 1;
  var precioTotal = diasReserva * precioDiario;

  if (document.getElementById("cuidados_especiales").checked) {
    precioTotal += 300 * diasReserva;
  }

  document.getElementById("total_dias").value = diasReserva;
  document.getElementById("total_monto").value = "$" + precioTotal;
}

    // Validación del formulario con JavaScript
    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', (event) => {
      event.preventDefault();
      validarFormulario();
    });



 
    