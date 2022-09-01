import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import Proyecto from "./Proyecto";

const ListadoProyectos = () => {
  //Extraer los proyectos de state inicial desde el context proyectoState
  const proyectosContext = useContext(proyectoContext);
  const { proyectos } = proyectosContext;

  //Validar si hay proyectos
  if (proyectos.length === 0) return null;

  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <Proyecto key={proyecto.id} proyecto={proyecto} />
      ))}
    </ul>
  );
};

export default ListadoProyectos;
