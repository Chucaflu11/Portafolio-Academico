import React, { useState } from 'react';
import Dropdown from './Dropdown';
import unidadesAcademicas from '../mocks/unidadesAcademicas';
import departamentosPorUnidadAcademica from '../mocks/departamentosPorUnidadAcademica';
import ProfesoresList from './ProfesoresList';

function UnidadAcademica() {
  const [selectedUnit, setSelectedUnit] = useState('todas');
  const [selectedDepartment, setSelectedDepartment] = useState('todas');

  const handleUnitChange = (value) => {
    setSelectedUnit(value);
    setSelectedDepartment('todas'); // Reiniciar el departamento al cambiar la unidad académica
  };

  const handleDepartmentChange = (value) => {
    setSelectedDepartment(value);
  };

  return (
    <div>
      <Dropdown
        data={unidadesAcademicas}
        selectedValue={selectedUnit}
        onChange={handleUnitChange}
        label="Unidad académica"
      />

      <Dropdown
        data={departamentosPorUnidadAcademica[selectedUnit]}
        selectedValue={selectedDepartment}
        onChange={handleDepartmentChange}
        label="Departamento"
      />

      {/* Renderizar ProfesoresList solo si se ha seleccionado una unidad y un departamento */}
      {selectedUnit !== 'todas' && selectedDepartment !== 'todas' && (
        <ProfesoresList selectedUnit={selectedUnit} selectedDepartment={selectedDepartment} />
      )}
    </div>
  );
}

export default UnidadAcademica;
