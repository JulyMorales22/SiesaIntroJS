//switch

let edad = prompt("Ingresa tu edad");

switch (edad) {
    case "16":
        alert("catalogo disponible");
        break;

    default:
        alert("catalogo bloqueado");
        break;
}
let ciudad = prompt("por favor ingresa tu ciudad");
if (ciudad =="bogota" || ciudad === "pasto") {
    alert("clima frio");
} else {
    if (ciudad ==="armenia" || ciudad === "medellin") {
        alert("clima templado");
    } else {
        alert("no ingreso una ciudad valida");
    }
}