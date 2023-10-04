import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';

import PortafolioAcademico from './PortafolioAcademico';
import UnidadAcademica from './UnidadAcademica';
import ProyectosInvestigacion from './ProyectosInvestigacion';
import ProfesorDetalle from './ProfesorDetalle';

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/portafolio-academico">Portafolio Académico</Link>
            </li>
            <li>
              <Link to="/unidad-academica">Unidad Académica</Link>
            </li>
            <li>
              <Link to="/proyectos-investigacion">Proyectos de Investigación</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/portafolio-academico" />} />
          <Route path="/portafolio-academico" element={<PortafolioAcademico />} />
          <Route path="/unidad-academica" element={<UnidadAcademica />} />
          <Route path="/proyectos-investigacion" element={<ProyectosInvestigacion />} />
          <Route
  path="/profes/:id"
  element={<ProfesorDetalle />}
/>
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;
