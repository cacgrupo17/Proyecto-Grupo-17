const testimonios = document.querySelector('#testimonios');
const carousel = testimonios.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
let currentIndex = 0;
let imageWidth;
const imageSpacing = 10; // Espaciado entre imágenes en píxeles

function calculateImageWidth() {
  const containerWidth = carousel.offsetWidth;
  const visibleImages = Math.floor(containerWidth / (images[0].offsetWidth + imageSpacing));
  imageWidth = (containerWidth / visibleImages) - imageSpacing;
}

function moveCarousel() {
  const translateX = currentIndex * (imageWidth + imageSpacing);
  carousel.style.transform = `translateX(-${translateX}px)`;
}

function prevImage() {
  currentIndex = (currentIndex - 4 + images.length) % images.length;
  moveCarousel();
}

function nextImage() {
  currentIndex = (currentIndex + 4) % images.length;
  moveCarousel();
}

function loopCarousel() {
  nextImage();
  setTimeout(loopCarousel, 5000); // Cambia la imagen cada 5 segundos
}

// Función para agrandar la imagen y detener/reanudar el carrusel
function toggleImageSize(index) {
  if (images[index].classList.contains('enlarge')) {
    images[index].classList.remove('enlarge');
    moveCarousel();
    loopCarousel();
  } else {
    images.forEach((img, i) => {
      img.classList.remove('enlarge');
      if (i === index) {
        img.classList.add('enlarge');
      }
    });
    carousel.style.transition = 'none'; // Detener la transición del carrusel
  }
}

// Agregar evento de clic a cada imagen
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    toggleImageSize(index);
  });
});

// Calcular el ancho de la imagen cuando la ventana cambie de tamaño
window.addEventListener('resize', () => {
  calculateImageWidth();
  moveCarousel();
});

calculateImageWidth();
moveCarousel();
loopCarousel();






