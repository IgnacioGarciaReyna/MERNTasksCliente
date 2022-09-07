import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const Proyecto = ({ proyecto }) => {
  //Extraer los proyectos de state inicial desde el context proyectoState
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;

  //Obtener la función del context de tarea
  //se escribe en plural para diferenciarlo del que importamos
  const tareasContext = useContext(tareaContext);
  const { obtenerTareas } = tareasContext;

  //Función para agregar el proyecto actual
  const seleccionarProyecto = (id) => {
    proyectoActual(id); //Fija el proyecto actual
    obtenerTareas(id); //Filtrar las tareas cuando se dé click
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        // Define el proyecto actual
        onClick={() => seleccionarProyecto(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
