const prompt = require('prompt-sync')();
 
//Definiciones de variables
const Tarea = require("./Tarea");
const { mostrarListaTareas } = require("./Listar_Editar");
const { agregarUnaTarea } = require("./agregarTarea");
let ListaTareas = [];
 
// TAREAS DE PRUEBA
ListaTareas.push(new Tarea("Estudiar JavaScript"));
ListaTareas.push(new Tarea("Hacer trabajo práctico"));
ListaTareas.push(new Tarea("Ordenar la habitación"));
ListaTareas.push(new Tarea("Aprender Node.js"));
 
// ==============================
// MENU PRINCIPAL
// ==============================
const menuPrincipal = function() {
    let opcion;
    do{
        console.log ("¡Bienvenido! 😃");
        console.log ("¿Que desea hacer?:");
        console.log ("  [1] Ver mis tareas 📝👀");
        console.log ("  [2] Buscar una tarea 🔍");
        console.log ("  [3] Agregar una tarea 📚");
        console.log ("  [0] Salir");
        opcion = Number (prompt(">"));
 
        console.clear();
 
        switch (opcion){
            case 1:
                VerMisTareas();
                break;
            case 2:
                BuscarUnaTarea();
                break;
            case 3:
                agregarUnaTarea(ListaTareas);
                break;
            case 0:
                console.log("Saliendo...");
                break;
            default:
                console.log ("Ingrese una opcion valida ❌");
                break;
        }
    }while (opcion!==0);
};
 
// ==============================
// VER MIS TAREAS
// ==============================
const VerMisTareas = function() {
    let opcion;
    do{
        console.log ("VER MIS TAREAS 📝👀");
        console.log ("¿Que tareas desea ver?:");
        console.log ("  [1] Todas");
        console.log ("  [2] Pendientes");
        console.log ("  [3] En curso");
        console.log ("  [4] Terminada");
        console.log ("  [0] Volver");
        opcion = Number (prompt(">"));
 
        console.clear();
        switch (opcion){
            case 1:
                console.log ("TODAS LAS TAREAS:");
                mostrarTipoTarea ("Todas");
                break;
            case 2:
                console.log ("TAREAS PENDIENTES:");
                mostrarTipoTarea ("Pendiente");
                break;
            case 3:
                console.log ("TAREAS EN CURSO:");
                mostrarTipoTarea ("En curso");
                break;
            case 4:
                console.log ("TAREAS TERMINADAS:");
                mostrarTipoTarea ("Terminada");
                break;
            case 0:
                break;
            default:
                console.log ("Ingrese una opcion valida ❌");
                break;
        }
 
    }while (opcion!==0);
};
 
// ==============================
// FILTRAR TAREAS POR ESTADO
// ==============================
const mostrarTipoTarea = function(condicion){
    //ARREGLO TEMPORAL
    let tipoTarea = [];
 
    // FILTRAR TAREAS
    for (let contador = 0; contador < ListaTareas.length; contador++) {
        if (condicion === "Todas" || ListaTareas[contador].estado === condicion) {
            tipoTarea.push(ListaTareas[contador]);
        }
    }
 
    // Delegamos el "mostrar y elegir" al módulo listado.js
    mostrarListaTareas(tipoTarea);
};
 
// ==============================
// BUSCAR UNA TAREA
// ==============================
const BuscarUnaTarea = function() {
    console.log("BUSCAR UNA TAREA 🔍");
    console.log("Ingrese una palabra clave para buscar en el titulo:");
    let clave = prompt(">");
    console.clear();
 
    // ARREGLO TEMPORAL CON LOS RESULTADOS
    let resultados = [];
 
    // FILTRAR TAREAS CUYO TITULO CONTENGA LA CLAVE
    // toLowerCase() en ambos lados para que la búsqueda no distinga mayúsculas/minúsculas
    for (let contador = 0; contador < ListaTareas.length; contador++) {
        if (ListaTareas[contador].titulo.toLowerCase().includes(clave.toLowerCase())) {
            resultados.push(ListaTareas[contador]);
        }
    }
 
    // SI NO HAY RESULTADOS
    if (resultados.length === 0) {
        console.log("No se encontraron tareas con esa palabra clave ❓");
        return;
    }
 
    // SI HAY RESULTADOS, MOSTRAR IGUAL QUE EN "VER MIS TAREAS"
    console.log("RESULTADOS DE LA BUSQUEDA:");
    mostrarListaTareas(resultados);
};
 
// ==============================
// EJECUTAR MENU PRINCIPAL
// ==============================
menuPrincipal();
 