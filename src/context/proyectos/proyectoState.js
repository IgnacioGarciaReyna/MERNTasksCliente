import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import {
  AGREGAR_PROYECTO,
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
} from "../../types";

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
    errorformulario: false,
    proyecto: null,
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

  //Agregar nuevo proyecto
  const agregarProyecto = (proyecto) => {
    proyecto.id = uuid();

    //Insertar el proyecto en el state
    //El type del dispatch va a ser agregar proyecto
    //El payload que se le pasa para cambiar el state es el proyecto
    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto,
    });
  };

  //Validar foirmulario por errores
  const mostrarError = () => {
    //No toma payload
    dispatch({
      type: VALIDAR_FORMULARIO,
    });
  };

  //Selecciona el proyecto que el usuario dio click
  const proyectoActual = (proyectoId) => {
    dispatch({
      type: PROYECTO_ACTUAL,
      //El payload es el proyecto al que el usuario le da click, le pasamos el proyecto completo
      payload: proyectoId,
    });
  };

  return (
    <proyectoContext.Provider
      // El value es un objeto donde pasamos nuestro state inicial
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        errorformulario: state.errorformulario,
        proyecto: state.proyecto,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
        proyectoActual,
      }}
    >
      {/* props.children sirve para que lo que le vayamos a pasar, los diferentes componentes que sean hijos de este provider se pasen los datos a lo largo de los distintos componentes*/}
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
