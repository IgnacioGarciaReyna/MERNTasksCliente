import {
  AGREGAR_TAREA,
  ELIMINAR_TAREA,
  TAREAS_PROYECTO,
  VALIDAR_TAREA,
  ESTADO_TAREA,
} from "../../types";

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
        tareas: [action.payload, ...state.tareas],
        errortarea: false,
      };
    case VALIDAR_TAREA:
      return {
        ...state,
        errortarea: true,
      };
    case ELIMINAR_TAREA:
      return {
        ...state,
        tareas: state.tareas.filter((tarea) => tarea.id !== action.payload),
      };
    case ESTADO_TAREA:
      return {
        ...state,
        //Mapeamos todas las tareas, si no cumple la condición retornamos la tarea como estaba, si coincide la modificamos con la nueva tarea
        tareas: state.tareasproyecto.map((tarea) =>
          tarea.id === action.payload.id ? action.payload : tarea
        ),
      };
    default:
      return state;
  }
};
