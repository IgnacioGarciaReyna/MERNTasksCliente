//Cuando se detectan el de proyectoState.js y este como iguales, se ejecuta la función
//Lo único que hace el reducer es cambiar el state
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case FORMULARIO_PROYECTO:
      //Tomamos una copia del state actual y le agregamos el nuevo valor del formulario
      return {
        ...state,
        formulario: true,
      };
    case OBTENER_PROYECTOS:
      return {
        ...state,
        //Cuando llamemos esta función lo que tengamos como payload se va a asignar al state
        proyectos: action.payload,
      };
    case AGREGAR_PROYECTO:
      return {
        //Dentro de un arreglo colocamos el state con los proyectos y el nuevo proyecto que viene en el payload
        //El payload viene siendo un objeto pero va a agregar al arreglo de objetos que ya tenemos
        //Una vez que agrego el proyecto pongo formulario en false, para que se cierre la ventana de agregar proyecto (reiniciar el form se hace en nuevoProyecto.js)
        ...state,
        proyectos: [...state.proyectos, action.payload],
        formulario: false,
        errorformulario: false,
      };
    case VALIDAR_FORMULARIO:
      return {
        ...state,
        errorformulario: true,
      };
    case PROYECTO_ACTUAL:
      return {
        ...state,
        //En el filter iteramos, por cada proyecto compararemos el id del proyecto con el id del payload
        proyecto: state.proyectos.filter(proyecto => proyecto.id === action.payload)
      };

    default:
      return state;
  }
};
