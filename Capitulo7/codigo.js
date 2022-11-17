//////////////////////////// PROBLEMA 1 /////////////////////////////////

// let alto = window.screen.availHeight;
// let ancho = window.screen.availWidth;
// comprar = confirm(`El alto es: ${alto} y el ancho es: ${ancho}`);

// if (comprar) {
//     alert("Compra realizada exitosamente!")
// } else {
//     alert("Compra rechazada :(")
// }

///////////////////////////////// PROBLEMA 2 /////////////////////////////

let href = window.location.href;
let pathname = window.location.pathname;
let protocolo = window.location.protocol;
let hostname = window.location.hostname;

let html = `Protocolo: <b>${protocolo}</b><br>
            Hostname: <b>${hostname}</b><br>
            Pathname: <b>${pathname}</b><br>
            URL completa: <b>${href}</b>`;

document.write(html);