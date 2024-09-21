// Definir imágenes y textos para el carrusel
const images = [
    {
        src: 'imgPizza/Portada.jpeg',
        title: 'Bienvenidos a Nuestra Pizzería',
        subtitle: '¡Las mejores pizzas artesanales!'
    },
    {
        src: 'imgPizza/Portada1.jpeg',
        title: 'Variedad de Sabores',
        subtitle: 'Disfruta de nuestras especialidades'
    },
    {
        src: 'imgPizza/Portada3.jpeg',
        title: 'Ingredientes Frescos',
        subtitle: 'Calidad en cada bocado'
    }
];

let currentIndex = 0;

// Seleccionar elementos del DOM
const heroImage = document.getElementById('hero-image');
const heroTitle = document.getElementById('hero-title');
const heroSubtitle = document.getElementById('hero-subtitle');

// Función para cambiar imagen y texto
function cambiarImagen() {
    currentIndex = (currentIndex + 1) % images.length; // Ciclar entre imágenes
    const nextImage = images[currentIndex];

    // Desvanecer imagen actual
    heroImage.style.opacity = 0;

    // Ocultar texto con transición
    heroTitle.style.opacity = 0;
    heroTitle.style.transform = 'translateY(-20px)'; // Mover hacia arriba
    heroSubtitle.style.opacity = 0;
    heroSubtitle.style.transform = 'translateY(-20px)'; // Mover hacia arriba

    setTimeout(() => {
        // Cambiar la imagen después de que se desvanezca
        heroImage.src = nextImage.src;
        heroImage.style.opacity = 1; // Mostrar nueva imagen con fade-in

        // Cambiar el texto
        heroTitle.textContent = nextImage.title;
        heroSubtitle.textContent = nextImage.subtitle;

        // Re-aparecer texto con animación suave
        setTimeout(() => {
            heroTitle.style.opacity = 1;
            heroTitle.style.transform = 'translateY(0)'; // Regresar a su posición original
            heroSubtitle.style.opacity = 1;
            heroSubtitle.style.transform = 'translateY(0)';
        }, 100); // Retardo para dar tiempo a la transición de la imagen
    }, 1000); // Tiempo de desvanecimiento para la imagen (1s)
}

// Cambiar imagen cada 5 segundos
setInterval(cambiarImagen, 5000);



// Añadir evento de clic para la flecha

const scrollArrow = document.querySelector('.scroll-arrow-container');

scrollArrow.addEventListener('click', () => {
    smoothScroll(window.innerHeight, 1000); // Ajusta el tiempo en milisegundos
});

function smoothScroll(targetY, duration) {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    function scrollStep(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easing = easeInOutQuad(progress);

        window.scrollTo(0, startY + distance * easing);

        if (elapsedTime < duration) {
            requestAnimationFrame(scrollStep);
        }
    }

    requestAnimationFrame(scrollStep);
}

function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

//Flecha visible despues de 2s
document.addEventListener('DOMContentLoaded', () => {
    const scrollArrow = document.querySelector('.scroll-arrow');
    
    setTimeout(() => {
        scrollArrow.classList.add('show');
    }, 3000); // 2000 ms = 2 segundos
});
