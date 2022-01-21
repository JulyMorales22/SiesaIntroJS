/**
 * El usuario puede ingresar 5 departamentos de Colombia
 * - validacion con los departamentos y dependiendo de cada uno va mostrar un prompt diferente para mostrar 5 ciudades o pueblos de esos departamentos
 *
 */

let departamentosColombia = prompt(
  "por favor ingrese alguno de los departamentos que aparecen para conocer algunas de sus ciudades o pueblos: \n Antioquia \n Valle del Cauca \n Tolima \n Putumayo \n Nariño"
).toLowerCase();

if (departamentosColombia === "antioquia") {
  let ciudad = prompt(
    "Escoge alguna de las ciudades  o pueblos de este departamento para conocer mas informacion: \n Betania \n Medellin \n Caldas \n Guatape \n El Bagre"
  ).toLowerCase();
  if (ciudad === "betania") {
    alert("Alcalde: Carlos Mario Villada Uribe (2020-2023)");
  } else if (ciudad === "medellin") {
    alert(
      " Es apodada la Ciudad de la eterna primavera por su clima templado y alberga la famosa Feria de las Flores anual."
    );
  } else if (ciudad === "caldas") {
    alert("Precio promedio en hotel tres estrellas: $ 108.918");
  } else if (ciudad === "guatape") {
    alert("Es famoso por sus casas decoradas con bajorrelieves de colores");
  } else if (ciudad === "el bagre") {
    alert("Alcalde: Faber Enrique Trespalacios (2020-2023)");
  }
} else if (departamentosColombia === "valle del cauca") {
  let ciudad1 = prompt(
    "Escoge alguna de las ciudades o pueblos de este departamento para conocer mas informacion: \n Cali \n Palmira \n Buga \n Tulua \n Guacari"
  ).toLowerCase();
  if (ciudad1 === "cali") {
    alert(
      " Es conocida por el baile de la salsa, del que hay muchos clubes en el suburbio de Juanchito."
    );
  } else if (ciudad1 === "palmira") {
    alert("Es conocido como La Villa de las Palmas");
  } else if (ciudad1 === "buga") {
    alert(
      "Es conocida por su Basílica del Señor de los Milagros de comienzos del siglo XX"
    );
  } else if (ciudad1 === "tulua") {
    alert("Superficie: 910,6 km²");
  } else if (ciudad1 === "guacari") {
    alert("Alcalde: Óscar Hernán Sanclemente Toro2020-2023");
  }
} else if (departamentosColombia === "tolima") {
  let ciudad2 = prompt(
    "Escoge alguna de las ciudades o pueblos de este departamento para conocer mas informacion: \n Ibague \n Fresno \n Alvarado \n Palocabildo \n Honda"
  ).toLowerCase();
  if (ciudad2 === "ibague") {
    alert("Fundación: 14 de octubre de 1550");
  } else if (ciudad2 === "fresno") {
    alert("Gentilicio: Fresnense");
  } else if (ciudad2 === "alvarado") {
    alert(" Precio promedio en hotel tres estrellas: $ 201.835");
  } else if (ciudad2 === "palocabildo") {
    alert("Superficie: 65 km²");
  } else if (ciudad2 === "honda") {
    alert("Elevación: 229 m");
  }
} else if (departamentosColombia === "putumayo") {
  let ciudad3 = prompt(
    "Escoge alguna de las ciudades o pueblos de este departamento para conocer mas informacion: \n Villagarzon \n Orito \n Mocoa \n Puerto Leguizamo \n Sibundoy"
  ).toLowerCase();
  if (ciudad3 === "villagarzon") {
    alert("Precio promedio en hotel tres estrellas: $ 54.277");
  } else if (ciudad3 === "Orito") {
    alert("Precio promedio en hotel tres estrellas: $ 60.290");
  } else if (ciudad3 === "mocoa") {
    alert("Gentilicio: Mocoano");
  } else if (ciudad3 === "puerto leguizamo") {
    alert("Precio promedio en hotel tres estrellas: $ 116.101");
  } else if (ciudad3 === "sibundoy") {
    alert("Precio promedio en hotel tres estrellas: $ 60.290");
  }
} else if (departamentosColombia === "nariño") {
  let ciudad4 = prompt(
    "Escoge alguna de las ciudades o pueblos de este departamento para conocer mas informacion: \n Pasto \n Tuquerres \n El Tambo \n Ipiales \n Potosi"
  ).toLowerCase();
  if (ciudad4 === "pasto") {
    alert("Alcalde: Germán Chamorro de la Rosa");
  } else if (ciudad4 === "tuquerres") {
    alert(
      "Alcalde: Juan Fernando López Meneses (2020-2023) Somos Tuquerres para un buen Vivir."
    );
  } else if (ciudad4 === "el tambo") {
    alert("Alcalde: Sebastian Rojas (2020-2023)");
  } else if (ciudad4 === "ipiales") {
    alert("Alcalde: Luis Fernando Villota Méndez(2020-2023)");
  } else if (ciudad4 === "potosi") {
    alert(" Alcalde: Lucio Chamorro (2020-2023)");
  }
} else {
  alert("Por favor ingrese un departamento valido");
}
