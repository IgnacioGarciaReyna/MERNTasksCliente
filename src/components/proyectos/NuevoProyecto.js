import React, { Fragment, useContext, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
  //Obtener state del formulario
  //Dentro de los parentesis va el context que queremos utilizar
  const proyectosContext = useContext(proyectoContext);

  //Extraer el formulario (boolean) y mostrarFormulario (function)
  const {
    formulario,
    errorformulario,
    mostrarFormulario,
    agregarProyecto,
    mostrarError,
  } = proyectosContext;

  //State para proyecto
  //Es un objeto y no un string porque debemos darle un id para que no halla problema por dos proyectos con el mismo nombre. El id se dará con una librería
  const [proyecto, guardarProyecto] = useState({
    nombre: "",
    // id: "",
  });

  //Extraer nombre de proyecto
  const { nombre } = proyecto;

  //Leer el contenido del input
  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  //Cuando el usuario envía un proyecto
  const onSubmitProyecto = (e) => {
    e.preventDefault();

    //Validar el proyecto
    if (nombre === "") {
      mostrarError();
      return;
    }

    //Agregar al state
    agregarProyecto(proyecto);

    //Reiniciar el form
    guardarProyecto({
      nombre: "",
    });
  };

  //Mostrar formulario
  //Esta es una de las ventajas de usar context y reducer, en vez de estar pasando props por varios componentes podes consumir datos como funciones de forma centralizada
  const onClickFormulario = () => {
    mostrarFormulario();
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={onClickFormulario}
      >
        Nuevo proyecto
      </button>
      {formulario ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nombre"
            value={nombre}
            onChange={onChangeProyecto}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
        </form>
      ) : null}

      {errorformulario ? (
        <p className="mensaje error">El nombre es obligatorio</p>
      ) : null}
    </Fragment>
  );
};

export default NuevoProyecto;
