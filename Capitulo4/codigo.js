// //////////////////////////// PROBLEMA 1 /////////////////////////////////
// class Calculadora{

// suma (num1,num2){
//     let resultado = num1 + num2;
//     return resultado;
// }

// resta (num1,num2){
//     let resultado = num1 - num2;
//     return resultado;
// }

// multiplicacion (num1,num2){
//     let resultado = num1 * num2;
//     return resultado;
// }

// division (num1,num2){
//     let resultado = num1 / num2;
//     return resultado;
// }

// potenciacion (num,exp){
//     let resultado = Math.pow(num,exp);
//     return resultado;
// }

// raizCuadrada (num){
//     let resultado = Math.sqrt(num);
//     return resultado;
// }

// raizCubica (num){
//     let resultado = Math.pow(num,(1/3));
//     return resultado;
// }
// }

// const calcular = new Calculadora();

// alert("Bienvenido a la calculadora, ingrese la operacion que quiere realizar: ");
// let opcion = prompt(`1. Suma   2. Resta   3. Multiplicacion   4. Division   5. Potenciacion   6. Raiz Cuadrada   7. Raiz Cubica`);

// if (opcion == 1){
//     let num1 = parseInt(prompt("Ingrese primer numero a sumar: "));
//     let num2 = parseInt(prompt("Ingrese primer numero a sumar: "));
//     let resultado = calcular.suma(num1,num2);
//     alert("Resultado: " + resultado);
// }

// else if (opcion == 2){
//     let num1 = parseInt(prompt("Ingrese primer numero a restar: "));
//     let num2 = parseInt(prompt("Ingrese primer numero a restar: "));
//     let resultado = calcular.resta(num1,num2);
//     alert("Resultado: " + resultado);
// }

// else if (opcion == 3){
//     let num1 = parseInt(prompt("Ingrese primer numero a multiplicar: "));
//     let num2 = parseInt(prompt("Ingrese primer numero a multiplicar: "));
//     let resultado = calcular.multiplicacion(num1,num2);
//     alert("Resultado: " + resultado);
// }

// else if (opcion == 4){
//     let num1 = parseInt(prompt("Ingrese primer numero a dividir: "));
//     let num2 = parseInt(prompt("Ingrese primer numero a dividir: "));
//     let resultado = calcular.division(num1,num2);
//     alert("Resultado: " + resultado);
// }

// else if (opcion == 5){
//     let num1 = parseInt(prompt("Ingrese la base: "));
//     let num2 = parseInt(prompt("Ingrese la potencia: "));
//     let resultado = calcular.potenciacion(num1,num2);
//     alert("Resultado: " + resultado);
// }

// else if (opcion == 6){
//     let num1 = parseInt(prompt("Ingrese numero: "));
//     let resultado = calcular.raizCuadrada(num1);
//     alert("Resultado: " + resultado);
// }

// else if (opcion == 7){
//     let num1 = parseInt(prompt("Ingrese numero: "));
//     let resultado = calcular.raizCubica(num1);
//     alert("Resultado: " + resultado);
// }

// else{
//     alert("Operacion no encontrada!");
// }

///////////////////////// PROBLEMA 2 /////////////////////////////////////////

// const obtenerInformacion = (materia) => {
//     materias = {
//         fisica: ["Perez","pedro","pepito","cofla","maria"],
//         programacion: ["Rodriguez","pedro","juan","pepito"],
//         quimica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
//         logica: ["Narvaez","pedro","juan","pepito","cofla","maria"]
//     }
//     if (materias[materia] !== undefined) {
//         return [materias[materia],materia,materias];
//     }
//     else {
//         return materias;
//     }
// }

// const mostrarInformacion = (materia) => {
//     let informacion = obtenerInformacion(materia);

//     if (informacion !== false) {
//         let profesor = informacion[0][0];
//         let alumnos = informacion[0];
//         alumnos.shift();
//         document.write(`El profesor de <b>${informacion[1]}</b> es: <b style = "color: red">${profesor}</b> <br>
//         Los alumnos son: <b style = "color: blue">${alumnos}</b> <br><br>`);
// }
// }

// const cantidadDeClases = (alumno) => {
//     let informacion = obtenerInformacion();
//     let clasesPresentes = [];
//     let cantidadTotal = 0;
//     for (info in informacion){
//         if (informacion[info].includes(alumno)) {
//             cantidadTotal++;
//             clasesPresentes.push(" " + info);
//         }
//     }
//     return `<b style ="color:green">${alumno}</b> esta en <b>${cantidadTotal} clases</b> <br>
//     Esta cursando las clases: <b>${clasesPresentes}</b><br>`;
// }
// mostrarInformacion("fisica");
// mostrarInformacion("programacion");
// mostrarInformacion("quimica");
// mostrarInformacion("logica");

// document.write(cantidadDeClases("cofla"));
// document.write(cantidadDeClases("pedro"));

// ///////////////////////////////////////// PROBLEMA 3 //////////////////////////////////////////


let materias = {
    fisica: ["Perez","pedro","pepito","cofla","maria"],
    programacion: ["Rodriguez","pedro","juan","pepito"],
    quimica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
    logica: ["Narvaez","pedro","juan","pepito","cofla","maria"]
}

const inscribir = (alumno,materia) => {
    personas = materias[materia];
    if (personas.length >= 21) {
        document.write(`Lo siento <b>${alumno}</b>, las clases de <b>${materia}</b> ya estan llenas <br>`)
    } else {
        personas.push(alumno);
        if (materia == "fisica") {
            materias = {
                fisica: personas,
                programacion: materias["programacion"],
                quimica: materias["quimica"],
                logica: materias["logica"]
            }
        }
        else if (materia == "programacion") {
            materias = {
                fisica: materias["fisica"],
                programacion: personas,
                quimica: materias["quimica"],
                logica: materias["logica"]
            }
        }
        else if (materia == "quimica") {
            materias = {
                fisica: materias["fisica"],
                programacion: materias["programacion"],
                quimica: personas,
                logica: materias["logica"]
            }
        }
        else if (materia == "logica") {
            materias = {
                fisica: materias["fisica"],
                programacion: materias["programacion"],
                quimica: materias["quimica"],
                logica: personas
            }
        }
        document.write(`Felicidades ${alumno}!, te has inscrito a ${materia} correctamente <br>`)
    }
}

document.write(materias["fisica"] + "<br>");
inscribir("Pedrito","fisica");
document.write("<br>" + materias["fisica"]);