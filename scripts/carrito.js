// ==================================
// Carrito de Compras
// ==================================
let carrito = [];
let total = 0;

/**
 * Agregar un producto al carrito
 * @param {string} nombre - Nombre del producto
 * @param {number} precio - Precio del producto
 */
function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
}

/**
 * Actualizar el contenido del carrito y mostrar el total
 */
function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElement = document.getElementById('total');
    listaCarrito.innerHTML = '';
    total = 0;

    carrito.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}`;
        listaCarrito.appendChild(li);
        total += item.precio;
    });

    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}