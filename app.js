import fetch from "node-fetch";

// link de peticion
fetch("https://www.datos.gov.co/resource/xdk5-pm3f.json")
    // genera la promesa de respuesta
    .then((respuesta) => {
        return respuesta.json();
    }).then((resp) => {
        console.log(resp);
    });