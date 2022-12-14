import React from "react";
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Proyectos from "./components/proyectos/Proyectos";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProyectoState from "./context/proyectos/proyectoState";
import TareaState from "./context/tareas/tareaState";

function App() {
  //Multiples context en la aplicación es algo que se puede hacer, no hay problemas
  return (
    <ProyectoState>
      <TareaState>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/nueva-cuenta" element={<NuevaCuenta />} />
            <Route path="/proyectos" element={<Proyectos />} />
          </Routes>
        </Router>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
