import React, { useReducer } from "react";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";

const ProyectoState = (props) => {
  const initialState = {
    formulario: false,
  };

  //Dispatch para ejecutar las acciones
  //useReducer se utiliza en lugar del reducer de redux
  //useReducer se utiliza similar al useState, se aplica array distructuring y te retorna el state y las funciones de dispatch, dispatch es para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  //Serie de funciones para el CRUD

  return (
    <proyectoContext.Provider
      // El value es un objeto donde pasamos nuestro state inicial, que en este caso es "formulario"
      value={{
        nuevo: state.formulario,
      }}
    >
      {/* props.children sirve para que lo que le vayamos a pasar, los diferentes componentes que sean hijos de este provider se pasen los datos a lo largo de los distintos componentes*/}
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
