//DOM

let ejecutar = document.getElementById("btnEjecutar");


const cambiarNombre = () =>{
    let nombre = prompt("Ingresa tu nombre");
    alert("Tu nombre es: "+ nombre);
}



//Eventos se recomienda que vayan al final
ejecutar.onclick = function(){
    cambiarNombre();
}