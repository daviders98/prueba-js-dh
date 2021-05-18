/*
    FORMATO DE CADA TAREA
        - titulo: string
        - status: string (
           * terminada
           * pendiente
         )
*/
const fs = require("fs");
exports.leerTareas = function () {
    /*
        En esta función debes leer y retornar las tareas registradas.
    */
   let tareasLeidas = fs.readFileSync("tareas.json","utf-8");
   return JSON.parse(tareasLeidas);
}

exports.agregarTarea = function (tarea) {
    /*
        Registra y guarda una nueva tarea.
    */
   let tareas = exports.leerTareas();
   tareas[tareas.length]=tarea;
   fs.writeFileSync("tareas.json",JSON.stringify(tareas));
}
exports.filtrarTareasPorEstado = function (estado) {
    /*
        En esta función debes de leer las tareas y retornar las que tengan el estado que se
        manda en el parametro.
    */
   let tareas = exports.leerTareas();
   return tareas.filter(function(elemento){
       if(elemento["status"]==estado){
           return elemento;
       }
   });
}