// ///////////// PROBLEMA 1 ////////////////////////

// class celular {
//     constructor(color,peso,rdp,rdc,ram){
//         this.color = color;
//         this.peso = peso;
//         this.resolucionDePantalla = rdp;
//         this.resolucionDeCamara = rdc;
//         this.memoriaRam = ram;
//         this.encendido = false;
//     }
//     botonDeEncendido(){
//         if (this.encendido == false){
//             alert("Celular encendido");
//             this.encendido = true;
//         } else {
//             alert("Celular apagado");
//             this.encendido = false;
//         }
//     }
//     reiniciar(){
//         if (this.encendido == true){
//             alert("Reiniciando celular...");
//         } else {
//             alert("El celular se encuentra apagado");
//         }
//     }
//     tomarFoto(){
//         alert(`Foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
//     }
//     grabarVideo(){
//         alert(`Grabando en resolucion de: ${this.resolucionDeCamara}`);
//     }
//     mostrarInfo(){
//         return `
//         Color: <b>${this.color}</b>  <br>
//         Peso: <b>${this.peso}</b> <br>
//         Resolucion de Pantalla: <b>${this.resolucionDePantalla}</b> <br>
//         Resolucion de Camara: <b>${this.resolucionDeCamara}</b> <br>
//         Memoria RAM: <b>${this.memoriaRam}</b> <br>
//         `;
//     }
// }

// celular1 = new celular("rojo","150g","5'","full HD","2GB");
// celular2 = new celular("blanco","155g","5.5'","HD","4GB");
// celular3 = new celular("negro","145g","5.9'","full HD 4K","8GB");

// document.write(`
//     ${celular1.mostrarInfo()} <br>
//     ${celular2.mostrarInfo()} <br>
//     ${celular3.mostrarInfo()} <br>
// `);

// //////////////////// PROBLEMA 2 /////////////////////////

// class celularGamaAlta extends celular{
//     constructor(color,peso,rdp,rdc,ram,rdce){
//         super(color,peso,rdp,rdc,ram);
//         this.resolucionDeCamaraExtra = rdce;
//     }
//     grabarVideoLento(){
//         alert("Estas grabando en camara lenta!");
//     }
//     reconocimientoFacial(){
//         alert("Iniciando reconocimiento facial...");
//     }
//     infoAltaGama(){
//         return this.mostrarInfo() + `Resolucion de Camara Extra: ${this.resolucionDeCamaraExtra} <br>`;
//     }
// }

// celularGamaAlta1 = new celularGamaAlta("rojo","150g","5.2'","4K","16GB","full HD");
// celularGamaAlta2 = new celularGamaAlta("blanco","155g","5.5'","HD","4GB","HD");

// document.write(`
//     ${celularGamaAlta1.infoAltaGama()} <br>
//     ${celularGamaAlta2.infoAltaGama()} <br>
    
// `);

/////////////////// PROBLEMA 3 //////////////////////////////////////////////

class app {
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.appIniciada = false;
        this.appInstalada = false;
    }
    
    instalar(){
        if (this.appInstalada == false){
            this.appInstalada = true;
            alert("Aplicacion Instalada")
        }
    }
    desinstalar(){
        if (this.appInstalada == true){
            this.appInstalada = false;
            alert("Aplicacion Desinstalada")
        }
    }
    abrir(){
        if (this.appIniciada == false && this.appInstalada == true){
            this.appIniciada = true;
            alert("Aplicacion Iniciada");
        }
    }
    cerrar(){
        if (this.appIniciada == true && this.appInstalada == true){
            this.appIniciada = false;
            alert("Aplicacion Cerrada");
        }
    }
    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b><br>
        Puntuacion: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br>`
    }
}

aplicacion1 = new app("1.000","1 estrellas","128MB");
aplicacion2 = new app("2.000","2 estrellas","256MB");
aplicacion3 = new app("4.000","3 estrellas","512MB");
aplicacion4 = new app("8.000","4 estrellas","1024MB");
aplicacion5 = new app("16.000","5 estrellas","2048MB");
aplicacion6 = new app("32.000","4 estrellas","4096MB");
aplicacion7 = new app("64.000","3 estrellas","8192MB");

document.write(`
    ${aplicacion1.appInfo()} <br>
    ${aplicacion2.appInfo()} <br>
    ${aplicacion3.appInfo()} <br>
    ${aplicacion4.appInfo()} <br>
    ${aplicacion5.appInfo()} <br>
    ${aplicacion6.appInfo()} <br>
    ${aplicacion7.appInfo()} <br>
`)