document.addEventListener("DOMContentLoaded", () => {
  let precio = 400000;
  let cantidad = 0;

  const precioSpan = document.querySelector(".precio-inicial");
  const cantidadSpan = document.querySelector(".cantidad");
  const valorTotal = document.querySelector(".valor-total");
  const botones = document.querySelectorAll("button");

  if (botones.length === 0) {
    console.error("No se encontraron los botones en el DOM");
    return;
  }

  const botonIncrementar = botones[0];
  const botonDecrementar = botones[1];

  precioSpan.innerHTML = precio;

  function actualizarCantidad(incremento) {
    cantidad += incremento;
    if (cantidad < 0) cantidad = 0;

    cantidadSpan.innerHTML = cantidad;
    actualizarTotal();
  }

  function actualizarTotal() {
    const total = cantidad * precio;
    valorTotal.innerHTML = total;
  }

  botonIncrementar.addEventListener("click", () => {
    actualizarCantidad(1);
  });

  botonDecrementar.addEventListener("click", () => {
    actualizarCantidad(-1);
  });
});
