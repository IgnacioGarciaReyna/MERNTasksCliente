import React, { useContext, useEffect } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import Proyecto from "./Proyecto";
import {
  CSSTransition,
  Transition,
  TransitionGroup,
} from "react-transition-group";

const ListadoProyectos = () => {
  //Extraer los proyectos de state inicial desde el context proyectoState
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;

  //Obtener proyectos cuando carga el componente
  //La dependencia es un arreglo vacío para que corra una sola vez cuando se crea el componente
  useEffect(() => {
    obtenerProyectos();
    //Quitar error
    // eslint-disable-next-line
  }, []);

  //Validar si hay proyectos
  if (proyectos.length === 0)
    return <p>No hay proyectos, comienza creando uno</p>;

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {proyectos.map((proyecto) => (
          <CSSTransition key={proyecto.id} timeout={200} classNames="proyecto">
            <Proyecto proyecto={proyecto} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListadoProyectos;
