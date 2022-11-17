// ////////////////////////////////// PROBLEMA 1 //////////////////////////////////////

// const materias = {
//     fisica: [90,6,4,"fisica"],
//     matematica: [84,8,2,"matematica"],
//     quimica: [92,8,4,"quimica"],
//     logica: [96,8,4,"logica"],
//     programacion: [91,6,3,"programacion"],
//     etica: [79,7,4,"etica"],
//     calculo: [75,9,2,"calculo"],
//     bbdd: [98,9,1,"bbdd"],
//     algebra: [100,10,4,"algebra"],
// }

// const aprobacion = () => {
//     for (materia in materias) {
//         let asistencias = materias[materia][0];
//         let promedio = materias[materia][1];
//         let trabajos = materias[materia][2];
//         console.log(materias[materia][3]);

//         if (asistencias >= 90) {
//             console.log("%c   Asistencias en orden","color:green");
//         } else {
//             console.log("%c   Falta de asistencias","color:red");
//         }

//         if (promedio >= 7) {
//             console.log("%c   Promedio en orden","color:green");
//         } else {
//             console.log("%c   Promedio desaprobado","color:red");
//         }

//         if (trabajos >= 3) {
//             console.log("%c   Trabajos en orden","color:green");
//         } else {
//             console.log("%c   Falta de trabajos","color:red");
//         }
//     }
//     }

// aprobacion();

// ///////////////////////////////// PROBLEMA 2 /////////////////////////////////////////////

let trabajo = "240 min de trabajo";
let trabajosPracticos = "100 min de trabajos practicos";
let descanso = "10 min de descanso";
let estudio = "100 min de estudio";
let aseoCasa = "30 min de aseo";

console.log("TAREAS");
for (var i = 0; i < 14; i++){
    if (i == 0) {
        console.group("Semana 1")
    }
    if (i == 7) {
        console.groupEnd();
        console.groupCollapsed("Semana 2");
        }
    console.groupCollapsed(`Dia ${i+1}`);
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(trabajosPracticos);
    console.log(aseoCasa);
    console.groupEnd();
    
}

console.groupEnd();
console.groupEnd();


