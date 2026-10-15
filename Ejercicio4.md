# Explicacion de caracteristicas de POO (Ejercicio 3)

## -Caracteristicas Utilizadas e Implementadas

### Abstraccion
Se represento el concepto de una tarea mediante la funcion constructora `Tarea`. Se identificaron unicamente las propiedades esenciales (`titulo`, `descripcion`, `estado`, `dificultad`, `vencimiento`, `creacion`, `ultimaEdicion`) y los metodos necesarios para modificar y visualizar la informacion (`cambiarTitulo()`, `cambiarEstado()`, `mostrarTarea()`, etc.), omitiendo detalles no relevantes.

### Encapsulamiento
Se agruparon las propiedades del objeto dentro de la funcion constructora `Tarea` y sus metodos de comportamiento dentro del objeto prototipo `Tarea.prototype`. De esta manera, el estado y las operaciones que lo manipulan forman una unidad coherente.

### Modularidad
El sistema se organizo en archivos independientes con responsabilidades especificas (`Tarea.js`, `agregarTarea.js`, `Listar_Editar.js` y `MenuLista.js`), vinculados entre si a traves de `require` y `module.exports`.

---

## -Caracteristicas no usadas

### Herencia
En este ejercicio, al trabajar con un unico tipo de entidad `Tarea`, no fue necesario definir jerarquias de prototipos o extender funcionalidades hacia otros objetos.

### Polimorfismo
Al no existir diferentes tipos de objetos compartiendo un mismo metodo o mensaje, no se presentaron escenarios donde fuera necesario implementar comportamientos polimorficos.