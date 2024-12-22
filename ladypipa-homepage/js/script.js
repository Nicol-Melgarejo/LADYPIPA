// Slider horizontal para imágenes
const sliderContainer = document.querySelector('.slider-images');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentPosition = 0; // Posición inicial del slider
const imageWidth = 200 + 20; // Ancho de cada imagen (200px) + margen (20px, ajusta según tu CSS)
const totalImages = sliderContainer.children.length; // Total de imágenes

nextBtn.addEventListener('click', () => {
    if (currentPosition > -(imageWidth * (totalImages - 5))) {
        // Avanza a la derecha, pero no más allá de las imágenes disponibles
        currentPosition -= imageWidth;
        sliderContainer.style.transform = `translateX(${currentPosition}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (currentPosition < 0) {
        // Retrocede a la izquierda, pero no más allá de la posición inicial
        currentPosition += imageWidth;
        sliderContainer.style.transform = `translateX(${currentPosition}px)`;
    }
});

// Efecto de ocultar barra superior al hacer scroll
document.addEventListener("scroll", function () {
    const topBar = document.querySelector(".top-bar");
    const navbar = document.querySelector(".navbar");
    const scrollPosition = window.scrollY; // Obtiene la posición de desplazamiento actual

    // Calcula la altura de la barra superior en función del scroll (máximo 35px)
    const maxTopBarHeight = 35; // Altura máxima de la barra superior
    const newTopBarHeight = Math.max(maxTopBarHeight - scrollPosition, 0);

    // Ajusta la altura de la barra superior
    topBar.style.height = newTopBarHeight + "px";
    topBar.style.opacity = newTopBarHeight / maxTopBarHeight; // Cambia la opacidad según la altura

    // Ajusta la posición de la barra de navegación
    navbar.style.top = newTopBarHeight + "px";
});

// Carrusel 1 (3 imágenes)
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".second-carousel-slide");
    const dots = document.querySelectorAll(".second-carousel-dot");
    const prevButton = document.querySelector(".second-carousel-button.prev");
    const nextButton = document.querySelector(".second-carousel-button.next");

    let currentIndex = 0;

    // Función para actualizar el carrusel
    const updateCarousel = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    };

    // Evento para botón "Anterior"
    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel(currentIndex);
    });

    // Evento para botón "Siguiente"
    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel(currentIndex);
    });

    // Evento para puntos de navegación
    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            currentIndex = i;
            updateCarousel(currentIndex);
        });
    });
});

// Carrusel 2 (4 imágenes)
document.addEventListener("DOMContentLoaded", () => {
    const carouselSlides2 = document.querySelectorAll('.carousel-slide-2');
    const prevButton2 = document.querySelector('.carousel-button-2.prev');
    const nextButton2 = document.querySelector('.carousel-button-2.next');
    const dots2 = document.querySelectorAll('.carousel-dot-2');

    let currentSlide2 = 0;

    // Función para mostrar la diapositiva actual
    function showSlide2(index) {
        // Asegurarse de que el índice esté dentro de los límites
        if (index < 0) {
            currentSlide2 = carouselSlides2.length - 1;
        } else if (index >= carouselSlides2.length) {
            currentSlide2 = 0;
        } else {
            currentSlide2 = index;
        }

        // Mostrar la diapositiva actual y ocultar las demás
        carouselSlides2.forEach((slide, i) => {
            slide.classList.toggle('active', i === currentSlide2);
        });

        // Actualizar los puntos de navegación
        dots2.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide2);
        });
    }

    // Evento para botón "Anterior"
    prevButton2.addEventListener('click', () => {
        showSlide2(currentSlide2 - 1);
    });

    // Evento para botón "Siguiente"
    nextButton2.addEventListener('click', () => {
        showSlide2(currentSlide2 + 1);
    });

    // Evento para los puntos de navegación
    dots2.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            showSlide2(i);
        });
    });

    // Inicializar el carrusel mostrando la primera diapositiva
    showSlide2(currentSlide2);
});