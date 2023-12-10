import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './ProfesoresList.css';

function ProfesoresList({ selectedUnit, selectedDepartment }) {
  const [profesores, setProfesores] = useState([]);
  const [filteredProfesores, setFilteredProfesores] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState(null);

  useEffect(() => {
    // Hacer la petición para obtener la lista completa de profesores
    fetch('http://localhost:3000/api/profesores')
      .then(response => response.json())
      .then(data => {
        setProfesores(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  useEffect(() => {
    // Filtrar los profesores según la unidad académica y el departamento seleccionados
    if (selectedUnit === 'todas' || selectedDepartment === 'todas') {
      setFilteredProfesores(profesores);
    } else {
      const filtered = profesores.filter((profesor) =>
        profesor.facultad === selectedUnit && profesor.departamento === selectedDepartment
      );
      setFilteredProfesores(filtered);
    }
  }, [selectedUnit, selectedDepartment, profesores]);

  // Resto del código para el manejo de letras, etc.

  return (
    <div>
      {/* Contenido del componente, igual al código anterior */}
      <div className="results">
        <h2> Resultados de búsqueda</h2>
        <p>Su búsqueda de académicos arrojó {filteredProfesores.length} resultados organizados alfabéticamente por apellido</p>

        {/* Resto del código para las letras, etc. */}

      </div>
      <div className="profesores-list">
        {filteredProfesores.map((profesor) => (
          <div key={profesor.id_profesor} className="profesor-card">
            {/* Ajustar la ruta de la imagen según la estructura de tu servidor */}
            <img src={profesor.imagen} alt={profesor.nombre_profesor} />
            <div className='data-profile'>
              <Link to={`/profes/${profesor.id_profesor}`}>
                {profesor.nombre_profesor}
              </Link>
              <br />
              <span> Correo: </span>
              <a href={`mailto:${profesor.correo}`}>{profesor.correo}</a>
              <br />
              <span> Repartición: </span>
              {profesor.facultad}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfesoresList;
