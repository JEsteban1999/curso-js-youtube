"use strict";

const publicaciones = document.querySelector(".publicaciones");
let contador = 0;

const createPublicationCode = (name,content) => {
    const container = document.createElement("div");
    const comentarios = document.createElement("div");
    const nombre = document.createElement("h3");
    const contenido = document.createElement("p")
    const btnComentario = document.createElement("input");
    const btnEnviar = document.createElement("input");

    container.classList.add("publicacion");
    comentarios.classList.add("comentarios");
    btnEnviar.classList.add("enviar");
    btnComentario.classList.add("comentario");

    btnComentario.setAttribute("placeholder","Introduce un comentario");
    btnComentario.setAttribute("type","text");
    btnEnviar.setAttribute("type","submit");

    nombre.textContent = name;
    contenido.textContent = content;

    comentarios.appendChild(btnComentario);
    comentarios.appendChild(btnEnviar);

    container.appendChild(nombre);
    container.appendChild(contenido);
    container.appendChild(comentarios);

    return container;
}

const cargarMasPublicaciones = (entry) => {
    if (entry[0].isIntersecting) {
        loadPublications(4);
    }
}

const observer = new IntersectionObserver(cargarMasPublicaciones);

const loadPublications = async(numero) => {
    const request = await fetch("info.txt");
    const content = await request.json();
    const arr = content.content;
    const documentFragment = document.createDocumentFragment();
    for (let i = 0; i < numero; i++) {
        if (arr[contador] != undefined) {
            const newPublicacion = createPublicationCode(arr[contador].nombre,arr[contador].contenido);
            documentFragment.appendChild(newPublicacion);
            contador++;
            if (i == numero - 1) {
                observer.observe(newPublicacion); 
            }
        } else {
            if (publicaciones.lastElementChild.id != "nomore") {
                let noMore = document.createElement("h3");
                noMore.textContent = "No hay más publicaciones pa";
                noMore.id = "nomore";
                documentFragment.appendChild(noMore);
                publicaciones.appendChild(documentFragment);
                break;
            }
        }
    }
    publicaciones.appendChild(documentFragment);
}

loadPublications(5);