import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profesores from '../mocks/profesores';
import departamentosPorUnidadAcademica from '../mocks/departamentosPorUnidadAcademica';

import './ProfesoresList.css';

function ProfesoresList({ nameUnit, selectedUnit, selectedDepartment }) {
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

  function convertirNombre(nameUnit) {
    const palabras = nameUnit.split(' ');

    const palabrasMayusculas = palabras.filter(palabra => palabra[0] === palabra[0].toUpperCase());

    if (palabrasMayusculas.length >= 3) {
      const primeraMayuscula = palabrasMayusculas[0][0] + '.';
      const segundaMayuscula = palabrasMayusculas[1][0] + palabrasMayusculas[1][palabrasMayusculas[1].length - 1];
      const terceraMayuscula = palabrasMayusculas[2][0] + palabrasMayusculas[2][palabrasMayusculas[2].length - 1];

      return `${primeraMayuscula} ${segundaMayuscula} ${terceraMayuscula}`;
    } else if (palabrasMayusculas.length === 2) {
      const primeraMayuscula = palabrasMayusculas[0][0] + '.';
      const segundaMayuscula = palabrasMayusculas[1];

      return `${primeraMayuscula} ${segundaMayuscula}`;
    } else {
      // Tratar el caso de menos de dos palabras en mayúsculas si es necesario
      return nameUnit; // Por ahora, devuelve el nombre original
    }
  }

  function formatearNombreCompleto(nombreCompleto) {
    const nombresApellidos = nombreCompleto.split(' ');
    const cantidadNombresApellidos = nombresApellidos.length;

    if (cantidadNombresApellidos >= 2) {
      const apellidos = nombresApellidos.slice(-2).join(' ');
      const nombres = nombresApellidos.slice(0, -2).join(' ');

      return `${apellidos}, ${nombres}`;
    } else {
      // Tratar el caso de menos de dos partes en el nombre si es necesario
      return nombreCompleto; // Por ahora, devuelve el nombre original
    }
  }

  return (
    <div>
      <div className="profesores-list">
        {filteredProfesores.map((profesor) => (
          <div key={profesor.id} className="profesor-card">
            <img src={`./../mocks/images/${profesor.imagen}`} alt={profesor.nombre} />
            <div className='data-profile'>
            <Link to={`/profes/${profesor.id}`}>
              {formatearNombreCompleto(profesor.nombre)}
            </Link>
            <br />
              <span> Correo: </span>
              <a href={`mailto:${profesor.correo}`}>{profesor.correo}</a>
              <br />
              <span> Repartición: </span>
              {convertirNombre(nameUnit)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfesoresList;
