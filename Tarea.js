// FUNCION CONSTRUCTORA
function Tarea(titulo) {
    this.titulo = titulo;
    this.descripcion = "---";
    this.estado = "Pendiente"; // Pendiente, En curso, Terminada, Cancelada
    this.dificultad = "Facil"; // Facil, Medio, Dificil
    this.vencimiento = "Sin vencimiento";
    this.creacion = new Date(Date.now()).toLocaleString().split(',')[0]; // FORMATO DIA/MES/AÑO
    this.ultimaEdicion = this.creacion;
}

// METODOS ASIGNADOS AL PROTOTIPO
Tarea.prototype.cambiarTitulo = function(nuevoTitulo) {
    this.titulo = nuevoTitulo;
    this.actualizarEdicion();
};

Tarea.prototype.cambiarDescripcion = function(nuevaDescripcion) {
    this.descripcion = nuevaDescripcion;
    this.actualizarEdicion();
};

Tarea.prototype.cambiarEstado = function(nuevoEstado) {
    this.estado = nuevoEstado;
    this.actualizarEdicion();
};

Tarea.prototype.cambiarDificultad = function(nuevaDificultad) {
    this.dificultad = nuevaDificultad;
    this.actualizarEdicion();
};

Tarea.prototype.cambiarVencimiento = function(nuevoVencimiento) {
    this.vencimiento = nuevoVencimiento;
    this.actualizarEdicion();
};

Tarea.prototype.actualizarEdicion = function() {
    this.ultimaEdicion = new Date(Date.now()).toLocaleString().split(',')[0];
};

Tarea.prototype.mostrarTarea = function() {
    console.log("📒 " + this.titulo);
    console.log("   Descripcion: " + this.descripcion);
    console.log("   Estado: " + this.estado);

    process.stdout.write("   Dificultad: ");
    switch (this.dificultad) {
        case "Facil":
            console.log("🟩⬜⬜");
            break;
        case "Medio":
            console.log("🟨🟨⬜");
            break;
        case "Dificil":
            console.log("🟥🟥🟥");
            break;
    }
    console.log("   Fecha de vencimiento: " + this.vencimiento);
    console.log("   Fecha de creacion: " + this.creacion);
    console.log("   Fecha de ultima modificacion: " + this.ultimaEdicion);
};

module.exports = Tarea;