import React, { Fragment, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import Tarea from "./Tareas";

const ListadoTareas = () => {
  //Extraer proyectos de state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //Validación. Si no hay ningún proyecto seleccionado
  if (!proyecto) return <h2>Selecciona un proyecto</h2>;

  //Array destructuring -> para extraer el proyecto actual
  //Extraemos la posición 0. Si hubiera mas elementos, se agregan mas separados con comas y se extraen esas otras posiciones
  const [proyectoActual] = proyecto;

  const tareasProyecto = [
    { id: 1, nombre: "Elegir Plataforma", estado: true },
    { id: 2, nombre: "Elegir Colores", estado: false },
    { id: 3, nombre: "Elegir Pagos", estado: false },
    { id: 4, nombre: "Elegir Hosting", estado: true },
  ];

  return (
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea key={tarea.id} tarea={tarea} />)
        )}
      </ul>

      <button type="button" className="btn btn-eliminar">
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListadoTareas;
