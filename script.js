document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("modoOscuroBtn");

    boton.addEventListener("click", function () {
        document.body.classList.toggle("bg-dark");
        document.body.classList.toggle("text-white");
    });
});