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

// DEPOIMENTOS (mostrar 3 por vez, trocar a cada 8s)
const track = document.querySelector('.carousel-track');
const comentarios = document.querySelectorAll('.comentario');
let currentGroup = 0;
const itemsPerGroup = 3;
const totalGroups = Math.ceil(comentarios.length / itemsPerGroup);

function showGroup(index) {
  const offset = -(index * 100); // move 100% da largura por grupo
  track.style.transform = `translateX(${offset}%)`;
}

// Inicializa
showGroup(currentGroup);

// Troca a cada 8 segundos
setInterval(() => {
  currentGroup = (currentGroup + 1) % totalGroups;
  showGroup(currentGroup);
}, 8000);
