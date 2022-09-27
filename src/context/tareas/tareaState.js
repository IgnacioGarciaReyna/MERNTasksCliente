import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";

import {
  AGREGAR_TAREA,
  ELIMINAR_TAREA,
  TAREAS_PROYECTO,
  VALIDAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA,
} from "../../types";

//Pasamos las props y creamos el state inicial
const TareaState = (props) => {
  const intialState = {
    //Todas las tareas
    tareas: [
      { id: 1, nombre: "Elegir Plataforma", estado: true, proyectoId: 1 },
      { id: 2, nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      { id: 3, nombre: "Elegir Pagos", estado: false, proyectoId: 3 },
      { id: 4, nombre: "Elegir Hosting", estado: true, proyectoId: 4 },
      { id: 5, nombre: "Elegir Plataforma", estado: true, proyectoId: 1 },
      { id: 6, nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      { id: 7, nombre: "Elegir Pagos", estado: false, proyectoId: 3 },
      { id: 8, nombre: "Elegir Plataforma", estado: true, proyectoId: 4 },
      { id: 9, nombre: "Elegir Colores", estado: false, proyectoId: 1 },
      { id: 10, nombre: "Elegir Pagos", estado: false, proyectoId: 2 },
      { id: 11, nombre: "Elegir Plataforma", estado: true, proyectoId: 3 },
      { id: 12, nombre: "Elegir Colores", estado: false, proyectoId: 4 },
      { id: 13, nombre: "Elegir Pagos", estado: false, proyectoId: 3 },
    ],
    //Tareas del proyecto
    //Al principio no va a haber ninguna, porque el usuario tiene que seleccionar alguno
    tareasproyecto: null,
    errortarea: false,
    tareaseleccionada: null,
  };

  //Dispatch y state que vendran de useReducer.
  //UseReducer toma dos parametros, el reducer y el state inicial
  const [state, dispatch] = useReducer(TareaReducer, intialState);

  //Creación de finciones

  //Obtención de las tareas de un proyecto especifico

  const obtenerTareas = (proyectoId) => {
    //Esta función va a estar disponible en el context y la vamos a usar en proyecto.js
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  //Agregar una tarea al proyecto seleccionado
  //Toma y pasa una tarea completa (objeto) al state tareaReducer
  const agregarTarea = (tarea) => {
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };

  //Valida y muestra un error en caso de que sea necesario
  const validarTarea = () => {
    dispatch({
      //No toma ningún payload
      type: VALIDAR_TAREA,
    });
  };

  //Eliminar tarea por id
  const eliminarTarea = (id) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id,
    });
  };

  //Cambia el estado de cada tarea
  //Una vez que presionemos un botón le pasamos la tarea entera al context
  const cambiarEstadoTarea = (tarea) => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea,
    });
  };

  //Extrae una tarea para edición
  const guardarTareaActual = (tarea) => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea,
    });
  };

  //Edita o modifica una tarea
  const actualizarTarea = (tarea) => {
    dispatch({
      type: ACTUALIZAR_TAREA,
      payload: tarea,
    });
  };

  //Retornamos nuestro context
  //props.children son los otros componentes que son hijos de este
  //En el value le estamos pasando las tareas al provider, las tareas se obtienen de state.tareas porque sería initialState.tareas
  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        tareaseleccionada: state.tareaseleccionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
        guardarTareaActual,
        actualizarTarea,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
