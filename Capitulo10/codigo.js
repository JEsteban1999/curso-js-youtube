const sendButton = document.getElementById("send-nota");

sendButton.addEventListener("click",() => {
    let resultado, mensaje;
    try {
        prevRes =parseInt(document.getElementById("nota").value);
        if (isNaN(prevRes)) {
            throw "Gracioso";
        }
        mensaje = definirMensaje(prevRes);
        resultado = verificarAprobacion(8,5,prevRes);
    } catch(e) {
        resultado = "¿Sos gracioso?";
        mensaje = "He descubierto que trataste de hackear la página";
    }
    abrirModal(resultado,mensaje)
})

const abrirModal = (res,msg) => {
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = `Tu prueba: <b>${msg}</b>`;
    let modal = document.querySelector(".background-modal");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";
}

const definirMensaje = (pr) => {
    let resultado;
    switch (pr) {
        case 1: resultado = "No podes ser tan malo";
        break;
        case 2: resultado = "Sos malisimo para esta materia";
        break;
        case 3: resultado = "No sabes casi nada";
        break;
        case 4: resultado = "Muy mal";
        break;
        case 5: resultado = "Mal";
        break;
        case 6: resultado = "Regular";
        break;
        case 7: resultado = "Bien, pero puede mejorar";
        break;
        case 8: resultado = "Muy bien!";
        break;
        case 9: resultado = "Excelente!";
        break;
        case 10: resultado = "Insuperable!";
        break;
        default: resultado = null;
    }
    return resultado;
}

const verificarAprobacion = (nota1,nota2,prevRes) => {
    promedio = (nota1 + nota2 + prevRes) / 3;
    if (promedio >=7) {
        return `<span class = "green">APROBADO</span>`;
    }
    return `<span class = "red">DESAPROBADO</span>`
}