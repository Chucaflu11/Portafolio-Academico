import React, { useState, useEffect } from 'react';
import ProfesoresList from './ProfesoresList';
import Dropdown from './Dropdown';

import './ProyectosInvestigacion.css';

function ProyectosInvestigacion() {
  const [lineasInvestigacion, setLineasInvestigacion] = useState([]);
  const [profesores, setProfesores] = useState([]);
  const [selectedLinea, setSelectedLinea] = useState('');
  const [searchClicked, setSearchClicked] = useState(false);

  useEffect(() => {
    // Obtener líneas de investigación desde el backend
    fetch('http://localhost:3000/api/linea-investigacion')
      .then(response => response.json())
      .then(data => setLineasInvestigacion(data))
      .catch(error => console.error('Error fetching lineasInvestigacion:', error));

    // Obtener información de profesores desde el backend
    fetch('http://localhost:3000/api/profesores')
      .then(response => response.json())
      .then(data => setProfesores(data))
      .catch(error => console.error('Error fetching profesores:', error));
  }, []);

  const handleLineaChange = (selectedOption) => {
    setSelectedLinea(selectedOption);
    setSearchClicked(false); // Reiniciar búsqueda al cambiar la selección
  };

  const handleSearchClick = () => {
    setSearchClicked(true);
  };

  return (
    <div>
      <div className="inputs">
        <Dropdown
          data={lineasInvestigacion}
          selectedValue={selectedLinea}
          onChange={handleLineaChange}
          label="Linea de investigación"
        />

        <button className='search-btn' onClick={handleSearchClick}>Buscar</button>
      </div>

      {/* Renderizar ProfesoresList solo si se ha seleccionado una unidad y un departamento */}
      {searchClicked && selectedLinea !== 'todas' && (
        <div>
          <ProfesoresList linea_investigacion = {selectedLinea} />
       </div>
      )}

    </div>
  );
}

export default ProyectosInvestigacion;
