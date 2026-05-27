let boton = document.getElementById("boton");
let titulo = document.getElementById("titulo");
boton.addEventListener("click", function() {
    titulo.textContent = "hola ron weasley";
});
let boton2 = document.getElementById("boton2");
let parrafo = document.getElementById("parrafo");
boton2.addEventListener("click", function() {
    parrafo.innerHTML = "hola hermione granger";
});
let boton3 = document.getElementById("boton3");
let imagen = document.getElementById("imagen");
boton3.addEventListener("click", function() {
    imagen.src = "img/a.png";
    imagen.alt = "Imagen cambiada";});

let entrada = document.querySelector("#input");
let boton4 = document.querySelector("#boton4");

    boton4.addEventListener("click", function() {
        alert(entrada.value);

    });             

let boton5 = document.querySelector("#boton5");
let bloque = document.querySelector(".bloque");
boton5.addEventListener("click", function() {
    bloque.style.backgroundColor = "lightblue";
    bloque.style.padding = "20px";
    bloque.style.borderRadius = "10px";
}   );

let lista = document.querySelector("#lista");
let inputLista = document.querySelector("#inputlista");
let boton6 = document.querySelector("#boton6");
boton6.addEventListener("click", function() {
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = inputLista.value;
    lista.appendChild(nuevoElemento);
    inputLista.value = "";
});

let btn = document.getElementById('btn-enviar');
let inputNombre = document.getElementById('nombre');
let inputColor = document.getElementById('color');
let inputMensaje = document.getElementById('mensaje');
let errNombre = document.getElementById('err-nombre');
let errMensaje = document.getElementById('err-mensaje');
let contenedor = document.getElementById('contenedor-tarjetas');
let tituloTarjetas = document.getElementById('titulo-tarjetas');
 
inputNombre.addEventListener('input', function() {
  errNombre.textContent = '';
});
 
inputMensaje.addEventListener('input', function() {
  errMensaje.textContent = '';
});
 
btn.addEventListener('click', function() {
  let nombre = inputNombre.value.trim();
  let color = inputColor.value;
  let mensaje = inputMensaje.value.trim();
  let hayError = false;
 
  if (!nombre) {
    errNombre.textContent = 'El nombre no puede estar vacío.';
    hayError = true;
  }
 
  if (!mensaje) {
    errMensaje.textContent = 'El mensaje no puede estar vacío.';
    hayError = true;
  }
 
  if (hayError) return;
 
  btn.style.color = color;
 
  tituloTarjetas.textContent = 'Tarjetas enviadas';
 
  let tarjeta = document.createElement('div');
 
  let pNombre = document.createElement('p');
  pNombre.textContent = 'Nombre: ' + nombre;
 
  let pColor = document.createElement('p');
  pColor.textContent = 'Color: ' + color;
  pColor.style.color = color;
 
  let pMensaje = document.createElement('p');
  pMensaje.textContent = 'Mensaje: ' + mensaje;
 
  let hr = document.createElement('hr');
 
  tarjeta.appendChild(pNombre);
  tarjeta.appendChild(pColor);
  tarjeta.appendChild(pMensaje);
  tarjeta.appendChild(hr);
 
  contenedor.insertBefore(tarjeta, contenedor.firstChild);
 
  inputNombre.value = '';
  inputMensaje.value = '';
  inputColor.value = '#7F77DD';
});
