/**
 * un HTML  vamos a tener los siguientes textos
 * Nombre :
 * Edad : 
 * Direccion :
 * Telefono :
 * Documento :
 * boton (ingresar datos)
 * prompt que nos piden la informacion 
 * Agregar Local Storage
 */


let datosUsuario = document.getElementById("btnDatos");
let nombreUsuario = document.getElementById("nombreUsuario");
let edadUsuario = document.getElementById("edadUsuario");
let direccionUsuario = document.getElementById("direccionUsuario");
let telefonoUsuario = document.getElementById("telefonoUsuario");
let documentoUsuario = document.getElementById("documentoUsuario");


const datosUsuarios = () =>{
    let nombre = prompt("Ingresa tu nombre");
    let edad = prompt("Ingresa tu edad");
    let direccion = prompt("Ingresa tu direccion");
    let telefono = prompt("Ingresa tu telefono");
    let documento = prompt("Ingresa tu documento");
    nombreUsuario.innerHTML = "Bienvenido/a "+ nombre;
    edadUsuario.innerHTML = "Su edad es: "+ edad;
    direccionUsuario.innerHTML = "Su direccion es:  "+ direccion;
    telefonoUsuario.innerHTML = "Su telefono es:  "+ telefono;
    documentoUsuario.innerHTML =  "Su numero de documento es: "+ documento;
    localStorage.setItem("nombre",nombre);
    localStorage.setItem("edad",edad);
    localStorage.setItem("direccion",direccion);
    localStorage.setItem("telefono",telefono);
    localStorage.setItem("documento",documento);
    
};

if (localStorage.getItem("nombre") ||localStorage.getItem("edad") ||localStorage.getItem("direccion") ||localStorage.getItem("telefono") ||localStorage.getItem("documento") ){
    nombreUsuario.innerHTML = "Bienvenido/a "+ localStorage.getItem("nombre");
    edadUsuario.innerHTML = "edad es: "+ localStorage.getItem("edad" );
    direccionUsuario.innerHTML = "direccion es: "+localStorage.getItem("direccion");
    telefonoUsuario.innerHTML = "telefono es: " + localStorage.getItem("telefono");
    documentoUsuario.innerHTML = "documento es: "+ localStorage.getItem("documento");
    //alert(localStorage.getItem("edad"));

}

// if(localStorage.getItem("nombre")){
//     nombreUsuario.innerHTML = "Bienvenidos "+ localStorage.getItem("nombre");
// }else if(localStorage.getItem("edad")){
//     edadUsuario.innerHTML = "edad es: "+ localStorage.getItem("edad" );
// }


//Eventos se recomienda que vayan al final
datosUsuario.onclick = function(){
    datosUsuarios();
};