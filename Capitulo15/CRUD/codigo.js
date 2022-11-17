"use strict";

const IDBRequest = indexedDB.open("database",1);

IDBRequest.addEventListener("upgradeneeded",()=>{
    const db = IDBRequest.result;
    db.createObjectStore("nombres",{
        autoIncrement: true
    });
})

IDBRequest.addEventListener("success",()=>{
    reedObjeto();
})

IDBRequest.addEventListener("error",()=>{
    console.log("Ocurrió un error al abrir la base de datos :(");
})

document.getElementById("add").addEventListener("click",()=>{
    let nombre = document.getElementById("nombre").value;
    if (nombre.length > 0) {
        if (document.querySelector(".posible") !== undefined) {
            if (confirm("Hay elementos sin guardar, ¿Quieres continuar?")) {
                addObjeto({nombre});
                reedObjeto();
            }
        } else {
            addObjeto({nombre});
            reedObjeto();
        }
    }
})

const addObjeto = (objeto) => {
    const db = IDBRequest.result;
    const IDBTransaction = db.transaction("nombres","readwrite");
    const objectStore = IDBTransaction.objectStore("nombres");
    objectStore.add(objeto);
    IDBTransaction.addEventListener("complete",()=>{
        console.log("Elemento agregado correctamente");
    })
}

const reedObjeto = () => {
    const db = IDBRequest.result;
    const IDBTransaction = db.transaction("nombres","readonly");
    const objectStore = IDBTransaction.objectStore("nombres");
    const cursor = objectStore.openCursor();
    const fragment = document.createDocumentFragment();
    document.querySelector(".nombres").innerHTML = "";
    cursor.addEventListener("success",()=>{
        if (cursor.result) {
            let elemento = nombresHTML(cursor.result.key, cursor.result.value);
            fragment.appendChild(elemento);
            cursor.result.continue();
        } else {
            document.querySelector(".nombres").appendChild(fragment);
        }
    })
}

const modifyObjeto = (key,objeto) => {
    const db = IDBRequest.result;
    const IDBTransaction = db.transaction("nombres","readwrite");
    const objectStore = IDBTransaction.objectStore("nombres");
    objectStore.put(objeto,key);
    IDBTransaction.addEventListener("complete",()=>{
        console.log("Elemento modificado correctamente");
    })
}

const deleteObjeto = (key) => {
    const db = IDBRequest.result;
    const IDBTransaction = db.transaction("nombres","readwrite");
    const objectStore = IDBTransaction.objectStore("nombres");
    objectStore.delete(key);
    IDBTransaction.addEventListener("complete",()=>{
        console.log("Elemento eliminado correctamente");
    })
}

const nombresHTML = (id,name) => {
    const container = document.createElement("DIV");
    const h2 = document.createElement("h2");
    const options = document.createElement("DIV");
    const saveButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    container.classList.add("nombre");
    options.classList.add("options");
    saveButton.classList.add("imposible");
    deleteButton.classList.add("delete");

    saveButton.textContent = "Guardar";
    deleteButton.textContent = "Eliminar";

    h2.textContent = name.nombre;
    h2.setAttribute("contenteditable","true");
    h2.setAttribute("spellcheck","false");


    options.appendChild(saveButton);
    options.appendChild(deleteButton);
    
    container.appendChild(h2);
    container.appendChild(options);

    h2.addEventListener("keyup",()=>{
        saveButton.classList.replace("imposible","posible");
    })

    saveButton.addEventListener("click",()=>{
        if (saveButton.className == "posible") {
            modifyObjeto(id,{nombre: h2.textContent});
            saveButton.classList.replace("posible","imposible");
        }
    })

    deleteButton.addEventListener("click",()=>{
        deleteObjeto(id);
        document.querySelector(".nombres").removeChild(container);
    })

    return container;
}