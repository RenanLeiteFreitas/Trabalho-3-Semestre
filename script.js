// Criando botões
const iniciolink = document.getElementById('inicio-link');
const galeriaLink = document.getElementById("galeria-link");
const produtoLink = document.getElementById("produto-link");

// mover Slider !!!!!!!!!!
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    const offset = -index * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;

    // Atualizar os indicadores
    document.querySelectorAll('.indicator').forEach((indicator, i) => {
        indicator.classList.remove('active');
        if (i === index) {
            indicator.classList.add('active');
        }
    });
}

function setSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

// Passar as imagens automaticamente
setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}, 3000); // Muda a cada 3 segundos

showSlide(currentSlide);

// fim do mover slider !!!!!!!!!!!

function toggleDropdown(sectionId) {
  const section = document.getElementById(sectionId);
  const dropdownContent = section.querySelector('.dropdown-content');

  // Alterna a classe 'open' para mostrar ou esconder o conteúdo
  dropdownContent.classList.toggle('open');
}

