// HERO SLIDES (banner rotativo)
const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;
let interval = setInterval(nextSlide, 6000); // autoplay a cada 6s
let inactivityTimer;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// 👉 Função para pausar autoplay
function pauseAutoplay() {
  clearInterval(interval);
  resetInactivityTimer();
}

// 👉 Retomar autoplay após 20s sem interação
function resetInactivityTimer() {
  clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(() => {
    interval = setInterval(nextSlide, 6000);
  }, 20000);
}

// 👉 Pausar ao clicar
slides.forEach(slide => {
  slide.addEventListener('click', () => {
    pauseAutoplay();
  });
});

// 👉 Swipe no mobile
let startX = 0;
let endX = 0;

document.querySelector('.hero').addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

document.querySelector('.hero').addEventListener('touchend', e => {
  endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    pauseAutoplay();
    nextSlide();
  } else if (endX - startX > 50) {
    pauseAutoplay();
    prevSlide();
  }
});

// 👉 Drag no desktop
document.querySelector('.hero').addEventListener('mousedown', e => {
  startX = e.clientX;
});

document.querySelector('.hero').addEventListener('mouseup', e => {
  endX = e.clientX;
  if (startX - endX > 50) {
    pauseAutoplay();
    nextSlide();
  } else if (endX - startX > 50) {
    pauseAutoplay();
    prevSlide();
  }
});

// MENU MOBILE
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// DEPOIMENTOS (virada de cartas, 3 por vez, trocar a cada 8s)
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

// Inicializa depoimentos
showGroup(currentGroup);

document.getElementById('contato-link').addEventListener('click', function(e) {
  e.preventDefault();
  const menu = document.getElementById('whatsapp-menu');
  menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
});

// Troca depoimentos a cada 8 segundos
setInterval(() => {
  currentGroup = (currentGroup + 1) % totalGroups;
  showGroup(currentGroup);
}, 8000);
