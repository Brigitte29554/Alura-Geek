// Seleccionar elementos del DOM
const formulario = document.querySelector(".agregar-producto form");
const listaProductos = document.querySelector(".lista-productos");

// Función para crear un nuevo elemento de producto
function crearProducto(nombre, precio, imagen) {
    // Crear contenedor del producto
    const producto = document.createElement("div");
    producto.classList.add("producto");

    // Crear imagen
    const img = document.createElement("img");
    img.src = imagen;
    img.alt = nombre;

    // Crear nombre del producto
    const nombreProducto = document.createElement("p");
    nombreProducto.textContent = nombre;

    // Crear precio del producto
    const precioProducto = document.createElement("p");
    precioProducto.classList.add("precio");
    precioProducto.textContent = `$ ${precio}`;

    // Crear icono de eliminación
    const botonEliminar = document.createElement("i");
    botonEliminar.classList.add("fas", "fa-trash", "eliminar");

    // Añadir evento para eliminar el producto
    botonEliminar.addEventListener("click", () => {
        producto.remove();
    });

    // Añadir los elementos al contenedor del producto
    producto.appendChild(img);
    producto.appendChild(nombreProducto);
    producto.appendChild(precioProducto);
    producto.appendChild(botonEliminar);

    // Añadir el producto a la lista de productos
    listaProductos.appendChild(producto);
}

// Manejar el envío del formulario
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    // Obtener valores de los inputs
    const inputs = formulario.querySelectorAll("input");
    const nombre = inputs[0].value.trim();
    const precio = inputs[1].value.trim();
    const imagen = inputs[2].value.trim();

    // Validar que no haya campos vacíos
    if (!nombre || !precio || !imagen) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Crear el nuevo producto
    crearProducto(nombre, precio, imagen);

    // Limpiar los campos del formulario
    formulario.reset();
});
