import { AGREGAR_TAREA, TAREAS_PROYECTO } from "../../types";

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
    case AGREGAR_TAREA:
      return {
        ...state,
        //No se agregan en tareasproyecto, se agregan en el state principal
        //vamos a crear un arreglo nuevo de tareas con las que ya tenemos mas la nueva
        tareas: [...state.tareas, action.payload],
      };

    default:
      return state;
  }
};
