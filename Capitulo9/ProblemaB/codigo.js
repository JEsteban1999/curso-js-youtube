let alumnos = [{
    nombre: "Lucas Dalto",
    email: "soydalto@gmail.com",
    materia: "Fisica 3"
},{
    nombre: "Esteban Narvaez",
    email: "juesnaca@hotmail.com",
    materia: "Calculo 2"
},{
    nombre: "Cesar Ceron",
    email: "cesar@gmail.com",
    materia: "Campos Electromagneticos"
},{
    nombre: "Joseph Caicedo",
    email: "joseph@gmail.com",
    materia: "Comunicaciones 2"
},{
    nombre: "Paola Hernandez",
    email: "paola@gmail.com",
    materia: "Electronica Digital"
}]

const boton = document.querySelector(".btn-confirmar");
const contenedor = document.querySelector(".grid-container");

for (alumno in alumnos) {
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlCode = `
        <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
            <select class="semana-elegida">
                <option value="Semana 1">Semana 1</option>
                <option value="Semana 2">Semana 2</option>
            </select>
        </div>`
    contenedor.innerHTML += htmlCode;
}

boton.addEventListener("click",() => {
    let confirmar = confirm("Realmente quieres confirmar las mesas?")
    if (confirmar) {
        document.body.removeChild(boton);
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas = document.querySelectorAll(".semana-elegida")
            for (elemento in elementos) {
                semana = elementos[elemento];
                semana.innerHTML = semanasElegidas[elemento].value;
            } 
    }
})