import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';

import PortafolioAcademico from './PortafolioAcademico';
import UnidadAcademica from './UnidadAcademica';
import ProyectosInvestigacion from './ProyectosInvestigacion';
import ProfesorDetalle from './ProfesorDetalle';

import './AppRouter.css';

function AppRouter() {
  const [selectedLink, setSelectedLink] = useState('/portafolio-academico');

  const handleLinkClick = (to) => {
    setSelectedLink(to);
  };

  return (
    <Router>
      <div>
        <div className="header">
          <img src='/src/logo.png' alt="Logo UTEM" />
          <div className="vertical-line"></div>
          <h1>Portafolio Académico</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link
                className={`text-link ${selectedLink === '/portafolio-academico' && 'selected'}`}
                to="/portafolio-academico"
                onClick={() => handleLinkClick('/portafolio-academico')}
              >
                Portafolio Académico
              </Link>
            </li>
            <li>
              <Link
                className={`text-link ${selectedLink === '/unidad-academica' && 'selected'}`}
                to="/unidad-academica"
                onClick={() => handleLinkClick('/unidad-academica')}
              >
                Unidad Académica
              </Link>
            </li>
            <li>
              <Link
                className={`text-link ${selectedLink === '/proyectos-investigacion' && 'selected'}`}
                to="/proyectos-investigacion"
                onClick={() => handleLinkClick('/proyectos-investigacion')}
              >
                Proyectos de Investigación
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/portafolio-academico" />} />
          <Route path="/portafolio-academico" element={<PortafolioAcademico />} />
          <Route path="/unidad-academica" element={<UnidadAcademica />} />
          <Route path="/proyectos-investigacion" element={<ProyectosInvestigacion />} />
          <Route path="/profes/:id" element={<ProfesorDetalle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;
