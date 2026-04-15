let index = 0;

const imagenes = [
  "img/port00.png",
  "img/port01.png",
  "img/port02.png",
  "img/port10.png",
  "img/port11.png",
  "img/port12.png",
  "img/port13.png",
  "img/port14.png",
  "img/port15.png",
  "img/port16.png",
  "img/port17.png"
];

const img = document.getElementById("imagen");

document.querySelector(".derecha").onclick = () => {
  index = (index + 1) % imagenes.length;
  cambiarImagen();
};

document.querySelector(".izquierda").onclick = () => {
  index = (index - 1 + imagenes.length) % imagenes.length;
  cambiarImagen();
};

function cambiarImagen() {
  img.style.opacity = 0;
  setTimeout(() => {
    img.src = imagenes[index];
    img.style.opacity = 1;
  }, 200);
}

/* POPUP */
const promos = [
  "img/promo00.png",
  "img/promo01.png",
  "img/promo02.png"
];

function abrirPopup(i) {
  document.getElementById("popup").style.display = "flex";
  document.getElementById("popup-img").src = promos[i];
}

function cerrarPopup() {
  document.getElementById("popup").style.display = "none";
}