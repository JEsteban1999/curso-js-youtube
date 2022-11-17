// let free = false;

// const validarEntrada = (hora) => {
//     let edad = prompt("Ingresa tu edad: ");
//     if (edad >=18) {
//         if (hora >= 2 && hora < 7 && free == false){
//             alert("Entras sin pagar!");
//             free = true;
//         } else {
//             alert(`Son las ${hora} y puedes pasar, pero debes pagar por la entrada`);
//         }
//     } else {
//         alert("Eres menor de edad, tienes prohibido el paso!");
//     }
// }

// validarEntrada(3);
// validarEntrada(4);


/////////////////////////////////////////////////////


// let cantidad = prompt("Cantidad de alumnos: ");
// let alumnos = [];

// for (i = 0; i < cantidad; i++){
//     alumnos[i] = [prompt("Nombre del alumno: " + (i+1)),0];
// }

// const tomarAsistencia = (nombre,p) => {
//     let presencia = prompt(nombre);
//     if (presencia == "p" || presencia == "P"){
//         alumnos[p][1]++;
//     }
// }

// for (i = 0; i < 30; i++){
//     for (alumno in alumnos){
//         tomarAsistencia(alumnos[alumno][0],alumno)
//     }
// }

// for (alumno in alumnos){
//     let resultado = `${alumnos[alumno][0]}: <br>
//     Asistencias: ${alumnos[alumno][1]} <br>
//     Ausencias: ${30 - parseInt(alumnos[alumno][1])}`;
    
//     if (30 - alumnos[alumno][1] > 18){
//         resultado+= "Reprobado por inasistencia <br>"
//     } else {
//         resultado+= "<br>"
//     }
//     document.write(resultado)
// }

////////////////////////////////////////////////////////////

const suma = (num1,num2) => {
    let resultado = num1 + num2;
    return resultado;
}

const resta = (num1,num2) => {
    let resultado = num1 - num2;
    return resultado;
}

const multiplicacion = (num1,num2) => {
    let resultado = num1 * num2;
    return resultado;
}

const division = (num1,num2) => {
    let resultado = num1 / num2;
    return resultado;
}

alert("Bienvenido a la calculadora, ingrese la operacion que quiere realizar: ");
let opcion = prompt(`1. Suma   2. Resta   3. Multiplicacion   4. Division`);

if (opcion == 1){
    let num1 = parseInt(prompt("Ingrese primer numero a sumar: "));
    let num2 = parseInt(prompt("Ingrese primer numero a sumar: "));
    let resultado = suma(num1,num2);
    alert("Resultado: " + resultado)
}

else if (opcion == 2){
    let num1 = parseInt(prompt("Ingrese primer numero a restar: "));
    let num2 = parseInt(prompt("Ingrese primer numero a restar: "));
    let resultado = resta(num1,num2);
    alert("Resultado: " + resultado)
}

else if (opcion == 3){
    let num1 = parseInt(prompt("Ingrese primer numero a multiplicar: "));
    let num2 = parseInt(prompt("Ingrese primer numero a multiplicar: "));
    let resultado = multiplicacion(num1,num2);
    alert("Resultado: " + resultado)
}

else if (opcion == 4){
    let num1 = parseInt(prompt("Ingrese primer numero a dividir: "));
    let num2 = parseInt(prompt("Ingrese primer numero a dividir: "));
    let resultado = division(num1,num2);
    alert("Resultado: " + resultado)
}

else{
    alert("Operacion no encontrada!")
}
