import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const FormTarea = () => {
  //Extraer si hay un proyecto activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //Validación. Si no hay ningún proyecto seleccionado
  if (!proyecto) return null;

  //Array destructuring -> para extraer el proyecto actual
  //Extraemos la posición 0. Si hubiera mas elementos, se agregan mas separados con comas y se extraen esas otras posiciones
  const [proyectoActual] = proyecto;

  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="nombre"
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Agregar Tarea"
          />
        </div>
      </form>
    </div>
  );
};

export default FormTarea;
