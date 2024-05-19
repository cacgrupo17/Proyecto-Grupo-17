document.addEventListener('DOMContentLoaded', () => {
  function calcularEstadia() {
    const nombre = document.getElementById('nombre');
    const fechaLlegada = document.getElementById('fecha_llegada');
    const fechaSalida = document.getElementById('fecha_salida');
    const size = document.querySelector('input[name="size"]:checked');
    const peso = document.getElementById('peso');
    let errores = [];
    if (!nombre.value) {
      errores.push('Nombre de la mascota');
    }
    if (!fechaLlegada.value) {
      errores.push('Fecha de llegada');
    }
    if (!fechaSalida.value) {
      errores.push('Fecha de salida');
    }
    if (!size) {
      errores.push('Tamaño de la mascota');
    }
    if (!peso.value) {
      errores.push('Rango de peso');
    }
    if (errores.length > 0) {
      alert('Olvidó completar:\n' + errores.join('\n'));
    } 
  }

  const botonCalcular = document.querySelector('button[onclick="calcularEstadia()"]');
  botonCalcular.addEventListener('click', calcularEstadia);
});

// El formulario queda diseñado para que luego, en la parte de backend podamos agregar las formulas para calcular la estadía //