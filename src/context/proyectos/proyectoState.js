import React, { useReducer } from "react";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from "../../types";



const ProyectoState = (props) => {

  const proyectos = [
    { id: 1, nombre: "Tienda Virtual" },
    { id: 2, nombre: "Intranet" },
    { id: 3, nombre: "Diseño de sitio web" },
    { id: 4, nombre: "MERN" },
  ];

  const initialState = {
    //Arreglo escrito a mano
    proyectos: [],
    formulario: false,
  };

  //Dispatch para ejecutar las acciones
  //useReducer se utiliza en lugar del reducer de redux
  //useReducer se utiliza similar al useState, se aplica array distructuring y te retorna el state y las funciones de dispatch, dispatch es para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  //Serie de funciones para el CRUD

  //Función que va a mostrar el formulari
  //paylot similar a redux.
  //Acá se vuelve importante el dispatch
  //Para ejecutar esta función hay que pasarla en el value
  const mostrarFormulario = () => {
    // El type que va evaluar este switch va a ser FORMULARIO_PROYECTO
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  //Obtener los proyectos
  //Siempre lo que tome como parametro la función va a ser el payloud
  //Se pasa el array de proyectos como parte del payload
  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos,
    });
  };

  return (
    <proyectoContext.Provider
      // El value es un objeto donde pasamos nuestro state inicial, que en este caso es "formulario"
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        mostrarFormulario,
        obtenerProyectos
      }}
    >
      {/* props.children sirve para que lo que le vayamos a pasar, los diferentes componentes que sean hijos de este provider se pasen los datos a lo largo de los distintos componentes*/}
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
