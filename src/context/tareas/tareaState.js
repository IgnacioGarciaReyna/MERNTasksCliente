import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";

//Pasamos las props y creamos el state inicial
const TareaState = (props) => {
  const intialState = {
    tareas: [
      { id: 1, nombre: "Elegir Plataforma", estado: true, proyectoId: 1 },
      { id: 2, nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      { id: 3, nombre: "Elegir Pagos", estado: false, proyectoId: 3 },
      { id: 4, nombre: "Elegir Hosting", estado: true, proyectoId: 4 },
      { id: 1, nombre: "Elegir Plataforma", estado: true, proyectoId: 1 },
      { id: 2, nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      { id: 3, nombre: "Elegir Pagos", estado: false, proyectoId: 3 },
      { id: 1, nombre: "Elegir Plataforma", estado: true, proyectoId: 4 },
      { id: 2, nombre: "Elegir Colores", estado: false, proyectoId: 1 },
      { id: 3, nombre: "Elegir Pagos", estado: false, proyectoId: 2 },
      { id: 1, nombre: "Elegir Plataforma", estado: true, proyectoId: 3 },
      { id: 2, nombre: "Elegir Colores", estado: false, proyectoId: 4 },
      { id: 3, nombre: "Elegir Pagos", estado: false, proyectoId: 3 },
    ],
  };

  //Dispatch y state que vendran de useReducer.
  //UseReducer toma dos parametros, el reducer y el state inicial
  const [state, dispatch] = useReducer(TareaReducer, intialState);

  //Retornamos nuestro context
  //props.children son los otros componentes que son hijos de este
  //En el value le estamos pasando las tareas al provider, las tareas se obtienen de state.tareas porque sería initialState.tareas
  return (
    <TareaContext.Provider value={{ tareas: state.tareas }}>
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
