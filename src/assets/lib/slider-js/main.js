window.onload = () => {
  var item = 0;

  const peliculas = document.querySelectorAll(".pelicula");
  const fila = document.querySelector(".contenedor-carrusel");

  document.getElementById("flecha-izquierda").addEventListener("click", () => {
    pasar(1);
  });
  document.getElementById("flecha-derecha").addEventListener("click", () => {
    pasar(2);
  });

  function pasar(n) {
    if (n == 1) {
      fila.scrollLeft -= fila.offsetWidth;
    } else if (n == 2) {
      fila.scrollLeft += fila.offsetWidth;
    } else if (n == 3) {
      fila2.scrollLeft -= fila.offsetWidth;
    } else if (n == 4) {
      fila2.scrollLeft += fila.offsetWidth;
    }
  }

  // trabajando con el hover

  peliculas.forEach((pelicula) => {
    pelicula.addEventListener("mouseenter", (e) => {
      const elemento = e.currentTarget;
      setTimeout(() => {
        peliculas.forEach((pelicula) => pelicula.classList.remove("hover"));
        elemento.classList.add("hover");
      }, 300);
    });
  });

  fila.addEventListener("mouseleave", () => {
    peliculas.forEach((pelicula) => pelicula.classList.remove("hover"));
  });
};
