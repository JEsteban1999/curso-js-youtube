"use strict";

const añadirCeros = (numero) => {
    if (numero.toString().length < 2) {
        return "0".concat(numero);
    } else {
        return numero;
    }
}
const actualizarHora = () => {
    const time = new Date();
    let hora = añadirCeros(time.getHours());
    let minutos = añadirCeros(time.getMinutes());
    let segundos = añadirCeros(time.getSeconds());
    document.querySelector(".hora").textContent = hora;
    document.querySelector(".minutos").textContent = minutos;
    document.querySelector(".segundos").textContent = segundos;
}

actualizarHora();
setInterval(actualizarHora,1000);