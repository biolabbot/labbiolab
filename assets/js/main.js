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

// DEPOIMENTOS (virada de cartas, 3 por vez, trocar a cada 7s)
const comentarios = document.querySelectorAll('.comentario');
let currentGroup = 0;
const itemsPerGroup = 3;
const totalGroups = Math.ceil(comentarios.length / itemsPerGroup);

function showGroup(index) {
  comentarios.forEach((comentario, i) => {
    comentario.classList.remove('active');
    const groupStart = index * itemsPerGroup;
    const groupEnd = groupStart + itemsPerGroup;
    if (i >= groupStart && i < groupEnd) {
      comentario.classList.add('active');
    }
  });
}

// Inicializa
showGroup(currentGroup);

// Troca a cada 8 segundos
setInterval(() => {
  currentGroup = (currentGroup + 1) % totalGroups;
  showGroup(currentGroup);
}, 8000);
