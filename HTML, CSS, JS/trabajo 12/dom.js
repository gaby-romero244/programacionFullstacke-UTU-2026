const nombre = document.getElementById("f-name");
const descripcion = document.getElementById("f-desc");
const tipo = document.getElementById("f-type");
const estado = document.getElementById("f-status");
const imagen = document.getElementById("f-img");

const botonAgregar = document.getElementById("add-btn");
const contenedor = document.getElementById("collection-grid");
const contador = document.getElementById("counter");

let coleccion = JSON.parse(localStorage.getItem("coleccion")) || [];

// ===== GUARDAR =====

function guardarDatos() {
    localStorage.setItem(
        "coleccion",
        JSON.stringify(coleccion)
    );
}

// ===== CONTADOR =====

function actualizarContador() {
    contador.textContent = coleccion.length;
}

// ===== CREAR TARJETAS =====

function mostrarElementos(filtro = "all") {

    contenedor.innerHTML = "";

    let elementos = coleccion;

    if (filtro !== "all") {
        elementos = coleccion.filter(
            item => item.tipo === filtro
        );
    }

    if (elementos.length === 0) {
        contenedor.innerHTML =
            "<p>No hay elementos para mostrar.</p>";
        return;
    }

    elementos.forEach(item => {

        const tarjeta = document.createElement("article");

        tarjeta.classList.add("card");

        tarjeta.innerHTML = `
            ${item.imagen ? `
            <img src="${item.imagen}" alt="${item.nombre}">
            ` : ""}

            <h3>${item.nombre}</h3>

            <p>${item.descripcion}</p>

            <p><strong>Tipo:</strong> ${item.tipo}</p>

            <p><strong>Estado:</strong> ${item.estado}</p>
        `;

        contenedor.appendChild(tarjeta);
    });

    actualizarContador();
}

// ===== AGREGAR =====

botonAgregar.addEventListener("click", () => {

    if (
        nombre.value.trim() === "" ||
        tipo.value === ""
    ) {
        alert("Completa al menos nombre y tipo.");
        return;
    }

    const nuevoElemento = {
        nombre: nombre.value,
        descripcion: descripcion.value,
        tipo: tipo.value,
        estado: estado.value,
        imagen: imagen.value
    };

    coleccion.push(nuevoElemento);

    guardarDatos();

    mostrarElementos();

    nombre.value = "";
    descripcion.value = "";
    tipo.value = "";
    estado.value = "";
    imagen.value = "";
});

// ===== FILTROS =====

document
.querySelectorAll("[data-filter-type]")
.forEach(boton => {

    boton.addEventListener("click", () => {

        const filtro =
            boton.dataset.filterType;

        mostrarElementos(filtro);
    });

});

// ===== INICIO =====

mostrarElementos();