const prompt = require('prompt-sync')();
const Tarea = require("./Tarea");
 
// ==============================
// AGREGAR UNA TAREA
// ==============================
// Recibe el arreglo ListaTareas de MenuLista.js y le agrega (push) la
// tarea nueva al final, una vez que se completó el formulario.
const agregarUnaTarea = function(ListaTareas) {
    console.log("AGREGAR UNA TAREA 📚");
 
    // ------------------------------
    // TITULO (obligatorio, hasta 100 caracteres)
    // ------------------------------
    let titulo;
    do {
        console.log("Ingrese el titulo de la tarea (obligatorio, maximo 100 caracteres):");
        titulo = prompt(">").trim();
        console.clear();
 
        if (titulo === "") {
            console.log("El titulo es obligatorio ❌");
        } else if (titulo.length > 100) {
            console.log("El titulo no puede superar los 100 caracteres ❌");
        }
    } while (titulo === "" || titulo.length > 100);
 
    // Creamos la tarea ya con el titulo. El constructor de Tarea ya deja
    // descripcion "---", estado "Pendiente" y dificultad "Facil" por defecto,
    // asi que solo pisamos esos valores si la persona elige otra cosa.
    let nuevaTarea = new Tarea(titulo);
 
    // ------------------------------
    // DESCRIPCION (opcional, hasta 500 caracteres)
    // ------------------------------
    let descripcion;
    do {
        console.log("Ingrese una descripcion (opcional, maximo 500 caracteres, Enter para dejar en blanco):");
        descripcion = prompt(">").trim();
        console.clear();
 
        if (descripcion.length > 500) {
            console.log("La descripcion no puede superar los 500 caracteres ❌");
        }
    } while (descripcion.length > 500);
 
    if (descripcion !== "") {
        nuevaTarea.descripcion = descripcion;
    }
 
    // ------------------------------
    // ESTADO (opciones acotadas, por defecto Pendiente)
    // ------------------------------
    let opcionEstado;
    do {
        console.log("Elija el estado inicial (Enter para dejar 'Pendiente'):");
        console.log("   [1] Pendiente\n   [2] En curso\n   [3] Terminada\n   [4] Cancelada");
        opcionEstado = prompt(">").trim();
        console.clear();
 
        if (opcionEstado !== "" && opcionEstado !== "1" && opcionEstado !== "2" && opcionEstado !== "3" && opcionEstado !== "4") {
            console.log("Ingrese una opcion valida ❌");
        }
    } while (opcionEstado !== "" && opcionEstado !== "1" && opcionEstado !== "2" && opcionEstado !== "3" && opcionEstado !== "4");
 
    switch (opcionEstado) {
        case "1":
            nuevaTarea.estado = "Pendiente";
            break;
        case "2":
            nuevaTarea.estado = "En curso";
            break;
        case "3":
            nuevaTarea.estado = "Terminada";
            break;
        case "4":
            nuevaTarea.estado = "Cancelada";
            break;
        // Si dejaron "" (Enter), no hacemos nada: queda "Pendiente" del constructor.
    }
 
    // ------------------------------
    // DIFICULTAD (opciones acotadas, por defecto Facil)
    // ------------------------------
    let opcionDificultad;
    do {
        console.log("Elija la dificultad (Enter para dejar 'Facil'):");
        console.log("   [1] Facil\n   [2] Medio\n   [3] Dificil");
        opcionDificultad = prompt(">").trim();
        console.clear();
 
        if (opcionDificultad !== "" && opcionDificultad !== "1" && opcionDificultad !== "2" && opcionDificultad !== "3") {
            console.log("Ingrese una opcion valida ❌");
        }
    } while (opcionDificultad !== "" && opcionDificultad !== "1" && opcionDificultad !== "2" && opcionDificultad !== "3");
 
    switch (opcionDificultad) {
        case "1":
            nuevaTarea.dificultad = "Facil";
            break;
        case "2":
            nuevaTarea.dificultad = "Medio";
            break;
        case "3":
            nuevaTarea.dificultad = "Dificil";
            break;
        // Si dejaron "" (Enter), queda "Facil" del constructor.
    }
 
    // ------------------------------
    // VENCIMIENTO (opcional - BONUS)
    // ------------------------------
    console.log("Ingrese fecha de vencimiento, formato DD/MM/AAAA (opcional, Enter para dejar sin vencimiento):");
    let vencimiento = prompt(">").trim();
    console.clear();
 
    if (vencimiento !== "") {
        nuevaTarea.vencimiento = vencimiento;
    }
 
    // ------------------------------
    // GUARDAR
    // ------------------------------
    ListaTareas.push(nuevaTarea);
    console.log("¡Tarea guardada satisfactoriamente! ✅");
};
 
module.exports = {
    agregarUnaTarea
};