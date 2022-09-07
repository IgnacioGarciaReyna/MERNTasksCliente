import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";

//Pasamos las props y creamos el state inicial
const TareaState = (props) => {
  const intialState = {
    tareas: [],
  };

  //Dispatch y state que vendran de useReducer.
  //UseReducer toma dos parametros, el reducer y el state inicial
  const [state, dispatch] = useReducer(TareaReducer, intialState);

  //Retornamos nuestro context
  //props.children son los otros componentes que son hijos de este
  return <TareaContext.Provider>{props.children}</TareaContext.Provider>;
};


export default TareaState;
