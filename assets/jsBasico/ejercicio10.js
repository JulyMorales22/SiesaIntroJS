let dia = prompt("ingrese un dia de la semana ").toLowerCase();
//Para las tildes que hay que hacer la validacion manual - se usa otro archivo de configuracion
if (
  dia === "lunes" ||
  dia === "martes" ||
  dia === "miercoles" || 
  dia === "miércoles" ||
  dia === "jueves" ||
  dia === "viernes"
) {
  alert("el dia " + dia + " es un dia entre semana");
} else {
  if (dia === "sabado" || dia ==="sábado" ||dia === "domingo") {
    alert("el dia " + dia + " es dia de fin de semana");
  } else {
    alert("por favor ingrese solo dias de semana");
  }
}
