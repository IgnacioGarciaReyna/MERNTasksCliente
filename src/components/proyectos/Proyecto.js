import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const Proyecto = ({ proyecto }) => {
  //Extraer los proyectos de state inicial desde el context proyectoState
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => proyectoActual(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
