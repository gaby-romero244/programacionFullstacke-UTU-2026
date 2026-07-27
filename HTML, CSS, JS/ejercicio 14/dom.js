let botonTraerImagen = document.querySelector("#traerGatitos");
let gatitos = document.querySelector("#gatitos");
let botonMeGusta = document.querySelector("#me gusta");
let botonNoMeGusta = document.querySelector("#no me gusta");
let contadorMeGusta = document.querySelector(".contador-megusta");
let contadorNoMeGusta = document.querySelector(".contador-negativos");
let error = document.querySelector(".error");


botonTraerImagen.addEventListener("click", async() => {
    let response = await fetch("https://api.thecatapi.com/v1/images/search");
    let data = await response.json();

    console.log(data
    )

    let imagen = data[0].url

    gatitos.src = imagen;

botonMeGusta.addEventListener("click", async() =>{
    let response = await fetch("https://api.thecatapi.com/v1/images/search");

}
    })
    