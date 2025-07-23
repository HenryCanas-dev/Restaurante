document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("modoOscuroBtn");

    boton.addEventListener("click", function () {
        document.body.classList.toggle("bg-dark");
        document.body.classList.toggle("text-white");
    });
});

function iniciarContador(duracion, elemento) {
  let tiempo = duracion;
  const display = document.getElementById(elemento);

  const intervalo = setInterval(() => {
    const minutos = Math.floor(tiempo / 60);
    const segundos = tiempo % 60;

    display.textContent =
      `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

    if (--tiempo < 0) {
      clearInterval(intervalo);
      display.textContent = "¡Tu pedido ha llegado!";
      display.classList.remove("text-danger");
      display.classList.add("text-success");
    }
  }, 1000);
}

// Activar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("btnIniciar");

  if (boton) {
    boton.addEventListener("click", () => {
      boton.disabled = true;
      iniciarContador(5 * 60, "contador");
    });
  }
});