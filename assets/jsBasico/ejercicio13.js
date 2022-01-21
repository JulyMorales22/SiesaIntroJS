//DOM

//local storage  memoria de los navegadores o como si tuviera una DB  - guardar variables y contenido

let ejecutar = document.getElementById("btnEjecutar");
let nombreUsuario = document.getElementById("nombreUsuario");

/**
 * normal: nombreUsuario.innerHTML = nombreUsuario.innerHTML + nombre;
 * Abreviado: nombreUsuario.innerHTML += nombre;
 */

const cambiarNombre = () =>{
    let nombre = prompt("Ingresa tu nombre");
    nombreUsuario.innerHTML = "Bienvenido/a "+nombre; //innerhtml va remplazar todo el valor de la etiqueta por eso debemos volver a escribir  hasta el Bienvenido
    //ejemplo local storage despues de que lo ingresan y lo mostramos - para que quede
    localStorage.setItem("nombre",nombre);

    


};
// para sacar datos del local storage
if (localStorage.getItem("nombre")) {
    nombreUsuario.innerHTML = "Bienvenido/a "+ localStorage.getItem("nombre");
}


//Eventos se recomienda que vayan al final
ejecutar.onclick = function(){
    cambiarNombre();
};