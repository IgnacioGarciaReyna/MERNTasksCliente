import React, { Fragment, useState } from "react";

const NuevoProyecto = () => {
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

    //Agregar al state

    //Reiniciar el form
  };

  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        Nuevo proyecto
      </button>
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
    </Fragment>
  );
};

export default NuevoProyecto;
