import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';

import Nombre from './Nombre';
import UnidadAcademica from './UnidadAcademica';
import ProyectosInvestigacion from './ProyectosInvestigacion';
import ProfesorDetalle from './ProfesorDetalle';
import EditarProfesor from './EditarProfesor';

import './AppRouter.css';

function AppRouter() {
  const [selectedLink, setSelectedLink] = useState('/Nombre');

  const handleLinkClick = (to) => {
    setSelectedLink(to);
  };

  return (
    <Router>
      <div>
        <div className="header">
          <img src="/src/logo.svg" alt="Logo UTEM" />
          <div className="vertical-line"></div>
            <Link
              className={`title ${selectedLink === '/nombre' && 'selected'}`}
              to="/nombre"
              onClick={() => handleLinkClick('/nombre')}
            >
              Portafolio Académico
            </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link
                className={`text-link ${selectedLink === '/nombre' && 'selected'}`}
                to="/nombre"
                onClick={() => handleLinkClick('/nombre')}
              >
                Nombre
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
          <Route path="/" element={<Navigate to="/nombre" />} />
          <Route path="/nombre" element={<Nombre />} />
          <Route path="/unidad-academica" element={<UnidadAcademica />} />
          <Route path="/proyectos-investigacion" element={<ProyectosInvestigacion />} />
          <Route path="/profes/:id" element={<ProfesorDetalle />} />
          <Route path="/profes/edit/:id" element={<EditarProfesor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;
