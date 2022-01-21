//DOM

let ejecutar = document.getElementById("btnEjecutar");
let nombreUsuario = document.getElementById("nombreUsuario");
/**
 * normal: nombreUsuario.innerHTML = nombreUsuario.innerHTML + nombre;
 * Abreviado: nombreUsuario.innerHTML += nombre;
 */

const cambiarNombre = () =>{
    let nombre = prompt("Ingresa tu nombre");
    nombreUsuario.innerHTML = "Bienvenido/a "+nombre; //innerhtml va remplazar todo el valor de la etiqueta por eso debemos volver a escribir  hasta el Bienvenido
};



//Eventos se recomienda que vayan al final
ejecutar.onclick = function(){
    cambiarNombre();
};