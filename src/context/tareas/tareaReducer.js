import { TAREAS_PROYECTO } from "../../types";

export default (state, action) => {
  //Vamos a evaluar con un switch el action.type. Siempre tenés que tener un default para retornar el state.
  switch (action.type) {
    case TAREAS_PROYECTO:
      return {
        ...state,
        //A todo el listado de tareas lo iteramos y en el que el proyecto id es igual al del payloud se agrega
        tareasproyecto: state.tareas.filter(
          (tarea) => tarea.proyectoId === action.payload
        ),
      };

    default:
      return state;
  }
};
