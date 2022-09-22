import React, { useContext, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const FormTarea = () => {
  //Extraer si hay un proyecto activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //Obtener la función del context de tarea
  //se escribe en plural para diferenciarlo del que importamos
  const tareasContext = useContext(tareaContext);
  const { errortarea, agregarTarea, validarTarea, obtenerTareas } =
    tareasContext;

  //State del formulario
  const [tarea, guardarTarea] = useState({
    nombre: "",
  });

  //Extraer el nombre del proyecto
  const { nombre } = tarea;

  //Validación. Si no hay ningún proyecto seleccionado
  if (!proyecto) return null;

  //Array destructuring -> para extraer el proyecto actual
  //Extraemos la posición 0. Si hubiera mas elementos, se agregan mas separados con comas y se extraen esas otras posiciones
  const [proyectoActual] = proyecto;

  //Leer los valores del formulario
  const haldleChange = (e) => {
    guardarTarea({
      //Obtenemos una copia de la tarea y le pasamos lo demas
      //Se hace este código para que si en el futuro tengo que agregar otro campo no tengo que modificar este código
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  //Función onsubmit
  const onSubmit = (e) => {
    e.preventDefault();

    //Validar
    if (nombre.trim() === "") {
      validarTarea();
      return;
    }

    //Pasar la validación

    //Agregar la nueva tarea al state principal
    //El proyectoId indica a que proyecto pertenece
    //El estado es false porque todavía no se realizó la tarea
    tarea.proyectoId = proyectoActual.id;
    tarea.estado = false;
    agregarTarea(tarea);

    //Obtener y filtrar las tareas del proyecto actual
    obtenerTareas(proyectoActual.id);

    //Reiniciar el form
    guardarTarea({
      nombre: "",
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="nombre"
            value={nombre} //Cuando se reinicia el form se reinicia el nombre
            onChange={haldleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Agregar Tarea"
          />
        </div>
      </form>
      {errortarea ? (
        <p className="mensaje error">El nombre de la tarea es obligatorio</p>
      ) : null}
    </div>
  );
};

export default FormTarea;
