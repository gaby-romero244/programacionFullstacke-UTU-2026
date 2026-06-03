const formulario = document.getElementById("formulario");
const input = document.getElementById("tareaInput");
const lista = document.getElementById("lista");
const error = document.getElementById("error");

const total = document.getElementById("total");
const completadas = document.getElementById("completadas");
const pendientes = document.getElementById("pendientes");

const borrarTodo = document.getElementById("borrarTodo");

let tareas = [];

// Actualizar contadores
function actualizarContadores() {
    total.textContent = tareas.length;
    completadas.textContent = tareas.filter(t => t.completada).length;
    pendientes.textContent = tareas.filter(t => !t.completada).length;
}

// Crear tarea en el DOM
function crearTarea(tarea) {
    const li = document.createElement("li");

    const texto = document.createElement("span");
    texto.textContent = tarea.texto;

    if (tarea.completada) {
        texto.classList.add("completada");
    }

    // Marcar como completada
    texto.addEventListener("click", () => {
        tarea.completada = !tarea.completada;
        texto.classList.toggle("completada");
        actualizarContadores();
    });

    // Botón eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "❌";

    btnEliminar.addEventListener("click", () => {
        lista.removeChild(li);
        tareas = tareas.filter(t => t !== tarea);
        actualizarContadores();
    });

    li.appendChild(texto);
    li.appendChild(btnEliminar);
    lista.appendChild(li);
}

// Evento del formulario
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const valor = input.value.trim();

    if (valor === "") {
        error.textContent = "⚠️ Escribe una tarea";
        return;
    }

    error.textContent = "";

    const nuevaTarea = {
        texto: valor,
        completada: false
    };

    tareas.push(nuevaTarea);
    crearTarea(nuevaTarea);
    actualizarContadores();

    input.value = "";
});

// Borrar todas las tareas
borrarTodo.addEventListener("click", () => {
    lista.innerHTML = "";
    tareas = [];
    actualizarContadores();
});