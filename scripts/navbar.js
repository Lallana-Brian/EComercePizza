// ==================================
// Comportamiento de la Barra de Navegación
// ==================================

let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector("nav");

/**
 * Mostrar u ocultar la barra de navegación al hacer scroll
 */
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        navbar.style.top = "0"; // Mostrar la navbar
    } else {
        navbar.style.top = "-100px"; // Ocultar la navbar
    }

    prevScrollPos = currentScrollPos;
};
