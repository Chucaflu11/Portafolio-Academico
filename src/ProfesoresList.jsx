import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import profesores from '../mocks/profesores';
import departamentosPorUnidadAcademica from '../mocks/departamentosPorUnidadAcademica';

function ProfesoresList({ selectedUnit, selectedDepartment }) {
  const [filteredProfesores, setFilteredProfesores] = useState([]);

  useEffect(() => {
    if (selectedUnit === 'todas' || selectedDepartment === 'todas') {
      setFilteredProfesores(profesores);
    } else {
      const departamento = departamentosPorUnidadAcademica[selectedUnit].find(
        (dep) => dep.value === selectedDepartment
      );
      const filtered = profesores.filter((profesor) =>
        departamento.profesores.includes(profesor.id)
      );
      setFilteredProfesores(filtered);
    }
  }, [selectedUnit, selectedDepartment]);

  return (
    <div>
      <div className="profesores-list">
        {filteredProfesores.map((profesor) => (
          <div key={profesor.id} className="profesor-card">
            <img src={`./../mocks/${profesor.imagen}`} alt={profesor.nombre} />
            <div>{profesor.nombre}</div>
            <div>{profesor.correo}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfesoresList;
