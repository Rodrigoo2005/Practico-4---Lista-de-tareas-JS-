const prompt = require('prompt-sync')();
 
// ==============================
// MOSTRAR UN LISTADO DE TAREAS
// ==============================
// Recibe un arreglo YA FILTRADO (puede venir de "Ver mis tareas" filtrando
// por estado, o de "Buscar una tarea" filtrando por título). Este módulo
// no sabe ni le importa de dónde salió el filtro, solo sabe mostrar la lista.
const mostrarListaTareas = function(lista) {
    if (lista.length === 0) {
        console.log("No hay tareas para mostrar ❓");
        return;
    }
 
    let indiceTarea;
    do {
        for (let contador = 0; contador < lista.length; contador++) {
            console.log("   [" + (contador + 1) + "] " + lista[contador].titulo);
        }
 
        console.log("\nIngrese el numero de una tarea para ver sus detalles (0 para volver)");
        indiceTarea = Number(prompt(">"));
        console.clear();
 
        if (indiceTarea === 0) {
            return;
        } else if (lista[indiceTarea - 1] === undefined) {
            console.log("Ingrese una opcion valida ❌");
        } else {
            mostrarDetallesTarea(lista[indiceTarea - 1]);
        }
    } while (lista[indiceTarea - 1] === undefined);
};
 
// ==============================
// DETALLES DE TAREA
// ==============================
const mostrarDetallesTarea = function(tarea) {
    let opcion;
    do {
        tarea.mostrarTarea();
        console.log("[E] Editar [0] Volver");
        opcion = prompt(">");
 
        console.clear();
 
        if (opcion !== "E" && opcion !== "e" && opcion !== "0") {
            console.log("Ingrese una opcion valida ❌");
        }
    } while (opcion !== "E" && opcion !== "e" && opcion !== "0");
 
    if (opcion === "E" || opcion === "e") {
        editarTarea(tarea);
    }
};
 
// ==============================
// EDITAR TAREA
// ==============================
const editarTarea = function(tarea) {
    let opcion;
    do {
        console.log("EDITAR TAREA ✏️");
        console.log("   [1] Titulo: " + tarea.titulo);
        console.log("   [2] Descripcion: " + tarea.descripcion);
        console.log("   [3] Estado: " + tarea.estado);
        console.log("   [4] Dificultad: " + tarea.dificultad);
        console.log("   [5] Fecha de vencimiento: " + tarea.vencimiento);
        console.log("       Fecha de creacion: " + tarea.creacion);
        console.log("       Fecha de ultima modificacion: " + tarea.ultimaEdicion);
        opcion = Number(prompt("Ingrese el dato que desea modificar (0 para volver): "));
 
        console.clear();
        switch (opcion) {
            case 1:
                let nuevoTitulo;
                do{
                    console.log("Titulo actual: " + tarea.titulo);
                    console.log("Ingrese nuevo titulo (Enter para cancelar): ");
                    nuevoTitulo = prompt(">");
                    console.clear();

                    nuevoTitulo = nuevoTitulo.trim();

                    if (nuevoTitulo.length > 100){
                        console.log ("El titulo no puede superar los 100 caracteres ❌");
                    }
                }while(nuevoTitulo.length > 100); //No supere los 100 caracteres

                if (nuevoTitulo !== "") {
                    tarea.cambiarTitulo(nuevoTitulo);
                    console.log("El titulo se modifico satisfactoriamente ✅");
                }
                break;
            case 2:
                let nuevaDescripcion;
                do{
                    console.log("Descripcion actual: " + tarea.descripcion);
                    console.log("Ingrese nueva descripcion (Enter para cancelar): ");
                    nuevaDescripcion = prompt(">");
                    console.clear();

                    nuevaDescripcion = nuevaDescripcion.trim();

                    if (nuevaDescripcion.length > 500){
                        console.log ("La descripcion no puede superar los 500 caracteres ❌");
                    }
                }while (nuevaDescripcion.length > 500); //No supere los 500 caracteres

                if (nuevaDescripcion !== "") {
                    tarea.cambiarDescripcion(nuevaDescripcion);
                } else { //Si lo que ingreso esta vacio
                    tarea.cambiarDescripcion("---");
                }
                console.log("La descripcion se modifico satisfactoriamente ✅");
                break;
            case 3:
                let nuevoEstado;
 
                do {
                    console.log("Estado actual: " + tarea.estado);
                    console.log("   [1] Pendiente\n   [2] En curso\n   [3] Terminada\n   [4] Cancelada\n   [0] Cancelar");
                    nuevoEstado = Number(prompt(">"));
                    console.clear();
                    switch (nuevoEstado) {
                        case 1:
                            tarea.cambiarEstado("Pendiente");
                            console.log("El estado se modifico satisfactoriamente ✅");
                            break;
                        case 2:
                            tarea.cambiarEstado("En curso");
                            console.log("El estado se modifico satisfactoriamente ✅");
                            break;
                        case 3:
                            tarea.cambiarEstado("Terminada");
                            console.log("El estado se modifico satisfactoriamente ✅");
                            break;
                        case 4:
                            tarea.cambiarEstado("Cancelada");
                            console.log("El estado se modifico satisfactoriamente ✅");
                            break;
                        case 0:
                            break;
                        default:
                            console.log("Ingrese una opcion valida ❌");
                    }
                } while (nuevoEstado!==1 && nuevoEstado!==2 && nuevoEstado!==3 && nuevoEstado!==4 && nuevoEstado!==0 || isNaN(nuevoEstado));
                break;
            case 4:
                let nuevaDificultad;
 
                do {
                    console.log("Dificultad actual: " + tarea.dificultad);
                    console.log("   [1] Facil\n   [2] Medio\n   [3] Dificil\n   [0] Cancelar");
                    nuevaDificultad = Number(prompt(">"));
                    console.clear();
                    switch (nuevaDificultad) {
                        case 1:
                            tarea.cambiarDificultad("Facil");
                            console.log("La dificultad se modifico satisfactoriamente ✅");
                            break;
                        case 2:
                            tarea.cambiarDificultad("Medio");
                            console.log("La dificultad se modifico satisfactoriamente ✅");
                            break;
                        case 3:
                            tarea.cambiarDificultad("Dificil");
                            console.log("La dificultad se modifico satisfactoriamente ✅");
                            break;
                        case 0:
                            break;
                        default:
                            console.log("Ingrese una opcion valida ❌");
                    }
                } while (nuevaDificultad !==1 && nuevaDificultad !==2 && nuevaDificultad !==3 || isNaN(nuevaDificultad));
                break;
            case 5:
                let nuevoVencimiento;
 
                console.log("Fecha de vencimiento actual: " + tarea.vencimiento);
                console.log("Ingrese nueva fecha de vencimiento, formato DD/MM/AAAA (Enter para cancelar): ");
                nuevoVencimiento = prompt(">");
                console.clear();
 
                nuevoVencimiento = nuevoVencimiento.trim();
 
                if (nuevoVencimiento !== "") {
                    tarea.cambiarVencimiento(nuevoVencimiento);
                    console.log("La fecha de vencimiento se modifico satisfactoriamente ✅");
                }
                break;
            case 0:
                break;
            default:
                console.log("Ingrese una opcion valida ❌");
                break;
        }
    } while (opcion !== 0);
};
 
module.exports = {
    mostrarListaTareas
};