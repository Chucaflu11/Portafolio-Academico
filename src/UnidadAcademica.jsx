import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import ProfesoresList from './ProfesoresList';

import './UnidadAcademica.css';

function UnidadAcademica() {
  const [facultades, setFacultades] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);
  const [selectedUnit, setSelectedUnit] = useState('todas');
  const [selectedDepartment, setSelectedDepartment] = useState('todas');
  const [selectedUnitLabel, setSelectedUnitLabel] = useState('');
  const [searchClicked, setSearchClicked] = useState(false);

  useEffect(() => {
    // Hacer la petición para obtener las facultades y departamentos
    fetch('http://localhost:3000/api/facultades-departamentos')
      .then(response => response.json())
      .then(data => {
        setFacultades(data.facultades);
        setDepartamentos(data.departamentos);
      })
      .catch(error => console.error('Error:', error));
  }, []); // El segundo parámetro [] significa que se ejecutará solo una vez al montar el componente

  const handleUnitChange = (value, label) => {
    setSelectedUnit(value);
    setSelectedUnitLabel(label);
    setSelectedDepartment('todas'); // Reiniciar el departamento al cambiar la unidad académica
  };

  const handleDepartmentChange = (value) => {
    setSelectedDepartment(value);
  };

  const handleSearchClick = () => {
    setSearchClicked(true);
  };

  return (
    <div>
      <div className="inputs">
        {/* Usar las listas obtenidas de la base de datos */}
        <Dropdown
          data={facultades}
          selectedValue={selectedUnit}
          onChange={handleUnitChange}
          label="Unidad académica"
        />

        {/* Usar las listas obtenidas de la base de datos */}
        <Dropdown
          data={departamentos || []}
          selectedValue={selectedDepartment}
          onChange={handleDepartmentChange}
          label="Departamento o escuela"
        />

        <button className='search-btn' onClick={handleSearchClick}>Buscar</button>
      </div>

      {/* Renderizar ProfesoresList solo si se ha seleccionado una unidad y un departamento */}
      {searchClicked && selectedUnit !== 'todas' && selectedDepartment !== 'todas' && (
        <div>
          <ProfesoresList nameUnit={selectedUnitLabel} selectedUnit={selectedUnit} selectedDepartment={selectedDepartment} />
        </div>
      )}
    </div>
  );
}

export default UnidadAcademica;
