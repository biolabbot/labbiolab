// HERO SLIDES
const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 6000);

// MENU MOBILE
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// CARROSSEL DEPOIMENTOS
const track = document.querySelector('.carousel-track');
const comentarios = document.querySelectorAll('.comentario');
let currentIndex = 0;
const itemsPerPage = 3;

function showComentarios(index) {
  const offset = -(index * 100);
  track.style.transform = `translateX(${offset}%)`;
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % Math.ceil(comentarios.length / itemsPerPage);
  showComentarios(currentIndex);
}, 5000);

