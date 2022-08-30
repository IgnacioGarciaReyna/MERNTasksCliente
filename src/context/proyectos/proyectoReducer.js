//Cuando se detectan el de proyectoState.js y este como iguales, se ejecuta la función
//Lo único que hace el reducer es cambiar el state
import { FORMULARIO_PROYECTO } from "../../types";



export default (state, action) => {
  switch (action.type) {
    case FORMULARIO_PROYECTO:
      //Tomamos una copia del state actual y le agregamos el nuevo valor del formulario
      return {
        ...state,
        formulario: true
      }
    default:
      return state;
  }
};
