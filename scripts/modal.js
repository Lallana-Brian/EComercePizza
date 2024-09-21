/**
 * Abrir un modal por su ID
 * @param {string} id - El ID del modal
 */
function abrirModal(id) {
    document.getElementById(id).style.display = 'block';
}

/**
 * Cerrar un modal por su ID
 * @param {string} id - El ID del modal
 */
function cerrarModal(id) {
    document.getElementById(id).style.display = 'none';
}

// Cierra el modal al hacer clic fuera del contenido del modal
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
};


document.getElementById('menu-toggle').addEventListener('click', function () {
    const nav = document.querySelector('nav');
    nav.classList.toggle('nav-open');
});
